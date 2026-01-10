import { Controller } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const AdFormPackageDetails = ({
  register,
  control,
  paymentMethods,
  errors,
}) => {
  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-4"> B2B Package price Details</h3>
      <div className="flex gap-2">
        <div className="w-full">
          <Label className="text-sm font-medium text-gray-700 mb-1">
            Total Package Price
          </Label>
          <Input
            type="number"
            {...register("basePrice", {
              required: "Total Package Price is required",
              validate: {
                notZeroStart: (value) =>
                  !/^0\d*/.test(value) || "Price cannot start with 0",
                positive: (value) =>
                  parseFloat(value) > 0 || "Price must be greater than 0",
              },
            })}
            placeholder="Package Price"
            className="w-full rounded-md px-3 py-2 "
          />
          {errors.basePrice && (
            <p className="text-red-500 text-sm mt-1">
              {errors.basePrice.message}
            </p>
          )}
        </div>

        <div className="w-full">
          <Label className="text-sm font-medium text-gray-700 mb-1">
            Total Price With Commision Customer
          </Label>
          <Input
            type="number"
            disabled
            {...register("customerPayableWithCM")}
            placeholder="Customer Payable"
            className="w-full rounded-md px-3 py-2 "
          />
        </div>

        <div className="w-full">
          <Label className="text-sm font-medium text-gray-700 mb-1">
            Total Price With Commision for Agent
          </Label>
          <Input
            type="number"
            disabled
            {...register("agentPayableWithCM")}
            placeholder="Agent Payable"
            className="w-full rounded-md px-3 py-2 "
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-1">
            Payment System
          </Label>
          <Controller
            name="paymentType"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value || ""}>
                <SelectTrigger className="w-full rounded-md py-3 px-4 flex justify-between items-center gap-2">
                  <SelectValue placeholder="Payment" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectGroup>
                    <SelectLabel>Payment</SelectLabel>
                    {paymentMethods.map((data) => {
                      return (
                        <SelectItem key={data.id} value={data.type}>
                          {data.val}
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
        </div>
      </div>
    </div>
  );
};
