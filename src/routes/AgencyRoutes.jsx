import React from "react";
import AgencyDashboadLayout from "@/components/agencyAccount/layout/AgencyDashboadLayout";
import TermsPage from "@/pages/agency-page/TermsPage";
import { Route } from "react-router";
import AgencyProfilePage from "@/pages/agency-page/AgencyProfilePage";
import AgencyChatPage from "@/pages/agency-page/AgencyChatPage";
import AgencyAdsPage from "@/pages/agency-page/AgencyAdsPage";
import AgencyDashboardPage from "@/pages/agency-page/AgencyDashboardPage";
import AgencyMyAdsPage from "@/pages/agency-page/AgencyMyAdsPage";
import AgencyCustomerListPage from "@/pages/agency-page/AgencyCustomerListPage";
import AgencySuccessPage from "@/pages/agency-page/AgencySuccessPage";
import AgencyRetunePassportPage from "@/pages/agency-page/AgencyRetunePassportPage";
import AgencyFlightBooking from "@/components/agencyAccount/AgencyFlightBooking";
import AgencyCommissionPage from "@/pages/agency-page/AgencyCommissionPage";
import AgencyReceivePassportPage from "@/pages/agency-page/AgencyReceivePassportPage";
import AgencyProfleEditPage from "@/pages/agency-page/AgencyProfleEditPage";
import MyBookingPage from "@/pages/agency-page/MyBookingPage";
import AgencyUnderProcessingPage from "@/pages/agency-page/AgencyUnderProcessingPage";
import AgencyVisaApprovedPage from "@/pages/agency-page/AgencyVisaApprovedPage";
import AgencyReadyForFlightPage from "@/pages/agency-page/AgencyReadyForFlightPage";
import AppliedCustomerPage from "@/pages/agency-page/AppliedCustomerPage";
import AgencyStatusCheckPage from "@/pages/agency-page/AgencyStatusCheckPage";
import AgencyPaymentDetailsPage from "@/pages/agency-page/AgencyPaymentDetailsPage";
import AgencyChangepasswordPage from "@/pages/agency-page/AgencyChangepasswordPage";
import AgencyCreateUserPage from "@/pages/agency-page/AgencyCreateUserPage";
import AgencyManageUserPage from "@/pages/agency-page/AgencyManageUserPage";
import HandoverPassportPage from "@/pages/agency-page/HandoverPassportPage";
import AgencyRejectVisaPage from "@/pages/agency-page/AgencyRejectVisaPage";
import AgencyAdvancePaymentPage from "@/pages/agency-page/AgencyAdvancePaymentPage";
import AgencyAfterFlightPaymentPage from "@/pages/agency-page/AgencyAfterFlightPaymentPage";
import AgencyBeforFlightPayment from "@/pages/agency-page/AgencyBeforFlightPayment";
import AgencyOnTheWayPage from "@/pages/agency-page/AgencyOnTheWaypage";
import AgencyReadyForFlight2Page from "@/pages/agency-page/AgencyReadyForFlight2Page";
import AgencyRequestPassportPage from "@/pages/agency-page/AgencyRequestPassportPage";
import AgencyFailedVisaPage from "@/pages/agency-page/AgencyFailedVisaPage";
import ProtectedRoute from "./ProtectedRoute";
import StudentConsultencyPage from "@/pages/agency-page/StudentConsultencyPage";
import AgencyCreateAdsPage from "@/pages/agency-page/AgencyCreateAdsPage";
import AdsDetailsPage from "@/pages/agency-page/AdsDetailsPage";
import AgencyEditAdPage from "@/pages/agency-page/AgencyEditAdPage";
//element={<AgencyProtectedRoute allowedRoles={["agency"]} />}
export const AgencyRoutes = (
  <Route element={<ProtectedRoute allowedRoles={["agency"]} />}>
    <Route path="agency" element={<AgencyDashboadLayout />}>
      <Route index element={<AgencyDashboardPage />} />
      <Route path="profile" element={<AgencyProfilePage />} />
      <Route path="profile/profile-edit" element={<AgencyProfleEditPage />} />
      <Route path="chatbox" element={<AgencyChatPage />} />
      <Route path="ads" element={<AgencyAdsPage />} />
      <Route path="ads/create-ads" element={<AgencyCreateAdsPage />} />
      <Route path="ads-list/:id" element={<AgencyMyAdsPage />} />
      <Route path="ads/view/:slug" element={<AdsDetailsPage />} />
      <Route path="ads/edit/:slug" element={<AgencyEditAdPage />} />
      <Route path="receive-passport" element={<AgencyReceivePassportPage />} />
      <Route path="under-processing" element={<AgencyUnderProcessingPage />} />
      <Route path="visa-approved" element={<AgencyVisaApprovedPage />} />
      <Route path="rejected-visa" element={<AgencyRejectVisaPage />} />
      <Route path="ready-for-flight" element={<AgencyReadyForFlightPage />} />
      <Route path="terms" element={<TermsPage />} />
      <Route path="success-file" element={<AgencySuccessPage />} />
      <Route path="check-status" element={<AgencyStatusCheckPage />} />
      <Route path="flight-ticket" element={<AgencyFlightBooking />} />
      <Route path="return-passport" element={<AgencyRetunePassportPage />} />
      <Route path="commission" element={<AgencyCommissionPage />} />
      <Route path="my-booking" element={<MyBookingPage />} />
      <Route path="applied-customer" element={<AppliedCustomerPage />} />
      <Route path="retune-passport" element={<AgencyRetunePassportPage />} />
      <Route path="payment-details" element={<AgencyPaymentDetailsPage />} />
      <Route path="advance-payment" element={<AgencyAdvancePaymentPage />} />
      <Route
        path="after-flight-payment"
        element={<AgencyAfterFlightPaymentPage />}
      />
      <Route
        path="befor-flight-payment"
        element={<AgencyBeforFlightPayment />}
      />
      <Route path="change-password" element={<AgencyChangepasswordPage />} />
      <Route path="commission" element={<AgencyCommissionPage />} />
      <Route path="my-booking" element={<MyBookingPage />} />
      <Route path="create-user" element={<AgencyCreateUserPage />} />
      <Route path="manage-user" element={<AgencyManageUserPage />} />
      <Route path="handover-passport" element={<HandoverPassportPage />} />
      <Route path="on-the-way" element={<AgencyOnTheWayPage />} />
      {/* <Route path="ready-for-flight2" element={<AgencyReadyForFlight2Page />} /> */}
      {/* <Route path="request-passport" element={<AgencyRequestPassportPage />} /> */}
      {/* <Route path="failed-visa" element={<AgencyFailedVisaPage />} /> */}
      <Route
        path="ads/student-consultency"
        element={<StudentConsultencyPage />}
      />
    </Route>
  </Route>
);
