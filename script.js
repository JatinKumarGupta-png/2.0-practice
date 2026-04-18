const iplTeams = [
  {
    teamName: "MI",
    fullName: "Mumbai Indians",
    captain: "Hardik Pandya",
    primaryColor: "red",
    secondaryColor: "Gold",
    textColor:"White"

    

  },
  {
    teamName: "CSK",
    fullName: "Chennai Super Kings",
    captain: "Ruturaj Gaikwad",
    primaryColor: "Yellow",
    secondaryColor: "Blue",
    textColor:"White"
  },
  {
    teamName: "RCB",
    fullName: "Royal Challengers Bangalore",
    captain: "Faf du Plessis",
    primaryColor: "Red",
    secondaryColor: "Black",
    textColor:"White"
  },
  {
    teamName: "KKR",
    fullName: "Kolkata Knight Riders",
    captain: "Shreyas Iyer",
    primaryColor: "Purple",
    secondaryColor: "Gold",
    textColor:"White"
  },
  {
    teamName: "DC",
    fullName: "Delhi Capitals",
    captain: "Rishabh Pant",
    primaryColor: "black",
    secondaryColor: "blue",
    textColor:"White"
  },
  {
    teamName: "SRH",
    fullName: "Sunrisers Hyderabad",
    captain: "Pat Cummins",
    primaryColor: "Orange",
    secondaryColor: "Black",
    textColor:"White"
  },
  {
    teamName: "RR",
    fullName: "Rajasthan Royals",
    captain: "Sanju Samson",
    primaryColor: "bagani",
    secondaryColor: "Blue",
    textColor:"White"
  },
  {
    teamName: "PBKS",
    fullName: "Punjab Kings",
    captain: "Shikhar Dhawan",
    primaryColor: "Red",
    secondaryColor: "Gold",
    textColor:"White"
  },
  {
    teamName: "GT",
    fullName: "Gujarat Titans",
    captain: "Shubman Gill",
    primaryColor: "Navy Blue",
    secondaryColor: "Gold",
    textColor:"White"
  },
  {
    teamName: "LSG",
    fullName: "Lucknow Super Giants",
    captain: "KL Rahul",
    primaryColor: "Light Blue",
    secondaryColor: "Orange",
    textColor:"White"
  }
];
var h1 = document.querySelector("h1");
var main = document.querySelector("main");
var btn = document.querySelector("button");

btn.addEventListener('click', function(){
    var Index = Math.floor(Math.random() * iplTeams.length);
    var team = iplTeams[Index];
    console.log(team);
    h1.textContent = team.teamName;
    main.style.backgroundColor = team.secondaryColor;
    h1.style.backgroundColor = team.primaryColor;
   
})
