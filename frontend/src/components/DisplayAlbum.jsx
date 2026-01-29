import React, { useContext } from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { albumsData, assets, songsData } from '../assets/assets';
import { FiClock } from "react-icons/fi";

const DisplayAlbum = () => {

    const { id } = useParams();
    // Default to first album if id is not found or invalid
    const albumData = albumsData[id] || albumsData[0];

    return (
        <>
            <Navbar />
            <div style={{ marginTop: '10px', display: 'flex', gap: '32px', padding: '0 20px', flexDirection: 'column' }}>
                <div className='content-header' style={{ display: 'flex', gap: '24px', alignItems: 'end' }}>
                    <img src={albumData.image} alt="" style={{ width: '192px', boxShadow: '0 4px 60px rgba(0,0,0,0.5)' }} />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Playlist</p>
                        <h2 style={{ fontSize: '60px', fontWeight: '800', marginBottom: '10px' }}>{albumData.name}</h2>
                        <h4 style={{ color: '#a7a7a7' }}>{albumData.desc}</h4>
                        <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <img src={assets.spotify_logo_small || "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"} alt="" style={{ width: '20px' }} />
                            <b style={{ fontSize: '14px' }}>Spotify</b>
                            <span style={{ fontSize: '14px' }}>• 1,234,34 likes • <b>50 songs,</b> about 2 hr 30 min</span>
                        </div>
                    </div>
                </div>

                <div className='song-grid' style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 2fr 1fr minmax(0, 1fr)', marginTop: '20px', marginBottom: '10px', paddingLeft: '15px', color: '#a7a7a7', fontSize: '14px' }}>
                    <p><b style={{ marginRight: '15px' }}>#</b>Title</p>
                    <p className='song-grid-album'>Album</p>
                    <p className='hidden-mobile song-grid-date'>Date Added</p>
                    <p style={{ textAlign: 'center' }}><FiClock /></p>
                </div>
                <hr style={{ borderColor: '#333' }} />

                {songsData.map((item, index) => (
                    <div key={index} className='song-grid hover-bg' style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 2fr 1fr minmax(0, 1fr)', gap: '10px', padding: '10px 15px', alignItems: 'center', color: '#a7a7a7', fontSize: '14px', cursor: 'pointer', borderRadius: '5px' }}>
                        <div style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                            <b style={{ marginRight: '15px', color: '#a7a7a7' }}>{index + 1}</b>
                            <img src={item.image} alt="" style={{ width: '40px', marginRight: '15px' }} />
                            <div>
                                <p style={{ color: 'white', fontSize: '15px', fontWeight: '500' }}>{item.name}</p>
                                <p style={{ fontSize: '13px' }}>{item.desc}</p>
                            </div>
                        </div>
                        <p className='song-grid-album' style={{ fontSize: '14px' }}>{albumData.name}</p>
                        <p className='hidden-mobile song-grid-date' style={{ fontSize: '14px' }}>5 days ago</p>
                        <p style={{ fontSize: '14px', textAlign: 'center' }}>{item.duration}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default DisplayAlbum;
