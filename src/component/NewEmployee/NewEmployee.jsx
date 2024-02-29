import Sidebar from "../Sidebar";


const NewEmployee = () => {
    return (
        <div className="">
            <Sidebar/>
            <div> 
                  
                <div className="">
                    <div className="container mx-auto p-4 -mt-[700px]">
                    <form
                        className="w-full max-w-lg mx-auto bg-blue-50 m-5 p-5 mt-20 rounded-md "
                        
                    >
                        <h1 className="text-blue-400 text-2xl pb-6 font-bold">Add an Employee</h1> 
                        <div className="grid grid-cols-2 gap-4 mb-4">
                         
                        <div className="col-span-1">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                            Name
                            </label>
                            <input
                            type="text"
                            id="title"
                            name="title"
                            className="w-full px-3 py-2 border rounded-lg"
                            />
                        </div>

                        <div className="col-span-1">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                            Image
                            </label>
                            <input
                            type="text"
                            id="image"
                            name="image"
                            className="w-full px-3 py-2 border rounded-lg"
                            placeholder="Give an URL"
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                            </label>
                            <input
                            type="text"
                            id="tags"
                            name="tags"
                            className="w-full px-3 py-2 border rounded-lg"
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                            Joining Date
                            </label>
                            <input
                            type="text"
                            id="tags"
                            name="tags"
                            className="w-full px-3 py-2 border rounded-lg"
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                            Designation
                            </label>
                            <input
                            type="text"
                            id="image"
                            name="image"
                            className="w-full px-3 py-2 border rounded-lg"
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                            Department
                            </label>
                            <input
                            type="text"
                            id="image"
                            name="image"
                            className="w-full px-3 py-2 border rounded-lg"
                            />
                        </div>
                        </div>

                        <div className="">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Others
                        </label>
                        <textarea
                            type="text"
                            id="description"
                            name="description"
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                        </div>

                        <div className="mt-4">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg"
                        >
                            Add Employee
                        </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewEmployee;