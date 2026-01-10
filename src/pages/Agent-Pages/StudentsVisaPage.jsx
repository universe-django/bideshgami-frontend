import StudentsVisa from '@/components/Agent/StudentsVisa';
import React from 'react';
import { data } from "../../components/home/data";

const StudentsVisaPage = () => {
    // student visa type filter
    const studentVisaData = data.filter(item => item.typeOfVisa === "Student Visa");

    return (
        <div>
            <StudentsVisa visaData={studentVisaData} />
        </div>
    );
};

export default StudentsVisaPage;
