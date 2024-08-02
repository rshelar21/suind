import React from "react";

const colors: {
  [key: string]: string;
} = {
  available: "bg-green-200",
  "in-flight": "bg-yellow-400",
  maintenance: "bg-red-200 ",
};

interface IPillsProps {
  status?: string;
}

const Pills: React.FC<IPillsProps> = ({ status }) => {
  return (
    <>
      {status && (
        <p
          className={`px-3 py-1.5 bg-gray-300  h-fit w-fit rounded-full text-sm font-medium ${
            colors[status?.toLowerCase()]
          }`}
        >
          {status}
        </p>
      )}
    </>
  );
};

export default Pills;
