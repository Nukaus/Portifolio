"use client"

import { motion } from "framer-motion"
import { Plane, Shield, Wrench } from "lucide-react"
import SectionHeading from "./section-heading"

const experiences = [
  {
    icon: Plane,
    role: "Analista de Field Service",
    company: "Arion Tecnologia",
    period: "Mar 2026 - Atual",
    location: "Confins, MG",
    current: true,
    points: [
      "Suporte à infraestrutura de tecnologia do Aeroporto Internacional de Confins, incluindo testes de conectividade e verificação de rede.",
      "Atendimento remoto e presencial a mais de 100 usuários e dispositivos em ambiente corporativo de alta disponibilidade.",
      "Instalação, configuração e atualização de softwares corporativos e sistemas operacionais; administração de Active Directory e Microsoft 365.",
      "Gestão do ciclo completo de chamados pela Central de Chamados Avançada, garantindo o cumprimento de SLAs.",
    ],
  },
  {
    icon: Shield,
    role: "Auxiliar de Suporte Técnico",
    company: "4ª Companhia de Comunicações Leve de Montanha - Exército Brasileiro",
    period: "Mar 2021 - Fev 2026",
    location: "Belo Horizonte, MG",
    current: false,
    points: [
      "Prestei suporte técnico N1 e N2 aos usuários da organização, presencial e remotamente.",
      "Instalei, configurei e atualizei softwares, sistemas operacionais e soluções de segurança.",
      "Realizei diagnósticos e manutenção preventiva/corretiva em computadores e notebooks.",
      "Dei suporte aos sistemas utilizados pela administração militar, garantindo disponibilidade e continuidade das operações.",
      "Promovido a Cabo após concluir o Curso de Formação de Cabos, assumindo maiores responsabilidades operacionais e administrativas.",
    ],
  },
  {
    icon: Wrench,
    role: "Suporte Técnico & Field Service (Freelancer)",
    company: "Autônomo",
    period: "Jan 2021 - Atual",
    location: "Belo Horizonte, MG",
    current: false,
    points: [
      "Presto suporte técnico a clientes residenciais e pequenas empresas.",
      "Diagnóstico, montagem, manutenção e upgrade de computadores, notebooks e dispositivos móveis.",
      "Manutenção prática de aproximadamente 10-15 computadores e cerca de 20 dispositivos móveis.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-border/60 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experiência"
          title="Onde mantive os sistemas funcionando"
          description="De service desks corporativos a infraestrutura crítica de aeroporto - um histórico de operações de TI confiáveis e crescimento contínuo."
        />

        <div className="relative mt-14">
          <div
            className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent sm:left-[23px]"
            aria-hidden="true"
          />

          <ol className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.li
                key={exp.role + exp.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-14 sm:pl-16"
              >
                <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-primary shadow-[0_0_20px_-6px_var(--primary)] sm:h-12 sm:w-12">
                  <exp.icon className="h-5 w-5" aria-hidden="true" />
                </span>

                <div className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">
                        {exp.role}
                        {exp.current ? (
                          <span className="ml-3 inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 align-middle text-[11px] font-medium text-accent">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                            Atual
                          </span>
                        ) : null}
                      </h3>
                      <p className="mt-0.5 text-sm text-primary">{exp.company}</p>
                    </div>
                    <div className="shrink-0 text-left sm:text-right">
                      <p className="font-mono text-xs text-muted-foreground">{exp.period}</p>
                      <p className="text-xs text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {exp.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
