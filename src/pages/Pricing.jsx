import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0/mo",
      features: ["5 AI Calls/month", "Basic Accent Conversion", "Limited Support"],
      cta: "Sign Up",
    },
    {
      name: "Pro",
      price: "$49/mo",
      features: ["Unlimited AI Calls", "Voice Cloning", "Priority Support", "Call Recordings"],
      cta: "Upgrade to Pro",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Team Accounts", "Dedicated AI Voice", "Custom CRM Integration", "24/7 Support"],
      cta: "Contact Sales",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-4">Pricing Plans</h1>
      <p className="text-center text-gray-500 mb-10">
        Choose a plan that fits your business needs. Cancel anytime.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border rounded-xl p-6 shadow-lg flex flex-col ${
              plan.highlighted ? "bg-purple-700 text-white" : "bg-white"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-3xl font-bold mb-4">{plan.price}</p>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-green-500">✔</span> {feature}
                </li>
              ))}
            </ul>
            <Link
              to={plan.name === "Enterprise" ? "/contact" : "/signup"}
              className={`mt-auto inline-block px-4 py-2 rounded text-center ${
                plan.highlighted
                  ? "bg-white text-purple-700 font-bold"
                  : "bg-purple-700 text-white hover:bg-purple-800"
              }`}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;