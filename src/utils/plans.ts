import { IPlan } from "../interfaces/IPlan";

export const plans = {
  free: {
    name: "Free Plan",
    description:
      "Limited access to influencer verification with basic features to get started.",
    targetAudience:
      "New users or individuals who want to try out the platform.",
    features: [
      "Basic verification tool access",
      "No reports or analytics",
      "Community support",
    ],
    price: 0.0,
  } as IPlan,
  basic: {
    name: "Basic Plan",
    description:
      "Verification of a limited number of influencers and claims per month.",
    targetAudience: "Individuals or small businesses.",
    features: [
      "Basic access to the verification tool",
      "Limited monthly verifications",
      "Email support",
    ],
    price: 19.99,
  } as IPlan,
  professional: {
    name: "Professional Plan",
    description:
      "Higher number of monthly verifications, detailed reports, and access to more scientific sources.",
    targetAudience: "Influencers and health professionals.",
    features: [
      "Full access to the platform",
      "Unlimited influencer verification",
      "Detailed monthly reports",
    ],
    price: 49.99,
    verificationLimit: "Unlimited",
    reports: "Detailed reports with scientific sources",
  } as IPlan,
  enterprise: {
    name: "Enterprise Plan",
    description:
      "Customized plan for businesses that want to verify health claims made by influencers at scale.",
    targetAudience: "Businesses and large organizations.",
    features: [
      "Mass influencer verification",
      "Custom analytical reports",
      "Dedicated consulting",
      "Priority support",
    ],
    price: 199.99,
    verificationLimit: "Mass verification",
    reports: "Custom analytical reports",
  } as IPlan,
};
