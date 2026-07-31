"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowDown, Download, MapPin } from "lucide-react"

const roles = ["Analista de Sistemas", "Suporte de TI N1 / N2", "Infraestrutura", "Field Service", "Desenvolvedor Web"]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden px-4 pt-24 pb-16 sm:px-6 lg:px-8">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
          }}
        />
        <div className="absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2">
          <div className="animate-spin-slow h-full w-full rounded-full bg-[conic-gradient(from_0deg,transparent,color-mix(in_oklab,var(--primary)_45%,transparent),transparent_40%)] blur-3xl" />
        </div>
        <div className="absolute right-[12%] top-[22%] h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Disponível para novas oportunidades
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Cristiano Pereira <span className="text-gradient">Santos</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 flex h-8 items-center gap-3 text-lg font-medium sm:text-xl"
          >
            <span className="font-mono text-primary">{"//"}</span>
            <span className="relative inline-block min-w-[13ch]">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="text-foreground"
              >
                {roles[roleIndex]}
              </motion.span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Profissional de TI com experiência prática em Suporte Técnico (N1/N2), Infraestrutura e Field Service em
            ambientes corporativos de alta disponibilidade que atendem mais de 100 usuários. Graduando em Análise e
            Desenvolvimento de Sistemas, unindo operações de TI confiáveis ao desenvolvimento web moderno.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
            Betim, MG - Brasil
            <span className="mx-1 text-border">|</span>
            Presencial, Híbrido e Remoto
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="/documentos/cristiano-pereira-santos-resume.pdf"
              download="cristiano-pereira-santos-resume.pdf"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_-8px_var(--primary)] transition-all hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            >

              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
              Baixar Currículo
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary/40 px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/60 hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring"
            >
              Ver Projetos
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto lg:mx-0 lg:justify-self-end"
        >
          <div className="animate-float relative">
            <div className="absolute -inset-4 rounded-full bg-[conic-gradient(from_180deg,var(--primary),var(--accent),var(--primary))] opacity-25 blur-2xl" />
            <div className="relative rounded-full bg-[conic-gradient(from_140deg,var(--primary),var(--accent),var(--primary))] p-[2px]">
              <div className="flex h-52 w-52 items-center justify-center rounded-full bg-card sm:h-64 sm:w-64">
                <div className="flex h-52 w-52 items-center justify-center overflow-hidden rounded-full bg-card sm:h-64 sm:w-64">
                  <Image
                    src="/perfil.jpeg" // Nome do arquivo exatamente como salvou na pasta public
                    alt="Foto de Cristiano Pereira Santos"
                    width={256} // Tamanho máximo para telas grandes (sm:w-64 = 256px)
                    height={256}
                    className="h-full w-full object-cover"
                    priority // Carrega a imagem com prioridade por estar no topo da página
                  />
                </div>

              </div>
            </div>
            <div className="glass absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground">
              5+ anos em TI
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
