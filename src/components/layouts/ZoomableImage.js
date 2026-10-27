import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

// A thumbnail that opens full size in a dialog when clicked.
const ZoomableImage = ({ src, alt, className = "" }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`View ${alt} full size`}
        className="block w-full overflow-hidden rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-designColor"
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`w-full h-auto object-cover hover:scale-105 duration-300 cursor-zoom-in ${className}`}
        />
      </button>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] bg-black bg-opacity-85 flex items-center justify-center p-4"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute top-4 right-4 text-3xl text-gray-300 hover:text-designColor duration-300"
          >
            <MdClose />
          </button>
          <img
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-full rounded-lg shadow-2xl"
          />
        </div>
      )}
    </>
  );
};

export default ZoomableImage;
