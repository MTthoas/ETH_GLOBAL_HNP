import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn, JoinColumn, ManyToOne
} from "typeorm";
import { Project } from "./Project";

@Entity({name: "organizations"})
export class Organization  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column("text")
  description: string;

  @Column({ length: 255 })
  website: string;

  @Column({ length: 255, nullable: true })
  logo: string;

  @Column({ length: 255 })
  address: string;


  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}