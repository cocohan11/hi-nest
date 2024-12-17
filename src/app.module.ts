import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';


@Module({ // 모듈이란? 📁 서류철처럼 관련된 것들을 한 폴더에 모아두는 것
  imports: [MoviesModule],
  controllers: [], // 하는 일 : url + 함수 매핑 (express의 라우터와 같음)
  providers: [],
})
export class AppModule {}

