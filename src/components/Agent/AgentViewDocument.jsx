import { ArrowDown } from "lucide-react";

const AgentViewDocument = () => {
    return (
      <div className="max-w-6xl w-full mx-auto mt-10">
        <div className="bg-blue-600 p-5 flex justify-between gap-5 w-full text-white">
          <h3 className="text-4xl font-semibold">Visa PDF</h3>
          <ArrowDown size={40} />
        </div>

        {/* there are the document visa PDF */}

        <img src="/src/assets/VisaPDF.jpg" alt="" />

        <div className="w-full flex justify-center my-5">
          <button className="text-3xl bg-blue-600 font-semibold text-white p-3 rounded-xs">
            Download PDF
          </button>
        </div>
      </div>
    );
}
export default AgentViewDocument;