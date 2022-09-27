import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  Delete,
} from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getAllPost(@Query() q: any) {
    return await this.postService.getAllPosts();
  }

  @Get(':id')
  async getPostById(@Param('id') id: string) {
    return await this.postService.getPostById(id);
  }

  @Post()
  async CreatePost(@Body() createDto: CreatePostDto) {
    return await this.postService.createPost(createDto);
  }

  @Put()
  async UpdatePost(@Param('id') id: string, @Body() updateDto: UpdatePostDto) {
    await this.postService.replacePost(id, updateDto);
  }

  @Delete(':id')
  async DeletePost(@Param('id') id: string) {
    console.log('cc');
    await this.postService.deletePost(id);
  }
}
