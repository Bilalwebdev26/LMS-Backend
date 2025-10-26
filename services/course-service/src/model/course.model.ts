import mongoose, { Document } from "mongoose";
type Status = "draft" | "published" | "archieve" | "pending";
type Approvalstatus = "pending" | "apporved" | "rejected";
type Category =
  | "Technology & Development"
  | "Design & Creativity"
  | "Business & Entrepreneurship"
  | "Personal Development"
  | "Marketing & Digital Media"
  | "Finance & Accounting"
  | "Engineering & Architecture"
  | "Data Science & AI"
  | "Language & Communication"
  | "Health, Fitness & Lifestyle";
export interface CourseInterface extends Document {
  title: string;
  subTitle: string;
  description: string;
  price: number;
  discountPercent: number;
  duration: number;
  difficulty: string;
  language: string;
  certificate: string;
  category: Category;
  subCategory: string;
  whatULearn: string;
  slug: string;
  isFree: boolean;
  isPublished: boolean;
  isFeatured: boolean;
  thumbnail: string;
  promoVideo: string;
  enrollCount: number;
  completionRate: number;
  status: Status;
  approvalStatus: Approvalstatus;
  rejectedReason: string;
  tags: string[];
  review: string[];
  rating: number;
  skills: string[];
  user: string;
  updatedBy: string;
  instructors: string[];
  modules: string[];
}
const courseSchema = new mongoose.Schema<CourseInterface>(
  {
    title: { type: String, required: true },
    subTitle: { type: String },
    description: { type: String },
    price: { type: Number, required: true },
    discountPercent: { type: Number, default: 0 },
    duration: { type: Number, required: true },
    difficulty: { type: String },
    language: { type: String },
    certificate: { type: String },
    category: {
      type: String,
      enum: [
        "Technology & Development",
        "Design & Creativity",
        "Business & Entrepreneurship",
        "Personal Development",
        "Marketing & Digital Media",
        "Finance & Accounting",
        "Engineering & Architecture",
        "Data Science & AI",
        "Language & Communication",
        "Health, Fitness & Lifestyle",
      ],
      required: true,
    },
    subCategory: {
      type: String,
      required: true,
    },
    whatULearn: { type: String },
    slug: { type: String, required: true, unique: true },
    isFree: { type: Boolean, default: false },
    isPublished: { type: Boolean, default: false },
    isFeatured: { type: Boolean, default: false },
    thumbnail: { type: String },
    promoVideo: { type: String },
    enrollCount: { type: Number, default: 0 },
    completionRate: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ["draft", "published", "archived", "pending"],
      default: "draft",
    },
    approvalStatus: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    rejectedReason: { type: String },
    tags: { type: [String], default: [] },
    review: { type: [String], default: [] },
    rating: { type: Number, default: 0 },
    skills: { type: [String], default: [] },
    user: { type: String },
    updatedBy: { type: String },
    instructors: { type: [String], default: [] },
    modules: { type: [String], default: [] },
  },
  { timestamps: true }
);
export const Course = mongoose.model("Course", courseSchema);
