/*
* Modificación del prototype de la clase Date() para
* que devuelva la fecha como String formada por:
*    " Día  Mes Año"  
*/

console.log("BEFORE Date() protototype", Date.prototype);

//Create array with names of the Months
Date.prototype.MONTHNAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"] ;
//Create array with names for every day of the week
Date.prototype.DAYSOTW = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];


Date.prototype.getVerboseDate = function (includeDayName = false){
	let dayName = "" ;
	if(includeDayName){includeDayName+= this.DAYSOTW[this.getDay()];}
		
	return dayName+ `${this.getDate()} ${this.MONTHNAMES[this.getMonth()]} ${this.getFullYear()}` ; 
	
} ;

console.log("AFTER Date() protototype", Date.prototype);










var hardcodedJSON = '{ "nombre" : "Alejandro", "apellido": "Rey"}';
var logsOn = true;
var procEventColor = "background: #c40076; color:white;" ;

var backProcEventColor = "background:#7c00c4;color:white;";
var factsUJEventColor = "background:#003bc4;color:white;";
var white = "background:#FFFFFF;color:#000000;";
var svgNamespaceURI ="http://www.w3.org/2000/svg" ;


hardcodedJSON = "[ \
  {    \
    \"ATTRIBUTES\": [    \
      {   \
        \"TEXT\": \"REFERENCE for a preliminary ruling\",  \
        \"END\": 5005,  \
        \"BEGIN\": 4962, \
        \"INFO\": \"what\" \
      } \
    ], \
    \"CLASIFICATION\": \"event\", \
    \"RELEVANCE\": 1, \
    \"TEXT\": \"REFERENCE for a preliminary ruling\", \
    \"END\": 5005, \
    \"ID\": \"event 1\", \
    \"BEGIN\": 4962, \
    \"INFO\": \"what\", \
    \"TYPE\": \"procedural\" \
  }, \
  { \
    \"ATTRIBUTES\": [ \
      { \
        \"TEXT\": \"disagreement as to the scope of th\", \
        \"END\": 24224, \
        \"BEGIN\": 23937, \
        \"INFO\": \"what \" \
      } \
    ], \
    \"CLASIFICATION\": \"event\", \
    \"RELEVANCE\": 1, \
    \"TEXT\": \"disagreement as to the scope of th\", \
    \"END\": 24224, \
    \"ID\": \"event 2\", \
    \"BEGIN\": 23937, \
    \"INFO\": \"what \", \
    \"TYPE\": \"facts under judgment\" \
  }, \
  { \
    \"ATTRIBUTES\": [ \
      { \
        \"TEXT\": \"the latter companies (GoYellow and\", \
        \"END\": 24348, \
        \"BEGIN\": 24226, \
        \"INFO\": \"what \" \
      }, \
      { \
        \"TEXT\": \"GoYellow and Telix\", \
        \"END\": 24224, \
        \"BEGIN\": 24206, \
        \"INFO\": \"whom\" \
      }, \
      { \
        \"TEXT\": \"Deutsche Telekom\", \
        \"END\": 24167, \
        \"BEGIN\": 24151, \
        \"INFO\": \"against whom\" \
      }, \
      { \
        \"TEXT\": \"before the Bundesnetzagentur \", \
        \"END\": 24295, \
        \"BEGIN\": 24278, \
        \"INFO\": \"before which court\" \
      } \
    ], \
    \"CLASIFICATION\": \"event\", \
    \"RELEVANCE\": 1, \
    \"TEXT\": \"the latter companies (GoYellow and\", \
    \"END\": 24348, \
    \"ID\": \"event 3\", \
    \"BEGIN\": 24226, \
    \"INFO\": \"what \", \
    \"TYPE\": \"background procedural\" \
  }, \
  { \
    \"ATTRIBUTES\": [ \
      { \
        \"TEXT\": \"By decision of 11 September 2006, \", \
        \"END\": 24882, \
        \"BEGIN\": 24446, \
        \"INFO\": \"what \" \
      }, \
      { \
        \"TEXT\": \" 11 September 2006\", \
        \"END\": 24483, \
        \"BEGIN\": 24461, \
        \"INFO\": \"when\" \
      }, \
      { \
        \"TEXT\": \"Deutsche Telekom\", \
        \"END\": 24532, \
        \"BEGIN\": 24516, \
        \"INFO\": \"against whom\" \
      } \
    ], \
    \"CLASIFICATION\": \"event\", \
    \"RELEVANCE\": 1, \
    \"TEXT\": \"By decision of 11 September 2006, \", \
    \"END\": 24882, \
    \"ID\": \"event 4\", \
    \"BEGIN\": 24446, \
    \"INFO\": \"what \", \
    \"TYPE\": \"background procedural\" \
  }, \
  { \
    \"ATTRIBUTES\": [ \
      { \
        \"TEXT\": \"Deutsche Telekom brought an action\", \
        \"END\": 25130, \
        \"BEGIN\": 24980, \
        \"INFO\": \"what \" \
      }, \
      { \
        \"TEXT\": \"Deutsche Telekom\", \
        \"END\": 24996, \
        \"BEGIN\": 24980, \
        \"INFO\": \"whom\" \
      }, \
      { \
        \"TEXT\": \"Verwaltungsgericht Köln (Administr\", \
        \"END\": 25083, \
        \"BEGIN\": 25027, \
        \"INFO\": \"before which court\" \
      } \
    ], \
    \"CLASIFICATION\": \"event\", \
    \"RELEVANCE\": 1, \
    \"TEXT\": \"Deutsche Telekom brought an action\", \
    \"END\": 25130, \
    \"ID\": \"event 5\", \
    \"BEGIN\": 24980, \
    \"INFO\": \"what \", \
    \"TYPE\": \"background procedural\" \
  }, \
  { \
    \"ATTRIBUTES\": [ \
      { \
        \"TEXT\": \"By judgment of 14 February 2008, t\", \
        \"END\": 25311, \
        \"BEGIN\": 25228, \
        \"INFO\": \"what \" \
      }, \
      { \
        \"TEXT\": \"14 February 2008\", \
        \"END\": 25259, \
        \"BEGIN\": 25243, \
        \"INFO\": \"when\" \
      }, \
      { \
        \"TEXT\": \"the Verwaltungsgericht Köln\", \
        \"END\": 25290, \
        \"BEGIN\": 25262, \
        \"INFO\": \"whom\" \
      }, \
      { \
        \"TEXT\": \"Deutsche Telekom\", \
        \"END\": 24996, \
        \"BEGIN\": 24980, \
        \"INFO\": \"against whom\" \
      } \
    ], \
    \"CLASIFICATION\": \"event\", \
    \"RELEVANCE\": 1, \
    \"TEXT\": \"By judgment of 14 February 2008, t\", \
    \"END\": 25311, \
    \"ID\": \"event 6\", \
    \"BEGIN\": 25228, \
    \"INFO\": \"what \", \
    \"TYPE\": \"background procedural\" \
  }, \
  { \
    \"ATTRIBUTES\": [ \
      { \
        \"TEXT\": \"Deutsche Telekom then\\nappealed on \", \
        \"END\": 25425, \
        \"BEGIN\": 25313, \
        \"INFO\": \"what \" \
      }, \
      { \
        \"TEXT\": \"Deutsche Telekom \", \
        \"END\": 25329, \
        \"BEGIN\": 25313, \
        \"INFO\": \"whom\" \
      }, \
      { \
        \"TEXT\": \"Bundesverwaltungsgericht (Federal \", \
        \"END\": 25425, \
        \"BEGIN\": 25370, \
        \"INFO\": \"before which court\" \
      } \
    ], \
    \"CLASIFICATION\": \"event\", \
    \"RELEVANCE\": 1, \
    \"TEXT\": \"Deutsche Telekom then\\nappealed on \", \
    \"END\": 25425, \
    \"ID\": \"event 7\", \
    \"BEGIN\": 25313, \
    \"INFO\": \"what \", \
    \"TYPE\": \"background procedural\" \
  }, \
  { \
    \"ATTRIBUTES\": [ \
      { \
        \"TEXT\": \"the Bundesverwaltungsgericht decid\", \
        \"END\": 28274, \
        \"BEGIN\": 28138, \
        \"INFO\": \"what \" \
      }, \
      { \
        \"TEXT\": \"the Bundesverwaltungsgerich\", \
        \"END\": 28166, \
        \"BEGIN\": 28138, \
        \"INFO\": \"whom\" \
      }, \
      { \
        \"TEXT\": \" to the Court\", \
        \"END\": 28249, \
        \"BEGIN\": 28240, \
        \"INFO\": \"before which court\" \
      } \
    ], \
    \"CLASIFICATION\": \"event\", \
    \"RELEVANCE\": 1, \
    \"TEXT\": \"the Bundesverwaltungsgericht decid\", \
    \"END\": 28274, \
    \"ID\": \"event 8\", \
    \"BEGIN\": 28138, \
    \"INFO\": \"what \", \
    \"TYPE\": \"background procedural\" \
  }, \
  { \
    \"ATTRIBUTES\": [ \
      { \
        \"TEXT\": \"As the Advocate General observed i\", \
        \"END\": 48773, \
        \"BEGIN\": 48399, \
        \"INFO\": \"what \" \
      } \
    ], \
    \"CLASIFICATION\": \"event\", \
    \"RELEVANCE\": 1, \
    \"TEXT\": \"As the Advocate General observed i\", \
    \"END\": 48773, \
    \"ID\": \"event 9\", \
    \"BEGIN\": 48399, \
    \"INFO\": \"what \", \
    \"TYPE\": \"procedural\" \
  }, \
  { \
    \"CLASIFICATION\": \"event\", \
    \"TEXT\": \"On those grounds, the Court (Third\", \
    \"END\": 54429, \
    \"ID\": \"event 10\", \
    \"BEGIN\": 54373, \
    \"INFO\": \"what  (final ruling)\", \
    \"TYPE\": \"procedural\" \
  } \
]"; 

