import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { WifiRequestService } from "./wifi-request.service";
import { WifiRequest} from "./wifi-request.model";
import { CreateWifiRequestDto } from "./dtos/create-wifi-request.dto";

@Controller('wifi-request')
export class WifiRequestController{
    constructor(private readonly wifiRequestService: WifiRequestService){}

    @Get()
    async getRequests(): Promise<WifiRequest[]>{
        return this.wifiRequestService.getRequests();
    }

    @Get(':id')
    async getRequestById(@Param('id', ParseIntPipe) id:number): Promise<WifiRequest>{
        return this.wifiRequestService.getRequestById(id);
    }

    @Post()
    async newRequest(@Body() createWifiRequestDto: CreateWifiRequestDto): Promise<WifiRequest>{
        return this.wifiRequestService.newRequest(createWifiRequestDto);
    }
}