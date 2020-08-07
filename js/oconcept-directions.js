"use strict";

var currentObject;
var isMobile = false;
var OConceptDirections = function(isMobile) {
    currentObject = this;
    isMobile = isMobile;
}

OConceptDirections.prototype.Directions = [{
        number: 1,
        name: "TurnOn",
        header: "You can use the remote!",
        text: "Click the OFF/ON button to turn the TV on.",
        desktopleft: "638px",
        desktopbottom: "625px",
        mobileleft: "205px",
        mobilebottom: "220px"
    },
    {
        number: 2,
        name: "ChannelUp",
        header: "Change the channel",
        text: "You can click a number, or channel up to choose a channel",
        desktopleft: "666px",
        desktopbottom: "635px",
        mobileleft: "222px",
        mobilebottom: "200px"
    },
    {
        number: 3,
        name: "MoreInfo",
        header: "Get more info",
        text: "Click 'DIAL' to learn more about the channel topic as you watch.",
        desktopleft: "635px",
        desktopbottom: "550px",
        mobileleft: "185px",
        mobilebottom: "105px"
    },
    {
        number: 4,
        name: "MoreButtons",
        header: "Other buttons too!",
        text: "Go fullscreen, check the credits, etc. Try all the buttons!",
        mobiletext: "Click around, check the credits, etc. Try all the buttons!",
        desktopleft: "685px",
        desktopbottom: "565px",
        mobileleft: "220px",
        mobilebottom: "162px"
    }
]
var currentDirection = 0;

OConceptDirections.prototype.showNextDirection = function() {
    currentObject.hideDirection();
    var direction = currentObject.Directions[currentDirection];
    var fragment = document.getElementById("directions-template").content.cloneNode(true);
    var directionElement = fragment.querySelectorAll(".directions-container")[0];
    directionElement.querySelector(".directions-header").innerText = direction.header;
    directionElement.querySelector(".directions-text").innerText = direction.text;

    if (isMobile) {
        directionElement.style.bottom = direction.mobilebottom;
        directionElement.style.left = direction.mobileleft;
        if (direction.mobiletext) {
            directionElement.querySelector(".directions-text").innerText = direction.mobiletext;
        }
    } else {
        directionElement.style.bottom = direction.desktopbottom;
        directionElement.style.left = direction.desktopleft;
    }

    document.getElementsByClassName("main")[0].append(directionElement);
    document.querySelector(".directions-container").classList.add("direction-show");
    currentDirection++;
}


OConceptDirections.prototype.hideDirection = function() {
    if (document.querySelector(".directions-container"))
        document.querySelector(".directions-container").remove();
}