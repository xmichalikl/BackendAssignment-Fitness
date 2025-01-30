/*
  Warnings:

  - You are about to drop the `exercise_history` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "exercise_history" DROP CONSTRAINT "exercise_history_exerciseId_fkey";

-- DropForeignKey
ALTER TABLE "exercise_history" DROP CONSTRAINT "exercise_history_userId_fkey";

-- DropTable
DROP TABLE "exercise_history";

-- CreateTable
CREATE TABLE "exercise_tracking" (
    "id" SERIAL NOT NULL,
    "duration" INTEGER,
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "userId" INTEGER NOT NULL,
    "exerciseId" INTEGER NOT NULL,

    CONSTRAINT "exercise_tracking_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "exercise_tracking" ADD CONSTRAINT "exercise_tracking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exercise_tracking" ADD CONSTRAINT "exercise_tracking_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "exercises"("id") ON DELETE CASCADE ON UPDATE CASCADE;
