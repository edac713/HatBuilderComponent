// Mapping of collection names to carousel IDs
const collectionToCarouselMap = {
  "patches": "patches-all-carousel",
  "patches-nascar-drivers-teams": "patches-nascar-drivers-teams-carousel",
  "patches-speedways-racing-series": "patches-speedways-racing-series-carousel",
  "patches-ag-farming": "patches-ag-farming-carousel",
  "patches-beer-liquor": "patches-beer-liquor-carousel",
  "patches-car-truck-brands": "patches-car-truck-brands-carousel",
  "patches-racing-brands": "patches-racing-brands-carousel",
  "patches-diesel": "patches-diesel-carousel",
  "patches-drag-racing": "patches-drag-racing-carousel",
  "patches-hunting-fishing-guns": "patches-hunting-fishing-guns-carousel",
  "patches-motorcycle-brands": "patches-motorcycle-brands-carousel",
  "patches-national-parks": "patches-national-parks-carousel",
  "patches-miscellaneous": "patches-miscellaneous-carousel",
  //...other patch collections
  "hats": "hats-all-carousel",
  "richardson": "hats-richardson-carousel",
  "imperial": "hats-imperial-carousel",
  "yupoong": "hats-yupoong-carousel",
  "pacific": "hats-pacific-carousel",
  "flexfit": "hats-flexfit-carousel"
  //...other hat collections
};

// Show target carousel, hide others of the same type
function showCarousel(carouselId) {
  if (carouselId.includes("patches")) {
    $(".patch-carousel").hide();
  } else {
    $(".hat-carousel").hide();
  }
  $("#" + carouselId).show();
}

let activeToggle = 'patches'; // Default active toggle

// Separate variables to keep track of the currently displayed carousel for patches and hats
let displayedPatchCarousel = null;
let displayedHatCarousel = null;

function handleCollectionClick(event, clickedElement) {
  event.preventDefault();

  // Get the collection name from the clicked element
  const collectionName = clickedElement.data("collection-name");

  // New code to format and update the label
  let displayLabel = collectionName.replace("patches-", "").replace("hats-", "");
  displayLabel = displayLabel.replace(/-/g, ' ');
  displayLabel = displayLabel.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
  $('.hat-builder-collection-label').text(displayLabel);


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

  // Determine the type of the current collection (either 'patches' or 'hats')
  const currentType = collectionName.startsWith('patches') ? 'patches' : 'hats';

  // Hide the previously displayed carousel of the same type
  if (currentType === 'patches') {
    // Hide the "patches-all" carousel
    $('#patches-all-carousel').hide();
    if (displayedPatchCarousel) {
      $('#' + displayedPatchCarousel).hide();
    }
    displayedPatchCarousel = carouselId;
  } else {
    // Hide the "hats-all" carousel
    $('#hats-all-carousel').hide();
    if (displayedHatCarousel) {
      $('#' + displayedHatCarousel).hide();
    }
    displayedHatCarousel = carouselId;
  }

  // Show the new corresponding carousel and its child elements
  $('#' + carouselId).show().find('div').show();
}

$('#patchesToggle, #hatsToggle').on('click', function () {
  // Remove 'active' class from both toggles
  $('#patchesToggle, #hatsToggle').removeClass('active');

  // Add 'active' class to clicked toggle
  $(this).addClass('active');

  // Update activeToggle variable
  activeToggle = $(this).attr('id').replace('Toggle', '');

  // Hide both collection lists
  $('.collection-list').hide();

  // Show the collection list corresponding to the active toggle
  $(`#shopify-section-template--14833441800262__${activeToggle}`).show();
});

// Additional functions from hat-builder-old.js
function setInitialCategoryDisplay() {
  if ($('#patchesToggle').hasClass('active')) {
    $('#shopify-section-template--14833441800262__81fbde0d-26af-45a0-bc7b-b0514d8bd082 .collection-list').show();
    $('#shopify-section-template--14833441800262__e617045b-0ee9-4ffa-a5a4-a21a2ccd0cf6 .collection-list').hide();
  } else {
    $('#shopify-section-template--14833441800262__81fbde0d-26af-45a0-bc7b-b0514d8bd082 .collection-list').hide();
    $('#shopify-section-template--14833441800262__e617045b-0ee9-4ffa-a5a4-a21a2ccd0cf6 .collection-list').show();
  }
}

