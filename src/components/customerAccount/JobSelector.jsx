import { SearchIcon } from "@/utils/svg-utils";
import React, { useState } from "react";
import { Link } from "react-router";

// Example country data
const jobs = [
    { id: 1, name: "Nursery Workers" },
    { id: 2, name: "Worker" },
    { id: 3, name: "Restaurant Labor" },
    { id: 4, name: "General Worker" },
    { id: 5, name: "Hotel Boy" },
    { id: 6, name: "Worker" },
    { id: 7, name: "Storage labor" },
    { id: 8, name: "Driver" },
    { id: 9, name: "Salesman" },
    { id: 10, name: "Sailors" },
    { id: 11, name: "Construction Worker" },
    { id: 12, name: "Office Assistant" },
    { id: 13, name: "Businessman" },
    { id: 14, name: "Waiter" },
    { id: 15, name: "Electric Technician" },
];

export default function JobSelector(){
    const [search, setSearch] = useState("");

    const filteredJobs = jobs.filter((j) =>
        j.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="flex flex-col gap-6 items-center p-6">
            <h2 className="text-xl font-semibold text-center">
                Select the Job of Your Choice
            </h2>

            {/* Search Bar */}
            <div className="w-full max-w-md flex items-center border border-blue-400 rounded-full px-3 py-2 mb-6">
                <input
                    type="text"
                    placeholder="Find Your Work"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full outline-none"
                />
                <SearchIcon />
            </div>

            {/* Country List */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {filteredJobs.map((job) => (
                    <button
                        key={job.id}
                        onClick={() => toggleSelect(job.name)}
                        className={`text-center px-4 py-2 rounded-full border transition border-blue-500`}
                    >
                        <span className="text-sm">{job.name}</span>
                    </button>
                ))}
            </div>

            {/* Next Button */}
            <Link to={"/customer"}>
                <button className="mt-6 px-8 py-2 bg-primary text-white rounded-md hover:bg-blue-700">
                    Done
                </button>
            </Link>
        </div>
    );
};
