/* ===============================
   EDUSTREAMIX - B.Com Semester 4
================================= */


/* ---------- COMMON LANGUAGE SUBJECTS ---------- */

const commonLanguages = [

{
name:"English",
channels:[
{name:"English by Nisa",links:[
"https://youtube.com/embed/videoseries?list=PLUJXB7al70IAIbiajs7JqxrGqc-tgi80j"
]},
{name:"Sara’s Learning Point",links:[
"https://youtube.com/embed/videoseries?list=PLjNdhMBtsxpz5BYkI4eiiYQahD7GroZy0"
]},
{name:"Dandu Venkatramulu",links:[
"https://youtube.com/embed/videoseries?list=PLyjVm5GfnmY4rC5wuA6SmhHh0NyVL9TOX"
]},
{name:"Educare",links:[
"https://youtube.com/embed/videoseries?list=PLbBCm7TkLCKJvY6pKiQCJctXF4Pq8k7G5"
]},
{name:"PCV English",links:[
"https://youtube.com/embed/videoseries?list=PLldWy7gu4R77UUt2vuS2n3pEkb3oHOLot"
]}
]
},

{
name:"Telugu",
channels:[
{name:"Dandu Venkatramulu",links:[
"https://youtube.com/embed/videoseries?list=PLyjVm5GfnmY5y3l69NvP0rfdM3PIr1YTn"
]},
{name:"Matrubhasha",links:[
"https://youtube.com/embed/videoseries?list=PL7noKDJp4ZRJJaH6RJ4OBogQ1myEbTDUW"
]}
]
},

{
name:"Hindi",
channels:[
{name:"Disha Hindi Classes",links:[
"https://youtube.com/embed/videoseries?list=PLsTBUOfP6EhcuFUYcKCOXmNCleQZQxANC"
]}
]
},

{
name:"Sanskrit",
channels:[
{name:"My Teaching Talkies",links:[
"https://youtube.com/embed/videoseries?list=PLc1Q__0qOGApo_XRmsLci0RnIznyHUs-Y"
]},
{name:"Dr. Pusapati Ravikantha Reddy",links:[
"https://youtube.com/embed/videoseries?list=PLiOV0508aWZuNdSe92CCsP1bYS63RccOc"
]},
{name:"Rajji Madam",links:[
"https://youtube.com/embed/videoseries?list=PLkjLwcrXVH1W8rSkT7n6EEzCOrlifoDMU"
]},
{name:"Kammampati Nikhil",links:[
"https://youtube.com/embed/videoseries?list=PLJM7CaHL_GN7AXfkXURiDD4_ydFq7Oflj"
]}
]
}

];


/* ---------- CORE SUBJECTS FOR SEM 4 ---------- */

const sem4Core = [

{
name:"Corporate Accounting",
channels:[
{name:"Hasham Ali Khan",links:[
"https://youtube.com/embed/videoseries?list=PLWJDzVuPkXAlXTMbitI-ZDjiAmi7M8Zww"
]},
{name:"Devika’s Commerce",links:[
"https://youtube.com/embed/videoseries?list=PL32yVakBnz3KJkri5LmhkNdFuPeTmyWlt"
]},
{name:"CWG for B.Com",links:[
"https://youtube.com/embed/videoseries?list=PL9Cd7H8NFRQymNGuIkEE-ZD9aNjk9KxWZ"
]}
]
},

{
name:"Business Statistics – 2",
channels:[
{name:"Hasham Ali Khan",links:[
"https://youtube.com/embed/videoseries?list=PLWJDzVuPkXAk3twapgb0DQ9MyaQ24V4JS"
]},
{name:"Devika’s Commerce",links:[
"https://youtube.com/embed/videoseries?list=PLLhSIFfDZcUUatEzYCA8xH02JR_GlLjMA"
]}
]
},

{
name:"Income Tax",
channels:[
{name:"Devika’s Commerce",links:[
"https://youtube.com/embed/videoseries?list=PLP6CJ8yrRpA3_WbjoudHcT10AxY3Tut1B"
]},
{name:"Advanced Income Tax - Devika",links:[
"https://youtube.com/embed/videoseries?list=PL32yVakBnz3JO44C9ZF3fsGOvttZy_-e3"
]},
{name:"Income from House Property",links:[
"https://youtube.com/embed/videoseries?list=PL0orXlrJWBR9uKDGy4ImpsoQH772VMsoB"
]},
{name:"Hasham Ali Khan",links:[
"https://youtube.com/embed/videoseries?list=PLWJDzVuPkXAkJ5jwa5w815ComHmCzYzwb"
]}
]
},

{
name:"Universal Human Values",
channels:[
{name:"Tegron Learning Hub",links:[
"https://youtube.com/embed/videoseries?list=PLTGveumUgIXIn62KrUZEMuR7AgK2iabBe&si=Ru6F2O7-7rRb5zz7"
]}
]
},

{
name:"Practice of Life & General Insurance",
channels:[
{name:"Diwivedi Guidance",links:[
"https://youtube.com/embed/videoseries?list=PLsh2FvSr3n7cD0F2FSjBVWWrVF6cR8Pla"
]}
]
}

];


/* ---------- GROUP STRUCTURE ---------- */

const data = {

"B.Com General ": [
...commonLanguages,
...sem4Core
],

"B.Com Honors ": [
...commonLanguages,
{
name:"Human Resource Management",
channels:[
{name:"Devika’s Commerce",links:[
"https://youtube.com/embed/videoseries?list=PLLhSIFfDZcUUelovQsfQHrCg3ZPujMzrh"
]}
]
},
...sem4Core
],

"B.Com Computer Applications ": [
...commonLanguages,
...sem4Core,
{
name:"Web Technologies",
channels:[
{name:"Fazil Khan Tutorial",links:[
"https://youtube.com/embed/videoseries?list=PL0IHN5oTE2R7ekgSTUPkwILoqK7oAoExo"
]},
{name:"Education Point Online",links:[
"https://youtube.com/embed/videoseries?list=PLg2LVpcRrOF4if66PQvjYK5nIGJamDfhC"
]}
]
}
],

"B.Com Business Analytics ": [
...commonLanguages,
...sem4Core,
{
name:"Forecasting & Predictive Analysis",
channels:[
{name:"(Add Playlist Here)",links:["#"]}
]
}
]

};
