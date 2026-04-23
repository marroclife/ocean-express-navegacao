import { createFileRoute } from '@tanstack/react-router'
import React, { useState } from 'react'

export const Route = createFileRoute('/contato')({
  component: Contato,
  head: () => ({
    meta: [
      { title: 'Contato | Ocean Express Navegação — Mangaratiba' },
      { name: 'description', content: 'Entre em contato com a Ocean Express Navegação. Reserve sua travessia de Mangaratiba para Ilha Grande pelo WhatsApp ou formulário.' },
    ],
  }),
})

const WA_BASE = 'https://wa.me/5521973521017?text='

function Contato() {
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

  return (
    <div>
      {/* Hero / H1 */}
      <section className="relative bg-gradient-to-br from-ocean-navy to-blue-900 text-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl text-ocean-gold">
            Fale com a Ocean Express e reserve sua travessia hoje mesmo
          </p>
        </div>
      </section>

      {/* Formulário + Info */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulário */}
            <div>
              <h2 className="text-2xl font-bold text-ocean-navy mb-6">
                Envie uma mensagem
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Seu nome completo"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-navy focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    placeholder="(21) 99999-9999"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-navy focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    placeholder="Como podemos ajudar?"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-navy focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all hover:scale-[1.02]"
                >
                  Enviar Mensagem via WhatsApp
                </button>
              </form>
            </div>

            {/* Info + Mapa */}
            <div>
              <h2 className="text-2xl font-bold text-ocean-navy mb-6">
                Informações de Contato
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold text-gray-800">Endereço</p>
                    <p className="text-gray-600">Centro, Mangaratiba — RJ</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-semibold text-gray-800">Telefone</p>
                    <p className="text-gray-600">+55 21 97352-1017</p>
                  </div>
                </div>
              </div>

              {/* Mapa embed */}
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  title="Localização Ocean Express"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.0!2d-44.0477!3d-23.0406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzI2LjIiUyA0NMKwMDInNTEuNyJX!5e0!3m2!1spt-BR!2sbr!4v1"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA WhatsApp grande */}
      <section className="py-16 px-6 bg-gradient-to-br from-ocean-gold to-orange-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Prefere falar direto?
        </h2>
        <p className="text-lg mb-8">
          Clique abaixo e converse conosco pelo WhatsApp agora mesmo.
        </p>
        <a
          href="https://wa.me/5521973521017?text=Olá! Vim pelo site e quero informações sobre as travessias"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all hover:scale-105"
        >
          Falar no WhatsApp 🚀
        </a>
      </section>
    </div>
  )
}
