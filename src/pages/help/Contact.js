import { Form, redirect, useActionData } from "react-router-dom";

const Contact = () => {
   let error=useActionData()
    return ( 
        <div className="contact">
        <h3>Contact Us</h3>
        <Form method="post" action="/help/contact">
          <label>
            <span>Your email:</span>
            <input type="email" name="email" required />
          </label>
          <label>
            <span>Your message:</span>
            <textarea name="message" required></textarea>
            {error && <span className="alert">{error.error}</span>}
          </label>
          <button type="submit"> Submit</button>
        </Form>
      </div>
     );
}
 
export default Contact;

export const handleSubmit=async({request})=>{
let data=await request.formData();
let submition={
  email:data.get('email'),
  message:data.get('message')
}
if(submition.message.length<10){
 return {
  error:'message is too small!'
 }
}
console.log(submition)
return redirect('/')
}