import Authenticated from '../../layouts/authenticatedLayout';
import EditProduct from './Partials/EditProduct';

export default function UpdateProduct() {
    return (
        <Authenticated
        >
            <div className="text-black">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <EditProduct/>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
