import { Star, MessageSquare, Phone, Mail, Code, Languages, Bot, Settings, CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";

const services = [
  {
    icon: Languages,
    title: "Tradução e Revisão",
    items: [
      "Tradução Português ↔ Inglês",
      "Revisão gramatical e ortográfica",
      "Adequação de textos profissionais",
      "Tradução de documentos, sites e artigos",
    ],
  },
  {
    icon: Code,
    title: "Programação e Desenvolvimento",
    items: [
      "Criação de sites e sistemas web",
      "Plataformas SaaS",
      "Sistemas com login e banco de dados",
      "Integrações com APIs e pagamentos (Pix)",
    ],
  },
  {
    icon: Bot,
    title: "Soluções com IA e Automação",
    items: [
      "Bots de atendimento automatizado",
      "Sistemas de resposta inteligente",
      "Plataformas com IA personalizada",
      "Automação de processos e fluxos de trabalho",
      "Integração de ferramentas e APIs automatizadas",
    ],
  },
  {
    icon: Settings,
    title: "Sistemas Personalizados",
    items: [
      "Sistemas de agendamento online",
      "Plataformas multiusuário",
      "Painéis administrativos",
      "Ferramentas sob medida",
    ],
  },
];

const projects = [
  "Plataforma de agendamentos multiusuário",
  "Sistema SaaS para serviços técnicos",
  "Bot de atendimento com IA",
  "Sistema de correção automática de códigos",
  "Aplicativos web transformados em apps",
];

const differentials = [
  "Atendimento rápido",
  "Soluções práticas e modernas",
  "Interface simples e eficiente",
  "Suporte ao cliente",
  "Projetos sob medida",
];

const testimonials = [
  {
    name: "Cliente Satisfeito",
    project: "Desenvolvimento de plataforma marketplace de serviços",
    rating: 5,
    date: "17/10/2025 - 28/11/2025",
    text: "Atencioso bem detalhista!",
    image: client1,
  },
  {
    name: "Cliente Satisfeito",
    project: "Desenvolvimento de sistema web completo",
    rating: 5,
    date: "2025",
    text: "Excelente profissional, entregou no prazo e com qualidade!",
    image: client2,
  },
];

const anonymousReviews = [
  { text: "Resolveu meu problema em tempo recorde. Super recomendo!", rating: 5 },
  { text: "Profissional dedicado, fez além do que pedi.", rating: 5 },
  { text: "Ótima comunicação e resultado impecável.", rating: 5 },
  { text: "Automatizou todo meu processo, economizei horas por dia.", rating: 5 },
  { text: "Traduções perfeitas, nunca precisei de correção.", rating: 5 },
  { text: "Criou um sistema completo do zero, funcionando perfeitamente.", rating: 5 },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "fill-gold text-gold" : "text-muted-foreground"}`}
      />
    ))}
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10">
            <span className="text-primary text-sm font-medium font-mono">Portfólio Profissional</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">
            <span className="text-gradient">Michel Santos</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Tradutor • Revisor • Programador • Desenvolvedor de Soluções Digitais
          </p>
          <p className="text-secondary-foreground/80 max-w-xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Profissional especializado em tradução, revisão de textos e desenvolvimento de sistemas digitais. Foco em qualidade, rapidez e soluções práticas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
            <a
              href="https://wa.me/5521995157878"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all"
            >
              <Phone className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-all"
            >
              Ver Serviços
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Serviços <span className="text-gradient">Oferecidos</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            Soluções completas em tradução, desenvolvimento e tecnologia
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-xl bg-card border border-border card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                </div>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 px-6 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Projetos <span className="text-gradient">Desenvolvidos</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            Alguns dos projetos que já entreguei
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-card border border-border card-hover flex items-start gap-3"
              >
                <span className="text-primary font-mono font-bold text-lg">0{i + 1}</span>
                <span className="text-foreground">{project}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Clientes <span className="text-gradient">Satisfeitos</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            O que dizem sobre o meu trabalho
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-xl bg-card border border-border card-hover overflow-hidden">
                <div className="w-full overflow-hidden border-b border-border">
                  <img
                    src={t.image}
                    alt={`Avaliação - ${t.project}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="p-5">
                  <p className="text-primary font-semibold mb-1">{t.project}</p>
                  <StarRating rating={t.rating} />
                  <p className="mt-2 text-muted-foreground italic text-sm">"{t.text}"</p>
                  <p className="text-xs text-muted-foreground mt-2">{t.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {anonymousReviews.map((r, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border border-border card-hover">
                <StarRating rating={r.rating} />
                <p className="mt-3 text-muted-foreground italic text-sm">"{r.text}"</p>
                <p className="mt-2 text-xs text-muted-foreground">— Cliente anônimo</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-24 px-6 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Meus <span className="text-gradient">Diferenciais</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {differentials.map((d) => (
              <div
                key={d}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-primary/10 border border-primary/20 text-foreground"
              >
                <CheckCircle className="w-4 h-4 text-primary" />
                {d}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos <span className="text-gradient">Conversar?</span>
          </h2>
          <p className="text-muted-foreground mb-10">
            Entre em contato para orçamentos e projetos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5521995157878"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all glow-border"
            >
              <MessageSquare className="w-5 h-5" />
              (21) 99515-7878
            </a>
            <a
              href="mailto:michel.santos2158@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-all"
            >
              <Mail className="w-5 h-5" />
              E-mail
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <p className="text-center text-muted-foreground text-sm">
          © 2025 Michel Santos. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Index;
