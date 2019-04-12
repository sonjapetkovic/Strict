$(document).ready(function(){
     //ANIMATION//
    function animation() {

        var windowHeight = $(window).height();
        var scrollDown = $(window).scrollTop();

        $('.animation').each(function () {
            var position = $(this).offset().top;

            if (position < scrollDown + windowHeight - 50) {
                var animacija = $(this).attr('data-animation');
                var delay = $(this).attr('data-delay');
                $(this).css('animation-delay', delay);
                $(this).addClass(animacija);
                
            }
        });
    }
    
    
    animateHeader();
    animation();
    $(window).scroll(function(){
        
        animateHeader();
        animation();
 }); //ANIMATION END//
   
      //Form validation//
       $(function () {
        $(".subscribe-form").validate({
            highlight: function (element) {
                $(element).closest('.form-group').addClass("has-danger");
                $(element).addClass("form-control-danger");
            },
            unhighlight: function (element) {
                $(element).closest('.form-group').removeClass('has-danger').addClass('has-success');
                $(element).removeClass('form-control-danger').addClass('form-control-success');
            },
            rules: {
                name: {
                    required: true
                },
                email:{
                    required:true,
                    email:true
                },
                message:{
                    required: true
                },
                'newsletter[]':{
                    required: true
                }


            },
            messages: {
                name: {
                    required: "The *Name field is required!"
                },
                email:{
                    required: 'The *Email field is required',
                    email:'Please enter a valid Email address!'
                },
                message:{
                    required: 'The *Message field is required'
                },
                'newsletter[]':{
                    required: 'Please chech this field'
                }

            },
            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo($(element).closest('.form-group').find('.error-msg'));
            }

        });
    });
      
    
    
    
    
    
    
    
});