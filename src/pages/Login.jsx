import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputLabel from '../components/InputLabel';
import TextInput from '../components/TextInput';
import Navbar from '../layouts/NavBar';
import InputError from '../components/InputError';
import axios from 'axios';
import { API_URL } from '../config/api';

export default function Login() {
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    
    const [errors, setErrors] = useState({});
    const [generalError, setGeneralError] = useState(''); // Pour le message d'erreur général
    const [processing, setProcessing] = useState(false);
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});
        setGeneralError(''); // Réinitialiser l'erreur générale

        try {
            const response = await axios.post(`${API_URL}/api/login`, {
                email: data.email,
                password: data.password
            });

            const { token, user } = response.data;
            console.log('Login successful:', token, user);

            localStorage.setItem('authToken', token);
            localStorage.setItem('user', JSON.stringify(user));

            navigate('/bulker/admin/dashboard');
        } catch (error) {
            // Gérer les erreurs
            if (error.response && error.response.status === 400) {
                setGeneralError('Email ou mot de passe incorrect');
            } else {
                setGeneralError('Une erreur est survenue. Veuillez réessayer.');
            }
        } finally {
            setProcessing(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center text-blue-950 mb-6">Connexion</h2>
                    <form onSubmit={submit}>
                        <div className="mb-4">
                            <InputLabel htmlFor="email" value="Email" className="block text-sm font-medium text-gray-700" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-cyan-500 focus:border-cyan-500"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData({ ...data, email: e.target.value })}
                            />

                            <InputError message={errors.email} className="mt-2 text-sm text-red-600" />
                        </div>

                        <div className="mb-6">
                            <InputLabel htmlFor="password" value="Mot de passe" className="block text-sm font-medium text-gray-700" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-cyan-500 focus:border-cyan-500"
                                autoComplete="current-password"
                                onChange={(e) => setData({ ...data, password: e.target.value })}
                            />

                            <InputError message={errors.password} className="mt-2 text-sm text-red-600" />
                        </div>

                        <div className="flex items-center justify-center">
                            <button
                                className={`w-full py-3 px-4 text-white font-semibold rounded-md bg-blue-950 hover:bg-cyan-600 transition ease-in-out duration-150 ${processing ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={processing}
                            >
                                {processing ? 'Connexion...' : 'Connexion'}
                            </button>
                        </div>

                        {/* Affichage du message d'erreur général */}
                        {generalError && (
                            <div className="mt-4 text-sm text-red-600 text-center">
                                {generalError}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </>
    );
}
