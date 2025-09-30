// src/elements/Modal.tsx
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  image?: string; // clicked image path
  title?: string;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  image,
  title,
  children,
}) => {
  if (!isOpen) return null;

  // helper to normalize public paths (if your images are in /public/media/...)
  const src = image ? (image.startsWith("/") ? image : `/${image}`) : "";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-white shadow-xl w-[60%] h-[75vh] overflow-hidden flex"
        onClick={(e) => e.stopPropagation()} // prevent outside click from closing when clicking inside
      >
        {/* LEFT: image preview */}
        <div className="w-7/12 flex items-center justify-center ">
          {src ? (
            <img
              src={src}
              alt={title ?? "Project image"}
              className="object-contain max-h-[90%] max-w-[90%]"
            />
          ) : (
            <div className="text-gray-400">No image available</div>
          )}
        </div>

        {/* RIGHT: content */}
        <div className="flex w-1/2 p-6 overflow-y-auto items-center text-left">
          <div className="flex flex-col">
            {/* title (optional) */}
            {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}

            {/* children (you can pass description, lists, buttons inside Works.tsx) */}
            <div className="prose max-w-none">{children}</div>

            {/* close button at bottom */}
            <div className="mt-6">
              <button
                onClick={onClose}
                className="w-[8vw] self-center relative border bg-transparent rounded-none border-black text-black px-6 py-3 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#A0BEF4] hover:bg-black hover:text-white hover:border-black transition-all duration-300 group"
              >
                <span className="relative z-10">close</span>
                <span className="absolute inset-0 overflow-hidden">
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
             -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12"
                  ></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
