import React, { useState } from 'react';
import { authService } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { User, Lock, Phone } from 'lucide-react';

function AuthPage({ onLogin }) {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ username: '', password: '', phone: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            if (isLogin) {
                const res = await authService.login(formData.username, formData.password);
                onLogin(res.user);
                navigate('/');
            } else {
                await authService.register(formData.username, formData.password, formData.phone);
                setIsLogin(true); // Switch to login after successful register
                alert("Registration successful. Please login.");
            }
        } catch (err) {
            const errorMessage =
                err.response?.data?.error ||
                (typeof err.response?.data === 'string' ? err.response.data : '') ||
                err.message ||
                "An error occurred";

            setError(errorMessage);
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '4rem auto' }}>
            <div className="card">
                <h2 style={{ textAlign: 'center', color: 'var(--primary)' }}>
                    {isLogin ? 'Welcome Back' : 'Create an Account'}
                </h2>
                
                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label><User size={16} /> Username</label>
                        <input 
                            type="text" 
                            required 
                            value={formData.username}
                            onChange={e => setFormData({...formData, username: e.target.value})}
                        />
                    </div>

                    {!isLogin && (
                        <div className="form-group">
                            <label><Phone size={16} /> Phone Number</label>
                            <input 
                                type="text" 
                                required 
                                value={formData.phone}
                                onChange={e => setFormData({...formData, phone: e.target.value})}
                            />
                        </div>
                    )}

                    <div className="form-group">
                        <label><Lock size={16} /> Password</label>
                        <input 
                            type="password" 
                            required 
                            value={formData.password}
                            onChange={e => setFormData({...formData, password: e.target.value})}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem' }}>
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                    
                    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                        <button 
                            type="button" 
                            className="btn btn-outline" 
                            style={{ border: 'none' }}
                            onClick={() => setIsLogin(!isLogin)}
                        >
                            {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AuthPage;
