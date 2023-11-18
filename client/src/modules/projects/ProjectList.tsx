import {useQuery} from "react-query";
import {getProjects} from "./api.ts";
import {FC} from "react";
import { NavLink } from "react-router-dom";

const ProjectList = () => {
    const projectList = [
        {
          url: 'https://images.unsplash.com/photo-1507427100689-2bf8574e32d4?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: "Dr. Abdullah Abdullah's Presidential Election Campaign",
          tag: 'Politics',
          date: '25 May'
        },    {
            url: 'https://images.unsplash.com/photo-1605714007165-c15eac9c647b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGFzc29jaWF0aW9uJTIwaHVtYW5pdGFyaWFufGVufDB8fDB8fHwy',
            title: "Dr. Abdullah Abdullah's Presidential Election Campaign",
            tag: 'Politics',
            date: '25 May'
          },
          {
            url: 'https://images.unsplash.com/photo-1519821172144-4f87d85de2a1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvcmVzdHxlbnwwfHwwfHx8Mg%3D%3D',
            title: "Dr. Abdullah Abdullah's Presidential Election Campaign",
            tag: 'Forest',
            date: '25 May'
          },
          {
            url: 'https://images.unsplash.com/photo-1585119192228-f072c53bc55c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9sbHV0aW9ufGVufDB8fDB8fHwy',
            title: "Dr. Abdullah Abdullah's Presidential Election Campaign",
            tag: 'Politics',
            date: '25 May'
          },
            {
                url: 'https://images.unsplash.com/photo-1585119192228-f072c53bc55c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9sbHV0aW9ufGVufDB8fDB8fHwy',
                title: "Dr. Abdullah Abdullah's Presidential Election Campaign",
                tag: 'Politics',
                date: '25 May'
            },
            {
            url: 'https://images.unsplash.com/photo-1585119192228-f072c53bc55c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9sbHV0aW9ufGVufDB8fDB8fHwy',
            title: "Dr. Abdullah Abdullah's Presidential Election Campaign",
            tag: 'Politics',
            date: '25 May'
          },
      ];

    const {isLoading, isError, isSuccess, data} = useQuery({queryKey: "get projects", queryFn: getProjects})
    if (isLoading) return 'Loading...'

    if (isError || !isSuccess) return 'An error has occurred: '

    if (data.length === 0) return 'No projects found'

    console.log(data)

    return (
        <div>
             <section className="mb-24 px-8">
                <div className="max-w-screen-xl px-5 mx-auto">
                <p className="text-xl leading-6 text-gray-900 mt-12 mb-6"> List of projects</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                    {projectList.map((image, index) => (
                        <>
                        <NavLink to={"/project/" + index}>
                        <div key={index} className="group relative w-full h-120 flex items-end justify-start text-left bg-cover bg-center" 
                            style={{ backgroundImage: `url(${image.url})` }}>

                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent"></div>

                        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-800 to-transparent opacity-0 group-hover:opacity-50 transition ease-in-out duration-500"></div>
                        <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                            <div></div>
                            {/* <a href="#" className="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">{image.tag}</a> */}
                            <div className="text-white font-regular flex flex-col justify-start">
                            <span className="text-3xl leading-0 font-semibold">{image.date.split(' ')[0]}</span>
                            <span className="-mt-3">{image.date.split(' ')[1]}</span>
                            </div>
                        </div>
                        <main className="p-5 z-10">
                            <a href="#" className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">{image.title}</a>
                        </main>
                        </div>
                        </NavLink>  
                       </>
                    ))}
                    </div>
                </div>
                </section>
                <section className="project px-8">
                    <div>
                    {data.map((project) => (
                        <div key={project.id}>
                            <h1>{project.name}</h1>
                            <p>{project.description}</p>
                        </div>
                    ))}
                    </div>
                </section>
        </div>
    );
};

export default ProjectList;