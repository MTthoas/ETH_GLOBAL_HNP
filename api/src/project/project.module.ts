import { Module } from "@nestjs/common";
import { ProjectController } from "./project.controller";
import { OrganizationsService } from "../organizations/organizations.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Organization } from "../entities/organization";
import { Project } from "../entities/project";
import { OrganizationsModule } from "../organizations/organizations.module";

@Module({
  controllers: [ProjectController],
  imports: [TypeOrmModule.forFeature([Organization, Project]), OrganizationsModule]
})
export class ProjectModule {
}
