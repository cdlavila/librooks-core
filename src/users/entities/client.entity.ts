import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 'clients' })
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    unique: false,
    name: 'first_name',
  })
  firstName: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    unique: false,
    name: 'last_name',
  })
  lastname: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    unique: false,
    name: 'place_of_birth',
  })
  placeOfBirth: string;

  @Column({
    type: 'date',
    nullable: false,
    unique: false,
    name: 'date_of_birth',
  })
  dateOfBirth: Date;

  @Column({
    type: 'enum',
    enum: ['femenino' , 'masculino' , 'otro'],
    nullable: false,
    unique: false,
    name: 'gender',
  })
  gender: 'femenino' | 'masculino' | 'otro';

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    unique: false,
    name: 'address',
  })
  addresss: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    unique: true,
    name: 'email',
  })
  email: string;

  @Column({
    type: 'boolean',
    nullable: false,
    default: false,
    name: 'subscribed_ews',
  })
  subscribedNews: boolean;

  @Column({
    type: 'array',
    nullable: false,
    unique: false,
    name: 'preferences',
  })
  preferences: Array<string>;

  @OneToOne(() => User)
    @JoinColumn({name: 'user_id'})
    User: User
}
