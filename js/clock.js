const canvas = document.getElementById('canvas');
const faceColour = document.getElementById('face');
const borderColour = document.getElementById('borderC');
const hourHandColour = document.getElementById('hourL');
const minuteHandColour = document.getElementById('lHand');
const secondHandColour = document.getElementById('sHand');
const changeColourBtn = document.getElementById('changeColourBtn');
let digiClock = document.getElementById('digital__clock');
const textTime = document.getElementById('text__time');
let analClock = document.getElementById('analog__clock');
const clockFace = document.getElementById('clock__face');
const clockFaces = document.getElementById('clockFaces');
const startClocks = document.getElementById('startClock');
const swivel = document.getElementById('swivel');
const minuteInd = document.getElementById('minuteInd');
const hourInd = document.getElementById('hourInd');

// //================================================================ \\
// //================================================================= \\
// List of Colours Used in This Project - Not Necessarily in the Color
// modifiers 

 let clr_text ='#fafafa1a';
 let clr_test ='#b1dcf7';
 let clr_digi_lockface_bg ='#b818cd';
 let clr_gold ='#ffd900';
 let clr_blue ='#0000ff';
 let clr_blue_ccent ='#b1dcf7';
 let clr_digi_border ='#aee0f4';
 let clr_red ='#ff0000';
 let clr_aqua ='#00ffff';
 let clr_dig_boxShadow = '#7f3cc3';
 let clr_hr2 ='#1f8fff';
 let clr_green = '#008000';
 let clr_orange = '#ffa600';
 let clr_rebbyPurp = '#663399';
 let clr_dodgerblue = '#1f8fff';
 let clr_beige = '#f5f5db';
 let clr_swivel = '#ffd900';
 let clr_minuteIndicator = '#ffd900';
 let clr_hourIndicator = '#663399';

// //==============================================\\
// ||           Editable Clock elements             ||


//let clr_minuteHandColour ='#663399';
//let clr_hourHandColour ='#ffa600';
//let clr_borderColour ='#008000';
//let clr_secondHandColour ='#1f8fff';
//let clr_faceColour ='#f5f5db';

 //faceColour.value = clr_faceColour;
 //borderColour.value = clr_borderColour;
 //minuteHandColour.value = clr_minuteHandColour;
 //secondHandColour.value = clr_secondHandColour ;
 //hourHandColour.value = clr_hourHandColour;

// \\========================================================= //
// \\========================================================= //

// //============================================================ \\
// //============================================================ \\
// ||          Array of Child Elements of the This Project        ||
// ||          - Not Necessarily in the Color modifiers -         ||
// || So we want to get all the input values from each form-group ||
// || and match them to the property values of the elements that  ||
// || they represent.                                             ||

//const clockFeatures = document.querySelectorAll('#clockFeatures');
//
//clockFeatures.addEventListener('click', changeColor);
//
//function changeColor(e) {
//    
//    for(i = 0; i < clockFeatures.length; i++) {
//        forEach (input in clockFeatures[i][input[valueof]]);
//        
//    }
//}

// \\========================================================= //
// \\========================================================= //

startClocks.addEventListener('click', startClock);
startClocks.innerHTML = "Start Clock";
function startClock(){
	const startClocks = document.getElementById('startClock');
	runningClock = !requestAnimationFrame(clock);

	if(runningClock === true) {
		requestAnimationFrame(clock);
		startClocks.innerText = "Start Clock";
	 } else {	 
		 cancelAnimationFrame(runningClock);
		 startClocks.innerHTML = "ON";
        // startClocks.style.fontSize = "clamp(0.8rem, 0.8ch, 1rem)";
        startClocks.style.minHeight = "5rem";
        startClocks.style.minWidth = "5rem";
         startClocks.style.fontSize = "clamp(1.2rem, 1.5ch, 2rem)";
         startClocks.style.fontWeight = "800";
        startClocks.style.backgroundColor = "#23F1E1";
        startClocks.style.color = "#88550C";
         startClocks.style.textShadow = "0 0.075rem 0.05rem blue"
         clockFaces.style.paddingInline = "2rem";
         canvas.style.border = "1rem inset blue";
        canvas.style.outline = "1rem ridge gold";
        //canvas.style.outlineOffset = "-2rem";
        canvas.style.backgroundColor = "#23F1E1";
        canvas.style.borderRadius = "100%";
	 }
}
  
changeColourBtn.innerText = "Colour Settings";
changeColourBtn.addEventListener('click', openOptions);

function openOptions() {
    let options = document.getElementById('changeClock');
     if(options.style.display === "none") {
         options.style.display = "inline grid";
         options.style.visibility = "visible";
         options.style.opacity = 1;
         changeColourBtn.innerText = "Close Features";
         changeColourBtn.style.color = "#23F1E1";
         changeColourBtn.style.textShadow = "0 0.075rem 0.1rem blue";
     } else {
         options.style.display = "none";
         options.style.visibility = "visible";
         options.style.opacity = 1;
         changeColourBtn.innerText = "Colour Settings";
         changeColourBtn.style.color = "rebeccapurple";
         changeColourBtn.style.textShadow = "0 0.075rem 0.1rem gold";
     }
}

digiClock.style.display = "none";
textTime.style.display = "none";
clockFace.innerText = "Digital Clock";
clockFace.addEventListener('click', switchClocks);
let clocks = document.getElementById('clockFrame');
let clockFeatures = document.getElementById('clockFeatures');
let changeClocks = document.getElementById('changeClock');

