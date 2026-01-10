import BottomImage from "../../assets/bottomImg.png";
export default function RelatedAds({ relatedAds }) {
  if (!relatedAds || relatedAds.length === 0) {
    return null;
  }

  return (
    <>
      <div className="mt-6 border border-gray-300 shadow-sm rounded-md p-2 mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Similar Ads
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {relatedAds.map((ad) => (
            <div
              key={ad.id}
              className="flex rounded-md bg-white shadow-sm h-24 md:h-40"
            >
              <img
                src={ad.visaBanner || "../dist/public/adImg1.png"}
                className="h-full object-cover"
                alt={ad.title}
              />
              <div className="p-1 md:p-3 bg-gray-300 w-full flex flex-col justify-between">
                <div>
                  <p className="text-sm lg:text-md font-medium md:font-bold">
                    {ad.title} in {ad.countryName}
                  </p>
                  <p className="text-primary text-sm lg:text-md font-medium md:font-bold">
                    VERIFIED ACCOUNT
                  </p>
                  <p className="text-xs text-slate-500">{ad.typeOfVisa} Visa</p>
                  <p className="text-primary text-sm lg:text-md font-medium md:font-bold">
                    {ad.totalPrice}
                  </p>
                </div>
                <div className="w-full p-1 hidden md:block">
                  <p className="float-right text-slate-500 text-sm">4 days</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between p-4">
          <i className="fa-solid fa-chevron-left opacity-75"></i>
          <i className="fa-solid fa-chevron-right"></i>
        </div>

        <div className="w-full px-24 py-8">
          <p className="float-right text-blue-500 text-sm">
            See all ads from this member
          </p>
        </div>
      </div>
      <div className="w-full">
        <img src={BottomImage} alt="" />
      </div>
    </>
  );
}
