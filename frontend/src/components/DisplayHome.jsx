import React, { useContext, useState } from 'react';
import Navbar from './Navbar';
import { albumsData, songsData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { PlayerContext } from '../context/PlayerContext';

const DisplayHome = () => {
    const navigate = useNavigate();
    const { songs } = useContext(PlayerContext);
    const [filter, setFilter] = useState("All"); // All, Music, Podcasts

    // Mock Data with Types
    const recentItems = [
        { name: "Top 50 Global", image: albumsData[0].image, type: "Music" },
        { name: "Rock Classics", image: albumsData[1].image, type: "Music" },
        { name: "Chill Vibes", image: albumsData[2].image, type: "Music" },
        { name: "Tech Talk Daily", image: albumsData[3].image, type: "Podcasts" },
        { name: "Morning Motivation", image: albumsData[4].image, type: "Podcasts" },
        { name: "Mega Hits", image: albumsData[0].image, type: "Music" },
        { name: "Code Newbie", image: albumsData[1].image, type: "Podcasts" },
        { name: "Deep Focus", image: albumsData[2].image, type: "Music" },
    ];

    // Filter Logic
    const filteredItems = filter === "All" ? recentItems : recentItems.filter(item => item.type === filter);

    // For Jump Back In (assuming mostly Music for now, but could filter if we had types on songs)
    const filteredSongs = filter === "Podcasts" ? [] : songs.slice(0, 6);

    return (
        <>
            <Navbar />

            <div style={{ padding: '0 20px', paddingBottom: '100px' }}>

                {/* Top Filter Pills */}
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                    {["All", "Music", "Podcasts"].map((type) => (
                        <div key={type}
                            onClick={() => setFilter(type)}
                            style={{
                                backgroundColor: filter === type ? '#1DB954' : '#2A2A2A',
                                color: filter === type ? 'black' : 'white',
                                padding: '8px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: '500', cursor: 'pointer', transition: '0.2s'
                            }}>
                            {type}
                        </div>
                    ))}
                </div>

                {/* Grid Section */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '10px', marginBottom: '40px' }}>
                    {filteredItems.map((item, index) => (
                        <div key={index}
                            onClick={() => navigate(`/album/${index % albumsData.length}`)}
                            style={{ display: 'flex', alignItems: 'center', backgroundColor: '#2A2A2A', borderRadius: '4px', cursor: 'pointer', overflow: 'hidden', height: '60px' }} className='hover-bg-light'>
                            <img src={item.image} alt="" style={{ height: '100%', width: '60px', objectFit: 'cover' }} />
                            <span style={{ fontWeight: 'bold', fontSize: '13px', padding: '0 10px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</span>
                        </div>
                    ))}
                </div>

                {/* Jump Back In Section */}
                {filteredSongs.length > 0 && (
                    <>
                        <h2 style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '20px' }}>Jump back in</h2>
                        <div style={{ display: 'flex', overflowX: 'auto', gap: '20px', paddingBottom: '20px', scrollbarWidth: 'none' }}>
                            {filteredSongs.map((item, index) => (
                                <div key={index}
                                    onClick={() => navigate(`/album/${index}`)}
                                    style={{ minWidth: '160px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '10px' }}
                                >
                                    <img src={item.image} alt="" style={{ width: '160px', height: '160px', objectFit: 'cover', borderRadius: '4px' }} />
                                    <div>
                                        <p style={{ fontWeight: 'bold', fontSize: '14px', margin: '0 0 4px 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</p>
                                        <p style={{ fontSize: '13px', color: '#a7a7a7', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.artist}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* "More Like" Section - Only show for Music or All */}
                {filter !== "Podcasts" && (
                    <>
                        <h2 style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '20px', marginTop: '20px' }}>More like Global Hits</h2>
                        <div style={{ display: 'flex', overflowX: 'auto', gap: '20px', paddingBottom: '20px', scrollbarWidth: 'none' }}>
                            {albumsData.map((item, index) => (
                                <div key={index}
                                    onClick={() => navigate(`/album/${index}`)}
                                    style={{ minWidth: '160px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '10px' }}
                                >
                                    <img src={item.image} alt="" style={{ width: '160px', height: '160px', objectFit: 'cover', borderRadius: '4px' }} />
                                    <div>
                                        <p style={{ fontWeight: 'bold', fontSize: '14px', margin: '0 0 4px 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</p>
                                        <p style={{ fontSize: '13px', color: '#a7a7a7', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {filter === "Podcasts" && (
                    <div style={{ textAlign: 'center', marginTop: '50px', color: '#a7a7a7' }}>
                        <p>You're all caught up on podcasts!</p>
                    </div>
                )}

            </div>
        </>
    )
}

export default DisplayHome;
