import SuperDashboardLaout from "@/components/super-admin-dashboard/layout/SuperDashboardLaout";
import UnderProcessing from "@/components/super-admin-dashboard/agency/UnderProcessingWPB";
import AgencyManageBillPage from "@/pages/Agent-Pages/AgencyManageBillPage";
import AddBankPage from "@/pages/super-admin-page/account-page/AddBankPage";
import BankListPage from "@/pages/super-admin-page/account-page/BankListPage";
import CreatePaymentPage from "@/pages/super-admin-page/account-page/CreatePaymentPage";
import CreateTransferPage from "@/pages/super-admin-page/account-page/CreateTransferPage";
import PaymentListPage from "@/pages/super-admin-page/account-page/PaymentListPage";
import TransferListPage from "@/pages/super-admin-page/account-page/TransferListPage";
import ActiveRecruitingListPage from "@/pages/super-admin-page/ActiveRecruitingListPage";
import ActiveUmrahAgencyPage from "@/pages/super-admin-page/HajjAgencyActiveListPage";
import AgencyAddBillPage from "@/pages/super-admin-page/AgencyAddBillPage";
import AgencyPostRequestPage from "@/pages/super-admin-page/AgencyPostRequestPage";
import AgentAddBillPage from "@/pages/super-admin-page/AgentAddBillPage";
import AgentManageBillPage from "@/pages/super-admin-page/AgentManageBillPage";
import AppliedCustomerListWPBPage from "@/pages/super-admin-page/WorkPermitBooking-Pages/AppliedCustomerListWPBPage";
import ApprovedPostsPage from "@/pages/super-admin-page/ApprovedPostsPage";
import CollectedPassportListWPBPage from "@/pages/super-admin-page/WorkPermitBooking-Pages/CollectedPassportListWPBPage";
import CreateJobPostPage from "@/pages/super-admin-page/CreateJobPostPage";
import CreatePostPage from "@/pages/super-admin-page/CreatePostPage";
import CustomerListPage from "@/pages/super-admin-page/CustomerListPage";
import CustomerWPBEditPage from "@/pages/super-admin-page/WorkPermitBooking-Pages/CustomerWPBEditPage";
import ManagePostPage from "@/pages/super-admin-page/ManagePostPage";
import MerchantActivePage from "@/pages/super-admin-page/MerchantActivePage";
import MerchantBlockedPage from "@/pages/super-admin-page/MerchantBlockedPage";
import MerchantReqListPage from "@/pages/super-admin-page/MerchantReqListPage";
import ReadyForFlightPage from "@/pages/super-admin-page/WorkPermitBooking-Pages/ReadyForFlightPageWPB";
import RejectedPostPage from "@/pages/super-admin-page/RejectedPostPage";
import ReqruitingReqPage from "@/pages/super-admin-page/ReqruitingReqPage";
import RetunePassportPage from "@/pages/super-admin-page/WorkPermitBooking-Pages/RetunePassportPageWPB";
import RetunePassportReqPage from "@/pages/super-admin-page/RetunePassportReqPage";
import SendToAgencyPage from "@/pages/super-admin-page/SendToAgencyPage";
import SuccessFilePage from "@/pages/super-admin-page/WorkPermitBooking-Pages/SuccessFilePageWPB";
import SuperAdminDashboardPage from "@/pages/super-admin-page/SuperAdminDashboardPage";
import SusapandedAgencyPage from "@/pages/super-admin-page/SusapandedAgencyPage";
import UmrahAgencyReqPage from "@/pages/super-admin-page/UmrahAgencyReqPage";
import AppliedCustomerPage from "@/pages/super-admin-page/visa-processing-page/AppliedCustomerPage";
import CollectPassportPage from "@/pages/super-admin-page/visa-processing-page/CollectPassportPage";
import ReadyForDeliveryPage from "@/pages/super-admin-page/visa-processing-page/ReadyForDeliveryPage";
import UnderProcessingpage from "@/pages/super-admin-page/visa-processing-page/UnderProcessingPage";

