// Pointværdier for hver række
const points = [100, 200, 300, 400, 666];

// Kategorier
const categories = ["Krig og Konflikt", "Tallet bag sangen", "Stort Band Lille Sang", "Royal Titel", "Booze"];

// Spotify-links + rigtige svar
const songs = {
  "Tallet bag sangen": [
    { spotify: "https://open.spotify.com/embed/track/2SrVGpjv0mqCR6j9EZPSm2", answer: "[2] minutes to midnight)" },
    { spotify: "https://open.spotify.com/embed/track/2azjvC3naXAE7O7VM1jjLR", answer: "Det var i [1949] - og [16] år - Jutlandia fra 1986" },
    { spotify: "https://open.spotify.com/embed/track/6b6uLZsoGhObYexIxnRbIb", answer: "Hangar [18]" },
    { spotify: "https://open.spotify.com/embed/track/75t7W9LYbkgbkeT6B5EoHM", answer: "[99] ways to die" },
    { spotify: "https://open.spotify.com/embed/track/5ohfpKB5tt275f4Y4lQ9F7", answer: "[400.000] more to die" },    
  ],

  "Stort Band Lille Sang": [
    { spotify: "https://open.spotify.com/embed/track/14k511GlTtiybELsNoEZLq", answer: "Boa - Volbeat, 2007, 500.000 afspilninger" },
    { spotify: "https://open.spotify.com/embed/track/3BtHClmMmURD8UHF2fiyxt", answer: "Nirvana - Sliver (Incesticide, 1992), 97 mio. afspilninger" },
    { spotify: "https://open.spotify.com/embed/track/09VNOLsjKwQasQXhsS8sRA", answer: "The Judas Kiss - Metallica (2008, Death Magnetic), 15 mio. afspilninger" },
    { spotify: "https://open.spotify.com/embed/track/7fzM3CmIXKgPvbiV1YYP4H", answer: "Escape from Reality - Judas Prist fra 2024, 1 mio. afspilninger" },
    { spotify: "https://open.spotify.com/embed/track/1RyhDBcbj7W46251Xr5mDC", answer: "Playing With Dolls - Slayer, 2.6 mio. afspilninger" }
  ],

  "Royal Titel": [
    { spotify: "https://open.spotify.com/embed/track/3z8h0TU7ReDPLIbEnYhWZb", answer: "[Queen] - Bohemian" },
    { spotify: "https://open.spotify.com/embed/track/1nGUPxgKc1wmWfi8OkCCic", answer: "[King] Diamond - Abigail" },
    { spotify: "https://open.spotify.com/embed/track/4zQDbahu9jdsTPyxdnYRPw", answer: "The [Prince] (Metallica)" },
    { spotify: "https://open.spotify.com/embed/track/3PtaFRuHFIlF6ZcMVE4lF8", answer: "Accept - [Princess] of the dawn" },
    { spotify: "https://open.spotify.com/embed/track/7JqnJNDSk4zO2hUfSfTXFk", answer: "[Prince] of Darkness - Alice Cooper" }
  ],

  "Booze": [
    { spotify: "https://open.spotify.com/embed/track/2k6dU3c2IBotzynOyevHJx", answer: "Korpiklaani - [Vodka]" }, 
    { spotify: "https://open.spotify.com/embed/track/2R6UrJ8uWbSIiHWmvRQvN8", answer: "[Whiskey] in the jar - Metallica" },
    { spotify: "https://open.spotify.com/embed/track/5gJKsGij5oGt5H5RSFYXPa", answer: "The Champs - [Tequila]" },
    { spotify: "https://open.spotify.com/embed/track/70C4NyhjD5OZUMzvWZ3njJ", answer: "Billy Joel - Piano Man ... making love to his tonic and [Gin]" },
    { spotify: "https://open.spotify.com/embed/track/6ypKaenmVXMCXvlkfYOpjf", answer: "Amon Amarth - Raise Your Horns [Beer]" }
  ],

/*
  "Lars": [
    { spotify: "https://open.spotify.com/embed/track/2FRnf9qhLbvw8fu4IBXx78", answer: "Lars Christmas" },
    { spotify: "https://open.spotify.com/embed/track/6RqEJvpEzzlwj8g0wKG1ln", answer: "Lars Ulrich - Motorbreath" },
    { spotify: "https://open.spotify.com/embed/track/3rZc5CYtjdxMGtb2zC5ovp", answer: "Lars Lilholt - Den hvide dværg" },
    { spotify: "https://open.spotify.com/embed/track/55xW8Cmahhwz0z9MBRWtXV", answer: "Kim [Lars]en - Rabalderstræde" },
    { spotify: "https://open.spotify.com/embed/track/5fIZDuxfuM4tANRHZ8Btju", answer: "The [Lars] In Line, Dio" }
  ],
*/

  "Krig og Konflikt": [
    { spotify: "https://open.spotify.com/embed/track/5ohfpKB5tt275f4Y4lQ9F7", answer: "Angel of Death - 2. verdenskrig" },
    { spotify: "https://open.spotify.com/embed/track/3ovjw5HZZv43SxTwApooCM", answer: "Wind of change - Den kolde krig" },
    { spotify: "https://open.spotify.com/embed/track/2dXsILW8gzkosqleHAvl0v", answer: "Den spanske borgerkrig (1936-1939)" },
    { spotify: "https://open.spotify.com/embed/track/5ppRGoTTMfQtFcmeZqwaAK", answer: "Protestsang mod Vietnamkrigen - Fortunate" },
    { spotify: "https://open.spotify.com/embed/track/4OROzZUy6gOWN4UGQVaZMF", answer: "Slaget ved Balaklava, Krimkrigen (1854) - (Eng/Frankrig/Tyrk/Sovjet)" }
  ]
};
