export default function Blog() {
  return (
    <div className="py-20 px-6 bg-white min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-ocean-navy mb-8">Notícias & Dicas da Ilha</h1>
        
        <div className="flex flex-col gap-8">
          <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-ocean-navy mb-2">As 5 Praias Imperdíveis em Ilha Grande</h2>
            <p className="text-sm text-gray-500 mb-4">Postado em: 10 de Novembro, 2025</p>
            <p className="text-gray-700">Lopes Mendes, Aventureiro, Dois Rios... prepare seu protetor solar e conheça as maravilhas intocadas em nossa compilação das águas mais limpas do Brasil!</p>
            <button className="text-ocean-navy font-bold mt-4 hover:underline">Ler Mais →</button>
          </div>
          <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-ocean-navy mb-2">Qual a melhor época para a Travessia?</h2>
            <p className="text-sm text-gray-500 mb-4">Postado em: 02 de Outubro, 2025</p>
            <p className="text-gray-700">Análise do clima na Costa Verde e dicas imperdíveis para evitar contratempos turísticos.</p>
            <button className="text-ocean-navy font-bold mt-4 hover:underline">Ler Mais →</button>
          </div>
        </div>
      </div>
    </div>
  )
}
