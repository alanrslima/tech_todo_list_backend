import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks")
export default class Task {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  favorite: boolean;

  @Column()
  concluded: boolean;
}
