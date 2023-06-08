const express = require('express');
const path=require('path');
const _=require('lodash');
const bodyParser=require('body-parser');
const app = express();

app.set('view engine','ejs');
app.set('views','views');
const allPost=[]


const aboutus={
    aboutMe:"Hello, my name is Nikhil Mahadik. I am a passionate and dedicated individual with a strong interest in technology and problem-solving. I have a background in computer science and enjoy exploring various programming languages and frameworks. I am constantly seeking opportunities to expand my knowledge and skills in the ever-evolving field of technology. Aside from programming, I also have a keen interest in writing and expressing my thoughts through words. In my free time, you can find me reading books, playing video games, or exploring the outdoors. I believe in continuous growth and lifelong learning, and I am excited to embark on new projects and challenges that allow me to make a positive impact in the world of technology.",
    pageTitle:'About Us'
};
const contactus={
    contactMe:"Thank you for visiting our website. We value your feedback and inquiries. If you have any questions, comments, or suggestions, please feel free to reach out to us. Our dedicated team is here to assist you and provide the necessary support. You can contact us through the provided contact form, email, or phone number. We strive to respond promptly and ensure your satisfaction. Your input is essential to help us improve our services and deliver the best possible experience. We look forward to hearing from you and assisting you with any inquiries or concerns you may have. Get in touch with us today!"
}
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));
app.get('/compose',(req,res)=>{
    res.render('compose');
});
app.post('/compose',(req,res)=>{
    const post=req.body;
    allPost.push(post);
    
    res.redirect('/'); 
})
app.get('/about',(req,res)=>{
    res.render('about',{ aboutus});
});
app.get('/contact',(req,res)=>{
    res.render('contact',{contactus});
    
});
app.get('/',(req,res)=>{
    res.render('home',{homestartingcontent:"Welcome to Coder! We are passionate about the exciting world of competitive programming and eager to share our knowledge and insights with you. Whether you are a beginner looking to enhance your problem-solving skills or an experienced programmer seeking to sharpen your competitive edge, you've come to the right place.",
posts:allPost});
   
});
app.get('/posts/:postName',(req,res)=>{
    var x=_.lowerCase(req.params.postName);
    allPost.forEach(element=>{
        if(_.lowerCase(element.postTitle)===x){
            res.render('post',{title:element.postTitle,content:element.postBody});
            
        }
    })
  
})
app.use((req,res)=>{
    res.status(404).render('404',{pageTitle:'collegePredictor'});
});

app.listen(4200);
