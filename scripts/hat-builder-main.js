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

let displayedPatchCarousel = 'patches-all-carousel'; // ID of the "all patches" carousel
let displayedHatCarousel = 'hats-all-carousel'; // ID of the "all hats" carousel

$(document).ready(function () {
    $(".hatBuilderCollectionCard").on("click", function () {
        // Carousel switching logic can remain if this isn't being handled by Alpine.js
        const clickedCollection = $(this).attr('id');
        const targetCarousel = collectionToCarouselMap[clickedCollection];
        const productType = clickedCollection.includes('patches') ? 'patches' : 'hats';

        $('#' + displayedPatchCarousel).hide();
        $('#' + displayedHatCarousel).hide();
        
        displayedPatchCarousel = productType === 'patches' ? targetCarousel : displayedPatchCarousel;
        displayedHatCarousel = productType === 'hats' ? targetCarousel : displayedHatCarousel;
        
        $('#' + targetCarousel).show();
    });


  $('.patch-carousels > div').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    arrows: false,
    adaptiveHeight: false,
    variableWidth: true,
  });

  $('.hat-carousels > div')
    .slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      centerMode: true,
      arrows: false,
      adaptiveHeight: false,
      variableWidth: true,
    })
    .slick('slickPause');

    $('#scrollButton').on('click', function () {
        // Smooth scroll functionality can remain if it doesn't interfere with Alpine.js
        const targetScroll = $(".hat-builder-container").offset().top;
        $('html, body').animate({ scrollTop: targetScroll }, 500);
    });
});
