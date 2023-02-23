import { Container } from "./Container";
import backgroundImage from "../images/background-features.jpg";
import Image from "next/image";

const faqs = [
  [
    {
      question: "Isn't automation too expensive?",
      answer:
        "Well no, there are many steps that can be automated for a lower cost than most people realise. This is also offset by the time saved by your team allowing you to save over the long term.",
    },
    {
      question: "How long does it take to implement?",
      answer:
        "As with many things, it depends. However we try to have an initial meeting with you where we're able to assess the work that is required, and give you an estimate. If you are interested in excel automation, we can usually have a working prototype within a week.",
    },
    {
      question: "We already have reports generated, why do we need you?",
      answer:
        'That\'s great, but how many of those reports are personalised to your needs. How many hours does your team waste making these "Automated" reports work for you?',
    },
  ],
  // [
  //   {
  //     question: "What was that testimonial about tax fraud all about?",
  //     answer:
  //       "TaxPal is just a software application, ultimately your books are your responsibility.",
  //   },
  //   {
  //     question:
  //       "TaxPal sounds horrible but why do I still feel compelled to purchase?",
  //     answer:
  //       "This is the power of excellent visual design. You just can’t resist it, no matter how poorly it actually functions.",
  //   },
  //   {
  //     question:
  //       "I found other companies called TaxPal, are you sure you can use this name?",
  //     answer:
  //       "Honestly not sure at all. We haven’t actually incorporated or anything, we just thought it sounded cool and made this website.",
  //   },
  // ],
  [
    {
      question: "How do you actually automate things?",
      answer:
        "We are able to generate automation solutions in a varierty of forms, from simple scripts that are run locally, web applications, to personalised software. We can also create solutions that will integrate with any systems you already have in place.",
    },
    {
      question: "I have an automation idea but I don't know if it' possible?",
      answer:
        "Great, we love a challenge. Send us an message and we will get back to you with solution options.",
    },
    {
      question: "I would like to automate tasks but don't have a big budget?",
      answer:
        "There are a variety of solutions for smaller budgets and we are able to work with you to find a solution that fits you. There is rarely a one size fits all solution.",
    },
  ],
];

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-gray-100 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-200">
            If you can’t find what you’re looking for, please get in touch
            below.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-100">
                      - {faq.question}
                    </h3>
                    <p className="mt-2 text-white">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
