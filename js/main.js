var originalData = $('#email').val();

$(window).load(function(){
	setupContainer();
	setTimeout(dropBio,400);
	setTimeout(dropLinks,800);
	setTimeout(dropMailer,1200);
	setTimeout(fadeInFooter,1600);
})


$(window).resize(function(){
	setupContainer();
})

$('#email').focus(function(){

	$me = $(this);

	if ($me.val() == originalData){
		$me.css({
			color: '#7D7E7F'
		})
	}

});

$('#email').blur(function(){

	$me = $(this);

	$(this).css({
		color: '#E6E7E8'
	})

	if ($me.val() == ''){
		$me.val(originalData);
	}
})

$('#email').keydown(function(obj){
	$me = $(this);

	if ($me.val() == originalData){
		$me.val('');

		$me.css({
			color: '#E6E7E8'
		})

	}

})

function setupContainer(){

	var windowHeight = $(window).height(),
		container = $('#container'),
		containerHeight = container.height();

	$('#container').css({
		'margin-top':((windowHeight - containerHeight)/2 - 30),
		opacity:1
	})
}

function dropBio(){
	$('#bio').css({
		opacity:1,
		'margin-top':'20px'
	})
}

function dropLinks(){
	$('#links').css({
		opacity:1,
		'margin-top':'20px'
	})
}

function dropMailer(){
	$('form').css({
		opacity:1,
		'margin-top':'0px'
	})
}

function fadeInFooter(){
	$('#footer').css({
		opacity:1
	})
}

function moveCaretToStart(el) {
    if (typeof el.selectionStart == "number") {
        el.selectionStart = el.selectionEnd = 0;
    } else if (typeof el.createTextRange != "undefined") {
        el.focus();
        var range = el.createTextRange();
        range.collapse(true);
        range.select();
    }
}

var textBox = document.getElementById("email");

textBox.onfocus = function() {
	if ($('#email').val() == originalData){
	    moveCaretToStart(textBox);

    	// Work around Chrome's little problem
	    window.setTimeout(function() {
	        moveCaretToStart(textBox);
	    }, 1);
	}


};