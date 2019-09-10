"use strict";

//Page load
$(window).on("load", function () {
    main();
    registerEvents();
});

async function main() {

    addVideoChannels();

    await animateOldTv();

    getUserVideo();

    // var phrase = "Let me tell you a story";
    // await animatePhrase(phrase);
}

async function animateOldTv() {
    return new Promise(async (resolve, reject) => {
        var url = "datafiles/oldtv.json";
        var data;
        if (checkUrl(url)) {

            //Load image data from files
            data = await $.getJSON(url, { format: "json" });
            console.log("DATA FILE PATH PROCESSED : " + url + " Length: " + data.length);
        }

        var tv = new OConceptAnimate(
            "oldtv",
            [],
            "images/oldtvphoto1.png",
            "oldtvcontainer",
            data,
            10000,
            "all",
            "righttolefttop");

        await tv.animateImage();
        $(".channelVideoContainer").show();
        resolve();
    });

}

function addVideoChannels() {
    var videoContainer = $(".channelVideoContainer");
    var channels = new OConceptChannelVideos();
    for (let index = 0; index < channels.Videos.length; index++) {
        const video = channels.Videos[index];
        var vidHtml = "<video id='" + video.videoName + "' class='channelVideo' src='"+video.videoUrl+"'></video>";
        videoContainer.append(vidHtml);
        //preloadVideo(video.videoUrl, video.videoName);
    }
}

function preloadVideo(vidUrl, videoName) {
    var video = document.getElementById("#" + videoName);

    var req = new XMLHttpRequest();
    req.open('GET', vidUrl, true);
    req.responseType = 'blob';

    req.onload = function () {
        // Onload is triggered even on 404
        // so we need to check the status code
        if (this.status === 200) {
            var videoBlob = this.response;
            var vid = URL.createObjectURL(videoBlob); // IE10+
            // Video is now downloaded
            // and we can set it as source on the video element
            video.src = vid;
        }
    }
    req.onerror = function (err) {
        console.log(err.message);
    }
    
}

function getUserVideo(){

    // Grab elements, create settings, etc.
    var video = document.getElementById('usertvscreen');

        // Get access to the camera!
        if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            // Not adding `{ audio: true }` since we only want video now
            navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
                //video.src = window.URL.createObjectURL(stream);
                video.srcObject = stream;
                video.play();
                $("#usertvscreen").show();
                $(".oldtvscreen").hide();
            });
        }
           
}

async function animatePhrase(phrase) {
    return new Promise(async (resolve, reject) => {
        var ocLetters = new OConnceptAnimateLetters();
        var phraseCharactersToAnimate = [];

        phrase = phrase.trim();
        var words = [];
        for (var i = 0; i < phrase.length; i++) {
            var c = phrase.charAt(i);
            if (c != " ") {
                var characterInfo = Object.create(ocLetters.Ryan.filter(function (l) { return l.character == c })[0]);
                console.log("START : " + characterInfo.character);

                characterInfo.containerClass = "word" + words.length.toString();

                //build path segment to paths related to this letter
                var pathSegment;
                if (characterInfo.type == "letter") {
                    if (characterInfo.case == "upper") {
                        pathSegment = "/letters" + ocLetters.RyanPath + "uppercase_" + characterInfo.character.toLowerCase();
                        characterInfo.fileNamePrefix = "uppercase_" + characterInfo.character.toLowerCase();
                    }
                    else {
                        pathSegment = "/letters" + ocLetters.RyanPath + characterInfo.character.toLowerCase();
                        characterInfo.fileNamePrefix = characterInfo.character.toLowerCase();
                    }
                }
                characterInfo.imageFilePath = "images" + pathSegment + ".png";
                characterInfo.preprocessedPath = "datafiles" + pathSegment + ".json";

                //check if preprocessed file exists, if so, use that data
                characterInfo.data = null;
                if (checkUrl(characterInfo.preprocessedPath)) {

                    //Load image data from files
                    characterInfo.data = await $.getJSON(characterInfo.preprocessedPath, { format: "json" });
                    //characterInfo.data = await new OConceptAnimate().convertFileDataToUsableImagePoints(data);
                    console.log("DATA FILE PATH PROCESSED : " + characterInfo.preprocessedPath + " Length: " + characterInfo.data.length);
                }

                phraseCharactersToAnimate.push(characterInfo);
            }
            else {
                words.push("word" + words.length.toString());
            }
        }

        words.push("word" + words.length.toString());
        //add containers for each word
        for (let i = 0; i < words.length; i++) {
            $(".canvascontainer").append("<div class='word " + words[i] + "'></div>");
        }

        for (var i = 0; i < phraseCharactersToAnimate.length; i++) {
            var characterToAnimate = phraseCharactersToAnimate[i];
            var letter = new OConceptAnimate(
                characterToAnimate.fileNamePrefix + i.toString(),
                ["letter", characterToAnimate.fileNamePrefix],
                characterToAnimate.imageFilePath,
                characterToAnimate.containerClass,
                characterToAnimate.data,
                10000,
                characterToAnimate.animateScanDirection,
                characterToAnimate.animateStartDirection);

            await letter.animateImage();
            console.log("FINISHED : " + characterToAnimate.character);
        }
        resolve();
    });
}
var audio;
function registerEvents(){
    $(".sound").on("click", function(){
        $(".sound > .yes").toggle();
        $(".sound > .no").toggle();
    
        if($(".sound > .yes").is(":visible")){
            audio = new Audio('audio/CleverSkipper.mp3');
            audio.loop = true;
            audio.play().catch((err) => console.log(err.message));
        }
        else{
            audio.pause().catch((err) => console.log(err.message));
        }
    });
}

function checkUrl(url) {
    var http = $.ajax({
        type: "HEAD",
        url: url,
        async: false
    })
    return http.status == 200;
    // this will return 200 on success, and 0 or negative value on error
}

