import { createContext, useState } from "react";
import { songsData as initialSongs } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    // Global Songs State (Editable)
    const [songs, setSongs] = useState(initialSongs);

    // Player State
    const [track, setTrack] = useState(initialSongs[0]);
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState({ currentTime: { second: 0, minute: 0 }, totalTime: { second: 0, minute: 0 } });

    // Playlist State
    const [playlists, setPlaylists] = useState([]);

    const play = () => { setPlayStatus(true); }
    const pause = () => { setPlayStatus(false); }

    const playWithId = async (id) => {
        const song = songs.find(item => item.id === id); // Use state songs
        if (song) {
            setTrack(song);
            setPlayStatus(true);
        }
    }

    // --- Song Management ---
    const addNewSong = (songData) => {
        const newSong = {
            ...songData,
            id: songs.length + 1, // Simple ID generation
            duration: songData.duration || "3:00"
        };
        setSongs([...songs, newSong]);
    }

    const previous = async () => { /* ... */ }
    const next = async () => { /* ... */ }

    // --- Playlist Logic ---
    const createPlaylist = () => {
        const newId = `user-${Date.now()}`;
        const newPlaylist = {
            id: newId,
            name: `My Playlist #${playlists.length + 1}`,
            desc: "Add a description",
            image: null,
            songs: []
        };
        setPlaylists([...playlists, newPlaylist]);
        return newId;
    }

    const deletePlaylist = (id) => {
        setPlaylists(playlists.filter(pl => pl.id !== id));
    }

    const updatePlaylistDetails = (id, newName, newDesc, newImage) => {
        setPlaylists(playlists.map(pl =>
            pl.id === id ? { ...pl, name: newName, desc: newDesc, image: newImage } : pl
        ));
    }

    const addSongToPlaylist = (playlistId, song) => {
        setPlaylists(playlists.map(pl => {
            if (pl.id === playlistId) {
                if (pl.songs.find(s => s.id === song.id)) return pl;
                return { ...pl, songs: [...pl.songs, song] };
            }
            return pl;
        }));
    }

    const removeSongFromPlaylist = (playlistId, songId) => {
        setPlaylists(playlists.map(pl =>
            pl.id === playlistId ? { ...pl, songs: pl.songs.filter(s => s.id !== songId) } : pl
        ));
    }

    const contextValue = {
        songs, // Expose songs state
        addNewSong,
        track, setTrack,
        playStatus, setPlayStatus,
        time, setTime,
        play, pause,
        playWithId, previous, next,
        playlists, createPlaylist, deletePlaylist, updatePlaylistDetails, addSongToPlaylist, removeSongFromPlaylist
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;
