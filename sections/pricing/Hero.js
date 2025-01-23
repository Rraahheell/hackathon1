"use client";

import React, { useState } from "react";

const Hero = () => {
  const [billing, setBilling] = useState("monthly"); // "monthly" or "yearly"
  const [selectedPlan, setSelectedPlan] = useState("standard"); // Default middle plan selected

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-screen-xl mx-auto px-6 text-center mt-12">
        {/* Header */}
        <h3 className="text-sm uppercase font-bold text-gray-500 mb-4 tracking-wider">
          PRICING
        </h3>
        <h1 className="text-5xl font-bold text-gray-800 mb-10 tracking-widest">
          Simple Pricing
        </h1>
        <p className="text-gray-500 mb-16 leading-relaxed text-lg">
          Choose the perfect plan that fits your needs and <br />
          enjoy exclusive features and benefits!
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-6 mb-16">
          {/* Monthly */}
          <span
            className={`text-lg font-bold cursor-pointer ${
              billing === "monthly" ? "text-gray-800" : "text-gray-400"
            }`}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </span>

          {/* Toggle Switch */}
          <div
            onClick={() => setBilling(billing === "monthly" ? "yearly" : "monthly")}
            className="relative flex items-center w-12 h-6 md:w-16 md:h-8 bg-gradient-to-r from-sky-300 to-sky-500 rounded-full cursor-pointer border-2 border-sky-500 shadow-md"
          >
            <div
              className={`absolute w-4 h-4 md:w-6 md:h-6 bg-white rounded-full transition-transform duration-300 shadow ${
                billing === "yearly" ? "translate-x-6 md:translate-x-8" : "translate-x-0"
              }`}
            ></div>
          </div>

          {/* Yearly */}
          <span
            className={`text-lg font-bold cursor-pointer ${
              billing === "yearly" ? "text-gray-800" : "text-gray-400"
            }`}
            onClick={() => setBilling("yearly")}
          >
            Yearly
          </span>

          {/* Save 25% */}
          <span className="ml-4 py-3 px-6 text-sm font-semibold bg-sky-200 text-sky-500 rounded-full">
            Save 25%
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "FREE",
              price: "0.00",
              description: "Perfect for trying things out or personal use.",
              offers: [
                { feature: "Unlimited product updates", included: true },
                { feature: "Community support", included: true },
                {
                  feature: "Basic analytics",
                  included: billing === "yearly",
                },
                { feature: "Priority support", included: false },
                { feature: "Custom integrations", included: false },
              ],
              limitedOffer: "Start Free Today!",
            },
            {
              name: "STANDARD",
              price: billing === "monthly" ? "9.99" : "7.49",
              description: "Great for small businesses and startups.",
              offers: [
                { feature: "Unlimited product updates", included: true },
                { feature: "Community support", included: true },
                { feature: "Advanced analytics", included: true },
                {
                  feature: "Priority support",
                  included: billing === "yearly",
                },
                { feature: "Custom integrations", included: false },
              ],
              limitedOffer: "Save 10% this month!",
            },
            {
              name: "PREMIUM",
              price: billing === "monthly" ? "19.9" : "14.9",
              description: "Ideal for growing businesses with complex needs.",
              offers: [
                { feature: "Unlimited product updates", included: true },
                { feature: "Priority support", included: true },
                { feature: "Custom integrations", included: true },
                { feature: "Personal account manager", included: true },
                {
                  feature: "Basic and Advanced analytics",
                  included: true,
                },
              ],
              limitedOffer: "Get 2 months free!",
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`border-2 border-sky-500 ${
                selectedPlan === plan.name.toLowerCase()
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-800"
              } shadow-sm p-8 h-auto hover:shadow-lg hover:scale-105 transition-transform duration-300 ${
                index === 1 ? "md:transform md:translate-y-16" : ""
              }`}
              onClick={() => setSelectedPlan(plan.name.toLowerCase())}
            >
              <h2 className="text-3xl my-20 font-bold mb-6">{plan.name}</h2>
              <p className="mb-6 leading-widest text-sm font-bold">
                {plan.description}
              </p>
              <div className="mb-10 flex my-8 justify-center items-end relative">
                <div className="text-5xl font-extrabold text-sky-500">
                  {plan.price}
                  <span className="text-xl font-bold text-sky-500">$</span>
                </div>

                <span className="text-sm uppercase font-semibold text-sky-500 ml-2">
                  per month
                </span>
              </div>
              <div className="text-gray-500 font-bold text-sm mb-4">
                {plan.limitedOffer}
              </div>
              <ul className="space-y-6 text-lg">
                {plan.offers.map((offer, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-white ${
                        offer.included
                          ? "bg-green-500"
                          : "bg-gray-300 text-gray-600"
                      }`}
                    >
                      &#10003;
                    </div>
                    <span
                      className={`${offer.included ? "" : " text-gray-500"}`}
                    >
                      {offer.feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
