import React from "react";
import ProfileImage from "../../assets/profile.png";

export default function ProfileEdit() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">
        Welcome, Mahamudul Hasan Fahad!
      </h1>
      <div className="bg-white border border-slate-200 rounded-sm p-6 overflow-auto">
        <div className="flex gap-3 items-stretch">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300">
            <img
              src={ProfileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold mt-4">
              {" "}
              Mahamudul Hasan Fahad
            </h2>
            <button className="inline-flex items-center gap-2 border border-primary text-primary font-semibold tracking-tight rounded-md px-4 py-2 transition-all duration-300 transform hover:-translate-y-1 hover:bg-primary hover:text-white cursor-pointer">
              <span className="bg-primary p-1 rounded-full flex items-center justify-center text-white">
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 22 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.75 3.39792C2.02065 3.39792 1.32118 3.69161 0.805456 4.21438C0.289731 4.73715 0 5.44618 0 6.18549V17.3358C0 18.0751 0.289731 18.7841 0.805456 19.3069C1.32118 19.8296 2.02065 20.1233 2.75 20.1233H19.25C19.9793 20.1233 20.6788 19.8296 21.1945 19.3069C21.7103 18.7841 22 18.0751 22 17.3358V6.18549C22 5.44618 21.7103 4.73715 21.1945 4.21438C20.6788 3.69161 19.9793 3.39792 19.25 3.39792H17.0692C16.7046 3.39784 16.3549 3.25094 16.0971 2.98954L14.5558 1.42711C14.0401 0.904302 13.3408 0.610509 12.6115 0.610352H9.3885C8.65921 0.610509 7.95985 0.904302 7.44425 1.42711L5.90288 2.98954C5.64507 3.25094 5.29539 3.39784 4.93075 3.39792H2.75ZM11 15.942C11.5417 15.942 12.0781 15.8338 12.5786 15.6237C13.079 15.4136 13.5338 15.1056 13.9168 14.7173C14.2999 14.329 14.6037 13.8681 14.811 13.3608C15.0183 12.8535 15.125 12.3097 15.125 11.7606C15.125 11.2115 15.0183 10.6678 14.811 10.1605C14.6037 9.65319 14.2999 9.19224 13.9168 8.80396C13.5338 8.41569 13.079 8.10769 12.5786 7.89756C12.0781 7.68743 11.5417 7.57927 11 7.57927C9.90598 7.57927 8.85677 8.01981 8.08318 8.80396C7.3096 9.58812 6.875 10.6517 6.875 11.7606C6.875 12.8696 7.3096 13.9331 8.08318 14.7173C8.85677 15.5014 9.90598 15.942 11 15.942Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              Upload Photo
            </button>
          </div>
        </div>

        <form className="mt-8">
          <fieldset className="mb-6">
            <div className="space-y-2">
              <legend className="text-xl font-bold tracking-tight">
                Personal Info
              </legend>
              <p className="mb-2 text-base text-gray-500 tracking-tight">
                As mentioned on your passport or government approved IDs
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col space-y-2">
                <label for="name">
                  Fullname <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border border-gray-200 rounded-lg px-2 py-2 outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label for="gender">
                  Gender <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Gender"
                  className="border border-gray-200 rounded-lg px-2 py-2 outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="mb-6">
            <div className="space-y-2">
              <legend className="text-xl font-bold tracking-tight">
                Contact Info
              </legend>
              <p className="mb-2 text-base text-gray-500 tracking-tight">
                Receive booking confirmation & updates
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="flex flex-col space-y-2">
                <label for="gender">
                  Contact Number <span className="text-primary">*</span>
                </label>
                <div className="flex">
                  <select className="border border-gray-300 bg-white px-3 py-2 rounded-l-lg outline-none">
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+880">🇧🇩 +880</option>
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+81">🇯🇵 +81</option>
                    <option value="+971">🇦🇪 +971</option>
                  </select>

                  {/* <!-- Number Input --> */}
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="flex-1 border border-gray-300 px-3 py-2 outline-none rounded-r-lg focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <label for="gender">
                  Gender <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Gender"
                  className="border border-gray-200 rounded-lg px-2 py-2 outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="flex flex-col space-y-2">
                <label for="country">
                  Country <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter country name"
                  className="flex-1 border border-gray-300 px-3 py-2 outline-none rounded-lg focus:ring-2 focus:ring-primary focus:ring-offset-2"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label for="city">
                  City <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  placeholder="City"
                  className="border border-gray-200 rounded-lg px-2 py-2 outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="flex flex-col space-y-2">
                <label for="district">
                  District <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  placeholder="District"
                  className="flex-1 border border-gray-300 px-3 py-2 outline-none rounded-lg focus:ring-2 focus:ring-primary focus:ring-offset-2"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label for="city">
                  Police Station <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  placeholder="police station"
                  className="border border-gray-200 rounded-lg px-2 py-2 outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="mb-6">
            <div className="space-y-2">
              <legend className="text-xl font-bold tracking-tight">
                Agency Details
              </legend>
              <p className="mb-2 text-base text-gray-500 tracking-tight">
                As mentioned on your passport or government approved IDs
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="flex flex-col space-y-2">
                <label for="agencyname">
                  Agency Name <span className="text-primary">*</span>
                </label>

                <input
                  type="text"
                  placeholder="Agency Name"
                  className="border border-gray-200 rounded-lg px-2 py-2 outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label for="agencyaddress">
                  Agency Address <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Agency Address"
                  className="border border-gray-200 rounded-lg px-2 py-2 outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="flex flex-col space-y-2">
                <label for="rlhl">
                  RL or HL Number
                  <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  placeholder="RL or HL Number"
                  className="flex-1 border border-gray-300 px-3 py-2 outline-none rounded-lg focus:ring-2 focus:ring-primary focus:ring-offset-2"
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="mb-6">
            <div className="space-y-2">
              <legend className="text-xl font-bold tracking-tight">
                Agency Document information
              </legend>
              <p className="mb-2 text-base text-gray-500 tracking-tight">
                Travelers holding passport can fill up the the below form which
                will save more time during flight booking.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4 mt-5">
              <div className="space-y-2 flex flex-col justify-center items-center">
                <p className="text-xl text-gray-500 tracking-tight">
                  View Your Photo
                </p>
                <button className="w-full py-12 bg-slate-100 border border-slate-200 flex flex-col justify-center items-center gap-4 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-file-text-icon lucide-file-text text-slate-300"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="M10 9H8" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                  </svg>
                  <span className="text-lg tracking-tight text-slate-400 font-medium">
                    View Your Photo
                  </span>
                </button>
              </div>
              <div className="space-y-2 flex flex-col justify-center items-center">
                <p className="text-xl text-gray-500 tracking-tight">View NID</p>
                <button className="w-full py-12 bg-slate-100 border border-slate-200 flex flex-col justify-center items-center gap-4 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-file-text-icon lucide-file-text text-slate-300"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="M10 9H8" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                  </svg>
                  <span className="text-lg tracking-tight text-slate-400 font-medium">
                    View NID
                  </span>
                </button>
              </div>
              <div className="space-y-2 flex flex-col justify-center items-center">
                <p className="text-xl text-gray-500 tracking-tight">
                  View Trade Licance
                </p>
                <button className="w-full py-12 bg-slate-100 border border-slate-200 flex flex-col justify-center items-center gap-4 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-file-text-icon lucide-file-text text-slate-300"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="M10 9H8" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                  </svg>
                  <span className="text-lg tracking-tight text-slate-400 font-medium">
                    View Trade Licance
                  </span>
                </button>
              </div>
              <div className="space-y-2 flex flex-col justify-center items-center">
                <p className="text-xl text-gray-500 tracking-tight">
                  View Upload Recuting Licance (RL)
                </p>
                <button className="w-full py-12 bg-slate-100 border border-slate-200 flex flex-col justify-center items-center gap-4 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-file-text-icon lucide-file-text text-slate-300"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="M10 9H8" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                  </svg>
                  <span className="text-lg tracking-tight text-slate-400 font-medium">
                    View Upload Recuting Licance (RL)
                  </span>
                </button>
              </div>
              <div className="space-y-2 flex flex-col justify-center items-center">
                <p className="text-xl text-gray-500 tracking-tight">
                  View Civil Aviation Licance
                </p>
                <button className="w-full py-12 bg-slate-100 border border-slate-200 flex flex-col justify-center items-center gap-4 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-file-text-icon lucide-file-text text-slate-300"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="M10 9H8" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                  </svg>
                  <span className="text-lg tracking-tight text-slate-400 font-medium">
                    View Civil Aviation Licance
                  </span>
                </button>
              </div>
            </div>
          </fieldset>
          <button
            type="submit"
            className="px-4 py-2 bg-white mx-auto border-2 border-slate-200 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary text-primary font-bold rounded-lg"
          >
            Update profile
          </button>
        </form>
      </div>
    </>
  );
}
