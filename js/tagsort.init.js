$(function(){
	$('.tags-container').tagSort({items:'.item', tagElement:'span', tagClassPrefix:'tagsort-', itemTagsView:'.item-tags', itemTagsSeperator:' / ', sortType:'single', fadeTime: 2});
	$('.tags-container').find('.tagsort-all').addClass('tagsort-active'); 
});