import { IsNotEmpty } from 'class-validator';

export class OrganizationDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  logo: string;

  website: string;

  @IsNotEmpty()
  address: string;
}

export class ProjectDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  organizationAddress: string;

  @IsNotEmpty()
  amount: number;

  photo: string;

  justification_file_hash: string;
}