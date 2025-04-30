export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-2">Olá, sou Rafael</h1>
      <p className="text-secondary text-lg mb-8">Desenvolvedor de software e aplicações web</p>

      <button className="px-6 py-2 border border-secondary text-secondary hover:bg-secondary hover:text-white transition rounded">
        Ver meus projetos
      </button>
    </main>
  )
}
