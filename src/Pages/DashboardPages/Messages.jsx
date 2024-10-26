import React, { useContext, useState } from 'react'
import { Link, useFormAction, useLoaderData, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form';
import { backend_uri } from '../../CommonResources';
import { AuthContext } from '../../Provider/AuthProvider';
import CategoryShow from '../../Components/Shared/CategoryShow';
import { Helmet } from 'react-helmet-async';

const Messages = () => {

  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext)
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { message_subject: '', message_body: '' }
  });
  const handleCategoryAdd = async (form_data) => {



    try {
      const inputObj = {
        messageSubject: form_data.message_subject,
        messageBody: form_data.message_body,
        messagSender: user.displayName,

      }

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputObj)
      };
      fetch(`${backend_uri}/message`, requestOptions)
        .then(response => response.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success('Message Saved Successfully!');
            setCategoryData(data);
            navigate("/dashboard/messages")

          }
        })

    } catch (error) {
      setError(error.message)
    }




  }
  return (
    <>
      <Helmet>
        <title>Message Page</title>

      </Helmet>


      <div className=" mt-10             card bg-base-100  xs:w-[17rem] xs:ml-2 ssm:w-[20rem] ssm:ml-5 
      sm:w-[24rem] sm:ml-16   md:w-[24rem] md:ml-35 lg:w-[35rem] lg:ml-35 xl:w-[45rem] xl:px-32  shadow-2xl">



        <form className="card-body" onSubmit={handleSubmit(handleCategoryAdd)} >
          <legend className='text-[indigo] dark:text-[white] text-[1.2rem]  '>Add New Message <br /><br />Messages will appear in Landing Page</legend>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold dark:text-[wheat]">Subject/Head</span>
            </label>
            <input type="text" {...register("message_subject", {
              required: "Name is Required"
            })} placeholder="Message Subject" className="input input-bordered input-info w-full
                                 max-w-xs"   />

            <br />
            {errors.message_subject && <p className='text-red-500 text-xs'>{errors.message_subject.message}</p>}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold  dark:text-[wheat]">Description</span>
            </label>
            <input type="text"  {...register("message_body", {
              required: "Description is Required"
            })} placeholder="Description" className="input input-bordered input-info w-full max-w-xs"
            />
            <br />
            {errors.message_body && <p className='text-red-500 text-xs'>{errors.message_body.message}</p>}
          </div>

          <div className="form-control mt-4  ">
            <input className="mx-auto btn btn-primary w-24 lg:w-40 sm:w-24 md:w-32" type="submit" value="Save" />
            <br />
            {
              error ? error : ""
            }

          </div>



        </form>



      </div>



    </>
  )
}

export default Messages