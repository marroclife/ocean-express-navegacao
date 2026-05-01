import { motion, type Variants } from 'framer-motion'
import { FileCheck, Route, Handshake, MapPin, MessageCircle, CheckCircle, ArrowRight, Anchor, AlertTriangle, Users } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect } from 'react'

// B2B Hero — Mangaratiba coastal port scenery
const IMG_HERO = 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2000'
const IMG_AGENT1 = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop'
const IMG_AGENT2 = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop'
const IMG_AGENT3 = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop'

const services = [
  {
    icon: <FileCheck className="w-10 h-10 text-[#8B0000]" strokeWidth={1.5} />,
    title: 'Selo de Entrada de Veículo',
    desc: 'Emitimos o Selo Municipal para entrada de veículo turístico em Mangaratiba. Sem burocracia, sem atraso no seu roteiro.',
    tag: null,
  },
  {
    icon: <Route className="w-10 h-10 text-[#8B0000]" strokeWidth={1.5} />,
    title: 'Logística Sem Multa',
    desc: 'Conhecemos cada ponto de parada permitida, cada rota homologada. Seu grupo circula sem risco de autuação ou apreensão.',
    tag: null,
  },
  {
    icon: <Handshake className="w-10 h-10 text-[#8B0000]" strokeWidth={1.5} />,
    title: 'Rede de Parceiros Homologados',
    desc: 'Restaurantes, embarcações, guias locais e hospedagens com tarifas exclusivas para o trade. Melhor preço, atendimento preferencial.',
    tag: 'Tarifa diferenciada pra trade',
  },
  {
    icon: <MapPin className="w-10 h-10 text-[#8B0000]" strokeWidth={1.5} />,
    title: 'Produtos Turísticos Locais',
    desc: 'Passeios de barco, translados, city tour e pacotes receptivos estruturados para grupos. Do briefing à execução.',
    tag: null,
  },
  {
    icon: <MessageCircle className="w-10 h-10 text-[#8B0000]" strokeWidth={1.5} />,
    title: 'Suporte Imediato',
    desc: 'Canal direto via WhatsApp antes, durante e após o passeio. Quando surge um imprevisto, estamos a um clique de solução.',
    tag: null,
  },
]

