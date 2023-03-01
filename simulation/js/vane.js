// var dataset=[[130,130,120,156,135,145,150,180],//initial angle of twist
			 // [152,145,139,177,150,163,170,197],	//final angle of twist
			 // [335,225,288,318,225,270,298,252]];//torque as per dataset given
			 // // [334,225,289,318,225,270,300,255]];//torque as per dataset given

const vaneHeight=1.25;
const vaneDia=1.25;
var dataset=[[130,130,120,156,145,150,180],//initial angle of twist
			 [152,145,139,177,163,170,197],	//final angle of twist
			 [335,225,288,318,270,298,252]];//torque as per dataset given
			
var repeat=0;

let p1,p2,p3;
let arr = [];

let numberGenerator = function() {
  if (arr.length >= 3) 
  {
 	return; 
  }
  let newNumber = Math.floor(Math.random() * 7);
  if (arr.indexOf(newNumber) < 0) {
    arr.push(newNumber);
  }
  numberGenerator();
};

// $(function()
// {
	// $('input').on('input', function() {
		// this.value = this.value.match(/\d*(\.\d*)?/)[0];
	// });
// });

var questions=["The type of soil used to conduct the vane shear test is _________ .",
			   "Top of shear vanes should be atleast _______ below the top surface ",
			   "The diameter of the vane is ______ ."];
			   
var options2=[["Loam","Alluvial","Clay","Silt"],//Clay
			  ["10mm","1.2cm","12mm","10cm"],//10mm
			  ["10mm","12.5mm","1.3cm","2mm"]];//12.5mm

function validateFormativeQA(qn,ans,left,top)
{
	$("#answer").empty();
	document.getElementById("a").innerHTML="";
	document.getElementById("questDiv").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:"+left+";top:"+top+";";
	document.getElementById("q").innerHTML=questions[qn];
	el = document.createElement("option");
	el.textContent = " ";
	el.value = " ";
	answer.appendChild(el);
  
	for(j=0;j<options2[qn].length;j++)
	{
		opt = options2[qn][j];

		el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		answer.appendChild(el);
		$("#answer").change(function()
		{
			ca=$(this).children("option:selected").val();
			if(options2[qn][ans]==ca)
			{
				document.getElementById("a").innerHTML="Correct Answer!";
			}
			else
			{
				document.getElementById("a").innerHTML="Wrong! Answer is "+options2[qn][ans];
			}
			setTimeout(function()
			{
				document.getElementById("questDiv").style.visibility="hidden";
				document.getElementById("nextButton").style.visibility="visible";
			},1500);
		});
	}
}

function create_totalTable(arr) 
{
	var j=0;
    var table = document.getElementById("totalTable");
    for(var i=2;i>=0;i--)
    {
		$("#totalTable").delay()
		.queue(function (create_totalTable) 
		{
			$(this).append("<tr><td style=\"border:1px solid black; padding:5px;\">" + (j+1) + "</td><td style=\"border:1px solid black; padding:5px;\">" + dataset[0][arr[j]] + "</td><td style=\"border:1px solid black; padding:5px;\">"+ dataset[1][arr[j]] +"</td><td style=\"border:1px solid black; padding:5px;\">"+ (dataset[1][arr[j]] - dataset[0][arr[j]]) +"</td></tr>");
			j++;
			create_totalTable(arr);
        });
	}
}

function create_totalTable2(arr) 
{
	var j=0;
    var table = document.getElementById("totalTable2");
    for(var i=2;i>=0;i--)
    {
		$("#totalTable2").delay()
		.queue(function (create_totalTable2) 
		{
			$(this).append("<tr><td style=\"border:1px solid black; padding:5px;\">" + (j+1) + "</td><td style=\"border:1px solid black; padding:5px;\">" + dataset[0][arr[j]] + "</td><td style=\"border:1px solid black; padding:5px;\">"+ dataset[1][arr[j]] +"</td><td style=\"border:1px solid black; padding:5px;\">"+ (dataset[1][arr[j]] - dataset[0][arr[j]]) +"</td><td style=\"border:1px solid black; padding:5px;\">"+ dataset[2][arr[j]] +"</td><td style=\"border:1px solid black; padding:5px;\"><input type=\"text\" style=\"width:50px;\"></td><td style=\"border:1px solid black; padding:5px;\"><input type=\"text\" style=\"width:50px;\"></td></tr>");
			j++;
			create_totalTable2(arr);
        });
	}
}

