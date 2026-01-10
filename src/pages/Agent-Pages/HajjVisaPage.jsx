import HajjVisa from '@/components/Agent/HajjVisa';
import React from 'react';
import { data } from "../../components/home/data";

const HajjVisaPage = () => {

    // Hajj & Umrah visa filter
    console.log(data);
    
    const hajjVisaData = data.filter(item => item.typeOfVisa === "Hajj and umrah Visa");

    return (
        <div>
            <HajjVisa visaData={hajjVisaData} />
        </div>
    );
};

export default HajjVisaPage;
