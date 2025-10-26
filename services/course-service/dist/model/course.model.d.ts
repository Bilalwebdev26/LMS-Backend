import mongoose, { Document } from "mongoose";
type Status = "draft" | "published" | "archieve" | "pending";
type Approvalstatus = "pending" | "apporved" | "rejected";
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
export declare const Course: mongoose.Model<CourseInterface, {}, {}, {}, mongoose.Document<unknown, {}, CourseInterface, {}, mongoose.DefaultSchemaOptions> & CourseInterface & Required<{
    _id: unknown;
}> & {
    __v: number;
}, mongoose.Schema<CourseInterface, mongoose.Model<CourseInterface, any, any, any, mongoose.Document<unknown, any, CourseInterface, any, {}> & CourseInterface & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, CourseInterface, mongoose.Document<unknown, {}, mongoose.FlatRecord<CourseInterface>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<CourseInterface> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>>;
export {};
//# sourceMappingURL=course.model.d.ts.map