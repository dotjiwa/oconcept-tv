//Type Effect class that types on the screen at a given speed
//The .phrase css class can be styled for story phrases 
class TypeEffect {
    constructor(
        containerClass,
        typeSpeed
    ) {
        this.ContainerClass = containerClass;
        this.TypeSpeed = typeSpeed;
        this.PhraseCounter = 0;
    }


    async tellStory(story) {
        return new Promise(async(resolve, reject) => {
            for (let index = 0; index < story.length; index++) {
                var phrase = story[index];
                await this.type(phrase);
            }
            resolve();
        });
    }

    async type(phrase) {
        $(this.ContainerClass).append("<div id='phrase" + this.PhraseCounter + "' class='phrase'></div>");

        if (phrase == "") {
            await timeout(this.TypeSpeed);
            this.PhraseCounter++;
            return;
        }

        for (var i = 0; i < phrase.length; i++) {

            setTimeout(function() {
                requestAnimationFrame(function() {});
            }, 1000 / fps);

            $("#phrase" + this.PhraseCounter).text($("#phrase" + this.PhraseCounter).text() + phrase[i]);
            await timeout(this.TypeSpeed);
        }
        this.PhraseCounter++;
    }

    timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}