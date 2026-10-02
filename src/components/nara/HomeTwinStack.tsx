"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { NARA_HOME_TWIN, type NaraHomeTwinLayer } from "@/data/nara";
import { NARA_EASE as EASE, NARA_INSTANT } from "@/components/nara/useNaraReveal";

export type HomeTwinLayerId = NaraHomeTwinLayer["id"];

/* Projection: a low-elevation axonometric with slight depth falloff per layer. */
const VIEW_W = 640;
const VIEW_H = 640;
const CX = 316;
const COS = 0.9;
const SIN = 0.37;
const TOP_Y = 150;
const GAP = 112;
const HALF = 140;
const DEPTH_FALLOFF = 0.035;
const LEADER_END = VIEW_W;

const INK = "#3f4640";
const GREEN = "#2c5641";
const AMBER = "#c98b2a";
const IVORY = "#f6f0e4";

type Point = [number, number];

function layerY(index: number) {
  return TOP_Y + index * GAP;
}

function layerScale(index: number) {
  return 1 - index * DEPTH_FALLOFF;
}

function project(index: number, u: number, v: number, z = 0): Point {
  const s = layerScale(index);
  return [CX + (u - v) * s * COS, layerY(index) + (u + v) * s * SIN - z];
}

function pts(list: Point[]) {
  return list.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
}

function rightCorner(index: number): Point {
  return project(index, HALF, -HALF);
}

/** Vertical position of each layer's right corner, as a % of the model height. */
export function layerTopPercent(index: number) {
  return (rightCorner(index)[1] / VIEW_H) * 100;
}

/* Shared anchors: the same physical points appear on every layer. */
const ANCHORS: Record<"water" | "electrical" | "hvac", [number, number]> = {
  water: [-20, 118],
  electrical: [118, -20],
  hvac: [71, 18],
};

const FOOTPRINT: [number, number][] = [
  [-95, -5],
  [-55, -5],
  [-55, -35],
  [45, -35],
  [45, 38],
  [-95, 38],
];

function Footprint({ index, stroke, opacity }: { index: number; stroke: string; opacity: number }) {
  return (
    <polygon
      points={pts(FOOTPRINT.map(([u, v]) => project(index, u, v)))}
      fill="none"
      stroke={stroke}
      strokeWidth={0.7}
      opacity={opacity}
    />
  );
}

/* ---------- Slab ---------- */

function Slab({ index, dark = false }: { index: number; dark?: boolean }) {
  const h = HALF;
  const t = dark ? 14 : 6;
  const A = project(index, -h, -h);
  const B = project(index, h, -h);
  const C = project(index, h, h);
  const D = project(index, -h, h);
  const down = (p: Point): Point => [p[0], p[1] + t];

  return (
    <g>
      <polygon
        points={pts([D, C, B, down(B), down(C), down(D)].map(([x, y]) => [x, y + 26] as Point))}
        fill="#2a2f2b"
        opacity={dark ? 0.2 : 0.09}
        filter="url(#twin-shadow)"
      />
      <polygon
        points={pts([C, B, down(B), down(C)])}
        fill={dark ? "url(#twin-side-dark-r)" : "url(#twin-side-r)"}
      />
      <polygon
        points={pts([D, C, down(C), down(D)])}
        fill={dark ? "url(#twin-side-dark-l)" : "url(#twin-side-l)"}
      />
      <polygon
        points={pts([A, B, C, D])}
        fill={dark ? "url(#twin-top-dark)" : "url(#twin-top)"}
        stroke={dark ? "#1c2a22" : "#bdb3a2"}
        strokeWidth={0.6}
        strokeOpacity={dark ? 1 : 0.7}
      />
      <polyline
        points={pts([D, C, B])}
        fill="none"
        stroke={dark ? "#5f7d6c" : "#ffffff"}
        strokeWidth={0.9}
        opacity={dark ? 0.7 : 0.9}
      />
    </g>
  );
}

/* ---------- Systems: architectural massing + system traces ---------- */

