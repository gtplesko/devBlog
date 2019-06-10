function sortDivs(parent) {
  $(".card-columns").html($(parent).sort((a,b)=>{return a.dataset.sort < b.dataset.sort ? 1 : -1;}));
}
sortDivs('.all-posts');
$(function() {
  $('input').filter( function(){return this.type == 'range' } ).each(function(){
		var $slider = $(this),
		  $text_box = $('#'+$(this).attr('link-to'));

    $text_box.val(this.value);

    $slider.change(function(){
			$text_box.val(this.value);
		});

		$text_box.change(function(){
			$slider.val($text_box.val());
		});
  });
});
