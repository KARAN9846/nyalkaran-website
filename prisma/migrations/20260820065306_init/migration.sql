-- CreateEnum
CREATE TYPE "EnquiryStatus" AS ENUM ('new', 'contacted', 'qualified', 'in_progress', 'converted', 'closed', 'spam');

-- CreateTable
CREATE TABLE "company" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "legal_name" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "whatsapp" TEXT,
    "website" TEXT,
    "address_line_1" TEXT,
    "address_line_2" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "postal_code" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "enquiries" (
    "id" UUID NOT NULL,
    "company_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "company_name" TEXT,
    "phone" TEXT,
    "service" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" "EnquiryStatus" NOT NULL DEFAULT 'new',
    "source" TEXT NOT NULL DEFAULT 'website',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "enquiries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "enquiry_events" (
    "id" UUID NOT NULL,
    "enquiry_id" UUID NOT NULL,
    "event_type" TEXT NOT NULL,
    "metadata" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "enquiry_events_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "enquiries_company_id_idx" ON "enquiries"("company_id");

-- CreateIndex
CREATE INDEX "enquiries_status_idx" ON "enquiries"("status");

-- CreateIndex
CREATE INDEX "enquiries_created_at_idx" ON "enquiries"("created_at");

-- CreateIndex
CREATE INDEX "enquiry_events_enquiry_id_idx" ON "enquiry_events"("enquiry_id");

-- CreateIndex
CREATE INDEX "enquiry_events_event_type_idx" ON "enquiry_events"("event_type");

-- CreateIndex
CREATE INDEX "enquiry_events_created_at_idx" ON "enquiry_events"("created_at");

-- AddForeignKey
ALTER TABLE "enquiries" ADD CONSTRAINT "enquiries_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "enquiry_events" ADD CONSTRAINT "enquiry_events_enquiry_id_fkey" FOREIGN KEY ("enquiry_id") REFERENCES "enquiries"("id") ON DELETE CASCADE ON UPDATE CASCADE;