let h=7.5, d=3.8, H=1.25, D=1.25;
function create_totalTable3(arr) 
{
	var j=0;
    var table = document.getElementById("totalTable2");
	let tf=0;
    for(var i=2;i>=0;i--)
    {
		$("#totalTable2").delay()
		.queue(function (create_totalTable3) 
		{
			tf=(((dataset[2][arr[j]])/(Math.PI*d*d*((H/2)+(D/6))))*10).toFixed(2);
			//=(E9/((22/7)*B4*B4*((0.5*B5)+(B4/6))))
			console.log(tf);
			$(this).append("<tr><td style=\"border:1px solid black; padding:5px;\">" + (j+1) + "</td><td style=\"border:1px solid black; padding:5px;\">" + dataset[0][arr[j]] + "</td><td style=\"border:1px solid black; padding:5px;\">"+ dataset[1][arr[j]] +"</td><td style=\"border:1px solid black; padding:5px;\">"+ (dataset[1][arr[j]] - dataset[0][arr[j]]) +"</td><td style=\"border:1px solid black; padding:5px;\">"+ dataset[2][arr[j]] +"</td><td style=\"border:1px solid black; padding:5px;\">"+ tf +"</td><td style=\"border:1px solid black; padding:5px;\">"+ (tf*0.0981).toFixed(2) +"</td></tr>");
			j++;
			create_totalTable3(arr);
        });
	}
	setTimeout(function()
	{
		document.getElementById("p15-1").style.visibility="visible";
	},1000);
}

function clearTableRows(tableId)
{
	var rows = document.getElementById(tableId).rows;
	var i = rows.length;
	while (--i) 
	{
		rows[i].parentNode.removeChild(rows[i]);
	}
}


function navNext()
{
	for(temp=0;temp<16;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	magic();
}

function animatearrow()
{
    if (document.getElementById('arrow1').style.visibility=="hidden")
        document.getElementById('arrow1').style.visibility="visible";
    else
        document.getElementById('arrow1').style.visibility="hidden";
}

function highlight(id)
{
    if (document.getElementById(id).style.visibility=="hidden")
        document.getElementById(id).style.visibility="visible";
    else
        document.getElementById(id).style.visibility="hidden";
}

function myStopFunction() 
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}

function blinkArrow(l,t,d,h)
{
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:"+l+"px; top:"+t+"px; height:"+h+"px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate("+d+"deg)"; 
	document.getElementById("arrow1").style.msTransform = "rotate("+d+"deg)";
	document.getElementById("arrow1").style.transform = "rotate("+d+"deg)";
}

