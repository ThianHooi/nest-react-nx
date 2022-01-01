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
import { OrderStatus } from './order-status';

@Entity('order')
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    default: OrderStatus.CREATED,
  })
  status!: string;

  @Column('float', { nullable: true })
  price: number;

  @ManyToOne(() => UserEntity, (user) => user.orders)
  user!: UserEntity;

  @OneToMany(() => OrderProductEntity, (op) => op.orderId)
  orderProducts!: OrderProductEntity[];

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;
}
