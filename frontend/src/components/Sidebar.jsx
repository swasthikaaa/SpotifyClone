import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoHome } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { BiLibrary } from "react-icons/bi";
import { FaPlus, FaArrowRight } from "react-icons/fa6";
import { PlayerContext } from '../context/PlayerContext';

const Sidebar = () => {
    const navigate = useNavigate();
    const { playlists, createPlaylist } = useContext(PlayerContext);

    const handleCreatePlaylist = () => {
        const newId = createPlaylist();
        navigate(`/playlist/${newId}`);
    }

    return (
        <div className="sidebar" style={{ width: '25%', height: '100%', padding: '8px', display: 'flex', flexDirection: 'column', gap: '8px', color: 'white' }}>
            <div className="nav-group" style={{ backgroundColor: '#121212', borderRadius: '8px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div onClick={() => navigate('/')} style={{ display: 'flex', alignItems: 'center', gap: '20px', cursor: 'pointer', fontWeight: 'bold' }}>
                    <GoHome size={24} />
                    <span>Home</span>
                </div>
                <div onClick={() => navigate('/search')} style={{ display: 'flex', alignItems: 'center', gap: '20px', cursor: 'pointer', fontWeight: 'bold', color: '#b3b3b3' }}>
                    <FiSearch size={24} />
                    <span>Search</span>
                </div>
            </div>

            <div className="library-group" style={{ backgroundColor: '#121212', borderRadius: '8px', flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px', overflowY: 'auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#b3b3b3' }}>
                    <div onClick={() => navigate('/library')} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontWeight: 'bold' }} title="Expand Your Library">
                        <BiLibrary size={24} />
                        <span>Your Library</span>
                    </div>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <FaPlus size={16} style={{ cursor: 'pointer' }} onClick={handleCreatePlaylist} title="Create Playlist" />
                        <FaArrowRight size={16} style={{ cursor: 'pointer' }} />
                    </div>
                </div>

                <div style={{ backgroundColor: '#242424', padding: '15px', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h1 style={{ fontSize: '16px', fontWeight: 'bold' }}>Create your first playlist</h1>
                    <p style={{ fontSize: '13px' }}>It's easy, we'll help you</p>
                    <button onClick={handleCreatePlaylist} style={{ backgroundColor: 'white', color: 'black', padding: '8px 15px', borderRadius: '20px', fontWeight: 'bold', width: 'fit-content', border: 'none', cursor: 'pointer' }}>Create playlist</button>
                </div>

                {/* Display Created Playlists */}
                {playlists.length > 0 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
                        {playlists.map((playlist, index) => (
                            <div key={index}
                                onClick={() => navigate(`/playlist/${playlist.id}`)}
                                style={{ display: 'flex', gap: '15px', alignItems: 'center', padding: '5px', cursor: 'pointer' }} className='hover-bg'>
                                <div style={{ width: '40px', height: '40px', backgroundColor: '#333', borderRadius: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '10px', overflow: 'hidden' }}>
                                    {playlist.image ? <img src={playlist.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : "🎵"}
                                </div>
                                <div>
                                    <p style={{ fontWeight: 'bold', fontSize: '14px', margin: 0 }}>{playlist.name}</p>
                                    <p style={{ fontSize: '12px', color: '#a7a7a7', margin: 0 }}>Playlist • You</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Sidebar;
