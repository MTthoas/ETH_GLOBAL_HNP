import {Link, useParams} from "react-router-dom";
import {getOrganizationInfos} from "./api.ts";
import {useQuery} from "react-query";
import Loading from "../Loading.tsx";
import {useAccount} from "wagmi";
import {AiFillPlusCircle} from "react-icons/ai";

const OrganizationPage = () => {
    const {id} = useParams()
    if (id == undefined) return "Error, please try again later"
    const myOrganization = useAccount().address === id

    const {isLoading, isError, isSuccess, data} = useQuery({queryKey: ["get organization", id], queryFn: () => getOrganizationInfos(id)})

    if (isLoading) return <Loading/>

    if (isError || !isSuccess) return 'An error has occurred: '


    const lines = data.description.split('\n');

    const paragraphs = lines.map((line, index) => (
        <p key={index}>{line}</p>
    ));

    return (
        <div className="max-w-screen-lg mx-auto">
            <div className="flex justify-between px-5 py-2 ">
                <img src={"/public/unicef.png"} className="object-contain h-40"/>
                <h1 className="text-4xl text-center flex items-center">{data.name.toUpperCase()}</h1>
            </div>
            {myOrganization && <div className="flex p-6 gap-5">
                <Link to="/create-project">
                    <button className="bg-green text-white rounded-lg px-5 py-2 flex gap-1 items-center">
                        <AiFillPlusCircle/>Create a project
                    </button>
                </Link>
                <div className="grow"></div>
            </div>}

            <div className="h-60 w-full flex flex-nowrap gap-3 p-3">
                <img src="/public/clean_water.jpg" className="object-cover h-full w-full"/>
                <img src="/public/school_masks.jpg" className="object-cover h-full w-full"/>
            </div>
            <div className="p-3"><p>{paragraphs}</p></div>
        </div>
    );
};

export default OrganizationPage;