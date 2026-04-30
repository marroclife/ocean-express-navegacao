import { useState } from 'react'
import { MapPin, Phone, Mail, Navigation, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const WA_BASE = 'https://wa.me/5521973521017?text='

export default function Contato() {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [mensagem, setMensagem] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const texto = encodeURIComponent(
      `Olá! Meu nome é ${nome || '...'} (${telefone || 'sem telefone'}). ${mensagem || 'Vim pelo site e quero informações sobre as travessias.'}`
    )
    window.open(WA_BASE + texto, '_blank')
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="bg-white-soft min-h-screen pt-20">
      {/* Hero / H1 */}
      <section className="relative bg-ocean-abyss text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-abyss/80 via-ocean-deep/70 to-ocean-abyss z-10" />
        <div className="container mx-auto text-center relative z-20">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-tight drop-shadow-xl"
          >
            Fale com Especialistas
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-sand-light font-light max-w-2xl mx-auto opacity-90"
          >
            A tripulação da Ocean Express está sempre à disposição para planejar sua jornada na baía de Mangaratiba.
          </motion.p>
        </div>
      </section>

      {/* Formulário + Info */}
      <section className="py-24 px-6 bg-white shrink-[0_0_100%] shadow-sm relative z-30 -mt-10 rounded-t-[40px]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-5 gap-12 lg:gap-20">
            {/* Formulário */}
            <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} className="md:col-span-3">
              <div className="bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-8 lg:p-12">
                <h2 className="text-3xl font-serif font-bold text-ocean-abyss mb-8">
                  Deixe uma mensagem
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-ocean-deep mb-2 uppercase tracking-wide">Nome Completo</label>
                    <input
                      type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Como gosta de ser chamado?"
                      className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-coral-accent/50 focus:border-coral-accent transition-all text-gray-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ocean-deep mb-2 uppercase tracking-wide">Telefone / WhatsApp</label>
                    <input
                      type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="(21) 99999-9999"
                      className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-coral-accent/50 focus:border-coral-accent transition-all text-gray-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ocean-deep mb-2 uppercase tracking-wide">Como podemos ajudar?</label>
                    <textarea
                      value={mensagem} onChange={(e) => setMensagem(e.target.value)} placeholder="Detalhes da sua viagem, dúvidas ou orçamentos." rows={5}
                      className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-coral-accent/50 focus:border-coral-accent transition-all text-gray-800 resize-none"
                    />
                  </div>
                  <button type="submit" className="w-full btn-primary text-center flex items-center justify-center gap-3 py-5 text-[15px]">
                    INICIAR CONVERSA <MessageCircle className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Info + Mapa */}
            <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} className="md:col-span-2 flex flex-col justify-center">
              <h2 className="text-3xl font-serif font-bold text-ocean-abyss mb-8">Nossa Base</h2>
              <div className="space-y-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="bg-ocean-foam p-3 rounded-xl shrink-0"><MapPin className="text-ocean-deep w-6 h-6" /></div>
                  <div>
                    <p className="font-bold text-ocean-abyss text-lg mb-1">Cais de Mangaratiba</p>
                    <p className="text-gray-500 leading-relaxed font-light">Centro, Mangaratiba — RJ<br/>Embarque facilitado com acesso comercial e estacionamento próximo.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-ocean-foam p-3 rounded-xl shrink-0"><Phone className="text-ocean-deep w-6 h-6" /></div>
                  <div>
                    <p className="font-bold text-ocean-abyss text-lg mb-1">Central Operacional</p>
                    <p className="text-gray-500 leading-relaxed font-light">+55 21 97352-1017<br/>Disponíveis via chamado telefônico ou texto.</p>
                  </div>
                </div>
              </div>

              {/* Mapa embed premium style */}
              <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  title="Localização Ocean Express"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.0!2d-44.0477!3d-23.0406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzI2LjIiUyA0NMKwMDInNTEuNyJX!5e0!3m2!1spt-BR!2sbr!4v1"
                  width="100%"
                  height="300"
                  style={{ border: 0, filter: 'contrast(1.2)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
