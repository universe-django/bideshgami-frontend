import { Controller } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectGroup,
  MultiSelectItem,
  MultiSelectTrigger,
  MultiSelectValue,
} from "../ui/multi-select";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const AdFormGeneralInfo = ({
  register,
  errors,
  control,
  countryList,
  typeOfWorkList,
  selectionCategories,
  gender,
  selected,
  handleChange,
  requiredDocuments,
  currencyList,
}) => {
  return (
    <div className="rounded-sm w-full ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-1">
            Post Title
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
          {countryList.length > 0 && (
            <Controller
              name="country"
              control={control}
              rules={{ required: "Country is required" }}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  value={field.value || ""}
                >
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
          )}
          {errors.country && (
            <p className="text-red-500 text-xs mt-1">
              {errors.country.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-1">
            Type of work
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
            Company Name
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
            Company Location
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
            Visa sponsor name
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
            Selection Category
          </Label>{" "}
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

        <div>
          <Label className="text-sm font-medium text-gray-700 mb-1">
            Trade on Visa
          </Label>
          <Input
            {...register("tradeOnVisa")}
            type="text"
            placeholder="trade on visa"
          />
        </div>
        <div className="flex gap-2 w-full">
          <div className="w-full">
            <Label className="text-sm font-medium text-gray-700 mb-1">
              Salary
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
          <div className="w-full">
            <Label className="text-sm font-medium text-gray-700 mb-1">
              Currency
            </Label>
            <Controller
              name="currency"
              control={control}
              rules={{ required: "Currency is required" }}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  value={field.value || ""}
                >
                  <SelectTrigger className="w-full rounded-md py-3 px-4 flex justify-between items-center gap-2">
                    <SelectValue placeholder="Select Currency" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectGroup>
                      <SelectLabel>Currency</SelectLabel>
                      {currencyList.map((currency) => (
                        <SelectItem key={currency._id} value={currency._id}>
                          <img
                            src={`https://flagcdn.com/24x18/${currency.flag.toLowerCase()}.png`}
                            alt={currency.name}
                            style={{
                              width: "20px",
                              height: "15px",
                              marginRight: "8px",
                            }}
                          />
                          {currency.code}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.currency && (
              <p className="text-red-500 text-xs mt-1 text-left">
                {errors.currency.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-1">
            Age Limit
          </Label>
          <div className="flex gap-2">
            <Input
              type="number"
              {...register("minAge")}
              placeholder="Minimum Age"
              className="w-full rounded-md px-3 py-2"
            />
            <Input
              type="number"
              {...register("maxAge")}
              placeholder="Maximum Age"
              className="w-full rounded-md px-3 py-2 "
            />
          </div>
        </div>
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-1">
            Iqama Express
          </Label>
          <Input
            type="text"
            {...register("iqmaExpress")}
            placeholder="Iqama Express"
            className="w-full rounded-md px-3 py-2 "
          />
        </div>
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-1">
            Food Express
          </Label>
          <Input
            type="text"
            {...register("foodExpress")}
            placeholder="Food Express"
            className="w-full rounded-md px-3 py-2 "
          />
        </div>

        <div className="flex gap-2">
          <div className="w-full">
            <Label className="text-sm font-medium text-gray-700 mb-1">
              Woring Hours
            </Label>
            <Input
              type="text"
              placeholder="Working Hours"
              {...register("workingHours")}
              className="w-full rounded-md px-3 py-2 "
            />
          </div>
          <div className="w-full">
            <Label className="text-sm font-medium text-gray-700 mb-1">
              Total Quota
            </Label>
            <Input
              type="text"
              placeholder="Total Quota"
              {...register("totalQuota")}
              className="w-full rounded-md px-3 py-2 "
            />
          </div>
        </div>
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-1">
            Duraiton of Employment
          </Label>
          <div className="flex items-center gap-2">
            <Input
              {...register("durationOfEmployment")}
              type="text"
              placeholder="Duration of employment"
              className="w-full rounded-md px-3 py-2 "
            />
            <Controller
              name="renewable"
              control={control}
              render={({ field }) => (
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  id="renewable"
                />
              )}
            />
            <Label htmlFor="renewable" className="font-normal">
              Renewable
            </Label>
          </div>
        </div>
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-1">
            Accommondation Express
          </Label>
          <Input
            type="text"
            {...register("accommodationExpress")}
            placeholder="Accommondation Express"
            className="w-full border rounded-md px-3 py-2 pr-10 "
          />
        </div>
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-1">
            Select Gender
          </Label>
          <div className="flex gap-4 mt-3">
            {gender.map((item) => (
              <div key={item.id} className="flex items-center space-x-2">
                <Checkbox
                  id={item.value}
                  checked={selected.includes(item.value)}
                  onCheckedChange={() => handleChange(item.value)}
                />
                <Label htmlFor={item.value}>{item.value}</Label>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full">
          <Label className="text-sm font-medium text-gray-700 mb-1">
            Required Documents
          </Label>
          <Controller
            name="requiredDocument"
            control={control}
            render={({ field }) => (
              <MultiSelect
                values={field.value || []}
                onValuesChange={field.onChange}
              >
                <MultiSelectTrigger className="w-full ">
                  <MultiSelectValue placeholder="Required Documents..." />
                </MultiSelectTrigger>
                <MultiSelectContent>
                  <MultiSelectGroup>
                    {requiredDocuments.length > 0 ? (
                      requiredDocuments.map((docu) => (
                        <MultiSelectItem key={docu._id} value={docu._id}>
                          {docu.name}
                        </MultiSelectItem>
                      ))
                    ) : (
                      <p>empty</p>
                    )}
                  </MultiSelectGroup>
                </MultiSelectContent>
              </MultiSelect>
            )}
          />
        </div>

        <div>
          <Label className="text-sm font-medium text-gray-700 mb-1">
            Packeage Included
          </Label>
          <Input
            type="text"
            {...register("packageInclude")}
            placeholder="Package included"
            className="w-full border rounded-md px-3 py-2 "
          />
        </div>

        <div>
          <Label className="text-sm font-medium text-gray-700 mb-1">
            Required Experience
          </Label>
          <Input
            type="text"
            {...register("requiredExp")}
            placeholder="Required Experience"
            className="w-full rounded-md px-3 py-2 "
          />
        </div>

        <div>
          <Label className="text-sm font-medium text-gray-700 mb-1">
            Application Deadline
          </Label>
          <Input
            type="date"
            {...register("applicationDeadline")}
            placeholder="Application Deadline"
            className="w-full rounded-md px-3 py-2 "
          />
        </div>
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-1">
            Education
          </Label>
          <Input
            type="text"
            {...register("education")}
            placeholder="Education"
            className="w-full rounded-md px-3 py-2 "
          />
        </div>
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-1">
            Delegation Deadline
          </Label>
          <Input
            type="date"
            {...register("delegateDateDeadline")}
            placeholder="Application Deadline"
            className="w-full rounded-md px-3 py-2 "
          />
        </div>
      </div>
    </div>
  );
};