function magic()
{
	if(simsubscreennum==1)
	{
		blinkArrow(520,270,360,40);
		document.getElementById('5-5').onclick=function()
		{
			myStopFunction();
			document.getElementById('5-5').onclick="";
			document.getElementById('5-5').style.transformOrigin="100% 80%";
			document.getElementById('5-5').style.animation = "valveturn-2 1s forwards ";
			setTimeout(function(){
				document.getElementById('5-5').style.visibility="hidden";
				document.getElementById('5-6').style.visibility="visible";
				setTimeout(function()
				{
					document.getElementById('5-9').style.visibility="visible";
					document.getElementById('5-10').style.visibility="visible";
					document.getElementById('5-10').style.transformOrigin="100% 80%";
					document.getElementById('5-10').style.animation = "water-4 2.5s forwards ";
					setTimeout(function()
					{
						document.getElementById('5-9').style.visibility="hidden";
						document.getElementById('5-6').style.visibility="hidden";
						setTimeout(function()
						{
							document.getElementById("5-12").style.visibility="visible";
							blinkArrow(250,310,270,40);
							document.getElementById('5-12').onclick=function()
							{
								myStopFunction();
								document.getElementById('5-12').onclick="";
								document.getElementById('5-12').style.visibility="hidden";
								document.getElementById('5-13').style.visibility="visible";
								document.getElementById('5-13').style.animation = "mixSoil 1.5s 2 forwards ";
								setTimeout(function()
								{
									document.getElementById('5-14').style.visibility="visible";
									document.getElementById('5-7').style.visibility="hidden";
									document.getElementById('5-10').style.visibility="hidden";
									document.getElementById('5-11').style.visibility="hidden";
									document.getElementById('5-13').style.visibility="hidden";
									setTimeout(function()
									{
										document.getElementById("nextButton").style.visibility="visible";
									},500);
								},3000);
							}
						},500);
					},2500);
				},250);
			},1000);
		}
	}
	
	else if(simsubscreennum == 2)
	{
		document.getElementById("5-8").style.visibility="hidden";
		document.getElementById("5-14").style.visibility="hidden";
		setTimeout(function()
		{
			blinkArrow(380,490,90,30);
			document.getElementById("6-0on").onclick=function()
			{
				myStopFunction();
				document.getElementById("6-0on").onclick="";
				document.getElementById("6-0on").style.visibility="hidden";
				weightOfContainer(6);
			}
		},300);
	}
	
	else if(simsubscreennum == 3)
	{
		document.getElementById("nextButton").style.visibility = "hidden";	
		setTimeout(function()
		{
			document.getElementById("7-3").style.visibility="visible";
			blinkArrow(265,320,270,30);
			document.getElementById("7-3").onclick=function()
			{
				myStopFunction();
				document.getElementById("7-3").onclick="";
				document.getElementById("7-3").style.animation="moveSpatula1 0.4s forwards";
				setTimeout(function()
				{
					document.getElementById("7-3").style.animation="";
					document.getElementById("7-3").style.visibility="hidden";
					document.getElementById("7-0").style="position:absolute; left:210px; top:394px; width:79px; height:23px; background-color:#BB834C; border-radius: 100px / 30px; ";
					document.getElementById("7-4").style.visibility="visible";
					document.getElementById("7-4").style.animation="moveSpatula2 1.5s forwards";
					setTimeout(function()
					{
						document.getElementById("7-4").style="position:absolute; left:395px; top:305px;";
						document.getElementById("7-4").style.animation="rotateSpatula 0.5s forwards";
						setTimeout(function()
						{
							document.getElementById("7-4").style.visibility="hidden";
							document.getElementById("7-3").style.visibility="visible";
							setTimeout(function()
							{
								document.getElementById("7-3").style.visibility="hidden";
								document.getElementById("7-0").style="position:absolute; left:210px; top:398px; width:79px; height:23px; background-color:#BB834C; border-radius: 100px / 30px; ";
								document.getElementById("7-4").style.visibility="visible";
								document.getElementById("7-4").style="position:absolute; left:145px; top:355px;";
								document.getElementById("7-4").style.animation="moveSpatula2 1.5s forwards";
								setTimeout(function()
								{
									document.getElementById("7-4").style="position:absolute; left:395px; top:305px;";
									document.getElementById("7-4").style.animation="rotateSpatula 0.5s forwards";
									setTimeout(function()
									{
										document.getElementById("7-4").style.visibility="hidden";
										document.getElementById("7-3").style.visibility="visible";
										setTimeout(function()
										{
											document.getElementById("7-3").style.visibility="hidden";
											document.getElementById("7-0").style="position:absolute; left:211.5px; top:402px; width:75.5px; height:23px; background-color:#BB834C; border-radius: 100px / 30px; ";
											document.getElementById("7-4").style.visibility="visible";
											document.getElementById("7-4").style="position:absolute; left:145px; top:355px;";
											document.getElementById("7-4").style.animation="moveSpatula2 1.5s forwards";
											setTimeout(function()
											{
												document.getElementById("7-4").style="position:absolute; left:390px; top:308px;";
												document.getElementById("7-4").style.animation="rotateSpatula 0.5s forwards";
												setTimeout(function()
												{
													document.getElementById("7-5").style.visibility="visible"; 
													document.getElementById("7-4").style.visibility="hidden";
													setTimeout(function()
													{
														document.getElementById("nextButton").style.visibility="visible";
													},500);	
												},500);//
											},1500);
										},500);
									},500);//
								},1500);
							},500);
						},500);//
					},1500);
				},400);
			}
		},500);
	}
	
	else if(simsubscreennum == 4)
	{
		document.getElementById("7-5").style.visibility = "hidden";
		blinkArrow(255,295,270,30);
		document.getElementById("4-3").onclick=function()
		{
			myStopFunction();
			document.getElementById("4-3").onclick="";
			document.getElementById("4-3").style.animation="moveStraightEdge 1.75s forwards";
			setTimeout(function()
			{
				document.getElementById("4-2").style="position:absolute; left: 370.5px; top: 362px; width: 40.5px; height: 13.5px; background-color:#BB834C; border-radius:50%; ";
				document.getElementById("nextButton").style.visibility="visible";
			},1750);
		}
	}
	else if(simsubscreennum == 5)
	{
		weightOfContainer(8);
	}
	else if(simsubscreennum == 6)
	{
		blinkArrow(250,300,180,30);
		document.getElementById("ex6-2").onclick=function()
		{
			myStopFunction();
			document.getElementById("ex6-2").onclick="";
			document.getElementById("ex6-2").style.animation="moveScale 0.5s forwards";
			setTimeout(function()
			{
				document.getElementById("exp6-1").innerHTML="Height of the vane = "+vaneHeight+"cm";
				document.getElementById("ex6-1").style="position:absolute; left:165px; top:200px; width:31px;";
				document.getElementById("ex6-2").style="position:absolute; left:300px; top:145px; width:70px;";
				document.getElementById("ex6-2").style.transform="rotate(-270deg)";
				blinkArrow(350,300,270,30);
				document.getElementById("ex6-2").onclick=function()
				{
					myStopFunction();
					document.getElementById("ex6-2").onclick="";
					document.getElementById("ex6-2").style.animation="moveScale2 0.6s forwards";
					setTimeout(function()
					{
						document.getElementById("exp6-2").innerHTML="Diameter of the vane = "+vaneDia+"cm";
						setTimeout(function()
						{
							document.getElementById("ex6-2").style.visibility="hidden";
							document.getElementById("nextButton").style.visibility="visible";
						},250);
					},600);
				}
			},500);
		}
	}
	else if(simsubscreennum == 7)
	{
		blinkArrow(82,460,180,30);
		document.getElementById("9-2").onclick=function()
		{
			myStopFunction();
			document.getElementById("9-2").onclick="";
			document.getElementById("9-2").style.visibility="hidden";
			document.getElementById("9-3").style.visibility="visible";
			document.getElementById("9-3").style.animation="moveMetalTube 1s forwards";
			setTimeout(function()
			{
				document.getElementById("9-3").style.visibility="hidden";
				document.getElementById("9-2").style="position:absolute; left: 311px; top: 330px; width: 52.5px; height: 55px;";
				setTimeout(function()
				{
					document.getElementById("nextButton").style.visibility="visible";
				},400);
			},1000);
		}
	}	
	else if(simsubscreennum == 8)
	{
		setTimeout(function()
		{
			blinkArrow(330,125,270,30);
			document.getElementById("10-5").onclick=function()
			{
				myStopFunction();
				document.getElementById("10-5").onclick="";
				document.getElementById("10-6").style.visibility="visible";
				document.getElementById("10-7").style.visibility="visible";
				blinkArrow(650,95,270,30);
				document.getElementById("10-6").onclick=function()
				{
					myStopFunction();
					document.getElementById("10-6").onclick="";
					document.getElementById("10-6").style.visibility="hidden";
					document.getElementById("10-7").style.visibility="hidden";
					document.getElementById("10-8").style.visibility="visible";
					document.getElementById("p10-1").style.visibility="visible";
					document.getElementById("10-8").style.transformOrigin="top left";
					document.getElementById("10-8").style.animation="rotateValve 1s 2 forwards";
					document.getElementById("10-2").style.animation="moveVane 2s forwards";
					setTimeout(function()
					{
						document.getElementById("10-8").style.visibility="hidden";
						document.getElementById("p10-1").style.visibility="hidden";
						document.getElementById("nextButton").style.visibility="visible";
						document.getElementById("10-6").style.visibility="hidden";
						document.getElementById("10-7").style.visibility="hidden";
					},2200);
				}
			}
		},500);
	}
	else if(simsubscreennum == 9)
	{
		numberGenerator();
		p1=arr[0]; p2=arr[1]; p3=arr[2];
		//console.log(p1,p2,p3);
		setTimeout(function()
		{
			document.getElementById("11-7").style.visibility="visible";
			blinkArrow(260,235,320,30);
			document.getElementById("11-7").onclick=function()
			{
				myStopFunction();
				//vane = setInterval(function(){ highlight("11-7"); }, 250);
				document.getElementById("11-7").onclick="";
				document.getElementById("11-5").style.visibility="visible";
				document.getElementById("11-6").style.visibility="visible";
				document.getElementById("11-8").style.visibility="visible";
				document.getElementById("p11-1").style.visibility="visible";
				document.getElementById("p11-2").style.visibility="visible";
				document.getElementById("p11-3").style.visibility="visible";
				initial=Number(dataset[0][p1]);
				if(initial%10 == 0)
				{
					document.getElementById("11-6").style="position:absolute; left: 460px; top: 143px;";
					document.getElementById("p11-1").innerHTML=Number(dataset[0][p1])-10;
					document.getElementById("p11-2").innerHTML=Number(dataset[0][p1]);
					document.getElementById("p11-3").innerHTML=Number(dataset[0][p1])+10;
				}
				else if(initial%5 == 0)
				{
					document.getElementById("11-6").style="position:absolute; left: 487px; top: 143px;";
					document.getElementById("p11-1").innerHTML=Number(dataset[0][p1])-15;
					document.getElementById("p11-2").innerHTML=Number(dataset[0][p1])-5;
					document.getElementById("p11-3").innerHTML=Number(dataset[0][p1])+5;
				}	
				else if(initial%6 == 0)
				{
					document.getElementById("11-6").style="position:absolute; left: 487.5px; top: 143px;";
					document.getElementById("p11-1").innerHTML=Number(dataset[0][p1])-16;
					document.getElementById("p11-2").innerHTML=Number(dataset[0][p1])-6;
					document.getElementById("p11-3").innerHTML=Number(dataset[0][p1])+4;
				}
				setTimeout(function()
				{
					document.getElementById("p11-4").style.visibility="visible";
					document.getElementById("p11-4").innerHTML="Initial angle of twist = "+dataset[0][p1];
					setTimeout(function()
					{
						document.getElementById("nextButton").style.visibility="visible";
					},1000);
				},500);
			}
		},500);
	}
	else if(simsubscreennum == 10)
	{
		document.getElementById("p11-4").style.visibility="hidden";
		document.getElementById("11-5").style.visibility="hidden";
		document.getElementById("11-6").style.visibility="hidden";
		document.getElementById("11-8").style.visibility="hidden";
		document.getElementById("11-7").style.visibility="hidden";
		document.getElementById("p11-1").style.visibility="hidden";
		document.getElementById("p11-2").style.visibility="hidden";
		document.getElementById("p11-3").style.visibility="hidden";
		setTimeout(function()
		{
			blinkArrow(325,175,0,30);
			document.getElementById("12-9").onclick=function()
			{
				myStopFunction();
				document.getElementById("12-9").onclick="";
				document.getElementById("12-91").style.visibility="visible";
				document.getElementById("12-10").style.visibility="visible";
				document.getElementById("12-11").style.visibility="visible";
				
				blinkArrow(595,170,270,30);
				
				var _CURRENT_ANGLE = 0;
				$("#12-11").on('click', function() 
				{
					myStopFunction();
					document.getElementById("12-11parent").style.visibility="visible";
					document.getElementById("12-11child").style.visibility="visible";
					document.getElementById("12-11").style.visibility="hidden";
					_CURRENT_ANGLE += 360;
					$("#12-11parent").css({ transform: 'rotate(' + _CURRENT_ANGLE + 'deg)' });
					var repeatRotation= setInterval(function()
					{
						_CURRENT_ANGLE += 360;
						$("#12-11parent").css({ transform: 'rotate(' + _CURRENT_ANGLE + 'deg)' });
						//console.log(_CURRENT_ANGLE);
						if(_CURRENT_ANGLE == 1440)
						{
							document.getElementById("p12-5").style.visibility="visible";
						}
						if(_CURRENT_ANGLE == 1800)
						{
							clearInterval(repeatRotation);
							setTimeout(function()
							{
								document.getElementById("p12-5").style.visibility="hidden";
								setTimeout(function()
								{
									document.getElementById("12-12").style.visibility="hidden";
									document.getElementById("12-9").style.visibility="hidden";
									document.getElementById("12-7").style.visibility="hidden";
									document.getElementById("12-10").style.visibility="hidden";
									document.getElementById("12-11parent").style.visibility="hidden";
									document.getElementById("12-11child").style.visibility="hidden";
								},500);
								// document.getElementById("nextButton").style.visibility="visible";
								validateFormativeQA(1,0,"420px","380px");
							},3200);
						}
					},3000);
				});
			}
		},500);
	}
	else if(simsubscreennum==11)
	{
		document.getElementById("12-7").style.visibility="hidden";
		// document.getElementById("13-7").style.visibility="visible";
		document.getElementById("13-5").style.visibility="visible";
		document.getElementById("13-6").style.visibility="visible";
		document.getElementById("p13-1").style.visibility="visible";
		document.getElementById("p13-2").style.visibility="visible";
		document.getElementById("p13-3").style.visibility="visible";
		finalAngle=Number(dataset[1][p1]);
		if(finalAngle%10 === 0)
		{
			console.log("10");
			document.getElementById("13-6").style="position:absolute; left: 460px; top: 143px;";
			document.getElementById("13-7").style="position:absolute; left: 430px; top: 143px; height:40px; visibility:hidden;";
			document.getElementById("p13-1").innerHTML=Number(dataset[1][p1])-10;
			document.getElementById("p13-2").innerHTML=Number(dataset[1][p1]);
			document.getElementById("p13-3").innerHTML=Number(dataset[1][p1])+10;
		}
		else if(finalAngle%10 === 9)
		{
			console.log("9");
			document.getElementById("13-6").style="position:absolute;  left: 499px; top: 143px;";
			document.getElementById("13-7").style="position:absolute; left: 465px; top: 143px; height:40px; visibility:hidden;";
			document.getElementById("p13-1").innerHTML=Number(dataset[1][p1])-19;
			document.getElementById("p13-2").innerHTML=Number(dataset[1][p1])-9;
			document.getElementById("p13-3").innerHTML=Number(dataset[1][p1])+1;
		}
		else if(finalAngle%10 === 7)
		{
			console.log("7");
			document.getElementById("13-6").style="position:absolute;  left: 489.5px; top: 143px;";
			document.getElementById("13-7").style="position:absolute; left: 393px; top: 143px; height:40px;visibility:hidden;";
			document.getElementById("p13-1").innerHTML=Number(dataset[1][p1])-17;
			document.getElementById("p13-2").innerHTML=Number(dataset[1][p1])-7;
			document.getElementById("p13-3").innerHTML=Number(dataset[1][p1])+3;
		}
		else if(finalAngle%5 === 0)
		{
			console.log("5");
			document.getElementById("13-6").style="position:absolute; left: 487px; top: 143px;";
			document.getElementById("13-7").style="position:absolute; left: 387px; top: 143px; height:40px; visibility:hidden;";
			document.getElementById("p13-1").innerHTML=Number(dataset[1][p1])-15;
			document.getElementById("p13-2").innerHTML=Number(dataset[1][p1])-5;
			document.getElementById("p13-3").innerHTML=Number(dataset[1][p1])+5;
		}	
		else if(finalAngle%10 === 3)
		{
			console.log("3");
			document.getElementById("13-6").style="position:absolute; left: 473px; top: 143px;";
			document.getElementById("13-7").style="position:absolute; left: 387px; top: 143px; height:40px; visibility:hidden;";
			document.getElementById("p13-1").innerHTML=Number(dataset[1][p1])-13;
			document.getElementById("p13-2").innerHTML=Number(dataset[1][p1])-3;
			document.getElementById("p13-3").innerHTML=Number(dataset[1][p1])+3;
		}
		else if(finalAngle%10 === 2)
		{
			console.log("2");
			document.getElementById("13-6").style="position:absolute; left: 473px; top: 143px;";
			document.getElementById("13-7").style="position:absolute; left: 439.5px; top: 143px; height:40px; visibility:hidden";
			document.getElementById("p13-1").innerHTML=Number(dataset[1][p1])-12;
			document.getElementById("p13-2").innerHTML=Number(dataset[1][p1])-2;
			document.getElementById("p13-3").innerHTML=Number(dataset[1][p1])+2;
		}
		setTimeout(function()
		{
			document.getElementById("p13-4").style.visibility="visible";
			document.getElementById("p13-4").innerHTML="Final angle of twist = "+dataset[1][p1];
			setTimeout(function()
			{
				document.getElementById("p13-5").style.visibility="visible";
				document.getElementById("p13-5").innerHTML="Initial angle of twist = "+dataset[0][p1];
				var angle=Number(dataset[1][p1])-Number(dataset[0][p1]);

				setTimeout(function()
				{
					document.getElementById("p13-6").style.visibility="visible";
					document.getElementById("eq13").style.visibility="visible";
					document.getElementById("in13").style.visibility="visible";
					document.getElementById("check13").style.visibility="visible";
					document.getElementById("p13-6").innerHTML="Angle of twist = Final angle of twist - Initial angle of twist ";
					document.getElementById("check13").onclick=function(){
						if(document.getElementById("in13").value==="" || !document.getElementById("in13").value)
						{
							alert("Enter value for Angle of twist to proceed.");
						}
						else 
						{
							if(document.getElementById("in13").value==angle)
							{
								document.getElementById("mark").style.color="green";
								document.getElementById("mark").innerHTML="&#10004;";
								document.getElementById("check13").style.visibility="hidden";
								setTimeout(function()
								{
									document.getElementById("nextButton").style.visibility="visible";
								},500);
							}
							else
							{
								document.getElementById("mark").style.color="red";
								document.getElementById("mark").innerHTML="&#10008;";
							}
						}
					}
				},500);
			},500);
		},500);
	}
	else if(simsubscreennum == 12)
	{
		document.getElementById("13-7").style.visibility="hidden";
		document.getElementById("13-5").style.visibility="hidden";
		document.getElementById("13-6").style.visibility="hidden";
		document.getElementById("in13").style.visibility="hidden";
		document.getElementById("eq13").style.visibility="hidden";
		document.getElementById("check13").style.visibility="hidden";
		for(i=1;i<=6;i++)
		{
			document.getElementById("p13-"+i).style.visibility="hidden";
		}
		document.getElementById("t11-1").innerHTML=dataset[0][p1];
		document.getElementById("t11-2").innerHTML=dataset[1][p1];
		document.getElementById("t11-3").innerHTML=dataset[1][p1] - dataset[0][p1];
		setTimeout(function()
		{
			validateFormativeQA(2,1,"170px","425px");
			//document.getElementById("nextButton").style.visibility="visible";
		},300);
	}
	else if(simsubscreennum == 13)
	{
		$("#h12-1").fadeIn(1000);
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},2000);
	}
	else if(simsubscreennum == 14)
	{
		create_totalTable(arr);
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},700);
	}
	else if(simsubscreennum == 15)
	{
		var i=0
		
		$("#chartContainer").ejChart(
        {
		    primaryXAxis:
            {
			   	labelFormat: "{value}",
                title: { text: 'Angle of twist (degree)' },
                range: { min:0, max: 30, interval: 10 }
            },	
			primaryYAxis:
            {
				labelFormat: "{value}",
                title: { text: 'Torque (g/m)' },
                range: { min: 0, max: 400, interval: 100 }				
            },	
			series: 
			[
			    {
                points: [
					{ x: 0, y: 0 },
					{ x: 20, y: 300 },
					{ x: 22, y: 335 },
					{ x: 26, y: 400 }
				],
				type: 'line',
				fill: "#0066FF",
				border :{width:5},				
				enableAnimation :false
                },
				{
					points: [
						{ x: 0, y: dataset[2][arr[0]]},
						{ x: (dataset[1][arr[0]] - dataset[0][arr[0]]), y: dataset[2][arr[0]]},
						{ x: (dataset[1][arr[0]] - dataset[0][arr[0]]) , y: 0}
					],
					type: 'line',
					dashArray : '10,4',
					fill: "#FF0000",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
                        shape: 'circle',
						size:
                        {
                            height: 5, width: 5
                        },
                        visible: true
                    },					
					enableAnimation :false
                },
				{
					points: [
						{ x: 0, y: dataset[2][arr[1]]},
						{ x: (dataset[1][arr[1]] - dataset[0][arr[1]]), y: dataset[2][arr[1]]},
						{ x: (dataset[1][arr[1]] - dataset[0][arr[1]]) , y: 0}
					],
					type: 'line',
					dashArray : '10,4',
					fill: "#FF1493",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
                        shape: 'circle',
						size:
                        {
                            height: 5, width: 5
                        },
                        visible: true
                    },					
					enableAnimation :false
                },
				{
					points: [
						{ x: 0, y: dataset[2][arr[2]]},
						{ x: (dataset[1][arr[2]] - dataset[0][arr[2]]), y: dataset[2][arr[2]]},
						{ x: (dataset[1][arr[2]] - dataset[0][arr[2]]) , y: 0}
					],
					type: 'line',
					dashArray : '10,4',
					fill: "#00FF00",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
                        shape: 'circle',
						size:
                        {
                            height: 5, width: 5
                        },
                        visible: true
                    },					
					enableAnimation :false
                }
			],
			//commonSeriesOptions :{ enableSmartLabels : true},
            load:"loadTheme",
			isResponsive: true,

			title:{
				text: 'Angle of twist v/s Torque',
				font: { color: 'black', size: '18px' }
				},
			legend:{visible:false}
        });
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},1500);
	}
	else if(simsubscreennum == 16)
	{
		create_totalTable2(arr);
		document.getElementById("check").onclick=function()
		{
			document.getElementById("check").style.visibility="hidden";
			document.getElementById("result").style.visibility="hidden";
			clearTableRows("totalTable2");
			create_totalTable3(arr);
		}
		document.getElementById("result").onclick=function()
		{
			document.getElementById("check").style.visibility="hidden";
			document.getElementById("result").style.visibility="hidden";
			clearTableRows("totalTable2");
			create_totalTable3(arr);
		}
	}
}

