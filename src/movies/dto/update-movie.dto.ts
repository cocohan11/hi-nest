import { PartialType } from "@nestjs/mapped-types";
import { CreateMovieDto } from "./create-movie.dto";


export class UpdateMovieDto extends PartialType(CreateMovieDto) {} // 필수가 아님 
// CreateMovieDto와 별개로 UpdateMovieDto를 만드는 이유
// : 유효성 검증 규칙이 다름
// update 일부만 할 수도 있는데 createDTO쓰면 왜 요청 이거밖에 안 보내냐고 에러뜰 수 있음음
