import { Module } from "@nestjs/common";
import { OrganizationsController } from "./organizations.controller";
import { OrganizationsService } from "./organizations.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Organization } from "../entities/organization";
import { Project } from "../entities/project";

@Module({
  imports: [TypeOrmModule.forFeature([Organization, Project])],
  controllers: [OrganizationsController],
  providers: [OrganizationsService],
  exports: [OrganizationsService]
})
export class OrganizationsModule {
}
