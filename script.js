const lyrics = [
    // the b52s
    "She came from Planet Claire",
    "It wasn't a rock",
    "Here comes a stingray",
    "Watch out for that piranha",
    "I'm not no Limburger",
    "Can you name 'em today?",
    "Red-hot lava",
    "There's a moon in the sky",
    "It's called the moon",
    "Your number's been disconnected",
    "Downtown",
    // wild planet
    "Wild Planet",
    "A dog dyed dark green",
    "Reckless drivin', like a sports car",
    "Get out of the state you're in",
    "I'll give you fish",
    "I'll give you everything I have in my hand",
    "Where's your icebox?",
    "Ew, house-a-tosis",
    "I don't need no batteries",
    "Quiche lorraine",
    "Everything I see is red",
    "53 miles west of Venus",
    // mesopotamia
    "We'll meet in Mesopotamia",
    "I'll meet you by the third pyramid",
    "I should read a book",
    "According to my recipe, you put it on a slow bake",
    "I can't wait to put the icing on the cake",
    "Toss that beat",
    // whammy!
    "Whammy!",
    "Stocked it full of jelly jars",
    "We're in the basement",
    "Let's meet and have a baby now",
    "Hey, I'm Fred the Cancerian from New Jersey",
    "Hello, I'm Cindy, I'm a Pisces",
    "Hi, my name is Ricky and I'm a Pisces",
    "Hey, I'm Kate and I am a Taurus",
    "Hey, my name is Keith and I'm a Scorpio from Athens, GA",
    "Pick 'em, hull 'em, put on the steam",
    "Butterbean!",
    "On Planet X",
    "Throw me that whammy",
    "This is the space age",
    "Wants to use me to feather its nest",
    // bouncing off the satellites
    "Bouncing Off the Satellites",
    "Orange popsicles and lemonade",
    "I see no clouds ahead",
    "Girl from Ipanema, she goes to Greenland",
    "What's that on your head?",
    "On the neon side of town",
    "Work it like a washer machine",
    "We know a place where we are free",
    "She knows where the rain goes",
    // cosmic thing
    "Cosmic Thing",
    "Shake it 'til the butter melts",
    "Like someone gave you a wild goose",
    "A freight train with a loose caboose",
    "Just sit on the porch and swing",
    "We belong to the deadbeat club",
    "We'll dance in the garden in torn sheets in the rain",
    "You're what?",
    "The mouth of the river is laughing at us",
    "Take it hip to hip, rocket through the wilderness",
    "Roam if you want to",
    "Getting nothing but static",
    "Our hearts are traveling faster",
    // good stuff
    "Good Stuff",
    "Tell it like it T-I-is",
    "Revolution Earth",
    "I'm spinnin' to the rhythm of the earth",
    "Hear the hills scrape the sky",
    "Last night I dreamed I had burning hands",
    "Don't shatter the vision",
    "Marchin' down the railroad tracks",
    "I can't wait 'til the twelfth of never",
    "I don't need a reason",
    "It's me, Mo-Dean",
    "Astral projector",
    // time capsule
    "The vortex spits me out",
    "Take it a little bit higher",
    // funplex
    "Electric luau",
    "Turn to jelly",
    "Broke my heart at the Funplex",
    "Hippy be quiet!",
    "I'm your daytime waitress at the taco tiki hut",
    "Pink lady with a blue smile",
    "It's a pink helicopter",
    "Livin' on the periphery",
    "Who knows when it wraps around your brain"
];

document.getElementById("textbox").value = lyrics[Math.floor(Math.random() * lyrics.length)];

document.getElementById("downloadBtn").addEventListener("click", () => {
    if (window.va && typeof window.va.track === "function") {
        window.va("track", "download_font_click");
        console.log("Success: download button clicked");
    } else {
        console.log("Error: Vercel analytics not loaded");
    }
});