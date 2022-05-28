import { ApiProperty } from "@nestjs/swagger";

export class FoodDto {
    @ApiProperty()
    public name: string;
    @ApiProperty()
    public categoryId: string;
    @ApiProperty()
    public description: string;
    @ApiProperty()
    public imageUrl: string;
}