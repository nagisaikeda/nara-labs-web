import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { ProjectCaseStudyView } from "@/components/projects/ProjectCaseStudy";
import { getProjectBySlug, getProjectSlugs } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";

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
    description: project.seoDescription,
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
          description: project.seoDescription,
          author: {
            "@type": "Organization",
            name: "Nara Labs",
          },
        }}
      />
      <ProjectCaseStudyView project={project} />
    </>
  );
}
