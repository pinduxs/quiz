var pGetRand;
var getRand;

//Settings
var settings = {
	changeThresh : 0.1,
	totalClips  : 27,
	pathToClips : "data/",
	pbRate : 1,
	mode : 'random',
}

let rpt = Array.from(Array(settings.totalClips), (e,i)=>i+1) //random playthrough generate array of numbers that can then be....
shuffle(rpt) //shuffled for later choosing and playback.
console.log(rpt);
let rptTracker = 0;



//init //press 'h' to hide the gui
var gui = new dat.GUI();
// gui.add(settings, 'changeThresh').name("Cut Thresh (sec)");
gui.add(settings, 'totalClips').name("Total # of clips");
gui.add(settings, 'mode', [ 'linear', 'random', 'non-repeating-rand', 'random-playthrough' ] ).name("Playback Mode");
gui.add(settings, 'pathToClips').name("Clips Folder");
// gui.add(settings, 'pbRate', 0,3).name("Playback Speed").step(0.25);

//Storage
var video1 = $('#video1');
var video2 = $('#video2');
var v1d,v2d,v1ct,v2ct;
var linearTracker = 1;
var gate1 = true;
var gate2 = false;

function toggle(element, pElement){
	//start playing before the clip comes to the front.
	element.get(0).play();

	//eliminate any delay in starting the clip... !need to test with audio.
	setTimeout(function(){
		element.css('z-index', '500');
		pElement.css('z-index', '0');
		if(settings.mode === 'random'){
			getRand = Math.floor(  Math.random() * settings.totalClips +1  )
		}

		if(settings.mode === 'linear'){
			if(linearTracker >= settings.totalClips){
				linearTracker = 1;
			}else{
				linearTracker ++
			}

			getRand = linearTracker
			console.log(linearTracker);
		}

		if(settings.mode === 'non-repeating-rand'){
			getRand = Math.floor(  Math.random() * settings.totalClips +1  )
			while(getRand == pGetRand){ //are we the same, if so try again until we are not.
				console.log("try again",getRand,pGetRand);
				getRand = Math.floor(  Math.random() * settings.totalClips +1  )
			}
			pGetRand = getRand
		}

		if(settings.mode === 'random-playthrough'){

		//move up by one
		rptTracker ++

		//reset
		if(rptTracker === rpt.length){
			let lastNum = rpt[rptTracker.length-1]
			while (rpt[0] === lastNum){
				shuffle(rpt)
				console.log(rpt);
			}
			rptTracker = 0;
			console.log(rpt);

		}

		getRand = rpt[rptTracker];

		}

		pElement.attr({ 'src': settings.pathToClips + getRand + '.mp4' });
		pElement.get(0).pause();
	}, 150)

	//always keep the gui at the front :)
	$('.dg').css('z-index', '9999');

}


/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