type Box = { u: [number, number]; v: [number, number]; z: [number, number] };

function Mass({ box }: { box: Box }) {
  const [u0, u1] = box.u;
  const [v0, v1] = box.v;
  const [z0, z1] = box.z;
  const p = (u: number, v: number, z: number) => project(0, u, v, z);
  return (
    <g stroke={INK} strokeWidth={0.55} strokeOpacity={0.55} strokeLinejoin="round">
      <polygon fill="#d6cfc2" points={pts([p(u1, v0, z0), p(u1, v1, z0), p(u1, v1, z1), p(u1, v0, z1)])} />
      <polygon fill="#e8e2d6" points={pts([p(u0, v1, z0), p(u1, v1, z0), p(u1, v1, z1), p(u0, v1, z1)])} />
      <polygon fill="#faf7f1" points={pts([p(u0, v0, z1), p(u1, v0, z1), p(u1, v1, z1), p(u0, v1, z1)])} />
    </g>
  );
}

function GlazingV({ v, u, z }: { v: number; u: [number, number]; z: [number, number] }) {
  const p = (uu: number, zz: number) => project(0, uu, v, zz);
  return (
    <polygon
      fill="#323a35"
      fillOpacity={0.5}
      points={pts([p(u[0], z[0]), p(u[1], z[0]), p(u[1], z[1]), p(u[0], z[1])])}
    />
  );
}

function GlazingU({ u, v, z }: { u: number; v: [number, number]; z: [number, number] }) {
  const p = (vv: number, zz: number) => project(0, u, vv, zz);
  return (
    <polygon
      fill="#28302b"
      fillOpacity={0.6}
      points={pts([p(v[0], z[0]), p(v[1], z[0]), p(v[1], z[1]), p(v[0], z[1])])}
    />
  );
}

function SystemLabel({ at, text, anchor = "start" }: { at: Point; text: string; anchor?: "start" | "end" }) {
  return (
    <text
      x={at[0]}
      y={at[1]}
      textAnchor={anchor}
      className="hidden fill-nara-muted md:inline"
      style={{ fontSize: 8.5, letterSpacing: "0.16em", fontWeight: 600 }}
    >
      {text}
    </text>
  );
}

function SystemsLayer() {
  const p = (u: number, v: number, z = 0) => project(0, u, v, z);
  const [wu] = ANCHORS.water;
  const [, ev] = ANCHORS.electrical;
  const [hu, hv] = ANCHORS.hvac;
  const waterEdge = p(wu, HALF - 6);
  const elecEdge = p(HALF - 6, ev);

  return (
    <g>
      <Footprint index={0} stroke={INK} opacity={0.18} />

      <g fill="none" stroke={GREEN} strokeWidth={0.9} strokeLinecap="round">
        <polyline points={pts([waterEdge, p(wu, 38)])} />
        <polyline points={pts([elecEdge, p(45, ev)])} />
        <polyline points={pts([p(hu - 11, hv), p(45, hv)])} />
      </g>
      <g fill={GREEN}>
        <rect x={waterEdge[0] - 2} y={waterEdge[1] - 2} width={4} height={4} />
        <rect x={elecEdge[0] - 2} y={elecEdge[1] - 2} width={4} height={4} />
      </g>

      <Mass box={{ u: [-95, -55], v: [-5, 38], z: [0, 26] }} />
      <GlazingV v={38} u={[-89, -61]} z={[11, 17]} />
      <Mass box={{ u: [-55, 45], v: [-35, 38], z: [0, 50] }} />
      <GlazingV v={38} u={[-47, 37]} z={[21, 31]} />
      <GlazingU u={45} v={[-27, 30]} z={[21, 31]} />
      <Mass box={{ u: [-35, 64], v: [-45, 24], z: [50, 94] }} />
      <GlazingV v={24} u={[-27, 56]} z={[66, 78]} />
      <GlazingU u={64} v={[-37, 16]} z={[66, 78]} />
      <Mass box={{ u: [-40, 68], v: [-49, 28], z: [94, 97] }} />
      <Mass box={{ u: [hu - 11, hu + 11], v: [hv - 10, hv + 10], z: [0, 11] }} />

      <SystemLabel at={[waterEdge[0] - 8, waterEdge[1] + 14]} text="WATER" anchor="end" />
      <SystemLabel at={[elecEdge[0] + 8, elecEdge[1] + 12]} text="ELECTRICAL" />
      <g className="hidden md:inline">
        <line
          x1={p(hu + 11, hv + 10)[0]}
          y1={p(hu + 11, hv + 10)[1]}
          x2={p(hu + 40, hv + 52)[0]}
          y2={p(hu + 40, hv + 52)[1]}
          stroke={INK}
          strokeWidth={0.5}
          opacity={0.5}
        />
      </g>
      <SystemLabel at={[p(hu + 40, hv + 52)[0] + 5, p(hu + 40, hv + 52)[1] + 3]} text="HVAC" />
    </g>
  );
}

