// React
import { useState, useEffect, useContext } from "react";

// Campaign Context
import { CampaignContext } from "../context/CampaignContext";

// Axios Library
import axios from "axios";

// API KEY and URL
const API_KEY = import.meta.env.VITE_TOINGG_API_KEY;
const URL = import.meta.env.VITE_TOINGG_URL;

// Headers
const headers = {
  accept: "application/json",
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

const CreateCampaign = () => {
  const { setCampaigns } = useContext(CampaignContext);

  // Initial State of our data.
  const initialState = {
    title: "",
    purpose: "",
    voice: "robot",
    language: "english",
    script: "",
    firstLine: "",
    tone: "",
    knowledgeBase: "",
    calendar: "",
    postCallAnalysis: false,
    postCallAnalysisSchema: {},
  };

  const [voices, setVoices] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [id, setId] = useState("");
  const [campaign, setCampaign] = useState(initialState);
  const [update, setUpdate] = useState(false);

  // GET SUPPORTED VOICES
  useEffect(() => {
    async function getVoice() {
      const response = await axios.get(`${URL}/api/v3/get_supported_voices`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      });
      setVoices(response.data.result.voice);
    }

    // GET SUPPORTED LANGUAGES
    async function getLanguage() {
      const response = await axios.get(
        `${URL}/api/v3/get_supported_languages`,
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );
      setLanguages(response.data.result.languages);
    }

    getVoice();
    getLanguage();
  }, []);

  // CREATING THE CAMPAIGN
  async function createCampaign() {
    try {
      const response = await axios.post(
        `${URL}/api/v3/create_campaign/`,
        campaign,
        {
          headers,
        }
      );
      setCampaigns((prev) => [...prev, campaign]);
      setMessage(response.data.message);
      setId(response.data.result.campaignId);
      setCampaign(initialState);
    } catch (e) {
      setError(e.response.data.detail);
    }
  }

  // UPDATING THE CAMPAIGN
  async function updateCampaign() {
    const response = await axios.post(
      `${URL}/api/v3/update_campaign/`,
      { campaignModelData: campaign, campId: id },
      {
        headers,
      }
    );
    console.log(response);
  }

  return (
    <div className="flex flex-col justify-center items-center h-full select-none">
      <div className="w-[350px] tracking-wide">
        <h1 className="text-gray-500 text-2xl font-semibold dark:text-white mb-5">
          Create Campaign
        </h1>
        <div>
          <div className="flex gap-5 mb-3">
            <div className="w-full">
              <label className="dark:text-white mb-1 inline-block">
                Campaign ID
              </label>
              <input
                type="text"
                disabled={!update}
                required
                className="disabled:cursor-not-allowed disabled:dark:opacity-20 w-full rounded-md mb-1 text-sm dark:bg-gray-400 dark:text-white px-2 py-1 outline-none"
              />
              <div className="flex items-center gap-3">
                <label className="dark:text-white inline-block pb-[1px] text-xs">
                  Update Campaign?
                </label>
                <input
                  type="checkbox"
                  className="cursor-pointer"
                  value={update}
                  onChange={(e) => setUpdate(e.target.checked)}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-5 mb-3">
            <div>
              <label className="dark:text-white mb-1 inline-block">Title</label>
              <input
                className="w-full rounded-md text-sm dark:bg-gray-400 dark:text-white px-2 py-1 outline-none"
                placeholder="Your title"
                value={campaign.title}
                onChange={(e) =>
                  setCampaign({ ...campaign, title: e.target.value })
                }
              ></input>
            </div>
            <div>
              <label className="dark:text-white mb-1 inline-block">
                Purpose
              </label>
              <input
                className="w-full rounded-md text-sm dark:bg-gray-400 dark:text-white px-2 py-1 outline-none"
                placeholder="Your purpose"
                value={campaign.purpose}
                onChange={(e) =>
                  setCampaign({ ...campaign, purpose: e.target.value })
                }
              ></input>
            </div>
          </div>
          <div className="flex gap-5 mb-3">
            <div>
              <label className="dark:text-white mb-1 inline-block">Voice</label>
              <select
                onChange={(e) =>
                  setCampaign({ ...campaign, voice: e.target.value })
                }
                className="w-full rounded-md text-sm dark:bg-gray-400 dark:text-white px-2 py-1 outline-none"
              >
                {voices.length > 1 ? (
                  voices.map((voice) => (
                    <option value={voice.name} key={voice.name}>
                      {voice.name}
                    </option>
                  ))
                ) : (
                  <option>Loading...</option>
                )}
              </select>
            </div>
            <div>
              <label className="dark:text-white mb-1 inline-block">
                Language
              </label>
              <select
                onChange={(e) =>
                  setCampaign({ ...campaign, language: e.target.value })
                }
                className="w-full rounded-md text-sm dark:bg-gray-400 dark:text-white px-2 py-1 outline-none"
              >
                {languages.length > 1 ? (
                  languages.map((language) => (
                    <option value={language} key={language}>
                      {language}
                    </option>
                  ))
                ) : (
                  <option>Loading...</option>
                )}
              </select>
            </div>
          </div>
          <div>
            <label className="dark:text-white mb-1 inline-block">Script</label>
            <textarea
              onChange={(e) =>
                setCampaign({ ...campaign, script: e.target.value })
              }
              minLength="200"
              className="w-full rounded-md text-sm dark:bg-gray-400 dark:text-white px-2 py-1 outline-none resize-none"
              placeholder="Add your script (minimum 200 characters)"
              rows={5}
              value={campaign.script}
            ></textarea>
          </div>
          <div className="flex gap-5 mb-3">
            <div>
              <label className="dark:text-white mb-1 inline-block">
                First Line
              </label>
              <input
                onChange={(e) =>
                  setCampaign({ ...campaign, firstLine: e.target.value })
                }
                value={campaign.firstLine}
                className="w-full rounded-md text-sm dark:bg-gray-400 dark:text-white px-2 py-1 outline-none"
              ></input>
            </div>
            <div>
              <label className="dark:text-white mb-1 inline-block">Tone</label>
              <input
                onChange={(e) =>
                  setCampaign({ ...campaign, tone: e.target.value })
                }
                value={campaign.tone}
                className="w-full rounded-md text-sm dark:bg-gray-400 dark:text-white px-2 py-1 outline-none"
              ></input>
            </div>
          </div>
          <div className="flex flex-col mb-5">
            <label className="dark:text-white mb-1 block">Calendar</label>
            <input
              onChange={(e) =>
                setCampaign({ ...campaign, calendar: e.target.value })
              }
              value={campaign.calendar}
              type="text"
              placeholder="10am to 10pm IST"
              className="w-full rounded-md text-sm dark:bg-gray-400 dark:text-white px-2 py-1 outline-none"
            />
          </div>
          <div className="flex gap-5">
            <button
              onClick={createCampaign}
              className="py-3 px-5 cursor-pointer bg-orange-600 dark:bg-green-500 font-semibold tracking-wide text-white text-sm rounded-md"
            >
              Create Campaign
            </button>
            <button
              onClick={updateCampaign}
              className="py-3 px-5 cursor-pointer bg-orange-700 dark:bg-green-600 font-semibold tracking-wide text-white text-sm rounded-md"
            >
              Update Campaign
            </button>
          </div>
          <div className=" select-text">
            {message ? (
              <>
                <p className="mt-2 text-green-500 text-sm">{message}</p>
                <p className="mt-2 text-green-500 text-sm">
                  Campaign ID - {id}
                </p>
              </>
            ) : (
              <p className="mt-2 text-orange-600">{error}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;
