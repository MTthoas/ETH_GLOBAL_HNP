import {useQuery} from "react-query";
import {getProjects} from "./api.ts";
import {FC} from "react";

const ProjectList: FC = () => {
    const projectList = [
        {
            photo: 'https://images.unsplash.com/photo-1507427100689-2bf8574e32d4?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: "Dr. Abdullah Abdullah's Presidential Election Campaign",
            amount: 13,
            date: '25 May'
        },    {
            photo: 'https://images.unsplash.com/photo-1605714007165-c15eac9c647b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGFzc29jaWF0aW9uJTIwaHVtYW5pdGFyaWFufGVufDB8fDB8fHwy',
            title: "Dr. Abdullah Abdullah's Presidential Election Campaign",
            amount: 13,
            date: '25 May'
        },
        {
            photo: 'https://images.unsplash.com/photo-1519821172144-4f87d85de2a1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvcmVzdHxlbnwwfHwwfHx8Mg%3D%3D',
            title: "Dr. Abdullah Abdullah's Presidential Election Campaign",
            amount: 13,
            date: '25 May'
        },
        {
            photo: 'https://images.unsplash.com/photo-1585119192228-f072c53bc55c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9sbHV0aW9ufGVufDB8fDB8fHwy',
            title: "Dr. Abdullah Abdullah's Presidential Election Campaign",
            amount: 13,
            date: '25 May'
        },
    ];
    const {isLoading, isError, isSuccess, data} = useQuery({queryKey: "get projects", queryFn: getProjects})
    if (isLoading) return 'Loading...'

    if (isError || !isSuccess) return 'An error has occurred: '

    if (data.length === 0) return 'No projects found'

    return (
        <div>
            {data.map((project) => (
                <div key={project.id}>
                    <h1>{project.name}</h1>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;