/* ---------- State: sparse current-state markers ---------- */

const STATE_POINTS: { at: [number, number]; changing?: boolean; ring?: boolean }[] = [
  { at: ANCHORS.water, ring: true },
  { at: ANCHORS.electrical },
  { at: ANCHORS.hvac, changing: true },
  { at: [0, 48] },
  { at: [-48, 72], ring: true },
  { at: [42, 6] },
];

function StateLayer() {
  const ringRx = 8 * COS;
  const ringRy = 8 * SIN;
  return (
    <g>
      <Footprint index={1} stroke={INK} opacity={0.22} />
      {STATE_POINTS.map(({ at, changing, ring }) => {
        const [x, y] = project(1, at[0], at[1]);
        const color = changing ? AMBER : INK;
        return (
          <g key={`${at[0]}:${at[1]}`}>
            <line x1={x} y1={y} x2={x} y2={y - 11} stroke={color} strokeWidth={0.7} opacity={0.7} />
            <line x1={x - 2.5} y1={y - 11} x2={x + 2.5} y2={y - 11} stroke={color} strokeWidth={0.7} opacity={0.7} />
            {(ring || changing) && (
              <ellipse cx={x} cy={y} rx={ringRx * 1.6} ry={ringRy * 1.6} fill="none" stroke={color} strokeWidth={0.6} opacity={0.55} />
            )}
            <ellipse cx={x} cy={y} rx={2.6} ry={1.4} fill={color} />
          </g>
        );
      })}
    </g>
  );
}

/* ---------- History: temporal lanes, events, relationships ---------- */

const LANES = [
  { v: 52, from: -40 },
  { v: 86, from: -74 },
  { v: 118, from: -106 },
];
const EVENTS: { lane: number; u: number; major?: boolean }[] = [
  { lane: 0, u: -18 },
  { lane: 0, u: 40, major: true },
  { lane: 0, u: 96 },
  { lane: 1, u: -50 },
  { lane: 1, u: 8 },
  { lane: 1, u: 70, major: true },
  { lane: 2, u: -84 },
  { lane: 2, u: -20, major: true },
  { lane: 2, u: 52 },
  { lane: 2, u: 108 },
];
const RELATIONS: [number, number][] = [
  [7, 4],
  [4, 1],
  [5, 2],
  [8, 5],
];
const NOW_U = 124;

