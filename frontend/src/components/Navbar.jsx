import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Navbar = () => {
    const navigate = useNavigate();

    const [token, setToken] = React.useState(localStorage.getItem('spotify_token'));
    const [profileImage, setProfileImage] = React.useState(localStorage.getItem('spotify_profile_image'));

    // Listen for changes
    React.useEffect(() => {
        const checkData = () => {
            setToken(localStorage.getItem('spotify_token'));
            setProfileImage(localStorage.getItem('spotify_profile_image'));
        }

        const interval = setInterval(checkData, 500);
        return () => clearInterval(interval);
    }, []);

    const logout = () => {
        localStorage.removeItem('spotify_token');
        localStorage.removeItem('spotify_username');
        setToken(null);
        navigate('/login');
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', fontWeight: '600' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <div onClick={() => navigate(-1)} style={{ backgroundColor: 'black', borderRadius: '50%', padding: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FaAngleLeft color='white' size={20} />
                </div>
                <div onClick={() => navigate(1)} style={{ backgroundColor: 'black', borderRadius: '50%', padding: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FaAngleRight color='white' size={20} />
                </div>
            </div>

            <div className="hidden-mobile" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <button onClick={() => navigate('/subscription')} style={{ backgroundColor: 'white', color: 'black', padding: '10px 18px', borderRadius: '30px', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '15px' }}>Explore Premium</button>

                {!token ? (
                    <button onClick={() => navigate('/login')} style={{ backgroundColor: 'black', color: 'white', padding: '10px 18px', borderRadius: '30px', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '15px' }}>Log In</button>
                ) : (
                    <button onClick={logout} style={{ backgroundColor: 'black', color: 'white', padding: '10px 18px', borderRadius: '30px', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '15px' }}>Log Out</button>
                )}

                <div onClick={() => navigate('/profile')} style={{ backgroundColor: '#D1589D', width: '35px', height: '35px', borderRadius: '50%', color: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', cursor: 'pointer', overflow: 'hidden' }}>
                    {profileImage ? (
                        <img src={profileImage} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                        "S"
                    )}
                </div>
            </div>

            {/* Mobile Only Profile Icon */}
            <div className="show-mobile" style={{ display: 'none', alignItems: 'center' }}>
                <div onClick={() => navigate('/profile')} style={{ backgroundColor: '#1DB954', width: '35px', height: '35px', borderRadius: '50%', color: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', cursor: 'pointer', overflow: 'hidden' }}>
                    {profileImage ? (
                        <img src={profileImage} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                        "S"
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar;
