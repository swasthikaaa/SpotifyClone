import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { PlayerContext } from '../context/PlayerContext';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaArrowRight } from "react-icons/fa6";
import { BiLibrary } from "react-icons/bi";

const Library = () => {
    const { playlists, createPlaylist } = useContext(PlayerContext);
    const navigate = useNavigate();

    const handleCreatePlaylist = () => {
        const newId = createPlaylist();
        navigate(`/playlist/${newId}`);
    }

    return (
        <>
            <Navbar />
            <div style={{ padding: '0 20px', paddingBottom: '100px', color: 'white' }}>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <div style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: '#D1589D', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', color: 'black' }}>S</div>
                        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Your Library</h1>
                    </div>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <FaPlus size={24} style={{ cursor: 'pointer' }} onClick={handleCreatePlaylist} />
                        <FaArrowRight size={24} style={{ cursor: 'pointer' }} />
                    </div>
                </div>

                {/* Filter Pills */}
                <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
                    <div style={{ backgroundColor: '#2A2A2A', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 'bold' }}>Playlists</div>
                    <div style={{ backgroundColor: '#2A2A2A', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 'bold' }}>Artists</div>
                    <div style={{ backgroundColor: '#2A2A2A', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 'bold' }}>Albums</div>
                </div>

                {/* Special Library Items */}
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '20px', cursor: 'pointer' }}>
                    <div style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, #450af5, #c4efd9)', borderRadius: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src="https://misc.scdn.co/liked-songs/liked-songs-64.png" alt="" style={{ width: '100%', height: '100%', opacity: 0.7 }} />
                    </div>
                    <div>
                        <p style={{ fontWeight: 'bold', fontSize: '16px' }}>Liked Songs</p>
                        <p style={{ fontSize: '13px', color: '#a7a7a7' }}>Playlist • 12 songs</p>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '20px', cursor: 'pointer' }}>
                    <div style={{ width: '60px', height: '60px', backgroundColor: '#006450', borderRadius: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#1DB954' }}>
                        <div style={{ display: 'flex', gap: '2px', alignItems: 'end', height: '20px' }}>
                            <div style={{ width: '3px', height: '10px', backgroundColor: '#1DB954' }}></div>
                            <div style={{ width: '3px', height: '20px', backgroundColor: '#1DB954' }}></div>
                            <div style={{ width: '3px', height: '15px', backgroundColor: '#1DB954' }}></div>
                        </div>
                    </div>
                    <div>
                        <p style={{ fontWeight: 'bold', fontSize: '16px' }}>Your Episodes</p>
                        <p style={{ fontSize: '13px', color: '#a7a7a7' }}>Saved & Downloaded episodes</p>
                    </div>
                </div>

                {/* User Playlists */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
                    {playlists.map((playlist, index) => (
                        <div key={index}
                            onClick={() => navigate(`/playlist/${playlist.id}`)}
                            style={{ display: 'flex', gap: '15px', alignItems: 'center', padding: '10px', borderRadius: '5px', cursor: 'pointer', backgroundColor: '#181818' }} className='hover-bg'>
                            <div style={{ width: '50px', height: '50px', backgroundColor: '#333', borderRadius: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', flexShrink: 0 }}>
                                {playlist.image ? <img src={playlist.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : "🎵"}
                            </div>
                            <div style={{ overflow: 'hidden' }}>
                                <p style={{ fontWeight: 'bold', fontSize: '16px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{playlist.name}</p>
                                <p style={{ fontSize: '13px', color: '#a7a7a7' }}>Playlist • Swasthika</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Library;