function HistoryLayer() {
  const age = (u: number) => 0.3 + 0.7 * ((u + HALF) / (2 * HALF));
  const eventPoint = (i: number) => {
    const e = EVENTS[i];
    return project(2, e.u, LANES[e.lane].v);
  };
  return (
    <g>
      <Footprint index={2} stroke={INK} opacity={0.18} />
      {LANES.map((lane) => (
        <line
          key={lane.v}
          x1={project(2, lane.from, lane.v)[0]}
          y1={project(2, lane.from, lane.v)[1]}
          x2={project(2, NOW_U, lane.v)[0]}
          y2={project(2, NOW_U, lane.v)[1]}
          stroke={INK}
          strokeWidth={0.6}
          opacity={0.4}
        />
      ))}
      {RELATIONS.map(([a, b]) => {
        const [x1, y1] = eventPoint(a);
        const [x2, y2] = eventPoint(b);
        return (
          <line key={`${a}-${b}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={GREEN} strokeWidth={0.6} opacity={0.45} />
        );
      })}
      {EVENTS.map((e, i) => {
        const v = LANES[e.lane].v;
        const [x, y] = project(2, e.u, v);
        const [tx1, ty1] = project(2, e.u, v - 7);
        const [tx2, ty2] = project(2, e.u, v + 7);
        return (
          <g key={i} opacity={age(e.u)}>
            <line x1={tx1} y1={ty1} x2={tx2} y2={ty2} stroke={INK} strokeWidth={0.7} />
            {e.major && <ellipse cx={x} cy={y} rx={2.4} ry={1.3} fill={GREEN} />}
          </g>
        );
      })}
      <line
        x1={project(2, NOW_U, 44)[0]}
        y1={project(2, NOW_U, 44)[1]}
        x2={project(2, NOW_U, 126)[0]}
        y2={project(2, NOW_U, 126)[1]}
        stroke={INK}
        strokeWidth={0.9}
        opacity={0.6}
      />
    </g>
  );
}

/* ---------- Knowledge: structured relational graph ---------- */

const NODES: [number, number][] = [
  [-96, 104],
  ANCHORS.water,
  [8, 98],
  [60, 110],
  [108, 84],
  ANCHORS.electrical,
  [102, -72],
  ANCHORS.hvac,
  [4, 50],
  [-52, 62],
  [36, 2],
];
const RESOLVED = new Set([1, 5, 7, 8]);
const EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
  [0, 9], [9, 1], [9, 8], [8, 2], [8, 7], [7, 3],
  [7, 4], [7, 5], [8, 10], [10, 7], [10, 6],
];

function KnowledgeLayer() {
  const node = (i: number) => project(3, NODES[i][0], NODES[i][1]);
  return (
    <g>
      <Footprint index={3} stroke={IVORY} opacity={0.22} />
      {EDGES.map(([a, b]) => {
        const [x1, y1] = node(a);
        const [x2, y2] = node(b);
        return (
          <line key={`${a}-${b}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={IVORY} strokeWidth={0.6} opacity={0.38} />
        );
      })}
      {NODES.map((_, i) => {
        const [x, y] = node(i);
        const resolved = RESOLVED.has(i);
        return (
          <g key={i}>
            {resolved && (
              <ellipse cx={x} cy={y} rx={6.5} ry={3.2} fill="none" stroke={IVORY} strokeWidth={0.6} opacity={0.6} />
            )}
            <rect x={x - 1.9} y={y - 1.9} width={3.8} height={3.8} fill={IVORY} opacity={resolved ? 0.95 : 0.7} />
          </g>
        );
      })}
    </g>
  );
}

/* ---------- Threads: the same anchors, joined through the stack ---------- */

function Threads({ index }: { index: number }) {
  if (index === 0) return null;
  return (
    <g stroke={INK} strokeWidth={0.6} opacity={0.3}>
      {Object.values(ANCHORS).map(([u, v]) => {
        const [x1, y1] = project(index, u, v);
        const [x2, y2] = project(index - 1, u, v);
        return <line key={`${u}:${v}`} x1={x1} y1={y1} x2={x2} y2={y2 + 6} />;
      })}
    </g>
  );
}

const LAYER_CONTENT: Record<HomeTwinLayerId, () => React.ReactElement> = {
  systems: SystemsLayer,
  state: StateLayer,
  history: HistoryLayer,
  knowledge: KnowledgeLayer,
};

/* ---------- Model ---------- */

function assembleVariants(reduce: boolean): Variants {
  return {
    hidden: (index: number) => ({ opacity: 0, y: (1.5 - index) * 10 }),
    show: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: reduce
        ? NARA_INSTANT
        : { duration: 1.1, delay: 0.15 + (3 - index) * 0.14, ease: EASE },
    }),
  };
}

