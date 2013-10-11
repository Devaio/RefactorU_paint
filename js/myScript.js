paper.install(window);
$(function(){
	paper.setup('paint');
	// Create a simple drawing tool:
	var tool = new Tool();
	var path = new Path();
	var currentColor = 'black';

//circle is constantly available even after clicking pathPath but colors work!
	
$('.pathPath').on('click', function(){
 //tool.remove() stops all drawing functionality but does get rid of circles
	tool.onMouseDown = function(event) {
		path = new Path();
		path.strokeColor = currentColor;
		path.add(event.point);
	}
	tool.onMouseDrag = function(event) {
		path.add(event.point);
	}
});

$('.bluePath').on('click', function(){
	tool.onMouseDown = function(event) {
		path = new Path();
		currentColor = 'blue'
		path.strokeColor = currentColor;
		path.add(event.point);
	}
	tool.onMouseDrag = function(event) {
		path.add(event.point);
	}
});

$('.whitePath').on('click', function(){
	tool.onMouseDown = function(event) {
		path = new Path();
		currentColor = 'white'
		path.strokeColor = currentColor;
		path.add(event.point);
	}
	tool.onMouseDrag = function(event) {
		path.add(event.point);
	}
});

$('.blackPath').on('click', function(){
	tool.onMouseDown = function(event) {
		path = new Path();
		currentColor = 'black'
		path.strokeColor = currentColor;
		path.add(event.point);
	}
	tool.onMouseDrag = function(event) {
		path.add(event.point);
	}
});

$('.redPath').on('click', function(){
	tool.onMouseDown = function(event) {
		path = new Path();
		currentColor = 'red'
		path.strokeColor = currentColor;
		path.add(event.point);
	}
	tool.onMouseDrag = function(event) {
		path.add(event.point);
	}
});


$('.circlePath').on('click', function(){
	 tool.onMouseUp = function(event) {
		path = new Path.Circle({
		center: event.middlePoint,
		radius: event.delta.length / 2
	});
	path.strokeColor = currentColor;
	path.fillColor = currentColor;
}
});

$('.eraser').on('click', function(){
	tool.onMouseDown = function(event) {
		var size = new Path();
		currentColor = 'peachpuff'
		path.strokeWidth = 40
		path.strokeColor = currentColor;
		path.add(event.point);
	}
	tool.onMouseDrag = function(event) {
		path.add(event.point);
	}
});


});