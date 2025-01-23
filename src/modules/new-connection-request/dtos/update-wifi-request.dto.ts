import { PartialType } from "@nestjs/mapped-types";
import { CreateWifiRequestDto } from "./create-wifi-request.dto";
import { IsNotEmpty, IsNumber } from "class-validator";

export class UpdateWifiRequestDto extends PartialType(CreateWifiRequestDto){
    @IsNumber()
    @IsNotEmpty()
    id:number;
}