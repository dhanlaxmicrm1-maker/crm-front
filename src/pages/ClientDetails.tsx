import { useParams } from "react-router-dom";
import { clients } from "../data/clients";

export default function ClientDetails() {
  const { id } = useParams();

  const client = clients.find(
    (c) => c.id.toString() === id
  );

  if (!client) {
    return (
      <div className="p-6">
        Client not found
      </div>
    );
  }

  return (
    <div className="p-6 bg-slate-50 min-h-screen">

      <div className="mb-6 flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-semibold">
            {client.name}
          </h1>

          <p className="text-sm text-slate-500">
            Client Code: {client.code}
          </p>
        </div>

        <button
          className="
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-4
            py-2
            rounded-xl
            text-sm
          "
        >
          Edit Client
        </button>

      </div>

      {/* TOP GRID */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* PROFILE */}

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <div className="flex items-center gap-4 mb-6">

            <div
              className="
                w-16
                h-16
                rounded-full
                bg-blue-600
                text-white
                flex
                items-center
                justify-center
                text-xl
                font-bold
              "
            >
              {client.name.charAt(0)}
            </div>

            <div>
              <h2 className="font-semibold text-lg">
                {client.name}
              </h2>

              <p className="text-sm text-slate-500">
                {client.phone}
              </p>
            </div>

          </div>

          <div className="space-y-3 text-sm">

            <div className="flex justify-between">
              <span className="text-slate-500">
                Email
              </span>

              <span>{client.email}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">
                DOB
              </span>

              <span>{client.dob}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">
                City
              </span>

              <span>{client.city}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">
                State
              </span>

              <span>{client.state}</span>
            </div>

          </div>

        </div>

        {/* SERVICES */}

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <h2 className="font-semibold mb-4">
            Services
          </h2>

          <div className="flex flex-wrap gap-2">

            {client.services.map((service) => (

              <span
                key={service}
                className="
                  px-3
                  py-1
                  rounded-full
                  bg-blue-50
                  text-blue-600
                  text-xs
                "
              >
                {service}
              </span>

            ))}

          </div>

          <div className="mt-6 space-y-3 text-sm">

            <div className="flex justify-between">
              <span className="text-slate-500">
                Source
              </span>

              <span>{client.source}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">
                Referred By
              </span>

              <span>{client.referredBy}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">
                Advisor
              </span>

              <span>{client.processedBy}</span>
            </div>

          </div>

        </div>

        {/* DOCUMENT STATUS */}

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <h2 className="font-semibold mb-4">
            Documents
          </h2>

          <div className="space-y-3 text-sm">

            <div className="flex justify-between">
              <span>PAN Uploaded</span>

              <span>
                {client.panUploaded ? "✅" : "❌"}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Aadhaar Uploaded</span>

              <span>
                {client.aadharUploaded ? "✅" : "❌"}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Cancelled Cheque</span>

              <span>
                {client.cancelledChequeUploaded
                  ? "✅"
                  : "❌"}
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* KYC */}

      <div className="bg-white rounded-2xl p-6 shadow-sm mt-6">

        <h2 className="font-semibold mb-4">
          KYC Details
        </h2>

        <div className="grid md:grid-cols-2 gap-4 text-sm">

          <div>
            <span className="text-slate-500">
              PAN Number
            </span>

            <p className="font-medium">
              {client.pan}
            </p>
          </div>

          <div>
            <span className="text-slate-500">
              Aadhaar Number
            </span>

            <p className="font-medium">
              {client.aadhar}
            </p>
          </div>

        </div>

      </div>

      {/* INSURANCE */}

      <div className="bg-white rounded-2xl p-6 shadow-sm mt-6">

        <h2 className="font-semibold mb-4">
          Insurance Details
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-sm">

          <div>

            <h3 className="font-medium mb-3">
              Health Insurance
            </h3>

            <p>
              Policy No: {client.healthPolicyNo || "-"}
            </p>

            <p>
              Premium: ₹{client.healthPremium}
            </p>

          </div>

          <div>

            <h3 className="font-medium mb-3">
              Car Insurance
            </h3>

            <p>
              Policy No: {client.carPolicyNo || "-"}
            </p>

            <p>
              Premium: ₹{client.carPremium}
            </p>

          </div>

        </div>

      </div>

      {/* INVESTMENTS */}

      <div className="bg-white rounded-2xl p-6 shadow-sm mt-6">

        <h2 className="font-semibold mb-4">
          Mutual Fund Details
        </h2>

        <div className="grid md:grid-cols-4 gap-4 text-sm">

          <div>
            <span className="text-slate-500">
              Investment
            </span>

            <p className="font-medium">
              ₹{client.investmentAmount}
            </p>
          </div>

          <div>
            <span className="text-slate-500">
              Folio No
            </span>

            <p className="font-medium">
              {client.folioNo}
            </p>
          </div>

          <div>
            <span className="text-slate-500">
              SIP Amount
            </span>

            <p className="font-medium">
              ₹{client.sipAmount}
            </p>
          </div>

          <div>
            <span className="text-slate-500">
              SIP Date
            </span>

            <p className="font-medium">
              {client.sipDate}
            </p>
          </div>

        </div>

      </div>

      {/* BANK */}

      <div className="bg-white rounded-2xl p-6 shadow-sm mt-6">

        <h2 className="font-semibold mb-4">
          Bank Details
        </h2>

        <div className="grid md:grid-cols-3 gap-4 text-sm">

          <div>
            <span className="text-slate-500">
              Bank Name
            </span>

            <p>{client.bankName}</p>
          </div>

          <div>
            <span className="text-slate-500">
              Account No
            </span>

            <p>{client.accountNo}</p>
          </div>

          <div>
            <span className="text-slate-500">
              IFSC
            </span>

            <p>{client.ifsc}</p>
          </div>

        </div>

      </div>

      {/* NOTES */}

      <div className="bg-white rounded-2xl p-6 shadow-sm mt-6">

        <h2 className="font-semibold mb-4">
          Advisor Notes
        </h2>

        <p className="text-sm text-slate-600">
          {client.notes}
        </p>

      </div>

    </div>
  );
}