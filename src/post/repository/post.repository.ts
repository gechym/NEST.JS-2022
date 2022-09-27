import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/base.reponsitory';
import { Post } from '../model/post.model';

@Injectable()
export class PostRepository extends BaseRepository<Post> {
  constructor(@InjectModel('Post') private readonly postModule: Model<Post>) {
    super(postModule);
  }

  override async create(doc): Promise<any> {
    return super.create(doc);
  }

  override async findById(id: string, option?: any): Promise<Post> {
    return super.findById(id, option);
  }

  override async findByCondition(
    filter: any,
    field?: any | null,
    option?: any | null,
    populate?: any | null,
  ): Promise<any> {
    return super.findByCondition(filter, field, option, populate);
  }

  override async getByCondition(
    filter: any,
    field?: any | null,
    option?: any | null,
    populate?: any | null,
  ): Promise<Post[]> {
    return super.getByCondition(filter, field, option, populate);
  }

  override async findAll(): Promise<Post[]> {
    return super.findAll();
  }
}
