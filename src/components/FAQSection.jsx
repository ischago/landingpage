import React, { useState } from "react";

const FAQItem = ({ question, answer, isOpen, onClick, list }) => {
  return (
    <div className="bg-[#FFFFFF]/10 backdrop-blur-sm rounded-lg overflow-hidden transition-colors duration-300">
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={onClick}
      >
        <h3 className="font-neue-bold text-[#9DE0A7] text-lg select-none">
          {question}
        </h3>
        <span className="text-white text-2xl font-light">
          {isOpen ? "−" : "+"}
        </span>
      </div>
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-4 pt-0 text-[#EDEDED] font-neue text-sm leading-relaxed">
            {answer}
            {list && (
              <ul>
                {list.map((item, index) => (
                  <li key={index}>
                    <span>- </span>
                    {item.text}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  const faqs = [
    {
      question: "¿Para quién es esta Masterclass?",
      answer: "Es para ti si cumples cualquiera de estas condiciones:",
      list: [
        {
          text: "Sientes que tu contenido no refleja lo que realmente eres y sabes que eres capaz de tener más atención.",
        },
        {
          text: " Estás cansado de copiar formatos que “funcionan” o buscar “modas” que no te representan.",
        },
        { text: "Quieres empezar a crear contenido y no ser uno más." },
        {
          text: "Quieres dejar de competir por atención y empezar a construir autoridad dentro de tu sector.",
        },
      ],
    },
    {
      question: "¿En qué se diferencia esta Masterclass?",
      answer:
        "Dentro trabajaremos en tu identidad, tu enfoque y la estructura mental que sostiene todo lo que creas. Dentro implementarás las prácticas necesarias para destacar y dominar la atención.",
    },
    {
      question: "¿Sirve si tengo pocos seguidores?",
      answer:
        "El contenido único no depende del tamaño de tu audiencia. De hecho, es muy inteligente aplicar esto cuando estás empezando para asentar unas bases sólidas.",
    },
    {
      question: "¿Y si ya llevo tiempo creando contenido?",
      answer:
        "Mejor, ya has dado el paso más importante, empezar a crear. Probablemente ya intuyes que hacer “lo que hace todo el mundo” no funciona. Ahora vas a entender cómo diferenciarte sin copiar fórmulas virales que duran dos semanas.",
    },
    {
      question: "¿Necesito equipo profesional?",
      answer:
        "No, solo necesitas un móvil y conexión a internet para crear contenido único y empezar a ser relevante. Puede ver a personas con la mejor cámara del mundo y el mejor equipo que no llega a ningún lado, ese no va a ser tu caso.",
    },
    {
      question: "¿Cuánto tiempo necesito para aplicar lo que enseñas?",
      answer:
        "La masterclass dura 6 horas y 15 minutos. El tiempo suficiente para que no te pierdas con un exceso de teoría. Desde el primer momento en el que empieces a aplicar los primeros aprendizajes empezarás a ver grandes cambios.",
    },
    {
      question: "¿Esto sirve para mi nicho?",
      answer:
        "Sí, sirve para tu nicho. La atención es la moneda de cambio de este siglo y si la dominas multiplicarás tus resultados de forma exponencial, independientemente de lo que te dediques.",
    },
    {
      question: "¿Cuál es el precio?",
      answer: "147€",
    },
    {
      question: "¿Y si me parece caro?",
      answer:
        "Si de verdad crees que no vas a amortizar 147€ en cuanto veas los primeros 10 minutos de esta masterclass y dominando la habilidad más demandada del mercado… entonces eres demasiado desconfiado. Mejor no entres.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="rounded-t-4xl bg-[#163A11] min-h-screen relative overflow-hidden flex flex-col items-center py-20 px-4">
      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="font-instrument-serif italic text-6xl text-[#9DE0A7] leading-none">
          FAQs
        </h2>
        <h2 className="font-neue-bold text-4xl text-[#9DE0A7] tracking-tight -mt-2">
          ¿TIENES DUDAS?
        </h2>
      </div>

      {/* FAQ List */}
      <div className="w-full max-w-2xl flex flex-col gap-4 relative z-10">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            list={faq?.list}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>

      {/* Footer / Directed By */}
      <div className="mt-24 text-center relative z-10">
        <p className="font-neue-light text-[#9DE0A7] text-xl tracking-widest uppercase mb-2">
          DIRECTED BY
        </p>
        <h2 className="font-instrument-serif italic max-[480px]:text-[80px] text-[120px] md:text-[180px] bg-linear-to-b from-[#9DE0A7] via-[#457345] to-[#163A11] bg-clip-text text-transparent leading-[1.2] px-10 select-none pointer-events-none">
          Jaquebue
        </h2>
      </div>
    </section>
  );
}
