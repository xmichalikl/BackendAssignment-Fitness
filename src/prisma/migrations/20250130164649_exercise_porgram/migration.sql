-- DropForeignKey
ALTER TABLE "exercises" DROP CONSTRAINT "exercises_programId_fkey";

-- AlterTable
ALTER TABLE "exercises" ALTER COLUMN "programId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "exercises" ADD CONSTRAINT "exercises_programId_fkey" FOREIGN KEY ("programId") REFERENCES "programs"("id") ON DELETE SET NULL ON UPDATE CASCADE;
