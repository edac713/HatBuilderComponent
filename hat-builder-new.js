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
  "hats": "hats-all-carousel",
  "richardson": "hats-richardson-carousel",
  "imperial": "hats-imperial-carousel",
  "yupoong": "hats-yupoong-carousel",
  "pacific": "hats-pacific-carousel",
  "flexfit": "hats-flexfit-carousel"
};

let isDropDownOpen = false;
let activeToggle = '';

function showCarousel(carouselId) {
  $(".patch-carousel, .hat-carousel").hide();
  $("#" + carouselId).show();
}

function handleCollectionClick(event, clickedElement) {
  event.preventDefault();
  const collectionName = clickedElement.attr("id");
  const carouselId = collectionToCarouselMap[collectionName];
  if (!carouselId) return;
  const currentType = collectionName.startsWith('patches') ? 'patches' : 'hats';
  if (currentType === 'patches') {
    $('#patches-all-carousel').hide();
    if (displayedPatchCarousel) $('#' + displayedPatchCarousel).hide();
    displayedPatchCarousel = carouselId;
  } else {
    $('#hats-all-carousel').hide();
    if (displayedHatCarousel) $('#' + displayedHatCarousel).hide();
    displayedHatCarousel = carouselId;
  }
  $('#' + carouselId).show().find('div').show();
  $("hatBuilderCollectionList").hide();
  isDropDownOpen = false;
}

$('#patchesToggle, #hatsToggle').on('click', function () {
  const clickedToggle = $(this).attr('id');
  const targetCollectionList = clickedToggle.replace('Toggle', 'CollectionList');
  $('#patchCollectionList, #hatCollectionList').hide();
  if (isDropDownOpen && clickedToggle === activeToggle) {
    isDropDownOpen = false;
  } else {
    $('#' + targetCollectionList).show();
    isDropDownOpen = true;
    activeToggle = clickedToggle;
  }
});

function updateHatBuilderHeader() {
  const isPatchesActive = $('#patchesToggle').hasClass('active');
  const label = isPatchesActive ? "All Patches" : "All Hats";
  $('.hat-builder-collection-label').text(label);
}

$(document).ready(function () {
  // Event listener for new collection cards in drop-downs
  $(".hatBuilderCollectionCard").on("click", function () {
    const collectionName = $(this).attr("id");
    handleCollectionClick(collectionName);
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
  const playSVG = `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d=""><path d="" fill="#332E21"/></svg>`;
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
  $('#patchCollectionList').hide();
  $('#hatCollectionList').hide();

  // Handle toggle click event for switching carousels
  $('#patchesToggle, #hatsToggle').on('click', function () {
    if ($(this).hasClass('active')) return;
    $('.toggle-button').removeClass('active');
    $(this).addClass('active');
    updateHatBuilderHeader();
    if ($('#hatsToggle').hasClass('active')) {
      $('.active-background').css('left', '49%');
      $('#patchCollectionList').hide();
      $('#hatCollectionList').show();
    } else {
      $('.active-background').css('left', '1%');
      $('#hatCollectionList').hide();
      $('#patchCollectionList').show();
    }
    const activeToggle = $(this).attr('id').replace('Toggle', '');
    if (activeToggle === 'patches') {
      $('.hat-carousels > div').slick('slickPause');
      $('.patch-carousels > div').slick('slickPlay');
    } else {
      $('.patch-carousels > div').slick('slickPause');
      $('.hat-carousels > div').slick('slickPlay');
    }
  });
  
  // Scroll to Hat Builder functionality
  $('#scrollButton').on('click', function() {
    const targetScroll = $(".hat-builder-container").offset().top;
    $('html, body').animate({
      scrollTop: targetScroll
    }, 500);
  });
  
  // Close the drop-down when a collection card is clicked
  $(".hatBuilderCollectionCard").on("click", function () {
    $("#patchCollectionList, #hatCollectionList").hide();
    isDropDownOpen = false;
  });
});