import { createContext, useState } from "react";

const dummyData = [
  {
    title: "Campaign - 1",
    voice: "jessica",
    language: "english",
    script:
      "Toingg revolutionizes the way businesses interact with their customers through AI-powered phone calls. Our API enables seamless integration of programmable voice agents into your communication workflows.",
    purpose: "Hobby",
    knowledgeBase: "",
    calendar: "10Am to 10Pm IST",
    firstLine: "First Line",
    tone: "Tone",
    postCallAnalysis: false,
    postCallAnalysisSchema: {},
  },
  {
    title: "Campaign - 2",
    voice: "jessica",
    language: "english",
    script:
      "Toingg revolutionizes the way businesses interact with their customers through AI-powered phone calls. Our API enables seamless integration of programmable voice agents into your communication workflows.",
    purpose: "Hobby",
    knowledgeBase: "",
    calendar: "10Am to 10Pm IST",
    firstLine: "First Line",
    tone: "Tone",
    postCallAnalysis: false,
    postCallAnalysisSchema: {},
  },
];

export const CampaignContext = createContext(dummyData);

export const CampaignProvider = ({ children }) => {
  const [campaigns, setCampaigns] = useState(dummyData);

  return (
    <CampaignContext.Provider value={{ campaigns, setCampaigns }}>
      {children}
    </CampaignContext.Provider>
  );
};
