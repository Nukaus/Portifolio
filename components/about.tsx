"use client"

import { motion } from "framer-motion"
import { Server, Headphones, Network, Wrench, Code2 } from "lucide-react"
import SectionHeading from "./section-heading"

const disciplines = [
  {
    icon: Server,
    title: "Análise de Sistemas",
    description: "Estudo de requisitos e processos para soluções de tecnologia eficientes e bem organizadas.",
  },
  {
    icon: Headphones,
    title: "Suporte Técnico",
    description: "Suporte N1/N2 remoto e presencial para mais de 100 usuários, com gestão de chamados orientada a SLA.",
  },
  {
    icon: Network,
    title: "Infraestrutura",
    description: "Active Directory, Microsoft 365, redes e disponibilidade de sistemas em ambientes críticos.",
  },
  {
    icon: Wrench,
    title: "Field Service",
    description: "Manutenção preventiva e corretiva de hardware, diagnósticos e intervenções presenciais.",
  },
  {
    icon: Code2,
    title: "Desenvolvimento Web",
    description: "Construção de aplicações web responsivas com HTML, CSS, JavaScript, PHP e MySQL.",
  },
]

const stats = [
  { value: "100+", label: "Usuários e dispositivos atendidos" },
  { value: "N1 / N2", label: "Especialidade em suporte" },
  { value: "5+", label: "Anos em TI" },
  { value: "5", label: "Certificações" },
]

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border/60 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Sobre"
          title="Um profissional de TI versátil, não apenas um desenvolvedor"
          description="Combino operações de TI confiáveis com desenvolvimento de software. Minha trajetória passa por service desks, infraestrutura corporativa e field service em aeroporto, apoiada por uma formação em Análise e Desenvolvimento de Sistemas - por isso entendo tanto o funcionamento diário da tecnologia quanto como construí-la."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Atualmente atuo como{" "}
              <span className="text-foreground">Analista de Field Service dando suporte à infraestrutura do Aeroporto Internacional de Confins</span>
              , onde disponibilidade e resolução rápida de incidentes são inegociáveis. Antes disso, passei anos
              prestando suporte N1/N2 e mantendo sistemas críticos no Exército Brasileiro, onde fui promovido a
              Cabo após concluir o curso de formação.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Meu objetivo é crescer como{" "}
              <span className="text-foreground">Analista de Sistemas Júnior</span>, contribuindo com soluções eficientes
              enquanto continuo evoluindo em suporte, infraestrutura e desenvolvimento. Trago uma mentalidade analítica,
              atenção aos detalhes e uma vontade genuína de manter os sistemas funcionando e os usuários produtivos.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-border bg-secondary/40 p-4">
                  <div className="text-2xl font-semibold text-foreground">{stat.value}</div>
                  <div className="mt-1 text-xs leading-snug text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {disciplines.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary/60 text-primary transition-colors group-hover:border-primary/50">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
