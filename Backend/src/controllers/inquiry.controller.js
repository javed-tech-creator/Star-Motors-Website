import Inquiry from "../models/inquiry.model.js";
import ApiError from "../utils/ApiError.js";
import {
  uploadFiles,
  deleteFile,
  deleteLocalFile,
} from "../utils/cloudinary.js";
import sendMail from "../utils/sendMail.js";

// 👉 Create Inquiry
export const createInquiry = async (req, res, next) => {
  // let uploadedFileIds = [];
  // let uploadedFileUrls = [];
console.log("data are",req.body)
  try {
    const { name, email, phone, message, requirement } = req.body;

    // if (!name || !email || !message) {
    //   if (req.files) req.files.forEach((file) => deleteLocalFile(file.path));
    //   return next(
    //     new ApiError(400, "Name, email, and message are required")
    //   );
    // }

    // let result = null;
    // if (process.env.USE_CLOUDINARY === "true") {
    //   result = await uploadFiles(req.files || []);
    //   if (!result.success) {
    //     return next(new ApiError(400, "Unable to upload site photos"));
    //   }
    // } else {
    //   result = {
    //     success: true,
    //     files: (req.files || []).map((file) => ({
    //       url: file.path.replace(/\\/g, "/"),
    //       public_url: null,
    //       public_id: null,
    //     })),
    //   };
    // }

//     uploadedFileIds = result.files.map((f) => f.public_id).filter(Boolean);
//     uploadedFileUrls = result.files.map((f) => f.url).filter(Boolean);
// const sitePhotos = result.files.map((f) => ({
//         url: f?.url || null,
//         public_url: f?.public_url || null,
//         public_id: f?.public_id || null,
//       }))

    const newInquiry = new Inquiry({
      name,
      email,
      phone,
      // companyName,
      requirement,
      message,
      // sitePhotos,
    });


    const savedInquiry = await newInquiry.save();

        console.log("savedInquiry are",savedInquiry)

    return res.status(201).json({
      status: "success",
      message: "Inquiry created successfully",
      data: savedInquiry,
    });
  } catch (err) {
    // for (const fileId of uploadedFileIds) {
    //   try {
    //     await deleteFile(fileId);
    //   } catch (e) {
    //     console.error(e);
    //   }
    // }
    // for (const fileUrl of uploadedFileUrls) {
    //   try {
    //     deleteLocalFile(fileUrl);
    //   } catch (e) {
    //     console.error(e);
    //   }
    // }
    return next(new ApiError(500, err?.message || "Internal Server Error"));
  }
};

// Get All Inquiries
export const getAllInquiries = async (req, res, next) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });


    return res.status(200).json({
      status: "success",
      results: inquiries.length,
      data: inquiries,
    });
  } catch (err) {
    return next(new ApiError(500, err?.message || "Internal Server Error"));
  }
};

// Delete Inquiry by ID
export const deleteInquiryById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const inquiry = await Inquiry.findById(id);
    if (!inquiry) {
      return next(new ApiError(404, "Inquiry not found"));
    }

    // if (process.env.USE_CLOUDINARY === "true") {
    //   for (const photo of inquiry.sitePhotos) {
    //     if (photo.public_id) {
    //       try {
    //         await deleteFile(photo.public_id);
    //       } catch (e) {
    //         console.error(e);
    //       }
    //     }
    //   }
    // } else {
    //   for (const photo of inquiry.sitePhotos) {
    //     if (photo.url) {
    //       try {
    //         deleteLocalFile(photo.url);
    //       } catch (e) {
    //         console.error(e);
    //       }
    //     }
    //   }
    // }

    await Inquiry.findByIdAndDelete(id);

    return res.status(200).json({
      status: "success",
      message: "Inquiry deleted successfully",
    });
  } catch (err) {
    return next(new ApiError(500, err?.message || "Internal Server Error"));
  }
};
