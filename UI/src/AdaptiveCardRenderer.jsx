import React, { useEffect, useRef } from "react";
import * as AdaptiveCards from "adaptivecards";

const AdaptiveCardRenderer = ({ cardJson, onSubmit }) => {
    const cardContainer = useRef(null);

    useEffect(() => {
        if (cardJson) {
            const adaptiveCard = new AdaptiveCards.AdaptiveCard();

            adaptiveCard.onExecuteAction = (action) => {
                if (action instanceof AdaptiveCards.SubmitAction) {
                    onSubmit(action.data); 
                }
            };

            adaptiveCard.parse(cardJson);
            const renderedCard = adaptiveCard.render();

            if (cardContainer.current) {
                cardContainer.current.innerHTML = "";
                cardContainer.current.appendChild(renderedCard);
            }
        }
    }, [cardJson, onSubmit]);

    return <div ref={cardContainer} className="adaptive-card-container" />;
};

export default AdaptiveCardRenderer;
