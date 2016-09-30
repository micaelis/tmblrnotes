/* Tumblr AJAX Notes Plugin by Matthew Buchanan v3.0.1
   Requires jQuery 1.2.6 or higher
   See http://matthewbuchanan.name/tumblr/ajax-notes/ for installation guide */

$(document).ready(function(){
   homeNotes();
});  
function homeNotes() {
	$("a.notes-button").each(function() {
		var noteCount = $(this).html();
		if (noteCount.indexOf(" ") != -1) {
			noteCount = parseInt(noteCount.substring(0,noteCount.indexOf(" ")));
		} else {
			noteCount = parseInt(noteCount);
		}
		if (noteCount > 0) $(this).show();
		if (noteCount > 14) $(this).addClass("fave");
	});
	$("a.notes-button").unbind('click').click(function(event) {
		event.preventDefault();
		var node = $("#notes-"+$(this).attr("rel"));
		$("#notes-"+$(this).attr("rel")).slideToggle();
		$.ajax({ url: $(this).attr("href"), success: function(data){
			node.find(".loading").hide();
			node.find(".notes-loader").html(data).slideDown();
			node.find(".notes-loader").append("<p><a href='#' class='notes-hide'>Hide Notes</a></p>");
			node.find(".notes-hide").click(function(event) {
				event.preventDefault();
				node.slideToggle();
			});
		} });
	});
};
