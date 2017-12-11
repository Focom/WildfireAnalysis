var scaleColor = chroma.scale('OrRd')

function countTotal(table){
	total = 0;
	
	for(var i=0; i<table["results"].length;i++){
		console.log(table["results"][i]["value"])
		total+=table["results"][i]["value"]
	}
	console.log(total);
	return total;

}

function probPerState(table){
	total = countTotal(table);
	for(var i=0; i<table["results"].length;i++){
		table["results"][i]["value"]=	(table["results"][i]["value"]/total)*10;
	}
	console.log(table["results"]);
	return table;

}

//1+((Math.log(0.01+table["results"][i]["value"]/total))/6)
function myfunction(table){
	

for (i = 0; i < table["results"].length; i++) {
	var color = '#' + Math.floor(Math.random() * 16777215).toString(16)
	
	ca = document.querySelector('#' + table["results"][i]["_id"])	
	console.log(table["results"][i]["_id"])
	ca.style.fill = scaleColor(table["results"][i]["value"]);
}
}