//ICONS to be used in timeline:
const iconProcedural = new Image(); 
iconProcedural.src = "img/Procedural.png";

const iconBackProcedural = new Image();
iconBackProcedural.src="img/BackgroundProcedural.png";

const factsUnderJudg = new Image();
factsUnderJudg.src="img/FactsUnderJudgement.png";



//Nos dan un array de eventos
class Levent  {
		constructor(attributes, classification, relevance, text, end, id, begin, type){
			this.attributes = attributes;
			this.classification = classification;//Esto es innecesario de momento no? Sería para hacer referencia a EVENT, METADATA etc.
			this.relevance= relevance; //num Entero que indica relevancia (the bigger the more important?) 1 (most important!)
			this.text = text; //String que contiene todo el texto que contiene el resaltado
			this.end = end; // Número de word count.
			this.id = id;//Nombre identificativo --> String?
			this.begin= begin; // word count? IDK
			//info, // representa el conjunto de preguntas que se haría el usuario respecto a qué relación tiene este evento con el texto resaltado en general --> [IGNORE]
			this.type= type; // Entiendo que aquí viene Procedural, Background Procedural y Facts under judgement
		}
		
	}

var imageNodes = [];
//console.log(iconBackProcedural);

imageNodes[0] = iconBackProcedural;
//document.getElementById("imageDisplayer").appendChild(iconBackProcedural);
imageNodes[1] = iconProcedural;
//document.getElementById("imageDisplayer").appendChild(iconProcedural);
imageNodes[2] = factsUnderJudg;
//document.getElementById("imageDisplayer").appendChild(factsUnderJudg);

