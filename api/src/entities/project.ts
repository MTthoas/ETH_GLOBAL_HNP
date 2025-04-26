import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { Organization } from "./Organization";

@Entity({name: "projects"})
export class Project  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column("text")
  description: string;

  @Column({ type: "float", default: 0 })
  amount: number;

  @Column({ length: 255, nullable: true, name: "photo" })
  photo: string;

  @Column({ length: 255, nullable: true, name: "justification_file_hash" })
  justification_file_hash: string;

  @Column({ name: "organization_address" })
  organizationAddress: string;


  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}
