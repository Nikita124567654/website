const tours = [
    {
        name: "Maldives Adventure Tour",
        hotelName: "Harmony Hotel",
        hotelStars: 5,
        price: 556,
        rate: 4.9,
        numOfReviews: 4,
        daysDuration: 5,
        tourImg: "tour-list-2-1-365x248.jpg",
    },
    {
        name: "Lake Como Family Tour",
        hotelName: "Ritz Hotel",
        hotelStars: 5,
        price: 756,
        oldPrice: 1000,
        rate: 4.1,
        numOfReviews: 5,
        daysDuration: 7,
        tourImg: "tour-list-2-2-365x248.jpg",
    },
    {
        name: "Brisbane & Cairns Tour",
        hotelName: "Hilton Hotel",
        hotelStars: 5,
        price: 690,
        rate: 5.0,
        numOfReviews: 6,
        daysDuration: 6,
        tourImg: "tour-list-2-5-365x248.jpg",
    },
    {
        name: "Journey to Italy",
        hotelName: "Radison Blue Hotel",
        hotelStars: 5,
        price: 690,
        rate: 5.0,
        numOfReviews: 2,
        daysDuration: 6,
        tourImg: "tour-list-2-3-365x248.jpg",
    },
    {
        name: "Private Charters for Surfers",
        hotelName: "Even Hotel",
        hotelStars: 4,
        price: 615,
        oldPrice: 1000,
        rate: 4.8,
        numOfReviews: 7,
        daysDuration: 13,
        tourImg: "tour-list-2-4-365x248.jpg",
    },
    {
        name: "Adventures in Greece",
        hotelName: "Renaissance Hotel",
        hotelStars: 5,
        price: 680,
        rate: 4.8,
        numOfReviews: 3,
        daysDuration: 3,
        tourImg: "tour-list-2-6-365x248.jpg",
    },
];

const toursContainer = document.getElementById('tours-container');

tours.forEach(tour => {
    const discountMessage = tour.oldPrice ? `<span class="discount">$${tour.oldPrice}</span>` : '';

    const tourCard = `
        <div class="tour-card">
            <img src="${tour.tourImg}" alt="${tour.name}">
            <div class="price-tag">
                $${tour.price}
                ${discountMessage ? discountMessage : ''}
            </div>
            <div class="tour-info">
                <h3>${tour.name}</h3>
                <p>${tour.hotelName} ${'★'.repeat(tour.hotelStars)}</p>
                <div class="rate-and-reviews">
                    <div class="rate">
                        <span>${tour.rate} ★</span>
                    </div>
                    <span class="reviews">${tour.numOfReviews} відгуків</span>
                </div>
            </div>
            <div class="days-duration">
                <span class="calendar-icon">📅</span>
                <span>${tour.daysDuration} днів</span>
            </div>
        </div>
    `;
    toursContainer.innerHTML += tourCard;
});
