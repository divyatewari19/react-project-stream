import React from 'react';
import ReactDOM from 'react-dom';


//instert component to sibling to root, as nested modals might create z-index stacking issues
//history.push('/') -> so that when user clicks the dimmer backgroung, the modal goes away
//stopPropagation -> so that if user clicks anywhere inside the pop the event does not go up and trigger dimmer
const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={() => props.onDismiss()} className="ui dimmer modals visible active">
            <div onClick={(e)=>e.stopPropagation()}className="ui standard modal visible active">
    <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions">{props.actions}</div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;