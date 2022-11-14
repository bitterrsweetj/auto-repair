$(".header__rating-stars").starRating({
  starSize: 36,
  initialRating: 4.5,
  readOnly: true,
  useGradient: false,
  starShape: 'rounded',
  emptyColor: '#D7D1C7',
  activeColor: '#FFB648'

});

var mixer = mixitup('.blog__list');

$(document).on('click', '.blog__filter-btn', function () {
  $('.blog__filter-btn').removeClass('blog__filter-btn--active')
  $(this).addClass('blog__filter-btn--active');

})

$('.customers__slider').slick({
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
  arrows:false,
  waitForAnimate: false,
  appendDots: $(".customers__dots")
});

$('.customers__slider-prev').on('click', function (e) {
  e.preventDefault()
  $('.customers__slider').slick('slickPrev')
})
$('.customers__slider-next').on('click', function (e) {
  e.preventDefault()
  $('.customers__slider').slick('slickNext')
})