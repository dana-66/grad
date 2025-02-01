import PropTypes from 'prop-types';
import './Modal.css'; // Import CSS for modal styling

const Modal = ({ onClose, videoUrl }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                <iframe
                    width="1080"
                    height="515"
                    src={videoUrl}
                    title="YouTube video player"
                    frameBorder="1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    videoUrl: PropTypes.string.isRequired,
};

export default Modal; 
