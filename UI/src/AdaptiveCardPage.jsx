import React, { useState, useEffect } from "react";
import AdaptiveCardRenderer from "./AdaptiveCardRenderer";

const AdaptiveCardPage = () => {
    const [cardData, setCardData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/adaptive-card", { method: "POST" }) // Adjust API URL if needed
            .then((response) => response.json())
            .then((data) => setCardData(data))
            .catch((error) => console.error("Error fetching card:", error));
    }, []);

    const handleSubmit = (formData) => {
      console.log('form', formData)
      fetch("http://localhost:3000/adaptive-card", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
      })
          .then((res) => res.json())
          .then((data) => setCardData(data))
          .catch((error) => console.error("Error:", error));
  };

    return (
        <div>
            <h2>Adaptive Card</h2>
            {cardData ? <AdaptiveCardRenderer cardJson={cardData} onSubmit={handleSubmit} /> : <p>Loading...</p>}
        </div>
    );
};

export default AdaptiveCardPage;
