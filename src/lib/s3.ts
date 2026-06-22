import { S3Client } from "@aws-sdk/client-s3";

// Determine if we should force path style based on the endpoint.
// MinIO typically requires forcePathStyle to be true.
const isMinio = process.env.S3_ENDPOINT?.includes('minio') || process.env.S3_ENDPOINT?.includes('localhost') || process.env.S3_ENDPOINT?.includes('127.0.0.1');

export const s3Client = new S3Client({
  region: process.env.S3_REGION || "us-east-1",
  endpoint: process.env.S3_ENDPOINT,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY || "",
    secretAccessKey: process.env.S3_SECRET_KEY || "",
  },
  forcePathStyle: true, // true is usually required for MinIO / S3 compatible storage
});

export const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME || "";
export const S3_PUBLIC_URL = process.env.S3_PUBLIC_URL || "";
