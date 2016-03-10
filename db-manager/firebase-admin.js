
var url ="https://popping-heat-3599.firebaseio.com/obras";

function submitToFirebase(evt) {

	url ="https://popping-heat-3599.firebaseio.com/obras"
	var form = document.getElementById('new-entry');
	var collection = $('#collection').val();
	var title = $('#title').val();
	var author = $('#author').val();
	var date = $('#date').val();
	var technique = $('#technique').val();
	var medium = $('#medium').val();
	var width = $('#width').val();
	var height = $('#height').val();
	var depth = $('#depth').val();
	var onDisplay = $('#demo-copy').is(':checked');
	var location = $('#location').val();
	var foor = $('#floor').val();
	var tags = $('#myTags').tagit('assignedTags');
	var notes = $('#notes').val();


	var photos = document.getElementsByClassName('view-btn');
	var links = [];

	for (i = 0; i < photos.length; i++) {
		links.push(photos[i].getAttribute('href'))
	}

	if (collection) {
		url += '/' + $('#collection').val().toLowerCase();
	}

	console.log(url);

	var firebaseRef = new Firebase(url);
	var postRef = firebaseRef.push();

	postRef.set({
		collection: collection,
		title: title, 
		author: author, 
		date: date,
		technique: technique, 
		medium: medium,
		width: width,
		height: height,
		depth: depth, 
		display: onDisplay,
		location: location,
		floor: floor, 
		tags: tags, 
		notes: notes,
		photos: links
		// Photo: photo,
	});
	form.reset();
	$('ul.qq-upload-list-selector.qq-upload-list').empty();
	$('li.tagit-choice.ui-widget-content.ui-state-default.ui-corner-all.tagit-choice-editable').remove()
	evt.preventDefault();
}

window.onload = function () {

	var submit = document.getElementById('submit');
	submit.onclick = submitToFirebase;

}


