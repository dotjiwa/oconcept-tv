"use strict";

animateSquare();

    // var phrase = "Let me tell you a story";
    // animatePhrase(phrase);

    async function animateSquare(){
        var oconceptanimate = require('./node-oconcept-animate');
        var square =  oconceptanimate.processImage(
            "squaretv",
            [],
            "images/squareTV.png", 
            "squaretvcontainer",
            null,
            10000,
            "all",
            "toptobottom"); 
    
        await square.animateImage();
    
        delete square;
    }

async function animatePhrase(phrase){
  
    var ocLetters = new OConnceptAnimateLetters();
    var phraseCharactersToAnimate = [];

    phrase = phrase.trim();
    var words = [];
    for (var i = 0; i < phrase.length; i++) {
        var c = phrase.charAt(i);
        if(c != " "){
            var characterInfo = Object.create(ocLetters.Ryan.filter(function(l){return l.character == c})[0]);
            console.log("START : " + characterInfo.character);

            characterInfo.containerClass = "word" + words.length.toString();

            //build path segment to paths related to this letter
            var pathSegment;
            if(characterInfo.type == "letter"){
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
            if(checkUrl(characterInfo.preprocessedPath)){
                
                //Load image data from files
                characterInfo.data = await $.getJSON(characterInfo.preprocessedPath, {format: "json"});
                //characterInfo.data = await new OConceptAnimate().convertFileDataToUsableImagePoints(data);
                console.log("DATA FILE PATH PROCESSED : " + characterInfo.preprocessedPath + " Length: " + characterInfo.data.length);        
            }

            phraseCharactersToAnimate.push(characterInfo);
        }
        else{
            words.push("word" + words.length.toString());
        }
    }
    delete ocLetters;

    words.push("word" + words.length.toString());
    //add containers for each word
    for (let i = 0; i < words.length; i++) {
        $(".canvascontainer").append("<div class='word " + words[i] + "'></div>");
    //     if(i == 0)
    //         $(".canvascontainer").append("<div class='word " + words[i] + "'></div>");
    //     else
    //          document.getElementsByClassName(words[i - 1])[0].insertAdjacentHTML("afterend", "<div class='word " + words[i] + "'></div>");
    }
    delete words;

    for(var i = 0; i < phraseCharactersToAnimate.length; i++){
        var characterToAnimate = phraseCharactersToAnimate[i];
        var letter =  new OConceptAnimate(
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
        delete letter;
    }     
}

function checkUrl(url) {
        var http = $.ajax({
            type:"HEAD",
            url: url,
            async: false
        })
        return http.status == 200;
        // this will return 200 on success, and 0 or negative value on error
}

