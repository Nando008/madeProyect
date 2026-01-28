import { useEffect, useState } from 'react';
import NavbarPage from "../componentes/navbar";
import FooterPage from "../componentes/footer";

function ViewSobreMi() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarPage />

      <main className="flex-grow bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 px-6 py-10">
        {/* Hero Section */}
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-900 via-blue-800 to-cyan-950 bg-clip-text text-transparent">
              Sobre Mí
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Image Section */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-cyan-400 rounded-3xl transform rotate-3 opacity-20"></div>
                <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
                  <img 
                    src="https://raw.githubusercontent.com/Nando008/madeProyect/main/products/src/assets/img/made.jpeg" 
                    alt="Fisioterapeuta profesional" 
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-30 blur-2xl"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-30 blur-xl"></div>
              </div>
            </div>

            {/* Text Section */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
                  Fisioterapeuta Certificada
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Esp. Madelin Benavides
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Con más de 10 años de experiencia en fisioterapia, mi pasión es ayudar a las personas a recuperar su movilidad y mejorar su calidad de vida. Creo firmemente en un enfoque holístico que combina técnicas tradicionales con los últimos avances en rehabilitación.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Mi objetivo es no solo tratar el dolor, sino entender la causa raíz y trabajar contigo para crear un plan de tratamiento personalizado que se adapte a tus necesidades únicas.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {[
              { number: "4+", label: "Años de Experiencia" },
              { number: "200+", label: "Pacientes Tratados" },
              { number: "95%", label: "Tasa de Satisfacción" },
              { number: "2+", label: "Certificaciones" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Education & Certifications */}
          <div className={`mb-20 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Formación y Especialidades
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Education */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">Educación</h4>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-800">Licenciatura en Fisioterapia</p>
                      <p className="text-sm text-gray-600">Universidad Nacional, 2013</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-800">Maestría en Rehabilitación Deportiva</p>
                      <p className="text-sm text-gray-600">Universidad de Barcelona, 2016</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-800">Doctorado en Terapia Manual</p>
                      <p className="text-sm text-gray-600">Instituto de Terapias Avanzadas, 2019</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Specialties */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">Especialidades</h4>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {[
                    "Terapia Manual",
                    "Rehabilitación Deportiva",
                    "Fisioterapia Neurológica",
                    "Punción Seca",
                    "Osteopatía",
                    "Pilates Terapéutico",
                    "Tratamiento ATM",
                    "Fisioterapia Respiratoria"
                  ].map((specialty, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 rounded-full text-sm font-medium border border-cyan-200 hover:border-cyan-400 transition-all duration-300"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className={`bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-3xl p-12 shadow-2xl transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-42 h-42 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6 overflow-hidden">
                <img
                    src="https://raw.githubusercontent.com/Nando008/madeProyect/main/products/src/assets/img/logo.jpeg"
                    alt="Ícono filosofía"
                    className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Mi Filosofía</h3>
              
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                "Creo que cada paciente es único y merece un tratamiento personalizado. Mi enfoque se basa en escuchar, entender y crear un plan terapéutico que no solo alivie el dolor, sino que también eduque y empodere a mis pacientes para mantener su salud a largo plazo."
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium text-gray-800">Empatía</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium text-gray-800">Profesionalismo</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium text-gray-800">Compromiso</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              ¿Listo para comenzar tu recuperación?
            </h3>
          </div>
        </div>
      </main>

      <FooterPage />
    </div>
  );
}

export default ViewSobreMi;