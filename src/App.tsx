// src/App.tsx
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large black blob - top left */}
        <div className="absolute -top-60 -left-32 w-96 h-96 bg-black rounded-full opacity-80"></div>

        {/* Medium black blob - bottom right */}
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-black rounded-full opacity-60"></div>

        {/* Small accent blob - top right */}
        <div className="absolute -top-4 -right-28 w-64 h-64 bg-[#FFB800] rounded-full opacity-40"></div>

        {/* Geometric lines */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-lg mx-auto text-center space-y-12">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img
                src="dappcon-25-logo.png"
                alt="DappCon25 Logo"
                className="w-20 h-20 object-contain"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 w-20 h-20 bg-[#FFB800] rounded-lg opacity-20 blur-xl"></div>
            </div>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-black tracking-tight">
              Legal Notice
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-gray-600">
              Lottery
            </h2>
          </div>

          {/* Legal Text Section */}
          <div className="space-y-8 bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 shadow-2xl text-left text-gray-700">
            <p>
              This one-time promotional activity is organised by Gnosis Ecosystem (Cayman) Ltd. at Dappcon Berlin. No purchase is required to participate. The promotion consists of three independent prize draws, each awarding 10,000 Metri Core Group CRC to selected winners. Participants must be 18 years or older and physically present at Dappcon Berlin. Each eligible participant may enter each draw once. Rewards are distributed as part of a promotional onboarding campaign to the Metri wallet and to encourage user engagement. By participating, you acknowledge that this is a non-commercial promotional activity and accept that the organisers are not liable for differing interpretations of its legal status across jurisdictions. By participating, you further explicitly consent to the publication of the name associated with your Metri wallet account. This publication serves transparency purposes and is necessary for validating the integrity of this promotional activity. We welcome your feedback on the onboarding experience and Circles overall!
            </p>
            <p className="font-semibold mt-6">
              By clicking continue, you confirm that you have read and understood the legal conditions above.
            </p>
            <div className="flex justify-center">
              <Button
                onClick={() => console.log("Continue clicked")}
                className="h-14 px-8 bg-[#FFB800] hover:bg-[#E6A600] text-black font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
