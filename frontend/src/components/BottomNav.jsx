import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoHome } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { BiLibrary } from "react-icons/bi";
import { PlayerContext } from '../context/PlayerContext';

const BottomNav = () => {
    const navigate = useNavigate();

    return (
        <div className="bottom-nav" style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'black',
            height: '60px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            zIndex: 100,
            borderTop: '1px solid #333'
        }}>
            <div onClick={() => navigate('/')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', color: 'white' }}>
                <GoHome size={24} />
                <span style={{ fontSize: '10px', marginTop: '4px' }}>Home</span>
            </div>
            <div onClick={() => navigate('/search')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', color: '#b3b3b3' }}>
                <FiSearch size={24} />
                <span style={{ fontSize: '10px', marginTop: '4px' }}>Search</span>
            </div>
            <div onClick={() => navigate('/library')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', color: '#b3b3b3' }}>
                <BiLibrary size={24} />
                <span style={{ fontSize: '10px', marginTop: '4px' }}>Library</span>
            </div>
        </div>
    )
}

export default BottomNav;
