"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export default function AddReminderDialog({ open, setOpen }) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-center">
            Add Reminder
          </DialogTitle>
          <DialogDescription className="text-center text-gray-500">
            It will remind you <b>10 days</b> and <b>3 days</b> before the
            expiry of your medical and police clearance.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <div className="flex flex-col w-full">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Medical Expired Date
            </label>
            <div className="relative">
              <Input type="date" className="pr-10" placeholder="DD/MM/YY" />
              <Calendar
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Police Clearance Expired Date
            </label>
            <div className="relative">
              <Input type="date" className="pr-10" placeholder="DD/MM/YY" />
              <Calendar
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <Button
            onClick={() => setOpen(false)}
            className="px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
          >
            Done
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
