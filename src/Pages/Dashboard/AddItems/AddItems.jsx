import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

import Swal from "sweetalert2";
const img_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;
const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = {
      image: data.image[0],
    };
    //   image upload to imgbb and get url and send it in db
    const res = await axiosPublic.post(img_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res.data);
    if (res.data.success) {
      // send the data in db with imgURL
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const response = await axiosSecure.post("/menu", menuItem);
      console.log(response.data);
      if (response.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} added to menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
  return (
    <div className="bg-[#F6F6F6] font-Inter">
      <div className=" w-full">
        <SectionTitle
          heading={" add an item"}
          subheading={"---What's new?---"}
          width="w-1/2"
        ></SectionTitle>
      </div>
      <div className="max-w-5xl mx-auto ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 md:space-y-12"
        >
          {/* <input {...register("firstName")} /> */}
          {/* name */}
          <TextField
            sx={{ bgcolor: "white", width: "100%" }}
            {...register("name", { required: true })}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          {/* <select {...register("gender")}></select> */}
          {/* mui */}
          <div className="flex items-center flex-col md:flex-row gap-9">
            {/* category */}
            <div className="w-full md:w-1/2">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  sx={{ bgcolor: "white" }}
                  id="select"
                  {...register("category", { required: true })}
                  //   value={age}
                  defaultValue={"pizza"}
                  label="Age"
                  //   onChange={handleChange}
                >
                  <MenuItem value={"pizza"}>pizza</MenuItem>
                  <MenuItem value={"soup"}>soup</MenuItem>
                  <MenuItem value={"salad"}>salad</MenuItem>
                  <MenuItem value={"drinks"}>drinks</MenuItem>
                  <MenuItem value={"dessert"}>dessert</MenuItem>
                </Select>
              </FormControl>
            </div>
            {/* price */}
            <div className="w-full md:w-1/2">
              {" "}
              <TextField
                sx={{ bgcolor: "white", width: "100%" }}
                {...register("price", { required: true })}
                id="outlined-basic"
                label="Price"
                variant="outlined"
              />
            </div>
          </div>
          {/* reciepe details */}
          <TextField
            id="Recipe_details"
            label="Recipe details"
            sx={{ bgcolor: "white", width: "100%" }}
            {...register("recipe", { required: true })}
            multiline
            rows={7}
          />
          {/* image file upload */}
          <div>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-red file-input-bordered text-xl  w-full max-w-sm"
            />
          </div>
          <div>
            <button
              type="submit"
              className="flex items-center gap-1 text-xl font-bold leading-[24px] bg-gradient-to-r from-[#835D23] to-[#B58130] py-3 px-8 text-white "
            >
              <div> Add Item</div>
              <div>
                <FaUtensils></FaUtensils>
              </div>{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
