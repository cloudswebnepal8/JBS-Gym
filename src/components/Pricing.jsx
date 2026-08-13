import "./Pricing.css";

const plans = [
  {
    name: "Basic",
    price: "₹899",
    popular: false,
    features: [
      "Access to Gym Facilities",
      "No Personal Training",
      "Limited Access to Group Classes",
      "Self-Guided Workouts",
      "No Support",
    ],
  },
  {
    name: "Pro",
    tag: "(Most Popular)",
    price: "₹1999",
    popular: true,
    features: [
      "Access to All Gym Facilities",
      "2 Personal Training Sessions per Month",
      "Unlimited Access to Group Classes",
      "Diet Consultation",
      "Priority Support",
    ],
  },
  {
    name: "Peronal Training",
    price: "₹2999",
    popular: false,
    features: [
      "Unlimited Access to All Gym Facilities",
      "Unlimited Personal Training Sessions",
      "Custom Diet Plans",
      "Priority Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <h2 className="pricing__title">Pricing</h2>

        <div className="pricing__grid">
          {plans.map((plan) => (
            <div
              className={`pricing-card ${
                plan.popular ? "pricing-card--popular" : ""
              }`}
              key={plan.name}
            >
              <h3>{plan.name}</h3>
              {plan.tag && (
                <span className="pricing-card__tag">{plan.tag}</span>
              )}
              <div className="pricing-card__price">
                {plan.price}
                <span>/Month</span>
              </div>

              <ul>
                {plan.features.map((f) => (
                  <li key={f}>
                    <span>✓</span> {f}
                  </li>
                ))}
              </ul>

              <button className="btn btn-outline pricing-card__cta">
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
