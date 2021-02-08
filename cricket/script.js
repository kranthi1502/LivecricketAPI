var UpcomingUrl='https://cricapi.com/api/matchCalendar?apikey=SQpDRKzP0iXnAlmTfKTjkbYTbr02';
var teamidurl='https://cricapi.com/api/matches?apikey=SQpDRKzP0iXnAlmTfKTjkbYTbr02';
var scoreurl='https://cricapi.com/api/cricketScore?apikey=SQpDRKzP0iXnAlmTfKTjkbYTbr02&unique_id=';
var matchesdiv=document.getElementById('list');
var scorediv=document.getElementById('popup');
var prof=document.getElementById('prof');
var main=document.getElementById('mainid')
var pro=document.getElementById('prop');
async function upcoming(){
	try {
		scorediv.innerHTML=" ";
		//prof.innerHTML=" ";
		profile.innerHTML=" ";
		prop.innerHTML=" ";
		let UURL=await fetch(UpcomingUrl);
		let UURLdata=await UURL.json();
		let matches=UURLdata.data;
		
		var table=document.createElement("table");
		document.body.append(table);
		var d="";
		const htmlString = matches
        .map((matches) => {
            return `
            <li class="match">
                <h3>${matches.name}</h3>
                <p>Date: ${matches.date}</p>
                
            </li>
        `;
        })
		.join('');
		list.innerHTML=htmlString;
		
		

	} catch (error) {
		console.log(error);
	}
}
var di=document.getElementById("prop");
async function score(){
	try {
		matchesdiv.innerHTML=" ";
		profile.innerHTML=" ";
		//prof.innerHTML=" ";
		//prof.style.display=none;
		let team=await fetch(teamidurl);
		let teamid=await team.json();
		let id=teamid.matches;
		console.log(id[0]);
		
        var div=document.getElementById("content");
       var divtext=" ";
       var divtext1=" ";
		for(let i=0;i<id.length;i++){
		//button1.setAttribute("onclick",`togglealert(${id[i]})`)
			var data=id[i];
			if(id[i]["matchStarted"]){
				let matchscore=await fetch(scoreurl+id[i]["unique_id"]);
				let matchscorej=await matchscore.json();
				
				//console.log(matchscorej)
                if(matchscorej["score"]){
					/*console.log(id[i]["winner_team"]);
					console.log(id[i]["date"]);
					console.log(matchscorej["score"]);*/
					divtext="<div>"+"<h3>"+id[i]["team-1"]+" vs "+id[i]["team-2"]+"</h3>"+"<p>"+id[i]["date"].slice(0,10)+"</p>"+"</div>"
					//divtext1="<div>"+"<tr><td><h2>"+id[i]["team-1"]+" vs "+id[i]["team-2"]+"</h2></td></tr>"+"<tr><td><h2>"+matchscorej["description"]+"</h2></td></tr>"+"<tr><td><h2>"+id[i]["winner_team"]+"</h2></td></tr>"+"<tr><td><h2>"+id[i]["type"]+"</h2></td></tr>"+"<tr><td><h2>"+matchscorej["matchStarted"]+"</h2></td></tr>"+"<button class=btn btn-default onclick=toggle()>close</button"+"</div>"
				}
				else{
					/*console.log(id[i]["team-1"]+" vs "+id[i]["team-2"]);
					console.log(id[i]["date"]);
					console.log("score not updated");*/
					divtext="<div>"+"<h3>"+id[i]["team-1"]+" vs "+id[i]["team-2"]+"</h3>"+"<p>"+id[i]["date"].slice(0,10)+"</p>"+"</div>"
					//divtext1="<div>"+"<tr><td><h2>"+id[i]["team-1"]+" vs "+id[i]["team-2"]+"</h2></td></tr>"+"<tr><td><h2>"+matchscorej["description"]+"</h2></td></tr>"+"<tr><td><h2>"+"</h2></td></tr>"+"<tr><td><h2>"+id[i]["type"]+"</h2></td></tr>"+"<tr><td><h2>"+matchscorej["matchStarted"]+"</h2></td></tr>"+"<button class=btn btn-default onclick=toggle()>close</button"+"</div>"
	}
	}
			else{
				/*console.log(id[i]["team-1"]+" vs "+id[i]["team-2"]);
				console.log(id[i]["date"]);
				console.log("Match not started yet")*/
				divtext="<div>"+"<h3>"+id[i]["team-1"]+" vs "+id[i]["team-2"]+"</h3>"+"<p>"+id[i]["date"].slice(0,10)+"</p>"+"</div>"
				//divtext1="<div>"+"<tr><td><h2>"+id[i]["team-1"]+" vs "+id[i]["team-2"]+"</h2></td></tr>"+"<tr><td><h2>"+"</h2></td></tr>"+"<tr><td><h2>"+"</h2></td></tr>"+"<tr><td><h2>"+id[i]["type"]+"</h2></td></tr>"+"<tr><td><h2>"+id[i]["dateTimeGMT"]+"</h2></td></tr>"+"<tr><td><h2>"+id[i]["dateTimeGMT"]+"</h2></td></tr>"+id[i]["toss_winner_team"]+"<tr><td><p>match not yet started</p></td></tr>"+"<button class=btn btn-default onclick=toggle()>close</button"+"</div>"
	}
			console.log(i);
			//div.innerHTML+=divtext;
			var bor=document.createElement("div");
			bor.setAttribute('class','bor1');
			bor.innerHTML+=divtext;
			
			let btn1=document.createElement('button');
			btn1.setAttribute("class","btn btn-default");
			btn1.setAttribute('id','more');
			btn1.addEventListener('click',()=>{
				console.log(id[i]["unique_id"]);
				togglealert(id[i]);
			})
			btn1.innerText="View";
			bor.append(btn1);
		
			di.append(bor);	
		}
} catch (error) {
		console.log("error");
	}
}
async function togglealert(data){
try {

	var prop=document.getElementById('prop');
prop.classList.toggle('active');
var popup=document.getElementById('popup');
popup.classList.toggle('active');

var divtext1=" ";
let moredetails=await fetch(scoreurl+data["unique_id"]);
let moredata=await moredetails.json();
console.log(moredata);
var div2=document.createElement('div');
var vs=document.createElement('h2');
var vs1=document.createElement('h3');
var vs2=document.createElement('h4');
var vs3=document.createElement('h4');
var vs4=document.createElement('h4');
var btn2=document.createElement('button');
btn2.setAttribute("class","btn btn-danger");
btn2.setAttribute('id','close');
btn2.innerText="close";

 if(data["matchStarted"]){
	  if(moredata["score"]){
		vs.innerHTML="Match:"+data["team-1"]+" vs "+data["team-2"]+"<br>";
		vs1.innerHTML="score:"+moredata['description']+"<br>";
		vs2.innerHTML="winner:"+data['winner_team']+'<br>';
		vs3.innerHTML="Match_Type:"+data['type']+'<br>';
		vs4.innerHTML="Match_started:"+moredata['matchStarted'];

		 // divtext1="<div>"+"<tr><td><h2>"+data["team-1"]+" vs "+data["team-2"]+"</h2></td></tr>"+"<tr><td><h2>"+moredata["description"]+"</h2></td></tr>"+"<tr><td><h2>"+data["winner_team"]+"</h2></td></tr>"+"<tr><td><h2>"+data["type"]+"</h2></td></tr>"+"<tr><td><h2>"+moredata["matchStarted"]+"</h2></td></tr>"+"</div>"
			}
	  else{
		vs.innerHTML="Match:"+data["team-1"]+" vs "+data["team-2"]+"<br>";
		vs1.innerHTML="score:"+moredata['description']+"<br>";
	//	vs2.innerHTML="winner:"+data['winner_team']+'<br>';
		vs3.innerHTML="Match_Type:"+data['type']+'<br>';
		vs4.innerHTML="Match_started:"+moredata['matchStarted'];
		  //divtext1="<div>"+"<tr><td><h2>"+data["team-1"]+" vs "+data["team-2"]+"</h2></td></tr>"+"<tr><td><h2>"+moredata["description"]+"</h2></td></tr>"+"<tr><td><h2>"+"</h2></td></tr>"+"<tr><td><h2>"+data["type"]+"</h2></td></tr>"+"<tr><td><h2>"+moredata["matchStarted"]+"</h2></td></tr>"+"</div>"
		}
  }
  else{
	vs.innerHTML="Match:"+data["team-1"]+" vs "+data["team-2"]+"<br>";
	//vs1.innerHTML="score:"+moredata['description']+"<br>";
	vs2.innerHTML="winner:"+data['toss_winner_team']+'<br>';
	vs3.innerHTML="Match_Type:"+data['type']+'<br>';
	vs4.innerHTML="Match_started:Match not yet started";
	 //divtext1="<div>"+"<tr><td><h2>"+data["team-1"]+" vs "+data["team-2"]+"</h2></td></tr>"+"<tr><td><h2>"+"</h2></td></tr>"+"<tr><td><h2>"+"</h2></td></tr>"+"<tr><td><h2>"+data["type"]+"</h2></td></tr>"+"<tr><td><h2>"+data["dateTimeGMT"]+"</h2></td></tr>"+"<tr><td><h2>"+data["dateTimeGMT"]+"</h2></td></tr>"+data["toss_winner_team"]+"<tr><td><p>match not yet started</p></td></tr>"+"</div>"
				 
  }
  popup.innerHTML=" ";
//divtext1="<div><h1>hi kranthi</h1>"+"<h2>"+moredata["description"]+"<button onclick()=togglealert()></button></div>";
div2.append(vs,vs1,vs2,vs3,vs4,btn2);
			popup.append(div2);
			btn2.addEventListener('click',()=>{
				console.log(data["unique_id"]);
				//div1.removeChild(div1.childNodes[0]);
				togglealert();
				
			})
				
			
} catch (error) {
	console.log("error");
}

}
const playerprofileurl='https://cricapi.com/api/playerStats?apikey=SQpDRKzP0iXnAlmTfKTjkbYTbr02&pid=';
let profiledetails=[];
const profile=document.getElementById('profile');
var searchword=document.getElementById('word');
const playerurl="https://cricapi.com/api/playerFinder?apikey=SQpDRKzP0iXnAlmTfKTjkbYTbr02&name=";
searchword.addEventListener("keyup",async (e)=>{
	var searchstring=e.target.value.toLowerCase();
	console.log(searchstring);

	matchesdiv.innerHTML=" ";
	prop.innerHTML=" ";
	const res=await fetch(playerurl+searchstring);
   profiledetails=await res.json();
   //console.log(profiledetails["data"]);
   const filterprofile=profiledetails["data"].filter((player)=>{
	   return(
		   player.name.toLowerCase().includes(searchstring)

	   );
   });
   //console.log(filterprofile[0]['pid']);
   displayplayers(filterprofile);

});
async function display(data){
	
	prof.classList.toggle('active');
	var stats=document.getElementById('stats');
	stats.classList.toggle('active');
	
	var btn4=document.createElement('button');
btn4.setAttribute("class","btn btn-danger");
btn4.setAttribute('id','close');
btn4.innerText="close";
	console.log(data);
	const careerdata=await fetch(playerprofileurl+data);
	const careerdetails=await careerdata.json();
	console.log(careerdetails)
	var pic=document.createElement('img');
	pic.setAttribute('id','pic');
	pic.src=careerdetails["imageURL"];
	console.log(careerdetails["imageURL"]);
   var a=document.createElement('div');
	var dtext="<div class=playerc><h3 class=hname>"+careerdetails["fullName"]+"</h3>"+"<br>"+"<p><b>Profile: </b><i>"+careerdetails["profile"]+"</i></p>"+"<p><b>Battingstyle: </b>"+careerdetails["battingStyle"]+"</p><br>"+"<p><b>Bowlingstyle: </b>"+careerdetails["bowlingStyle"]+"</p><br>"+"<p><b>Born: </b>"+careerdetails["born"]+"</p><br>"+"<p><b>Country: </b>"+careerdetails["country"]+"</p><br>"+"<p><b>Age: </b>"+careerdetails["currentAge"]+"</p>"+"</div>"

	stats.innerHTML=dtext;
	dtext=" ";
	stats.append(pic,btn4);
	
	btn4.addEventListener('click',()=>{
		console.log(1);
		//div1.removeChild(div1.childNodes[0]);
		display();
		
	})
	//stats.style.display='block';

}
 const displayplayers = async (player) => {
    const htmlString = player
        .map((player) => {
			return `
			

            <li class="character">
                <h2>${player.name}</h2>
                <p>FullName: ${player.fullName}</p>
				<p>ID:${player.pid}</p>
				
				<button id='stats1' onclick=display(${player.pid})>career</button>
			</li>
			
        `;
        })
        .join('');
    profile.innerHTML = htmlString;
};


