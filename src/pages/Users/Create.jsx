// Import des dépendances nécessaires
import React from 'react';
import { Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Breadcrumb from '@/Components/Breadcrumbs/Breadcrumb';
import SelectInput from '@/Components/SelectInput';

export default function Create({ auth }) {
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        last_name: '',
        first_name: '',
        email: '',
        password: '',
        password_confirmation: '',
        identity_card:'',
        phone: '',
        role: 'user', 
    }); 

    const submit = (e) => {
        e.preventDefault();
        post(route('users.store')); 
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Add User" />
            <Breadcrumb pageName="Add User" />
            <div className="">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-black">
                            <form onSubmit={submit} className="mt-6 space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
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
                                    <div>
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
                                    <div>
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
                                    <div>
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
                                    <div>
                                        <InputLabel htmlFor="password" value="Password" />
                                        <TextInput
                                            id="password"
                                            type="password"
                                            className="mt-1 block w-full"
                                            value={data.password}
                                            onChange={(e) => setData('password', e.target.value)}
                                            required
                                            autoComplete="new-password"
                                        />
                                        <InputError className="mt-2" message={errors.password} />
                                    </div>
                                    <div>
                                        <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                                        <TextInput
                                            id="password_confirmation"
                                            type="password"
                                            name="password_confirmation"
                                            value={data.password_confirmation}
                                            className="mt-1 block w-full"
                                            autoComplete="new-password"
                                            onChange={(e) => setData('password_confirmation', e.target.value)}
                                            required
                                        />
                                        <InputError message={errors.password_confirmation} className="mt-2" />
                                    </div>
                                    <div>
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
                                    <div>
                                        <InputLabel htmlFor="role" value="Role" />
                                        <SelectInput
                                            id="role"
                                            className="mt-1 block w-full"
                                            value={data.role}
                                            onChange={(e) => setData('role', e.target.value)}
                                            options={[
                                                { value: 'user', label: 'Utilisateur' },
                                                { value: 'admin', label: 'Administrateur' },
                                            ]}
                                            required
                                        />
                                        <InputError className="mt-2" message={errors.role} />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <PrimaryButton disabled={processing}>Save</PrimaryButton>
                                    {recentlySuccessful && <p className="text-sm text-gray-600">Saved.</p>}
                                </div>
                            </form>
                            <Link
                                href={route('users.index')}
                                className="text-sm text-gray-600 my-5 underline hover:text-gray-900"
                            >
                                Back to Users
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
