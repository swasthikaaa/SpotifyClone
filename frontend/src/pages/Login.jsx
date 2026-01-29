import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulate login
        localStorage.setItem('spotify_token', 'fake-token-123');
        localStorage.setItem('spotify_username', 'Swasthika'); // Mock user
        navigate('/');
    }

    return (
        <div style={{ height: '100vh', backgroundColor: 'black', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px', paddingBottom: '100px', overflowY: 'auto' }}>
            {/* Header */}
            <div style={{ width: '100%', paddingBottom: '30px', borderBottom: '1px solid #282828', display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <img src={assets.spotify_logo || "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"} alt="" style={{ width: '40px' }} />
                    <span style={{ fontSize: '24px', fontWeight: 'bold' }}>Spotify</span>
                </div>
            </div>

            {/* Form */}
            <div style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h1 style={{ fontWeight: '700', fontSize: '32px', textAlign: 'center', marginBottom: '20px' }}>Log in to Spotify</h1>

                <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', padding: '12px', borderRadius: '30px', border: '1px solid #727272', backgroundColor: 'transparent', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
                    <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google" style={{ width: '25px', height: '25px' }} />
                    Continue with Google
                </button>
                <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', padding: '12px', borderRadius: '30px', border: '1px solid #727272', backgroundColor: 'transparent', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="" style={{ width: '25px', height: '25px' }} />
                    Continue with Facebook
                </button>
                <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', padding: '12px', borderRadius: '30px', border: '1px solid #727272', backgroundColor: 'transparent', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="" style={{ width: '25px', height: '25px', filter: 'invert(1)' }} />
                    Continue with Apple
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 0' }}>
                    <div style={{ height: '1px', backgroundColor: '#282828', flex: 1 }}></div>
                    <span style={{ color: '#a7a7a7', fontSize: '12px' }}>OR</span>
                    <div style={{ height: '1px', backgroundColor: '#282828', flex: 1 }}></div>
                </div>

                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        <label style={{ fontSize: '14px', fontWeight: 'bold' }}>Email or username</label>
                        <input
                            type="text"
                            placeholder="Email or username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ padding: '12px', backgroundColor: '#121212', border: '1px solid #727272', borderRadius: '4px', color: 'white', outline: 'none' }}
                            onFocus={(e) => e.target.style.borderColor = 'white'}
                            onBlur={(e) => e.target.style.borderColor = '#727272'}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        <label style={{ fontSize: '14px', fontWeight: 'bold' }}>Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ padding: '12px', backgroundColor: '#121212', border: '1px solid #727272', borderRadius: '4px', color: 'white', outline: 'none' }}
                            onFocus={(e) => e.target.style.borderColor = 'white'}
                            onBlur={(e) => e.target.style.borderColor = '#727272'}
                        />
                    </div>

                    <button type="submit" style={{ backgroundColor: '#1DB954', padding: '14px', borderRadius: '30px', border: 'none', fontWeight: 'bold', fontSize: '16px', color: 'black', cursor: 'pointer', marginTop: '10px' }}
                        onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'}
                        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                    >
                        Log In
                    </button>
                </form>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                    <p style={{ color: 'white', fontSize: '14px', cursor: 'pointer', textDecoration: 'underline' }}>Forgot your password?</p>
                    <p style={{ color: '#a7a7a7', fontSize: '14px' }}>
                        Don't have an account? <span onClick={() => navigate('/register')} style={{ color: 'white', fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline' }}>Sign up for Spotify</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login;
