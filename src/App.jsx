// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// React
import { useState } from "react";

// Pages and Components
import Layout from "./components/Layout";
import KnowledgeBase from "./pages/KnowledgeBase";
import CreateCampaign from "./pages/CreateCampaign";
import MakeCalls from "./pages/MakeCalls";
import CampaignList from "./pages/CampaignList";

function App() {
  // KnowledgeBase File Data
  const [fileData, setFileData] = useState();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CampaignList />} />
          <Route
            path="/knowledge-base"
            element={<KnowledgeBase setFileData={setFileData} />}
          />
          <Route
            path="/create-campaign"
            element={<CreateCampaign fileData={fileData} />}
          />
          <Route path="/make-call" element={<MakeCalls />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
