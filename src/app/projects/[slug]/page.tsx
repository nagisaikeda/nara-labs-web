import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { ProjectCaseStudyView } from "@/components/projects/ProjectCaseStudy";
import { ProbeIQCaseStudy } from "@/components/projects/ProbeIQCaseStudy";
import { LocalPMOSCaseStudy } from "@/components/projects/LocalPMOSCaseStudy";
import { getProjectBySlug, getProjectSlugs } from "@/data/projects";
import { PROBEIQ_PAGE } from "@/data/probeiq-page";
import { LOCAL_PM_OS_PAGE } from "@/data/local-pm-os-page";
import { createPageMetadata } from "@/lib/metadata";

function getProjectSeoDescription(slug: string, fallback: string) {
  if (slug === "probeiq") return PROBEIQ_PAGE.seoDescription;
  if (slug === "local-pm-os") return LOCAL_PM_OS_PAGE.seoDescription;
  return fallback;
}

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return createPageMetadata({
    title: `${project.name} | Nara Labs Projects`,
    description: getProjectSeoDescription(slug, project.seoDescription),
    path: `/projects/${slug}`,
    ogImage: project.previewImage ?? project.gallery?.[0]?.src,
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.name,
          description: getProjectSeoDescription(slug, project.seoDescription),
          author: {
            "@type": "Organization",
            name: "Nara Labs",
          },
        }}
      />
      {slug === "probeiq" ? (
        <ProbeIQCaseStudy />
      ) : slug === "local-pm-os" ? (
        <LocalPMOSCaseStudy />
      ) : (
        <ProjectCaseStudyView project={project} />
      )}
    </>
  );
}
