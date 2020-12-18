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
        PluginUtilities.showToast(this.getName() + " v" + this.getVersion() + " started.");
    }

    twitchButtonExists() {
        let exists = false;
        for (let i = 0; i < this.PARENT_TWITCH_BUTTON_CLASS.children.length; i++) {
            if (this.PARENT_TWITCH_BUTTON_CLASS.children[i].id == 'twitchCordButton') {
                exists = true;
            }
        }
        return exists;
    }

    onSwitch() {
        this.PARENT_TWITCH_BUTTON_CLASS = document.getElementsByClassName('content-3YMskv')[0]; // the div that has the friends and nitro and direct message buttons
        if (location.href == 'https://discord.com/channels/@me' && !this.twitchButtonExists()) { // check if the page is the home page
            this.addTwitchButton();
        }
    }
    
    addTwitchButton() {

        // make a copy of the friends button (the second element in this div) and change the text and function to be a button that opens the twitch page
        // by using a copy of the friends button it inherits all of the styling and the chances of this working for longer are higher
        let twitchButton = this.PARENT_TWITCH_BUTTON_CLASS.children[1].cloneNode(true); 

        twitchButton.href = 'https://www.google.com'; // tmp redirect just to make sure that this works
        twitchButton.getElementsByClassName('name-uJV0GL')[0].innerHTML = 'Twitch'; // edit the text of the button
        twitchButton.classList.remove('selected-aXhQR6'); // the highlight for the button for when the button is focused

        twitchButton.id = 'twitchCordButton';

        let twitchButtonNewIcon = document.createElement('img');
        twitchButtonNewIcon.classList.add('linkButtonIcon-Mlm5d6');
        twitchButtonNewIcon.src = 'https://github.com/katznboyz1/twitchcord/raw/master/twitchlogo.png';
        twitchButton.getElementsByClassName('linkButtonIcon-Mlm5d6')[0].remove();
        twitchButton.getElementsByClassName('avatar-3uk_u9')[0].appendChild(twitchButtonNewIcon);

        this.PARENT_TWITCH_BUTTON_CLASS.insertBefore(twitchButton, this.PARENT_TWITCH_BUTTON_CLASS.children[3]);
    }

    start() {
        this.onSwitch();
    }

    stop() {
        // TODO
    }
}