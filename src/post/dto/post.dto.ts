import { IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  id: string;

  @IsNotEmpty()
  title: string;

  content: string;
}

export class UpdatePostDto {
  id: string;

  @IsNotEmpty()
  title?: string;

  content?: string;
}