const testimonials = [
  {
    quote: 'Trabalho com grupos há 12 anos e a Âncora Tour foi a primeira vez que o selo foi emitido ANTES do ônibus sair de Búzios. Zero estresse na entrada.',
    name: 'Carlos Mendonça',
    role: 'Guia Credenciado — Rio Tour',
    img: IMG_AGENT1,
  },
  {
    quote: 'Minha agência atende 3 grupos por semana em Mangaratiba. Com o receptivo local da Âncora Tour, eliminamos as multas e ganhamos parceiros que a gente não tinha.',
    name: 'Fernanda Alves',
    role: 'Diretora — Alves Turismo & Eventos',
    img: IMG_AGENT2,
  },
  {
    quote: 'Reclamei uma vez de um barco com problema e em 8 minutos já tinham outra embarcação homologada disponível. Isso se chama receptivo de verdade.',
    name: 'Ricardo Pinto',
    role: 'Guia de Turismo CADASTUR — SP',
    img: IMG_AGENT3,
  },
]

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => { emblaApi.scrollNext() }, 6500)
    return () => clearInterval(interval)
  }, [emblaApi])

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 48 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: 'easeOut' } },
  }

  const stagger: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  }

  return (
    <div className="bg-[#fafbfc]">

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative min-h-[100vh] flex items-center justify-center bg-ocean-abyss overflow-hidden pt-20">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-abyss/75 via-ocean-abyss/55 to-ocean-abyss/90 z-10" />
          <img
            src={IMG_HERO}
            className="w-full h-full object-cover scale-[1.03]"
            alt="Porto de Mangaratiba — receptivo para grupos"
          />
        </div>

        {/* Target badge */}
        <div className="absolute top-32 left-1/2 -translate-x-1/2 z-20">
          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/8 border border-white/15 backdrop-blur-sm text-gray-300 text-[12px] font-semibold tracking-[0.18em] uppercase shadow-lg">
            <Users className="w-4 h-4 text-[#8B0000]" />
            Atendimento exclusivo pra trade turístico
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] text-white mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)] font-bold tracking-tight leading-[1.08] font-serif"
          >
            Seu grupo chega.<br />
            <span style={{ color: '#8B0000' }}>A gente resolve.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="text-xl md:text-2xl text-gray-300 font-light mb-14 max-w-2xl leading-relaxed"
          >
            Receptivo local em Mangaratiba para guias e agências de turismo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <a
              href="https://wa.me/5521973521017?text=Olá! Quero ser parceiro da Âncora Tour em Mangaratiba."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ancora text-[16px] px-10 py-5 flex items-center gap-2"
            >
              QUERO SER PARCEIRO
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-[-2px] w-full overflow-hidden leading-none z-30 pointer-events-none">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[80px] md:h-[120px] block">
            <path d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" fill="#fafbfc" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════ SERVICES ═══════════════════════ */}
      <section className="py-24 md:py-36 px-6">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-120px' }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="text-[#8B0000] text-[12px] font-bold tracking-[0.25em] uppercase mb-4">O que fazemos pelo seu grupo</p>
            <h2 className="text-4xl md:text-5xl font-bold text-ocean-deep font-serif">Serviços para o Trade Turístico</h2>
            <p className="text-gray-500 mt-5 text-lg font-light max-w-xl mx-auto leading-relaxed">
              Tudo que sua agência ou guia precisa para operar em Mangaratiba com segurança e sem surpresas.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
          >
            {services.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="glass-card rounded-[1.75rem] p-9 group cursor-default hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-[rgba(139,0,0,0.2)]"
              >
                <div className="mb-6 w-16 h-16 rounded-2xl bg-[#8B0000]/8 flex items-center justify-center group-hover:bg-[#8B0000]/14 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-[22px] font-bold text-ocean-deep mb-3 font-serif leading-snug">{s.title}</h3>
                {s.tag && (
                  <span className="tag-trade mb-4 block w-fit">{s.tag}</span>
                )}
                <p className="text-gray-500 leading-relaxed font-light text-[15px]">{s.desc}</p>
              </motion.div>
            ))}

            {/* Spacer card to center the last row of 5 cards (2 col lg: 3+2) */}
            <motion.div variants={fadeUp} className="hidden lg:block" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ POR QUE RECEPTIVO LOCAL ═══════════════════════ */}
      <section className="relative py-36 px-6 bg-ocean-abyss text-white overflow-hidden">
        {/* Top wave */}
        <div className="absolute top-[-2px] w-full overflow-hidden leading-none rotate-180 scale-x-[-1] z-10 pointer-events-none">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px] block">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="#fafbfc" />
          </svg>
        </div>

        <div className="container mx-auto relative z-20 pt-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-20 max-w-3xl mx-auto"
          >
            <p className="text-[#8B0000] text-[12px] font-bold tracking-[0.25em] uppercase mb-4">Entenda a diferença</p>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6 leading-tight">
              Por que usar<br />receptivo local?
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                icon: <AlertTriangle className="w-9 h-9 text-[#8B0000]" strokeWidth={1.5} />,
                title: 'Sem selo = veículo barrado.',
                body: 'Google Maps não emite Selo Municipal. Guia desatento entra em Mangaratiba sem autorização e perde o dia inteiro. Nós cuidamos disso antes do ônibus sair.',
              },
              {
                icon: <CheckCircle className="w-9 h-9 text-[#8B0000]" strokeWidth={1.5} />,
                title: 'A gente evita prejuízo real.',
                body: 'Multas, apreensão de veículo, passageiro preso no sol. Conhecemos cada regra local. Sua viagem acontece leve, do embarque ao retorno.',
              },
              {
                icon: <Anchor className="w-9 h-9 text-[#8B0000]" strokeWidth={1.5} />,
                title: 'Mangaratiba é nossa casa.',
                body: 'Recebemos seu grupo como nosso. Parceiros de confiança, logística que funciona e um receptivo que não abandona na hora-H.',
              },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="glass-service-card rounded-[1.75rem] p-9">
                <div className="mb-6 w-14 h-14 rounded-2xl bg-white/8 flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-[20px] font-bold text-white mb-4 font-serif leading-snug">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed font-light text-[15px]">{item.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ DEPOIMENTOS ═══════════════════════ */}
      <section className="relative py-36 overflow-hidden flex flex-col items-center bg-[#0d1f3c]">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-[#8B0000]/30 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="text-[#8B0000] text-[12px] font-bold tracking-[0.25em] uppercase mb-4">Quem já trabalha com a gente</p>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-white">Guias e Agências falam</h2>
          </motion.div>

          <div className="max-w-[860px] mx-auto overflow-hidden" ref={emblaRef}>
            <div className="flex select-none cursor-grab active:cursor-grabbing">
              {testimonials.map((t, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0 px-4 md:px-8 text-center text-white">
                  <div className="font-serif text-[72px] md:text-[96px] leading-none text-[#8B0000] mb-0 h-10 md:h-12 drop-shadow-md">"</div>
                  <p className="text-[20px] md:text-[32px] italic font-serif leading-[1.35] text-white tracking-wide mb-10 md:mb-14 drop-shadow-md">
                    {t.quote}
                  </p>
                  <div className="flex items-center justify-center gap-5">
                    <img
                      src={t.img}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-[#8B0000]"
                      alt={t.name}
                      draggable="false"
                    />
                    <div className="text-left">
                      <h5 className="font-bold text-xl md:text-2xl tracking-[0.04em] text-white font-serif">{t.name}</h5>
                      <p className="text-gray-400 text-[11px] md:text-[13px] tracking-widest uppercase mt-1">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-3 mt-14">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className="w-2 h-2 rounded-full bg-white/20 hover:bg-[#8B0000] transition-colors"
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CTA FINAL ═══════════════════════ */}
      <section className="py-44 px-6 bg-[#fafbfc] text-center border-t border-gray-100 relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-radial from-[#8B0000]/6 to-transparent blur-[80px] -z-10 rounded-full" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto relative z-10"
        >
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B0000]/8 border border-[#8B0000]/20 text-[#8B0000] font-bold tracking-[0.15em] uppercase text-[12px] mb-12 shadow-sm animate-pulse">
            <span>⚠️</span> Vagas limitadas por dia — grupos acima de 10 pessoas
          </div>

          <h2 className="text-5xl md:text-7xl font-bold font-serif mb-8 text-[#0a1628] tracking-tight leading-[1.1]">
            Seu grupo chega em<br />Mangaratiba.
          </h2>
          <p className="text-2xl text-gray-400 font-light mb-6 max-w-2xl mx-auto leading-relaxed">
            A gente resolve o resto.
          </p>
          <p className="text-lg text-gray-500 font-light mb-16 max-w-xl mx-auto leading-relaxed">
            Selo, logística, parceiros e suporte — tudo em um receptivo local que conhece cada esquina de Mangaratiba.
          </p>

          <a
            href="https://wa.me/5521973521017?text=Quero falar com o receptivo da Âncora Tour sobre meu grupo em Mangaratiba."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ancora text-[17px] py-6 px-14 shadow-[0_12px_45px_rgba(139,0,0,0.35)] transform hover:scale-105 inline-flex items-center gap-3"
          >
            FALAR COM O RECEPTIVO
            <MessageCircle className="w-5 h-5" />
          </a>

          <p className="mt-10 text-sm text-gray-400 font-light tracking-wide">
            WhatsApp direto com a equipe ·{' '}
            <span className="bg-red-50 px-2 py-1 rounded text-[#8B0000] font-semibold ml-1">🔒 Resposta em até 15min</span>
          </p>
        </motion.div>
      </section>

    </div>
  )
}
