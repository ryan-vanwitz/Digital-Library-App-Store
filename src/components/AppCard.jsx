import React from 'react';
import PropTypes from 'prop-types';

function AppCard({ appObject }) {
    const openPopupWindow = () => {
        const popupFeatures = 'width=400,height=300,scrollbars=yes,resizable=yes';
        const popupWindow = window.open('', '_blank', popupFeatures);

        // Customize the content inside the new popup window
        const popupContent = `
     
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .popUp {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(220, 220, 220, 0.7);
            display: flex;
            flex-direction: column; /* Stack child elements vertically */
            justify-content: center;
            align-items: center;
        }

        /* Container for each row */
        .row {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin: 10px 0;
        }

        .popUp img {
            max-width: 100%;
            height: auto;
        }

        .popUp h1,
        .popUp h3,
        .popUp p {
            margin: 10px;
        }

        .popUp button {
            background-color: #3498db;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-top: 10px;
        }

        .popUp button:hover {
            background-color: #2980b9;
        }
    </style>
</head>
<body>
    <div class="popUp" id="popUp1">
        <!-- First row: h1 -->
        <div class="row">
            <h1>${appObject.name}</h1>
        </div>

        <!-- Second row: h3 -->
        <div class="row">
            <h3>${appObject.organization}</h3>
        </div>

        <!-- Third row: img and p -->
        <div class="row">
            <img src="app_images/${appObject.imageName}" alt="${appObject.name} Image">
            <p>${appObject.description}</p>
        </div>

        <!-- Fourth row: button -->
        <div class="row">
            <button onclick="window.close()">Close</button>
        </div>
    </div>
</body>
</html>

    `;

        popupWindow.document.write(popupContent);
    };


    const imagePath = "app_images/" + appObject.imageName;
    return (
        <div>
            {/* Card Content */}
            <div className="bg-white rounded-lg shadow-lg p-6 mx-auto max-w-xs">
                {/* Image */}
                <div className="mx-auto mb-4">
                    <img src={imagePath} alt="AppIcon" className="w-full object-contain h-72" />
                </div>
                {/* App name */}
                <h3 className="text-xl font-semibold mb-2 text-center">{appObject.name}</h3>
                {/* Company name */}
                <p className="text-sm text-center">{appObject.organization}</p>
            </div>

            {/* Trigger to open the smaller popup window */}
            <div className="popup-trigger" onClick={openPopupWindow}>
                Click to view details
            </div>
        </div>
    );
}

AppCard.propTypes = {
    appObject: PropTypes.object.isRequired,
};

export default AppCard;
