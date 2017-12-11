

function categorie(table){

	var _id = new Array();
	
	for(var i=1; i<table["results"].length;i++){
		_id.push(table["results"][i]["_id"])
	}
	return _id;

}


function columns(table){
  
    var value = new Array();
    if (!(value.length>0)){
        value.push(table["results"][0]["name"])
    }
    for(var i=1; i<table["results"].length;i++){
      value.push(table["results"][i]["value"])
    }
    return value;
  
  }

function constructGraph(table){ var chart= c3.generate({
    bindto: '#chart',
    data: {
      columns: [
        columns(table)
      ],
     
      types: {
        data2: 'bar' // ADD
      }
    },
    axis: {
        x: {
            type: 'category',
            categories: categorie(table)
        }
    
    }
});};

function constructGraphForSmoke(table2,table){
  var table3=columns(table);
  var table4=columns(table2);
  var table5=categorie(table);

  var chart = c3.generate({
    data: {
        columns: [
            table3,table4
          ],
        axes: {
            data2: 'y2'
        }
    },
    axis: {
        y2: {
            show: true,
            tick: {
              
                format: function (d) { return d+"%"; }
          }
          
            
        },
        x: {
          type: 'category',
          categories: categorie(table)
      }
    }
});
};