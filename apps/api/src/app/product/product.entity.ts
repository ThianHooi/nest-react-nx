import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrderProductEntity } from '../order-product/order-product.entity';
import { UserEntity } from '../user/user.entity';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  type!: string;

  @Column()
  description: string;

  @Column('float')
  price!: number;

  @Column()
  isAvailable!: boolean;

  @Column()
  imageUrl: string;

  @ManyToOne(() => UserEntity, (user) => user.products)
  user: UserEntity;

  @OneToMany(() => OrderProductEntity, (op) => op.productId)
  orders: OrderProductEntity;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;
}
