import { ArrowDown, Heart, MessageCircleMore, Share2 } from "lucide-react";
import { Link, useParams } from "react-router";
import Plane from "../../assets/plane.png";
import RelatedAds from "./RelatedAds";
export default function VisaDetails({ visadetails }) {
  const { id } = useParams();

  const visaDetails = visadetails.find((item) => item.id.toString() === id);

  const relatedAds = visadetails.filter(
    (item) =>
      item.typeOfVisa === visaDetails.typeOfVisa && item.id !== visaDetails.id
  );

  if (!visaDetails) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold">Visa Not Found</h2>
        <p>No details available for this visa ID.</p>
      </div>
    );
  }
  return (
    <div>
      <main className="max-w-7xl mx-auto flex flex-col gap-8 bg-white">
        <div className="w-full">
          <img src={Plane} alt="" className="h-20 w-full object-cover" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border border-gray-300 shadow-sm rounded-md p-4">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-2xl">{`${visaDetails.title} in ${visaDetails.countryName}`}</h1>
            <p className="text-sm">Posted on 01 Jul 12:19 pm </p>
            <p className="text-sm text-primary">Post ID: {visaDetails.id}</p>
            <img
              src={visaDetails.visaBanner}
              alt=""
              className="w-full aspect-video object-cover"
            />

            <div className="flex flex-col gap-4 items-center p-10 border border-gray-200">
              <img src="./img/privacy.png" alt="" />
              <h2 className="text-sm font-semibold">
                Stay Alert: Avoid Online Scams
              </h2>
              <p className="text-xs">
                Never share card details or OTPs, and always verify items in
                person before payment. Bikroy does not offer a delivery service.
                Stay vigilant!
              </p>
              <div className="w-full">
                <p className="float-right text-blue-500 text-sm">
                  See all Safety tips
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col justify-center p-6 rounded-md">
              <div className="flex justify-center gap-3 mb-6">
                <div className="flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  205 Total Apply
                </div>

                <button className="flex items-center justify-center w-8 h-8 bg-gray-100 text-blue-500 rounded-md hover:bg-gray-200">
                  <Share2 />
                </button>

                <button className="flex items-center justify-center w-8 h-8 bg-gray-100 text-blue-500 rounded-md hover:bg-gray-200">
                  <Heart />
                </button>
              </div>

              <div className="flex justify-center items-center gap-4">
                <button className="flex items-center justify-center gap-2 w-2/5 py-1 rounded-md bg-primary text-white font-medium hover:bg-blue-700">
                  <MessageCircleMore size="15" /> Chat
                </button>

                <Link
                  to="/apply"
                  className="w-2/5 py-1 rounded-md bg-primary text-center text-white font-medium hover:bg-blue-700"
                >
                  Apply Now
                </Link>
              </div>
            </div>
            <h1 className="font-bold text-2xl">{`${visaDetails.title} in ${visaDetails.countryName}`}</h1>
            <p className="text-sm">{visaDetails.title}</p>
            <p className="text-md text-primary font-bold">
              {visaDetails.totalPrice}
            </p>
            <p className="text-sm underline">Post By Varified Account</p>

            <div className="max-w-3xl mx-auto bg-whitep-6">
              <table className="w-full text-sm text-gray-800">
                <tbody className="space-y-2">
                  <tr>
                    <td className="py-2 font-semibold w-48">Country Name</td>
                    <td className="py-2">: {visaDetails.countryName}</td>
                  </tr>

                  <tr>
                    <td className="py-2 font-semibold">Type of Visa</td>
                    <td className="py-2">: {visaDetails.typeOfVisa}</td>
                  </tr>

                  <tr>
                    <td className="py-2 font-semibold">Type of Work</td>
                    <td className="py-2">: {visaDetails.typeOfWork}</td>
                  </tr>

                  <tr>
                    <td className="py-2 font-semibold">Company Name</td>
                    <td className="py-2">: {visaDetails.companyName}</td>
                  </tr>

                  <tr>
                    <td className="py-2 font-semibold">Company Location</td>
                    <td className="py-2">: {visaDetails.companyLocation}</td>
                  </tr>

                  <tr>
                    <td className="py-2 font-semibold">Working Hours</td>
                    <td className="py-2">: {visaDetails.WorkingHours}</td>
                  </tr>

                  <tr>
                    <td className="py-2 font-semibold">Processing Time</td>
                    <td className="py-2">: 2 months</td>
                  </tr>

                  <tr>
                    <td className="py-2 font-semibold">Age</td>
                    <td className="py-2">: {visaDetails.ageLimit}</td>
                  </tr>

                  <tr>
                    <td className="py-2 font-semibold">Iqama Cost</td>
                    <td className="py-2">: {visaDetails.iqamaExpenses}</td>
                  </tr>

                  <tr>
                    <td className="py-2 font-semibold">Education</td>
                    <td className="py-2">
                      : No need / PSC / JSC / SSC / HSC / HONORS / DEGREE /
                      MASTERS
                    </td>
                  </tr>

                  <tr>
                    <td className="py-2 font-semibold">Document :</td>

                    <td className="py-2">
                      {visaDetails.requiredDocuments.join(",")}
                    </td>
                  </tr>

                  <tr>
                    <td className="py-2 font-semibold">
                      Accommodation Expense
                    </td>
                    <td className="py-2">: {visaDetails.accommodation}</td>
                  </tr>

                  <tr>
                    <td className="py-2 font-semibold">Food Expense</td>
                    <td className="py-2">:{visaDetails.foodExpenses}</td>
                  </tr>

                  <tr>
                    <td className="py-2 font-semibold">Gender</td>
                    <td className="py-2">: {visaDetails.gender}</td>
                  </tr>

                  <tr>
                    <td className="py-2 font-semibold">Package Included</td>
                    <td className="py-2">
                      : {visaDetails.packageInclude.join(",")}
                    </td>
                  </tr>

                  <tr>
                    <td className="py-2 font-semibold">Payment System</td>
                    <td className="py-2">
                      : After visa/advance payment{" "}
                      <span className="font-bold text-black">50,000 BDT</span>,
                      After visa{" "}
                      <span className="font-bold text-black">3,00,000 BDT</span>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-2 font-semibold">Documents</td>
                    <td className="py-2">
                      : Passport, Photo, Police Clearance, Medical Fit
                      Certificate
                    </td>
                  </tr>

                  <tr>
                    <td className="py-2 font-semibold">Experience</td>
                    <td className="py-2">: No need / 3 months – 5 years</td>
                  </tr>

                  <tr>
                    <td className="py-2 font-semibold">Application Deadline</td>
                    <td className="py-2 font-semibold text-black">
                      : {visaDetails.deadline}
                    </td>
                  </tr>

                  <tr>
                    <td className="py-2 font-semibold">
                      Delegate Interview Date
                    </td>
                    <td className="py-2 font-semibold text-black">
                      : {visaDetails.delegateDate}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="p-6 border-t border-gray-200 text-sm text-gray-700 leading-relaxed">
            <h3 className="font-semibold mb-2">Description</h3>
            <p>{visaDetails.description}</p>
            <div className="w-full">
              <Link
                to="/"
                className="mt-3 text-primary text-sm float-right inline-flex gap-2 items-center"
              >
                Show More
                <ArrowDown size="15" />
              </Link>
            </div>
          </div>
        </div>

        <RelatedAds relatedAds={relatedAds} />
      </main>
    </div>
  );
}
