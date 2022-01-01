import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrderEntity } from '../order/order.entity';
import { ProductEntity } from '../product/product.entity';

@Entity()
export class OrderProductEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  quantity!: number;

  @Column()
  unitPrice!: number;

  @Column()
  totalPrice!: number;

  @ManyToOne(() => ProductEntity, (product) => product.orders)
  productId: ProductEntity;

  @ManyToOne(() => OrderEntity, (order) => order.orderProducts)
  orderId: OrderEntity;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;
}
