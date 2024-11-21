import Doctor from "../models/Doctor.model.js";
import { AsyncHandler } from "../Utils/AsyncHandeler.js";
import { ApiResponse } from "../Utils/apiResponse.js";
import { ApiError } from "../Utils/apiError.js";

const updateDoctor = AsyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    throw new ApiError(400, "User ID is required");
  }
  const updateDoctor = await Doctor.findByIdAndUpdate(
    id,
    {
      $set: req.body,
    },
    {
      new: true,
    }
  );

  if (!updateDoctor) {
    throw new ApiError(404, "Doctor not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(true, "Doctor updated successfully", {
        data: updateDoctor,
      })
    );
});

const getSingleDoctor = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  const doctor = await Doctor.findById(id)
    .populate("reviews")
    .select("-password");
  if (!doctor) {
    throw new ApiError(404, "doctor not found");
  }
  return res
    .status(200)
    .json(
      new ApiResponse(true, "doctor fetched successfully", { data: doctor })
    );
});

const getAllDoctors = AsyncHandler(async (req, res) => {
  const { query } = req.query;
  let doctors;

  if (query) {
    doctors = await Doctor.find({
      isApproved: "approved",
      $or: [
        { name: { $regex: query, $options: "i" } },
        { specialization: { $regex: query, $options: "i" } },
      ],
    }).select("-password");
  } else {
    const doctors = await Doctor.find({}).select("-password");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(true, "All doctors fetched successfully", {
        data: doctors,
      })
    );
});

const deleteDoctor = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  const doctor = await Doctor.findById(id);
  if (!doctor) {
    throw new ApiError(404, "Doctor not found");
  }
  await User.findByIdAndDelete(id);
  return res
    .status(200)
    .json(new ApiResponse(true, "Doctor deleted successfully"));
});

export { updateDoctor, getSingleDoctor, getAllDoctors, deleteDoctor };
