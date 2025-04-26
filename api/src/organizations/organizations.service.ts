import { Injectable } from '@nestjs/common';
import { Organization } from '../entities/organization';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from '../entities/project';
import { ProjectDTO } from './interfaces';
import lighthouse from '@lighthouse-web3/sdk';
@Injectable()
export class OrganizationsService {
  constructor(
    @InjectRepository(Organization)
    private organizationRepository: Repository<Organization>,
    @InjectRepository(Project) private projectRepository: Repository<Project>,
  ) {}

  // get all associations
  async getAllAssociations() {
    return await this.organizationRepository.find();
  }

  async createAssociation(createAssociationDTO: Partial<Organization>) {
    const [newAssociation] = await Promise.all([
      this.organizationRepository.create(createAssociationDTO),
    ]);
    await this.organizationRepository.save(newAssociation);
    return newAssociation;
  }

  async updateAssociation(
    id: number,
    updateAssociationDTO: Partial<Organization>,
  ) {
    await this.organizationRepository.update(id, updateAssociationDTO);

    return this.organizationRepository.findOne({ where: { id } });
  }

  async getAllProjects() {
    return this.projectRepository.find();
  }

  async createProject(createProjectDTO: ProjectDTO) {
    const [newProject] = await Promise.all([
      this.projectRepository.create(createProjectDTO),
    ]);
    await this.projectRepository.save(newProject);

    return newProject;
  }

  async updateProject(id: number, updateProjectDTO: ProjectDTO) {
    await this.projectRepository.update(id, updateProjectDTO);

    return this.projectRepository.findOne({ where: { id } });
  }

  async deleteProject(id: number) {
    const project = await this.projectRepository.findOne({ where: { id } });
    if (!project) {
      throw new Error('Project not found');
    }
    await this.projectRepository.delete(id);
    return project;
  }

  getAssociationByAddress(address: string) {
    return this.organizationRepository.findOne({ where: { address } });
  }

  getProjectById(id: number) {
    return this.projectRepository.findOne({ where: { id } });
  }

  getProjectsByOrganization(address: string) {
    return this.projectRepository.find({
      where: { organizationAddress: address },
    });
  }

  private async uploadFile(file: Express.Multer.File) {
    const apiKey = process.env.LIGHTHOUSE_API_KEY;
    const uploadResponse = await lighthouse.uploadBuffer(file.buffer, apiKey);

    return uploadResponse.data.Hash;
  }
}
