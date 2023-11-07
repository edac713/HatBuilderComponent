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
let displayedPatchCarousel = 'patches-all-carousel'; // ID of the "all patches" carousel
let displayedHatCarousel = 'hats-all-carousel'; // ID of the "all hats" carousel

function handleToggleClick() {
    const clickedToggle = $(this).attr('id');
    let targetCollectionList;
    if (clickedToggle === 'patchesToggle') {
        targetCollectionList = clickedToggle.replace('esToggle', 'CollectionList');
        // Pause the hats carousel and play the patches carousel
        $('#' + displayedHatCarousel).slick('slickPause');
        $('#' + displayedPatchCarousel).slick('slickPlay');
    } else if (clickedToggle === 'hatsToggle') {
        targetCollectionList = clickedToggle.replace('sToggle', 'CollectionList');
        // Pause the patches carousel and play the hats carousel
        $('#' + displayedPatchCarousel).slick('slickPause');
        $('#' + displayedHatCarousel).slick('slickPlay');
    }
    $('#patchCollectionList, #hatCollectionList').hide();
    if (isDropDownOpen && clickedToggle === activeToggle) {
        isDropDownOpen = false;
    } else {
        $('#' + targetCollectionList).show();
        isDropDownOpen = true;
        activeToggle = clickedToggle;
    }

    // Remove the active class from both toggle buttons
    $('#patchesToggle, #hatsToggle').removeClass('active');
    // Add the active class to the clicked toggle button
    $('#' + clickedToggle).addClass('active');
}

function updateHatBuilderHeader() {
    const isPatchesActive = $('#patchestoggle').hasClass('active');
    const label = isPatchesActive ? "All Patches" : "All Hats";
    $('.hat-builder-collection-label').text(label);
}


$(document).ready(function () {
    $(".hatBuilderCollectionCard").on("click", function (event) {
        // Get the id of the clicked collection card
        const clickedCollection = $(this).attr('id');

        // Get the associated carousel ID
        const targetCarousel = collectionToCarouselMap[clickedCollection];

        // Determine the product type of the clicked collection card
        const productType = clickedCollection.includes('patches') ? 'patches' : 'hats';

        // Hide the currently displayed carousel of the same product type
        if (productType === 'patches') {
            $('#' + displayedPatchCarousel).hide();
            displayedPatchCarousel = targetCarousel;
        } else if (productType === 'hats') {
            $('#' + displayedHatCarousel).hide();
            displayedHatCarousel = targetCarousel;
        }

        // Show the carousel associated with the clicked collection card
        $('#' + targetCarousel).show();

        // Close the dropdown menu
        isDropDownOpen = false;
        $('#patchCollectionList, #hatCollectionList').hide();

        // Remove the active class from the toggle button that doesn't match the product type
        if (productType === 'patches') {
            $('#hatsToggle').removeClass('active');
        } else if (productType === 'hats') {
            $('#patchesToggle').removeClass('active');
        }

        // Update the hat-builder-collection-label text
        let label = clickedCollection.replace('patches-', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        $('.hat-builder-collection-label').text(label);
    });

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

    $('#patchCollectionList, #hatCollectionList').hide();

    $('#patchesToggle, #hatsToggle').on('click', handleToggleClick);

    $('#scrollButton').on('click', function () {
        const targetScroll = $(".hat-builder-container").offset().top;
        $('html, body').animate({
            scrollTop: targetScroll
        }, 500);
    });
});
