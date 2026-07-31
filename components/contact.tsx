"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, MapPin, Download, ArrowUpRight } from "lucide-react"
import SectionHeading from "./section-heading"

const channels = [
  {
    icon: Mail,
    label: "E-mail",
    value: "cristiano200203@gmail.com",
    href: "mailto:cristiano200203@gmail.com",
    external: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Conecte-se comigo",
    href: "https://www.linkedin.com/",
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Nukaus",
    href: "https://github.com/Nukaus",
    external: true,
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Betim, MG - Brasil",
    href: null,
    external: false,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border/60 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12">
          {/* glow */}
          <div
            className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative">
            <SectionHeading
              eyebrow="Contato"
              title="Vamos construir algo confiável juntos"
              description="Aberto a oportunidades como Analista de Sistemas Júnior, Analista de Suporte, Analista de Infraestrutura, Técnico ou Field Service — presencial, híbrido ou remoto. Sinta-se à vontade para entrar em contato."
              align="center"
            />

            <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
              {channels.map((c, i) => {
                const content = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary/60 text-primary">
                      <c.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-muted-foreground">{c.label}</span>
                      <span className="flex items-center gap-1 truncate text-sm font-medium text-foreground">
                        {c.value}
                        {c.external ? <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" /> : null}
                      </span>
                    </span>
                  </>
                )

                const className =
                  "flex items-center gap-4 rounded-2xl border border-border bg-secondary/30 p-4 text-left transition-colors hover:border-primary/40"

                return (
                  <motion.div
                    key={c.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.external ? "_blank" : undefined}
                        rel={c.external ? "noopener noreferrer" : undefined}
                        className={`${className} focus:outline-none focus:ring-2 focus:ring-ring`}
                      >
                        {content}
                      </a>
                    ) : (
                      <div className={className}>{content}</div>
                    )}
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/cristiano-pereira-santos-resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_-8px_var(--primary)] transition-all hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Baixar Currículo
              </a>
              <a
                href="https://github.com/Nukaus"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary/40 px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/60 hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
