gsap.set('.kirak', {autoAlpha: 0}); //初期状態としてopacity: 0;とvisibility: hidden;が指定される
gsap.set('.dark', {autoAlpha: 0}); //初期状態としてopacity: 0;とvisibility: hidden;が指定される

gsap.to('.kirak', { 
  duration: 1.8,
  autoAlpha: 1,
  scrollTrigger: {
    trigger: '.js-trigger1',
    start: 'top center',
    end: 'bottom center',
    toggleActions: 'play reverse play reverse',
  },
});


gsap.to('.dark', { 
  duration: 1.2,
  autoAlpha: 1,
  scrollTrigger: {
    trigger: '.js-trigger1',
    start: 'top center',
    end: 'bottom center',
    toggleActions: 'play reverse play reverse',
  },
});