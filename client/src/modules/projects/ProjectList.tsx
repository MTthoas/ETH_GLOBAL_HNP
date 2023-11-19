import {useQuery} from "react-query";
import {getProjects, shortenString} from "./api.ts";
import { NavLink } from "react-router-dom";

const ProjectList = () => {
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
              {data.map((project, index) => (
                  <div className="col-span-1"><NavLink to={"/project/" + project.id} key={index} className="block">
                      <div className="group relative bg-white rounded-lg shadow-lg m-2 overflow-hidden">
                          <img src={`https://gateway.lighthouse.storage/ipfs/${project.photo}`} alt={project.name}
                               className="w-full h-60 object-cover"/>
                          <div className="p-5">
                              <p className="text-lg font-semibold text-gray-800">${"100"} of ${project.amount} goal</p>
                              <div className="w-full bg-gray-light rounded-full h-2.5 dark:bg-gray-700">
                                  <div className="bg-green h-2.5 rounded-full"
                                       style={{width: `${(100 / project.amount) * 100}%`}}></div>
                              </div>
                              <p className="text-gray-600 mt-2">{"1500"} donors</p>
                              <p className="text-gray-500 mt-4">{shortenString(project.description, 50)}</p>
                          </div>
                      </div>
                  </NavLink></div>
            ))}
          </div>
        </div>
      </section>
        </div>
    );
};

export default ProjectList;