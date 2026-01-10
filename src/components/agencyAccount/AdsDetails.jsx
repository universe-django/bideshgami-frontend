import useAxios from "@/hooks/useAxios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardImage from "../../assets/cardImg1.png";

import {
  MapPin,
  Building,
  DollarSign,
  Clock,
  GraduationCap,
  User,
  Home,
  FileText,
  CheckCircle,
  AlertCircle,
  Calendar,
  Briefcase,
  ArrowLeft,
  Utensils,
  CreditCard,
} from "lucide-react";

export default function AdsDetails() {
  const { slug } = useParams();
  const [adDetails, setAdDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await useAxios.get(`/ads/${slug}`);

        setAdDetails(response.data);
      } catch (err) {
        setError("Failed to load ad details.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchAdDetails();
    }
  }, [slug]);
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 animate-pulse">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
          <div className="h-64 bg-gray-200 rounded-lg mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <div className="h-10 bg-gray-200 rounded w-full"></div>
              <div className="h-10 bg-gray-200 rounded w-full"></div>
              <div className="h-10 bg-gray-200 rounded w-full"></div>
              <div className="h-32 bg-gray-200 rounded w-full"></div>
            </div>
            <div className="space-y-4">
              <div className="h-32 bg-gray-200 rounded-lg"></div>
              <div className="h-32 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md">
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!adDetails) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md">
          <AlertCircle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            No Job Details Found
          </h2>
          <p className="text-gray-600 mb-4">
            The job you're looking for doesn't exist or has been removed.
          </p>
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="bg-white shadow-sm rounded-t-2xl">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => window.history.back()}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Jobs
          </button>
        </div>
      </div>
      <div className="relative h-64 md:h-80">
        <img
          src={adDetails.banner || CardImage}
          alt={adDetails.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {adDetails.title}
          </h1>
          <div className="flex items-center text-sm md:text-base">
            <Building className="h-5 w-5 mr-2" />
            <span>{adDetails.companyName}</span>
            <MapPin className="h-5 w-5 ml-4 mr-2" />
            <span>{adDetails.companyLocation}</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Job Status */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Application Status
                </h2>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    adDetails.approved
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {adDetails.approved ? (
                    <span className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Approved
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      Pending
                    </span>
                  )}
                </span>
              </div>

              {adDetails.applicationDeadline && (
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar className="h-5 w-5 mr-2 text-red-500" />
                  <span>
                    Application Deadline:{" "}
                    {formatDate(adDetails.applicationDeadline)}
                  </span>
                </div>
              )}

              <div className="flex items-center text-gray-600">
                <Briefcase className="h-5 w-5 mr-2 text-blue-500" />
                <span>Category: {adDetails.category_id[0].name}</span>
              </div>
            </div>

            {/* Job Details */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Job Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Briefcase className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Type of Work</p>
                    <p className="font-medium">{adDetails.typeOfWork}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">{adDetails.companyLocation}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Working Hours</p>
                    <p className="font-medium">
                      {adDetails.workingHours} hours/day
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-medium">
                      {adDetails.durationOfEmployment} years
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Renewable</p>
                    <p className="font-medium">
                      {adDetails.renewable ? "Yes" : "No"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <User className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Selection Process</p>
                    <p className="font-medium capitalize">
                      {adDetails.selectionCategory
                        .replace(/([A-Z])/g, " $1")
                        .trim()}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Requirements
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <User className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Gender</p>
                    <p className="font-medium">{adDetails.gender.join(", ")}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Age Range</p>
                    <p className="font-medium">
                      {adDetails.minAge} - {adDetails.maxAge} years
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <GraduationCap className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Education</p>
                    <p className="font-medium">
                      {adDetails.education.join(", ")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FileText className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Trade on Visa</p>
                    <p className="font-medium">{adDetails.tradeOnVisa}</p>
                  </div>
                </div>
              </div>

              {adDetails.requiredDocuments &&
                adDetails.requiredDocuments.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h3 className="font-medium text-gray-800 mb-2">
                      Required Documents
                    </h3>
                    <ul className="space-y-1">
                      {adDetails.requiredDocuments.map((doc, index) => (
                        <li
                          key={index}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                          {doc.name || doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Benefits & Perks
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Home className="h-5 w-5 mr-3 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Accommodation</p>
                    <p className="font-medium">
                      {adDetails.accommodationExpress}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Utensils className="h-5 w-5 mr-3 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Food</p>
                    <p className="font-medium">{adDetails.foodExpress}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-3 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Iqma/Work Permit</p>
                    <p className="font-medium">{adDetails.iqmaExpress}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            {adDetails.payments && adDetails.payments.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Payment Information
                </h2>

                {adDetails.payments.map((payment, index) => (
                  <div
                    key={index}
                    className="mb-4 pb-4 border-b border-gray-200 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-gray-800">
                        Payment Type: {payment.paymentType}
                      </h3>
                      <span className="text-sm text-gray-500">
                        Created: {formatDate(payment.createdAt)}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {payment.afterVisaOnly && (
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-sm text-gray-500 mb-1">
                            After Visa
                          </p>
                          <p className="font-semibold text-lg">
                            {adDetails.currency}
                            {payment.afterVisaOnly.amount}
                          </p>
                          <p className="text-xs text-gray-600">
                            Customer: {adDetails.currency}
                            {payment.afterVisaOnly.customerPayable}
                          </p>
                        </div>
                      )}

                      {payment.beforeFlightOnly && (
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-sm text-gray-500 mb-1">
                            Before Flight
                          </p>
                          <p className="font-semibold text-lg">
                            {adDetails.currency}
                            {payment.beforeFlightOnly.amount}
                          </p>
                          <p className="text-xs text-gray-600">
                            Customer: {adDetails.currency}
                            {payment.beforeFlightOnly.customerPayable}
                          </p>
                        </div>
                      )}

                      {payment.totalOnly && (
                        <div className="bg-blue-50 rounded-lg p-3">
                          <p className="text-sm text-blue-600 mb-1">Total</p>
                          <p className="font-semibold text-lg text-blue-800">
                            {adDetails.currency}
                            {payment.totalOnly.amount}
                          </p>
                          <p className="text-xs text-blue-600">
                            Customer: {adDetails.currency}
                            {payment.totalOnly.customerPayable}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Salary
              </h3>
              <div className="flex items-baseline">
                <DollarSign className="h-6 w-6 mr-2 text-green-500" />
                <span className="text-3xl font-bold text-gray-900">
                  {adDetails.currency}
                  {adDetails.salary}
                </span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Based on {adDetails.workingHours} hours work day
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Company Information
              </h3>

              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Company Name</p>
                  <p className="font-medium">{adDetails.companyName}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Sponsor Name</p>
                  <p className="font-medium">{adDetails.sponsorName}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{adDetails.companyLocation}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Available Positions</p>
                  <p className="font-medium">{adDetails.totalQuota} slots</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