import { Route } from "react-router";
import AppliedCustomerListSVBPage from "@/pages/super-admin-page/StudentVisaBooking-Pages/AppliedCustomerListSVBPage";
import CollectedPassportSVBPage from "@/pages/super-admin-page/StudentVisaBooking-Pages/CollectedPassportSVBPage";
import RetunePassportReqWPB from "@/components/super-admin-dashboard/agency/RetunePassportReqWPB";
import RetunePassportPageWPB from "@/pages/super-admin-page/WorkPermitBooking-Pages/RetunePassportPageWPB";
import UnderProcessingPageWPB from "@/pages/super-admin-page/WorkPermitBooking-Pages/UnderProcessingPageWPB";
import ReadyForFlightPageWPB from "@/pages/super-admin-page/WorkPermitBooking-Pages/ReadyForFlightPageWPB";
import SuccessFilePageWPB from "@/pages/super-admin-page/WorkPermitBooking-Pages/SuccessFilePageWPB";
import SendToAgencyPageSVB from "@/pages/super-admin-page/StudentVisaBooking-Pages/SendToAgencyPageSVB";
import UnderProcessingPageSVB from "@/pages/super-admin-page/StudentVisaBooking-Pages/UnderProcessingPageSVB";
import ReadyForFlightSVB from "@/components/super-admin-dashboard/agency/ReadyForFlighSVB";
import ReadyForFlightPageSVB from "@/pages/super-admin-page/StudentVisaBooking-Pages/ReadyForFlightPageSVB";
import SuccessDeliveryPage from "@/pages/super-admin-page/visa-processing-page/SuccessDeliveryPage";
import AppoinmentListPage from "@/pages/super-admin-page/visa-processing-page/AppoinmentListPage";
import SuccessFilghtPageSVB from "@/pages/super-admin-page/StudentVisaBooking-Pages/SuccessFilghtPageSVB";
import RetunePassportReqPageSVB from "@/pages/super-admin-page/StudentVisaBooking-Pages/RetunePassportReqPageSVB";
import RetunePassportPageSVB from "@/pages/super-admin-page/StudentVisaBooking-Pages/RetunePassportPageSVB";
import CreateVoucherPageDV from "@/pages/super-admin-page/Voucher-Pages/CreateVoucherPageDV";
import VoucherListDVPage from "@/pages/super-admin-page/Voucher-Pages/VoucherListDVPage";
import CreateDebitVoucher from "@/components/super-admin-dashboard/Voucher/CreateVoucherDV";
import CreateVoucherCV from "@/components/super-admin-dashboard/Voucher/CreateVoucherCV";
import CreateVoucherPageCV from "@/pages/super-admin-page/Voucher-Pages/CreateVoucherPageCV";
import VoucherListCVPage from "@/pages/super-admin-page/Voucher-Pages/VoucherListCVPage";
import CreateVoucherPageCOV from "@/pages/super-admin-page/Voucher-Pages/CreateVoucherPageCOV";
import VoucherListCOVPage from "@/pages/super-admin-page/Voucher-Pages/VoucherListCOVPage";
import AppliedCustomerListPageHUB from "@/pages/super-admin-page/HajjUmrahBooking-Pages/AppliedCustomerListPageHUB";
import CollectedPassportListHUB from "@/components/super-admin-dashboard/agency/CollectedPassportHUB";
import CollectedPassportListPageHUB from "@/pages/super-admin-page/HajjUmrahBooking-Pages/CollectedPassportListPageHUB";
import SendToAgencyPageHUB from "@/pages/super-admin-page/HajjUmrahBooking-Pages/SendToAgencyPageHUB";
import UnderProcessingPageHUB from "@/pages/super-admin-page/HajjUmrahBooking-Pages/UnderProcessingPageHUB";
import RedayForFlightPageHUb from "@/pages/super-admin-page/HajjUmrahBooking-Pages/RedayForFlightPageHUb";
import SuccessFileHUB from "@/components/super-admin-dashboard/agency/SuccessFileHUB";
import SuccessFilePageHUB from "@/pages/super-admin-page/HajjUmrahBooking-Pages/SuccessFilePageHUB";
import RetunePassportReqPageHUB from "@/pages/super-admin-page/HajjUmrahBooking-Pages/RetunePassportReqPageHUB";
import RetunePassportPageHUB from "@/pages/super-admin-page/HajjUmrahBooking-Pages/RetunePassportPageHUB";
import SendToAgencyPageWPB from "@/pages/super-admin-page/WorkPermitBooking-Pages/SendToAgencyPageWPB";
import CanceledAgencyListPage from "@/pages/super-admin-page/CanceledAgencyListPage";
import BlockedAgencyListPage from "@/pages/super-admin-page/BlockedAgencyListPage";
import HajjAgencyCancelledListPage from "@/pages/super-admin-page/HajjAgencyCancelledListPage";
import HajjAgencyBlockedListPage from "@/pages/super-admin-page/HajjAgencyBlockedListPage";
import HajjAgencySuspendedListPage from "@/pages/super-admin-page/HajjAgencySuspendedListPage";
import StudentConReqPage from "@/pages/super-admin-page/Student-Consultancy-Pages/StudentConReqPage";
import StudentConActiveListPage from "@/pages/super-admin-page/Student-Consultancy-Pages/StudentConActiveListPage";
import StudentConBlockedListPage from "@/pages/super-admin-page/Student-Consultancy-Pages/StudentConBlockedListPage";
import StudentConCancelledListPage from "@/pages/super-admin-page/Student-Consultancy-Pages/StudentConCancelledListPage";
import ProtectedRoute from "./ProtectedRoute";

