<h1 align="center"> STRESSER </h1>


<h3 align="center"> Short Brief </h3>

<p align="center">
 Stresser is a web application to help people reduce stress and anxiety. The web application itself contains clean and interactive UI/UX making it easier to navigate. We provide features such as therapy where you can watch calm and relaxing music, yoga and meditation videos, traditional methods to reduce stress and more. We also provide a diet section where you can search recipes for any ingredient. The application also contains user authentication through login/sign-up feature. After signing-up, a user can create his/her own diary and chat with other people as well.
  </p>

## Contents:
- About
- Project Starter
- Glimpse of the site
- Tools and Packages
- Author

---

# ✊ About

> Stresser stresses on reducing people's stress and anxiety by providing featues like therapy, diet, diary and chat sections.

You can checkout the demo video on youtube by clicking on the thumbnail below.
<a href="https://youtu.be/6DoDPskkAbs">
<img src="https://user-images.githubusercontent.com/89806031/178891853-da0d4d10-f454-42f8-bae5-7028d52f15a4.png" >  
</a>

The site is deployed through heroku, which you can view from [here](https://stresser-on.herokuapp.com/)  

---

# 👨‍💻 Getting started


This section will work you through how you can get started with the project.

### Directory Layout


<pre>
.
├── <strong>client</strong>
|      ├── <strong>public</strong>
|      └── <strong>src</strong>
|           ├── <strong>assets</strong>
|           |
|           ├── <strong>Components</strong>
|           │      ├── <strong>ChatComponents</strong>  
|           |      |        ├──<strong>ChatContainer.js</strong>
|           │      |        ├──<strong>ChatInput.js</strong>
|           │      |        ├──<strong>Contacts.js</strong>
|           │      |        └──<strong>Welcome.js</strong> 
|           |      ├── <strong>DiaryComponents</strong>  
|           │      |        └──<strong>DiaryEntry.js</strong> 
|           |      ├── <strong>DietComponents</strong>  
|           |      |        ├──<strong>DietLists.js</strong>
|           │      |        └──<strong>RecipeTile.js</strong> 
|           |      ├── <strong>HomeComponents</strong>  
|           |      |        ├──<strong>Button.js</strong>
|           │      |        └──<strong>Footer.js</strong>
|           |      ├── <strong>NavbarComponents</strong>  
|           |      |        ├──<strong>Logout.js</strong>
|           │      |        └──<strong>Navbar.js</strong>
|           │      └── <strong>TherapyComponents</strong>
|           │               └──<strong>Frames.js</strong>
|           │  
|           ├── <strong>Pages</strong>
|           │      ├── <strong>Chat.js</strong>
|           │      ├── <strong>Diary.js</strong>
|           │      ├── <strong>Diet.js</strong>
|           │      ├── <strong>Home.js</strong>
|           │      ├── <strong>Login.js</strong>
|           │      ├── <strong>Register.js</strong>
|           │      ├── <strong>SetAvatar.js</strong>
|           │      └── <strong>Therapy.js</strong> 
|           │ 
|           ├── <strong>Utils</strong>
|           │      └── <strong>APIRoutes.js</strong>     
|           │ 
|           ├── <strong>App.js</strong>
|           │ 
|           ├── <strong>index.css</strong>
|           │ 
|           └── <strong>index.js</strong>
|
│   
│ 
├── <strong>server</strong>
|      ├── <strong>Controllers</strong>
|      │      ├── <strong>diaryControllers.js</strong>
|      │      ├── <strong>messageControllers.js</strong>
|      │      └── <strong>userControllers.js</strong> 
|      │
|      ├── <strong>Model</strong>
|      │      ├── <strong>diaryModel.js</strong>
|      │      ├── <strong>messageModel.js</strong>
|      │      └── <strong>userModel.js</strong> 
|      │
|      ├── <strong>Routes</strong>
|      │      ├── <strong>diaryRoutes.js</strong>
|      │      ├── <strong>messageRoutes.js</strong>
|      │      └── <strong>userRoutes.js</strong> 
|      │  
|      └── index.js
|  
|
└── README.md
</pre>






### Run on your local server

You will need [NodeJS](), [Git]() and [MongoDB]() installed to run this project locally

      node@v16.13.0 or higher
      npm@8.1.0 or higher
      git@2.34.1 or higher

If you dont have [MongoDB]() you use [MongoDB Atls]()


1. Clone the repo
 ```bash
 git clone https://github.com/Garvit1809/Stresser.git
```

2. Create a file called .env in the Backend directory of your project:


       server
       └──- Controllers
           - Model
           - Routes
           - .env         <-- create it here
           - .gitignore
           - index.js
           - package-lock.json
           - package.json



3. Inside the .env file, add key `MONGO_URL` and assign your MongoDB local host or Mongo Atls like this 


```bash
# .env
MONGO_URL = "YOUR_DB_LOCAL_HOST" 
# eg : mongodb://localhost/stresser or mongodb+srv://"Your username ":" your password "....
```


1. Starting the Server application.
```bash
cd server 
npm install
nodemon index.js
```
   `This will start server on localhost:5000`     

5. Starting the Client application.
```bash
cd client 
npm install
npm start
```
   `This will start client app on localhost:3000`  


---
# 🖼️ Some Glimpse of the Site

### 1. Home Page

![homeImg](https://user-images.githubusercontent.com/89806031/178814155-9a31f975-aee1-4630-9d05-29b30b14b46b.png)
![homeImg2](https://user-images.githubusercontent.com/89806031/178814812-a9748e71-2f43-4a54-8935-1d875682ae28.png)


### 2. Therapy Page

You can listen to some stress-relieving music 😇, can do yoga and meditation by watching tutorials, watch some funny videos to get some laugh and much more on the therapy section. You can filter the videos acccordingly 👇👇

![therapyImg2](https://user-images.githubusercontent.com/89806031/178817207-9b3f5ef3-449d-4121-8d96-37637f829983.png)

Filtered Method Videos 👇👇
![therapyImg1](https://user-images.githubusercontent.com/89806031/178816259-f7a1c48d-0b26-48e4-8660-86d88828291d.png)

### 3. Diet Page

A healthy diet plays an important role in reducing stress and anxiety. We have a diet section where you can search for recipes of any ingredient.
![DietImg1](https://user-images.githubusercontent.com/89806031/178817824-5cf15ef6-3720-4d51-b45c-9287eb31cb1b.png)

There is a small box having a list of ingredients 🍈🥑 which help in reducing stress as well as anxiety.
![dietImg2](https://user-images.githubusercontent.com/89806031/178822090-fd452a8c-276e-4590-b3a2-562141824683.png)

You can look recipes for any ingredient from the Ingredient-Box. By <b><i>Clicking</i></b> on the recipe image you can get more information about that recipe 😋
![dietImg3](https://user-images.githubusercontent.com/89806031/178822706-714f2fc4-e592-4fa1-a57c-ac41494c0784.png)


### 4. Diary Page

If you struggle with stress, depression, or anxiety, keeping a journal can be a great Idea. Keep a track of your daily mood with our diary section.
![diaryImg1](https://user-images.githubusercontent.com/89806031/178824499-92f96455-9a92-4ff7-88c2-32151625d9dd.png)

You can also view your diary entries 📖 
![diaryImg2](https://user-images.githubusercontent.com/89806031/178824917-64665a89-3039-4801-962b-5da758cdcb2e.png)


### 5. Chat Page

Lack of social interactions also damages mental health. But don't worry, we have a chat section where you can interact with other people facing same issues.
![chatImg1](https://user-images.githubusercontent.com/89806031/178890614-93a7cbaf-0929-4ef8-ae64-3a95d9cb52fa.png)

![chatImg2](https://user-images.githubusercontent.com/89806031/178890696-97bdbca8-1266-4837-a588-f9c003098139.png)


### 6. Authentication Pages

SignUp Page
![authImg1](https://user-images.githubusercontent.com/89806031/178909035-3f754068-8da8-45c9-b57d-3a5e814010f7.png)

Login Page
![autImg2](https://user-images.githubusercontent.com/89806031/178909075-7a5029d8-4907-440e-91a9-61f8c78ffad9.png)


### 7. SetAvatar Page

After signing up, you would come across this page where you have to pick an Avatar as your progfile image.
![avatarImg](https://user-images.githubusercontent.com/89806031/178909724-6fa3babe-d03f-4ffd-ba6e-0eee0efdfb99.png)


---

# 🧰 Tools & Packages

## Client Dependencies


  | Package | Description | version |
  | ------------ | ------------- | ------------- |
  | [axios](https://www.npmjs.com/package/axios) |Promise based HTTP client for the browser and node.js|  0.27.2 |
  | [buffer](https://www.npmjs.com/package/react-dropdown) | React dropdown menu      | 6.0.3 |
  | [emoji-picker-react](https://www.npmjs.com/package/react-syntax-highlighter) | Used for syntaxhighlighting in coding blocks,texts etc | 3.5.1 |
  | [material-ui-icons](https://www.npmjs.com/package/react-syntax-highlighter) | Used for syntaxhighlighting in coding blocks,texts etc | 5.8.4 |
  | [react-icons](https://www.npmjs.com/package/react-typed) | Typing annimation in react | 4.4.0 |
  | [react-toastify](https://www.npmjs.com/package/file-saver) | provides downloadable formats of files  | 9.0.5 |
  | [socket.io-client](https://www.npmjs.com/package/jspdf) |A library to generate PDFs in JavaScript.  | 4.5.1 |
  | [styled-components](https://material-ui.com)| Customized React components | 5.3.5 |
  | [uuid](https://casesandberg.github.io/react-color/) | color palette | 8.3.2 |


## Server Dependencies



  | Package | Description | version |
  | ------------ | ------------- | ------------- |
  | [bcrypt](https://www.npmjs.com/package/bcrypt) | A library to help you hash password | 5.0.1 |
  | [cors](https://www.npmjs.com/package/cors) | A package providing express middleware | 2.8.5 |
  | [express](https://expressjs.com) | Node.js web application framework for server side scripting | 4.18.1 |
  | [MongoDB](https://www.mongodb.com) | a NoSQL database | 4.4.3 |
  | [mongoose](https://mongoosejs.com) | elegant mongodb object modeling for node.js | 6.4.0 |
  | [socket.io](https://socket.io/) | A library enabling real-time bidirectional event-based communication | 4.5.1 |


## Server devDependencies

  | Package | Description | version |
  | ------------ | ------------- | ------------- |
  | [nodemon](https://www.npmjs.com/package/nodemon) | A library to automatically restart node application | 2.0.16 |


## API's used

  | API  | Description | Used in Page |
  | ------------ | ------------- | ------------- |
  | [dotenv](https://www.npmjs.com/package/bcrypt) | A library to help you hash password | 16.0.1 |
  | [nodemon](https://www.npmjs.com/package/bcrypt) | A library to help you hash password | 2.0.16 |


## 👦 Author

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://garvits-portfolio-on.netlify.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/garvit-varshney-a35055220/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/20elb179)
