
import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
            Hello World
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Bem-vindo ao mundo do <span className="font-semibold text-blue-600">HTML</span>
          </p>
          <div className="text-lg text-gray-500 space-y-2">
            <p>Sua jornada na programação web começa aqui</p>
            <p className="text-sm">Explorando os fundamentos do desenvolvimento web</p>
          </div>
        </div>
        
        <div
          className={`mt-16 transition-all duration-1000 ease-out delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
            <code className="text-sm md:text-base text-gray-700 font-mono">
              &lt;html&gt;<br />
              &nbsp;&nbsp;&lt;body&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello World&lt;/h1&gt;<br />
              &nbsp;&nbsp;&lt;/body&gt;<br />
              &lt;/html&gt;
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
