import { AutoIncrement, Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
export class WifiRequest extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    mobile:string;

    @Column
    name:string;

    @Column
    address:string
}