//console.log("%c imageNodes array: ","#ff6600",imageNodes);


//document.getElementsByTagName("body")[0].style.backgroundColor='#ffff66';

//console.log("Beginning of the project");

//console.log("%c This is a number %d;'\n' this is a string  %s;\n this is a float (two decimal digits) %.2f",'color:blue', 15, "Freak", 0.77);


//console.table(data); recibe un array o un object
//console.table(["Hello","Goodbye","Welcome"]);

//console.table({name:"Manolo",surname:"el del Bombo"});


//Search within the HTML document to get a canvas instance  
/*var canvas = document.querySelector('canvas');
console.log(canvas);
//Access the width and change it by script
canvas.width = window.innerWidth;
canvas.height = window.innerHeight/2;
//Context is an object allowing "paint" onto the canvas
var context = canvas.getContext("2d");

	
	//Drawing filled rectangles, those with color
	context.fillStyle = 'red';
	context.fillRect(0,0,10,10);
	context.fillStyle = 'blue';
	context.fillRect((window.innerWidth-100),0,100,100);
	context.fillStyle = 'green';
	context.fillRect((window.innerWidth/2),0,20,20);

	//Draw rectangular strokes only
	context.strokeStyle = 'black';
	context.strokeRect(10,10,10,10);
	context.strokeStyle = 'brown';
	context.strokeRect((window.innerWidth-20),10,10,10);

	//context.clearRect(0,0,window.innerWidth, window.innerHeight);

	//1. Crear un camino (path)
	context.beginPath();
	//2. Especificar coordenadas donde comenzará dicho camino
	context.moveTo((window.innerWidth/2),30);
	//3. Crear forma:
		context.lineTo((window.innerWidth/2)+6,50);
		context.lineTo((window.innerWidth/2)-6,50);
	//4. Cerrar camino
		context.closePath();

	//5.Dibujar camino
		context.stroke();


//1. Crear un camino (path)
	context.beginPath();
	//2. Especificar coordenadas donde comenzará dicho camino
	//context.moveTo((window.innerWidth/2),60);
	context.arc((window.innerWidth/2),60,5,0, 2*Math.PI );
	//5.Dibujar camino
		context.stroke();

//Clear everything in the canvas
context.clearRect(0,0,window.innerWidth,window.innerHeight);


//Drawing images:

//1.Draw image just as it is, given x,y coordinates of top left corner
//context.drawImage(iconProcedural,(window.innerWidth/2),0);
//2.Draw image given coordinates and width, height pair
//context.drawImage(factsUnderJudg,0,0,30,30);
//3.Draw images cropping part of them.
context.drawImage(iconBackProcedural,40,40,0,0)


console.log(iconBackProcedural);
console.log(context);

*/


