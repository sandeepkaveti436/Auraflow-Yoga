const plans = [
  {
    name: "Basic",
    price: "$29",
    description: "Begin your practice with foundational classes and guided meditations.",
    features: [
      "4 classes / month",
      "Library of meditations",
      "Mobile app access",
      "Community circle",
    ],
  },
  {
    name: "Premium",
    price: "$59",
    description: "Unlimited live and on-demand flows with master teachers.",
    features: [
      "Unlimited classes",
      "Live streamed sessions",
      "1:1 monthly check-in",
      "Wellness journal",
      "Priority booking",
    ],
    featured: true,
  },
  {
    name: "Pro",
    price: "$129",
    description: "Personalized coaching, retreats access and bespoke programs.",
    features: [
      "Everything in Premium",
      "Personal coach",
      "Retreats access",
      "Nutrition plan",
      "Concierge support",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="fade-up relative overflow-hidden bg-[#fff3fa] px-6 pb-24 pt-28 text-[#111827] md:pb-32 md:pt-32"
    >
      <div className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-[#d7b5ff]/35 blur-3xl" />
      <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-[#ffd1e7]/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-8 text-xs font-medium uppercase tracking-[0.55em] text-[#a873e8]">
            Membership
          </p>
          <h2 className="font-serif text-6xl leading-none md:text-[68px]">
            Choose your <span className="text-[#cc8fe5]">flow</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-[#4b5563]">
            Monthly. Cancel anytime. Every plan includes our signature breathwork
            series and a free 7-day trial.
          </p>
        </div>

        <div className="mt-16 grid gap-7 lg:grid-cols-3 lg:items-center">
          {plans.map((plan) => (
            <article
              className={`relative rounded-[26px] p-10 text-left ${
                plan.featured
                  ? "bg-gradient-to-br from-[#080d1c] via-[#131327] to-[#4a356d] text-white shadow-[0_34px_80px_rgba(28,21,48,0.35)] lg:-translate-y-3"
                  : "border border-white/80 bg-white/70 shadow-[0_28px_80px_rgba(193,161,205,0.18)] backdrop-blur"
              }`}
              key={plan.name}
            >
              <div className="mb-8 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#a873e8]">
                  {plan.name}
                </p>
                {plan.featured && (
                  <span className="rounded-full bg-[#c28be8] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                    Most loved
                  </span>
                )}
              </div>

              <div className="flex items-end gap-2">
                <span className="font-serif text-6xl leading-none">{plan.price}</span>
                <span className={`mb-2 text-base ${plan.featured ? "text-white/60" : "text-gray-500"}`}>
                  / month
                </span>
              </div>

              <p className={`mt-6 min-h-16 leading-7 ${plan.featured ? "text-white/70" : "text-gray-600"}`}>
                {plan.description}
              </p>

              <ul className="mt-9 space-y-4">
                {plan.features.map((feature) => (
                  <li className="flex items-center gap-4" key={feature}>
                    <span
                      className={`grid h-5 w-5 shrink-0 place-items-center rounded-full text-xs ${
                        plan.featured ? "bg-[#c28be8]/35 text-white" : "bg-[#edd9ff] text-[#a873e8]"
                      }`}
                    >
                      ✓
                    </span>
                    <span className={plan.featured ? "text-white/78" : "text-gray-700"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                className={`mt-11 flex h-13 items-center justify-center rounded-full text-sm font-bold transition hover:scale-[1.02] ${
                  plan.featured
                    ? "bg-gradient-to-r from-[#ae77e8] to-[#ebb0d9] text-white shadow-[0_16px_34px_rgba(184,123,226,0.28)]"
                    : "border border-gray-300 bg-white/30 text-[#111827]"
                }`}
                href="#contact"
              >
                Start free trial
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
