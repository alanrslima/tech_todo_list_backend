import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks")
export default class Task {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  favorite: boolean;

  @Column()
  concluded: boolean;
}