/* Function to run when the page is completely loaded*/
function onPageLoad(){
	
	console.log("%c[X]%c Page Loaded already!","background: #078f07; color: #bada55 ", "background: #006fb0 ; color: #FFFFFF ");
	let domSvgcontainerDiv = document.getElementById("svg");
	let svgElem = domSvgcontainerDiv.getElementsByTagNameNS(svgNamespaceURI,"svg")[0];
	
	console.log("About to add event listener to svgElem", svgElem);
	
	//1. Create timeline when we press the Time button ON CLICK CALLBACK
	document.getElementById("btntimex").addEventListener("click", 
		function(){
			//1.Toggle timeline (show or hide depending on current state)
			domSvgcontainerDiv.classList.toggle("hide");
			//2. Process input events:
				//2.1. Convert to JS object 
			let eventArray = JSON.parse(hardcodedJSON); //Array of events 
				//2.2. Classify them according to temporal labeling:
				//		For each event, I go through the attributes and search for a "when" one
				//		then I convert the temporal info to date, in order to ease chronological ordering
			console.log(eventArray);
			for(event in eventArray){ 
				if(logsOn){console.log(`Evento ${event} del Array siendo procesado`);}
				for(attr in eventArray[event]["ATTRIBUTES"]){
					if(logsOn){console.log(`Atributo ${attr}: \"${eventArray[event]["ATTRIBUTES"][attr].INFO}\"  del evento ${event} siendo procesado --> ${eventArray[event]["ATTRIBUTES"][attr].INFO === "when"}`);}
					if(eventArray[event]["ATTRIBUTES"][attr].INFO === "when"){
						eventArray[event].timeStamp = new Date(eventArray[event]["ATTRIBUTES"][attr].TEXT);
						if(logsOn){console.log(`new Date() involving ${event}; value:${eventArray[event].timeStamp}`);};
					}
				}
				//if(logsOn){console.table(eventArray[event]);}
			}
				//2.3. Order events chronologically
			eventArray.sort(function(a,b){
				
				if(a.timeStamp === undefined && b.timeStamp == undefined){
					return 0;
				}
				else if(a.timeStamp === undefined){
					return 1; // a goes after b
				}
				else if(b.timeStamp === undefined){
					return -1; //b is kept after a
				}
				
				return (a.timeStamp.getTime() - b.timeStamp.getTime());
			});
			if(logsOn){ 
					console.log("SORTED EVENTS TABLE:");
					console.table(eventArray,["TEXT","TYPE","timeStamp"]);
				}
				//2.4. Determine location for events (compute center)
				// - Obtain the dimensions of the svg canvas
			let svgDim = computeHTMLElemDimensions(svgElem);
				// - Set margin for events not to appear too close to the 
			let  totalTimedEvents = 0;
				for(let iEv= 0; iEv < eventArray.length; iEv++){
					if(eventArray[iEv].timeStamp != undefined){
						totalTimedEvents += 1;
						
					}
				}
		
		let margin = (totalTimedEvents%3)* 20/100 * svgDim.width; // [REVISIT]
		let eventTimelineConstantSeparation = (svgDim.width -2*margin)/(totalTimedEvents-1);
		
		//Create the group node
			for(let iEv= 0; iEv < eventArray.length; iEv++){
					if(eventArray[iEv].timeStamp != undefined){
						console.log(`lEvent passed:`,eventArray[iEv]) ;
						createEventNodeGroup(svgElem,"event"+iEv,/*cx*/margin+iEv*eventTimelineConstantSeparation,/*cy*/svgDim.height/2,eventArray[iEv]);
						
					}
				}
			
		
		
		
			
		
			function createEventNodeGroup(oSVG,_id,_cx,_cy,lEvent,radius = 10){ //HERE
		
				let svgDim = computeHTMLElemDimensions(oSVG);
				
				//Creamos dos nuevos atributos que contienen dónde se encuentra el centro del nodo que representa al evento (cnx,cny)
				lEvent.cnx = _cx;
				lEvent.cny = _cy;
				//Creamos propiedades para evento de cada tipo
				lEvent.eventTypes = ["procedural","background procedural","facts under judgement"];
				lEvent.pathEventImages = ["img/Procedural.png","img/BackgroundProcedural.png","img/FactsUnderJudgement.png"];
				/* 
				* [ getMainNodeStylingClass ]
				* Function that returns the CSS class corresponding to different types of nodes, so that we can colour them
				* depending on the type.
				* @return String with the name of a matching CSS class
				*/
				lEvent.getMainNodeStylingClass = function(){ 
					switch (this.TYPE.toUpperCase()){
						case this.eventTypes[0].toUpperCase():
								//Procedural
								return "circleProcedural" ;
								break;
						case this.eventTypes[1].toUpperCase():
								//Background procedural
								return "circleBackProcedural" ;
								break;
						case this.eventTypes[2].toUpperCase():
								return "circleUnderJudg" ;
								break;
					}
				}
								/* 
				* [ getAssociatedEventImgPath ]
				* Function that filters the type of the event and extracts the path containing the icon for an event type
				* @return String with the name of a matching icon path
				*/
				lEvent.getAssociatedEventImgPath = function(){ 
					switch (this.TYPE.toUpperCase()){
						case this.eventTypes[0].toUpperCase():
								//Procedural
								return this.pathEventImages[0] ;
								break;
						case this.eventTypes[1].toUpperCase():
								//Background procedural
								return this.pathEventImages[1] ;
								break;
						case this.eventTypes[2].toUpperCase():
								return this.pathEventImages[2] ;
								break;
					}
				}
				
				
				
				/* MAIN NODE */
				//Creamos un grupo svg para contener too lo relacionado a un evento
				let newG = createSVGTag("g", {id:_id});
				/* Creamos un title que muestre la fecha exacta al hacer mouseover */
				let newTitle = createSVGTag("title");
				newTitle.textContent = lEvent.timeStamp.getVerboseDate();
				
				/* Creamos un círculo svg con que representará un evento y que tendrá un color concreto dependiendo del tipo de evento que estemos evaluando : Procedural, Background procedural o Facts under judgement */
				let eventCircle = createSVGTag("circle", {cx:_cx,cy:_cy,r:radius,fill:"red",class:lEvent.getMainNodeStylingClass()});
				newG.appendChild(newTitle);
				
				
				/* MARKER */
				let _markerNewG = createSVGTag("g", {id:`${lEvent.timeStamp.getTime()}` }); //Crea un grupo que va a contener los markers que corresponden a cada evento, mostrando el tipo de evento que es.
				
				let heightOfMarkers = (svgDim.height/2)/2 ;
				let radiusMarker = 3*radius;
				//Coordinates of Marker
				lEvent.cMx = lEvent.cnx;
				lEvent.cMy = lEvent.cny-heightOfMarkers;
				
				
				let _markerInnerCircle = createSVGTag("circle", {cx:lEvent.cMx ,cy:lEvent.cMy,r:radiusMarker ,class:"innerMarkerCircle"});
				
				let _markerOuterCircle= createSVGTag("circle", {cx:lEvent.cMx ,cy:lEvent.cMy,r:radiusMarker+10,class:lEvent.getMainNodeStylingClass()});
				
				let fitCircleCoords = { fcx:lEvent.cMx-(Math.sqrt(Math.pow(radiusMarker,2)/2)),
									  	fcy: lEvent.cMy-(Math.sqrt(Math.pow(radiusMarker,2)/2)),
									   	l:  (Math.sqrt(Math.pow(radiusMarker,2)/2)) *2
									  }
				
				let _markerIcon = createSVGTag("image", {x:fitCircleCoords.fcx, y:fitCircleCoords.fcy, height:fitCircleCoords.l, width:fitCircleCoords.l ,href:`${lEvent.getAssociatedEventImgPath()}`});
				
				//POINTER
				let pathConnect = createSVGTag("path", {d:`M ${lEvent.cnx-radiusMarker}, ${lEvent.cny} L ${lEvent.cnx} `})
		
				
				//Anchor element que ha de conducir al evento dento del texto como tal [REVISIT]
				let anchorElem = createSVGTag("a",{href:"#footer"});
			
				
				

				
				
				
				anchorElem.appendChild(_markerOuterCircle);
				anchorElem.appendChild(_markerInnerCircle);
				anchorElem.appendChild(_markerIcon);
				_markerNewG.appendChild(anchorElem);
				
				newG.appendChild(eventCircle);
				newG.appendChild(_markerNewG);
				
				
				
				oSVG.appendChild(newG);
			}
		
		
		
			
		
			//3.Draw everything on the svg element
			//drawTimeline(null,svgElem);
	});

	
	
	svgElem.addEventListener("click",  function(){ resize(svgElem)}); 
}



