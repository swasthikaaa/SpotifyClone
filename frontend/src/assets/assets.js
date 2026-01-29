import album1 from './album1.png';
import album2 from './album2.png';
import album3 from './album3.png';
import profile from './profile.png';
import premium_bg from './premium_bg.png';

export const assets = {
    album1,
    album2,
    album3,
    profile,
    premium_bg,
    search_icon: "https://cdn-icons-png.flaticon.com/512/54/54481.png" // Placeholder if needed
}

export const albumsData = [
    { id: 1, name: "Synthesis Night", desc: "Digital dreams and neon waves", image: album1, category: "English" },
    { id: 2, name: "Neon Graves", desc: "Dark future cyberpunk beats", image: album2, category: "English" },
    { id: 3, name: "Lofi Chill", desc: "Relaxing beats for coding", image: album3, category: "Instrumental" },
    { id: 4, name: "Tamil Hits 2024", desc: "Latest Kollywood chartbusters", image: album1, category: "Tamil" },
    { id: 5, name: "Bollywood Butter", desc: "Smooth Hindi romantic hits", image: album2, category: "Hindi" },
    { id: 6, name: "Global Top 50", desc: "World's most played tracks", image: album1, category: "English" },
    { id: 7, name: "Rahman Rewind", desc: "Best of A.R. Rahman", image: album3, category: "Tamil" },
    { id: 8, name: "Arijit Singh Best", desc: "Soulful melodies", image: album2, category: "Hindi" },
]

export const songsData = [
    { id: 1, name: "Voidwalker", artist: "Neon Graves", album: "Neon Graves", image: album2, duration: "3:45", category: "English", url: "" },
    { id: 2, name: "Night Wave", artist: "Synthesis", album: "Synthesis Night", image: album1, duration: "2:20", category: "English", url: "" },
    { id: 3, name: "Rainy Day", artist: "Lofi Beats", album: "Lofi Chill", image: album3, duration: "4:10", category: "Instrumental", url: "" },
    { id: 4, name: "Hukum", artist: "Anirudh Ravichander", album: "Jailer", image: album1, duration: "3:27", category: "Tamil", url: "" },
    { id: 5, name: "Naa Ready", artist: "Vijay, Anirudh", album: "Leo", image: album2, duration: "4:08", category: "Tamil", url: "" },
    { id: 6, name: "Chaleya", artist: "Arijit Singh", album: "Jawan", image: album3, duration: "3:20", category: "Hindi", url: "" },
    { id: 7, name: "Heeriye", artist: "Jasleen Royal", album: "Heeriye", image: album1, duration: "3:14", category: "Hindi", url: "" },
    { id: 8, name: "Blinding Lights", artist: "The Weeknd", album: "After Hours", image: album2, duration: "3:20", category: "English", url: "" },
    { id: 9, name: "Marakkuma Nenjam", artist: "A.R. Rahman", album: "VTK", image: album3, duration: "4:30", category: "Tamil", url: "" },
    { id: 10, name: "Tum Hi Ho", artist: "Arijit Singh", album: "Aashiqui 2", image: album1, duration: "4:22", category: "Hindi", url: "" },
]
