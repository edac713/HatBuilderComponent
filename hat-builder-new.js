function handleCollectionClick(event) {
  event.preventDefault();
  console.log("Collection card clicked");
  // Your logic here
}

$(".collection").on("click", function(event) {
  handleCollectionClick(event);
});
