import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import {
  useTeamCreateMutation,
  useGetTeamByIdQuery,
  useTeamUpdateMutation,
} from "../../api/team.api";

import PageHeader from "../../components/PageHeader";
import Loader from "../../components/Loader";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  designation: yup.string(),
  department: yup.string(),
  description: yup.string(),
  image: yup.mixed().test("required", "Image is required", function (value) {
    if (this.parent.id && this.parent.existingImage) {
      return true;
    }
    return value && value.length > 0;
  }),
});

function TeamForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [existingImage, setExistingImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const { data: teamData, isLoading: teamLoading } = useGetTeamByIdQuery({id}, {
    skip: !id,
  });

  const [createTeam, { isLoading: createLoading }] = useTeamCreateMutation();
  const [updateTeam, { isLoading: updateLoading }] = useTeamUpdateMutation();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      name: "",
      designation: "",
      department: "",
      image: null,
    },
  });

  const watchedImage = watch("image");

  useEffect(() => {
    if (id && teamData?.data) {
      const { name, designation, department, description, image } =
        teamData.data;
      reset({
        name: name || "",
        designation: designation || "",
        // department: department || "",
        description: description || "",
        image: image,
        id,
        existingImage: image,
      });

      setExistingImage(image || null);
    }
  }, [id, teamData, reset]);

  // Handle image preview
  useEffect(() => {
    if (watchedImage && watchedImage.length > 0) {
      const file = watchedImage[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  }, [watchedImage]);

  const onSubmit = async (formData) => {
    try {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("designation", formData.designation);
      // payload.append("department", formData.department);
      payload.append("description", formData.description);

      if (formData.image && formData.image.length > 0) {
        payload.append("image", formData.image[0]);
      }

      if (id) {
        await updateTeam({ id, formData: payload }).unwrap();
        toast.success("Team member updated successfully!");
      } else {
        await createTeam({ formData: payload }).unwrap();
        toast.success("Team member added successfully!");
      }

      navigate("/team");
    } catch (err) {
      toast.error(err?.data?.message || "Failed to save team member");
    }
  };

  if (teamLoading) return <Loader />;

  return (
    <div className="bg-gray-50 justify-center items-center">
      <PageHeader title={id ? "Update Team Member" : "Add New Team Member"} />

<form
  onSubmit={handleSubmit(onSubmit)}
  className="w-full mx-auto border border-gray-200 rounded-2xl bg-white p-4"
>
        {/* Form Container */}
       {/* TOP ROW — 3 Fields in One Line */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

    {/* Name */}
    <div className="space-y-2">
      <label className="block text-sm font-medium text-black/80">
        Full Name <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        {...register("name")}
        required
        placeholder="Enter full name"
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md"
      />
      {errors.name && (
        <p className="text-red-500 text-sm mt-1">⚠ {errors.name.message}</p>
      )}
    </div>

    {/* Designation */}
    <div className="space-y-2">
      <label className="block text-sm font-medium text-black/80">
        Designation
      </label>
      <input
        type="text"
        {...register("designation")}
        placeholder="e.g. Senior Developer"
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md"
      />
      {errors.designation && (
        <p className="text-red-500 text-sm mt-1">⚠ {errors.designation.message}</p>
      )}
    </div>

    {/* Profile Image */}
    <div className="space-y-2">
      <label className="block text-sm font-medium text-black/80">
        Profile Image {!id && <span className="text-red-500">*</span>}
      </label>

      <input
        type="file"
        {...register("image")}
        accept="image/*"
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md file:mr-3 file:px-3 file:py-1 file:bg-gray-100 file:rounded"
      />

      {errors.image && (
        <p className="text-red-500 text-sm mt-1">⚠ {errors.image.message}</p>
      )}
    </div>
  </div>

{/* BOTTOM ROW — Description & Preview Side by Side */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

  {/* Description */}
  <div className="flex flex-col h-full">
    <label className="block text-sm font-medium text-black/80 mb-2">
      Phone No.
    </label>
    <textarea
      {...register("description")}
      placeholder="Write a brief description..."
      rows="10"
      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md resize-none h-full"
    />
    {errors.description && (
      <p className="text-red-500 text-sm mt-1">⚠ {errors.description.message}</p>
    )}
  </div>

  {/* Image Preview Area */}
  <div className="flex flex-col h-full space-y-2">

    {/* New Preview */}
    {imagePreview && (
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-700 mb-1">
          New Image Preview:
        </p>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-2 h-full">
          <img
            src={imagePreview}
            alt="preview"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    )}

    {/* Existing Image */}
    {existingImage && (
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-700 mb-1">
          Current Image:
        </p>
        <div className="border-2 border-gray-200 rounded-lg p-2 bg-gray-50 h-full">
          <img
            src={
              existingImage?.public_url ||
              existingImage?.url ||
              existingImage
            }
            alt="current"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        {imagePreview && (
          <p className="text-xs text-amber-600 mt-1">
            ℹ This image will be replaced.
          </p>
        )}
      </div>
    )}

    {/* Empty Placeholder */}
    {!imagePreview && !existingImage && (
      <div className="flex-1 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center flex items-center justify-center">
        <div>
          <p className="text-sm text-gray-600">No Image Selected</p>
          <p className="text-xs text-gray-400">Upload an image to preview</p>
        </div>
      </div>
    )}

  </div>
</div>


  {/* Buttons */}
  <div className="flex justify-end gap-3">
    <button
      type="button"
      onClick={() => navigate("/team")}
      className="px-4 py-2 text-sm bg-gray-100 rounded-md hover:bg-gray-200"
    >
      Cancel
    </button>

    <button
      type="submit"
      disabled={createLoading || updateLoading}
      className={`px-6 py-2 bg-black text-white text-sm rounded-md transition ${
        createLoading || updateLoading ? "opacity-60 cursor-not-allowed" : "hover:scale-105"
      }`}
    >
      {createLoading || updateLoading
        ? "Saving..."
        : id
        ? "Update Team Member"
        : "Add Team Member"}
    </button>
  </div>
      </form>
    </div>
  );
}

export default TeamForm;
