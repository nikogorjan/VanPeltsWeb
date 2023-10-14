import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const faqData = [ 
    {
      question: 'What services do you provide?',
      answer: 'We offer a comprehensive range of services including tree removal, tree trimming, stump grinding, landscaping design, lawn maintenance, and seasonal cleanup.',
    },
    {
      question: 'How do I know if a tree needs to be removed?',
      answer: "Our certified arborists can evaluate the health and condition of your trees. We recommend removal if a tree is diseased, dead, poses a safety risk, or if it's interfering with structures or other trees.",
    },
    {
      question: "Can you help with emergency tree removal after a storm?",
      answer: "Absolutely! We provide emergency tree removal services to quickly address fallen or damaged trees caused by severe weather conditions.",
    },
    {
      question: "How often should I schedule tree trimming?",
      answer: " Tree trimming frequency depends on the type of trees you have. Generally, deciduous trees should be trimmed every 3-5 years, while evergreens may require less frequent trimming.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleQuestionClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className='faq-main'>
    <div className='faq-layout'>
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${expandedIndex === index ? 'expanded' : ''}`}
          onClick={() => handleQuestionClick(index)}
        >
          <div className='faq-question'>{faq.question}</div>
          <div
            className='faq-answer'
            style={{ height: expandedIndex === index ? '120px' : '0' }}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default FAQ;