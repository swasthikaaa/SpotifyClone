import React from 'react';
import Navbar from '../components/Navbar';
import { assets } from '../assets/assets';
import { FaCheck } from "react-icons/fa";

const Subscription = () => {

    const plans = [
        { name: "Premium Individual", price: "Free for 1 month", priceNormal: "₹119/month after", features: ["Ad-free music listening", "Download to listen offline", "Debit & credit cards accepted"] },
        { name: "Premium Student", price: "Free for 1 month", priceNormal: "₹59/month after", features: ["Add-free music listening", "Specific discount for eligible students"] },
        { name: "Premium Duo", price: "₹149/month", priceNormal: "One-time payment available", features: ["2 Premium accounts", "For couples who live together", "Ad-free music listening"] },
        { name: "Premium Family", price: "₹179/month", priceNormal: "One-time payment available", features: ["Up to 6 Premium accounts", "Block explicit music", "Ad-free music listening"] },
    ];

    return (
        <div style={{ color: 'white', overflowY: 'auto', height: '100%' }}>
            <Navbar />

            {/* Hero Banner */}
            <div className='hero-banner' style={{
                backgroundImage: `url(${assets.premium_bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <h1 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '20px' }}>Get 3 months of Premium for ₹59</h1>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Just ₹59 for 3 months of Premium Student.</h2>
                <div style={{ display: 'flex', gap: '15px' }}>
                    <button style={{ backgroundColor: 'white', color: 'black', padding: '14px 32px', borderRadius: '30px', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '14px' }}>GET PREMIUM STUDENT</button>
                    <button style={{ backgroundColor: 'transparent', color: 'white', padding: '14px 32px', borderRadius: '30px', fontWeight: 'bold', border: '2px solid white', cursor: 'pointer', fontSize: '14px' }}>VIEW PLANS</button>
                </div>
                <p style={{ fontSize: '11px', marginTop: '40px' }}>Terms and conditions apply. Offer starts at ₹59.</p>
            </div>

            {/* Plans Section */}
            <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
                <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: 'Bold', marginBottom: '10px' }}>Pick your Premium</h2>
                <p style={{ textAlign: 'center', marginBottom: '50px', color: '#a7a7a7' }}>Listen without limits on your phone, speaker, and other devices.</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                    {plans.map((plan, index) => (
                        <div key={index} style={{ backgroundColor: '#242424', padding: '20px', borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <div style={{ padding: '5px 10px', backgroundColor: '#ffd2d7', color: 'black', fontWeight: 'bold', fontSize: '12px', width: 'fit-content', borderRadius: '4px', visibility: index < 2 ? 'visible' : 'hidden' }}>FREE FOR 1 MONTH</div>
                            <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>{plan.name}</h3>
                            <p style={{ fontSize: '14px', margin: 0 }}>{plan.price}</p>
                            <p style={{ fontSize: '12px', color: '#a7a7a7' }}>{plan.priceNormal}</p>
                            <hr style={{ borderColor: '#333' }} />
                            <ul style={{ padding: 0 }}>
                                {plan.features.map((feature, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '14px', marginBottom: '10px' }}>
                                        <FaCheck size={16} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button style={{ marginTop: 'auto', backgroundColor: '#ffd2d7', color: 'black', padding: '12px', borderRadius: '30px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>Get Premium</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Subscription;
