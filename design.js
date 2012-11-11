/**
 * Created with JetBrains WebStorm.
 * User: bookair
 * Date: 11/10/12
 * Time: 10:06 AM
 * To change this template use File | Settings | File Templates.
 */


function canvasBtn(size) {
	var canvasBtn = '';
	var contextBtn = '';
	switch (size) {
		case 1:
			canvasBtn = document.createElement('canvas');
			canvasBtn.width = cubeWidth();
			canvasBtn.height = cubeHeight(1);
			canvasBtn.id = 'se01';
			canvasBtn.addEventListener('click', canvasOnClick01, false);
			contextBtn = canvasBtn.getContext('2d');
			contextBtn.beginPath();
			contextBtn.fillStyle = rundumRGB();
			contextBtn.fillRect(
				horizontal(),
				vertical(),
				cubeWidth(),
				cubeHeight(1)
			);
			return canvasBtn;
		case 2:
			canvasBtn = document.createElement('canvas');
			canvasBtn.width = cubeWidth();
			canvasBtn.height = cubeHeight(1);
			canvasBtn.id = 'se02';
			canvasBtn.addEventListener('click', canvasOnClick02, false);
			contextBtn = canvasBtn.getContext('2d');
			contextBtn.beginPath();
			contextBtn.fillStyle = rundumRGB();
			contextBtn.fillRect(
				horizontal(),
				vertical(),
				cubeWidth(),
				cubeHeight(1)
			);

			return canvasBtn;
		case 3:
			canvasBtn = document.createElement('canvas');
			canvasBtn.width = cubeWidth();
			canvasBtn.height = cubeHeight(2);
			canvasBtn.id = 'se03';
			canvasBtn.addEventListener('click', canvasOnClick03, false);
			contextBtn = canvasBtn.getContext('2d');
			contextBtn.beginPath();
			contextBtn.fillStyle = rundumRGB();
			contextBtn.fillRect(
				horizontal(),
				vertical(),
				cubeWidth(),
				cubeHeight(2)
			);
			return canvasBtn;
		case 4:
			canvasBtn = document.createElement('canvas');
			canvasBtn.width = cubeWidth();
			canvasBtn.height = cubeHeight(1);
			canvasBtn.id = 'se04';
			canvasBtn.addEventListener('click', canvasOnClick04, false);
			contextBtn = canvasBtn.getContext('2d');
			contextBtn.beginPath();
			contextBtn.fillStyle = rundumRGB();
			contextBtn.fillRect(
				horizontal(),
				vertical(),
				cubeWidth(),
				cubeHeight(1)
			);
			return canvasBtn;
		case 5:
			canvasBtn = document.createElement('canvas');
			canvasBtn.width = cubeWidth();
			canvasBtn.height = cubeHeight(1);
			canvasBtn.id = 'se05';
			canvasBtn.addEventListener('click', canvasOnClick05, false);
			contextBtn = canvasBtn.getContext('2d');
			contextBtn.beginPath();
			contextBtn.fillStyle = rundumRGB();
			contextBtn.fillRect(
				horizontal(),
				vertical(),
				cubeWidth(),
				cubeHeight(1)
			);
			return canvasBtn;
		case 6:
			canvasBtn = document.createElement('canvas');
			canvasBtn.width = cubeWidth();
			canvasBtn.height = cubeHeight(2);
			canvasBtn.id = 'se06';
			canvasBtn.addEventListener('click', canvasOnClick06, false);
			contextBtn = canvasBtn.getContext('2d');
			contextBtn.beginPath();
			contextBtn.fillStyle = rundumRGB();
			contextBtn.fillRect(
				horizontal(),
				vertical(),
				cubeWidth(),
				cubeHeight(2)
			);
			return canvasBtn;
	}

}
function rundumRGB() {
	var red = Math.ceil(Math.random() * 255);
	var green = Math.ceil(Math.random() * 255);
	var blue = Math.ceil(Math.random() * 255);
	return  'rgba(' + red + ',' + green + ',' + blue + ', 1)';
}

// rectangle[0].horizontal, rectangle[0].vertical, rectangle[0].width, rectangle[0].height
function horizontal(number) {
	switch (number) {
		case 1:
			return 0;
		case 2:
			return 0;
		case 3:
			return windowHeight/2*0.631;
		case 4:
			return windowHeight/2*0.631*2;
		case 5:
			return windowHeight/2*0.631*3;
		default :
			return 0;
	}
}
function vertical(number) {
	switch (number) {
		case 1:
			return 0;
		case 2:
			return windowHeight/2*0.631;
		case 3:
			return 0;
		default :
			return 0;
	}
}
function cubeWidth(number) {
	switch (number) {
		case 1:
			return windowHeight/2*0.631;
		case 2:
			return windowHeight/2*0.631;
		case 3:
			return windowHeight/2*0.631;
		default :
			return windowHeight/2*0.631;
	}

}
function cubeHeight(number) {
	switch (number) {
		case 1:
			return windowHeight/2;
		case 2:
			return windowHeight+10;
		default :
			return windowHeight;
	}
}
