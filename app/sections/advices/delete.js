import React from "react";

const DeleteConfirmationModal = ({
  showModal,
  postIdToDelete,
  onConfirm,
  onCancel,
}) => {
  if (!showModal) return null;

  return (
    <div
      id="swissra"
      className="fixed top-0 left-0 w-full h-screen bg-[#292929] opacity-95 flex justify-center items-center"
    >
      <div className="bg-second px-4 py-8 rounded-md shadow-lg">
        <h3 className="text-lg text-main font-bold mb-4">
          هل أنت متأكد من أنك تريد هذا المنشور؟{" "}
        </h3>
        <div className="flex justify-between">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-md text-red hover:text-main"
          >
            إلغاء
          </button>
          <button
            onClick={() => onConfirm(postIdToDelete)}
            className="px-4 py-2 rounded-md bg-red text-second hover:bg-main"
          >
            مسح
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
