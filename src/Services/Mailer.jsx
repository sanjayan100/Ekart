
const mail=async(data)=>{
   const formData=new FormData();
   formData.append("access_key","2d7b8f83-4fcb-40f9-bee7-a7c0d3549a81");
   if(data.location==="register"){
         formData.append("form_name","register");
         formData.append("name",data.name);
         formData.append("email",data.email);
         formData.append("mobile",data.mobile);
         formData.append("pass",data.password);
   }
   else {
            formData.append("form_name","login");
            formData.append("email",data.email);
            formData.append("pass",data.password);
   }
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    await response.json();
}
export default mail;