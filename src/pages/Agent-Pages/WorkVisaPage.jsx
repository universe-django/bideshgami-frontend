import WorkVisa from '@/components/Agent/WorkVisa';
import React from 'react';
import { data } from "../../components/home/data";

const WorkVisaPage = () => {
    // work visa type filter korte chao
    const workVisaData = data.filter(item => item.typeOfVisa === "Work Visa");

    return (
        <div>
            <WorkVisa visaData={workVisaData} />
        </div>
    );
};

export default WorkVisaPage;
