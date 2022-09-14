-- CreateTable
CREATE TABLE "Ad" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "gamerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "yearsPlayer" INTEGER NOT NULL,
    "discord" TEXT NOT NULL,
    "weekDay" TEXT NOT NULL,
    "hourStart" INTEGER NOT NULL,
    "hourEnd" INTEGER NOT NULL,
    "useVoiceChannel" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Ad_gamerId_fkey" FOREIGN KEY ("gamerId") REFERENCES "Gamer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
