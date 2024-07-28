import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/Layout";
import KnowledgeBase from "./pages/KnowledgeBase";
import CreateCampaign from "./pages/CreateCampaign";
import MakeCalls from "./pages/MakeCalls";
import CampaignList from "./pages/CampaignList";

// TOINGG_API_KEY="tg_71836293-0710-47f3-bc75-0da0997a3deb-wzWokn6_w1sYK8zLZmDf9g"

function App() {
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
