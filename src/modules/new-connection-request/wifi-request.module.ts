import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { WifiRequest } from "./wifi-request.model";
import { WifiRequestController } from "./wifi-request.controller";
import { WifiRequestService } from "./wifi-request.service";

@Module({
    imports:[SequelizeModule.forFeature([WifiRequest])],
    controllers:[WifiRequestController],
    providers:[WifiRequestService],
    exports:[],

})
export class WifiRequestModule{

}