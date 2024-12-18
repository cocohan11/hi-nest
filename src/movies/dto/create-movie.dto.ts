import { IsNumber, IsString } from "class-validator";

export class CreateMovieDto {

    @IsString()
    readonly title: string;

    @IsNumber()
    readonly year: number;

    @IsString({ each: true }) // 문자열인지 검사 
    readonly genres: string[];
}

