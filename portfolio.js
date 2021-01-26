
jQuery(function(f){
    var element = f('#w3');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 600 ? 'In': 'Out')](700);           
    });
});

jQuery(function(f){
    var element = f('#w2');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 100 ? 'In': 'Out')](700);           
    });
});

