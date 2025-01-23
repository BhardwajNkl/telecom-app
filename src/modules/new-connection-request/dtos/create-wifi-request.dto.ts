import { IsNotEmpty, IsString } from "class-validator";

export class CreateWifiRequestDto{
    @IsNotEmpty()
    @IsString()
    mobile:string;
    
    @IsNotEmpty()
    @IsString()
    name:string;

    @IsNotEmpty()
    @IsString()
    address:string
}