function weightOfContainer(id)
{
	document.getElementById(id+"-1").style.visibility="visible";
	document.getElementById("p"+id+"-1").innerHTML="000.01";
	document.getElementById(id+"-0").style.backgroundColor="lightgrey";
	setTimeout(function()
	{
		blinkArrow(488.5,490,90,30);
		document.getElementById(id+"-1").onclick=function()
		{
			myStopFunction();
			document.getElementById(id+"-1").onclick="";
			document.getElementById(id+"-1").style.visibility="hidden";
			document.getElementById("p"+id+"-1").innerHTML="000.00";
			setTimeout(function()
			{
				blinkArrow(65,435,180,35);
				document.getElementById(id+"-2").onclick=function()
				{
					myStopFunction();
					document.getElementById(id+"-2").onclick="";
					document.getElementById(id+"-2").style.animation="placeEmptyContainer8 1.25s forwards";
					if(id==8)
					{
						document.getElementById(id+"-5").style.animation="placeEmptyContainerWithSoil8 1.25s forwards";
					}
					setTimeout(function()
					{
						//IsInt(dataset[p][1]);
						if(id==6)
						{
							document.getElementById("p"+id+"-1").innerHTML="145.00";
							// document.getElementById("p"+id+"-2").innerHTML="Weight of empty metal tube = "+dataset[p][0]+" g";
							document.getElementById("p"+id+"-2").innerHTML="Weight of empty metal tube = 145 g";
						}
						if(id==8)
						{
							document.getElementById("p"+id+"-1").innerHTML="291.00";
							document.getElementById("p"+id+"-2").innerHTML="Weight of metal tube + wet soil, W<sub>2</sub> = 291 g";
						}
						setTimeout(function()
						{
							if(id==6)
							{
								validateFormativeQA(0,2,"150px","100px");
							}
							else document.getElementById("nextButton").style.visibility="visible";
						},500);
					},1300);	
				}
			},750);
		}
	},500);
}