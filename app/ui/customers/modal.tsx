import React, { useState } from 'react';

const modal = ({ id=232 }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    if (id) {
      setIsModalOpen(true);
    }
  };

  const confirmDelete = () => {
    // Perform the delete action here
    console.log(`Deleting item with id: ${id}`);
    setIsModalOpen(false);
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleDelete}>
        Delete Item
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h4>Are you sure you want to delete this item?</h4>
            <button onClick={confirmDelete}>Yes</button>
            <button onClick={cancelDelete}>No</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default modal;
