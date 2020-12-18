//META{"name":"TwitchCord"}*//

class TwitchCord {
    
    // constants which will be defined at load
    PARENT_TWITCH_BUTTON_CLASS;

    getName() {return "TwitchCord";}
    getShortName() {return "TwitchCord";}
    getDescription() {return "A client side plugin for BetterDiscord that enables watching twitch streams via the discord app.";}
    getVersion() {return "0.0.1";}
    getAuthor() {return "katznboyz";}

    constructor() {
        this.initialized = false;
    }

    initialize() {
        this.initialized = true;
        PluginUtilities.showToast(getName() + " v" + this.getVersion() + " started.");
    }

    onSwitch() {
        console.log('TWITCHCORD DEBUG: switched');
    }

    start() {
        this.PARENT_TWITCH_BUTTON_CLASS = document.getElementsByClassName('content-3YMskv')[0]; // the div that has the friends and nitro and direct message buttons

        // make a copy of the friends button (the second element in this div) and change the text and function to be a button that opens the twitch page
        // by using a copy of the friends button it inherits all of the styling and the chances of this working for longer are higher
        let twitchButton = this.PARENT_TWITCH_BUTTON_CLASS.children[1].cloneNode(true); 
        twitchButton.href = 'https://www.google.com'; // tmp redirect just to make sure that this works
        twitchButton.getElementsByClassName('name-uJV0GL')[0].innerHTML = 'Twitch'; // edit the text of the button
        twitchButton.getElementsByClassName('linkButtonIcon-Mlm5d6')[0]; // the svg on the button
        this.PARENT_TWITCH_BUTTON_CLASS.insertBefore(twitchButton, this.PARENT_TWITCH_BUTTON_CLASS.children[3]);
    }

    stop() {
        // TODO
    }
}