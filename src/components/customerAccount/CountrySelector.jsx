import { SearchIcon } from "@/utils/svg-utils";
import React, { useState } from "react";
import { Link } from "react-router";

// Example country data
const countries = [
    { name: "Saudi Arabia", flag: "🇸🇦" },
    { name: "United Arab Emirates", flag: "🇦🇪" },
    { name: "Malaysia", flag: "🇲🇾" },
    { name: "Oman", flag: "🇴🇲" },
    { name: "Qatar", flag: "🇶🇦" },
    { name: "Kuwait", flag: "🇰🇼" },
    { name: "Italy", flag: "🇮🇹" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "Bahrain", flag: "🇧🇭" },
    { name: "Jordan", flag: "🇯🇴" },
    { name: "Romania", flag: "🇷🇴" },
    { name: "United States", flag: "🇺🇸" },
    { name: "Lebanon", flag: "🇱🇧" },
    { name: "United Kingdom", flag: "🇬🇧" },
    { name: "Libya", flag: "🇱🇾" },
    { name: "France", flag: "🇫🇷" },
    { name: "Iraq", flag: "🇮🇶" },
    { name: "South Korea", flag: "🇰🇷" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "Brunei", flag: "🇧🇳" },
    { name: "Mauritius", flag: "🇲🇺" },
    { name: "Portugal", flag: "🇵🇹" },
    { name: "Germany", flag: "🇩🇪" },
    { name: "India", flag: "🇮🇳" },
    { name: "Japan", flag: "🇯🇵" },
    { name: "Poland", flag: "🇵🇱" },
    { name: "Spain", flag: "🇪🇸" },
    { name: "Switzerland", flag: "🇨🇭" },
    { name: "Malta", flag: "🇲🇹" },
    { name: "Turkey", flag: "🇹🇷" },
    { name: "Greece", flag: "🇬🇷" },
    { name: "New Zealand", flag: "🇳🇿" },
];

export default function CountrySelector () {
    const [search, setSearch] = useState("");

    const filteredCountries = countries.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="flex flex-col gap-4 items-center p-6">
            <h2 className="text-xl font-semibold text-center">
                Which country would you like to go to on a work visa?
            </h2>
            <p className="text-sm text-gray-500 mb-4">You can select Multiple country</p>

            {/* Search Bar */}
            <div className="w-full max-w-md flex items-center border border-blue-400 rounded-full px-3 py-2 mb-6">
                <input
                    type="text"
                    placeholder="Search Countries"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full outline-none"
                />
                <SearchIcon />
            </div>

            {/* Country List */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {filteredCountries.map((country) => (
                    <button
                        key={country.name}
                        onClick={() => toggleSelect(country.name)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full border transition border-blue-500`}
                    >
                        <span className="text-lg">{country.flag}</span>
                        <span className="text-sm">{country.name}</span>
                    </button>
                ))}
            </div>

            {/* Next Button */}
            <Link to={"/user/jobs"}>
                <button className="mt-6 px-8 py-2 bg-primary text-white rounded-md hover:bg-blue-700">
                    Next
                </button>
            </Link>
        </div>
    );
};
