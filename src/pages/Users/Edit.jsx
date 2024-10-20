import React from 'react';
import { Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import SelectInput from '@/Components/SelectInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Breadcrumb from '@/Components/Breadcrumbs/Breadcrumb';

export default function Edit({ auth, user }) {
    const { data, setData, put, errors, processing, recentlySuccessful } = useForm({
        first_name: user.first_name,
        last_name: user.last_name,
        identity_card: user.identity_card,
        email: user.email,
        phone: user.phone ?? '',
        role: user.role ?? 'user',
    });

    const submit = (e) => {
        e.preventDefault();
        put(route('users.update', user.id)); 
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit User" />
            <Breadcrumb pageName="Edit User" />
            <div className="text-black">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <form onSubmit={submit} className="mt-6 space-y-6">
                                <div className="flex flex-wrap -mx-3">
                                    <div className="w-1/2 px-3">
                                        <InputLabel htmlFor="first_name" value="Prénom" />
                                        <TextInput
                                            id="first_name"
                                            className="mt-1 block w-full"
                                            value={data.first_name}
                                            onChange={(e) => setData('first_name', e.target.value)}
                                            required
                                            autoComplete="name"
                                        />
                                        <InputError className="mt-2" message={errors.first_name} />
                                    </div>
                                    <div className="w-1/2 px-3">
                                        <InputLabel htmlFor="last_name" value="Nom" />
                                        <TextInput
                                            id="last_name"
                                            className="mt-1 block w-full"
                                            value={data.last_name}
                                            onChange={(e) => setData('last_name', e.target.value)}
                                            required
                                            autoComplete="last_name"
                                        />
                                        <InputError className="mt-2" message={errors.last_name} />
                                    </div>     
                                </div>
                                <div className="flex flex-wrap -mx-3">
                                    <div className="w-1/2 px-3">
                                        <InputLabel htmlFor="identity_card" value="Carte d'Identité Nationale" />
                                        <TextInput
                                            id="identity_card"
                                            className="mt-1 block w-full"
                                            value={data.identity_card}
                                            onChange={(e) => setData('identity_card', e.target.value)}
                                            required
                                            autoComplete="identity_card"
                                        />
                                        <InputError className="mt-2" message={errors.identity_card} />
                                    </div>
                                    <div className="w-1/2 px-3">
                                        <InputLabel htmlFor="email" value="Email" />
                                        <TextInput
                                            id="email"
                                            type="email"
                                            className="mt-1 block w-full"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            required
                                            autoComplete="email"
                                        />
                                        <InputError className="mt-2" message={errors.email} />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3">
                                    <div className="w-1/2 px-3">
                                        <InputLabel htmlFor="phone" value="Phone" />
                                        <TextInput
                                            id="phone"
                                            className="mt-1 block w-full"
                                            value={data.phone}
                                            onChange={(e) => setData('phone', e.target.value)}
                                            autoComplete="tel"
                                        />
                                        <InputError className="mt-2" message={errors.phone} />
                                    </div>
                                    <div className="w-1/2 px-3">
                                        <InputLabel htmlFor="role" value="Role" />
                                        <SelectInput
                                            id="role"
                                            className="mt-1 block w-full"
                                            value={data.role}
                                            onChange={(e) => setData('role', e.target.value)}
                                            options={[
                                                { value: 'user', label: 'Utilisateur' },
                                                { value: 'admin', label: 'Admnistrateur' },
                                            ]}
                                            required
                                        />
                                        <InputError className="mt-2" message={errors.role} />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <PrimaryButton disabled={processing}>Mettre à jour</PrimaryButton>
                                    {recentlySuccessful && <p className="text-sm text-gray-600">Mis à jour avec succès</p>}
                                </div>
                            </form>
                            <Link
                                href={route('users.index')}
                                className="text-sm text-gray-600 my-5 underline hover:text-gray-900"
                            >
                                Retours aux Utilisateurs
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
