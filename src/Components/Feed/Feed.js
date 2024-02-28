import React from "react";

export default function Feed() {
  const feedList = [
    {
      feeling: "💥 Feelin' Hiped",
      date: "20 Jan 2024",
      label:
        "  \n  Welcome to my digital hub! \n \n Through website I'll be sharing updates on my activities and provide guidance on coding.",
      heading: "<Hello World!/>",
      links: "",
      img: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*urj1fYqHHRPjgYvd.jpeg",
    },

    {
      feeling: "🙌 Excited",
      date: "Soon...",
      label: `  Stay Tuned for more Awsomeness content`,
      links: "",
      //   img: "https://napoleoncat.com/wp-content/uploads/2022/05/social-media-memes-toy-story-meme.jpg",
    },
  ];
  return (
    <div className="mt-4 ">
      <div className="dark:text-black text-white ">
        {feedList.map((e, i) => (
          <div className="hover:bg-[#ffffff2a] p-4 flex" key={i}>
            <div className=" max-w-[40px] max-h-[40px] bg-[#c3c3c3]  rounded-full ">
              <img
                src="https://avatars.githubusercontent.com/u/14121234?s=400&u=c4ff30b44d17298cd8a0fded6258b505007fa891&"
                className="rounded-full "
              />
            </div>
            <div className="ml-2">
              <div className="font-semibold text-sm">
                Dean ⚡ •
                <span className="text-[#ffffff9c] dark:text-[#0000009c] ml-2">
                  {e.date}
                </span>
              </div>
              <div className="rounded-full bg-[#ffffff5e] w-fit px-2 text-sm font-semibold my-2">
                {e.feeling}
              </div>
              <div className="font-bold text-xl">{e.heading}</div>
              <div className="PRHP mt-1 whitespace-pre-line">{e.label}</div>
              <img src={e.img} className="rounded-md my-4 " />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
