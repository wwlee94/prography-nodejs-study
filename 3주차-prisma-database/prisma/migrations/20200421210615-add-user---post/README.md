# Migration `20200421210615-add-user---post`

This migration has been generated by wwlee94 at 4/21/2020, 9:06:16 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE `sample`.`User` (
    `email` varchar(191) NOT NULL  ,
    `id` int NOT NULL  AUTO_INCREMENT,
    `name` varchar(191)   ,
    PRIMARY KEY (`id`)
) 
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `sample`.`Post` (
    `authorId` int NOT NULL ,
    `id` int NOT NULL  AUTO_INCREMENT,
    `published` boolean NOT NULL DEFAULT true ,
    `title` varchar(191) NOT NULL  ,
    PRIMARY KEY (`id`)
) 
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE UNIQUE INDEX `User.email` ON `sample`.`User`(`email`)

ALTER TABLE `sample`.`Post` ADD FOREIGN KEY (`authorId`) REFERENCES `sample`.`User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200421192231-add-todo-table..20200421210615-add-user---post
--- datamodel.dml
+++ datamodel.dml
@@ -1,8 +1,8 @@
 // 프리즈마는 확장성이 좋다
 // 프로젝트를 graphql로 변환할 때도 좋다
 datasource mysql {
-  url = "***"
+  url      = env("DB_URL")
   provider = "mysql"
 }
 generator client {
@@ -17,5 +17,20 @@
   title       String
   description String? //nullable
   @@map("todos") // Todo 모델 -> 실제 DB에 저장되는 컬럼 이름을 'todos'로 하겠다.
+}
+
+model User {
+  id           Int       @id @default(autoincrement())
+  name         String?
+  email        String    @unique
+  posts        Post[]
+}
+
+model Post {
+  id        Int     @id @default(autoincrement())
+  title     String
+  published Boolean @default(true)
+  author    User    @relation(fields: [authorId], references: [id])
+  authorId  Int
 }
```


