import AgentRegister from "@/components/Agent/AgentRegister";
import CustomerLayout from "@/components/customer/customer-layout/CustomerLayout";
import CountrySelector from "@/components/customerAccount/CountrySelector";
import JobSelector from "@/components/customerAccount/JobSelector";
import Service from "@/components/customerAccount/Service";
import UserRegister from "@/components/customerAccount/UserRegister";
import VerifyWithOTP from "@/components/customerAccount/VerifyWithOTP";
import MainLaouts from "@/components/layout/MainLayouts";
import AgencyRegisterPage from "@/pages/agency-page/AgencyRegisterPage";
import AppointmentBookingPage from "@/pages/customer-page/AppointmentBookingPage";
import BookingPage from "@/pages/customer-page/BookingPage";
import ChangePasswordPage from "@/pages/customer-page/ChangePasswordPage";
import CoTravellerPage from "@/pages/customer-page/CoTravellerPage";
import DashboardPage from "@/pages/customer-page/DashboardPage";
import FavouritePage from "@/pages/customer-page/FavouritePage";
import PaymentPage from "@/pages/customer-page/PaymentPage";
import ProfileEditPage from "@/pages/customer-page/ProfileEditPage";
import ProfilePage from "@/pages/customer-page/ProfilePage";
import StatusCheckPage from "@/pages/customer-page/StatusCheckPage";
import HomePage from "@/pages/HomePage";

import UserPage from "@/pages/UserPage";
import VisaApplyPage from "@/pages/VisaApplyPage";
import VisaDetailsPage from "@/pages/VisaPage";
import { Navigate, Route } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import LoginPage from "@/pages/LoginPage";

export const MainRoutes = (
  <>
    <Route path="/" element={<MainLaouts />}>
      <Route index element={<HomePage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/user/register" element={<UserRegister />} />
      <Route path="/agency/register" element={<AgencyRegisterPage />} />
      <Route path="/agent/register" element={<AgentRegister />} />
      <Route path="login" element={<LoginPage />} />

      <Route path="/user/verify-with-otp" element={<VerifyWithOTP />} />
      <Route path="/user/service" element={<Service />} />
      <Route path="/user/countries" element={<CountrySelector />} />
      <Route path="/user/jobs" element={<JobSelector />} />

      <Route path="visa-details/:id" element={<VisaDetailsPage />} />
      <Route path="apply" element={<VisaApplyPage />} />

      <Route element={<ProtectedRoute allowedRoles={["customer"]} />}>
        <Route path="customer" element={<CustomerLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="me" element={<ProfilePage />} />
          <Route path="me/edit" element={<ProfileEditPage />} />
          <Route path="favourite" element={<FavouritePage />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="appointment" element={<AppointmentBookingPage />} />
          <Route path="co-traveler" element={<CoTravellerPage />} />
          <Route path="check-status" element={<StatusCheckPage />} />
          <Route path="change-password" element={<ChangePasswordPage />} />
          <Route path="payment" element={<PaymentPage />} />
        </Route>
      </Route>
    </Route>
  </>
);
