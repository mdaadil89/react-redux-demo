import React from 'react'
import * as Yup from 'yup'
import {withFormik,Field,Form} from 'formik'
import uuid from 'uuid/v4' ;
import toastr from 'toastr';
import { withRouter } from 'react-router-dom';



const AddProductForm = ({ errors, touched,isSubmitting}) => (
    <div>
        <h1>Add Product</h1>
        <Form>
            <div>
                <Field type="text"  name="prdname" placeholder="Enter Product Name"/>
                {touched.prdname && errors.prdname && <span style={{color : 'red'}}>{errors.prdname}</span>}
            </div>
            <div>
                <Field type="number"  name="qty" placeholder="Enter Quantity"/>
                {touched.qty && errors.qty && <span style={{color : 'red'}}>{errors.qty}</span>}
            </div>
            <div>
                <Field type="number"  name="prc" placeholder="Enter Price"/>
                {touched.prc && errors.prc && <span style={{color : 'red'}}>{errors.prc}</span>}
            </div>
            <br/>
            <button type="submit" disabled={isSubmitting}>Submit</button> 
        
        </Form>
    </div>
)

const FormikAddProductForm = withFormik({
    mapPropsToValues({productname, quantity, price}) {
        return {
            prdname : productname || '',
            qty : quantity || '',
            prc : price || ''
        }
    },
        validationSchema : Yup.object().shape({
        prdname : Yup.string().required('Product Name is required'),
        qty : Yup.number().required("Quantity is required"),
        prc: Yup.number().required("Price is required")
    }),
    handleSubmit(values, {props, setSubmitting}) 
    {
        
       let prod ={id:  uuid() , ...values}
       props.addMyProduct(prod)
     
        setSubmitting(false);
        console.log(prod);
        props.history.push('/products/')
    }
})(AddProductForm)

export default FormikAddProductForm