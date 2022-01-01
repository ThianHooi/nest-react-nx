import { Assembler, ClassTransformerAssembler } from '@nestjs-query/core';
import { OrderDto } from './order.dto';
import { OrderEntity } from './order.entity';

// `@Assembler` decorator will register the assembler with `nestjs-query` and
// the QueryService service will be able to auto discover it.
@Assembler(OrderDto, OrderEntity)
export class OrderAssembler extends ClassTransformerAssembler<
  OrderDto,
  OrderEntity
> {}
