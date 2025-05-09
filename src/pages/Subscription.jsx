import React from "react";

const Subscription = () => {
  const plan = {
    name: "Pro",
    price: "$49/mo",
    features: ["Unlimited AI Calls", "Voice Cloning", "Priority Support"]
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-8">My Subscription</h1>
      <div className="bg-white shadow rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-semibold">{plan.name} Plan</h2>
        <p className="text-2xl font-bold">{plan.price}</p>
        <ul className="list-disc list-inside">
          {plan.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
        <button className="mt-4 bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">
          Upgrade Plan
        </button>
      </div>
    </div>
  );
};

export default Subscription;