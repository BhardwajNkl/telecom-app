import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { WifiRequest } from "./wifi-request.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateWifiRequestDto } from "./dtos/create-wifi-request.dto";

@Injectable()
export class WifiRequestService {
    constructor(
        @InjectModel(WifiRequest)
        private readonly requestModel: typeof WifiRequest
    ) { }

    async getRequests(): Promise<WifiRequest[]> {
        return this.requestModel.findAll();
    }

    async getRequestById(id: number):Promise<WifiRequest> {
        return this.requestModel.findByPk(id);
    }

    async newRequest(createRequestDto:CreateWifiRequestDto): Promise<WifiRequest> {
        try{
            const request = await WifiRequest.create({...createRequestDto});
            // Start 'GET_WIFI_PROCESS' instance in Camunda.
            
            return request;
        } catch(error){
            throw new InternalServerErrorException("Request failed!");
        }
    }
}