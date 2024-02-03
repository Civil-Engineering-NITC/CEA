-- CreateTable
CREATE TABLE "InterviewExp" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rollno" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "package" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "recordedEmail" TEXT NOT NULL,

    CONSTRAINT "InterviewExp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InterviewExpLink" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "interviewExpId" TEXT NOT NULL,

    CONSTRAINT "InterviewExpLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassNotes" (
    "id" TEXT NOT NULL,
    "subject" TEXT NOT NULL,

    CONSTRAINT "ClassNotes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassNotesLink" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "classNotesId" TEXT NOT NULL,

    CONSTRAINT "ClassNotesLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coding" (
    "id" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "desc" TEXT NOT NULL,

    CONSTRAINT "Coding_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CodingLink" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "codingId" TEXT NOT NULL,

    CONSTRAINT "CodingLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resources" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subTitle" TEXT NOT NULL,
    "desc" TEXT NOT NULL,

    CONSTRAINT "Resources_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResourceLink" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "resourcesId" TEXT NOT NULL,

    CONSTRAINT "ResourceLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Activity" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActivityLink" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "activityId" TEXT NOT NULL,

    CONSTRAINT "ActivityLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompetitiveExam" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subTitle" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "webLink" TEXT NOT NULL,

    CONSTRAINT "CompetitiveExam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompetitiveExamLink" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "competitiveExamId" TEXT NOT NULL,

    CONSTRAINT "CompetitiveExamLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Billboard" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Billboard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "InterviewExp_rollno_key" ON "InterviewExp"("rollno");

-- CreateIndex
CREATE UNIQUE INDEX "InterviewExp_email_key" ON "InterviewExp"("email");

-- CreateIndex
CREATE UNIQUE INDEX "InterviewExp_phone_key" ON "InterviewExp"("phone");

-- CreateIndex
CREATE INDEX "InterviewExpLink_interviewExpId_idx" ON "InterviewExpLink"("interviewExpId");

-- CreateIndex
CREATE INDEX "ClassNotesLink_classNotesId_idx" ON "ClassNotesLink"("classNotesId");

-- CreateIndex
CREATE INDEX "CodingLink_codingId_idx" ON "CodingLink"("codingId");

-- CreateIndex
CREATE INDEX "ResourceLink_resourcesId_idx" ON "ResourceLink"("resourcesId");

-- CreateIndex
CREATE UNIQUE INDEX "Activity_name_key" ON "Activity"("name");

-- CreateIndex
CREATE INDEX "ActivityLink_activityId_idx" ON "ActivityLink"("activityId");

-- CreateIndex
CREATE UNIQUE INDEX "CompetitiveExam_name_key" ON "CompetitiveExam"("name");

-- CreateIndex
CREATE INDEX "CompetitiveExamLink_competitiveExamId_idx" ON "CompetitiveExamLink"("competitiveExamId");
