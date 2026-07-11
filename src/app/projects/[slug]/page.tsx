import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { projects } from "../../../data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function findProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) {
    notFound();
  }

  const canonicalPath = `/projects/${project.slug}`;
  const socialTitle = `${project.title} | Naldi Portfolio`;

  return {
    title: project.title,
    description: project.shortDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: socialTitle,
      description: project.shortDescription,
      url: canonicalPath,
      siteName: "Naldi Portfolio",
      locale: "id_ID",
      type: "article",
      images: [
        {
          url: project.image,
          alt: `Preview proyek ${project.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: project.shortDescription,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) {
    notFound();
  }

  const hasLiveDemo = project.liveDemoLink !== "#";

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pb-20 pt-28 md:pt-32">
        <article className="container mx-auto max-w-6xl px-4 sm:px-6">
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition-colors hover:text-red-600"
          >
            <span aria-hidden="true">←</span>
            Kembali ke semua proyek
          </Link>

          <header className="mb-10 max-w-4xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-red-600">
              Project Case Study
            </p>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
              {project.shortDescription}
            </p>
          </header>

          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-xl md:rounded-3xl">
            <Image
              src={project.image}
              alt={`Preview proyek ${project.title}`}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1152px"
              className="object-cover"
            />
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12">
            <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-gray-900">Tentang Proyek</h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
                {project.description}
              </p>
            </section>

            <aside className="h-fit rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-xl font-bold text-gray-900">Tech Stack</h2>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Teknologi yang digunakan">
                {project.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-lg border border-red-100 bg-red-50 px-3 py-1.5 text-sm font-medium text-red-700"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-red-600"
                >
                  Source Code
                  <span aria-hidden="true">↗</span>
                </a>

                {hasLiveDemo ? (
                  <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-red-600 px-5 py-3 text-sm font-bold text-red-600 transition-colors hover:bg-red-50"
                  >
                    Live Demo
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span
                    aria-disabled="true"
                    className="inline-flex cursor-not-allowed items-center justify-center rounded-xl border-2 border-gray-200 px-5 py-3 text-sm font-bold text-gray-400"
                  >
                    Live Demo Tidak Tersedia
                  </span>
                )}
              </div>
            </aside>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
