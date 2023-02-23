import { CheckIcon } from "@heroicons/react/24/outline";

const pricing = {
  tiers: [
    {
      title: "Smaller Teams",
      price: "££",
      // frequency: "/month",
      description: "The essentials to provide your best work for clients.",
      features: [
        "Personalised Automation",
        "1-2 reports",
        "Up to 20 users",
        "One off Solution",
        "Ownership of the Solution",
      ],
      cta: "Contact us",
      mostPopular: false,
    },
    {
      title: "Enterprise",
      price: "£££",
      // frequency: "/month",
      description: "A plan that scales with your rapidly growing business.",
      features: [
        "Personalised Automation",
        "Rapid Prototyping",
        "Unlimited Users",
        "Advanced analytics",
        "Revisions of Final Solution",
        "Ongoing support",
      ],
      cta: "Contact us",
      mostPopular: true,
    },
    // {
    //   title: "Enterprise",
    //   price: "££££",
    //   // frequency: "/month",
    //   description: "Dedicated support and infrastructure for your company.",
    //   features: [
    //     "Unlimited products",
    //     "Unlimited subscribers",
    //     "Advanced analytics",
    //     "1-hour, dedicated support response time",
    //     "Marketing automations",
    //     "Custom integrations",
    //   ],
    //   cta: "Contact us",
    //   mostPopular: false,
    // },
  ],
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Pricing = () => {
  return (
    <div
      className="mx-auto max-w-7xl bg-white py-24 px-4 sm:px-6 lg:px-8"
      id="pricing"
    >
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none lg:text-6xl">
        Pricing plans for teams of all sizes
      </h2>
      <p className="mt-6 max-w-2xl text-xl text-gray-500">
        Each solution is tailored to your needs. We will work with you to create
        a solution that fits your business and your budget.
      </p>

      {/* Tiers */}
      <div className="mt-24 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:space-y-0">
        {pricing.tiers.map((tier) => (
          <div
            key={tier.title}
            className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">
                {tier.title}
              </h3>
              {tier.mostPopular ? (
                <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-indigo-500 py-1.5 px-4 text-sm font-semibold text-white">
                  Most popular
                </p>
              ) : null}
              <p className="mt-4 flex items-baseline text-gray-900">
                <span className="text-5xl font-bold tracking-tight">
                  £{tier.price}
                </span>
                <span className="ml-1 text-xl font-semibold">
                  {/* {tier.frequency} */}
                </span>
              </p>
              <p className="mt-6 text-gray-500">{tier.description}</p>

              {/* Feature list */}
              <ul role="list" className="mt-6 space-y-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex">
                    <CheckIcon
                      className="h-6 w-6 flex-shrink-0 text-indigo-500"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              className={classNames(
                tier.mostPopular
                  ? "bg-indigo-500 text-white hover:bg-indigo-600"
                  : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100",
                "mt-8 block w-full rounded-md border border-transparent py-3 px-6 text-center font-medium"
              )}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
