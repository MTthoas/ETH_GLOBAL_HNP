import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1745680836650 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS "organizations"
        (
            "id"         SERIAL PRIMARY KEY,
            "name"       VARCHAR(255)        NOT NULL,
            description  TEXT                NOT NULL,
            website      VARCHAR(255)        NOT NULL,
            logo         VARCHAR(255)        NULL,
            address      VARCHAR(255) UNIQUE NOT NULL,
            "created_at" TIMESTAMP           NOT NULL DEFAULT now(),
            "updated_at" TIMESTAMP           NOT NULL DEFAULT now()
        );

        CREATE TABLE IF NOT EXISTS "projects"
        (
            "id"                    SERIAL PRIMARY KEY,
            "name"                  VARCHAR(255) NOT NULL,
            description             TEXT         NOT NULL,
            amount                  FLOAT        NOT NULL DEFAULT 0,
            photo                   VARCHAR(255) NULL,
            justification_file_hash VARCHAR(255) NULL,
            "created_at"            TIMESTAMP    NOT NULL DEFAULT now(),
            "updated_at"            TIMESTAMP    NOT NULL DEFAULT now(),

            "organization_address"  VARCHAR(255) NOT NULL,
            FOREIGN KEY ("organization_address") REFERENCES "organizations" ("address") ON DELETE CASCADE ON UPDATE CASCADE
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE IF EXISTS "projects";
        DROP TABLE IF EXISTS "organizations";
    `);
  }
}
