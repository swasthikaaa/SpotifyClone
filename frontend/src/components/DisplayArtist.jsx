import React, { useContext } from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { songsData, albumsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';
import { FaPlay, FaCheck } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

const DisplayArtist = () => {
    const { name } = useParams(); // Get artist name from URL
    const { playWithId } = useContext(PlayerContext);

    // Find artist's songs
    const artistSongs = songsData.filter(song => song.artist === name);
    // Determine a "best" album cover to use as artist image, or use the first song's image
    const artistImage = artistSongs.length > 0 ? artistSongs[0].image : albumsData[0].image;

    return (
        <>
            <Navbar />
            <div style={{ marginTop: '10px', display: 'flex', gap: '32px', padding: '0 20px', flexDirection: 'column', paddingBottom: '100px' }}>

                {/* Artist Header */}
                <div className='content-header' style={{ display: 'flex', gap: '24px', alignItems: 'end', backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), #121212)`, padding: '40px 20px' }}>
                    <img src={artistImage} alt="" style={{ width: '192px', height: '192px', borderRadius: '50%', objectFit: 'cover', boxShadow: '0 4px 60px rgba(0,0,0,0.5)' }} />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ backgroundColor: '#3D91F4', color: 'white', padding: '5px 10px', borderRadius: '20px', fontSize: '10px', display: 'flex', alignItems: 'center', gap: '5px' }}> <FaCheck size={10} /> Verified Artist</span>
                        </div>
                        <h1 style={{ fontSize: '60px', fontWeight: '800', marginBottom: '20px' }}>{name}</h1>
                        <p style={{ fontSize: '16px' }}>3,492,103 monthly listeners</p>
                    </div>
                </div>

                {/* Popular Songs */}
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Popular</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {artistSongs.map((item, index) => (
                        <div key={index}
                            onClick={() => playWithId(item.id)}
                            className='song-grid hover-bg'
                            style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 2fr 1fr minmax(0, 1fr)', gap: '10px', padding: '10px 15px', alignItems: 'center', color: '#a7a7a7', fontSize: '14px', cursor: 'pointer', borderRadius: '5px' }}
                        >
                            <div style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                                <b style={{ marginRight: '15px', color: '#a7a7a7' }}>{index + 1}</b>
                                <img src={item.image} alt="" style={{ width: '40px', marginRight: '15px' }} />
                                <div>
                                    <p style={{ color: 'white', fontSize: '15px', fontWeight: '500' }}>{item.name}</p>
                                </div>
                            </div>
                            <p className='song-grid-album' style={{ fontSize: '14px' }}>{item.album}</p>
                            <p className='hidden-mobile song-grid-date' style={{ fontSize: '14px' }}>1,234,567 plays</p>
                            <p style={{ fontSize: '14px', textAlign: 'center' }}>{item.duration}</p>
                        </div>
                    ))}
                    {artistSongs.length === 0 && <p style={{ color: '#a7a7a7' }}>No songs found for this artist in the library.</p>}
                </div>

            </div>
        </>
    )
}

export default DisplayArtist;
