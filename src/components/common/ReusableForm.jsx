import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import FormFieldTest from "./FormField";

export default function ReusableForm({
  form,
  fields,
  onSubmit,
  submitLabel = "Submit",
  isLoading = false,
  className = "",
}) {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`space-y-6 ${className}`}
      >
        {fields.map((fieldConfig) => (
          <FormFieldTest
            key={fieldConfig.name}
            control={form.control}
            config={fieldConfig}
          />
        ))}
        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {submitLabel}
        </Button>
      </form>
    </Form>
  );
}
