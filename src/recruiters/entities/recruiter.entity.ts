import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Recruiter {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('text')
  photo: string;

  @Column('text')
  surname: string;

  @Column('text')
  name: string;

  @Column('text')
  patronymic: string;

  @Column('timestamp')
  birth: string;

  @Column('text')
  residence_address: string;

  @Column('text')
  education: string;

  @Column('text')
  position: string;
}
