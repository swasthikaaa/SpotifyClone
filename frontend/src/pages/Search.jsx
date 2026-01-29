import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import { albumsData } from '../assets/assets';
import { FiSearch } from "react-icons/fi";
import { PlayerContext } from '../context/PlayerContext'; // Import Context

const Search = () => {
    const [query, setQuery] = useState("");
    const { playWithId, songs } = useContext(PlayerContext); // Use songs from Context

    const filteredSongs = songs.filter(song =>
        song.name.toLowerCase().includes(query.toLowerCase()) ||
        song.artist.toLowerCase().includes(query.toLowerCase()) ||
        song.category.toLowerCase().includes(query.toLowerCase())
    );

    const filteredAlbums = albumsData.filter(album =>
        album.name.toLowerCase().includes(query.toLowerCase()) ||
        album.category.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <>
            <Navbar />
            <div style={{ padding: '0 20px', color: 'white' }}>

                <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#242424', padding: '12px 20px', borderRadius: '30px', marginBottom: '30px', maxWidth: '400px' }}>
                    <FiSearch size={24} color='white' style={{ marginRight: '10px' }} />
                    <input
                        type="text"
                        placeholder="What do you want to listen to?"
                        style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', color: 'white', fontSize: '16px', width: '100%' }}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>

                {/* Categories / Tags if Query is empty */}
                {query === "" && (
                    <div style={{ marginBottom: '30px' }}>
                        <h2 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Browse All</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '20px' }}>
                            {["Tamil", "Hindi", "English", "Podcasts", "Live Events", "Made For You", "New Releases", "Rock", "Pop", "Indie"].map((genre, index) => (
                                <div key={index}
                                    onClick={() => setQuery(genre)}
                                    style={{
                                        backgroundColor: ['#E91429', '#27856A', '#1E3264', '#8D67AB'][index % 4],
                                        height: '180px',
                                        borderRadius: '8px',
                                        padding: '20px',
                                        cursor: 'pointer',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                    <h3 style={{ fontSize: '24px', fontWeight: 'bold' }}>{genre}</h3>
                                    <div style={{
                                        position: 'absolute', bottom: '-10px', right: '-10px', width: '80px', height: '80px',
                                        backgroundColor: 'rgba(0,0,0,0.3)', transform: 'rotate(25deg)', borderRadius: '10px'
                                    }}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Search Results */}
                {query !== "" && (
                    <div>
                        {filteredSongs.length > 0 && (
                            <div style={{ marginBottom: '30px' }}>
                                <h2 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Songs</h2>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    {filteredSongs.map((song) => (
                                        <div key={song.id}
                                            onClick={() => playWithId(song.id)}
                                            style={{ display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '5px', gap: '15px', cursor: 'pointer' }} className='hover-bg'>
                                            <img src={song.image} alt="" style={{ width: '50px', borderRadius: '4px' }} />
                                            <div>
                                                <p style={{ fontWeight: 'bold', margin: 0 }}>{song.name}</p>
                                                <p style={{ fontSize: '13px', color: '#a7a7a7', margin: 0 }}>{song.artist}</p>
                                            </div>
                                            <p style={{ marginLeft: 'auto', fontSize: '14px', color: '#a7a7a7' }}>{song.duration}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {filteredAlbums.length > 0 && (
                            <div>
                                <h2 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Albums</h2>
                                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                                    {filteredAlbums.map((album, index) => (
                                        <div key={index} style={{ width: '180px', padding: '15px', borderRadius: '5px', backgroundColor: '#181818' }}>
                                            <img src={album.image} alt="" style={{ borderRadius: '5px', width: '100%', marginBottom: '10px' }} />
                                            <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>{album.name}</p>
                                            <p style={{ fontSize: '13px', color: '#a7a7a7' }}>{album.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {filteredSongs.length === 0 && filteredAlbums.length === 0 && (
                            <div style={{ textAlign: 'center', marginTop: '50px', color: '#a7a7a7' }}>
                                <p>No results found for "{query}"</p>
                                <p>Please make sure your words are spelled correctly or use less or different keywords.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    )
}

export default Search;
