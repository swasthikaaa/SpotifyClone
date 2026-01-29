import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const handleNext = (e) => {
        e.preventDefault();
        // Simulate next step or registration
        navigate('/');
    }

    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'black', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px' }}>
            {/* Header */}
            <div style={{ width: '100%', paddingBottom: '30px', display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <img src={assets.spotify_logo || "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"} alt="" style={{ width: '40px' }} />
                    <span style={{ fontSize: '24px', fontWeight: 'bold' }}>Spotify</span>
                </div>
            </div>

            <div style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h1 style={{ fontWeight: '700', fontSize: '32px', textAlign: 'center', marginBottom: '40px' }}>Sign up to start listening</h1>

                <form onSubmit={handleNext} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        <label style={{ fontSize: '14px', fontWeight: 'bold' }}>Email address</label>
                        <input
                            type="email"
                            placeholder="name@domain.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ padding: '12px', backgroundColor: '#121212', border: '1px solid #727272', borderRadius: '4px', color: 'white', outline: 'none' }}
                            onFocus={(e) => e.target.style.borderColor = 'white'}
                            onBlur={(e) => e.target.style.borderColor = '#727272'}
                            required />
                    </div>

                    <a href="#" style={{ color: '#1DB954', fontSize: '14px', textDecoration: 'underline', marginBottom: '10px' }}>Use phone number instead</a>

                    <button type="submit" style={{ backgroundColor: '#1DB954', padding: '14px', borderRadius: '30px', border: 'none', fontWeight: 'bold', fontSize: '16px', color: 'black', cursor: 'pointer' }}
                        onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'}
                        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                    >
                        Next
                    </button>
                </form>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '20px 0' }}>
                    <div style={{ height: '1px', backgroundColor: '#282828', flex: 1 }}></div>
                    <span style={{ color: '#a7a7a7', fontSize: '12px' }}>or</span>
                    <div style={{ height: '1px', backgroundColor: '#282828', flex: 1 }}></div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '12px', borderRadius: '30px', border: '1px solid #727272', backgroundColor: 'transparent', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
                        <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google" style={{ width: '20px' }} />
                        Sign up with Google
                    </button>
                    <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '12px', borderRadius: '30px', border: '1px solid #727272', backgroundColor: 'transparent', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="" style={{ width: '20px' }} />
                        Sign up with Facebook
                    </button>
                </div>

                <p style={{ color: '#a7a7a7', fontSize: '14px', textAlign: 'center', marginTop: '20px' }}>
                    Already have an account? <span onClick={() => navigate('/login')} style={{ color: 'white', fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline' }}>Log in here</span>
                </p>

            </div>
        </div>
    )
}

export default Register;
