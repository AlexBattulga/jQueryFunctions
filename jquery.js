$(document).ready(function(){
    $('p').text('Click the button to see click effect');
    $('.slidedown').hide();
    $('.slideup').text('Click the button to see effect above section');
    $('.slidetoggle').text('The .slideToggle() method animates the height of the matched elements. This causes lower parts of the page to slide up or down, appearing to reveal or conceal the items. If the element is initially displayed, it will be hidden; if hidden, it will be shown. The display property is saved and restored as needed. If an element has a display value of inline, then is hidden and shown, it will once again be displayed inline. When the height reaches 0 after a hiding animation, the display style property is set to none to ensure that the element no longer affects the layout of the page.');
    $('#btn').click(function(){
        alert('You clicked it too hard');
    });
    $('#hide').click(function(){
        $('.hide').hide();
        $('#show').click(function(){
            $('p').show();
        });
    });
    $('#toggle').click(function(){
        $('p').toggle();
    });
    $('#slidedown').click(function(){
        $('.slidedown').slideDown('slow');
    });
    $('#slideup').click(function(){
        $('.slidedown').slideUp('slow');
    });
    $('#slidetoggle').click(function(){
        $('.slidetoggle').slideToggle('slow');
    });
    $('#fadein').click(function(){
        $('.slidetoggle').fadeIn('slow');
    });
    $('#fadeout').click(function(){
        $('.slidetoggle').fadeOut('slow');
    });
    $('#addclass').click(function(){
        $('.blue').addClass('extraStyle');
    });
    $('#before').click(function(){
        $('.before').before(document.createTextNode( "Hello" ));
    });
    $('#after').click(function(){
        $('.after').after(document.createTextNode( "Hello" ));
    });
    $('#append').click(function(){
        $('.append').append('<i><strong> Hello there!</strong></i>');
    });
    $('#html').click(function(){
        $('.html').html('<p><i> This is a HTML effect</i></p>');
    });
    $('#attr').click(function(){
        var attr = $('a').attr('target');
        $('h2').text(attr);
    });
    $('.btns').click(function(){
        var btnValue = $(this).text();
        $('#input').val(btnValue);
    });
    $('#text').click(function(){
        var text = $('#paragraph').text();
        $('h3').html(text);
    });
    $('#data').click(function(){
        $( ".dataTest" ).data( "test", { first: 16, last: "pizza!" } );
        $( "span:first" ).text( $( ".dataTest" ).data( "test" ).first );
        $( "span:last" ).text( $( ".dataTest" ).data( "test" ).last );
    });
});
