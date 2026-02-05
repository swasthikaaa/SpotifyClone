import React, { useContext, useState } from 'react';
import Navbar from './Navbar';
import { useParams, useNavigate } from 'react-router-dom';
import { PlayerContext } from '../context/PlayerContext';
import { songsData } from '../assets/assets';
import { FiClock, FiEdit2, FiTrash2 } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import SpotifyModal from './SpotifyModal';

const DisplayPlaylist = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const { playlists, updatePlaylistDetails, addSongToPlaylist, removeSongFromPlaylist, playWithId, deletePlaylist, songs } = useContext(PlayerContext);

    const playlist = playlists.find(p => p.id === id);

    const [isEditing, setIsEditing] = useState(false);
    const [editName, setEditName] = useState("");
    const [editDesc, setEditDesc] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [showMenu, setShowMenu] = useState(false);

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    if (!playlist) return <div style={{ color: 'white', padding: '20px' }}>Playlist not found. <br /><button onClick={() => navigate('/')} style={{ marginTop: '10px', padding: '5px 10px' }}>Go Home</button></div>;

    const handleEdit = () => {
        setEditName(playlist.name);
        setEditDesc(playlist.desc);
        setIsEditing(true);
    }

    const handleSave = () => {
        updatePlaylistDetails(id, editName, editDesc, playlist.image);
        setIsEditing(false);
    }

    const confirmDelete = () => {
        deletePlaylist(id);
        navigate('/');
    }


    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                updatePlaylistDetails(id, playlist.name, playlist.desc, reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

    const suggestions = songs.filter(s =>
        !playlist.songs.find(ps => ps.id === s.id) &&
        (s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.artist.toLowerCase().includes(searchQuery.toLowerCase()))
    ).slice(0, 5);

    return (
        <>
            <Navbar />
            <div style={{ marginTop: '10px', display: 'flex', gap: '32px', padding: '0 20px', flexDirection: 'column', color: 'white', paddingBottom: '100px' }}>

                {/* Header Section */}
                <div className='content-header' style={{ display: 'flex', gap: '24px', alignItems: 'end' }}>
                    <div style={{ position: 'relative', width: '192px', height: '192px', flexShrink: 0, backgroundColor: '#282828', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 60px rgba(0,0,0,0.5)' }}>
                        {playlist.image ? (
                            <img src={playlist.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                            <span style={{ fontSize: '50px', color: '#555' }}>🎵</span>
                        )}

                        <label htmlFor="playlist-img" style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', opacity: 0, transition: '0.3s', cursor: 'pointer' }} className='hover-opacity-100'>
                            <FiEdit2 size={30} />
                            <span style={{ fontSize: '12px', marginTop: '5px' }}>Choose Photo</span>
                        </label>
                        <input type="file" id="playlist-img" style={{ display: 'none' }} accept="image/*" onChange={handleImageUpload} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Playlist</p>

                        {isEditing ? (
                            <div style={{ marginBottom: '10px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                <input
                                    className='responsive-input'
                                    value={editName}
                                    onChange={(e) => setEditName(e.target.value)}
                                    style={{ fontSize: '40px', fontWeight: '800', backgroundColor: '#333', border: 'none', color: 'white', outline: 'none', padding: '5px' }}
                                />
                                <textarea
                                    value={editDesc}
                                    onChange={(e) => setEditDesc(e.target.value)}
                                    style={{ fontSize: '14px', backgroundColor: '#333', border: 'none', color: '#ccc', outline: 'none', resize: 'none', padding: '5px' }}
                                />
                                <button onClick={handleSave} style={{ width: 'fit-content', padding: '5px 15px', backgroundColor: '#1DB954', border: 'none', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer' }}>Save</button>
                            </div>
                        ) : (
                            <div onClick={handleEdit} style={{ cursor: 'pointer' }} title="Click to edit details">
                                <h2 className='responsive-title' style={{ fontSize: '60px', fontWeight: '800', marginBottom: '10px' }}>{playlist.name}</h2>
                                <h4 style={{ color: '#a7a7a7' }}>{playlist.desc}</h4>
                            </div>
                        )}

                        <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <div style={{ backgroundColor: '#D1589D', width: '25px', height: '25px', borderRadius: '50%', color: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: '12px' }}>S</div>
                            <b style={{ fontSize: '14px' }}>Swasthika</b>
                            <span style={{ fontSize: '14px' }}>• {playlist.songs.length} songs</span>
                        </div>
                    </div>
                </div>

                {/* Playlist Actions */}
                <div style={{ padding: '20px 0', display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <button style={{ backgroundColor: '#1DB954', width: '56px', height: '56px', borderRadius: '50%', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', transition: 'scale 0.1s' }}>
                        <FaPlay size={24} color='black' style={{ marginLeft: '4px' }} />
                    </button>
                    <div style={{ position: 'relative' }}>
                        <BsThreeDots size={30} color='#a7a7a7' style={{ cursor: 'pointer' }} onClick={() => setShowMenu(!showMenu)} />
                        {showMenu && (
                            <div style={{ position: 'absolute', top: '100%', left: '0', backgroundColor: '#282828', borderRadius: '4px', padding: '5px', zIndex: 10, minWidth: '150px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)' }}>
                                <div onClick={() => {
                                    document.getElementById('search-songs').scrollIntoView({ behavior: 'smooth' });
                                    setShowMenu(false);
                                }} style={{ padding: '10px', fontSize: '14px', cursor: 'pointer', color: 'white' }} className='hover-bg-light'>Add songs</div>
                                <div onClick={() => setShowDeleteModal(true)} style={{ padding: '10px', fontSize: '14px', cursor: 'pointer', color: '#ff5555' }} className='hover-bg-light'>Delete Playlist</div>
                            </div>
                        )}
                    </div>
                </div>

                <SpotifyModal
                    isOpen={showDeleteModal}
                    title="Delete from Library?"
                    message={`This will delete ${playlist.name} from Your Library.`}
                    onConfirm={confirmDelete}
                    onCancel={() => setShowDeleteModal(false)}
                />

                {/* Song List Header */}
                <div className="song-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 2fr 1fr minmax(0, 1fr)', marginTop: '20px', marginBottom: '10px', paddingLeft: '15px', color: '#a7a7a7', fontSize: '14px' }}>
                    <p><b style={{ marginRight: '15px' }}>#</b>Title</p>
                    <p className='song-grid-album'>Album</p>
                    <p className='hidden-mobile song-grid-date'>Date Added</p>
                    <p style={{ textAlign: 'center' }}><FiClock /></p>
                </div>
                <hr style={{ borderColor: '#333' }} />

                {/* Empty State */}
                {playlist.songs.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '40px', color: '#a7a7a7', border: '1px dashed #444', borderRadius: '8px', marginBottom: '20px' }}>
                        <p>This playlist is empty.</p>
                    </div>
                )}

                {playlist.songs.map((item, index) => (
                    <div key={index} className='song-grid group hover-bg' style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 2fr 1fr minmax(0, 1fr)', gap: '10px', padding: '10px 15px', alignItems: 'center', color: '#a7a7a7', fontSize: '14px', cursor: 'pointer', borderRadius: '5px' }}>
                        <div onClick={() => playWithId(item.id)} style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                            <b style={{ marginRight: '15px', color: '#a7a7a7' }}>{index + 1}</b>
                            <img src={item.image} alt="" style={{ width: '40px', marginRight: '15px' }} />
                            <div>
                                <p style={{ color: 'white', fontSize: '15px', fontWeight: '500' }}>{item.name}</p>
                                <p style={{ fontSize: '13px' }}>{item.artist}</p>
                            </div>
                        </div>
                        <p className='song-grid-album' style={{ fontSize: '14px' }}>{item.album}</p>
                        <p className='hidden-mobile song-grid-date' style={{ fontSize: '14px' }}>Just now</p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                            <p style={{ fontSize: '14px' }}>{item.duration}</p>
                            <FiTrash2 className='delete-icon' onClick={() => removeSongFromPlaylist(id, item.id)} style={{ cursor: 'pointer', color: 'white' }} title="Remove from playlist" />
                        </div>
                    </div>
                ))}

                {/* Add Songs Section */}
                <div style={{ marginTop: '40px' }} id="search-songs">
                    <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Let's find something for your playlist</h2>
                    <div style={{ backgroundColor: '#242424', padding: '10px 15px', borderRadius: '5px', width: '100%', maxWidth: '300px', display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                        <input
                            type="text"
                            placeholder="Search for songs"
                            style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', color: 'white', width: '100%' }}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {suggestions.map((song) => (
                            <div key={song.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', borderRadius: '5px' }} className='hover-bg'>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <img src={song.image} alt="" style={{ width: '50px' }} />
                                    <div>
                                        <p style={{ fontWeight: 'bold', margin: '0 0 5px 0' }}>{song.name}</p>
                                        <p style={{ fontSize: '12px', color: '#a7a7a7', margin: 0 }}>{song.artist}</p>
                                    </div>
                                </div>
                                <button onClick={() => { addSongToPlaylist(id, song); setSearchQuery(""); }} style={{ border: '1px solid #777', backgroundColor: 'transparent', color: 'white', padding: '5px 20px', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer' }}>Add</button>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}

export default DisplayPlaylist;
