import {
  LayoutDashboard,
  Users,
  FileText,
  ClipboardCheck,
  UserCheck,
  BookOpen,
  Banknote,
  CreditCard,
  Receipt,
  Ticket,
  ScrollText,
} from "lucide-react";

export const menuTree = [
  {
    id: 1,
    title: "Dashboard",
    icon: <LayoutDashboard />,
    link: "/admin",
  },
  {
    id: 2,
    title: "Customer / Merchant",
    icon: <Users />,
    children: [
      {
        id: 21,
        title: "Customer List",
        link: "customer-list",
      },
      {
        id: 22,
        title: "Merchant Request",
        link: "merchant-request",
      },
      {
        id: 23,
        title: "Active Merchant",
        link: "merchants/active",
      },
      {
        id: 24,
        title: "Blocked Merchant",
        link: "merchants/blocked",
      },
    ],
  },
  {
    id: 3,
    title: "Recruiting Agency",
    icon: <FileText />,
    children: [
      {
        id: 31,
        title: "Recruiting Requests",
        link: "recruiting-requests",
      },
      {
        id: 32,
        title: "Active Agencies",
        link: "agencies/active",
      },
      {
        id: 33,
        title: "Suspended Agencies",
        link: "agencies/suspended",
      },
      {
        id: 34,
        title: "Blocked Agencies",
        link: "agencies/blocked",
      },
      {
        id: 35,
        title: "Cancelled Agencies",
        link: "agencies/cancelled",
      },
    ],
  },
  {
    id: 4,
    title: "Hajj & Umrah Agency",
    icon: <ClipboardCheck />,
    children: [
      {
        id: 41,
        title: "Hajj Requests",
        link: "hajj/requests",
      },
      {
        id: 42,
        title: "Active Hajj Agencies",
        link: "hajj/active",
      },
      {
        id: 43,
        title: "Suspended Hajj Agencies",
        link: "hajj/suspended",
      },
      {
        id: 44,
        title: "Blocked Hajj Agencies",
        link: "hajj/blocked",
      },
      {
        id: 45,
        title: "Cancelled Hajj Agencies",
        link: "hajj/cancelled",
      },
    ],
  },
  {
    id: 5,
    title: "Student Consultancy",
    icon: <UserCheck />,
    children: [
      {
        id: 51,
        title: "Consultancy Requests",
        link: "consultancy-requests",
      },
      {
        id: 52,
        title: "Active Consultancy",
        link: "consultancy/active",
      },
      {
        id: 53,
        title: "Blocked Consultancy",
        link: "consultancy/blocked",
      },
      {
        id: 54,
        title: "Cancelled Consultancy",
        link: "consultancy/cancelled",
      },
    ],
  },
  {
    id: 6,
    title: "Posts",
    icon: <BookOpen />,
    children: [
      {
        id: 61,
        title: "Create Post",
        link: "posts/create",
      },
      {
        id: 62,
        title: "Manage Posts",
        link: "posts/manage",
      },
      {
        id: 63,
        title: "Agency Post Requests",
        link: "posts/agency-requests",
      },
      {
        id: 64,
        title: "Approved Posts",
        link: "posts/approved",
      },
      {
        id: 65,
        title: "Rejected Posts",
        link: "posts/rejected",
      },
    ],
  },
  {
    id: 7,
    title: "Bank",
    icon: <Banknote />,
    children: [
      {
        id: 66,
        title: "Add Bank",
        link: "bank/add",
      },
      {
        id: 67,
        title: "Bank List",
        link: "bank/list",
      },
      {
        id: 68,
        title: "Create Transfer",
        link: "bank/transfer-add",
      },
      {
        id: 69,
        title: "Transfer List",
        link: "bank/transfer-list",
      },
    ],
  },
  {
    id: 8,
    title: "Payment",
    icon: <CreditCard />,
    children: [
      {
        id: 73,
        title: "Create Payment",
        link: "payment/create",
      },
      {
        id: 74,
        title: "Payment List",
        link: "payment/list",
      },
    ],
  },
  {
    id: 9,
    title: "Agency Bill",
    icon: <Receipt />,
    children: [
      {
        id: 76,
        title: "Add bill",
        link: "agency-bill/add",
      },
      {
        id: 77,
        title: "Manage Bill",
        link: "agency-bill/manage",
      },
    ],
  },
  {
    id: 10,
    title: "Agent/Merchant Bill",
    icon: <Receipt />,
    children: [
      {
        id: 79,
        title: "Add bill",
        link: "agent-bill/add",
      },
      {
        id: 80,
        title: "Manage Bill",
        link: "agent-bill/manage",
      },
    ],
  },
  {
    id: 11,
    title: "Work Permit Booking",
    icon: <Ticket />,
    children: [
      {
        id: 111,
        title: "Applied Customer",
        link: "work-permit/applied-customer",
      },
      {
        id: 112,
        title: "Collected Passport",
        link: "work-permit/collected-passport",
      },
      {
        id: 113,
        title: "Sent to Agency",
        link: "work-permit/collected-passport/send-to-agency",
      },
      {
        id: 114,
        title: "Under Processing",
        link: "work-permit/under-processing",
      },
      {
        id: 115,
        title: "Ready For Flight",
        link: "work-permit/ready-for-flight",
      },
      {
        id: 116,
        title: "Success Flight",
        link: "work-permit/success-flight",
      },
      {
        id: 117,
        title: "Passport Return Req",
        link: "work-permit/passport-return-req",
      },
      {
        id: 118,
        title: "Return Passport",
        link: "work-permit/return-passport",
      },
    ],
  },
  {
    id: 12,
    title: "Student Visa Booking",
    icon: <Ticket />,
    children: [
      {
        id: 121,
        title: "Applied Customer",
        link: "student-visa/applied-customer",
      },
      {
        id: 122,
        title: "Collected Passport",
        link: "student-visa/collected-passport",
      },
      {
        id: 123,
        title: "Sent to Agency",
        link: "student-visa/sent-to-agency",
      },
      {
        id: 124,
        title: "Under Processing",
        link: "student-visa/under-processing",
      },
      {
        id: 125,
        title: "Ready For Flight",
        link: "student-visa/ready-for-flight",
      },
      {
        id: 126,
        title: "Success Flight",
        link: "student-visa/success-flight",
      },
      {
        id: 127,
        title: "Passport Return Req",
        link: "student-visa/passport-return-req",
      },
      {
        id: 128,
        title: "Return Passport",
        link: "student-visa/return-passport",
      },
    ],
  },
  {
    id: 13,
    title: "Hajj & Umrah Booking",
    icon: <Ticket />,
    children: [
      {
        id: 131,
        title: "Applied Customer",
        link: "hajj-umrah/applied-customer",
      },
      {
        id: 132,
        title: "Collected Passport",
        link: "hajj-umrah/collected-passport",
      },
      {
        id: 133,
        title: "Sent to Agency",
        link: "hajj-umrah/sent-to-agency",
      },
      {
        id: 134,
        title: "Under Processing",
        link: "hajj-umrah/under-processing",
      },
      {
        id: 135,
        title: "Ready For Flight",
        link: "hajj-umrah/ready-for-flight",
      },
      {
        id: 136,
        title: "Success Flight",
        link: "hajj-umrah/success-flight",
      },
      {
        id: 137,
        title: "Passport Return Req",
        link: "hajj-umrah/passport-return-req",
      },
      {
        id: 138,
        title: "Return Passport",
        link: "hajj-umrah/return-passport",
      },
    ],
  },
  {
    id: 14,
    title: "Visa Processing",
    icon: <Ticket />,
    children: [
      {
        id: 138,
        title: "Applied Customer",
        link: "visa-processing/applied-customer",
      },
      {
        id: 139,
        title: "Collected Passport",
        link: "visa-processing/collected-passport",
      },
      {
        id: 140,
        title: "Ready For Delivery",
        link: "visa-processing/sent-to-agency",
      },
      {
        id: 141,
        title: "Success Delivery",
        link: "visa-processing/success-delivery",
      },
      {
        id: 142,
        title: "Under Processing",
        link: "visa-processing/under-processing",
      },
      {
        id: 143,
        title: "Appoinment List",
        link: "visa-processing/appoinment-list",
      },
    ],
  },
  {
    id: 15,
    title: "Devit Voucher",
    icon: <ScrollText />,
    children: [
      {
        id: 144,
        title: "Create Voucher",
        link: "devit-voucher/create-voucher",
      },
      {
        id: 145,
        title: "Voucher List",
        link: "devit-voucher/voucher-list",
      },
    ],
  },
  {
    id: 16,
    title: "Credit Voucher",
    icon: <ScrollText />,
    children: [
      {
        id: 146,
        title: "Create Voucher",
        link: "credit-voucher/create-voucher",
      },
      {
        id: 147,
        title: "Voucher List",
        link: "credit-voucher/voucher-list",
      },
    ],
  },
  {
    id: 17,
    title: "Commission Voucher",
    icon: <ScrollText />,
    children: [
      {
        id: 148,
        title: "Create Voucher",
        link: "commission-voucher/create-voucher",
      },
      {
        id: 149,
        title: "Voucher List",
        link: "commission-voucher/voucher-list",
      },
    ],
  },
];
