function handleCollectionClick(event) {
  event.preventDefault();
  console.log("Collection card clicked");
  // Your logic to show the corresponding carousel will go here
}

$(".collection").on("click", function(event) {
  handleCollectionClick(event);
});
