import img1 from "../../assets/travel.png";
import img2 from "../../assets/marchent.png";
import img3 from "../../assets/agency.png";
import { Link } from "react-router";

export default function UserSignin() {
  const cardInfo = [
    { id: 1, img: img1, title: "Customer", link: "/user/register" },
    { id: 2, img: img2, title: "Merchant", link: "/agent/register" },
    // { id: 3, img: img3, title: "Agency", link: "/agency-type" },
  ];

  return (
    <section className="py-8">
      <div className="flex flex-col lg: md:gap-4 gap-0 justify-center items-center">
        <h2 className="font-bold text-2xl md:text-6xl">
          Welcome To <span className="text-[#0066FF]">Bideshgami</span>
        </h2>
        <p className="font-semibold md:text-3xl text-lg">Sign In to Continue</p>
        <div className="grid md:grid-cols-2 grid-cols-1 mt-4 gap-4">
          {cardInfo.map((item) => {
            return (
              <Link to={item.link} key={item.id}>
                <div className="bg-[#F2F7FF] md:p-8 p-4 rounded-xl shadow-xl flex flex-col justify-center items-center">
                  <img src={item.img} alt={item.title} />
                  <p className="text-2xl font-semibold pt-6">{item.title}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
