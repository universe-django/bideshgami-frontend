import { Facebook, Linkedin, XdotCom, Youtube } from "@/utils/svg-utils";
import { Link } from "react-router";
import PaymentImage from "../../assets/payment.png";
import WhiteLogo from "../../assets/white-logo.png";
const footerLinks = [
  { id: 1, title: "Home", url: "#" },
  { id: 2, title: "Terms & conditions", url: "#" },
  { id: 3, title: "Career", url: "#" },
  { id: 4, title: "Refund Policy", url: "#" },
  { id: 5, title: "EMI Policy", url: "#" },
  { id: 6, title: "Privacy Policy", url: "#" },
];

const contactInfo = {
  help: "We are Always here for you! Knock us on Messenger anytime or Call our Hotline (10AM – 10PM).",
  email: "info@bideshgami.com",
  phone: "+0930220202219",
};

const social = [
  {
    id: 1,
    icon: <Facebook />,
  },
  {
    id: 2,
    icon: <Linkedin />,
  },
  {
    id: 3,
    icon: <XdotCom />,
  },
  {
    id: 4,
    icon: <Youtube />,
  },
];
export default function Footer() {
  return (
    <footer className="bg-primary text-white text-sm  mt-20 px-5 sm:px-4">
      <div className="max-w-7xl mx-auto  py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Discover */}
        <div>
          <h3 className="font-semibold mb-3 text-2xl">Discover</h3>
          <ul className="space-y-2">
            {footerLinks.map((linkItem) => (
              <li key={linkItem.id}>
                <Link to={linkItem.url} className="hover:underline font-medium">
                  {linkItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Payment Methods */}
        <div>
          <h3 className="font-semibold mb-3 text-2xl">Payment Methods</h3>
          <img src={PaymentImage} alt="Payment" />
        </div>
        {/* Need Help */}
        <div>
          <h3 className="font-semibold mb-3 text-2xl">Need Help ?</h3>
          <p className="mb-3 leading-relaxed w-xs">{contactInfo.help}</p>
          <p>
            <span className="font-semibold text-lg">Contact</span>
            <br />
            <a href="mailto:info@bideshgami.com" className="hover:underline">
              {contactInfo.email}
            </a>
            <br />
            {contactInfo.phone}
          </p>
        </div>
        {/* App & Social */}
        <div>
          <h3 className="font-semibold mb-3 text-2xl">Download our app</h3>
          <div className="flex flex-col gap-3 mb-5">
            <a href="#">
              <img
                src="https://developer.android.com/images/brand/en_app_rgb_wo_45.png"
                alt="Google Play"
                className="h-10"
              />
            </a>
            <a href="#">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-10"
              />
            </a>
          </div>
          <h3 className="font-semibold mb-3 text-2xl">Follow Us</h3>
          <div className="flex space-x-4 text-lg">
            {social.map((socialItem) => (
              <Link key={socialItem.id} to="#">
                {socialItem.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-t-gray-300">
        <div className="max-w-7xl mx-auto py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="w-[120px] sm:w-[187px]">
            <img src={WhiteLogo} alt="Brand logo" />
          </div>
          <p className="text-sm">© Copyright Bideshgami.</p>
        </div>
      </div>
    </footer>
  );
}
