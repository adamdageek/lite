function getRandomGreeting() {
  var greetings = [
    "Beep boop! Are you a robot?",
    "Did you know you're a real person?",
    "How many sides does a circle have?",
    "You can read btw",
    "Made you look!",
    "Redbull gives you wings...",
    "Since 2023!",
    "As seen on TV!",
    "doot doot",
    "Cold as ice!",
    "Made in the UK!",
    "Made by Adam!",
    "Reload the page NOW!",
    "Downloading your passwords...",
    "Running Arcade.exe",
    "WARNING: You may lose braincells if you proceed!",
    "Do you bite your ice cream?",
    "Created using ThinkPad",
    "Big Corpo is cringe",
    "You got games on your phone?",
    "Powered by hamsters!",
    "*insert cool explosion*",
    "Got to go fast!",
    "My iPad passcode is 563543 btw",
    "Sponsered by RAID SHADOW LEGENDS!",
    "Sponsored by Honey!",
    "Sponsored by Adam!",
    "Adam is cool",
    "Bezos is a bozo",
    "Powered by 128 Gigs of RAM!",
    "Powered by 16MB of RAM!",
    "I'm Slim Shady, yes, I'm the real Shady",
    "You're a real jerk!",
    "w h a t",
    "Adam's Arcade is here!",
    "what the dog doin?",
    "Do I look like him?",
    "Shoutout to 4chan!",
    "thx stackoverflow!",
    "are you a gaemer?",
    "It is time to get funky!",
    "We didn't start the fire! It was always burning, since the world's been turning!",
    "Don't ask questions if you can't handle the answers!",
    "If you are using Microsoft Edge, you need some help.",
    "Living in Spain without the S",
    "Shoutout to Github!",
    "Shoutout to The Bubble!",
    "Woo! /g/",
    "Limited Edition",
    "Awesome!",
    "Please stop posting furry images.",
    "Is this the British Airlines costumer service center?",
    "POV that one person who's 2 braincells are fighting for second place.",
    "bottem text",
    "Why do they call it oven if you oven the cold food of out hot eat the food",
    "No fun allowed",
    "Your toes will be pulled tonight",
    "i do love buying birth certificates from the black market! - Piplup",
    "'If you are trash go play Fortnite you loser' - Sun Tzu, Art of war",
    "Echo is not a furry I swear",
    "i wanted free vbucks :(",
    "Avocados \ud83e\udd51 from Mexico \ud83c\uddf2\ud83c\uddfd",
    "reload for another message",
    "It's finished!",
    "He stomped on his fruit loops and thus became a cereal killer.",
    "Techonoblade never dies!",
    "And just to think I knew him before he was famous",
    "Trust me, I did not copy Minecraft with this",
    "It is everyday bro",
    "That proves you are unusual",
    "What's my age again?",
    "This is the 5th time this week, and it's only Monday",
    "Play games",
    "Roblox? Cringe!",
    "Toss the Turtle is pretty fun",
    "Mission failed, we will get them next time",
    "NUKE INCOMING!",
    "I spent too much time making these",
  ];
  var randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

document.getElementById("subtitle").innerText = getRandomGreeting();
