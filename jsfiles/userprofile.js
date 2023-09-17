
// JavaScript to toggle the visibility of the Change Password section
const initial = `<div class="bg-white p-6 rounded-lg shadow-md" >
    <div class="flex justify-center mb-4">
            <img src="../assets/ap.jpg" alt="Profile Image" class="w-32 h-32 rounded-full object-cover">
        </div>
    <div class="mb-4">
        <label for="profile-photo" class="block text-gray-700 font-semibold mb-2">Profile Photo</label>
        <input type="file" id="profile-photo" accept="image/*" class="w-full p-2 border border-gray-300 rounded-md">
    </div>
    <div class="mb-4">
        <label for="name" class="block text-gray-700 font-semibold mb-2">Name</label>
        <input type="text" id="name" placeholder="Your Name" class="w-full p-2 border border-gray-300 rounded-md">
    </div>
    <div class="mb-4">
        <label for="contact" class="block text-gray-700 font-semibold mb-2">Contact Information</label>
        <input type="text" id="contact" placeholder="Email or Phone" class="w-full p-2 border border-gray-300 rounded-md">
    </div>
    <div class="flex justify-end">
        <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">Save</button>
    </div>
</div>`;
let firstButtonContent = `  <a href="http://127.0.0.1:5500/Login.html?#" class="flex items-center px-3 py-2 rounded-md hover:bg-yellow-500 font-bold hover:text-black transition-all duration-200 hover:scale-95"><li>Login</li></a>
<a  href="http://127.0.0.1:5500/SignUp.html?#" class="flex items-center px-3 py-2 rounded-md hover:bg-yellow-500 font-bold hover:text-black transition-all duration-200 hover:scale-95"><li>SignUp</li></a>
`;

const changepassword = `<div id="change-password-section">
    <hr class="mb-6">
    <h3 class="text-2xl font-semibold mb-2">Change Password</h3>
    <div class="mb-4">
        <label for="current-password" class="block text-gray-700 font-semibold mb-2">Current Password</label>
        <input type="password" id="current-password" class="w-full p-2 border border-gray-300 rounded-md">
    </div>
    <div class="mb-4">
        <label for="new-password" class="block text-gray-700 font-semibold mb-2">New Password</label>
        <input type="password" id="new-password" class="w-full p-2 border border-gray-300 rounded-md">
    </div>
    <div class="mb-4">
        <label for="confirm-password" class="block text-gray-700 font-semibold mb-2">Confirm New Password</label>
        <input type="password" id="confirm-password" class="w-full p-2 border border-gray-300 rounded-md">
    </div>
    <div class="flex justify-end">
        <button class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200">Change Password</button>
    </div>
</div>`;

const viewprofile = `
<div class="bg-white p-6 rounded-lg shadow-md" >
    <div class="flex justify-center mb-4 flex-col gap-2 font-bold items-center">
            <img src="../assets/ap.jpg" alt="Profile Image" class="w-32 h-32 rounded-full object-cover ">
            <div>Profile-photo</div>
        </div>
    
    <div class="mb-4">
        <label for="name" class="block text-gray-700 font-semibold mb-2">Name</label>
        <input  id="name" placeholder="Your Name" class="w-full p-2 border border-gray-300 rounded-md readonly">
    </div>
    <div class="mb-4">
        <label for="contact" class="block text-gray-700 font-semibold mb-2">Contact Information</label>
        <input type="text" id="contact" placeholder="Email or Phone" class="w-full p-2 border border-gray-300 rounded-md readonly">
    </div>
    <div class="mb-4">
        <label for="contact" class="block text-gray-700 font-semibold mb-2">Aadhar Information</label>
        <input type="text" id="contact" placeholder="Aadhar Number" class="w-full p-2 border border-gray-300 rounded-md readonly">
    </div>
    <div class="flex justify-end">
        <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">Save</button>
    </div>
</div>
`

