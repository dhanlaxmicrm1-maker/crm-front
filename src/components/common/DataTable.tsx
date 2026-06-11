import React from "react";

type Props = {
  headers: string[];
  rows: React.ReactNode[][];
};

export default function DataTable({
  headers,
  rows,
}: Props) {
  return (
    <div className="bg-white border rounded-xl overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="text-left p-4 font-medium text-gray-600"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className="border-t hover:bg-gray-50"
            >
              {row.map((cell, i) => (
                <td
                  key={i}
                  className="p-4"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}