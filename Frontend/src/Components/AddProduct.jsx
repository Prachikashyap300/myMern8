import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {enqueueSnackbar} from 'notistack'

const AddProductSchema = Yup.object().shape({
  name: Yup.string()
  .required('Name is required'),
  cateogory: Yup.string()
  .required('cateogory is required'),
  price: Yup.string()
  .required('price is required'),
  description: Yup.string()
  .required('description is required')
})

const AddProduct = () => {
  // step 1: formik initialization
  const AddProductForm = useFormik({
    initialValues: {
      name: '',
      cateogory: '',
      price: '',
      description: ''
    },
    onSubmit: async(values, action) => {
        console.log(values);
        const res = await fetch('http://localhost:4000/product/add',{
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      console.log(res.status)
      action.resetForm()

      if (res.status === 200){
        enqueueSnackbar('Signup successful', {variant: 'success'})
      }else {
        enqueueSnackbar('Signup failed', {variant: 'error'})
      
      }
    },
    validationSchema: AddProductSchema
  })
    return (
        <div className='container'>
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
                            <span style={{color: 'red', fontSize:'10'}}>{AddProductForm.touched.name && AddProductForm.errors.name}</span>
                            <input type="text" className="form-control mb-4"
                            id = 'name'
                            onChange={AddProductForm.handleChange}
                            value = {AddProductForm.values.name} />
                        </div>
                        <div className="form-group">
                            <label>Cateogory</label>
                            <span style={{color: 'red', fontSize:'10'}}>{AddProductForm.touched.cateogory && AddProductForm.errors.cateogory}</span>
                            <input type="text" className="form-control mb-4" 
                            id = 'cateogory'
                            onChange={AddProductForm.handleChange}
                            value = {AddProductForm.values.cateogory}/>
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <span style={{color: 'red', fontSize:'10'}}>{AddProductForm.touched.price && AddProductForm.errors.price}</span>
                            <input type="text" className="form-control mb-4" 
                            id = 'price'
                            onChange={AddProductForm.handleChange}
                            value = {AddProductForm.values.price}/>
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <span style={{color: 'red', fontSize:'10'}}>{AddProductForm.touched.description && AddProductForm.errors.description}</span>
                            <input type="text" className="form-control mb-4" 
                            id = 'description'
                            onChange={AddProductForm.handleChange}
                            value = {AddProductForm.values.description}/>
                        </div>
                        <button type='submit' className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div >
    
  )
}

export default AddProduct