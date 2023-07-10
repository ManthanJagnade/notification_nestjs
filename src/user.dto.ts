import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class UserDTO {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsEnum(['teacher', 'parent'])
  role: string;
 
 
  @IsNotEmpty()
    @IsString()
    id: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    class: string;
  
}
