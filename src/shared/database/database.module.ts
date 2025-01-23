import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
    imports: [
        SequelizeModule.forRootAsync({
            useFactory: ()=>({
                host:'localhost',
                port:3306,
                username:'root',
                password:'root',
                database:'telecom-db',
                dialect:'mysql',
                autoLoadModels:true,
                synchronize:true,
            })
        })
    ],
    exports: [SequelizeModule],
})
export class DatabaseModule {

}