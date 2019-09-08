"use strict";

//Public class 
var OConceptAnimate = (function(){

 function OConceptAnimate(
    imageUniqueName = null,
    classNames = null,
    imageFilePath = null,
    containerClass = null,
    pointsToAnimate = null, 
    pixelsPerFrameProcessingRate = 100,
    scanDirection = "all", 
    startDirection = null, 
    startingPoint = null
) {

        ImageUniqueName = imageUniqueName;
        ClassNames = classNames;
        ImageFilePath = imageFilePath;
        ContainerClass = containerClass;
        PointsToAnimate = pointsToAnimate;
        ScanDirection = scanDirection != null ? scanDirection.toLowerCase() : scanDirection;
        StartDirection = startDirection != null ? startDirection.toLowerCase() : startDirection;
        StartingPoint = startingPoint;
        PixelsPerFrameProcessingRate = pixelsPerFrameProcessingRate;
}



//Class Names to add to canvas
var ClassNames;
//Unique Image Name
var ImageUniqueName;
//Relative Path to the image file
var ImageFilePath;
//Append to element with this class;
var ContainerClass;
//If the image has been preprocessed, the pre-determined points can be passed in
var PointsToAnimate;
//Determines the direction the image will be animated
var ScanDirection;
//Used to automatically find the starting point for animation
var StartDirection;
//On images where the starting point is difficult to automatically determine, use this explicit starting point
var StartingPoint;
//Controls the speed of animation - the number of pixels written per frame (framerate is 60 fps) - default is 100
var PixelsPerFrameProcessingRate;


var xboundary;
var yboundary;
var currentPointIteration;
var canvasToDrawOnContext;
var canvasToCopyContext;
var ImageData;

//Main routine that starts the process
var res;
var img;
OConceptAnimate.prototype.animateImage = function(){

    return new Promise((resolve, reject) => {
        console.log("IMAGE PRELOAD : " + ImageFilePath);
        res = resolve;
  
        //Initial setup
        //Create the image
        img = imgCreate(ImageFilePath);
        img.crossOrigin = "Anonymous";
        img.onload = () => {

            console.log("IMAGE ONLOAD : " + ImageFilePath);

            //Create canvas's
            var canvasToCopy = document.createElement('canvas');
            var canvasToDrawOn = document.createElement('canvas');

            //Set classes for easy access
            for(var i = 0; i < ClassNames.length; i++){
                $(canvasToDrawOn).addClass(ClassNames[i]);
            }
            //give unique class as well
            $(canvasToDrawOn).addClass(ImageUniqueName);

            //Set widths to imported image width
            canvasToCopy.width  = canvasToDrawOn.width = xboundary = img.width;
            canvasToCopy.height = canvasToDrawOn.height = yboundary = img.height;

            //Get contexts
            canvasToCopyContext = canvasToCopy.getContext('2d');
            canvasToDrawOnContext = canvasToDrawOn.getContext('2d');

            //draw image for copy
            canvasToCopyContext.drawImage(img, 0, 0, img.width, img.height);

            //append canvas to the screen
            $("." + ContainerClass).append(canvasToDrawOn);
            //$("." + ContainerClass).append(canvasToCopy);
            canvasToCopy = null;
            canvasToDrawOn = null;

            //If pre-processed animation points aren't passed in
            if(PointsToAnimate == null){
         
                // The following methods are for pre-processing of points for speed
                // The point loading takes time, so we don't want to do it every page load
                // We use this code to download the image data to file, which can be quickly loaded for animation
                
                //trim canvas of all white/transparent space
                //var trimmedCopyCanvas = trimCanvas(canvasToCopy);
                //canvasToCopyContext = trimmedCopyCanvas.getContext('2d');

                //download a copy
                //download(null, trimmedCopyCanvas.toDataURL(), ImageName + ".png", null);

                var imagePointMap = loadFullImagePoints(canvasToCopyContext, xboundary, yboundary);

                if(StartingPoint == null)
                    StartingPoint = findStartingPoint(imagePointMap);

                loadPointsToDraw(canvasToCopyContext, imagePointMap);
            }

            //Starts the animation at 60 fps
            currentPointIteration = 0;
            ImageData = canvasToDrawOnContext.createImageData(xboundary, yboundary);
            window.requestAnimationFrame(runAnimation);

        }
    });
}


//Animates the image
function runAnimation(){
    //proceed if the current iteration is within the number of points to animate
    if(currentPointIteration < PointsToAnimate.length){  
        // create 32 bit array using image data as buffer
        var data32 = new Uint32Array(ImageData.data.buffer);

        //this iteration controls the number of pixels written per frame (framerate is 60 fps)
        for (var p = 0; p < PixelsPerFrameProcessingRate; p++){
            var currentPoint = PointsToAnimate[currentPointIteration];

            if(currentPoint == null){
                canvasToDrawOnContext.clearRect(0, 0, xboundary, yboundary);
                canvasToDrawOnContext.drawImage(img, 0, 0, img.width, img.height);
                return res();
            }

            var pointData = currentPoint.pixelData.data;
            data32[currentPoint.y * xboundary + currentPoint.x] =
                (pointData[3]  << 24) |	// alpha
                (pointData[2] & 0xff << 16) |	// blue
                (pointData[1] & 0xff  <<  8) |	// green
                 pointData[0] & 0xff; 		// red

            currentPointIteration++;
        }
        canvasToDrawOnContext.putImageData(ImageData, 0, 0);

        window.requestAnimationFrame(runAnimation);
    }
}

function getPixelIndex(x, y) {
    return (y * width + x) * 4; // width used when getting buffer
}

//Gets all of the pixels from the Full Map - in order
//so that the image gets drawn from the correct starting point
function loadPointsToDraw(canvasToCopyContext, imagePointMap){  

    PointsToAnimate = [];

    //get all points from map that have color
    var colorMap = imagePointMap.filter(function(p){ 
        var pointData = p.pixelData.data;
            return  pointData[3] > 0 })

    imagePointMap = null;

    //Scan first pixel
    scanAroundPixel(canvasToCopyContext, StartingPoint, colorMap); 

    //iterate over colored points
    for (var p = 0; p < colorMap.length; p++){
        var currentPoint = PointsToAnimate[p];

        //if no more points to scan, look in the opposite direction
        if(p == PointsToAnimate.length -1)
            ScanDirection = "all";
            // switch(ScanDirection) {
            //     case "right" :
            //         ScanDirection = "left";
            //     case "left" :
            //         ScanDirection = "right";
            //     case "up" :
            //         ScanDirection = "down";
            //     case "down" :
            //         ScanDirection = "up";
            //     case "onlyright"
            // }

        
        //if truly no more points, finish routine
        if(p == PointsToAnimate.length)
            break;

        //scan around point for surrounding colored points
        scanAroundPixel(canvasToCopyContext, currentPoint, colorMap);
    }
    
    download(JSON.stringify(PointsToAnimate), null, ImageFilePath.substr(ImageFilePath.lastIndexOf('/') + 1).replace(".png", ".json"), 'application/json');
}

//Search the nine pixels around an pixel for color
//Creates the right to left, then left to right scan motion
function scanAroundPixel(ctx, startPoint, map){
    var x;
    var y;

    if(ScanDirection.indexOf("onlyright") == -1 && 
        ScanDirection.indexOf("onlyleft") == -1 &&  
        ScanDirection.indexOf("onlydown") == -1){
        //top middle
        x = startPoint.x 
        y = startPoint.y + 1;
        AddPointIfHasColor(ctx, x, y, map);
    }

    if(ScanDirection.indexOf("onlyright") == -1 && 
        ScanDirection.indexOf("onlyleft") == -1 &&  
        ScanDirection.indexOf("onlyup") == -1){
        //bottom middle
        x = startPoint.x 
        y = startPoint.y - 1;
        AddPointIfHasColor(ctx, x, y, map);
    }

    if(ScanDirection.indexOf("up") > -1 || 
        ScanDirection.indexOf("right") > -1 || 
        ScanDirection.indexOf("all") > -1 ){

        //top right
        x = startPoint.x + 1
        y = startPoint.y + 1;
        AddPointIfHasColor(ctx, x, y, map);
    }

    if(ScanDirection.indexOf("right") > -1 || 
        ScanDirection.indexOf("all") > -1){

        //center right
        x = startPoint.x + 1
        y = startPoint.y;
        AddPointIfHasColor(ctx, x, y, map);
    }

    if(ScanDirection.indexOf("down") > -1 || 
        ScanDirection.indexOf("right") > -1 || 
        ScanDirection.indexOf("all") > -1){

        //bottom right
        x = startPoint.x + 1
        y = startPoint.y - 1;
        AddPointIfHasColor(ctx, x, y, map);
    }

    if(ScanDirection.indexOf("down") > -1 || 
        ScanDirection.indexOf("left") > -1 || 
        ScanDirection.indexOf("all") > -1 ){
        //bottom left
        x = startPoint.x - 1
        y = startPoint.y - 1;
        AddPointIfHasColor(ctx, x, y, map);
    }

    if(ScanDirection.indexOf("left") > -1 || 
        ScanDirection.indexOf("all") > -1 ){
        //center left
        x = startPoint.x - 1
        y = startPoint.y;
        AddPointIfHasColor(ctx, x, y, map);
    }

    if(ScanDirection.indexOf("up") > -1 || 
        ScanDirection.indexOf("left") > -1 || 
        ScanDirection.indexOf("all") > -1 ){
        //top left
        x = startPoint.x - 1
        y = startPoint.y + 1;
        AddPointIfHasColor(ctx, x, y, map);
    }

}

//returns the point if it has color
function AddPointIfHasColor(ctx, x, y, map){
    if(x < xboundary && x > 0 && y < yboundary && y > 0){
        var point =  getImagePointFromMap(x,y, map);
        var pointData = point.pixelData.data;
        if(pointData[3] > 0){
            if(!checkIfContainsPoint({x:x, y:y}))
                PointsToAnimate.push(point);           
        }   
    }
}

function findStartingPoint(imagePointMap){
    var x;
    var y;
    switch(StartDirection){

      case "righttolefttop" : 
            for (x = 1; x < xboundary; x++){
                for (y = 1; y < yboundary; y++){
                    var point = getImagePointFromMap(x, y, imagePointMap);
                    var pointData = point.pixelData.data;
                    if(pointData[3] > 0)
                        return point;
                }
            }
            break;
       case "righttoleftbottom" : 
            for (x = 1; x < xboundary; x++){
                for (y = yboundary; y > 1; y--){
                    var point = getImagePointFromMap(x, y, imagePointMap);
                    var pointData = point.pixelData.data;
                    if(pointData[3] > 0)
                        return point;
                }
            }
            break;
        case "lefttorighttop" : 
            for (x = xboundary; x > 0; x--){
                for (y = 1; y < yboundary; y++){
                    var point = getImagePointFromMap(x, y, imagePointMap);
                    var pointData = point.pixelData.data;
                    if(pointData[3] > 0)
                        return point;
                }
            }
            break;
       case "lefttorightbottom" : 
            for (x = xboundary; x > 0; x--){
                for (y = yboundary; y > 0; y--){
                    var point = getImagePointFromMap(x, y, imagePointMap);
                    var pointData = point.pixelData.data;
                    if(pointData[3] > 0)
                        return point;
                }
            }
            break;
        case "toptobottom" : 
            for (y = 1; y < yboundary; y++){
                for (x = 1; x < xboundary; x++){
                    var point = getImagePointFromMap(x, y, imagePointMap);
                    var pointData = point.pixelData.data;
                    if(pointData[3] > 0)
                        return point;
                    }
                }
                break;
        case "bottomtotop" : 
            for (y = yboundary; y > 0; y--){
                for (x = 1; x < xboundary; x++){
                    var point = getImagePointFromMap(x, y, imagePointMap);
                    var pointData = point.pixelData.data;
                    if(pointData[3] > 0)
                        return point;
                    }
                }
    
    }
}

//Gets Full Map of Image Pixels
function loadFullImagePoints(ctx, width, height){
    var imagePointMap = [];
    for (var x = 1; x < width + 1; x++){
        for (var y = 1; y < height + 1; y++){
        var pixelData =  ctx.getImageData(x, y, 1, 1);
            imagePointMap.push({x:x, y:y, pixelData:pixelData});
        }
    }
    return imagePointMap;
}

//Retrieves pixel from map based on X,Y Coordinates
function getImagePointFromMap(x,y, map){
    for(var i = 0; i < map.length; i++){
        if(map[i].x == x && map[i].y == y)
            return map[i];
    }
}

//Checks the Points To Animate array if point exists
function checkIfContainsPoint(point){
    var found = false;
    for(var i = 0; i < PointsToAnimate.length; i++) {
        if (PointsToAnimate[i].x == point.x && PointsToAnimate[i].y == point.y) {
            found = true;
            break;
        }
    }
    return found;
}



//download utility
function download(content, dataUrl, name, type) {
    const a = document.body.appendChild(document.createElement('a'));
    if(content != null){
        const file = new Blob([content], {
        type: type
        });
        a.href = URL.createObjectURL(file);
    }
    else{
        if(type != null)
            type = "data:" + type;
        else
            type = "data:application/octet-stream";

        /* Change MIME type to trick the browser to downlaod the file instead of displaying it */
        dataUrl = dataUrl.replace(/^data:image\/[^;]*/, type);
      
        /* In addition to <a>'s "download" attribute, you can define HTTP-style headers */
        dataUrl = dataUrl.replace(/^data:application\/octet-stream/, type + ';headers=Content-Disposition%3A%20attachment%3B%20filename=' + name);
      
        a.href = dataUrl;
    }
    a.download = name;
    a.click();
} 


//take untyped file data and converts it to be correctly typed for use by canvas
//then adds data to the points to scan
OConceptAnimate.prototype.convertFileDataToUsableImagePoints = function(data){
    return new Promise((resolve, reject) => {
        var points = [];
        for(var i = 0; i < data.length; i++){
            var item = data[i];
            var itemData = item.pixelData.data
            var clampedArray = new Uint8ClampedArray(4);
            clampedArray[0] = itemData[0];
            clampedArray[1] = itemData[1];
            clampedArray[2] = itemData[2];
            clampedArray[3] = itemData[3];
            var imgData = new ImageData(clampedArray, 1, 1);
            points.push({x: item.x, y: item.y, pixelData : imgData})
        }
        resolve(points);
    });
}

function resizeCanvas(widthPercent, heightPercent) {
    var myCanvas = document.getElementsByClassName(ImageUniqueName)[0];
        myCanvas.width = myCanvas.width * widthPercent;
        myCanvas.height = myCanvas.height * heightPercent;
  }

//trims transparent space from canvas
function trimCanvas(c) {
    var ctx = c.getContext('2d'),
        copy = document.createElement('canvas').getContext('2d'),
        pixels = ctx.getImageData(0, 0, c.width, c.height),
        l = pixels.data.length,
        i,
        bound = {
            top: null,
            left: null,
            right: null,
            bottom: null
        },
        x, y;
    
    // Iterate over every pixel to find the highest
    // and where it ends on every axis ()
    for (i = 0; i < l; i += 4) {
        if (pixels.data[i + 3] !== 0) {
            x = (i / 4) % c.width;
            y = ~~((i / 4) / c.width);

            if (bound.top === null) {
                bound.top = y;
            }

            if (bound.left === null) {
                bound.left = x;
            } else if (x < bound.left) {
                bound.left = x;
            }

            if (bound.right === null) {
                bound.right = x;
            } else if (bound.right < x) {
                bound.right = x;
            }

            if (bound.bottom === null) {
                bound.bottom = y;
            } else if (bound.bottom < y) {
                bound.bottom = y;
            }
        }
    }
    
    // Calculate the height and width of the content
    var trimHeight = bound.bottom - bound.top,
        trimWidth = bound.right - bound.left,
        trimmed = ctx.getImageData(bound.left, bound.top, trimWidth, trimHeight);

    copy.canvas.width = trimWidth;
    copy.canvas.height = trimHeight;
    copy.putImageData(trimmed, 0, 0);

    // Return trimmed canvas
    return copy.canvas;
}

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 
// requestAnimationFrame polyfill by Erik Möller
// fixes from Paul Irish and Tino Zijdel
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

function imgCreate(src, alt, title) {
    var img = new Image(); //document.createElement('img');
    img.src = src;
    if ( alt != null ) img.alt = alt;
    if ( title != null ) img.title = title;
    return img;
}

return OConceptAnimate;
})();