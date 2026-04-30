export default function Galeria() {
  return (
    <div className="py-20 px-6 bg-gray-50 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-ocean-navy mb-4 text-center">Galeria de Belezas</h1>
        <p className="text-gray-600 text-center mb-10 text-lg">Deixe o visual da Costa Verde encantar você antes mesmo da viagem.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-200 h-64 rounded-xl shadow border-2 border-white flex items-center justify-center">
            <span className="text-4xl">🏝️</span>
          </div>
          <div className="bg-blue-300 h-64 rounded-xl shadow border-2 border-white flex items-center justify-center">
            <span className="text-4xl">⚓</span>
          </div>
          <div className="bg-cyan-200 h-64 rounded-xl shadow border-2 border-white flex items-center justify-center">
            <span className="text-4xl">🌊</span>
          </div>
          <div className="bg-cyan-300 h-64 rounded-xl shadow border-2 border-white flex items-center justify-center">
            <span className="text-4xl">⛵</span>
          </div>
          <div className="bg-blue-400 h-64 rounded-xl shadow border-2 border-white flex items-center justify-center">
            <span className="text-4xl">🌅</span>
          </div>
          <div className="bg-cyan-400 h-64 rounded-xl shadow border-2 border-white flex items-center justify-center">
            <span className="text-4xl">🚤</span>
          </div>
        </div>
      </div>
    </div>
  )
}