type HomeTwinStackProps = {
  active: HomeTwinLayerId | null;
  onInspect: (id: HomeTwinLayerId | null) => void;
  id?: string;
};

export function HomeTwinStack({ active, onInspect, id }: HomeTwinStackProps) {
  const reduce = Boolean(useReducedMotion());
  const variants = assembleVariants(reduce);
  const layers = NARA_HOME_TWIN.layers;
  const drawOrder = layers.map((layer, index) => ({ layer, index })).reverse();
  const focusTransition = reduce ? NARA_INSTANT : { duration: 0.6, ease: EASE };

  return (
    <motion.svg
      id={id}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      className="block h-auto w-full overflow-visible"
      role="img"
      aria-label={NARA_HOME_TWIN.visualLabel}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      onMouseLeave={() => onInspect(null)}
    >
      <defs>
        <linearGradient id="twin-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fffdf9" />
          <stop offset="1" stopColor="#efe8dc" />
        </linearGradient>
        <linearGradient id="twin-side-l" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e4dccd" />
          <stop offset="1" stopColor="#d3c9b7" />
        </linearGradient>
        <linearGradient id="twin-side-r" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d2c8b6" />
          <stop offset="1" stopColor="#bfb4a1" />
        </linearGradient>
        <linearGradient id="twin-top-dark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#34463b" />
          <stop offset="1" stopColor="#222f28" />
        </linearGradient>
        <linearGradient id="twin-side-dark-l" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#21332a" />
          <stop offset="1" stopColor="#192820" />
        </linearGradient>
        <linearGradient id="twin-side-dark-r" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1a2921" />
          <stop offset="1" stopColor="#131f19" />
        </linearGradient>
        <filter id="twin-shadow" x="-20%" y="-50%" width="140%" height="200%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>

      <g aria-hidden>
        <line
          x1={36}
          y1={project(0, -HALF, HALF)[1] - 110}
          x2={36}
          y2={project(3, -HALF, HALF)[1] + 14}
          stroke={INK}
          strokeWidth={0.6}
          opacity={0.35}
        />
        <line x1={31} y1={project(0, -HALF, HALF)[1] - 110} x2={41} y2={project(0, -HALF, HALF)[1] - 110} stroke={INK} strokeWidth={0.6} opacity={0.35} />
        <line x1={31} y1={project(3, -HALF, HALF)[1] + 14} x2={41} y2={project(3, -HALF, HALF)[1] + 14} stroke={INK} strokeWidth={0.6} opacity={0.35} />

        {drawOrder.map(({ layer, index }) => {
          const Content = LAYER_CONTENT[layer.id];
          const isActive = active === layer.id;
          const dimmed = active !== null && !isActive;
          return (
            <motion.g key={layer.id} variants={variants} custom={index}>
              <motion.g
                initial={false}
                animate={{ opacity: dimmed ? 0.18 : 1, y: isActive ? -8 : 0 }}
                transition={focusTransition}
                onMouseEnter={() => onInspect(layer.id)}
              >
                <Slab index={index} dark={layer.id === "knowledge"} />
                <Content />
                <Threads index={index} />
              </motion.g>
            </motion.g>
          );
        })}

        <g className="hidden lg:inline">
          {layers.map((layer, index) => {
            const [x, y] = rightCorner(index);
            const isActive = active === layer.id;
            return (
              <g key={layer.id} opacity={active === null || isActive ? 1 : 0.35}>
                <circle cx={x} cy={y} r={2} fill={isActive ? GREEN : INK} opacity={0.8} />
                <line
                  x1={x + 8}
                  y1={y}
                  x2={LEADER_END}
                  y2={y}
                  stroke={isActive ? GREEN : INK}
                  strokeWidth={isActive ? 0.9 : 0.6}
                  opacity={isActive ? 0.9 : 0.35}
                />
              </g>
            );
          })}
        </g>
      </g>
    </motion.svg>
  );
}
