function loadData() {
  // Get references to the containers where the data will be inserted
  const cardsContainer = document.getElementById('cards-container');
  const additionalInfoContainer = document.getElementById('additional-info-container');
  const unresolvedTicketsContainer = document.getElementById('unresolved-tickets');

  // Fetch the data from the JSON file
  fetch("./assets/js/data.json")
    .then((res) => {
      // Check if the response is successful
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      // Parse the response as JSON
      return res.json();
    })
    .then((data) => {
      // Initialize variables to store the HTML content
      let cards = '';
      let additionalInfo = '';
      let unresolvedData = '';

      // Loop through ticketsCount data and create HTML for each card
      data.ticketsCount.forEach(item => {
        const cardHtml = `
          <div class="col-6 col-sm-6 col-md-6 col-lg-3">
              <div class="card text-center">
                  <div class="card-body">
                      <h5 class="card-title">${item.label}</h5>
                      <p class="card-text">${item.value}</p>
                  </div>
              </div>
          </div>
        `;
        cards += cardHtml; // Append each card to the cards string
      });

      // Loop through chartAdditionalInfo data and create HTML for each additional info card
      data.chartAdditionalInfo.forEach(item => {
        const infoHtml = `
          <div class="additional-info-card">
              <h3 class="additional-info-card-title">${item.label}</h3>
              <p class="additional-info-card-text">${item.value}</p>
          </div>
        `;
        additionalInfo += infoHtml; // Append each info card to the additionalInfo string
      });

      // Loop through unresolvedData and create HTML for each unresolved ticket
      data.unresolvedData.forEach(item => {
        const unresolvedCardHtml = `
          <div class="card-body-list-item">
              <div class="card-item-content">
                  <p class="card-item-content-title">${item.label}</p>
                  <p class="card-item-content-value">${item.value}</p>
              </div>
          </div>
        `;
        unresolvedData += unresolvedCardHtml; // Append each unresolved ticket to the unresolvedData string
      });

      // Insert the generated HTML into the respective containers
      cardsContainer.innerHTML = cards;
      additionalInfoContainer.innerHTML = additionalInfo;
      unresolvedTicketsContainer.innerHTML = unresolvedData;
    })
    .catch((error) => {
      // Handle errors that occur during the fetch operation
      console.error("Unable to fetch data:", error);
    });
}

// Execute the function to insert the ticket count cards into the DOM
loadData();
