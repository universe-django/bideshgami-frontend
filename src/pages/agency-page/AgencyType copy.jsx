import img1 from "/src/assets/Agency1.jpg";
import img2 from "/src/assets/Agency2.jpg";
import img3 from "/src/assets/Agrncy3.jpg";
import { Link } from "react-router";

export default function AgencyType() {
  const cardInfo = [
    { id: 1, img: img1, title: "Recruiting Agency", type: "recruiting" },
    { id: 2, img: img2, title: "Hajj & Umrah Agency", type: "hajj" },
    { id: 3, img: img3, title: "Student Consultancy", type: "student" },
  ];

  return (
    <section className="py-8">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-2xl md:text-5xl">
          Welcome To <span className="text-[#0066FF]">Bideshgami</span>
        </h2>
        <p className="font-semibold md:text-2xl mt-2">
          What Kind Of Account Do You Want To Create?
        </p>

        <div className="grid md:grid-cols-3 grid-cols-1 mt-6 gap-6">
          {cardInfo.map((item) => (
            <Link to={`/agency/register?type=${item.type}`} key={item.id}>
              <div className="bg-[#F2F7FF] hover:bg-[#E6F0FF] md:p-8 p-4 rounded-xl shadow-lg flex flex-col justify-center items-center transition-transform hover:scale-105 duration-200">
                <img
                  className="w-[200px] h-[170px] object-cover rounded-lg"
                  src={item.img}
                  alt={item.title}
                />
                <p className="text-2xl font-semibold pt-4">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
