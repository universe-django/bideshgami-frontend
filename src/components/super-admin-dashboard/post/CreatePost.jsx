import { Link } from "react-router";
import img3 from "../../../assets/agency.png";
import img2 from "../../../assets/marchent.png";
import img1 from "../../../assets/travel.png";
const cardInfo = [
  { id: 1, img: img1, title: "Job Post", link: "job-post" },
  { id: 2, img: img2, title: "Umrah Post", link: "umrah-post" },
  { id: 3, img: img3, title: "Student visa post", link: "student-visa-post" },
  { id: 4, img: img3, title: "Tour Post", link: "tour-post" },
];
export default function CreatePost() {
  return (
    <section className="pt-8">
      <div className="grid md:grid-cols-5 grid-cols-1 gap-4">
        {cardInfo.map((item) => {
          return (
            <Link to={item.link} key={item.id}>
              <div className="bg-[#F2F7FF] group rounded-xl p-4 shadow-xl flex flex-col justify-center items-center gap-4 border-b-4 border-b-gray-400">
                <img
                  src={item.img}
                  alt={item.title}
                  className="size-24 transform group-hover:-translate-y-1 transition-transform duration-300"
                />
                <p className="text-2xl font-semibold group-hover:text-primary transition-transform duration-300 line-clamp-1">
                  {item.title}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
