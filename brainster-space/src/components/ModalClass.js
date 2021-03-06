import React from 'react';
import {  Modal } from 'react-bootstrap';

const ModalClass = ({handleClose, children}) => {
    return (
        <>
        <div className="d-flex modalBootstrap" style={{height: "100vh"}}>
            <Modal show={true} onHide={handleClose}>
                <Modal.Header closeButton/>
                <Modal.Body>
                    {children}
                </Modal.Body>
            </Modal>
        </div>
    </>
    );
};

export default ModalClass;