import React, { useState } from "react";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
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
      question: "¿Como se si esto es para mi?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Mauris maecenas commodo ornare commodo tristique. Sapien congue nec cras placerat egestas sollicitudin. Urna neque arcu tempor placerat nunc quam at. Neque habitasse condimentum sed sit euismod blandit. Pellentesque nunc elit eleifend praesent. Tincidunt tellus nunc placerat egestas. Quis ut faucibus at viverra a nec ornare quam pellentesque. Pharetra elit est malesuada nunc. Vitae velit proin eu tempor in. Lacus sed dolor lacus id porttitor. Imperdiet facilisis leo id amet magna lectus ligula pellentesque cursus. Ornare potenti lacus mattis mi at eu habitasse nec.",
    },
    {
      question: "¿Tendré soporte?",
      answer:
        "Sí, contarás con soporte continuo a través de nuestra plataforma y comunidad exclusiva.",
    },
    {
      question: "¿En qué se diferencia de otras?",
      answer:
        "Esta masterclass se enfoca en potenciar tu estilo único y convertirte en un creador auténtico, no solo en enseñarte herramientas técnicas.",
    },
    {
      question: "¿Haces factura?",
      answer:
        "Sí, emitimos factura válida para todos nuestros alumnos que la requieran.",
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
