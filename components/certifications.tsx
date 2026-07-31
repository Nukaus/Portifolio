"use client"

import { motion } from "framer-motion"
import { BadgeCheck, Cpu, Code, Bot, Smartphone } from "lucide-react"
import SectionHeading from "./section-heading"

const certifications = [
  {
    icon: Code,
    title: "PCAP - Programming Essentials in Python",
    issuer: "Cisco Networking Academy",
  },
  {
    icon: Bot,
    title: "FluêncIA",
    issuer: "Fundação Bradesco",
  },
  {
    icon: Code,
    title: "HTML - Básico & Avançado",
    issuer: "Fundação Bradesco",
  },
  {
    icon: Cpu,
    title: "Fundamentos de TI: Hardware & Software",
    issuer: "Fundação Bradesco",
  },
  {
    icon: Smartphone,
    title: "Manutenção de Celulares (36h)",
    issuer: "Instituto Ana",
  },
]

export default function Certifications() {
  return (
    <section className="scroll-mt-20 border-t border-border/60 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certificações"
          title="Aprendizado contínuo"
          description="Certificações formais que reforçam minha base em desenvolvimento, fundamentos de TI e hardware."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary/60 text-primary">
                <cert.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="flex items-start gap-1.5 text-sm font-medium leading-snug">
                  {cert.title}
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
