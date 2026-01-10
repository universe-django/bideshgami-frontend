import { useAdsForm } from "@/hooks/useAdsForm";
import { gender } from "@/temp_data/gender";
import { CircleAlert, Loader2 } from "lucide-react";
import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import FileUpload from "../common/FileUpload";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { AdFormGeneralInfo } from "./AdFormGeneralInfo";
import { AdFormPackageDetails } from "./AdFormPackageDetails";
import { AdFormPaymentOptions } from "./AdFormPaymentOptions";
import { Skeleton } from "../ui/skeleton";

const selectionCategories = [
  { id: 1, val: "Delegate interview", type: "delegateInterview" },
  { id: 2, val: "Pushing", type: "pushing" },
  { id: 3, val: "CV Selection", type: "cvSelection" },
  { id: 4, val: "Office Selection", type: "officeSelection" },
];

const paymentMethods = [
  {
    id: 1,
    val: "Advance-AfterVisa- Before Flight",
    type: "advanceAfterBefore",
  },
  { id: 2, val: "After Visa-Before Flight", type: "AfterBefore" },
];

export default function AdsForm() {
  const {
    register,
    control,
    handleSubmit,
    errors,
    showInputs,
    showInputs2,
    selected,
    handleChange,
    setBannerUrl,
    bannerUrl,
    isSubmitting,
    isEditMode,
    isAdLoading,
    countryList,
    typeOfWorkList,
    currencyList,
    requiredDocs,
  } = useAdsForm();

  if (isAdLoading) {
    return (
      <div className="p-4 m-2">
        <Skeleton className="h-10 w-1/4 mb-4" />
        <Skeleton className="h-[262px] w-full mb-4" />
        <Skeleton className="h-40 w-full mb-4" />
        <div className="grid grid-cols-2 gap-4">
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 bg-white rounded-2xl">
      <form
        onSubmit={handleSubmit}
        className="p-4 m-2 lg:col-span-10 flex flex-col gap-4"
      >
        <h1 className="text-2xl font-bold text-gray-800">
          {isEditMode ? "Edit Ad" : "Create a New Ad"}
        </h1>
        <FileUpload
          label="Upload Ad Banner"
          height="h-[262px]"
          bannerUrl={bannerUrl}
          setBannerUrl={setBannerUrl}
        />
        <div className="bg-[#FF88001A] p-6">
          <h1 className="text-2xl font-semibold flex gap-1 items-center mb-3">
            <CircleAlert /> Import Instruction
          </h1>
          <p>
            Office address, phone number, email, or RL number must not be
            mentioned anywhere in the post.
          </p>
        </div>

        <AdFormGeneralInfo
          register={register}
          errors={errors}
          control={control}
          countryList={countryList}
          typeOfWorkList={typeOfWorkList}
          selectionCategories={selectionCategories}
          gender={gender}
          selected={selected}
          handleChange={handleChange}
          requiredDocuments={requiredDocs}
          currencyList={currencyList}
        />

        <input type="hidden" {...register("category_id")} />
        <input type="hidden" {...register("commisionType")} />
        <input type="hidden" {...register("commisionValue")} />
        <input type="hidden" {...register("slug")} />

        <AdFormPackageDetails
          register={register}
          control={control}
          paymentMethods={paymentMethods}
          errors={errors}
        />

        <AdFormPaymentOptions
          register={register}
          showInputs={showInputs}
          showInputs2={showInputs2}
        />

        <div>
          <Label className="text-sm font-medium text-gray-700 mt-10 mb-1">
            Description
          </Label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Textarea
                {...field}
                placeholder="type description"
                rows={20}
                className="w-full rounded-md px-3 py-2 "
              />
            )}
          />
        </div>

        {/* Terms */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <Controller
            name="terms"
            control={control}
            rules={{
              required: isEditMode
                ? false
                : "You must accept the terms and conditions",
            }}
            render={({ field }) => (
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                id="terms"
              />
            )}
          />
          <Label htmlFor="terms" className="font-normal sm:text-xs text-sm">
            By Continuing, I agree to the website{" "}
            <Link to="/terms" className="text-primary hover:underline">
              Terms And Condition
            </Link>{" "}
            and Privacy Policy
          </Label>
        </div>
        {errors.terms && (
          <p className="text-red-500 text-xs mt-1 text-center">
            {errors.terms.message}
          </p>
        )}

        <Button
          type="submit"
          className="btn-primary w-full mt-4 cursor-pointer"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <Loader2 className="animate-spin mx-auto" />
          ) : isEditMode ? (
            "Update Ad"
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </div>
  );
}
