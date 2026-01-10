import { Input } from "../ui/input";
import { Label } from "../ui/label";

export const AdFormPaymentOptions = ({ register, showInputs, showInputs2 }) => {
  return (
    <>
      {showInputs && (
        <div className="grid grid-cols-4 gap-2 mt-10">
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-1">
              payment Title
            </Label>
            <Input
              type="text"
              disabled
              value="Advance Payment"
              className="w-full rounded-md px-3 py-2 disabled:text-gray-900 disabled:bg-gray-100"
            />
          </div>
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-1">
              Amount
            </Label>
            <Input
              type="text"
              {...register("advancePayment.amount")}
              placeholder="Enter Amount"
              className="w-full rounded-md px-3 py-2"
            />
          </div>
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-1">
              Customer Payable with CM
            </Label>
            <Input
              type="text"
              disabled
              {...register("advancePayment.customerPayable")}
              placeholder="Auto Showing Amount"
              className="w-full rounded-md px-3 py-2 disabled:text-gray-900 disabled:bg-gray-100"
            />
          </div>
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-1">
              Agent Payable with CM
            </Label>
            <Input
              disabled
              {...register("advancePayment.agentPayable")}
              placeholder="Auto Showing Amount "
              className="disabled:text-gray-900 disabled:bg-gray-100"
            />
          </div>
          <Input
            disabled
            value="After visa payment "
            className="disabled:text-gray-900 disabled:bg-gray-100"
          />
          <Input
            {...register("afterVisaPayment.amount")}
            placeholder="Enter Amount"
          />
          <Input
            placeholder="Auto Showing Amount"
            {...register("afterVisaPayment.customerPayable")}
            disabled
            className="disabled:text-gray-900 disabled:bg-gray-100"
          />
          <Input
            placeholder="Auto Showing Amount"
            {...register("afterVisaPayment.agentPayable")}
            disabled
            className="disabled:text-gray-900 disabled:bg-gray-100"
          />
          <Input
            placeholder="Before Flight Payment"
            value="Before Flight Payment"
            disabled
            className="disabled:text-gray-900 disabled:bg-gray-100"
          />
          <Input
            {...register("beforeFlightPayment.amount")}
            placeholder="Enter Amount"
          />
          <Input
            placeholder="Auto Showing Amount"
            {...register("beforeFlightPayment.customerPayable")}
            disabled
            className="disabled:text-gray-900 disabled:bg-gray-100"
          />
          <Input
            placeholder="Auto Showing Amount"
            {...register("beforeFlightPayment.agentPayable")}
            disabled
            className="disabled:text-gray-900 disabled:bg-gray-100"
          />
          <Input
            placeholder="Total Amount"
            disabled
            className="disabled:text-gray-900 disabled:bg-gray-100"
          />
          <Input
            {...register("totalAmount.amount")}
            placeholder="Enter Amount"
          />
          <Input
            placeholder="Auto Showing Amount"
            {...register("totalAmount.customerPayable")}
            disabled
            className="disabled:text-gray-900 disabled:bg-gray-100"
          />
          <Input
            placeholder="Auto Showing Amount"
            {...register("totalAmount.agentPayable")}
            disabled
            className="disabled:text-gray-900 disabled:bg-gray-100"
          />
        </div>
      )}

      {showInputs2 && (
        <div className="grid grid-cols-4 gap-2 mt-10">
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-1">
              payment Title
            </Label>
            <Input
              placeholder="After visa payment"
              disabled
              value="After visa payment"
              className="disabled:text-gray-900 disabled:bg-gray-100"
            />
          </div>
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-1">
              Amount
            </Label>
            <Input
              {...register("afterVisaOnly.amount")}
              placeholder="Enter Amount"
            />
          </div>
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-1">
              Customer Payable with CM
            </Label>
            <Input
              placeholder="Auto Showing Amount"
              {...register("afterVisaOnly.customerPayable")}
              disabled
              className="disabled:text-gray-900 disabled:bg-gray-100"
            />
          </div>
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-1">
              Agent Payable with CM
            </Label>
            <Input
              placeholder="Enter Amount"
              {...register("afterVisaOnly.agentPayable")}
              disabled
              className="disabled:text-gray-900 disabled:bg-gray-100"
            />
          </div>
          <Input
            placeholder="Before Flight Payment"
            value="Before Flight Payment"
            disabled
            className="disabled:text-gray-900 disabled:bg-gray-100"
          />
          <Input
            {...register("beforeFlightOnly.amount")}
            placeholder="Enter Amount"
          />
          <Input
            placeholder="Auto Showing Amount"
            {...register("beforeFlightOnly.customerPayable")}
            disabled
            className="disabled:text-gray-900 disabled:bg-gray-100"
          />
          <Input
            placeholder="Enter Amount"
            {...register("beforeFlightOnly.agentPayable")}
            disabled
            className="disabled:text-gray-900 disabled:bg-gray-100"
          />
          <Input
            placeholder="Total Amount"
            disabled
            className="disabled:text-gray-900 disabled:bg-gray-100"
          />
          <Input
            {...register("totalOnly.amount")}
            placeholder="Enter Amount"
          />
          <Input
            placeholder="Auto Showing Amount"
            {...register("totalOnly.customerPayable")}
            disabled
            className="disabled:text-gray-900 disabled:bg-gray-100"
          />
          <Input
            placeholder="Enter Amount"
            {...register("totalOnly.agentPayable")}
            disabled
            className="disabled:text-gray-900 disabled:bg-gray-100"
          />
        </div>
      )}
    </>
  );
};
