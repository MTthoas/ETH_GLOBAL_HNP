import { Body, Controller, Get, Param, Patch, Post, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { OrganizationsService } from "./organizations.service";
import { OrganizationDTO } from "./interfaces";
import { FilesInterceptor } from "@nestjs/platform-express";

@Controller("organizations")
export class OrganizationsController {
  constructor(private organizationService: OrganizationsService) {
  }

  @Get()
  getAllAssociations() {
    return this.organizationService.getAllAssociations();
  }

  @Get(":address")
  getAssociation(@Param() params: any) {
    return this.organizationService.getAssociationByAddress(params.id);
  }

  @Post()
  createAssociation(@Body() createAssociationDTO: OrganizationDTO) {
    return this.organizationService.createAssociation(createAssociationDTO);
  }

  @Patch(":id")
  updateAssociation(@Body() updateAssociationDTO: OrganizationDTO, @Param() params: any) {
    return this.organizationService.updateAssociation(params.id, updateAssociationDTO);
  }
}
