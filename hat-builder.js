// New: Map collection names to carousel IDs
const collectionToCarouselMap = {
  "patches": "patches-all-carousel",
  "patches-nascar-drivers-teams": "patches-nascar-drivers-teams-carousel",
  // ...
};

// New: Show target carousel, hide others
function showCarousel(carouselId) {
  $(".patch-carousel").hide();
  $(".hat-carousel").hide();
  $("#" + carouselId).show();
}

// Define the function in the global scope
function updateCarousel(collectionName) {
  // Your existing code here
}

$(document).ready(function() {
  const PLAYING = 'playing';
  const PAUSED = 'paused';
  const PATCHES_TOGGLE = '#patchesToggle';
  const HATS_TOGGLE = '#hatsToggle';
  const PLAY_PAUSE_ICON = '#playPauseIcon';

  // Event Listener
  $(document).on('click', '.collection-list__item, .hat-collection-list__item', function(event) {
    event.preventDefault();
    const collectionName = $(this).attr('data-collection-name');
    updateCarousel(collectionName);
  });
  
  // Initialize Carousel
  function initializeCarousel(selector, autoplay) {
    $(selector).slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: autoplay,
      autoplaySpeed: 2000,
      centerMode: true,
      arrows: false,
      adaptiveHeight: false,
      variableWidth: true
    });
    if (!autoplay) {
      $(selector).slick('slickPause');
    }
  }

  initializeCarousel('.default-patch-carousel', true);
  initializeCarousel('.default-hat-carousel', false);
  $(".default-patch-carousel, .default-hat-carousel").not("#patches, #hats").hide();

  // SVG content for play and pause
  const playSVG = `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13.875 10.65a.75.75 0 0 0 0-1.3l-5.25-3.03a.75.75 0 0 0-1.125.649v6.062a.75.75 0 0 0 1.125.65l5.25-3.032Zm-4.875 1.082v-3.464l3 1.732-3 1.732Z" fill="#332E21"/><path fill-rule="evenodd" d="M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-5.5 7a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z" fill="#332E21"/></svg>`;
  const pauseSVG = `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 7.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Z" fill="#332E21"/><path d="M12.75 8a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4Z" fill="#332E21"/><path fill-rule="evenodd" d="M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" fill="#332E21"/></svg>`;

  // Handle play/pause functionality for carousels
  $(PLAY_PAUSE_ICON).on('click', function() {
    const currentState = $(this).attr('data-state');
    const targetCarousel = $(PATCHES_TOGGLE).hasClass('active') ? '.default-patch-carousel' : '.default-hat-carousel';
    if (currentState === PLAYING) {
      $(targetCarousel).slick('slickPause');
      $(this).attr('data-state', PAUSED).html(playSVG);
    } else {
      $(targetCarousel).slick('slickPlay');
      $(this).attr('data-state', PLAYING).html(pauseSVG);
    }
  });

  // New: Handle collection clicks
  $(".collection").click(function() {
    const collection = $(this).data("collection");
    const carouselId = collectionToCarouselMap[collection];
    showCarousel(carouselId);
  });


  // Toggle between patch and hat carousels
  function toggleCarouselPlayback() {
    const isPatchesActive = $('#patchesToggle').hasClass('active');
    if (isPatchesActive) {
      $('.default-patch-carousel').slick('slickPlay');
      $('.default-hat-carousel').slick('slickPause');
      $('#shopify-section-template--14833441800262__81fbde0d-26af-45a0-bc7b-b0514d8bd082 .collection-list').show();
      $('#shopify-section-template--14833441800262__e617045b-0ee9-4ffa-a5a4-a21a2ccd0cf6 .collection-list').hide();
    } else {
      $('.default-hat-carousel').slick('slickPlay');
      $('.default-patch-carousel').slick('slickPause');
      $('#shopify-section-template--14833441800262__81fbde0d-26af-45a0-bc7b-b0514d8bd082 .collection-list').hide();
      $('#shopify-section-template--14833441800262__e617045b-0ee9-4ffa-a5a4-a21a2ccd0cf6 .collection-list').show();
    }
  }
  
