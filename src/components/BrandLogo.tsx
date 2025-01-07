import { Shield } from "lucide-react";

export function BrandLogo() {
  return (
    <div className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-800">
      <span className="flex items-center gap-2 font-semibold flex-shrink-0 mr-auto text-lg ">
        <Shield className="size-8 text-green-400" />
        VerifyInfluencers
      </span>
    </div>
  );
}
