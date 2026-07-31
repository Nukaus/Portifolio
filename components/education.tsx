"use client"

import { motion } from "framer-motion"
import { GraduationCap, School } from "lucide-react"
import SectionHeading from "./section-heading"

const education = [
  {
    icon: GraduationCap,
    degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    institution: "Faculdade Newton Paiva",
    period: "3º Período · Previsão de Formatura em Dez 2027",
    status: "Em Andamento",
  },
  {
    icon: School,
    degree: "Técnico em Desenvolvimento de Sistemas",
    institution: "Instituição Proz Educação",
    period: "Concluído · Dez 2025",
    status: "Concluído",
  },
]

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 border-t border-border/60 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Formação"
          title="Histórico acadêmico"
          description="Formação formal em Sistemas de Informação que fundamenta minha experiência prática em TI com bases sólidas."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary/60 text-primary">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-medium ${
                    item.status === "Em Andamento"
                      ? "border-accent/40 bg-accent/10 text-accent"
                      : "border-border bg-secondary/60 text-muted-foreground"
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <h3 className="text-lg font-semibold leading-snug">{item.degree}</h3>
              <p className="mt-1.5 text-sm text-primary">{item.institution}</p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">{item.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
