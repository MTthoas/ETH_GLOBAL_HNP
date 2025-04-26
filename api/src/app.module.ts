import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import typeorm from './config/typeorm';
import { OrganizationsModule } from "./organizations/organizations.module";
import { ProjectController } from './project/project.controller';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm]
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => (configService.get("typeorm"))
    }),
    OrganizationsModule,
    ProjectModule
  ],
  controllers: [AppController, ProjectController],
  providers: [AppService]
})
export class AppModule {
}