function switchClocks() {
    let digiClock = document.getElementById('digital__clock');
    const textTime = document.getElementById('text__time');
    let analClock = document.getElementById('analog__clock');
    let canvas= document.getElementById('canvas');
    
    if (digiClock.style.display === "none" && textTime.style.display === "none") {
        analClock.style.display = "none";
        canvas.style.display = "none";
        digiClock.style.display = "inline grid";
        digiClock.style.marginInline = "auto";
        textTime.style.display = "inline grid";
        changeClocks.style.borderRadius = "0 0 0 0";
        changeClocks.style.marginInline = "auto";
        clockFeatures.style.gridTemplateColumns = 'repeat(2, 1fr)';
        clocks.style.flexDirection = "column";
        clockFace.innerText = "Analog Clock Face";
        clockFace.style.color = "#23F1E1";
        clockFace.style.textShadow= "0 0.075rem 0.1rem blue";
        changeColourBtn.addEventListener('click', openOptions);
        
    } else {
        analClock.style.display = "inline grid";
        canvas.style.display = "inline grid";
        digiClock.style.display = "none";
        textTime.style.display = "none";
        clocks.style.borderRadius = "0 0 1rem 1rem";
        clocks.style.flexDirection = "row";
        clocks.style.backgroundColor = "hsla(0, 0%, 98%, 0.1)";
        clockFace.style.color = "hsl(270, 50%, 40%)";
        clockFace.innerText = "Digital Clock Face";
        clockFace.style.textShadow= "0 0.075rem 0.1rem hsl(180, 100%, 50%)";
    }
}

function clock(){
    const now = new Date();
    const ctx = canvas.getContext('2d');
    
    // ///=== Setup Canvas ===\\\
    
    ctx.save(); // Save the Default State
    ctx.clearRect(0, 0, 400, 400); // Clear Canvas
    ctx.translate(200, 200); // Puts 0, 0 at the center
    ctx.rotate(-Math.PI / 2); // Rotate Negative 90 Degrees
        
    // Restore Default State ===\\\
    
    ctx.strokeStyle = '#0000ff';
    ctx.fillStyle = 'hsl(60, 56%, 91%)';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    
    // ///===/ Draw Clock Face / Border ===\\\
    
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.strokeStyle = borderColour.value;
    ctx.fillStyle = faceColour.value;
    ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fill();
    ctx.restore();
    
    // Note to Brad Traversy - Traversy Media
    // Very Strange thing:
    // When i open up your original index.html file in my browser, it
    // functions as you designed it to do,
    //
    // When i opened up my clock.html file the minutes and hour lines
    // were still displayed from 0,0 and not 250, 250,
    // i double checked my code, compared it to yours, found a few errors,
    // but nothing related, tidied and added comments and still not in the
    // right position, not sure if it will persist, but i had to add the
    // translate parameter to both the hour and the minute lines to get them
    // into proper position
    
    // ///=== Draw Hour Lines ===\\\
    
    ctx.save();
    ctx.lineWidth = 4;
	ctx.strokeStyle = hourInd.value;
    for (let i = 0; i < 12; i++){
        ctx.beginPath();
        ctx.rotate(Math.PI / 6);
        ctx.moveTo(100, 0);
        ctx.lineTo(120, 0);
        ctx.stroke();
    }
    ctx.restore();
    
    // ///=== Draw Minute Lines ===\\\
    
    ctx.save();
	ctx.strokeStyle = minuteInd.value;
    ctx.lineWidth = 4;
    for (let i = 0; i < 60; i++){
        if (i % 5 !== 0) {
            ctx.beginPath();
            ctx.moveTo(117, 0);
            ctx.lineTo(120, 0);
            ctx.stroke();
        }
        ctx.rotate(Math.PI / 30);
    }
    ctx.restore();
    
    // //=== Get Current Time ===\\\
    
    let hr = now.getHours() % 12;
    let min = now.getMinutes();
    let sec = now.getSeconds();
    
    // ///=== Draw Hour Hand ===\\\
    
    ctx.save();
    ctx.rotate((Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec);
    ctx.strokeStyle = hourHandColour.value;
    ctx.lineWidth = 12;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(80, 0);
    ctx.stroke();
    ctx.restore();
    
   // ///=== Draw Minute Hand ===\\\
   
    ctx.save();
    ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
    ctx.strokeStyle = minuteHandColour.value;
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(-28, 0);
    ctx.lineTo(112, 0);
    ctx.stroke();
    ctx.restore(); 
    
    // ///=== Draw Second Hand ===\\\
    
    ctx.save();
    ctx.rotate((sec * Math.PI) / 30);
    ctx.strokeStyle = secondHandColour.value;
    ctx.fillStyle = swivel.value;
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(-30, 0);
    ctx.lineTo(100, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.restore();
    
    ctx.restore();
    
    requestAnimationFrame(clock);
    
    if (hr < 10){
        hr = "0" + hr;
    } else {
        hr = hr;
    }
    if (hr => 12 && hr <= 23) {
		hr = hr++ + 12;
	} else {
		hr = hr;
	}
    if (min < 10){
        min = "0" + min;
    } else {
        min = min;
    }
    if (sec < 10){
        sec = "0" + sec;
    } else {
        sec = sec;
    }
    
	let suffix = "";
	if (hr < 12)
		suffix = " AM";
	else {
        suffix = " PM";
	}
    textTime.innerText =`${hr}:${min}:${sec}${suffix}`;

}

document.getElementById('save__btn').addEventListener('click', () =>
{
	const dataURL = canvas.toDataURL('image/png');
	const link = document.createElement('a');
	link.download = 'default.png';
	link.href = dataURL;
	link.click();
	});
