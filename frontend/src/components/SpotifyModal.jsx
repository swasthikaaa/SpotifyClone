import React from 'react';

const SpotifyModal = ({ isOpen, title, message, onConfirm, onCancel, confirmText = "Delete", cancelText = "Cancel" }) => {
    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
        }}>
            <div style={{
                backgroundColor: '#282828',
                padding: '24px',
                borderRadius: '8px',
                width: '90%',
                maxWidth: '320px',
                color: 'white',
                textAlign: 'center',
                boxShadow: '0 4px 60px rgba(0,0,0,0.5)'
            }}>
                <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '10px' }}>{title}</h2>
                <p style={{ fontSize: '14px', color: '#a7a7a7', marginBottom: '24px', lineHeight: '1.5' }}>{message}</p>

                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                    <button
                        onClick={onCancel}
                        style={{
                            padding: '12px 32px',
                            backgroundColor: 'transparent',
                            color: 'white',
                            border: '1px solid #727272',
                            borderRadius: '30px',
                            fontWeight: 'bold',
                            fontSize: '14px',
                            cursor: 'pointer',
                            flex: 1
                        }}
                        onMouseOver={(e) => e.target.style.transform = 'scale(1.04)'}
                        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                    >
                        {cancelText}
                    </button>
                    <button
                        onClick={onConfirm}
                        style={{
                            padding: '12px 32px',
                            backgroundColor: '#1DB954',
                            color: 'black',
                            border: 'none',
                            borderRadius: '30px',
                            fontWeight: 'bold',
                            fontSize: '14px',
                            cursor: 'pointer',
                            flex: 1
                        }}
                        onMouseOver={(e) => { e.target.style.transform = 'scale(1.04)'; e.target.style.backgroundColor = '#1ed760'; }}
                        onMouseOut={(e) => { e.target.style.transform = 'scale(1)'; e.target.style.backgroundColor = '#1DB954'; }}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SpotifyModal;
