import React, { useContext, useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import { assets } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';
import { FiEdit2, FiCamera } from 'react-icons/fi';

const Profile = () => {
    const { playlists } = useContext(PlayerContext);
    const [username, setUsername] = useState("User Name");
    const [image, setImage] = useState(assets.profile);
    const [isEditing, setIsEditing] = useState(false);
    const [editName, setEditName] = useState("");
    const fileInputRef = useRef(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('spotify_username');
        const storedImage = localStorage.getItem('spotify_profile_image');
        if (storedUser) setUsername(storedUser);
        if (storedImage) setImage(storedImage);
    }, []);

    const handleEditToggle = () => {
        if (!isEditing) {
            setEditName(username);
        } else {
            // Saving
            if (editName.trim()) {
                setUsername(editName);
                localStorage.setItem('spotify_username', editName);
            }
        }
        setIsEditing(!isEditing);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
                localStorage.setItem('spotify_profile_image', reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const triggerFileInput = () => {
        if (isEditing) {
            fileInputRef.current.click();
        }
    };

    return (
        <>
            <Navbar />
            <div style={{ padding: '20px', color: 'white', paddingBottom: '100px' }}>
                <div className='profile-header' style={{ display: 'flex', alignItems: 'flex-end', gap: '20px', marginBottom: '40px' }}>

                    <div
                        style={{ position: 'relative', width: '150px', height: '150px', cursor: isEditing ? 'pointer' : 'default' }}
                        onClick={triggerFileInput}
                    >
                        <img
                            src={image}
                            alt="Profile"
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                boxShadow: '0 8px 60px rgba(0,0,0,0.5)',
                                opacity: isEditing ? 0.7 : 1
                            }}
                        />
                        {isEditing && (
                            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '50%' }}>
                                <FiCamera size={40} />
                            </div>
                        )}
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleImageChange}
                            style={{ display: 'none' }}
                            accept="image/*"
                        />
                    </div>

                    <div style={{ flex: 1 }}>
                        <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Profile</p>

                        {isEditing ? (
                            <input
                                type="text"
                                value={editName}
                                onChange={(e) => setEditName(e.target.value)}
                                style={{
                                    fontSize: '50px',
                                    fontWeight: '800',
                                    margin: '0 0 10px 0',
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    borderBottom: '2px solid white',
                                    color: 'white',
                                    outline: 'none',
                                    width: '100%'
                                }}
                                autoFocus
                            />
                        ) : (
                            <h1 className='responsive-title' style={{ fontSize: '70px', fontWeight: '800', margin: '0 0 10px 0', wordBreak: 'break-word', lineHeight: '1.1' }}>{username}</h1>
                        )}

                        <p style={{ fontSize: '14px' }}>{playlists.length} Public Playlists • 3 Followers • 4 Following</p>

                        <button
                            onClick={handleEditToggle}
                            style={{
                                marginTop: '15px',
                                backgroundColor: isEditing ? 'white' : 'transparent',
                                color: isEditing ? 'black' : 'white',
                                border: '1px solid white',
                                padding: '8px 20px',
                                borderRadius: '20px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                fontSize: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                outline: 'none'
                            }}
                        >
                            {isEditing ? 'Save Profile' : 'Edit Profile'}
                            {!isEditing && <FiEdit2 size={14} />}
                        </button>
                    </div>
                </div>

                <div>
                    <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Public Playlists</h2>
                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        {playlists.map((playlist, index) => (
                            <div key={index} style={{ backgroundColor: '#181818', padding: '15px', borderRadius: '8px', width: '200px', cursor: 'pointer' }} className='hover-bg'>
                                <div style={{ width: '100%', height: '170px', backgroundColor: '#333', marginBottom: '10px', borderRadius: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#aaa', overflow: 'hidden' }}>
                                    {playlist.image ? <img src={playlist.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : "🎵"}
                                </div>
                                <p style={{ fontWeight: 'bold', marginBottom: '5px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{playlist.name}</p>
                                <p style={{ fontSize: '12px', color: '#a7a7a7' }}>By {username}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;
