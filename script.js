const lyrics = [
    // the b52s
    "She came from Planet Claire",
    "It wasn't a rock",
    "Watch out for that piranha",
    "I'm not no Limburger",
    "Can you name 'em today?",
    "Red-hot lava",
    "I dial stupid number all day long",
    "Your number's been disconnected",
    "Downtown",
    // wild planet
    "A dog dyed dark green",
    "Reckless drivin', like a sports car",
    "Get out of the state you're in",
    "I'll give you fish",
    "Where's your icebox?",
    "Ew, house-a-tosis",
    "I don't need no batteries",
    "Everything I see is red",
    "53 miles west of Venus",
    // mesopotamia
    "I'll meet you by the third pyramid",
    "I should read a book",
    "According to my recipe, you put it on a slow bake",
    "Lock me out",
    "Toss that beat",
    // whammy!
    "Stocked it full of jelly jars",
    "We're in the basement",
    "Let's meet and have a baby now",
    "Pick 'em, hull 'em, put on the steam",
    "On Planet X",
    "Throw me that whammy",
    "This is the space age",
    "Wants to use me to feather its nest",
    // bouncing off the satellites
    "Orange popsicles and lemonade",
    "I see no clouds ahead",
    "What's that on your head?",
    "On the neon side of town",
    "Work it like a washer machine",
    "We know a place where we are free",
    "She knows where the rain goes",
    // cosmic thing
    "Shake it 'til the butter melts",
    "Like someone gave you a wild goose",
    "A freight train with a loose caboose",
    "Just sit on the porch and swing",
    "We belong to the deadbeat club",
    "We'll dance in the garden in torn sheets in the rain",
    "You're what?",
    "The mouth of the river is laughing at us",
    "Getting nothing but static",
    "Our hearts are traveling faster",
    // good stuff
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
    "I'm your daytime waitress at the taco tiki hut",
    "Pink lady with a blue smile",
    "It's a pink helicopter",
    "Livin' on the periphery",
    "Who knows when it wraps around your brain"
];

document.getElementById("textbox").value = lyrics[Math.floor(Math.random() * lyrics.length)];

if (typeof window !== "undefined" && window.va && window.va.track) {
  window.va.track("example_flag");
}