import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { OrganizationsService } from '../organizations/organizations.service';
import { ProjectDTO } from '../organizations/interfaces';
import {
  FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';

@Controller('project')
export class ProjectController {
  constructor(private organizationService: OrganizationsService) {}

  @Get('getProjects')
  getAllProjects() {
    return this.organizationService.getAllProjects();
  }

  @Get(':id')
  getProject(@Param() params: any) {
    return this.organizationService.getProjectById(params.id);
  }

  @Get('organization/:address')
  getProjectsByOrganization(@Param() params: any) {
    return this.organizationService.getProjectsByOrganization(params.address);
  }

  @Post()
  createProject(@Body() createProjectDTO: ProjectDTO) {
    console.log(createProjectDTO);
    return this.organizationService.createProject(createProjectDTO);
  }

  @Patch(':id')
  updateProject(@Body() updateProjectDTO: ProjectDTO, @Param() params: any) {
    return this.organizationService.updateProject(params.id, updateProjectDTO);
  }

  @Delete(':id')
  deleteProject(@Param() params: any) {
    return this.organizationService.deleteProject(params.id);
  }
}
