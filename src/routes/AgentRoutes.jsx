import AgentDashboardLayout from "@/components/Agent/AgentLayout/AgentDashboardLayout";
import AgentDashboardPage from "@/pages/Agent-Pages/AgentDashboardPage";
import AgentProfilePage from "@/pages/Agent-Pages/AgentProfilePage";
import AgentEditProfilePage from "@/pages/Agent-Pages/AgentEditProfilePage";
import { Route } from "react-router";
import AgentFightBookingPage from "@/pages/Agent-Pages/AgentFightBookingPage";
import AgentAllBookingsPage from "@/pages/Agent-Pages/AgentAllBookingsPage";
import AgentChatPage from "@/pages/Agent-Pages/AgentChatPage";
import AgentViewDocumentPage from "@/pages/Agent-Pages/AgentViewDocumentpage";

import AgentSuccessFilePage from "@/pages/Agent-Pages/AgentSuccessFilePage";
import AgentPassportRetunePage from "@/pages/Agent-Pages/AgentPassportRetunePage";
import AgentUnderProcessingPage from "@/pages/Agent-Pages/AgentUnderProcessingPage";

import WorkVisaPage from "@/pages/Agent-Pages/WorkVisaPage";
import StudentsVisaPage from "@/pages/Agent-Pages/StudentsVisaPage";
import HajjVisa from "@/components/Agent/HajjVisa";
import AgentCommissionPage from "@/pages/Agent-Pages/AgentCommissionPage";
import AgentCheckStatusPage from "@/components/Agent/AgentCheckStatusPage";
import AgentPaymentDetailsPaga from "@/pages/Agent-Pages/AgentPaymentDetailsPaga";
import AgentChangePasswordPage from "@/pages/Agent-Pages/AgentChangePasswordPage";
import AgentFaqPage from "@/pages/Agent-Pages/AgentFaqPage";
import AdsVisaDetailsPage from "@/pages/Agent-Pages/AdsVisaDetailsPage";
import HajjVisaPage from "@/pages/Agent-Pages/HajjVisaPage";
import ProtectedRoute from "./ProtectedRoute";
export const AgentRoutes = (
  <Route element={<ProtectedRoute allowedRoles={["agent"]} />}>
    <Route path="/agent/dashboard" element={<AgentDashboardLayout />}>
      <Route index element={<AgentDashboardPage />} />
      <Route path="/agent/dashboard/profile" element={<AgentProfilePage />} />
      <Route
        path="/agent/dashboard/profile-edit"
        element={<AgentEditProfilePage />}
      />
      <Route path="/agent/dashboard/work-visa" element={<WorkVisaPage />} />
      <Route
        path="/agent/dashboard/student-visa"
        element={<StudentsVisaPage />}
      />
      <Route
        path="/agent/dashboard/hajj-and-mrah-visa"
        element={<HajjVisaPage />}
      />
      <Route
        path="/agent/dashboard/ads-visa-details/:id"
        element={<AdsVisaDetailsPage />}
      />
      <Route path="/agent/dashboard/chat-box" element={<AgentChatPage />} />
      <Route
        path="/agent/dashboard/view-document"
        element={<AgentViewDocumentPage />}
      />
      <Route
        path="/agent/dashboard/my-bookings"
        element={<AgentAllBookingsPage />}
      />
      <Route
        path="/agent/dashboard/fight-booking"
        element={<AgentFightBookingPage />}
      />
      <Route
        path="/agent/dashboard/under-processing"
        element={<AgentUnderProcessingPage />}
      />
      <Route
        path="/agent/dashboard/success-file"
        element={<AgentSuccessFilePage />}
      />
      <Route
        path="/agent/dashboard/passport-retune"
        element={<AgentPassportRetunePage />}
      />
      <Route
        path="/agent/dashboard/passport-retune"
        element={<AgentPassportRetunePage />}
      />
      <Route
        path="/agent/dashboard/commission"
        element={<AgentCommissionPage />}
      />
      <Route
        path="/agent/dashboard/check-status"
        element={<AgentCheckStatusPage />}
      />
      <Route
        path="/agent/dashboard/commission"
        element={<AgentCommissionPage />}
      />
      <Route
        path="/agent/dashboard/payment-details"
        element={<AgentPaymentDetailsPaga />}
      />
      <Route
        path="/agent/dashboard/change-password"
        element={<AgentChangePasswordPage />}
      />
      <Route path="/agent/dashboard/terms" element={<AgentFaqPage />} />
    </Route>
  </Route>
);