function updateHatBuilderHeader() {
  const isPatchesActive = $('#patchesToggle').hasClass('active');
  const label = isPatchesActive ? "All Patches" : "All Hats";
  $('.hat-builder-collection-label').text(label);
}

$(document).ready(function () {
  $(".collection-list__item").on("click", function (event) {
    handleCollectionClick(event, $(this));
  });

  // Initialize patch carousels
  $(".patch-carousels > div").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    arrows: false,
    adaptiveHeight: false,
    variableWidth: true
  });

  // Initialize hat carousels
  $(".hat-carousels > div").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    centerMode: true,
    arrows: false,
    adaptiveHeight: false,
    variableWidth: true
  }).slick('slickPause');

  // SVG content for play and pause
  const playSVG = `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13.875 10.65a.75.75 0 0 0 0-1.3l-5.25-3.03a.75.75 0 0 0-1.125.649v6.062a.75.75 0 0 0 1.125.65l5.25-3.032Zm-4.875 1.082v-3.464l3 1.732-3 1.732Z" fill="#332E21"/><path fill-rule="evenodd" d="M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-5.5 7a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z" fill="#332E21"/></svg>`;
  const pauseSVG = `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 7.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Z" fill="#332E21"/><path d="M12.75 8a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4Z" fill="#332E21"/><path fill-rule="evenodd" d="M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" fill="#332E21"/></svg>`;

  // Handle play/pause functionality for carousels
  $('#playPauseIcon').on('click', function () {
    if ($(this).attr('data-state') === 'playing') {
      $('.patch-carousels > div, .hat-carousels > div').slick('slickPause');
      $(this).attr('data-state', 'paused');
      $(this).html(playSVG);
    } else {
      if ($('#patchesToggle').hasClass('active')) {
        $('.patch-carousels > div').slick('slickPlay');
      } else {
        $('.hat-carousels > div').slick('slickPlay');
      }
      $(this).attr('data-state', 'playing');
      $(this).html(pauseSVG);
    }
  });

  // Set initial visibility
  $('#shopify-section-template--14833441800262__81fbde0d-26af-45a0-bc7b-b0514d8bd082 .collection-list').show();
  $('#shopify-section-template--14833441800262__e617045b-0ee9-4ffa-a5a4-a21a2ccd0cf6 .collection-list').hide();

  // Handle toggle click event for switching carousels
  $('#patchesToggle, #hatsToggle').on('click', function () {
    if ($(this).hasClass('active')) return;

    $('.toggle-button').removeClass('active');
    $(this).addClass('active');

    updateHatBuilderHeader();

    if ($('#hatsToggle').hasClass('active')) {
      $('.active-background').css('left', '49%');
      $('#shopify-section-template--14833441800262__81fbde0d-26af-45a0-bc7b-b0514d8bd082 .collection-list').hide();
      $('#shopify-section-template--14833441800262__e617045b-0ee9-4ffa-a5a4-a21a2ccd0cf6 .collection-list').show();
    } else {
      $('.active-background').css('left', '1%');
      $('#shopify-section-template--14833441800262__e617045b-0ee9-4ffa-a5a4-a21a2ccd0cf6 .collection-list').hide();
      $('#shopify-section-template--14833441800262__81fbde0d-26af-45a0-bc7b-b0514d8bd082 .collection-list').show();
    }

    // Determine which toggle is active
    const activeToggle = $(this).attr('id').replace('Toggle', '');

    // Pause/Play carousels based on active toggle
    if (activeToggle === 'patches') {
      $('.hat-carousels > div').slick('slickPause');
      $('.patch-carousels > div').slick('slickPlay');
    } else {
      $('.patch-carousels > div').slick('slickPause');
      $('.hat-carousels > div').slick('slickPlay');
    }
  });
  
  // Scroll to Hat Builder functionality
  $('#scrollButton').on('click', function() {  // Corrected the ID to use the dash-case
      const targetScroll = $(".hat-builder-container").offset().top;
      $('html, body').animate({
          scrollTop: targetScroll
      }, 1000);
  });
});