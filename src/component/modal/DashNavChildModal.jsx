import React from 'react';

const DashNavChildModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-80 max-w-full shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:hover:text-white"
        >
          ✕
        </button>
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">{title}</h2>
        <div className="space-y-2">{children}</div>
      </div>
    </div>
  );
};

export default DashNavChildModal;
