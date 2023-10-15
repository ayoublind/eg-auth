import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from './interface/user.interface';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<IUser>) {}
  async createUser(createUserDto: CreateUserDto): Promise<IUser> {
    const newStudent = await new this.userModel(createUserDto);
    return newStudent.save();
  }
  async updateUser(
    userId: string,
    updateUserDto: UpdateUserDto,
  ): Promise<IUser> {
    const existingStudent = await this.userModel.findByIdAndUpdate(
      userId,
      updateUserDto,
      { new: true },
    );
    if (!existingStudent) {
      throw new NotFoundException(`User #${userId} not found`);
    }
    return existingStudent;
  }
  async getAllUsers(): Promise<IUser[]> {
    const studentData = await this.userModel.find();
    if (!studentData || studentData.length == 0) {
      throw new NotFoundException('Users data not found!');
    }
    return studentData;
  }
  async getUser(userId: string): Promise<IUser> {
    const existingUser = await this.userModel.findById(userId).exec();
    if (!existingUser) {
      throw new NotFoundException(`User #${userId} not found`);
    }
    return existingUser;
  }
  async findOne(email: string): Promise<IUser> {
    const findUser = await this.userModel.findOne({ email: email }).exec();
    if (!findUser) {
      throw new NotFoundException(`User #${email} not found`);
    }
    return findUser;
  }
  async deleteUser(userId: string): Promise<IUser> {
    const deletedUser = await this.userModel.findByIdAndDelete(userId);
    if (!deletedUser) {
      throw new NotFoundException(`User #${userId} not found`);
    }
    return deletedUser;
  }
}
