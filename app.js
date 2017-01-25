//MANAGING STATE OF APPLICATION

//Template for state of application
var state = {
  items: []
}

//Add item to state
function addItem(state, item){
	state.items.push({
		displayName: item
	});
}

function deleteItem(state, index) {
	state.items.splice(index, 1);
}
//Putting it into the DOM
function createList(){ 
	state.items.forEach(function(item){
	var theHtml = 
	'<li>' +
		'<span class="shopping-item">' + item.displayName + '</span>' +
		'<div class="shopping-item-controls">' +
			'<button class="shopping-item-toggle">' +
				'<span class="button-label">check</span>' +
			'</button>' +
			'<button class="shopping-item-delete">' +
				'<span class="button-label">delete</span>' +
			'</button>' +
		'</div>' +
	'</li>'
	$('.shopping-list').append(theHtml);
	});
}

//Event handlers
//Why isn't this working on the newly created list?
$(document).ready(function(){
	//submitting items into list
	$('#js-shopping-list-form').on('submit', function(){
		event.preventDefault();//prevents from submitting the form
		var userInput = $('#shopping-list-entry').val();
		addItem(state, userInput);
		createList();
	});
	//applying the class 'checked' onto the span
	$('.shopping-list').on('click', '.shopping-item-toggle' ,function(){
		$(this).parent().parent().find('.shopping-item').toggleClass('shopping-item__checked');
	})

	$('.shopping-list').on('click', 'button.shopping-item-delete',function(){
		$(this).parent().parent().remove();
	});
})




