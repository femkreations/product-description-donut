// JavaScript Document
$(document).ready(function(){
  	$('a.top').hover(function(){
				//Hover on code
				var classNameFull = $(this).parent().attr('class');
				$(this).parent().data('className', classNameFull)
					.removeClass().addClass('box_image_map_mdsm');
			},
			function(){
				//Hover off code	
				$(this).parent().removeClass("box_image_map_mdsm").attr('class',$(this).parent().data('className'));
	});
	
	
	$('a.left').hover(function(){
				//Hover on code
				var classNameFull = $(this).parent().attr('class');
				$(this).parent().data('className', classNameFull)
					.removeClass().addClass('box_image_map_crosslink');
			},
			function(){
				//Hover off code	
				$(this).parent().removeClass("box_image_map_crosslink").attr('class',$(this).parent().data('className'));
	});
	
	$('a.bottom').hover(function(){
				//Hover on code
				var classNameFull = $(this).parent().attr('class');
				$(this).parent().data('className', classNameFull)
					.removeClass().addClass('box_image_map_crosslink');
			},
			function(){
				//Hover off code	
				$(this).parent().removeClass("box_image_map_crosslink").attr('class',$(this).parent().data('className'));
	});
	
	$('a.right').hover(function(){
				//Hover on code
				var classNameFull = $(this).parent().attr('class');
				$(this).parent().data('className', classNameFull)
					.removeClass().addClass('box_image_map_pockettoken');
			},
			function(){
				//Hover off code	
				$(this).parent().removeClass("box_image_map_pockettoken").attr('class',$(this).parent().data('className'));
	});
	
	$('a.middle').hover(function(){
				//Hover on code
				var classNameFull = $(this).parent().attr('class');
				$(this).parent().data('className', classNameFull)
					.removeClass().addClass('box_image_map');
			},
			function(){
				//Hover off code	
				$(this).parent().removeClass("box_image_map").attr('class',$(this).parent().data('className'));
	});
	
						  
						  
						  
						  
						  
						  
});



