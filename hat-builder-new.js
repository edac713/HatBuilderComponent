// Mapping of collection names to carousel IDs
const collectionToCarouselMap = {
  "patches": "patches-all-carousel",
  "patches-nascar-drivers-teams": "patches-nascar-drivers-teams-carousel",
  "speedways-racing-series": "patches-speedways-racing-series-carousel",
  "patches-ag-farming": "patches-ag-farming-carousel",
  "patches-beer-liquor": "patches-beer-liquor-carousel",
  "patches-car-truck-brands": "patches-car-truck-brands-carousel",
  "patches-racing-brands": "patches-racing-brands-carousel",
  "patches-diesel": "patches-diesel-carousel",
  "patches-drag-racing": "patches-drag-racing-carousel",
  "patches-hunting-fishing-guns": "patches-hunting-fishing-guns-carousel",
  "patches-motorcycle-brands": "patches-motorcycle-brands-carousel",
  "patches-national-parks": "patches-national-parks-carousel",
  "miscellaneous": "patches-miscellaneous-carousel",
  //...other patch collections
  "hats": "hats-all-carousel",
  "richardson": "hats-richardson-carousel",
  "imperial": "hats-imperial-carousel",
  "yupoong": "hats-yupoong-carousel",
  "pacific": "hats-pacific-carousel",
  "flexfit": "hats-flexfit-carousel"
  //...other hat collections
};

function handleCollectionClick(event, clickedElement) {
  event.preventDefault();
  
  // Get the collection name from the clicked element
  const collectionName = clickedElement.data("collection-name");
  
  // Log for debugging
  console.log("Clicked collection:", collectionName);
  
  // Get the corresponding carousel ID from the map
  const carouselId = collectionToCarouselMap[collectionName];
  
  // Handle undefined carouselId
  if (!carouselId) {
    console.log("No carousel mapped for this collection");
    return;
  }
  
  // Log for debugging
  console.log("Carousel to show:", carouselId);
  
  // Hide all patch and hat carousels
  $(".patch-carousels div, .hat-carousels div").hide();
  
  // Show the corresponding carousel and its child elements
  $('#' + carouselId).show().find('div').show();
}

$(document).ready(function() {
  $(".collection-list__item").on("click", function(event) {
  handleCollectionClick(event, $(this));
});
});
