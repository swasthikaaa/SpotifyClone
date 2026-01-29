import React from 'react';
import { FaPlay, FaStepBackward, FaStepForward } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { BiMicrophone } from "react-icons/bi";
import { PiQueue } from "react-icons/pi";
import { MdOutlineDevices } from "react-icons/md";
import { CgMiniPlayer } from "react-icons/cg";
import { AiOutlineExpandAlt } from "react-icons/ai";

const Player = () => {
    return (
        <div className="player" style={{ height: '80px', backgroundColor: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px', color: 'white', borderTop: '1px solid #333' }}>
            {/* Song Info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', width: '30%' }}>
                <img src="https://placehold.co/50" alt="song" style={{ width: '50px', borderRadius: '4px' }} />
                <div style={{ overflow: 'hidden' }}>
                    <p style={{ fontWeight: 'bold', fontSize: '14px', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Song Title</p>
                    <p style={{ fontSize: '12px', color: '#b3b3b3', margin: 0 }}>Artist</p>
                </div>
            </div>

            {/* Player Controls */}
            <div className="player-controls" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', width: '40%' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', color: '#b3b3b3' }}>
                    <FaStepBackward size={20} style={{ cursor: 'pointer' }} className='hover-white' />
                    <div style={{ backgroundColor: 'white', color: 'black', borderRadius: '50%', padding: '8px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <FaPlay size={14} />
                    </div>
                    <FaStepForward size={20} style={{ cursor: 'pointer' }} className='hover-white' />
                </div>
                <div className="progress-bar" style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', fontSize: '12px', color: '#b3b3b3' }}>
                    <p>0:00</p>
                    <div style={{ height: '4px', width: '100%', backgroundColor: '#555', borderRadius: '2px', cursor: 'pointer', position: 'relative' }}>
                        <div style={{ height: '100%', width: '0%', backgroundColor: '#1DB954', borderRadius: '2px' }}></div>
                    </div>
                    <p>3:45</p>
                </div>
            </div>

            {/* Volume & Extras - Hidden on mobile */}
            <div className="player-extras hidden-mobile" style={{ display: 'flex', alignItems: 'center', gap: '15px', width: '30%', justifyContent: 'flex-end', color: '#b3b3b3' }}>
                <BiMicrophone size={18} className='cursor-pointer hover-white' />
                <PiQueue size={18} className='cursor-pointer hover-white' />
                <MdOutlineDevices size={18} className='cursor-pointer hover-white' />
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <HiSpeakerWave size={18} />
                    <div style={{ width: '80px', height: '4px', backgroundColor: '#555', borderRadius: '2px', cursor: 'pointer' }}>
                        <div style={{ height: '100%', width: '70%', backgroundColor: 'white', borderRadius: '2px' }}></div>
                    </div>
                </div>
                <CgMiniPlayer size={18} className='cursor-pointer hover-white' />
                <AiOutlineExpandAlt size={18} className='cursor-pointer hover-white' />
            </div>

            {/* Mobile Play Button - Visible only on mobile styling handled via CSS media query implicitly if needed, but for now we rely on layout adjustments */}

            <style>{`
            @media (max-width: 900px) {
                .player {
                    position: fixed;
                    bottom: 60px; /* Above bottom nav */
                    left: 0;
                    right: 0;
                    padding: 0 10px;
                    height: 60px !important;
                    background-color: #121212 !important; /* Slightly lighter than pure black */
                    z-index: 100;
                    border-bottom: 1px solid #333;
                }
                .player-controls {
                    width: auto !important;
                    gap: 0 !important;
                    flex-direction: row !important;
                }
                .player-controls .progress-bar {
                    display: none !important;
                }
                .player-extras {
                    display: none !important;
                }
            }
        `}</style>
        </div>
    )
}

export default Player;
