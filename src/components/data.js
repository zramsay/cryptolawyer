import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Enhancing Crypto-Asset Integrity via Learn to Earn",
  desc: "Utilizes New European crypto regulations, promotes investor education, and trains & recruits evidentiary validators.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Utilizes New European Crypto Regulations",
      desc: "Leverages the latest European regulatory frameworks to strengthen crypto-asset integrity.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Promotes Investor Education",
      desc: "Encourages and enhances investor education to foster a more transparent ecosystem.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Trains & Recruits Evidentiary Validators",
      desc: "Actively trains and recruits validators who provide evidence-backed assurances.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Reducing Crypto-Asset Fraud by Gamifying Private Enforcement",
  desc: "Competitive litigation finance marketplace that increases ecosystem profitability and provides alpha for investors.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Competitive Litigation Finance Marketplace",
      desc: "Introduces a new competitive marketplace for litigation finance that enforces crypto-asset integrity.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Increases Services Ecosystem Profitability",
      desc: "Contributes to overall ecosystem profitability by aligning services and litigation finance strategies.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Provides Investors Alpha for a New Asset Class",
      desc: "Offers opportunity to investors in a newly emerging and rapidly evolving asset class.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
