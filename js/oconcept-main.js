"use strict";

//Page load
$(window).on("load", function () {
    main();
    registerEvents();
});

async function main() {

    //Start preloading video
    addVideoChannels();

    //Animate TV
    await animateOldTv();

    //Show channel display after TV done
    $(".channeldisplay").show();

    //Make request to fill tv reflection with user video
    getUserVideo();

    //Show the remote
    $(".tvremotecontainer").show();


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
            "images/oldtvfull1.png",
            "oldtvcontainer",
            data,
            10000,
            "all",
            "righttolefttop");

        var animateVariables = await tv.animateImage();
        //After animate prepare canvas to switch out image
        animateVariables.context.clearRect(0, 0, animateVariables.image.width, animateVariables.image.height);

        //Switch out image to tv without screen
        var noscreenImage = new Image(animateVariables.image.width, animateVariables.image.height)
        noscreenImage.onload = () => {animateVariables.context.drawImage(noscreenImage, 0, 0, noscreenImage.width, noscreenImage.height); }
        noscreenImage.src = "images/oldtvnoscreen1.png";

        
        //show channels
        $(".channelvideocontainer").show();
        resolve();
    });

}

var currentChannel = null;

function addVideoChannels() {
    //get video channel container
    var videoContainer = $(".channelvideocontainer");

    //get channel object
    var channels = new OConceptChannelVideos();

    //set default current channel
    currentChannel = channels.Videos[0];

    //create video html elements for channels
    for (let index = 0; index < channels.Videos.length; index++) {
        const video = channels.Videos[index];

        //Concat class string
        var cssClassStr = "";
        for (let c = 0; c < video.cssClasses.length; c++) {
            cssClassStr += video.cssClasses[c] + " ";
        }

        var vidHtml = "<video id='" + video.videoName + "' class='" + cssClassStr.trim() + "'></video>";
        
        //Append video to DOM
        videoContainer.append(vidHtml);
        
        //Preload video for quick play
        preloadVideo(video.videoUrl, video.videoName, video.loop);
    }
}

function preloadVideo(vidUrl, videoName, videoLoop) {
    //get video element
    var video = document.getElementById(videoName);

    //Set all event handlers on video 
    setVideoEvents(videoName, video);
    
    //Preload video 
    fetch(vidUrl)
        .then(function (response) {
            response.blob().then(function(videoBlob) {
                var vid = URL.createObjectURL(videoBlob); // IE10+
                // Video is now downloaded
                // and we can set it as source on the video element
                video.src = vid;
                video.loop = videoLoop; //set looping 
              });

        })
        .catch(function (err) {
            console.log("Something went wrong!", err);
        });

}

//Accesses user camera to show reflection on tv
function getUserVideo() {

    // Grab elements, create settings, etc.
    var video = document.getElementById('usertvscreen');

    // Get access to the camera!
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Not adding `{ audio: true }` since we only want video now
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                //video.src = window.URL.createObjectURL(stream);
                video.srcObject = stream;
                video.play();
                $("#usertvscreen").show();
                $(".oldtvscreen").hide();
            })
            .catch((err) => console.log("Access user camera : " + err.message));;
    }

}

function goToNextChannel() {

    //Pause current channel
    var currentChannelVideo = $("#" + currentChannel.videoName);
    currentChannelVideo.trigger("pause");
    currentChannelVideo.hide();

    if (!($("#statictv").is(":visible")))
        showStatic();

    //Find next channel
    var channels = new OConceptChannelVideos().Videos;
    var nextChannel;
    var nextChannels = channels.filter(function (c) {
        return c.channelNumber == currentChannel.channelNumber + 1;
    })
    if (nextChannels.length > 0)
        nextChannel = nextChannels[0];
    else
        nextChannel = channels[0]; // if no next channel, go back to channel 00

    //Play next channel video
    if (nextChannel.channelNumber > 0) {
        var nextChannelVideo = $("#" + nextChannel.videoName);
        nextChannelVideo.trigger("play");
        nextChannelVideo.show();
        hideStatic();
    }

    //Set channel display to next channel
    $(".channeldisplay").text(nextChannel.channel);

    //Update current channel
    currentChannel = nextChannel;

}

