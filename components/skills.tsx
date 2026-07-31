"use client"

import { motion } from "framer-motion"
import { Network, Code2, Settings2 } from "lucide-react"
import SectionHeading from "./section-heading"

const categories = [
  {
    icon: Network,
    title: "Infraestrutura & Suporte",
    accent: "primary" as const,
    skills: [
      "Suporte N1/N2",
      "Field Service",
      "Service Desk",
      "Active Directory",
      "Microsoft 365",
      "Windows",
      "Linux",
      "Manutenção de Hardware",
      "Impressoras",
      "Redes",
      "Central de Chamados",
    ],
  },
  {
    icon: Code2,
    title: "Desenvolvimento & Banco de Dados",
    accent: "accent" as const,
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "AJAX", "PHP", "Java", "Python", "MySQL"],
  },
  {
    icon: Settings2,
    title: "Ferramentas & Metodologias",
    accent: "primary" as const,
    skills: ["Git", "GitHub", "Scrum", "Kanban", "Excel"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border/60 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Habilidades"
          title="Kit de ferramentas técnicas"
          description="Um conjunto prático que abrange operações de TI, infraestrutura e fundamentos de desenvolvimento web full-stack."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div
                className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-60 blur-3xl ${
                  cat.accent === "accent" ? "bg-accent/10" : "bg-primary/10"
                }`}
                aria-hidden="true"
              />
              <div className="mb-5 flex items-center gap-3">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary/60 ${
                    cat.accent === "accent" ? "text-accent" : "text-primary"
                  }`}
                >
                  <cat.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold">{cat.title}</h3>
              </div>

              <ul className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <li key={skill}>
                    <span className="inline-flex items-center rounded-lg border border-border bg-secondary/40 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          Idiomas: <span className="text-foreground">Português (Nativo)</span> ·{" "}
          <span className="text-foreground">Inglês (Básico)</span> · CNH A/B
        </motion.p>
      </div>
    </section>
  )
}
