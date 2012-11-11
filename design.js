/**
 * Created with JetBrains WebStorm.
 * User: bookair
 * Date: 11/10/12
 * Time: 10:06 AM
 * To change this template use File | Settings | File Templates.
 */
function rundumRGB() {
	var red = Math.ceil(Math.random() * 255);
	var green = Math.ceil(Math.random() * 255);
	var blue = Math.ceil(Math.random() * 255);
	return  "rgba(" + red + "," + green + "," + blue + ", 1)";
}

// rectangle[0].horizontal, rectangle[0].vertical, rectangle[0].width, rectangle[0].height
function horizontal(number) {
	switch (number) {
		case 1:
			return 0;
		case 2:
			return 0;
		case 3:
			return 156;
		default :
			return 0;
	}
}
function vertical(number) {
	switch (number) {
		case 1:
			return 0;
		case 2:
			return 249;
		case 3:
			return 0;
		default :
			return 0;
	}
}
function cubeWidth() {
	return 156;
}
function cubeHeight(number) {
	switch (number) {
		case 1:
			return 249;
		case 2:
			return 503;
		default :
			return 503;
	}
}
