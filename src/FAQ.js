import { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "How much does a legal consultation cost?",
    answer:
      "Consultation fees vary depending on the nature of the case. We offer an initial consultation to understand your needs and provide clarity on costs.",
  },
  {
    question: "How long do legal cases typically take?",
    answer:
      "The duration depends on the complexity of the case. Some matters are resolved quickly, while others may take longer due to legal procedures.",
  },
  {
    question: "Do you offer legal advice online?",
    answer:
      "Yes, we provide virtual consultations for clients who prefer remote legal assistance.",
  },
  {
    question: "What documents should I bring to my first meeting?",
    answer:
      "Bring all relevant documents, contracts, identification, and any correspondence related to your case.",
  },
  {
    question: "Do you handle cases outside Lagos?",
    answer:
      "Yes, we represent clients across Nigeria and can handle matters beyond Lagos depending on the case.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq-container">
        
        {/* HEADER */}
        <div className="faq-header">
          <p className="faq-subtitle">FAQ</p>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-line"></div>
        </div>

        {/* QUESTIONS */}
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggle(index)}
            >
              <div className="faq-question">
                <span>{item.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQ;