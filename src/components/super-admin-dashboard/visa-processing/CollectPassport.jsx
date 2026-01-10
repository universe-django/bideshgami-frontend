import React from 'react'
import invoiceImg from "../../../assets/invoiceImg.png";
import barcodeImg from "../../../assets/barcodeImg.jpg";

export default function CollectPassport() {
  return (
    <div>
        <img src={invoiceImg} className="w-full mb-4" alt="invoice img" />
        <img src={barcodeImg} className="w-full" alt="barcode img" />
    </div>
  )
}
