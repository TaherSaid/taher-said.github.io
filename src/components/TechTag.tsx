import Image from "next/image";
import React from "react";

type TechTagProps = {
  name: string;
  logoUrl?: string;
  description?: string;
  size?: "small" | "large";
};

export default function TechTag({
  name,
  logoUrl,
  description,
  size = "small",
}: TechTagProps) {
  const hasTooltip = !!(logoUrl && description);

  return (
    <div className="relative inline-block group">
      <span
        className={`flex items-center px-2 py-1 rounded-full border text-xs font-medium transition-all
          ${
            size === "large"
              ? "bg-gray-100 border-gray-300 text-gray-800 space-x-2"
              : "bg-gray-50 border-gray-200 text-gray-700"
          }
          cursor-pointer
        `}
      >
        {size === "large" && logoUrl && (
          <Image
            src={logoUrl}
            alt={name}
            className="w-4 h-4 mr-1 inline-block"
            style={{ minWidth: 16, minHeight: 16 }}
          />
        )}
        <span>{name}</span>
      </span>
      {hasTooltip && (
        <div
          className="pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200
            absolute z-20 left-1/2 -translate-x-1/2 mt-2 min-w-[220px] max-w-xs bg-white border border-gray-200 shadow-lg rounded-lg p-4"
        >
          <div className="flex items-center mb-2">
            {logoUrl && (
              <Image
                src={logoUrl}
                alt={name}
                className="w-6 h-6 mr-2 rounded"
                style={{ minWidth: 24, minHeight: 24 }}
              />
            )}
            <span className="font-semibold text-gray-900">{name}</span>
          </div>
          <div className="text-gray-700 text-sm">{description}</div>
        </div>
      )}
    </div>
  );
}
