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
          <p className="text-xl leading-6 text-gray-900 mt-12 mb-6">Fundraising events</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {projectList.map((project, index) => (
              <NavLink to={"/project/6"} key={index} className="block">
                <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src={project.url} alt={project.title} className="w-full h-60 object-cover"/>
                  <div className="p-5">
                    <p className="text-lg font-semibold text-gray-800">${"100"} of ${"1000"} goal</p>
                    <div className="w-full bg-gray-light rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-green h-2.5 rounded-full" style={{ width: `${(100 / 1000) * 100}%` }}></div>
                    </div>
                    <p className="text-gray-600 mt-2">{"1500"} donors</p>
                    <p className="text-gray-500 mt-4"> Lorem Description loren radd doazda dazdazd cxsqaxs dqazazd</p>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>
        </div>
    );
};

export default ProjectList;