import { useContext } from "react";
import { CampaignContext } from "../context/CampaignContext";

const CampaignList = () => {
  const { campaigns } = useContext(CampaignContext);

  console.log(campaigns);

  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {campaigns.map((campaign) => (
        <div
          key={campaign.title}
          className="py-5 px-8 bg-orange-200 text-gray-900 dark:bg-green-600 border border-orange-400 dark:border-green-500 dark:text-white rounded-md flex flex-col gap-2 w-[300px]"
        >
          <div className="flex gap-2">
            <h3 className="font-semibold">Title:</h3>
            <h3>{campaign.title}</h3>
          </div>
          <div className="flex gap-2">
            <p className="font-semibold">Purpose:</p>
            <p>{campaign.purpose}</p>
          </div>
          <div className="flex gap-2">
            <p className="font-semibold">Voice:</p>
            <p>{campaign.voice}</p>
          </div>
          <div className="flex gap-2">
            <p className="font-semibold">Language:</p>
            <p>{campaign.language}</p>
          </div>
          <div className="flex gap-2">
            <p className="font-semibold">First Line:</p>
            <p>{campaign.firstLine}</p>
          </div>
          <div className="flex gap-2">
            <p className="font-semibold">Tone:</p>
            <p>{campaign.tone}</p>
          </div>
          <div className="flex gap-2">
            <p className="font-semibold">Calendar:</p>
            <p>{campaign.calendar}</p>
          </div>
          <div className="flex gap-2">
            <p className="font-semibold">Post Call Analysis:</p>
            <p>{campaign.postCallAnalysus ? "Yes" : "No"}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CampaignList;
