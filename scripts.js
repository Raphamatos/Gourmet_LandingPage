$(document).ready(function () {
  $("#mobile_btn").on("click", function () {
    $("#mobile_menu").toggleClass("active");
    $("#mobile_btn").find("i").toggleClass("fa-x");
  });
  const sections = $("section");
  const navItens = $(".nav-item");
  $(window).on('scroll', function(){
    const header = $('header');
    let activeSectionIndex = 0 ;

    const scrollPosition = $(window).scrollTop() - header.outerHeight();  
    
    console.log(scrollPosition);
    if (scrollPosition <= 0) {
      header.css('box-shadow', 'none');
    } else{
      header.css('box-shadow', '5px 1px 5px rgba(0,0,0,0.1)');
    }
    sections.each(function(i){
      const section = $(this);
      const sectionTop = section.offset().top - 96;
      const sectionBottom = sectionTop+ section.outerHeight();

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom){
        activeSectionIndex = i;
        return false;
      }
    })
    navItens.removeClass('active');
    $(navItens[activeSectionIndex]).addClass('active');


  });

  ScrollReveal().reveal('#cta', {
    origin: 'left', 
    duration: 2000,
    distance: '20%'
  });
  ScrollReveal().reveal('.dish', {
    origin: 'left', 
    duration: 2000,
    distance: '20%'
  });
  ScrollReveal().reveal('#testmonials_chef', {
    origin: 'left', 
    duration: 1000,
    distance: '20%'
  });
  ScrollReveal().reveal('.feedback', {
    origin: 'right', 
    duration: 1000,
    distance: '20%'
  });

});
