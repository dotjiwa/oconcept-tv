"use strict";

//Page load
$(window).on("load", function () {

    main();
});

async function main() {
    //animateQuotesTitleGraphic();

    await animateEye();

    await animateSquare();

    var phrase = "Let me tell you a story";
    await animatePhrase(phrase);

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
            //     if(i == 0)
            //         $(".canvascontainer").append("<div class='word " + words[i] + "'></div>");
            //     else
            //          document.getElementsByClassName(words[i - 1])[0].insertAdjacentHTML("afterend", "<div class='word " + words[i] + "'></div>");
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

function checkUrl(url) {
    var http = $.ajax({
        type: "HEAD",
        url: url,
        async: false
    })
    return http.status == 200;
    // this will return 200 on success, and 0 or negative value on error
}

async function animateSquare() {
    return new Promise(async (resolve, reject) => {
        var url = "datafiles/squareTV.json";
        var data;
        if (checkUrl(url)) {

            //Load image data from files
            data = await $.getJSON(url, { format: "json" });
            console.log("DATA FILE PATH PROCESSED : " + url + " Length: " + data.length);
        }

        var square = new OConceptAnimate(
            "squaretv",
            [],
            "images/squareTV.png",
            "squaretvcontainer",
            data,
            1000,
            "all",
            "toptobottom");

        await square.animateImage();
        $(".squaretvbackground").show();
        resolve();
    });

}

async function animateEye() {
    return new Promise(async (resolve, reject) => {
        var url = "datafiles/eye.json";
        var data;
        if (checkUrl(url)) {

            //Load image data from files
            data = await $.getJSON(url, { format: "json" });
            console.log("DATA FILE PATH PROCESSED : " + url + " Length: " + data.length);
        }

        var eye = new OConceptAnimate(
            "eye",
            [],
            "images/eyeicon1-I.png",
            "canvascontainer",
            data,
            100,
            "all",
            "toptobottom");

        await eye.animateImage();
        resolve();
    });

}

async function animateQuotesTitleGraphic() {

    var url = "datafiles/quotestitlegraphic.json";
    var data;
    if (checkUrl(url)) {

        //Load image data from files
        data = await $.getJSON(url, { format: "json" });
        console.log("DATA FILE PATH PROCESSED : " + url + " Length: " + data.length);
    }

    var quotes = new OConceptAnimate(
        "quotes",
        [],
        "images/quotestitlepagedraft.jpg",
        "canvascontainer",
        data,
        1000,
        "all",
        "bottomtotop");

    await quotes.animateImage();

}

function addVideoChannels() {
    var videoContainer = $(".channelVideoContainer");
    for (let index = 0; index < OConnceptChannelVideos.Videos.length; index++) {
        const video = OConnceptChannelVideos.Videos[index];
        var vidHtml = "<video id='" + video.videoName + "' class='channelVideo' src='' controls></video>";
        videoContainer.append(vidHtml);
        preloadVideo(video.videoUrl, video.videoName);
    }
}

function preloadVideo(vidUrl, videoName) {
    var video = $("#" + videoName);

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
    req.onerror = function () {
        // Error
    }
}