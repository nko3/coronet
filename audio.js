/**
 * Created with JetBrains WebStorm.
 * User: bookair
 * Date: 11/10/12
 * Time: 10:06 AM
 * To change this template use File | Settings | File Templates.
 */

function extension() {
	var audio = new Audio();
	var ext = "";
	if (audio.canPlayType("audio/ogg") == 'maybe') {
		ext = "ogg";
	}
	else if (audio.canPlayType("audio/mp3") == 'maybe') {
		ext = "mp3";
	}
	else if (audio.canPlayType("audio/wav") == 'maybe') {
		ext = "wav";
	}
	return ext;
}

var soundList = {
	"se01":new Audio("sound/se01." + extension()),
	"se02":new Audio("sound/se02." + extension()),
	"se03":new Audio("sound/se03." + extension())
};

