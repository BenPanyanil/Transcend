$(document).ready(function(){
    
//        ------------------------------ HAMBURGER-MENU ANIMATION
    $('.hamburger-menu').click(function(){
        $('.navigation-menu-panel').toggleClass('active');
        $('.navigation-menu-layer').fadeToggle(200);
    })
    $('.exit-cross img').click(function(){
        $('.navigation-menu-panel').toggleClass('active');
        $('.navigation-menu-layer').fadeToggle(200);
    })
    
    
//            ---------------------- STRATEGY-SECTION-ANIMATIONS
    $('#define-box').click(function(){
        $(this).toggleClass('active');
        $('#define-text').toggleClass('active');
        $('#define-dots').toggle();
//                --------------------------                
        $('#design-box,#build-box,#launch-box').removeClass('active');
        $('#design-text,#build-text,#launch-text').removeClass('active');
        $('#design-dots,#launch-dots,#build-dots').show();
    })
    $('#design-box').click(function(){
        $(this).toggleClass('active');
        $('#design-text').toggleClass('active');
        $('#design-dots').toggle();
//                --------------------------
        $('#define-box,#build-box,#launch-box').removeClass('active');
        $('#define-text,#build-text,#launch-text').removeClass('active');
        $('#define-dots,#build-dots,#launch-dots').show();
    })
    $('#build-box').click(function(){
        $(this).toggleClass('active');
        $('#build-text').toggleClass('active');
        $('#build-dots').toggle();
//                --------------------------               
        $('#design-box,#define-box,#launch-box').removeClass('active');
        $('#design-text,#define-text,#launch-text').removeClass('active');
        $('#design-dots,#define-dots,#launch-dots').show();     
    })
    $('#launch-box').click(function(){
        $(this).toggleClass('active');
        $('#launch-text').toggleClass('active');
        $('#launch-dots').toggle();
//                --------------------------
        $('#design-box,#define-box,#build-box').removeClass('active');
        $('#design-text,#define-text,#build-text').removeClass('active');
        $('#design-dots,#define-dots,#build-dots').show();                           
    })
    
    
//            ----------------------- PROJECTS-SECTION ANIMATION
    $('#project1').click(function(){
        $('#dd1,#project1-overlay').toggleClass('active');
        $('#project1-name').fadeToggle();
       
        $('#dd2,#dd3,#dd4,#dd5,#dd6,#project2-overlay,#project3-overlay,#project4-overlay,#project5-overlay,#project6-overlay').removeClass('active');
        $('#project2-name,#project3-name,#project4-name,#project5-name,#project6-name').fadeIn();

//                ------------------------      content animation   
        $('#project1-open').fadeToggle('fast');
        $('#type-text1').delay(100).animate({
            left: '0',
            opacity: '1'
        },600);
        
        $('#project2-open,#project3-open,#project4-open,#project5-open,#project6-open').fadeOut('fast');
        
    })
    
    
    $('#project2').click(function(){
        $('#dd2,#project2-overlay').toggleClass('active');
        $('#project2-name').fadeToggle();
        
        $('#dd1,#dd3,#dd4,#dd5,#dd6,#project1-overlay,#project3-overlay,#project4-overlay,#project5-overlay,#project6-overlay').removeClass('active');
        $('#project1-name,#project3-name,#project4-name,#project5-name,#project6-name').fadeIn();

//                ------------------------     content animation    
        $('#project2-open').fadeToggle('fast');
        $('#type-text2').delay(100).animate({
            left: '0',
            opacity: '1'
        },600);
        
        $('#project1-open,#project3-open,#project4-open,#project5-open,#project6-open').fadeOut('fast');
    })
    
    
    $('#project3').click(function(){
        $('#dd3,#project3-overlay').toggleClass('active');
        $('#project3-name').fadeToggle();
//                ------------------------
        $('#dd2,#dd1,#dd4,#dd5,#dd6,#project2-overlay,#project1-overlay,#project4-overlay,#project5-overlay,#project6-overlay').removeClass('active');
        $('#project2-name,#project1-name,#project4-name,#project5-name,#project6-name').fadeIn();

//                ------------------------      content animation   
        $('#project3-open').fadeToggle('fast');
        $('#type-text3').delay(100).animate({
            left: '0',
            opacity: '1'
        },600);
        
        $('#project2-open,#project1-open,#project4-open,#project5-open,#project6-open').fadeOut('fast');

    })
    
    
    $('#project4').click(function(){
        $('#dd4,#project4-overlay').toggleClass('active');
        $('#project4-name').fadeToggle();
//                ------------------------
        $('#dd2,#dd3,#dd1,#dd5,#dd6,#project2-overlay,#project3-overlay,#project1-overlay,#project5-overlay,#project6-overlay').removeClass('active');
        $('#project2-name,#project3-name,#project1-name,#project5-name,#project6-name').fadeIn();

//                ------------------------      content animation   
        $('#project4-open').fadeToggle('fast');
        $('#type-text4').delay(100).animate({
            left: '0',
            opacity: '1'
        },600);
        
        $('#project2-open,#project3-open,#project1-open,#project5-open,#project6-open').fadeOut('fast');

    })
    
    
    $('#project5').click(function(){
        $('#dd5,#project5-overlay').toggleClass('active');
        $('#project5-name').fadeToggle();
//                ------------------------
        $('#dd2,#dd3,#dd4,#dd1,#dd6,#project2-overlay,#project3-overlay,#project4-overlay,#project1-overlay,#project6-overlay').removeClass('active');
        $('#project2-name,#project3-name,#project4-name,#project1-name,#project6-name').fadeIn();

//                ------------------------      content animation   
        $('#project5-open').fadeToggle('fast');
        $('#type-text5').delay(100).animate({
            left: '0',
            opacity: '1'
        },600);
        
        $('#project2-open,#project3-open,#project4-open,#project1-open,#project6-open').fadeOut('fast');

    })
    
    
    $('#project6').click(function(){
        $('#dd6,#project6-overlay').toggleClass('active');
        $('#project6-name').fadeToggle();
//                ------------------------
        $('#dd2,#dd3,#dd4,#dd5,#dd1,#project2-overlay,#project3-overlay,#project4-overlay,#project5-overlay,#project1-overlay').removeClass('active');
        $('#project2-name,#project3-name,#project4-name,#project5-name,#project1-name').fadeIn();

//                ------------------------      content animation   
        $('#project6-open').fadeToggle('fast');
        $('#type-text6').delay(100).animate({
            left: '0',
            opacity: '1'
        },600);
        
        $('#project2-open,#project3-open,#project4-open,#project5-open,#project1-open').fadeOut('fast');

    })
    
    
//            ---------------------------- PROJECT-SECTION OPENED TEXT ANIMATION

    
    
    
    
})

