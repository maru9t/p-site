
/*loading fade out*/
window.onload = function() {
    const loadingc = document.getElementById('loading');
    loadingc.classList.add('loaded');
}


/*prrallax*/
$('.parallax-window').parallax({imageSrc: '../img/merry-go-round-night-697663.jpg'});


/*scroll to top*/
$("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});