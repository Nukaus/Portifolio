import { Mail, Github, Linkedin } from "lucide-react"

const navLinks = [
  { href: "#about", label: "Sobre" },
  { href: "#experience", label: "Experiência" },
  { href: "#skills", label: "Habilidades" },
  { href: "#projects", label: "Projetos" },
  { href: "#education", label: "Formação" },
  { href: "#contact", label: "Contato" },
]

const socials = [
  { href: "mailto:cristiano200203@gmail.com", label: "E-mail", icon: Mail },
  { href: "https://github.com/Nukaus", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/", label: "LinkedIn", icon: Linkedin },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-2.5 md:justify-start">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-secondary font-mono text-sm font-semibold text-primary">
                CS
              </span>
              <span className="font-semibold">Cristiano Pereira Santos</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Análise de Sistemas · Suporte Técnico · Infraestrutura · Trabalho de Campo · Desenvolvimento Web
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Rodapé">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/40 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                aria-label={s.label}
              >
                <s.icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>&copy; {currentYear} Cristiano Pereira Santos. Todos os direitos reservados.</p>
          <p>Desenvolvido com Next.js, TypeScript e Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
