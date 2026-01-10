import {
  AirTicketIcon,
  HajjAndUmrahIcon,
  HotelBookingIcon,
  QuestionIcon,
  StudentVisaIcon,
  TourPackageIcon,
  VideoIcon,
  VisaProcessingIcon,
  WorkPermitIcon,
} from "@/utils/svg-utils";
import { Link } from "react-router";

const category = [
  {
    id: 1,
    icon: <AirTicketIcon />,
    categorName: "Air Ticket",
  },
  {
    id: 2,
    icon: <WorkPermitIcon />,
    categorName: "Work Permit",
  },
  {
    id: 3,
    icon: <StudentVisaIcon />,
    categorName: "Student Visa",
  },
  {
    id: 4,
    icon: <HajjAndUmrahIcon />,
    categorName: "Hajj & Umrah",
  },
  {
    id: 5,
    icon: <VisaProcessingIcon />,
    categorName: "Visa Processing",
  },
  {
    id: 6,
    icon: <TourPackageIcon />,
    categorName: "Tour Packages",
  },
  {
    id: 7,
    icon: <HotelBookingIcon />,
    categorName: "Hotel Booking",
  },
  {
    id: 8,
    icon: <VideoIcon />,
    categorName: "Video ",
  },
  {
    id: 9,
    icon: <QuestionIcon />,
    categorName: "Questions",
  },
];

export default function Category() {
  return (
    <div className="mx-auto my-10 grid max-w-4xl grid-cols-4 items-center justify-center gap-4 sm:gap-6 px-2 lg:grid-cols-9">
      {category.map((cateItem) => (
        <Link
          to="/"
          key={cateItem.id}
          className="group flex h-30 w-24 flex-col items-center rounded-lg border border-white bg-white p-4 transition-all duration-300 hover:border-blue-600 hover:bg-blue-100"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 p-4">
            {cateItem.icon}
          </span>
          <p className="mt-2 sm:line-clamp-1 text-center text-xs font-medium text-gray-700 transition-all duration-300  sm:group-hover:line-clamp-none">
            {cateItem.categorName}
          </p>
        </Link>
      ))}
    </div>
  );
}
