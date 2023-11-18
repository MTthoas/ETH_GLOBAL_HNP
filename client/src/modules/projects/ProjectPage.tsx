import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {getProjectInfos} from "./api.ts";
import Loading from "../Loading.tsx";

const ProjectPage = () => {
    const {id} = useParams()
    if (id == undefined) return "Error, please try again later"

    const {isLoading, isError, isSuccess, data} = useQuery({queryKey: ["get project", id], queryFn: () => getProjectInfos(id)})

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
                <h1 className="text-4xl text-center flex items-center">{data.name}</h1>
            </div>
            <h2 className="p-3 text-2xl italic text-green text-end">Asking for: {data.amount} ETH</h2>

            {data.youtubeVideoId && <div className="h-60 w-full flex flex-nowrap gap-3 p-3 justify-center">
                <iframe src={"https://www.youtube.com/embed/" + data.youtubeVideoId}
                        className="object-cover h-full w-full"
                        title="Koalas 101 | Nat Geo Wild"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
            </div>}
            <div className="p-3"><p>{paragraphs}</p></div>
        </div>
    );
};

export default ProjectPage;