function drawTimeline(eventList,svgElem){
	
	
	//Get dimensions of element
	let svgDimObj = computeHTMLElemDimensions(svgElem);
	if(logsOn) console.log(`<svg> dimensions : W:${svgDimObj.width} x H:${svgDimObj.height}`); //print dimensions of the <svg> elem
	//Draw middle line
	let centreLine = createCenterHlineSVG(0,0,svgDimObj.width,svgDimObj.height,svgElem,"myTempLine");
	//Draw auxiliar line if tere are non-temporal events
	let nonTempLine = createCenterHlineSVG((2/3)*svgDimObj.width,(2/3)*svgDimObj.height,svgDimObj.width,svgDimObj.height,svgElem,"myNon-TempLine");
	
	
	
	//Draw legend at the top
	//1.Create a group to contain all info
	let legendGroup = document.createElementNS(svgNamespaceURI,"g");
	//2.Create rectangle
	legendGroup.setAttributeNS(null,"id","legendGroup")
	let legendRect = document.createElementNS(svgNamespaceURI,"rect");
	legendRect.setAttributeNS(null,"id","legendRect");
	legendRect.setAttributeNS(null,"height", Math.round(1/16*svgDimObj.height) );
	legendRect.setAttributeNS(null,"width",svgDimObj.width );
	legendRect.setAttributeNS(null,"class", "legendRect" );
	//Create text at beggining and end
	//Beggining
	let textOldestNode = document.createElementNS(svgNamespaceURI,"text");
	textOldestNode.setAttributeNS(null,"id","oldestText");
	textOldestNode.setAttributeNS(null,"x",0);
	textOldestNode.setAttributeNS(null,"y",Math.round(1/16*svgDimObj.height));	
	//textOldestNode.setAttributeNS(null,"dx",1/4*svgDimObj.width);
	//textOldestNode.setAttributeNS(null,"dy",Math.round(1/16*svgDimObj.height));
	textOldestNode.setAttributeNS(null,"text-anchor","start");
	textOldestNode.setAttributeNS(null,"class","textLegend");
	textOldestNode.textContent = "FECHA OLD";
	//End
	let textNewestNode = textOldestNode.cloneNode();//{};
  	//Object.assign(textNewestNode, textOldestNode);
	//textNewestNode = JSON.parse(JSON.stringify(textOldestNode));
	textNewestNode.setAttributeNS(null,"text-anchor","end");
	textNewestNode.setAttributeNS(null,"id","newestText");
	textNewestNode.setAttributeNS(null,"x",svgDimObj.width);
	textNewestNode.setAttributeNS(null,"y",Math.round(1/16*svgDimObj.height));
	//textNewestNode.setAttributeNS(null,"dx",1/4*svgDimObj.width);
	//textNewestNode.setAttributeNS(null,"dy",Math.round(1/16*svgDimObj.height));
	textNewestNode.textContent = "FECHA NEW";
	//Append everything
	legendGroup.appendChild(legendRect);
	legendGroup.appendChild(textOldestNode);
	legendGroup.appendChild(textNewestNode);
	svgElem.prepend(legendGroup);
	
	
	
	//Draw events
	
	
	
	
}