function goToLastChannel() {

    //Pause current channel
    var currentChannelVideo = $("#" + currentChannel.videoName);
    currentChannelVideo.trigger("pause");
    currentChannelVideo.hide();

    if (!($("#statictv").is(":visible")))
        showStatic();

    //Find next channel
    var channels = new OConceptChannelVideos().Videos;
    var nextChannel;
    var nextChannels = channels.filter(function (c) {
        return c.channelNumber == currentChannel.channelNumber - 1;
    })
    if (nextChannels.length > 0)
        nextChannel = nextChannels[0];
    else
        nextChannel = channels[channels.length - 3]; // if no last channel, go back to top channel

    //Play next channel video
    if (nextChannel.channelNumber > 0) {
        var nextChannelVideo = $("#" + nextChannel.videoName);
        nextChannelVideo.trigger("play");
        nextChannelVideo.show();
        hideStatic();
    }
    //Set channel display to next channel
    $(".channeldisplay").text(nextChannel.channel);

    //Update current channel
    currentChannel = nextChannel;

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
function registerEvents() {
    $("#buttononoff").on("click", function (e) {
        e.preventDefault();
        //Turn on
        if (!($("#statictv").is(":visible")) && !($(".channelvideo").is(":visible")) ) {
            $("#TVTurningOn").show();
            document.getElementById("TVTurningOn").play().catch((err) => console.log(err.message));
        }
        else { //Turn off
            // if(!($("#usertvscreen").is(":visible")))
            //      $(".oldtvscreen").show();
            $(".channelvideo").trigger("pause");
            $(".channelvideo").hide();
            $("#TVTurningOff").show();
            hideStatic();
            document.getElementById("TVTurningOff").play().catch((err) => console.log(err.message));
        }
    });

    //Channel up event
    $("#buttonchannelup").on("click", function (e) {
        e.preventDefault();
        goToNextChannel();
    })

    //Channel down event
    $("#buttonchanneldown").on("click", function (e) {
        e.preventDefault();
        goToLastChannel();
    })

    //Full screen event
    $("#buttonfullscreen").on("click", function (e) {
        e.preventDefault();
        if((window.fullScreen) ||
         (window.innerWidth == screen.width && window.innerHeight == screen.height)) 
            closeFullscreen();
         else {
            var video = document.getElementById(currentChannel.videoName);
            openFullscreen(video);
        }
    })

    $(".sound").on("click", function (e) {
        e.preventDefault();
        $(".sound > .yes").toggle();
        $(".sound > .no").toggle();

        if ($(".sound > .yes").is(":visible")) {
            audio = new Audio('audio/CleverSkipper.mp3');
            audio.loop = true;
            audio.play().catch((err) => console.log(err.message));
        }
        else {
            audio.pause().catch((err) => console.log(err.message));
        }
    });
}

function setVideoEvents(videoName, video) {
    //video clip tv turning on events
    if (videoName == "TVTurningOn") {
        video.onended = function (e) {
            $("#TVTurningOn").hide();
            showStatic();
            $(".channeldisplay").text("00");
        };
    }
    //video clip tv turning off events
    if (videoName == "TVTurningOff") {
        video.onended = function (e) {
            $("#TVTurningOff").hide();
            $(".channeldisplay").text("");
        };
    }

}

/* When the openFullscreen() function is executed, open the video in fullscreen.
Note that we must include prefixes for different browsers, as they don't support the requestFullscreen method yet */
function openFullscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
  }
function showStatic() {
    STATIC = true;
    //display static canvas to provide width
    $("#statictv").show();
    //turn on static
    startStatic();

}

function hideStatic() {
    STATIC = false;
    window.onresize = null;
    $("#statictv").hide();
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