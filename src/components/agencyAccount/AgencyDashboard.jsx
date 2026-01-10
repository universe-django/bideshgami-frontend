import React from 'react'


export default function AgencyDashboard() {

    const status = [
        { title: "My Booking", value: "200", color: "#C74F9B" },
        { title: "Under Proccessing", value: "01", color: "#5D3EB3" },
        { title: "Success Flight", value: "100", color: "#0066FF" },
        { title: "Return Passport", value: "20", color: "#B70800" },
        { title: "Flight Booking", value: "50", color: "#0066FF" },
        { title: "Payment", value: "20,00000", color: "#00245980" },
        { title: "Return Payment", value: "20,000", color: "#FACC15" },
        { title: "Commission", value: "20,000", color: "#FDB137" },
    ];

    return (
        <div className="flex md:p-5 lg:p-10">
            <section className="flex-1 p-6">
                <h1 className="font-bold text-xl mb-10">AGENCY DESHBORAD OVERVIEW</h1>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    {
                        status.map((item) => (
                            <div
                                key={item.title}
                                className="shadow-md p-4 text-white"
                                style={{ backgroundColor: item.color }}
                            >
                                <div className="flex items-center justify-center gap-4">
                                    <p className="font-semibold text-sm">
                                        {item.title}
                                    </p>
                                </div>
                                <p className="font-bold text-2xl text-center">{item.value}</p>
                            </div>
                        ))
                    }

                </div>
            </section>
        </div>



    )
}