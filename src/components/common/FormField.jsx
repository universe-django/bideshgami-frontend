import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Checkbox } from "../ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
  FormField as ShadcnFormField,
} from "../ui/form";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

export default function FormFieldTest({ control, config }) {
  return (
    <ShadcnFormField
      control={control}
      name={config.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{config.label}</FormLabel>
          <FormControl>
            {config.type === "textarea" ? (
              <Textarea
                placeholder={config.placeholder}
                disabled={config.disabled}
                {...field}
              />
            ) : config.type === "select" ? (
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={config.disabled}
              >
                <SelectTrigger>
                  <SelectValue placeholder={config.placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {config.options?.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : config.type === "checkbox" ? (
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                disabled={config.disabled}
              />
            ) : config.type === "date" ? (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={`w-full justify-start text-left font-normal ${
                      !field.value && "text-muted-foreground"
                    }`}
                    disabled={config.disabled}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>{config.placeholder || "Pick a date"}</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={config.disabled}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            ) : (
              <div className="relative">
                {config.icon && (
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    {config.icon}
                  </div>
                )}
                <Input
                  type={config.type || "text"}
                  placeholder={config.placeholder}
                  disabled={config.disabled}
                  className={config.icon ? "pl-10" : ""}
                  {...field}
                />
              </div>
            )}
          </FormControl>
          {config.description && (
            <FormDescription>{config.description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
