import React from 'react';
import Modal from 'react-modal';


const OptionModal=(props)=>(
    
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        ariaHideApp={false}
        onRequestClose={props.handleSelectedOption}
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleSelectedOption}>Okay</button>
    </Modal>
);
export default OptionModal;