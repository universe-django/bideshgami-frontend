import React from "react";
import Plane from "../../assets/plane.png";
import { ArrowDown, Heart, MessageCircleMore, Share2 } from "lucide-react";

const AdsVisaDetails = ({ visaDetails }) => {
  if (!visaDetails) {
    return <p className="text-center p-6">Visa details not found.</p>;
  }

  const formatList = (items) => (items && Array.isArray(items) && items.length > 0 ? items.join(", ") : "N/A");

  return (
   
    <div className="max-w-7xl mx-auto flex flex-col gap-8 bg-white p-4">
  
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border border-gray-300 shadow-sm rounded-md p-2">
        
        {/* Left Column: Title, Image, and Safety Tip (Optional) */}
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-2xl">{`${visaDetails.title} in ${visaDetails.countryName}`}</h1>
          
        
          
          <img
            src={visaDetails.visaBanner}
            alt={visaDetails.title}
            className="w-full aspect-video object-cover rounded-md"
          />

          {/* Safety Tip Block - Included for matching the design, but image source needs adjustment if not using relative path */}
          <div className="flex flex-col gap-4 items-center p-10 border border-gray-200">
         
            <img src="./img/privacy.png" alt="Privacy Icon" className="w-10 h-10" /> 
            <h2 className="text-sm font-semibold">
              Stay Alert: Avoid Online Scams
            </h2>
            <p className="text-xs text-center">
              Never share card details or OTPs, and always verify items in
              person before payment. Bikroy does not offer a delivery service.
              Stay vigilant!
            </p>
            <div className="w-full">
              <p className="float-right text-blue-500 text-sm cursor-pointer">
                See all Safety tips
              </p>
            </div>
          </div>
        </div>

      
        <div className="flex flex-col gap-4">
          
        
          <div className="flex flex-col justify-center p-6 rounded-md border border-gray-300 shadow-sm">
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
                205 Total Apply {/* This is hardcoded/placeholder as per your VisaDetails code */}
              </div>

              <button className="flex items-center justify-center w-8 h-8 bg-gray-100 text-blue-500 rounded-md hover:bg-gray-200">
                <Share2 />
              </button>

              <button className="flex items-center justify-center w-8 h-8 bg-gray-100 text-blue-500 rounded-md hover:bg-gray-200">
                <Heart />
              </button>
            </div>

            <div className="flex justify-center items-center gap-4">
              <button className="flex items-center justify-center gap-2 w-2/5 py-2 rounded-md bg-primary text-white font-medium hover:bg-blue-700">
                <MessageCircleMore size="18" /> Chat
              </button>

            
              <button
                className="w-2/5 py-2 rounded-md bg-primary text-center text-white font-medium hover:bg-blue-700"
              >
                Apply Now
              </button>
            </div>
          </div>
          
          {/* Price and Verification Info */}
          <h2 className="font-bold text-xl">{visaDetails.title}</h2>
          <p className="text-md text-primary font-bold">
            {visaDetails.totalPrice}
          </p>
          <p className="text-sm underline">Post By Varified Account</p> {/* Placeholder text */}
          
          {/* Details Table - The core change for specifications */}
          <div className="bg-white p-6 border rounded-md shadow-sm">
            <h3 className="text-lg font-bold mb-3">Visa Specifications</h3>
            <table className="w-full text-sm text-gray-800">
              <tbody className="space-y-2">
                
                {/* Row for Country Name */}
                <tr>
                  <td className="py-2 font-semibold w-48">Country Name</td>
                  <td className="py-2">: {visaDetails.countryName || 'N/A'}</td>
                </tr>

                {/* Row for Type of Visa */}
                <tr>
                  <td className="py-2 font-semibold">Type of Visa</td>
                  <td className="py-2">: {visaDetails.typeOfVisa || 'N/A'}</td>
                </tr>

                {/* Row for Type of Work */}
                {visaDetails.typeOfWork && (
                  <tr>
                    <td className="py-2 font-semibold">Type of Work</td>
                    <td className="py-2">: {visaDetails.typeOfWork}</td>
                  </tr>
                )}

                {/* Row for Company Name */}
                <tr>
                  <td className="py-2 font-semibold">Company Name</td>
                  <td className="py-2">: {visaDetails.companyName || 'N/A'}</td>
                </tr>

                {/* Row for Company Location */}
                {visaDetails.companyLocation && (
                  <tr>
                    <td className="py-2 font-semibold">Company Location</td>
                    <td className="py-2">: {visaDetails.companyLocation}</td>
                  </tr>
                )}

                {/* Row for Working Hours */}
                <tr>
                  <td className="py-2 font-semibold">Working Hours</td>
                  <td className="py-2">: {visaDetails.WorkingHours || 'N/A'}</td>
                </tr>

                {/* Processing Time - Hardcoded as per your example */}
                <tr>
                  <td className="py-2 font-semibold">Processing Time</td>
                  <td className="py-2">: 2 months</td>
                </tr>
                
                {/* Age Limit */}
                {visaDetails.ageLimit && (
                  <tr>
                    <td className="py-2 font-semibold">Age</td>
                    <td className="py-2">: {visaDetails.ageLimit}</td>
                  </tr>
                )}

                {/* Iqama Cost */}
                {visaDetails.iqamaExpenses && (
                  <tr>
                    <td className="py-2 font-semibold">Iqama Cost</td>
                    <td className="py-2">: {visaDetails.iqamaExpenses}</td>
                  </tr>
                )}
                
                {/* Education - Hardcoded options as per your example */}
                <tr>
                  <td className="py-2 font-semibold">Education</td>
                  <td className="py-2">
                    : No need / PSC / JSC / SSC / HSC / HONORS / DEGREE /
                    MASTERS
                  </td>
                </tr>
                
                {/* Required Documents */}
                {visaDetails.requiredDocuments && (
                  <tr>
                    <td className="py-2 font-semibold">Required Documents</td>
                    <td className="py-2">
                      : {formatList(visaDetails.requiredDocuments)}
                    </td>
                  </tr>
                )}

                {/* Accommodation Expense */}
                {visaDetails.accommodation && (
                  <tr>
                    <td className="py-2 font-semibold">Accommodation Expense</td>
                    <td className="py-2">: {visaDetails.accommodation}</td>
                  </tr>
                )}
                
                {/* Food Expense */}
                {visaDetails.foodExpenses && (
                  <tr>
                    <td className="py-2 font-semibold">Food Expense</td>
                    <td className="py-2">: {visaDetails.foodExpenses}</td>
                  </tr>
                )}
                
                {/* Gender */}
                {visaDetails.gender && (
                  <tr>
                    <td className="py-2 font-semibold">Gender</td>
                    <td className="py-2">: {visaDetails.gender}</td>
                  </tr>
                )}
                
                {/* Package Included */}
                {visaDetails.packageInclude && (
                  <tr>
                    <td className="py-2 font-semibold">Package Included</td>
                    <td className="py-2">
                      : {formatList(visaDetails.packageInclude)}
                    </td>
                  </tr>
                )}
                
                {/* Payment System - Hardcoded as per your example */}
                <tr>
                  <td className="py-2 font-semibold">Payment System</td>
                  <td className="py-2">
                    : After visa/advance payment{" "}
                    <span className="font-bold text-black">50,000 BDT</span>,
                    After visa{" "}
                    <span className="font-bold text-black">3,00,000 BDT</span>
                  </td>
                </tr>
                
                {/* Experience - Hardcoded as per your example */}
                <tr>
                  <td className="py-2 font-semibold">Experience</td>
                  <td className="py-2">: No need / 3 months – 5 years</td>
                </tr>

                {/* Application Deadline */}
                {visaDetails.deadline && (
                  <tr>
                    <td className="py-2 font-semibold">Application Deadline</td>
                    <td className="py-2 font-semibold text-black">
                      : {visaDetails.deadline}
                    </td>
                  </tr>
                )}

                {/* Delegate Interview Date */}
                {visaDetails.delegateDate && (
                  <tr>
                    <td className="py-2 font-semibold">Delegate Interview Date</td>
                    <td className="py-2 font-semibold text-black">
                      : {visaDetails.delegateDate}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Description Section - Moved below the grid, spanning full width for better flow */}
        <div className="lg:col-span-2 p-6 border-t border-gray-200 text-sm text-gray-700 leading-relaxed">
          <h3 className="font-bold text-lg mb-2">Description</h3>
          <p>{visaDetails.description}</p>
          <div className="w-full">
            {/* Using a placeholder link as Link is not available in AdsVisaDetails context */}
            <a
              href="#"
              className="mt-3 text-primary text-sm float-right inline-flex gap-2 items-center"
            >
              Show More
              <ArrowDown size="15" />
            </a>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default AdsVisaDetails;