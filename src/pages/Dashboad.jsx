import React, { useEffect, useState } from 'react';
import { UserIcon, AcademicCapIcon, BookOpenIcon } from "@heroicons/react/24/solid";
import axiosInstance from '../config/axiosInstance'; // Importer l'instance Axios configurée
import AuthenticatedLayout from '../layouts/authenticatedLayout';
import Loader from '../components/Loader';

export default function Dashboard() {
    const [dashboardData, setDashboardData] = useState({
        users: 0,
        products: 0,
        categories: 0,
        contacts: 0,
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Utiliser useEffect pour récupérer les données du tableau de bord lors du montage du composant
    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const response = await axiosInstance.get('/api/dashboard');
                setDashboardData(response.data);  // Mettre à jour l'état avec les données reçues
                setLoading(false);
            } catch (err) {
                setError('Erreur lors de la récupération des données du tableau de bord');
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <AuthenticatedLayout>
            <div className="py-12">
            {loading ? (
                    <Loader />
                ):(
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        <div className="rounded-lg bg-green-800 text-white flex items-center justify-center p-6">
                            <UserIcon className="h-12 w-12" />
                            <div className="ml-4">
                                <div className="text-3xl font-semibold">{dashboardData.users}</div>
                                <div className="text-sm">Utilisateurs</div>
                            </div>
                        </div>

                        <div className="rounded-lg bg-red-800 text-white flex items-center justify-center p-6">
                            <BookOpenIcon className="h-12 w-12" />
                            <div className="ml-4">
                                <div className="text-3xl font-semibold">{dashboardData.products}</div>
                                <div className="text-sm">Produits</div>
                            </div>
                        </div>

                        <div className="rounded-lg bg-blue-800 text-white flex items-center justify-center p-6">
                            <AcademicCapIcon className="h-12 w-12" />
                            <div className="ml-4">
                                <div className="text-3xl font-semibold">{dashboardData.categories}</div>
                                <div className="text-sm">Categories</div>
                            </div>
                        </div>

                        <div className="rounded-lg bg-yellow-800 text-white flex items-center justify-center p-6">
                            <AcademicCapIcon className="h-12 w-12" />
                            <div className="ml-4">
                                <div className="text-3xl font-semibold">{dashboardData.contacts}</div>
                                <div className="text-sm">Contact</div>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
        </AuthenticatedLayout>
    );
}