function createCenterHlineSVG(minX=0,minY=0,maxX,maxY,appendTo,id ="temporalLine",namespace="http://www.w3.org/2000/svg"){
	
	//Create a <path> node
	var lineNode = document.createElementNS(namespace,"path");
	//Set attributes to make the line show in the middle of the provided 
	lineNode.setAttributeNS(null,"id",id); //Give it an id to ease later modification
	
	lineNode.setAttributeNS(null,"d", "M "+Math.round(minX)+"  "+ Math.round(((maxY-minY)/2)+minY) + " h " + Math.round(maxX-minX));
	lineNode.classList.add("centerLineColor");
	lineNode.setAttributeNS(null,"stroke-width", "10");
	lineNode.setAttributeNS(null,"stroke","#000000");
	return appendTo.appendChild(lineNode);
	
	
	
}




function zoom(svgNode,x,y,width,height){
	
	svgNode.setAttribute("viewBox",`${x} ${y} ${width} ${height}`);
	
	
}






/* ON CLICK  ON THE SVG  @coredamnwork */
function resize(elemToResize){
	
	let svgDim = computeHTMLElemDimensions(elemToResize);
	//1.Creamos línea central sobre la que se apoyarán todos los círculos representando eventos.
	//createCenterLine(0, 0, svgDim.width,svgDim.height,elemToResize, svgNamespaceURI);
	
	createEventNodeGroup(elemToResize);
	zoom(elemToResize,100-30,100-30,svgDim.width/3,svgDim.height/3);
	
	
	
	
	
	
	
	//Extraemos los eventos del array de eventos proporcionado como string; para cada evento, creamos un círculo en la línea temporal
	var eventArray = JSON.parse(hardcodedJSON);
	
	//Pasa por todos los eventos y los genera (pendiente)
	//eventArray.forEach(generateEventCircles)
	
	
	var date = new Date('11 september 2005');
	var date2 = new Date('14 february 2008');
	
	var date3 = new Date('14 february 2019');
	var date4 = new Date('26 may 1996');
	
	var arrayDates = [date,date2,date3,date4];
	//Ordenamos las fechas
	var orderedDates = arrayDates.sort(function(a,b){return (a.getTime() - b.getTime());})
	
	//orderedDates y arrayDates deberían ser iguales.
	
	var objectCustomInline = { 
		nombre : "Alejandro",
		apellido : "Rey"
		};
	
	console.log("objectCustomInline: ", objectCustomInline);
	objectCustomInline["atributo inventado"] = "puta mierda";
	objectCustomInline.newAttr = "caca de vacuno";
	console.log("objectCustomInline POST : ", objectCustomInline);
	
	
	console.table("arrayDates" +arrayDates);
	console.table("orderedDates: " +orderedDates);
	
	
	console.log("date is older than date2: "+((date.getFullYear()-date2.getFullYear())>=0 ? "false" :"true")  );
	
	
	function generateEventCircles (item, index, array){
		//Categorise event
		if(item.TYPE.toUpperCase() === "procedural".toUpperCase()){
			console.log("%c <Procedural event>  %c found at " + index, procEventColor, white);
		}
		else if(item.TYPE.toUpperCase() === "background procedural".toUpperCase()){
			console.log("%c <Background procedural> event found at " + index, backProcEventColor, white);
		}
		else if(item.TYPE.toUpperCase() === "facts under judgement".toUpperCase()){
			console.log("%c <Facts under judgement> event found at "+ index,factsUJEventColor ,white);
		}
		else{
			console.log("Nothing found at " + index);
		}
	}

	
	
	var circleNode = document.createElement("circle");
	printProgressInfo("CircleNode being generated after new viewBox", circleNode)
	circleNode.setAttribute("cx","0");
	circleNode.setAttribute("cy","0");
	circleNode.setAttribute("r","30");
	circleNode.classList.add("circleBackProcedural");
	
	elemToResize.appendChild(circleNode);
	
	
	
}








