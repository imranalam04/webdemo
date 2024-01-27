import React, { useState } from "react";
// import './Question.css'

const Question = () => {
  const questions = [
    {
      id: 1,
      question: "Who's the ideal client for WGMI Labs?",
      answer:
        "WGMI Labs is the perfect partner for entrepreneurs and businesses of all sizes, looking to develop Software or enhance their operations with the power of advanced technology. We understand the hurdles of hiring a full-time developer – the time spent vetting candidates, the high costs, and the risk of mismatched skill sets.",
    },
    {
      id: 2,
      question: "Why wouldn't I just hire a full-time developer?",
      answer:
        "Excellent question! Hiring a full-time senior developer can be costly, with an average annual salary exceeding $120,000, plus the extra costs of benefits. The hiring process itself can also be lengthy and challenging. More importantly, your workload might fluctuate, leading to periods when you don't have enough tasks to fully utilize a full-time developer. By using our subscription agency membership, you only pay for the development work you need, enjoy the flexibility to pause or resume your subscription as required, and avoid the financial burden of an underutilized in-house developer.",
    },
    {
      id: 3,
      question: "Is there a limit to how many tasks or projects I can have?",
      answer:
        "With our subscription service, you can add or edit as many tasks in your queue as you need. Our team will compile multiple tasks in your queue and turn them into weekly . Tasks inside of a sprint will be completed that week, and each week a new sprint will be created, comprised of new tasks.  Each task in a sprint will go into once completed ensuring that it's completed to your satisfaction before moving on.",
    },
    {
      id: 4,
      question: "How long does it take to complete a development task?",
      answer:
        "The turnaround time for your software depends on the complexity of the task. On average, most tasks requests are completed in just 24-72 hours. However, more complex tasks may take longer to finish",
    },
    {
      id: 5,
      question: "What if I'm not satisfied with the software solution?",
      answer:
        "No worries! Your satisfaction is our priority. If you're not happy with the software solution, we'll work on revising it until you're 100% satisfied with the result.",
    },
    {
      id: 6,
      question:
        "What happens if I don't need development work for a certain month?",
      answer:
        "If you don't need any work for a specific month, you can pause your subscription and resume it when you need our services again. There are no penalties or additional fees for pausing your subscription.",
    },
    {
      id: 7,
      question: "Is there a Refund Policy?",
      answer:
        "Due to the high quality nature of the work, there will be no refunds issued once a Task is active and has started.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <section className="py-[3%] ">
        <div className="container mx-auto ">
          <h1 className="text-black text-3xl lg:text-5xl font-bold font-heading text-center md:flex md:mx-40">
            Frequently asked questions?
          </h1>
        </div>
      </section>
      <div className="flex items-center justify-center">
        <div className="w-9/12 flex flex-col justify-center gap-3">
          {questions.map((q, index) => (
            <div
              key={q.id}
              className={`collapse collapse-arrow bg-white border-black border-t-2 border-4 ${
                index === activeIndex ? "open" : null
              }`}
            >
              <input
                type="radio"
                name="my-accordion-2"
                checked={index === activeIndex}
                onChange={() => handleToggle(index)}
              />
              <div className="collapse-title text-xl font-medium text-slate-900 ">
                {q.question}
              </div>
              <div className="collapse-content text-slate-800">
                <p>{q.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
