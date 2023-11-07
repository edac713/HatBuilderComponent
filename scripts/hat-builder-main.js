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
  $(".hat-builder-patch-carousels, .hat-builder-hat-carousels").hide();
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
  $(".patch-collection-list").hide();
  isDropDownOpen = false;
}

$('#patches-toggle, #hats-toggle').on('click', function () {
  const clickedToggle = $(this).attr('id');
  const targetCollectionList = clickedToggle.replace('toggle', '-collection-list');
  $('#patch-collection-list, #hat-collection-list').hide();
  if (isDropDownOpen && clickedToggle === activeToggle) {
    isDropDownOpen = false;
  } else {
    $('#' + targetCollectionList).show();
    isDropDownOpen = true;
    activeToggle = clickedToggle;
  }
});

function updateHatBuilderHeader() {
  const isPatchesActive = $('#patches-toggle').hasClass('active');
  const label = isPatchesActive ? "All Patches" : "All Hats";
  $('.hat-builder-collection-label').text(label);
}

$(document).ready(function () {
  $(".hat-builder-collection-card").on("click", function () {
    const collectionName = $(this).attr("id");
    handleCollectionClick(collectionName);
  });

  $(".hat-builder-patch-carousels > div").slick({
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

  $(".hat-builder-hat-carousels > div").slick({
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

  $('#patch-collection-list, #hat-collection-list').hide();

  $('#patches-toggle, #hats-toggle').on('click', function () {
    if ($(this).hasClass('active')) return;
    $('.hat-builder-toggle-button').removeClass('active');
    $(this).addClass('active');
    updateHatBuilderHeader();
    if ($('#hats-toggle').hasClass('active')) {
      $('.hat-builder-active-background').css('left', '49%');
      $('#patch-collection-list').hide();
      $('#hat-collection-list').show();
    } else {
      $('.hat-builder-active-background').css('left', '1%');
      $('#hat-collection-list').hide();
      $('#patch-collection-list').show();
    }
    const activeToggle = $(this).attr('id').replace('toggle', '');
    if (activeToggle === 'patches') {
      $('.hat-builder-hat-carousels > div').slick('slickPause');
      $('.hat-builder-patch-carousels > div').slick('slickPlay');
    } else {
      $('.hat-builder-patch-carousels > div').slick('slickPause');
      $('.hat-builder-hat-carousels > div').slick('slickPlay');
    }
  });

  $('#scrollButton').on('click', function() {
    const targetScroll = $(".hat-builder-container").offset().top;
    $('html, body').animate({
      scrollTop: targetScroll
    }, 500);
  });

  $(".hat-builder-collection-card").on("click", function () {
    $("#patch-collection-list, #hat-collection-list").hide();
    isDropDownOpen = false;
  });
});