function printProgressInfo(message, optObj ){
	
	var endMsg = "%c [!] %c --> "+ message;
	
	if(optObj == undefined){
		console.log(endMsg, "background:#c27b00; color:#FFFFFF","color:#c27b00" );
	}
	else{
		console.log(endMsg + "Related Object:", "background:#c27b00; color:#FFFFFF","color:#c27b00", optObj );
	}
	
}




function jsBasics(){
	
	//FUNCTIONS HOW TO
		// 3 WAYS TO DEFINE FUNCTIONS:
		//Function expression (Not hoisted)
		var functionVar = function(x){
			return x*x;
		};
		//Named function; Function declaration (hoisted) Doesn't require a semicolon after the declaration
		function squareFunct(x){
			return x*x;
		}
		//Arrow expression function (Not hoisted) There are two variants:
		var functionVar2 = (x)=> { return x*x; } // x es el parámetro usado y el código entre {} es el cuerpo de la funcion
		var functionVar2v2 = x => x*x;  // En este caso si solo tenemos un parámetro y un solo statement para hacer return, podemos escribir el parámetro sin paréntesis y el cuerpo de la función como una expresión fuera de llaves
		var functNoParams = ()  => "Fuck I just do this!";
	
		console.log("functionVar Result: ",functionVar(12)); //Result function expression
		console.log("squareFunct Result: ", squareFunct(12)); //Result named function
		console.log("functionVar2 Result: ",functionVar2(12)); //Result arrow function expression
		console.log("functionVar2v2 Result: ",functionVar2v2(12)); //Result arrow function expression shortest way
		console.log("functNoParams says:" +functNoParams());
		//SPECIAL USES OF FUNCTIONS; FUNCTIONS AS PARAMETERS
		//Callback function
		var printCallback = (result) =>{ alert("Callback function executed; result:"+result) ; return result;};

		//Higher level function
		function higherLevelFunctPow (base, power, callback){

			if(power===0){
				return printCallback(1) ;
			}
			else if(power === 1){
				return printCallback(base);
			}
			var i= 0 ;
			var result = base ;
			while(i < power){
				result *= base;
				i++;
			}
			return printCallback(result);

		}
	
		higherLevelFunctPow(1,4, printCallback);
		higherLevelFunctPow(2,4, printCallback);
	
	
		//SCOPES (ALCANCES)
	
		//This function should create a vector of n elements generated randomly, which should be in the range [min,max]
		var printSthAndCreateVectorNRandom = (msg, min, max, n) => { 
				let i; //Local variable within this block (the function)
				for( i= 0; i<n ; i++){
					var vect = [] ;
					max = Math.floor(max);
					min = Math.ceil(min);
					let randInRange = Math.random() * (max-min +1) + min;
					vect.push(randInRange);
				}
				console.log("%c MSG: "+ msg, procEventColor, vect);
				
			return vect;
		};
		
		if( printSthAndCreateVectorNRandom("MESSAGE",0,0,10) != undefined ){
			console.log("var was accessible outside the for block!");
		}
	
	
	
	function findSolution2Path( targetNumber){
		
			function find (startAt,opHistory){
				if(startAt===targetNumber){
					return opHistory;
				}
				else if(startAt>targetNumber){
					return null;
				}
				else{
					return find(startAt+5, '(${opHistory}+5)') || find(startAt*3, '(${opHistory}*3)');
				}
			}

		find(1,"1");
		
	}
	
	
	console.log(findSolution2Path(13));	
	
	
	
	
	
}



