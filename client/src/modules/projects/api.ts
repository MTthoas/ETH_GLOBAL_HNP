import axios from "axios";
import {API_URL} from "../../App.tsx";
import lighthouse from '@lighthouse-web3/sdk'

export interface Project {
    id: number;
    name: string;
    description: string;
    address: string;
    amount: number;
    youtubeVideoId?: string;
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

    const apiKey = '51cdf183.ae8c99c3250b418092fff0f43ad929d9';
    const uploadResponse = await lighthouse.upload(
        '/home/cosmos/Desktop/wow.jpg', 
        apiKey
    );

    console.log(uploadResponse)

    
    const response = await axios.post<Project>(API_URL + '/project', dto);

    return response.data;
}

