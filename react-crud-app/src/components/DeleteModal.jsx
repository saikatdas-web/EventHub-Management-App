import React from "react";
import "../styles/DeleteModal.css";

function DeleteModal ({ onConfirm, onCancel }) {

    return (

        <div className="modal-overlay" >

            <div className="delete-modal" >

                <h2> Delete event ? </h2>
                <p> Are you you want to delete this event? 

                    {/* <br /> This action cannot be undone  */}
                </p>

                <div className="modal-buttons">

                    <button className="cancel-btn"
                    
                    onClick={onCancel} > 
                    
                    Cancel
                    
                    </button>

                    <button className="confirm-delete-btn"

                    onClick={onConfirm} >

                        Delete
                    
                    </button>
                
                </div>


            </div>

         </div>   


    );
}

export default DeleteModal;