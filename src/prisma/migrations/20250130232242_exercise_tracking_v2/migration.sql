/*
  Warnings:

  - Made the column `duration` on table `exercise_tracking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `completedAt` on table `exercise_tracking` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "exercise_tracking" ALTER COLUMN "duration" SET NOT NULL,
ALTER COLUMN "completedAt" SET NOT NULL;
