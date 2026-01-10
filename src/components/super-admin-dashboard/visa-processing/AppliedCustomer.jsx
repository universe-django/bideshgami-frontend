import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AppliedCustomer() {
    return (
        <main className="w-full bg-gray-50 flex flex-col items-center py-10 px-4">
            {/* Header */}
            <div className="relative w-full max-w-6xl mb-8">
                <h1 className="text-2xl font-semibold text-center">Customer Booking Form</h1>
                <div className="absolute top-0 right-0 flex gap-2">
                    <Button variant="secondary">Edit</Button>
                    <Button>View Post</Button>
                </div>
            </div>

            {/* Main Container */}
            <section className="w-full max-w-6xl p-6">
                {/* --- Customer Info Section --- */}
                <section className="grid md:grid-cols-2 gap-4">
                    <div>
                        <Label className="mb-2">Enter Your Full Name</Label>
                        <Input placeholder="MD.Mahmudul Hasan Fahad" />
                    </div>
                    <div>
                        <Label className="mb-2">Enter Your Phone Number</Label>
                        <Input placeholder="01816348393" />
                    </div>
                    <div>
                        <Label className="mb-2">Enter Your E-mail</Label>
                        <Input placeholder="mahmudul@gmail.com" />
                    </div>
                    <div>
                        <Label className="mb-2">Enter Your Passport Number</Label>
                        <Input placeholder="A1234567" />
                    </div>
                    <div>
                        <Label className="mb-2">Select Your Gender</Label>
                        <Input placeholder="Male" />
                    </div>
                    <div>
                        <Label className="mb-2">From (Auto Fill)</Label>
                        <Input placeholder="Dhaka" />
                    </div>
                    <div>
                        <Label className="mb-2">To (Auto Fill)</Label>
                        <Input placeholder="Dubai" />
                    </div>
                    <div>
                        <Label className="mb-2">Choose Your Application Center</Label>
                        <Input placeholder="Dhaka" />
                    </div>
                    <div>
                        <Label className="mb-2">Service Type (Auto Fill)</Label>
                        <Input placeholder="Dubai Work Permit" />
                    </div>
                    <div>
                        <Label className="mb-2">Total Payment (Auto Fill)</Label>
                        <Input placeholder="1200000 BDT" />
                    </div>
                </section>


                {/* --- Payment System Section --- */}
                <section>
                    <h2 className="font-semibold text-lg my-4">Payment System</h2>

                    <div className="grid md:grid-cols-3 gap-4 items-center">
                        {/* Advance Payment */}
                        <div>
                            <Label className="mb-2">Payment Title</Label>
                            <Button variant="outline" className="mt-1 w-full">
                                Advance Payment
                            </Button>
                        </div>
                        <div>
                            <Label className="mb-2">Amount</Label>
                            <Input placeholder="50,000 BDT" className="mt-1" />
                        </div>
                        <Button className="mt-6 w-full">Collect</Button>

                        {/* After Visa Payment */}
                        <Button variant="outline" className="mt-4 w-full">
                            After Visa Payment
                        </Button>
                        <Input placeholder="1,50,000 BDT" className="mt-4" />
                        <Button variant="outline" className="mt-4 w-full">
                            Collect
                        </Button>

                        {/* Before Flight Payment */}
                        <Button variant="outline" className="mt-4 w-full">
                            Before Flight Payment
                        </Button>
                        <Input placeholder="2,00,000 BDT" className="mt-4" />
                        <Button variant="outline" className="mt-4 w-full">
                            Collect
                        </Button>
                    </div>
                </section>

                {/* --- Agent & Agency Info --- */}
                <section className="grid md:grid-cols-2 gap-6 mt-10">
                    <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                        <h3 className="font-semibold mb-3 text-gray-800">
                            Agent Info (Passport Sender)
                        </h3>
                        <ul className="space-y-1 text-sm text-gray-600">
                            <li>Agent Name :</li>
                            <li>Agency/Shop Name :</li>
                            <li>RL Number :</li>
                            <li>Phone Number :</li>
                            <li>E-mail :</li>
                            <li>Agency ID/Agent ID :</li>
                        </ul>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                        <h3 className="font-semibold mb-3 text-gray-800">
                            Agency Info (Processing Agency)
                        </h3>
                        <ul className="space-y-1 text-sm text-gray-600">
                            <li>Agency Name :</li>
                            <li>RL Number :</li>
                            <li>Phone Number :</li>
                            <li>E-mail :</li>
                            <li>Agency ID :</li>
                        </ul>
                    </div>
                </section>

                <div className="flex justify-center mt-10">
                    <Button size="lg" className="px-10">
                        Collect Passport
                    </Button>
                </div>
            </section>
        </main>
    );
}
