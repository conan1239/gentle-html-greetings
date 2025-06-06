
import { FileText, Link, Image, List } from "lucide-react";

const ElementsShowcase = () => {
  const elements = [
    {
      icon: <FileText className="w-6 h-6" />,
      tag: "<h1>",
      name: "Cabeçalhos",
      description: "Títulos e subtítulos para organizar o conteúdo",
      example: "<h1>Título Principal</h1>",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      tag: "<p>",
      name: "Parágrafos",
      description: "Blocos de texto para conteúdo principal",
      example: "<p>Este é um parágrafo.</p>",
    },
    {
      icon: <Link className="w-6 h-6" />,
      tag: "<a>",
      name: "Links",
      description: "Conexões para outras páginas ou recursos",
      example: "<a href='#'>Link</a>",
    },
    {
      icon: <Image className="w-6 h-6" />,
      tag: "<img>",
      name: "Imagens",
      description: "Exibição de conteúdo visual",
      example: "<img src='image.jpg' alt='Descrição'>",
    },
    {
      icon: <List className="w-6 h-6" />,
      tag: "<ul>",
      name: "Listas",
      description: "Organização de itens em sequência",
      example: "<ul><li>Item 1</li></ul>",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      tag: "<div>",
      name: "Containers",
      description: "Agrupamento e organização de elementos",
      example: "<div>Conteúdo</div>",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Elementos HTML Essenciais
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça os principais elementos que formam uma página web
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {elements.map((element, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-blue-500">{element.icon}</div>
                <span className="font-mono text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  {element.tag}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {element.name}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {element.description}
              </p>
              
              <div className="bg-gray-50 rounded-lg p-3 border">
                <code className="text-xs text-gray-700 font-mono">
                  {element.example}
                </code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElementsShowcase;
