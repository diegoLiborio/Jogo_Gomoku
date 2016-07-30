
document.write("<table id = 'tabela' class = 'caixa'>");
for (var j = 0; j <15 ; j++) { 
	document.write("<tr>");
	for (var i = 0; i <15 ; i++) {
			var indice = "img"+j+"_"+i;
			var n = j+""+i;
		
		document.write("<td><img name = 'n' src='0.gif' id = "+indice+" class = 'casas' onclick= ola(id)> </td>");
	}
	document.write("</tr>");
}
document.write("</table>");

var cont=1;

function ola(diego) {

	if(cont%2 != 0){
		document.getElementById("xis").style.opacity = 0.2;
		document.getElementById("bola").style.opacity = 1;
		document.getElementById(diego).src="1.gif";
		document.getElementById(diego).name = "ok1";
		document.getElementById(diego).removeAttribute("onclick");
	}else{
		document.getElementById("xis").style.opacity = 1;
		document.getElementById("bola").style.opacity = 0.2;
		document.getElementById(diego).src="2.gif";
		document.getElementById(diego).name = "ok2";
		document.getElementById(diego).removeAttribute("onclick");
	}

	console.log(document.getElementById(diego).name);
	if(cont>8){
		for (var k = 0; k < 15; k++) {
			for (var m = 0; m < 15; m++) {
				var palavra = "img"+k+"_"+m;
				console.log(palavra);
				if(m<11 && document.getElementById(palavra).name == "ok1"){
					var palavra1 = "img"+k+"_"+(m+1);
					console.log(palavra1);
					if(document.getElementById(palavra1).name == "ok1"){
						var palavra2 = "img"+k+"_"+(m+2);
						console.log(palavra2);
						if(document.getElementById(palavra2).name == "ok1"){
							var palavra3 = "img"+k+"_"+(m+3);
							console.log(palavra3);
							if(document.getElementById(palavra3).name == "ok1"){
								var palavra4 = "img"+k+"_"+(m+4);
								console.log(palavra4);
								if(document.getElementById(palavra4).name =="ok1"){
									console.log("chegou");
									window.alert("Vencedor X");
									return;
								}
							}
						}
					}
				}
				if(k<11 && document.getElementById(palavra).name == "ok1"){
					var palavra1 = "img"+(k+1)+"_"+m;
					console.log(palavra1);
					if(document.getElementById(palavra1).name == "ok1"){
						var palavra2 = "img"+(k+2)+"_"+m;
						console.log(palavra2);
						if(document.getElementById(palavra2).name == "ok1"){
							var palavra3 = "img"+(k+3)+"_"+m;
							console.log(palavra3);
							if(document.getElementById(palavra3).name == "ok1"){
								var palavra4 = "img"+(k+4)+"_"+m;
								console.log(palavra4);
								if(document.getElementById(palavra4).name =="ok1"){
									console.log("chegou");
									window.alert("Vencedor X");
									return;
								}
							}
						}
					}
				}
				if(k<11 && m<11 && document.getElementById(palavra).name == "ok1"){
					var palavra1 = "img"+(k+1)+"_"+(m+1);
					console.log(palavra1);
					if(document.getElementById(palavra1).name == "ok1"){
						var palavra2 = "img"+(k+2)+"_"+(m+2);
						console.log(palavra2);
						if(document.getElementById(palavra2).name == "ok1"){
							var palavra3 = "img"+(k+3)+"_"+(m+3);
							console.log(palavra3);
							if(document.getElementById(palavra3).name == "ok1"){
								var palavra4 = "img"+(k+4)+"_"+(m+4);
								console.log(palavra4);
								if(document.getElementById(palavra4).name =="ok1"){
									console.log("chegou");
									window.alert("Vencedor X");
									return;
								}
							}
						}
					}
				}
				if(document.getElementById(palavra).name == "ok1"){
					var palavra1 = "img"+(k+1)+"_"+(m-1);
					console.log(palavra1);
					if(document.getElementById(palavra1).name == "ok1"){
						var palavra2 = "img"+(k+2)+"_"+(m-2);
						console.log(palavra2);
						if(document.getElementById(palavra2).name == "ok1"){
							var palavra3 = "img"+(k+3)+"_"+(m-3);
							console.log(palavra3);
							if(document.getElementById(palavra3).name == "ok1"){
								var palavra4 = "img"+(k+4)+"_"+(m-4);
								console.log(palavra4);
								if(document.getElementById(palavra4).name =="ok1"){
									console.log("chegou");
									window.alert("Vencedor X");
									return;
								}
							}
						}
					}
				}

				if(document.getElementById(palavra).name == "ok2"){
					var palavra1 = "img"+k+"_"+(m+1);
					console.log(palavra1);
					if(document.getElementById(palavra1).name == "ok2"){
						var palavra2 = "img"+k+"_"+(m+2);
						console.log(palavra2);
						if(document.getElementById(palavra2).name == "ok2"){
							var palavra3 = "img"+k+"_"+(m+3);
							console.log(palavra3);
							if(document.getElementById(palavra3).name == "ok2"){
								var palavra4 = "img"+k+"_"+(m+4);
								console.log(palavra4);
								if(document.getElementById(palavra4).name =="ok2"){
									console.log("chegou");
									window.alert("Vencedor O");
									return;
								}
							}
						}
					}
				}
				if(document.getElementById(palavra).name == "ok2"){
					var palavra1 = "img"+(k+1)+"_"+m;
					console.log(palavra1);
					if(document.getElementById(palavra1).name == "ok2"){
						var palavra2 = "img"+(k+2)+"_"+m;
						console.log(palavra2);
						if(document.getElementById(palavra2).name == "ok2"){
							var palavra3 = "img"+(k+3)+"_"+m;
							console.log(palavra3);
							if(document.getElementById(palavra3).name == "ok2"){
								var palavra4 = "img"+(k+4)+"_"+m;
								console.log(palavra4);
								if(document.getElementById(palavra4).name =="ok2"){
									console.log("chegou");
									window.alert("Vencedor O");
									return;
								}
							}
						}
					}
				}
				if(document.getElementById(palavra).name == "ok2"){
					var palavra1 = "img"+(k+1)+"_"+(m+1);
					console.log(palavra1);
					if(document.getElementById(palavra1).name == "ok2"){
						var palavra2 = "img"+(k+2)+"_"+(m+2);
						console.log(palavra2);
						if(document.getElementById(palavra2).name == "ok2"){
							var palavra3 = "img"+(k+3)+"_"+(m+3);
							console.log(palavra3);
							if(document.getElementById(palavra3).name == "ok2"){
								var palavra4 = "img"+(k+4)+"_"+(m+4);
								console.log(palavra4);
								if(document.getElementById(palavra4).name =="ok2"){
									console.log("chegou");
									window.alert("Vencedor O");
									return;
								}
							}
						}
					}
				}
				if(document.getElementById(palavra).name == "ok2"){
					var palavra1 = "img"+(k+1)+"_"+(m-1);
					console.log(palavra1);
					if(document.getElementById(palavra1).name == "ok2"){
						var palavra2 = "img"+(k+2)+"_"+(m-2);
						console.log(palavra2);
						if(document.getElementById(palavra2).name == "ok2"){
							var palavra3 = "img"+(k+3)+"_"+(m-3);
							console.log(palavra3);
							if(document.getElementById(palavra3).name == "ok2"){
								var palavra4 = "img"+(k+4)+"_"+(m-4);
								console.log(palavra4);
								if(document.getElementById(palavra4).name =="ok2"){
									console.log("chegou");
									window.alert("Vencedor O");
									return;
								}
							}
						}
					}
				}

			}  
		}
	}
	cont++;
}
