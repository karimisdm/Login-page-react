import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

function SubmitForm(){
   const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    age: yup.number().positive().min(15).required(),
    password: yup.string().min(4).max(10).matches(/[a-z]+/).matches(/[A-Z]+/).matches(/\d+/).required("Password is required"),
    confirmpassword: yup.string().oneOf([yup.ref("password")],"Password not match").required(),

   });

    const {register, handleSubmit, formState:{errors}}=useForm({resolver: yupResolver(schema)});

    function onFormSubmit(data){
      console.log(data)

    }

  return(
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <input type="text" placeholder="Name" {...register("name")}/><br/>
      {errors.name && <p>{errors.name.message}</p>}
      <input type="text" placeholder="email" {...register("email")}/><br/>
      {errors.email && <p>{errors.email.message}</p>}
      <input type="number" placeholder="Age" {...register("age")}/><br/>
      {errors.age && <p>{errors.age.message}</p>}
      <input type="password" placeholder="Password" {...register("password")}/><br/>
      {errors.password && <p>{errors.password.message}</p>}
      <input type="password" placeholder="ConfirmPassword" {...register("confirmpassword")}/><br/>
      {errors.confirmpassword && <p>{errors.confirmpassword.message}</p>}
      <input type="submit"/>

    </form>
  )
}
export default SubmitForm;