// Dynamic Carousel Update based on Collection Card Click
function updateCarouselBasedOnCollection() {
  // Add your collection-to-carousel mapping here
  const collectionToCarouselMap = {
    "Slide-template--14833441800262__81fbde0d-26af-45a0-bc7b-b0514d8bd082-1": ".nascar-drivers-carousel",
    "Slide-template--14833441800262__81fbde0d-26af-45a0-bc7b-b0514d8bd082-2": ".speedways-racing-series-carousel",
    "Slide-template--14833441800262__81fbde0d-26af-45a0-bc7b-b0514d8bd082-3": ".patches-ag-farming",
    "Slide-template--14833441800262__81fbde0d-26af-45a0-bc7b-b0514d8bd082-4": ".patches-beer-liqour",
    "Slide-template--14833441800262__81fbde0d-26af-45a0-bc7b-b0514d8bd082-5": ".patches-car-truck-brands",
    "Slide-template--14833441800262__81fbde0d-26af-45a0-bc7b-b0514d8bd082-6": ".patches-racing-brands",
    "Slide-template--14833441800262__81fbde0d-26af-45a0-bc7b-b0514d8bd082-7": ".patches-diesel",
    "Slide-template--14833441800262__81fbde0d-26af-45a0-bc7b-b0514d8bd082-8": ".patches-drag-racing",
    "Slide-template--14833441800262__81fbde0d-26af-45a0-bc7b-b0514d8bd082-9": ".patches-hunting-fishing-guns",
    "Slide-template--14833441800262__81fbde0d-26af-45a0-bc7b-b0514d8bd082-10": ".patches-motorcycle-brands",
    "Slide-template--14833441800262__81fbde0d-26af-45a0-bc7b-b0514d8bd082-11": ".patches-national-parks",
    "Slide-template--14833441800262__81fbde0d-26af-45a0-bc7b-b0514d8bd082-12": ".patches-miscellaneous",
    // ... add other patch collections here
    "Slide-template--14833441800262__e617045b-0ee9-4ffa-a5a4-a21a2ccd0cf6-1": ".richardson-carousel",
    "Slide-template--14833441800262__e617045b-0ee9-4ffa-a5a4-a21a2ccd0cf6-2": ".imperial-carousel",
    "Slide-template--14833441800262__e617045b-0ee9-4ffa-a5a4-a21a2ccd0cf6-3": ".yupoong-carousel",
    "Slide-template--14833441800262__e617045b-0ee9-4ffa-a5a4-a21a2ccd0cf6-4": ".pacific-carousel",
    "Slide-template--14833441800262__e617045b-0ee9-4ffa-a5a4-a21a2ccd0cf6-5": ".flexfit-carousel",
    // ... add other hat collections here
  };

 // Function to update the carousel
  function updateCarousel(collectionName) {
    // Use AJAX to fetch new content based on 'collectionName'
    // and update the default carousels
    $.ajax({
      url: 'https://gearheadhats.com/collections/' + collectionName,
      method: 'GET',
      success: function(data) {
        // Update the default carousels with new data
        $('.default-patch-carousel').html(data);
        $('.default-hat-carousel').html(data);
      }
    });
  }

function updateCarouselBasedOnCollection(clickedId) {
  // Hide all carousels
  $(".default-patch-carousel, .default-hat-carousel").hide();
  
  // Show the carousel based on clickedId
  const carouselClass = collectionToCarouselMap[clickedId];
  if (carouselClass) {
    $(carouselClass).show();
  }
}


  // Existing event listeners for collection cards
  document.querySelectorAll('.collection-list__item, .hat-collection-list__item').forEach(function(card) {
    card.addEventListener('click', function() {
      const collectionName = card.getAttribute('data-collection-name');
      updateCarousel(collectionName);
    });
  });

$(".collection-list__item").on("click", function(event) {
  event.preventDefault();  // Prevent default action
  const clickedId = $(this).data("target-carousel");
  updateCarouselBasedOnCollection(clickedId);
});


// Call the function to initialize the behavior
updateCarouselBasedOnCollection();
}
  
  // Update header label based on active carousel
  function updateHatBuilderHeader() {
    const isPatchesActive = $('#patchesToggle').hasClass('active');
    const label = isPatchesActive ? "All Patches" : "All Hats";
    $('.hat-builder-collection-label').text(label);
  }

  // Handle toggle click event for switching carousels
  $('#patchesToggle, #hatsToggle').on('click', function() {
    if ($(this).hasClass('active')) return;
    
    $('.toggle-button').removeClass('active');
    $(this).addClass('active');
    
    toggleCarouselPlayback();
    updateHatBuilderHeader();

    if($('#hatsToggle').hasClass('active')) {
      $('.active-background').css('left', '49%');
    } else {
      $('.active-background').css('left', '1%');
    }

    if ($('#patchesToggle').hasClass('active')) {
      $('#patchHighlight').show();
      $('#hatHighlight').hide();
    } else {
      $('#hatHighlight').show();
      $('#patchHighlight').hide();
    } 
  });

  // Set initial category display based on active carousel
  function setInitialCategoryDisplay() {
    if ($('#patchesToggle').hasClass('active')) {
      $('#shopify-section-template--14833441800262__81fbde0d-26af-45a0-bc7b-b0514d8bd082 .collection-list').show();
      $('#shopify-section-template--14833441800262__e617045b-0ee9-4ffa-a5a4-a21a2ccd0cf6 .collection-list').hide();
    } else {
      $('#shopify-section-template--14833441800262__81fbde0d-26af-45a0-bc7b-b0514d8bd082 .collection-list').hide();
      $('#shopify-section-template--14833441800262__e617045b-0ee9-4ffa-a5a4-a21a2ccd0cf6 .collection-list').show();
    }
  }

  setInitialCategoryDisplay();

  // Scroll to hat builder container on button click
  $('#scrollButton').on('click', function() {
    const targetScroll = $(".hat-builder-container").offset().top;
    $('html, body').animate({
      scrollTop: targetScroll
    }, 1000);
  });

});