const containt = document.querySelector('#containt');
const updateprofilebtn = document.querySelector('#update-profile-btn'); 
const changepasswordbtn = document.querySelector('#change-password-btn');
const viewprofilebtn = document.querySelector('#view-profile-btn');
// const containtmobile = document.querySelector('#containt');
const updateprofilebtnmobile = document.querySelector('#update-profile-btn-mobile'); 
const changepasswordbtnmobile = document.querySelector('#change-password-btn-mobile');
const viewprofilebtnmobile = document.querySelector('#view-profile-btn-mobile');
// const usermenudata = document.querySelector('.usermenudata');


document.addEventListener("DOMContentLoaded",() =>{
    containt.innerHTML = viewprofile;
    containtmobile.innerHTML = viewprofile;
    
})

if(updateprofilebtn || updateprofilebtnmobile){
    updateprofilebtn.addEventListener('click', () =>{
    containt.innerHTML = initial;
})
updateprofilebtnmobile.addEventListener('click', () =>{
    containt.innerHTML = initial;
    setTimeout(() => {
         const list = close.classList;
          list.toggle("active_nav");
          const list2 = open.classList;
          list2.toggle("active_nav");
        const list3 = mobile_nav.classList;
        list3.toggle("active_nav");
     }, 1000);
})

}

if(changepasswordbtn){
    changepasswordbtn.addEventListener('click', () =>{
    // containt.innerHTML = changepassword;
    containt.innerHTML = changepassword;
    // containtmobile.innerHTML = changepassword;
})
}

if(changepasswordbtnmobile){
    changepasswordbtnmobile.addEventListener('click', () =>{
    // containt.innerHTML = changepassword;
    containt.innerHTML = changepassword;
    setTimeout(() => {
         const list = close.classList;
          list.toggle("active_nav");
          const list2 = open.classList;
          list2.toggle("active_nav");
        const list3 = mobile_nav.classList;
        list3.toggle("active_nav");
     }, 1000);
    // containtmobile.innerHTML = changepassword;
})
}
if(viewprofilebtn){
    viewprofilebtn.addEventListener('click', () =>{
    // containt.innerHTML = changepassword;
    containt.innerHTML = viewprofile;
    
    // containtmobile.innerHTML = viewprofile;
})
}
if(viewprofilebtnmobile){
    viewprofilebtnmobile.addEventListener('click', () =>{
    // containt.innerHTML = changepassword;
    containt.innerHTML = viewprofile;
     setTimeout(() => {
         const list = close.classList;
          list.toggle("active_nav");
          const list2 = open.classList;
          list2.toggle("active_nav"); 
            const list3 = mobile_nav.classList;
            list3.toggle("active_nav");
     }, 1000);
    // containtmobile.innerHTML = viewprofile;
})
}

const close = document.querySelector(".close");
const open = document.querySelector(".open");
const mobile_nav = document.querySelector(".mobile_nav_profile");

open.addEventListener("click", () =>{
  const list = close.classList;
  list.toggle("active_nav");
  const list2 = open.classList;
  list2.toggle("active_nav");
  const list3 = mobile_nav.classList;
  list3.toggle("active_nav");
});

close.addEventListener("click", () =>{
  const list = close.classList;
  list.toggle("active_nav");
  const list2 = open.classList;
  list2.toggle("active_nav");
  const list3 = mobile_nav.classList;
  list3.toggle("active_nav");
});


  // Function to show something
  function showFunction() {
    const list = open.classList;
    list.add("active_nav");
  }
  function hidefunction() {
    const list = open.classList;
    list.remove("active_nav");
  }

  // Function to handle window resize
  function handleResize() {
    if (window.innerWidth <= 750) {
      // Call the show function
      showFunction();
    }
    if (window.innerWidth >= 750) {
        // Call the show function
        hidefunction();
      }
    // if (window.innerWidth > 950) {
    //   // Call the show function
    //   hidefunction();
    // }
   
  }

  window.addEventListener("resize", handleResize);
  handleResize();

