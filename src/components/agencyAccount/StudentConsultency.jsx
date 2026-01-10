import { useAdsForm } from "@/hooks/useAdsForm";
import { CircleAlert, Loader2 } from "lucide-react";
import { gender } from "@/temp_data/gender";
import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import FileUpload from "../common/FileUpload";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";

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

const requiredDocuments = [
    { id: 1, name: "Passport Copy", val: "passportCopy" },
    { id: 2, name: "Visa Copy", val: "visaCopy" },
    { id: 3, name: "Air Ticket", val: "airTicket" },
    { id: 4, name: "Police Clearance", val: "policeClearance" },
    { id: 5, name: "Medical Fit Certificate", val: "medicalFitCertificate" },
];

export default function StudentConsultency() {
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
        countryList,
        typeOfWorkList,
        currencyList,
    } = useAdsForm();

    return (
        <div className="flex flex-col gap-4 bg-white rounded-2xl">
            <form
                onSubmit={handleSubmit}
                className="p-4 m-2 lg:col-span-10 flex flex-col gap-4"
            >
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label className="text-sm font-medium text-gray-700 mb-1">
                            Course Title
                        </Label>
                        <Input
                            type="text"
                            {...register("title", { required: "Title is required" })}
                            placeholder="Post Title"
                            className="w-full rounded-md px-3 py-2"
                        />
                        {errors.title && (
                            <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>
                        )}
                    </div>
                    <div>
                        <Label className="text-sm font-medium text-gray-700 mb-1">
                            Course fee
                        </Label>
                        <Input
                            type="text"
                            {...register("title", { required: "Title is required" })}
                            placeholder="Post Title"
                            className="w-full rounded-md px-3 py-2"
                        />
                        {errors.title && (
                            <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>
                        )}
                    </div>

                    <div>
                        <Label className="text-sm font-medium text-gray-700 mb-1">
                            Country Name
                        </Label>
                        <Controller
                            name="country"
                            control={control}
                            rules={{ required: "Country is required" }}
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value || ""}>
                                    <SelectTrigger className="w-full rounded-md py-3 px-4 flex justify-between items-center gap-2">
                                        <SelectValue placeholder="Select Country" />
                                    </SelectTrigger>
                                    <SelectContent className="w-full">
                                        <SelectGroup>
                                            <SelectLabel>Country</SelectLabel>
                                            {countryList.map((country) => (
                                                <SelectItem key={country._id} value={country._id}>
                                                    {country.name}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        {errors.country && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.country.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1">
                            Type of Visa
                        </label>
                        <Controller
                            name="typeOfWork"
                            control={control}
                            rules={{ required: "Type of work is required" }}
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value || ""}>
                                    <SelectTrigger className="w-full  rounded-md py-3 px-4 flex justify-between items-center gap-2">
                                        <SelectValue placeholder="Works" />
                                    </SelectTrigger>
                                    <SelectContent className="w-full">
                                        <SelectGroup>
                                            <SelectLabel>Works</SelectLabel>
                                            {typeOfWorkList.map((types) => (
                                                <SelectItem key={types._id} value={types._id}>
                                                    {types.workTypeName}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        {errors.typeOfWork && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.typeOfWork.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <Label className="text-sm font-medium text-gray-700 mb-1">
                            University Name
                        </Label>
                        <Input
                            type="text"
                            {...register("companyName")}
                            placeholder="Company Name"
                            className="w-full  rounded-md px-3 py-2 "
                        />
                    </div>
                    <div>
                        <Label className="text-sm font-medium text-gray-700 mb-1">
                            University Location
                        </Label>
                        <Input
                            type="text"
                            {...register("companyLocation")}
                            placeholder="Company Location"
                            className="w-full  rounded-md px-3 py-2 "
                        />
                    </div>

                    <div>
                        <Label className="text-sm font-medium text-gray-700 mb-1">
                            Language Proficiency
                        </Label>
                        <Input
                            type="text"
                            {...register("sponsorName")}
                            placeholder="Visa sponsor name"
                            className="w-full  rounded-md px-3 py-2 "
                        />
                    </div>
                    <div>
                        <Label className="text-sm font-medium text-gray-700 mb-1">
                            Session
                        </Label>
                        <Input
                            type="text"
                            {...register("title", { required: "Title is required" })}
                            placeholder="Post Title"
                            className="w-full rounded-md px-3 py-2"
                        />
                        {errors.title && (
                            <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>
                        )}
                    </div>

                    <div>
                        <Label className="text-sm font-medium text-gray-700 mb-1">
                            Study Level
                        </Label>
                        <Input
                            {...register("tradeOnVisa")}
                            type="text"
                            placeholder="trade on visa"
                        />
                    </div>

                    <div>
                        <Label className="text-sm font-medium text-gray-700 mb-1">
                            Subject
                        </Label>
                        <Input
                            {...register("tradeOnVisa")}
                            type="text"
                            placeholder="trade on visa"
                        />
                    </div>

                    <div>
                        <Label className="text-sm font-medium text-gray-700 mb-1">
                            Required Document
                        </Label>
                        <Controller
                            name="selectionCategory"
                            control={control}
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value || ""}>
                                    <SelectTrigger className="w-full  rounded-md py-3 px-4 flex justify-between items-center gap-2">
                                        <SelectValue placeholder="Selection Category" />
                                    </SelectTrigger>
                                    <SelectContent className="w-full">
                                        <SelectGroup>
                                            <SelectLabel>Selection Category</SelectLabel>
                                            {selectionCategories.map((slcate) => {
                                                return (
                                                    <SelectItem key={slcate.id} value={slcate.type}>
                                                        {slcate.val}
                                                    </SelectItem>
                                                );
                                            })}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                    </div>


                    <div className="flex gap-2 w-full">
                        <div className="w-full">
                            <Label className="text-sm font-medium text-gray-700 mb-1">
                                Deadline
                            </Label>
                            <Input
                                type="number"
                                {...register("salary", {
                                    required: "Salary is required",
                                    validate: {
                                        notZeroStart: (value) =>
                                            !/^0\d*/.test(value) || "Salary cannot start with 0",
                                        positive: (value) =>
                                            parseFloat(value) > 0 || "Salary must be greater than 0",
                                    },
                                })}
                                placeholder="Salary"
                                className="w-full  rounded-md px-3 py-2 "
                            />
                            {errors.salary && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.salary.message}
                                </p>
                            )}
                        </div>

                    </div>
                </div>


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
                        rules={{ required: "You must accept the terms and conditions" }}
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

                {/* Submit Button  */}
                <Button
                    type="submit"
                    className="btn-primary w-full mt-4 cursor-pointer"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <Loader2 className="animate-spin mx-auto" />
                    ) : (
                        "Submit"
                    )}
                </Button>

            </form>
        </div>
    );
}