export const AdminRoutes = (
  <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
    <Route path="admin" element={<SuperDashboardLaout />}>
      <Route index element={<SuperAdminDashboardPage />} />
      <Route path="customer-list" element={<CustomerListPage />} />
      <Route path="merchant-request" element={<MerchantReqListPage />} />
      <Route path="merchants/active" element={<MerchantActivePage />} />
      <Route path="merchants/blocked" element={<MerchantBlockedPage />} />
      <Route path="recruiting-requests" element={<ReqruitingReqPage />} />
      {/* there are all agencies routes */}
      <Route path="agencies/active" element={<ActiveRecruitingListPage />} />
      <Route path="agencies/suspended" element={<SusapandedAgencyPage />} />
      <Route path="agencies/blocked" element={<BlockedAgencyListPage />} />
      <Route path="agencies/cancelled" element={<CanceledAgencyListPage />} />

      {/* Student   Consultancy  */}
      <Route path="consultancy-requests" element={<StudentConReqPage />} />
      <Route path="consultancy/active" element={<StudentConActiveListPage />} />
      <Route
        path="consultancy/cancelled"
        element={<StudentConCancelledListPage />}
      />
      <Route
        path="consultancy/blocked"
        element={<StudentConBlockedListPage />}
      />

      {/* there are all hajj routes */}
      <Route path="hajj/requests" element={<UmrahAgencyReqPage />} />
      <Route path="hajj/active" element={<ActiveUmrahAgencyPage />} />
      <Route path="hajj/cancelled" element={<HajjAgencyCancelledListPage />} />
      <Route path="hajj/blocked" element={<HajjAgencyBlockedListPage />} />
      <Route path="hajj/suspended" element={<HajjAgencySuspendedListPage />} />
      {/* create Post section posts/create*/}
      <Route path="posts/create" element={<CreatePostPage />} />
      <Route path="posts/create/job-post" element={<CreateJobPostPage />} />
      <Route path="posts/manage" element={<ManagePostPage />} />
      <Route path="posts/agency-requests" element={<AgencyPostRequestPage />} />
      <Route path="posts/approved" element={<ApprovedPostsPage />} />
      <Route path="posts/rejected" element={<RejectedPostPage />} />
      <Route path="bank/add" element={<AddBankPage />} />
      <Route path="bank/list" element={<BankListPage />} />
      <Route path="bank/transfer-add" element={<CreateTransferPage />} />
      <Route path="bank/transfer-list" element={<TransferListPage />} />
      <Route path="payment/create" element={<CreatePaymentPage />} />
      <Route path="payment/list" element={<PaymentListPage />} />
      <Route path="agency-bill/add" element={<AgencyAddBillPage />} />
      <Route path="agency-bill/manage" element={<AgencyManageBillPage />} />
      <Route path="agent-bill/add" element={<AgentAddBillPage />} />
      <Route path="agent-bill/manage" element={<AgentManageBillPage />} />
      <Route
        path="visa-processing/applied-customer"
        element={<AppliedCustomerPage />}
      />
      <Route
        path="visa-processing/collected-passport"
        element={<CollectPassportPage />}
      />
      <Route
        path="visa-processing/sent-to-agency"
        element={<ReadyForDeliveryPage />}
      />
      <Route
        path="visa-processing/under-processing"
        element={<UnderProcessingpage />}
      />
      <Route
        path="visa-processing/success-delivery"
        element={<SuccessDeliveryPage />}
      />
      <Route
        path="visa-processing/appoinment-list"
        element={<AppoinmentListPage />}
      />
      <Route
        path="work-permit/applied-customer"
        element={<AppliedCustomerListWPBPage />}
      />
      <Route
        path="work-permit/collected-passport"
        element={<CollectedPassportListWPBPage />}
      />
      <Route
        path="work-permit/applied-customer/edit"
        element={<CustomerWPBEditPage />}
      />
      <Route
        path="work-permit/collected-passport/send-to-agency"
        element={<SendToAgencyPageWPB />}
      />
      <Route
        path="work-permit/under-processing"
        element={<UnderProcessingPageWPB />}
      />
      <Route
        path="work-permit/ready-for-flight"
        element={<ReadyForFlightPageWPB />}
      />
      <Route
        path="work-permit/success-flight"
        element={<SuccessFilePageWPB />}
      />
      <Route
        path="work-permit/return-passport"
        element={<RetunePassportPageWPB />}
      />
      <Route
        path="work-permit/passport-return-req"
        element={<RetunePassportReqWPB />}
      />
      {/* student-visa */}
      <Route
        path="student-visa/applied-customer"
        element={<AppliedCustomerListSVBPage />}
      />
      <Route
        path="student-visa/collected-passport"
        element={<CollectedPassportSVBPage />}
      />
      <Route
        path="student-visa/sent-to-agency"
        element={<SendToAgencyPageSVB />}
      />
      <Route
        path="student-visa/under-processing"
        element={<UnderProcessingPageSVB />}
      />
      <Route
        path="student-visa/ready-for-flight"
        element={<ReadyForFlightPageSVB />}
      />
      <Route
        path="student-visa/success-flight"
        element={<SuccessFilghtPageSVB />}
      />
      <Route
        path="student-visa/passport-return-req"
        element={<RetunePassportReqPageSVB />}
      />
      <Route
        path="student-visa/return-passport"
        element={<RetunePassportPageSVB />}
      />
      {/* there are all hajj Umrah Agency Route */}
      <Route
        path="hajj-umrah/applied-customer"
        element={<AppliedCustomerListPageHUB />}
      />
      <Route
        path="hajj-umrah/collected-passport"
        element={<CollectedPassportListPageHUB />}
      />
      <Route
        path="hajj-umrah/sent-to-agency"
        element={<SendToAgencyPageHUB />}
      />
      <Route
        path="hajj-umrah/under-processing"
        element={<UnderProcessingPageHUB />}
      />
      <Route
        path="hajj-umrah/ready-for-flight"
        element={<RedayForFlightPageHUb />}
      />
      <Route
        path="hajj-umrah/success-flight"
        element={<SuccessFilePageHUB />}
      />
      <Route
        path="hajj-umrah/passport-return-req"
        element={<RetunePassportReqPageHUB />}
      />
      <Route
        path="hajj-umrah/return-passport"
        element={<RetunePassportPageHUB />}
      />
      {/* there are all Voucher routes */}
      <Route
        path="devit-voucher/create-voucher"
        element={<CreateVoucherPageDV />}
      />
      <Route
        path="devit-voucher/voucher-list"
        element={<VoucherListDVPage />}
      />
      <Route
        path="credit-voucher/create-voucher"
        element={<CreateVoucherPageCV />}
      />
      <Route
        path="credit-voucher/voucher-list"
        element={<VoucherListCVPage />}
      />
      <Route
        path="commission-voucher/create-voucher"
        element={<CreateVoucherPageCOV />}
      />
      <Route
        path="commission-voucher/voucher-list"
        element={<VoucherListCOVPage />}
      />
    </Route>
  </Route>
);
