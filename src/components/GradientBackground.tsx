export function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full animate-gradient-drift-slow"
        style={{
          background:
            "radial-gradient(circle, rgba(200, 184, 224, 0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-[40%] right-[-15%] w-[50vw] h-[50vw] rounded-full animate-gradient-drift"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 200, 232, 0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[20%] w-[40vw] h-[40vw] rounded-full animate-gradient-drift-slow"
        style={{
          background:
            "radial-gradient(circle, rgba(167, 229, 211, 0.05) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