/*NAMED FUNCTIONS*/


/*
* [ computeHTMLElemDimensions(domElem)
* Computes the height and with of a given DOM node passed as argument;
* If it is not able to do so, returns the dimensions of the whole window.
* @params: 
* domElem: HTML/SVG node whose height and width we aim to know
* @returns dimensions: an object with two properties, height and width
*/
function computeHTMLElemDimensions(domElem) {
	let dimensions = {};
	
	//Obtain the width of the element in the browser
	if(domElem.offsetWidth!==undefined){
		dimensions.width= domElem.offsetWidth;
	}
	else if (domElem.clientWidth!==undefined) {
		dimensions.width= domElem.clientWidth;
	}
	else{
		dimensions.width = window.innerWidth;
	}
	
	if(domElem.clientHeight  !== undefined){
		dimensions.height = domElem.clientHeight; //height including padding
	}
	else if (domElem.offsetHeight !== undefined ){
		dimensions.height = domElem.offsetHeight;//height including borders, padding but doesn't include pseudo-elements 
	}
	else if(domElem.style.height !== undefined){
		dimensions.height = domElem.style.height;
	}
	else if(domElem.scrollHeight !== undefined){
		dimensions.height = domElem.scrollHeight;
	}
	else{
		dimensions.height =  window.innerHeight;
	}
	
	return dimensions;
	
}



/*
* [ createSVGTag(tagType, jsonTagAttributes) ]
* Crea un nodo SVG del tipo que se indica a través del tagType (e.g. "g") y cuyos atributos vienen dados por un objeto pasado 
* como argumento
* @Params:
* tagType: string identificando el tipo de tag de entre los definidos en svg (e.g. "rect", "line", "circle")
* jsonTagAttributes: objeto incluyendo value-pairs que asignan un valor a cada atributo del nuevo tag para configurar posiciones 
* 					 y look-and-feel
* @return nodo svg creado con los atributos incluidos
*/
function createSVGTag(tagType, jsonTagAttributes){

	const svgURI = "http://www.w3.org/2000/svg";

	let newSVG_node = document.createElementNS(svgURI, tagType);

	//Por cada atributo del objeto pasado, obtenemos el nombre y asignamos el valor de cada atributo
	// E.g. {"x":100, "y":200} --> newSVG_node.setAttribute("x",100); newSVG_node.setAttribute("x",200); 
	for( let attr in jsonTagAttributes){
		console.log(`attr: ${attr}`);
		console.log(`jsonTagAttributes[${attr}]: ${jsonTagAttributes[attr]}`);
		newSVG_node.setAttributeNS(null,attr, jsonTagAttributes[attr]);
	}
	return newSVG_node;
}


