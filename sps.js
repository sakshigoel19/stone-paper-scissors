var brock = document.getElementById("brock");
var bpaper = document.getElementById("bpaper");
var bscissors = document.getElementById("bscissors");
var round=0;
brock.addEventListener("click",function(){
	var hands = ['Rock', 'Paper', 'Scissors'];
	round++;
	var userchoice = 0;
	var computerchoice = comprand();
	var utable = document.getElementById("utable");
	var ctable = document.getElementById("ctable");
	alert("Computer chose " + hands[computerchoice]);
	var des = judge(userchoice,computerchoice);
	alert(des);
	caluscore(des,utable);
	calcscore(des,ctable);
	var utable = document.getElementById("utable");
	var ctable = document.getElementById("ctable");
	if(round==5){
		lastround(utable,ctable);
		round=0;
	}
	
});
bpaper.addEventListener("click",function(){
	var hands = ['Rock', 'Paper', 'Scissors'];
		round++;
	var userchoice = 1;
	var computerchoice = comprand();
	var utable = document.getElementById("utable");
	var ctable = document.getElementById("ctable");
	alert("Computer chose " + hands[computerchoice]);
	var des = judge(userchoice,computerchoice);
	alert(des);
	caluscore(des,utable);
	calcscore(des,ctable);
	var utable = document.getElementById("utable");
	var ctable = document.getElementById("ctable");
	if(round==5){
		lastround(utable,ctable);
		round=0;
	}
});
bscissors.addEventListener("click",function(){
	var hands = ['Rock', 'Paper', 'Scissors'];
		round++;
	var userchoice = 2;
	var computerchoice = comprand();
	var utable = document.getElementById("utable");
	var ctable = document.getElementById("ctable");
	alert("Computer chose " + hands[computerchoice]);
	var des = judge(userchoice,computerchoice);
	alert(des);
	caluscore(des,utable);
	calcscore(des,ctable);
	var utable = document.getElementById("utable");
	var ctable = document.getElementById("ctable");
	if(round==5){
		lastround(utable,ctable);
		round=0;
	}
	
});
function comprand(){
	var cChoice = Math.floor(Math.random() * 3);
	return cChoice;
}
function judge(userchoice,computerchoice){
	if (userchoice==computerchoice)
		return "This round is draw";
	else if(userchoice == 0 && computerchoice== 1)
		return "You lost this round";
	else if(userchoice == 1 && computerchoice== 2)
		return "You lost this round";
	else if(userchoice == 2 && computerchoice== 0)
		return "You lost this round";
	else
		return "You won this round";
}
function addrow(addtable,rowLength,addscore){
	 var newRow = addtable.insertRow(rowLength);
	 newRow.insertCell(0).innerHTML = round;
	 newRow.insertCell(1).innerHTML = addscore;
	
}
function caluscore(des,utable){
	var rowLength = utable.rows.length;
	if(des=="This round is draw"){
		var uscore = 0;
		addrow(utable,rowLength,uscore);
	}
	if(des=="You lost this round"){
		var uscore = 0;
		addrow(utable,rowLength,uscore);
	}
	if(des=="You won this round"){
		var uscore = 1;
		addrow(utable,rowLength,uscore);
	}
}
function calcscore(des,ctable){
		var rowLength = ctable.rows.length;
	if(des=="This round is draw"){
		var cscore = 0;
		addrow(ctable,rowLength,cscore);
	}
	if(des=="You lost this round"){
		var cscore = 1;
		addrow(ctable,rowLength,cscore);
	}
	if(des=="You won this round"){
		var cscore = 0;
		addrow(ctable,rowLength,cscore);
	}
}
function lastround(utable,ctable){
	var i=1,usum=0,csum=0;
	while(i<utable.rows.length){
		usum += parseFloat(utable.rows[i].cells[1].innerHTML);
		i++;
	 }
	 var i=1;
	while(i<ctable.rows.length){
	csum += parseFloat(ctable.rows[i].cells[1].innerHTML);
		i++;
	 }
	 if(usum>csum)
		 alert("finally won");
	 else if(usum==csum)
		 alert("Game Draw");
		
	 else
		 alert("You Lost the game");
	 var ulength=utable.rows.length;
	 for(var i=1;i<ulength;i++){
		 utable.deleteRow(i);
		 ulength--;
		 i--;
	 }
	 var clength=ctable.rows.length;
	 for(var i=1;i<clength;i++){
		 ctable.deleteRow(i);
		 clength--;
		 i--;
	 }
	 
	 
}
