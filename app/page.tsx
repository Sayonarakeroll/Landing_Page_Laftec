import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Menu, Search } from "lucide-react"
import Link from "next/link"

export default function LaftecLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#sobre" className="text-gray-700 hover:text-yellow-600 transition-colors">
                Sobre nós
              </Link>
              <Link href="#privacidade" className="text-gray-700 hover:text-yellow-600 transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#TechTuor" className="text-gray-700 hover:text-yellow-600 transition-colors">
                Tech Tour
              </Link>
              <Link href="#contato" className="text-gray-700 hover:text-yellow-600 transition-colors">
                Contato
              </Link>
              <Link href="#apoie" className="text-gray-700 hover:text-yellow-600 transition-colors">
                Apoie
              </Link>
            </nav>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>

            {/* Search */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input type="search" placeholder="Search..." className="pl-10 w-64 hidden sm:block" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        className="relative overflow-hidden py-20 min-h-[600px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-background.jpg')",
        }}
      >
        {/* Overlay sutil para melhor legibilidade do texto se necessário */}
        <div className="absolute inset-0 bg-black/5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="min-h-[500px] flex items-center">
            {/* Conteúdo centralizado ou posicionado conforme necessário */}
            <div className="w-full">
              {/* Espaço para o conteúdo já presente na imagem */}
              {/* O texto LAFTEC e a frase inspiradora já estão na imagem de fundo */}
            </div>
          </div>
        </div>
      </section>

      {/* SUBTITLE SECTION */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Liga Acadêmica Feminina de Tecnologia</h2>
            <div className="max-w-4xl mx-auto mt-6">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Promovendo a inclusão e o empoderamento feminino no universo da tecnologia através da educação, pesquisa
                e inovação no ambiente acadêmico.
              </p>
            </div>
            {/* CTA Buttons */}
            {/*<div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 shadow-lg">
                Junte-se à Liga
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-yellow-600 text-yellow-700 hover:bg-yellow-50 px-8 py-3 bg-transparent"
              >
                Nossos Projetos
              </Button>
            </div>*/}
          </div>
        </div>
      </section>


      {/* Conheça nosso time */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Conheça Nosso Time</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Uma equipe diversa e apaixonada por tecnologia e transformação social
            </p>
          </div>

          {/* colunas  */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-8">
            {[
              {
                name: "Ana Maria Maciel",
                role: "Coordenadora",
                image: "/membro-1.jpg"
              },
              {
                name: "Midori Sugaya",
                role: "Presidente",
                image: "/membro-2.jpg"
              },
              {
                name: "Rayane Bonheur",
                role: "Vice Presidente",
                image: "/membro-3.jpg"
              },
              {
                name: "Sayonara França",
                role: "Diretora de Comunicação e Marketing",
                image: "/membro-4.jpeg"
              },
              {
                name: "Rebeca Guimarães",
                role: "Diretora de Extensão",
                image: "/membro-5.jpg"
              }
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src={member.image}
                    alt={`Foto de ${member.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre nós */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Layout de duas colunas para a imagem e o texto */}
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

            {/* Coluna da Imagem (Esquerda) */}
            <div>
              <img
                src="/meninas.jpeg"
                alt="Uma imagem que representa a LAFTEC"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Coluna do Texto */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sobre Nós</h2>
              </div>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="text-xl leading-relaxed mb-6">
                  Somos uma iniciativa comprometida em promover um espaço inclusivo e acolhedor para mulheres na tecnologia.
                  Nosso propósito é reduzir as barreiras de gênero, ampliar a diversidade nas equipes de trabalho e
                  criar oportunidades reais de crescimento e protagonismo feminino no setor.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Acreditamos na força da representatividade e atuamos para inspirar e empoderar mulheres por meio de ações práticas.
                  Organizamos e participamos ativamente de eventos, realizamos coberturas especiais e promovemos experiências transformadoras como o Tech Tour,
                  que aproxima nossas participantes do mercado e das inovações tecnológicas.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Ações */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossas Ações</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Criamos iniciativas que conectam e inspiram mulheres, promovendo inclusão,
              desenvolvimento e protagonismo na tecnologia.
            </p>
          </div>

          {/* Galeria de Imagens das Ações */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { image: '/evento-doe1.jpg', alt: 'Ação de doação de Sangue' },
              { image: '/evento-doe2.jpg', alt: 'Ação de doação de Sangue' },
              { image: '/acao1.jpeg', alt: 'Descrição da Ação 3' },
            ].map((action, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={action.image} // <-- Coloque o caminho da sua imagem aqui
                  alt={action.alt}
                  className="w-full h-80 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end p-4">
                  <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    {action.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cobertura de eventos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
          </div>

          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cobertura de Eventos</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Momentos especiais dos nossos eventos e atividades
                </p>
              </div>

              {/* Grid de fotos */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {/* Array com os nomes das suas imagens */}
                {[
                  '/evento-1.jpeg',
                  '/evento-2.jpg',
                  '/evento-3.jpeg',
                  '/evento-4.jpeg',
                  '/evento-5.jpeg',
                  '/evento-6.jpg',
                  '/evento-7.jpg',
                  '/techwoman.jpeg',
                  '/techwoman1.jpeg'
                ].map((src, index) => (
                  <div key={src} className="relative group overflow-hidden rounded-lg">
                    <img
                      src={src} // <-- AQUI você usa o caminho da imagem
                      alt={`Foto do evento ${index + 1}`}
                      className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">Ver mais</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* O restante da sua seção continua aqui... */}

            </div>
          </section>

          {/* Seção de vídeos */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Vídeos dos Eventos</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((video) => (
              <div key={video} className="relative bg-gray-200 rounded-lg overflow-hidden">
                <div className="aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-gray-600">Vídeo do Evento {video}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Tour */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Tech Tour Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tech Tour</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma imersão que aproxima estudantes e profissionais do universo da tecnologia, revelando os bastidores das empresas,
              conectando talentos ao mercado e inspirando futuros digitais com experiências reais.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg mx-auto text-gray-600 text-center">
              <p className="text-lg leading-relaxed mb-8">
                O Tech Tour é uma iniciativa voltada para proporcionar aos participantes uma experiência prática e imersiva em empresas de tecnologia.
                Durante a visita, os participantes têm a oportunidade de conhecer de perto o dia a dia das equipes,
                entender os processos e desafios enfrentados no ambiente corporativo,
                além de identificar os principais requisitos técnicos e comportamentais exigidos no mercado.
                A atividade também promove o networking com profissionais da área e estimula a aplicação dos conhecimentos teóricos em contextos reais,
                contribuindo para o desenvolvimento pessoal e profissional dos envolvidos
              </p>
            </div>
          </div>

          {/* Galeria do Tech Tour */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {/* Array com os nomes das suas imagens */}
            {[
              '/techtour-1.jpeg',
              '/techtour-2.jpg',
              '/techtour-3.jpeg'

            ].map((src, index) => (
              <div key={src} className="relative overflow-hidden rounded-lg">
                <img
                  src={src} // <-- AQUI você usa o caminho da imagem
                  alt={`Momento do Tech Tour ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Depoimentos */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Depoimentos dos Participantes</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Emilly Dantas",
                role: "Estudante de Análise e Desenvolvimento de Sistemas",
                text: "O Tech Tour foi uma oportunidade muito interessante, nos proporcionou conhecer um pouco de como funciona uma empresa do ramo da tecnologia e fazer networking.",
                image: "/placeholder-user.jpg"
              },
              {
                name: "Eychila Meirelle",
                role: "Estudante de Análise e Desenvolvimento de Sistemas",
                text: "O Tech Tour foi uma experiência muito boa, onde eu pude ver de perto como funciona uma empresa no dia a dia, e também poder fazer networking que é muito importante. ",
                image: "/placeholder-user.jpg"
              },
            ].map((testimonial) => (
              <div key={testimonial.name} className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 overflow-hidden">
                    <img
                      src={testimonial.image} //USA A IMAGEM DEFINIDA ACIMA
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Mensagem final com logo */}
      <section className="py-16 bg-yellow-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center items-center gap-4 mb-6">
              <img
                src="/logo-laftec.png"
                alt="Logo da LAFTEC"
                className="h-16 w-auto" // <-- Ajuste a altura (h-16) conforme necessário
              />
              <h2 className="text-4xl font-bold text-white">
                LAFTEC
              </h2>
            </div>
            <p className="text-xl text-yellow-100 mb-8">Conecte-se conosco</p>

            <div className="flex justify-center space-x-8">
              <a href="mailto:contato@laftec.org" className="text-white hover:text-yellow-200 transition-colors">
                <div className="flex items-center space-x-2">
                  <Mail className="h-6 w-6" />
                  <span>laftec.uninassau@gmail.com</span>
                </div>
              </a>

              <a href="https://instagram.com/laftec" className="text-white hover:text-yellow-200 transition-colors">
                <div className="flex items-center space-x-2">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>@laftecuninassau</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer com assinatura */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-400 text-sm">

            <p>© 2025 LAFTEC. Todos os direitos reservados.</p>

            {/* Assinatura discreta do desenvolvedor */}
            <div className="mt-4 pt-4 border-t border-gray-800">
              <p className="text-xs text-gray-500">
                Desenvolvido por{" "}
                <span className="text-gray-400 hover:text-white transition-colors cursor-pointer"></span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
