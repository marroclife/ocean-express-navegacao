import { motion } from 'framer-motion'
import { Anchor, Shield, Clock, Ship, Palmtree, Compass, Navigation, Star, CheckCircle, ArrowRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect } from 'react'

// Photography Placeholders (Unsplash)
const IMG_HERO = 'https://images.unsplash.com/photo-1599813243911-381c6cc8dbe9?q=80&w=2000'
const IMG_DEPOIMENTOS = 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2000'
const IMG_PERSON1 = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop'
const IMG_PERSON2 = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop'

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  
  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => { emblaApi.scrollNext() }, 6000)
    return () => clearInterval(interval)
  }, [emblaApi])

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  return (
    <div className="bg-[#fafbfc]">
      {/* Cinematic Hero */}
      <section className="relative min-h-[100vh] flex items-center justify-center bg-ocean-abyss overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-abyss/70 via-ocean-abyss/50 to-ocean-abyss/80 z-10" />
          <img src={IMG_HERO} className="w-full h-full object-cover scale-[1.02] animate-[pulse_25s_ease-in-out_infinite]" alt="Navio cruzando a baía" />
        </div>
        
        <div className="container mx-auto px-6 relative z-20 text-center flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] text-white mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] font-bold tracking-tight leading-[1.1]"
          >
            A Travessia Mais<br/>Segura do Rio
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-[28px] text-sand-light font-serif italic mb-14 max-w-3xl leading-relaxed drop-shadow-sm"
          >
            Sinta a brisa oceânica saindo do Centro de Mangaratiba diretamente para os cenários paradisíacos da Ilha Grande.
          </motion.p>
          <motion.a 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            href="#reserva" className="btn-luxury"
          >
            RESERVE SUA TRAVESSIA <ArrowRight className="inline-block w-5 h-5 ml-2 mb-1" />
          </motion.a>
        </div>

        {/* Minimal White wave */}
        <div className="absolute bottom-[-2px] w-full overflow-hidden leading-none z-30 pointer-events-none">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[80px] md:h-[130px] block">
            <path d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" fill="#fafbfc" />
          </svg>
        </div>
      </section>

      {/* Services Sub-hero */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once:true, margin:"-150px" }} variants={staggerContainer} className="grid md:grid-cols-3 gap-10 relative mt-[-140px] z-40">
            {/* Card 1 */}
            <motion.div variants={fadeUp} className="glass-premium p-12 rounded-[2rem] group cursor-default">
              <Palmtree className="w-12 h-12 text-[#c9a050] mb-8 group-hover:rotate-12 transition-transform duration-500" strokeWidth={1} />
              <h3 className="text-[26px] font-serif font-bold text-ocean-deep mb-5">Ilha Grande</h3>
              <p className="text-gray-600 leading-relaxed font-light text-[17px]">Travessia direta para o coração turístico do Rio. 40 minutos nas águas calmas da Baía de Sepetiba.</p>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div variants={fadeUp} className="glass-premium p-12 rounded-[2rem] group cursor-default">
              <Anchor className="w-12 h-12 text-[#c9a050] mb-8 group-hover:rotate-12 transition-transform duration-500" strokeWidth={1} />
              <h3 className="text-[26px] font-serif font-bold text-ocean-deep mb-5">Itacuruçá</h3>
              <p className="text-gray-600 leading-relaxed font-light text-[17px]">Passeios belíssimos pelas ilhas da Costa Verde. Mar cristalino, diversão e natureza impecável.</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeUp} className="glass-premium p-12 rounded-[2rem] group cursor-default">
              <Compass className="w-12 h-12 text-[#c9a050] mb-8 group-hover:rotate-12 transition-transform duration-500" strokeWidth={1} />
              <h3 className="text-[26px] font-serif font-bold text-ocean-deep mb-5">VIP Privativo</h3>
              <p className="text-gray-600 leading-relaxed font-light text-[17px]">Excursões sob medida, translados VIP e rotas turísticas exclusivas na região de Mangaratiba.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="relative py-40 px-6 bg-ocean-abyss text-white overflow-hidden">
        {/* Decorative Top Wave */}
        <div className="absolute top-[-2px] w-full overflow-hidden leading-none rotate-180 z-10 scale-x-[-1] pointer-events-none">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px] block">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="#fafbfc" />
          </svg>
        </div>

        {/* Trust Header */}
        <div className="container mx-auto relative z-20 pt-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUp} className="text-center mb-28 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-[54px] font-serif font-bold mb-8 text-white drop-shadow-md tracking-tight">O Padrão Ouro da Navegação Costeira</h2>
            <p className="text-ocean-foam text-[20px] font-light leading-relaxed">
              Elevando as referências mundiais de traslado contínuo marítimo com frota moderna e tripulação extremamente treinada.
            </p>
            <div className="mt-14 flex flex-wrap justify-center gap-6 items-center">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-full backdrop-blur-sm shadow-xl">
                 <Star className="w-5 h-5 fill-[#c9a050] text-[#c9a050]" />
                 <span className="font-semibold text-white tracking-wide">4.9/5 <span className="font-light text-gray-300 ml-1">(1.247 Avaliações Reais)</span></span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-full backdrop-blur-sm shadow-xl">
                 <CheckCircle className="w-5 h-5 text-[#25D366]" />
                 <span className="font-light text-gray-200">Embarcações chanceladas pela <strong>Marinha do Brasil</strong></span>
              </div>
            </div>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-20 max-w-[1100px] mx-auto">
            <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-start gap-8 group">
              <Shield className="w-16 h-16 shrink-0 text-[#c9a050] group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
              <div>
                <h4 className="text-[28px] font-serif font-bold mb-4 text-white hover:text-sand-gold transition-colors">Segurança Absoluta</h4>
                <p className="text-ocean-foam opacity-90 font-light text-lg leading-relaxed">Tecnologia anti-deriva e regulamentação rigorosa. Viagens sem sobressaltos estruturadas para suportar as variações e anomalias do vento na baía.</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-start gap-8 group">
              <Clock className="w-16 h-16 shrink-0 text-[#c9a050] group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
              <div>
                <h4 className="text-[28px] font-serif font-bold mb-4 text-white hover:text-sand-gold transition-colors">Pontualidade Britânica</h4>
                <p className="text-ocean-foam opacity-90 font-light text-lg leading-relaxed">Nossos cronogramas são estritos. Se garantimos a partida para as 12:00, os motores rodfam pontualmente no minuto fixado.</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-start gap-8 group">
              <Ship className="w-16 h-16 shrink-0 text-[#c9a050] group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
              <div>
                <h4 className="text-[28px] font-serif font-bold mb-4 text-white hover:text-sand-gold transition-colors">Conforto VIP Class</h4>
                <p className="text-ocean-foam opacity-90 font-light text-lg leading-relaxed">Estofados luxuosos, janelas panorâmicas contínuas para fotos maravilhosas, som ambiente estofado. Exclusividade pura a bordo.</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-start gap-8 group">
              <Navigation className="w-16 h-16 shrink-0 text-[#c9a050] group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
              <div>
                <h4 className="text-[28px] font-serif font-bold mb-4 text-white hover:text-sand-gold transition-colors">Linhas Expressas</h4>
                <p className="text-ocean-foam opacity-90 font-light text-lg leading-relaxed">Com hidrodinâmica perfeita, cortamos o mar em tempo recorde fugindo do congestionamento litorâneo de outras operadoras antigas.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Embla Testimonials Section */}
      <section className="relative py-40 overflow-hidden flex flex-col items-center">
        {/* Blurred background photo */}
        <div className="absolute inset-0 z-0 bg-ocean-navy">
          <img src={IMG_DEPOIMENTOS} className="w-full h-full object-cover blur-[14px] opacity-25 scale-110" alt="Mar fundo" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 pt-10 pb-10">
          <div className="max-w-[1000px] mx-auto overflow-hidden" ref={emblaRef}>
            <div className="flex select-none cursor-grab active:cursor-grabbing">
              {/* Slide 1 */}
              <div className="flex-[0_0_100%] min-w-0 px-4 md:px-12 text-center text-white">
                <div className="font-serif text-[100px] leading-none text-sand-gold mb-0 h-14 drop-shadow-md">"</div>
                <p className="text-[32px] md:text-[44px] italic font-serif leading-[1.3] text-white tracking-wide mb-14 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)] pb-2 text-shadow-sm">
                  Excelente serviço. Fomos orientados por whatsapp desde SP até chegarmos no cais em Mangaratiba. A travessia foi hiper suave.
                </p>
                <div className="flex items-center justify-center gap-6">
                   <img src={IMG_PERSON1} className="w-20 h-20 rounded-full object-cover border-4 border-sand-gold" alt="Joana Alves" draggable="false" />
                   <div className="text-left">
                     <h5 className="font-serif font-bold text-2xl tracking-[0.05em]">Joana Alves</h5>
                     <p className="font-sans text-ocean-foam text-sm tracking-widest uppercase mt-1">São Paulo, SP</p>
                   </div>
                </div>
              </div>
              {/* Slide 2 */}
              <div className="flex-[0_0_100%] min-w-0 px-4 md:px-12 text-center text-white">
                <div className="font-serif text-[100px] leading-none text-sand-gold mb-0 h-14 drop-shadow-md">"</div>
                <p className="text-[32px] md:text-[44px] italic font-serif leading-[1.3] text-white tracking-wide mb-14 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)] pb-2 text-shadow-sm">
                  Nossa família ficou preocupada com maresia, mas o catamarã deles é fenomenal. Chegamos na Ilha Grande rindo à toa!
                </p>
                <div className="flex items-center justify-center gap-6">
                   <img src={IMG_PERSON2} className="w-20 h-20 rounded-full object-cover border-4 border-sand-gold" alt="Fernando Souza" draggable="false" />
                   <div className="text-left">
                     <h5 className="font-serif font-bold text-2xl tracking-[0.05em]">Fernando Souza</h5>
                     <p className="font-sans text-ocean-foam text-sm tracking-widest uppercase mt-1">Rio de Janeiro, RJ</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final (Booking Urgency) */}
      <section id="reserva" className="py-44 px-6 bg-[#fafbfc] text-center border-t border-gray-100 relative overflow-hidden">
        {/* Subtle decorative background glowing ball */}
        <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-ocean-surface/10 to-transparent blur-[80px] -z-10 rounded-full" />
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUp} className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-coral-accent/10 border border-coral-accent/20 text-coral-accent font-bold tracking-[0.15em] uppercase text-sm mb-12 shadow-sm animate-pulse">
            <span>⏰</span> FECHANDO ROTAS DA SEMANA — 12 Vagas Restantes
          </div>
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-[#0a1628] tracking-tight leading-[1.1]">
            O mar não espera,<br/>nem a sua aventura.
          </h2>
          <p className="text-2xl text-gray-500 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
            Reserve agora pelo nosso terminal via WhatsApp. Nossa equipe expedirá suas passagens na hora evitando tickets em guichês lotados.
          </p>
          <a
             href="https://wa.me/5521973521017?text=Olá! Quero travar minha reserva com vocês, tem vagas ainda?"
             className="btn-luxury text-[17px] py-6 px-12 shadow-[0_12px_45px_rgba(201,160,80,0.5)] transform hover:scale-105 inline-block"
          >
             PREPARAR MEU EMBARQUE
          </a>
          <p className="mt-10 text-sm text-gray-400 font-light tracking-wide">
            Equipe do porto de Mangaratiba 24hrs online. <span className="bg-sand-light/50 px-2 py-1 rounded text-[#c9a050] font-semibold ml-1">🔒 Link Seguro</span>
          </p>
        </motion.div>
      </section>
    </div>
  )
}
