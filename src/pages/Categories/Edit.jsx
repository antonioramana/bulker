import Authenticated from '../../layouts/authenticatedLayout';
import EditCategory from './Partials/EditCategory';

export default function UpdateCategory() {
    return (
        <Authenticated
        >
            <div className="text-black">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <EditCategory />
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
