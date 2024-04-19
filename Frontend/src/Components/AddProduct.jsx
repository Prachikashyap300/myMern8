import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { enqueueSnackbar } from "notistack";

const AddProductSchema = Yup.object().shape({
  pname: Yup.string().required("Name is required"),
  pcateogory: Yup.string().required("pcateogory is required"),
  pprice: Yup.string().required("pprice is required"),
  pdescription: Yup.string().required("pdescription is required"),
});

const AddProduct = () => {
  // step 1: formik initialization
  const AddProductForm = useFormik({
    initialValues: {
      pname: "",
      pcateogory: "",
      pprice: "",
      pdescription: "",
    },
    onSubmit: async (values, action) => {
      console.log(values);
      const res = await fetch("http://localhost:4000/product/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.status);
      action.resetForm();

      if (res.status === 200) {
        enqueueSnackbar("Signup successful", { variant: "success" });
      } else {
        enqueueSnackbar("Signup failed", { variant: "error" });
      }
    },
    validationSchema: AddProductSchema,
  });
  return (
    <div className="container">
      <div className="col p-5">
        <div className="card d-block mt-5">
          <div className="card-header">
            <h3>Add Product</h3>
          </div>
          <div className="card-body">
            {/* step2: handling when submit */}
            <form onSubmit={AddProductForm.handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <span style={{ color: "red", fontSize: "10" }}>
                  {AddProductForm.touched.pname && AddProductForm.errors.pname}
                </span>
                <input
                  type="text"
                  className="form-control mb-4"
                  id="pname"
                  onChange={AddProductForm.handleChange}
                  value={AddProductForm.values.pname}
                />
              </div>
              <div className="form-group">
                <label>Cateogory</label>
                <span style={{ color: "red", fontSize: "10" }}>
                  {AddProductForm.touched.pcateogory &&
                    AddProductForm.errors.pcateogory}
                </span>
                <input
                  type="text"
                  className="form-control mb-4"
                  id="pcateogory"
                  onChange={AddProductForm.handleChange}
                  value={AddProductForm.values.pcateogory}
                />
              </div>
              <div className="form-group">
                <label>Price</label>
                <span style={{ color: "red", fontSize: "10" }}>
                  {AddProductForm.touched.pprice && AddProductForm.errors.pprice}
                </span>
                <input
                  type="text"
                  className="form-control mb-4"
                  id="pprice"
                  onChange={AddProductForm.handleChange}
                  value={AddProductForm.values.pprice}
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <span style={{ color: "red", fontSize: "10" }}>
                  {AddProductForm.touched.pdescription &&
                    AddProductForm.errors.pdescription}
                </span>
                <input
                  type="text"
                  className="form-control mb-4"
                  id="pdescription"
                  onChange={AddProductForm.handleChange}
                  value={AddProductForm.values.pdescription}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
