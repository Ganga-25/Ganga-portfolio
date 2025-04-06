function sentmail(){
let params={
    name:document.getElementById("name").value,
    email:document.getElementById("email").value,
    message:document.getElementById("Message").value
};

const serviceID="service_26wbfwq";
const templateID ="template_6oxhxz5";  


emailjs.send(serviceID,templateID,params)
.then(
    res=>{
        document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("Message"). value="";
    console.log(res);
    alert("your message sent successfully");

    }
)

.catch((err) => console.log(err));
}