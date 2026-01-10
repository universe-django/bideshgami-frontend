import { CircleAlert } from "lucide-react";
import { Link } from "react-router";
import img1 from "../../assets/adsImg1.png";
import img2 from "../../assets/adsImg2.png";

export default function Ads() {
  const cardInfo = [
    { id: 1, img: img1, title: "Advertise in Eglish", link: "create-ads" },
    { id: 2, img: img2, title: "বাংলায় বিজ্ঞাপন ", link: "create-ads" },
  ];

  return (
    <div className="flex flex-col p-10 gap-4">
      <h1 className="text-2xl font-semibold">Create Post (বিজ্ঞাপন দিন)</h1>
      <div className="bg-[#FF88001A] p-6">
        <h1 className="text-2xl font-semibold flex gap-1 items-center mb-3">
          <CircleAlert /> Import Instruction
        </h1>
        <p>
          বেশি সংখ্যক ক্রেতা আকৃষ্ট করতে ও সর্বোচ্চ ফলাফল পেতে বাংলয়া বিজ্ঞাপন
          দিন
        </p>
      </div>
      <div className="flex mt-4 gap-4">
        {cardInfo.map((item) => {
          return (
            <Link key={item.id} to={item.link}>
              <div className="bg-[#F2F7FF] w-48 md:p-4 p-2 rounded-xl shadow-xl flex flex-col justify-center items-center">
                <img src={item.img} alt={item.title} className="h-28" />
                <p className="text-sm font-semibold pt-6">{item.title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
