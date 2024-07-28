const KnowledgeBase = ({ setFileData }) => {
  async function uploadFile(e) {
    e.preventDefault();

    let file = e.target.files[0];
    console.log(file);

    if (file) {
      let data = new FormData();
      data.append("file", file);
      setFileData(data);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-full select-none">
      <div className="w-[350px] tracking-wide">
        <h1 className="font-normal text-gray-500 text-xl dark:text-white">
          Knowledge Base
        </h1>
        <p className="dark:text-gray-500">
          Knowledge base is a bank of files that are accessible by your
          assistants.
        </p>
        <br />
        <p className="dark:text-gray-500">
          You can upload a PDF, URL or Documents and attach it to your
          assistants, they pull from their for more context during
          conversations.
        </p>
        <br />
        <div className="flex gap-3 items-center mb-4">
          <label className="dark:text-white">URL</label>
          <input
            type="text"
            className="w-full rounded-md text-sm dark:bg-gray-400 dark:text-white px-2 py-1 outline-none"
            placeholder="enter url"
          />
        </div>
        <div>
          <label className="inline-block py-3 px-8 cursor-pointer bg-orange-600 dark:bg-green-500 font-semibold tracking-wide text-white text-sm rounded-md">
            <input
              type="file"
              className="hidden"
              onChange={(e) => uploadFile(e)}
            />
            Choose File
          </label>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;
