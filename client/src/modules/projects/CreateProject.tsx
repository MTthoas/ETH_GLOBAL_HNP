import {useState} from "react";
import {useAccount, useMutation} from "wagmi";
import {createProject} from "./api.ts";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";


function CreateProject() {
    // useState for all inputs
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [youtubeVideoId, setYoutubeVideoId] = useState("");
    const [amount, setAmount] = useState(0);
    const address = useAccount().address
    
    const navigate = useNavigate()

    console.log(address)

    const mutation = useMutation({
        mutationFn: () => {
            const projectDTO = {
                name: name,
                description: description,
                youtubeVideoId: youtubeVideoId,
                amount: amount,
                organizationAddress: address
            }

            console.log(projectDTO)

            return createProject(projectDTO)
        },
        onSuccess: (data) => {
            console.log("Project created successfully")
            toast.success("Project created successfully")
            navigate("/project/" + data.id)
        },
        onError: () => {
            toast.error("An error has occurred: please try again later")
        }
    })

    return (
        <section className="mb-24 px-8">
        <div className="max-w-screen-xl px-5 mx-auto">
            <p className="text-xl leading-6 text-gray-900 mt-12 mb-12"> Create a project</p>
            <form>
                <div className="grid gap-6 mb-10 md:grid-cols-2">
                    <div>
                        <label htmlFor="name"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name of the
                            project</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Saving the bees in Madrid" required/>
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="description"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Describe Your
                            Project</label>
                        <textarea id="description" rows={8} value={description}
                                  onChange={(e) => setDescription(e.target.value)}
                                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  required/>
                    </div>
                    <div>
                        <label htmlFor="youtubeVideoId"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Youtube Video
                            for context</label>
                        <input type="text" id="youtubeVideoId" value={youtubeVideoId}
                               onChange={(e) => setYoutubeVideoId(e.target.value)}
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Enter a youtube video link providing the context needed"/>
                    </div>
                    <div>
                        <label htmlFor="amount"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Desired
                            amount</label>
                        <input type="number" id="amount" value={amount}
                               onChange={(e) => setAmount(parseFloat(e.target.value))}
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Enter the desired amount you want to receive"/>
                    </div>
                </div>

                <div className="pt-3">
                    <button onClick={(event) => {
                        event.preventDefault()
                        mutation.mutate()
                    }}
                            className="bg-green text-white rounded-lg px-5 py-2">Create
                    </button>
                </div>
            </form>
        </div>
        </section>

    );
};

export default CreateProject;