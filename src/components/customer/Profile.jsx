import React from "react";
import ProfileImage from "../../assets/profile.png";
import { Link } from "react-router";
export default function Profile() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">
        Welcome, Mahamudul Hasan Fahad!
      </h1>
      <div className="bg-white border border-slate-200 rounded-sm p-6 overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-3 items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300">
              <img
                src={ProfileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold mt-4">
              Mahamudul Hasan Fahad
            </h2>
          </div>
          <Link
            to="edit"
            className="inline-flex font-medium items-center gap-2 px-4 py-2 rounded-md cursor-pointer focus:outline-2 focus:outline-offset-2 border-2 border-slate-900 transform hover:-translate-y-1 transition-all duration-300"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.414 0.585573C15.0389 0.210631 14.5303 0 14 0C13.4697 0 12.9611 0.210631 12.586 0.585573L5 8.17157V10.9996H7.828L15.414 3.41357C15.7889 3.03852 15.9996 2.5299 15.9996 1.99957C15.9996 1.46924 15.7889 0.960628 15.414 0.585573Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 4C0 3.46957 0.210714 2.96086 0.585786 2.58579C0.960859 2.21071 1.46957 2 2 2H6C6.26522 2 6.51957 2.10536 6.70711 2.29289C6.89464 2.48043 7 2.73478 7 3C7 3.26522 6.89464 3.51957 6.70711 3.70711C6.51957 3.89464 6.26522 4 6 4H2V14H12V10C12 9.73478 12.1054 9.48043 12.2929 9.29289C12.4804 9.10536 12.7348 9 13 9C13.2652 9 13.5196 9.10536 13.7071 9.29289C13.8946 9.48043 14 9.73478 14 10V14C14 14.5304 13.7893 15.0391 13.4142 15.4142C13.0391 15.7893 12.5304 16 12 16H2C1.46957 16 0.960859 15.7893 0.585786 15.4142C0.210714 15.0391 0 14.5304 0 14V4Z"
                fill="black"
              />
            </svg>
            Edit
          </Link>
        </div>

        <div>
          <h3 className="text-xl font-bold">Personal Details</h3>
          <p className="mb-1">
            As mentioned on your passport or government approved IDs
          </p>
        </div>

        <article className="border border-slate-950 p-8 rounded-lg mt-4 space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            Basic Information
          </h2>
          <div className="flex">
            <h4 className="flex-1">Name:</h4>
            <p className="flex-1">Mahamudul Hasan Fahad</p>
          </div>
          <hr className="border border-black" />
          <div className="flex">
            <h4 className="flex-1">Gender:</h4>
            <p className="flex-1">Male</p>
          </div>
        </article>
        <article className="border border-slate-950 p-8 rounded-lg mt-4 space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Contact Info</h2>
          <div className="flex">
            <h4 className="flex-1">Email Address:</h4>
            <p className="flex-1">mahmudulhasanfahad105@gmail.com</p>
          </div>
          <hr className="border border-black" />
          <div className="flex">
            <h4 className="flex-1">Phone Number:</h4>
            <p className="flex-1">01317676778</p>
          </div>
          <hr className="border border-black" />
          <div className="flex">
            <h4 className="flex-1">Address:</h4>
            <p className="flex-1">aftabnagar,h#2,R#2,Dhaka,Bangladesh</p>
          </div>
          <hr className="border border-black" />
          <div className="flex">
            <h4 className="flex-1">City:</h4>
            <p className="flex-1">Dhaka</p>
          </div>
          <hr className="border border-black" />
          <div className="flex">
            <h4 className="flex-1">Country:</h4>
            <p className="flex-1">Bangladesh</p>
          </div>
          <hr className="border border-black" />
          <div className="flex">
            <h4 className="flex-1">District:</h4>
            <p className="flex-1">Dhaka</p>
          </div>
        </article>

        <article className="border border-slate-950 p-8 rounded-lg mt-4 space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Passport Info</h2>
          <div className="flex">
            <h4 className="flex-1">Passport Number:</h4>
            <p className="flex-1">Mahamudul Hasan Fahad</p>
          </div>
          <hr className="border border-black" />
          <div className="flex">
            <h4 className="flex-1">Passport Expiry Date:</h4>
            <p className="flex-1">A56HR566GH</p>
          </div>
          <hr className="border border-black" />
          <div className="flex">
            <h4 className="flex-1">Passport Issue Date</h4>
            <p className="flex-1">56HR566GH</p>
          </div>
        </article>
      </div>
    </>
  );
}
