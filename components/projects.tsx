"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import SectionHeading from "./section-heading"

const projects = [
  {
    title: "Universo Digital - Loja & Serviços",
    image: "/projects/digital-universe.png",
    description:
      "Um site moderno e responsivo para apresentar serviços freelancers — manutenção de celulares e computadores — junto com a venda de eletrônicos, contando com uma galeria de trabalhos e canal de contato direto.",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    demo: "https://nukaus.github.io/",
    code: "https://github.com/Nukaus/projetos_pessoais",
  },
  {
    title: "Full-Stack em 30 Dias",
    image: "/projects/fullstack-30-days.png",
    description:
      "Um projeto de aprendizado intensivo vivenciando todo o ciclo de vida de uma aplicação web — desde a estrutura da interface até a integração com banco de dados — construindo aplicativos funcionais, responsivos e conectados a um armazenamento persistente.",
    tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "MySQL"],
    demo: "https://nukaus.github.io/fullstack-30-days/",
    code: "https://github.com/Nukaus/sites-profissionais",
  },
  {
    title: "Site de Fotografia",
    image: "/projects/photography.png",
    description:
      "Um exercício limpo e independente simulando uma página de serviços de fotografia — focado na estrutura de conteúdo, design minimalista e seções bem organizadas. Uma das minhas primeiras experiências no desenvolvimento web.",
    tags: ["HTML5", "CSS3"],
    demo: "https://nukaus.github.io/sites-profissionais/site_fotografia/",
    code: "https://github.com/Nukaus/sites-profissionais",
  },
  {
    title: "Sistema de Chamados Web (Acadêmico)",
    image: null,
    description:
      "Um projeto acadêmico para gerenciar solicitações de suporte técnico, apresentando cadastro e controle de usuários, uma interface responsiva e integração com MySQL.",
    tags: ["HTML5", "Bootstrap", "PHP", "Java", "AJAX", "MySQL", "Git"],
    demo: "https://desenvolvimento.infinityfree.me/frontend/login.html",
    code: "https://github.com/Nukaus/sistema-chamados-web",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-border/60 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projetos"
          title="Trabalhos selecionados"
          description="Uma mistura de criações freelance, desafios de aprendizado intensivo e sistemas acadêmicos — cada um deles um passo em direção à maturidade full-stack."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-secondary/40">
                {project.image ? (
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`Prévia do projeto ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_60%)]">
                    <span className="font-mono text-5xl font-semibold text-gradient">{"</>"}</span>
                  </div>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-70" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    Demonstração
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-secondary/40 px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    Código
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
