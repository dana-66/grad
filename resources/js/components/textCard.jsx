import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

const TextCard = ({ className, heading, textContent, backgroundImage, fontColor, backgroundColor, width, height, isClickable = true, videoUrl }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleCardClick = () => {
        if (isClickable) {
            setModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const cardStyle = {
        backgroundColor: backgroundColor || '#071754',
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        color: fontColor || '#000',
        padding: '2rem 1.4rem',
        borderRadius: '1rem',
        boxShadow: `#000 0px 1px 4px`,
        width: width,
        height: height,
        cursor: isClickable ? 'pointer' : 'default',
    };

    return (
        <>
            <div className={`text-card ${className}`} style={cardStyle} onClick={handleCardClick}>
                <h2>{heading}</h2>
                {/* <Divider color="#eff4ef" thickness="1px" margin="4px" rounded={true} /> */}
               
                <p>{textContent}</p>
            </div>
            {isModalOpen && <Modal onClose={handleCloseModal} videoUrl={videoUrl} />}
        </>
    );
};

//Prototypes for the card
TextCard.propTypes = {
    className: PropTypes.string,
    heading: PropTypes.string.isRequired,
    textContent: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string,
    fontColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    isClickable: PropTypes.bool,
    videoUrl: PropTypes.string.isRequired,
}

export default TextCard;
