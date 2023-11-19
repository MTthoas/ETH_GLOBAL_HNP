import axios from "axios";
import {API_URL} from "../../App.tsx";

export interface Project {
    id: number;
    name: string;
    description: string;
    address: string;
    amount: number;
    photo?: string;
    justification_file_hash?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Organization {
    id: number;
    name: string;
    description: string;
    website: string;
    logo?: string | null;
    address: string;
    createdAt: Date;
    updatedAt: Date;
}


export const getProjects = async () => {
    const response = await axios.get<Project[]>(API_URL + '/project/getProjects');

    return response.data;
}

export const getOrganizationInfos = async (id: string) => {
    const response = await axios.get<Organization>(API_URL + '/organizations/' + id);

    return response.data;
}

export const getProjectInfos = async (id: string) => {
    const response = await axios.get<Project>(API_URL + '/project/' + id);

    return response.data;
}

export const createProject = async (dto: any) => {

    const response = await axios.post<Project>(API_URL + '/project', dto, {headers: {'Content-Type': 'multipart/form-data'} });

    return response.data;
}

export function shortenString(input: string, maxLength: number): string {
    if (input.length <= maxLength) {
        return input;
    } else {
        return input.slice(0, maxLength - 3) + '...';
    }
}

