import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class OrdersService {

  constructor(
    @InjectModel(Order)
    private orderModel: typeof Order) { }

  async create(createOrderDto: CreateOrderDto) {
    return await this.orderModel.create({
      amount: createOrderDto.amount
    })
  }

  async findAll() {
    return await this.orderModel.findAll();
  }

  async findOne(id: string) {
    return await this.orderModel.findByPk(id, { rejectOnEmpty: true })
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    const order = await this.orderModel.findByPk(id, { rejectOnEmpty: true })
    order.update({ amount: updateOrderDto.amount })
    return order
  }

  async remove(id: string) {
    const order = await this.orderModel.findByPk(id, { rejectOnEmpty: true })
    order.destroy()
  }
}
