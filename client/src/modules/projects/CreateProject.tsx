import React, {useState} from "react";
import {useAccount, useMutation} from "wagmi";
import {createProject} from "./api.ts";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import LoadingButton from "../LoadingButton.tsx";


function CreateProject() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);
    const [photo, setPhoto] = useState<File>();
    const [file, setFile] = useState<File>();
    const address = useAccount().address
    
    const navigate = useNavigate()

    console.log(address)

    const mutation = useMutation({
        mutationFn: () => {
            const projectDTO = {
                name: name,
                description: description,
                amount: amount,
                organizationAddress: address,
                photo: photo,
                justification_proof: file
            }

            console.log(projectDTO)

            return createProject(projectDTO)
        },
        onSuccess: (data) => {
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
                               className="block mb-2 text-sm font-medium text-gray-900 ">Name of the
                            project</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                               placeholder="Saving the bees in Madrid" required/>
                    </div>
                    <div className="row-span-3 col-span-1 align-bottom">
                        {photo != undefined &&
                            <img src={URL.createObjectURL(photo)} className="object-contain  max-h-60 w-full"/>}
                    </div>

                    <div>
                        <label htmlFor="amount"
                               className="block mb-2 text-sm font-medium text-gray-900 ">Desired
                            amount (in $)</label>
                        <input type="number" id="amount" value={amount}
                               onChange={(e) => setAmount(parseFloat(e.target.value))}
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                               placeholder="Enter the desired amount you want to receive"/>
                    </div>
                    <div><label className="block mb-2 text-sm font-medium text-gray-900"
                                form="large_size">Upload a picture to show</label>
                        <input
                            className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none "
                            id="large_size" type="file" name={"photo"}
                            onChange={(e) => {
                                if (e.target.files) {
                                    setPhoto(e.target.files[0]);
                                }
                            }}/>
                    </div>
                    <div><label className="block mb-2 text-sm font-medium text-gray-900"
                                form="large_size">Upload a pdf detailing your needs</label>
                        <input
                            className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none "
                            id="large_size" type="file" name="justification_file"
                            onChange={(e) => {
                                if (e.target.files) {
                                    setFile(e.target.files[0]);
                                }
                            }}/>
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="description"
                               className="block mb-2 text-sm font-medium text-gray-900 ">Describe Your
                            Project</label>
                        <textarea id="description" rows={8} value={description}
                                  onChange={(e) => setDescription(e.target.value)}
                                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500   "
                                  required/>
                    </div>
                </div>

                <div className="pt-3">
                    <LoadingButton text={"Create"} loading={mutation.isLoading} onClick={(event: any) => {
                        event.preventDefault()
                        mutation.mutate()
                    }}/>
                </div>
            </form>
        </div>
        </section>

    );
}

export default CreateProject;