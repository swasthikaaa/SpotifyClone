import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import { PlayerContext } from '../context/PlayerContext';
import { IoCloudUploadOutline } from "react-icons/io5";

const AddSong = () => {
    const { addNewSong } = useContext(PlayerContext);
    const [formData, setFormData] = useState({
        name: "",
        artist: "",
        album: "",
        category: "English",
        image: null
    });
    const [notification, setNotification] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.artist) return;

        addNewSong({
            name: formData.name,
            artist: formData.artist,
            album: formData.album || "Single",
            category: formData.category,
            image: formData.image || "https://placehold.co/200/222/white?text=Music" // Default
        });

        setNotification("Song added successfully!");
        setFormData({ name: "", artist: "", album: "", category: "English", image: null });
        setTimeout(() => setNotification(""), 3000);
    }

    return (
        <>
            <Navbar />
            <div style={{ padding: '20px 40px', color: 'white', maxWidth: '600px', margin: '0 auto' }}>
                <h1 style={{ fontWeight: '800', fontSize: '30px', marginBottom: '30px' }}>Upload a Song</h1>

                {notification && <div style={{ backgroundColor: '#1DB954', color: 'black', padding: '10px', borderRadius: '5px', marginBottom: '20px', fontWeight: 'bold' }}>{notification}</div>}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <div style={{ width: '150px', height: '150px', backgroundColor: '#333', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
                            {formData.image ? (
                                <img src={formData.image} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            ) : (
                                <IoCloudUploadOutline size={40} color='#777' />
                            )}
                            <input type="file" onChange={handleImageChange} accept="image/*" style={{ position: 'absolute', opacity: 0, width: '100%', height: '100%', cursor: 'pointer' }} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <p style={{ fontSize: '14px', color: '#a7a7a7', marginBottom: '10px' }}>Click box to upload artwork</p>
                            <h3 style={{ fontWeight: 'bold' }}>{formData.name || "Song Title"}</h3>
                            <p>{formData.artist || "Artist Name"}</p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        <label style={{ fontSize: '14px', fontWeight: 'bold' }}>Song Name</label>
                        <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="e.g. Blinding Lights" style={{ padding: '10px', borderRadius: '4px', border: '1px solid #333', backgroundColor: '#121212', color: 'white', outline: 'none' }} required />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        <label style={{ fontSize: '14px', fontWeight: 'bold' }}>Artist</label>
                        <input name="artist" value={formData.artist} onChange={handleChange} type="text" placeholder="e.g. The Weeknd" style={{ padding: '10px', borderRadius: '4px', border: '1px solid #333', backgroundColor: '#121212', color: 'white', outline: 'none' }} required />
                    </div>

                    <div style={{ display: 'flex', gap: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', flex: 1 }}>
                            <label style={{ fontSize: '14px', fontWeight: 'bold' }}>Album</label>
                            <input name="album" value={formData.album} onChange={handleChange} type="text" placeholder="e.g. After Hours" style={{ padding: '10px', borderRadius: '4px', border: '1px solid #333', backgroundColor: '#121212', color: 'white', outline: 'none' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', flex: 1 }}>
                            <label style={{ fontSize: '14px', fontWeight: 'bold' }}>Category</label>
                            <select name="category" value={formData.category} onChange={handleChange} style={{ padding: '10px', borderRadius: '4px', border: '1px solid #333', backgroundColor: '#121212', color: 'white', outline: 'none' }}>
                                <option value="English">English</option>
                                <option value="Hindi">Hindi</option>
                                <option value="Tamil">Tamil</option>
                                <option value="Instrumental">Instrumental</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" style={{ padding: '14px', borderRadius: '30px', backgroundColor: '#1DB954', color: 'black', border: 'none', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>Add Song</button>

                </form>
            </div>
        </>
    )
}

export default AddSong;
