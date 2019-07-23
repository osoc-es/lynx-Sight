// Show logs 
let logsOn = false;
// Set to false to disable Graphic guides for development
let auxGuidelines = false;
// Set to false to avoid input data randomization test
let randomizeTest = true;


/*
* Modificación del prototype de la clase Date() para
* que devuelva la fecha como String formada por:
*    " Día  Mes Año"  
*/

if(logsOn) console.groupCollapsed("%c Modification of Date prototype:", "text-weight:bold;");

if(logsOn) console.log("BEFORE Date() protototype", Date.prototype);

//Create array with names of the Months
Date.prototype.MONTHNAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"] ;
//Create array with names for every day of the week
Date.prototype.DAYSOTW = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
//Define cusstom formatting function for Date to string
Date.prototype.getVerboseDate = function (includeDayName = false){
	let dayName = "" ;
	if(includeDayName){includeDayName+= this.DAYSOTW[this.getDay()];}
		
	return dayName+ `${this.getDate()} ${this.MONTHNAMES[this.getMonth()]} ${this.getFullYear()}` ; 
	
} ;
if(logsOn) console.log("AFTER Date() protototype", Date.prototype);
if(logsOn) console.groupEnd();

let hardcodedJSON;
//Event Logs formating
var procEventColor = "background: #c40076; color:white;" ;
var backProcEventColor = "background:#7c00c4;color:white;";
var factsUJEventColor = "background:#003bc4;color:white;";
var white = "background:#FFFFFF;color:#000000;";

var svgNamespaceURI ="http://www.w3.org/2000/svg" ;


let zoomFactor = 1;
let prevDimWindow  = {width:window.innerWidth,height:window.innerHeight};

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



//@REVISIT (May use)
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



/* Function to run when the page is completely loaded */
function onPageLoad(){
	
	let sentenceContent =  document.querySelector("#texto");
	

	function annotateInDOMinnerHTML(text,id,DOMElem,className="highlighter_def"){
	
	if(typeof(text)!== typeof("")){return null;}	
	
	//Obtain the position within the inner HTML of the DOMelem within which we need to include a new tag, so that highlighting can be performed
	let first_ocurrence = DOMElem.innerHTML.indexOf(text);
	let last_ocurrence = first_ocurrence + text.length;
		
	let stringTag = `<span class='${className}' id='${id}'>`
	
	//Replace innerHTML content to annotate
	DOMElem.innerHTML = DOMElem.innerHTML.slice(0,first_ocurrence).concat(stringTag).concat(DOMElem.innerHTML.slice(first_ocurrence,last_ocurrence)).concat("</span>").concat(DOMElem.innerHTML.slice(last_ocurrence));
		
		return DOMElem.querySelector(`#${id}`);
		
	}
	
	
	
	
	console.log("%c[X] %c Page Loaded already!","background: #078f07; color: #bada55 ", "background: #006fb0 ; color: #FFFFFF ");
	let domSvgcontainerDiv = document.getElementById("svg"); //<div> that contains the <svg> canvas 
	let svgElem = domSvgcontainerDiv.querySelector("svg"); // <svg> canvas is obtained 
	
	console.log("\t %c [L!] %c Adding printing timeline functionality on click event", "background-color:red;color:white","text-decoration:underline;");
	
	document.querySelector("#btntimex").addEventListener("click", function(){ 
		domSvgcontainerDiv.classList.toggle("hide"); 
		printSVGLines(hardcodedJSON, null, true, false);
	});
	
	console.log("\t %c [L!] %c Adding zooming functionality on scroll event", "background-color:red;color:white","text-decoration:underline;");
	
	//ZOOM Functionality:
	svgElem.addEventListener("wheel", function(event){
		
		let dim = computeHTMLElemDimensions(svgElem);
		
		console.log(event.deltaY);
		
		wheeldY = event.deltaY;
		console.log(zoomFactor);
		
		if(zoomFactor>2.5 ) zoomFactor =2.5;
		if(zoomFactor<1) zoomFactor =1;
		//the greater the zoom factor, the bigger everything looks
		if(zoomFactor<=2.5 && zoomFactor>=1){
			event.preventDefault();
			console.log("clientCoords:",event.clientX,event.clientY);
			console.log("screenCoords:", event.screenX,event.screenY);
			zoomFactor  = (zoomFactor - Math.sign(wheeldY)* 0.10);

			let navElem =  document.getElementById("navadmin");
			let dimPrevDim = computeHTMLElemDimensions(navElem);


			if(event.clientY > dimPrevDim.height && event.clientY <= (dim.height+dimPrevDim.height)){
			//The lower the new height and width, the bigger things become
			this.setAttributeNS(null,"viewBox", `${event.clientX} ${event.clientY-dimPrevDim.height} ${dim.width/zoomFactor} ${dim.height/zoomFactor} `);
		
		} 
		}
	
	});
	
	//@REVISIT --> used to repaint the timeline on window dimensions change.
	window.addEventListener("resize", checkSizeChanges);
	function checkSizeChanges(){
		
		
		//let lastDims = computeHTMLElemDimensions(window.);
		
		//if(lastDims.height!= prevDimWindow.height ||lastDims.width != prevDimWindow.width){
			printSVGLines(hardcodedJSON,svgElem,false,false);
		//}
		
		/*prevDimWindow.height =  lastDims.height;
		prevDimWindow.width = lastDims.width;
	
		console.log(`D Dimensions 	w:${prevDimWindow.height} \
		h:${prevDimWindow.width} \n \
		D' w:${lastDims.width} \
		h:${lastDims.height}`);
		*/
	}
	
	//svgElem.addEventListener("click",  function(){ resize(svgElem)}); 

	/*Creates generic function to create timeline and non-timed line*/
	function printSVGLines(lEventArray,svgInDOM, doSort=true, randomizeTest=false, overwrite=true){
		
		if(logsOn)console.groupCollapsed("%c[#] Function Call: %cprintTimeline", "color:#8c0069","font-weight:bold");
		if(logsOn)console.time("elapsed printTimeline");
		
		// - Check type of arguments, in order to make the function call more robust 
		if(svgInDOM == undefined || svgInDOM === null){
			svgInDOM = document.querySelector("svg");
			
			}
		if(svgInDOM.childElementCount >0 && overwrite){
				let childrenToDel = svgInDOM.childNodes;
				let delChild = childrenToDel[0];
				while(delChild != null && delChild != undefined ){
					svgInDOM.removeChild(delChild);
					delChild = childrenToDel[0];
				}
		}
		
		
		if(typeof lEventArray === typeof "" ){
			lEventArray = JSON.parse(lEventArray);
		}
		
		// - Allows randomization of input data (TEST PURPOSES)  [@REVISIT]
		if(randomizeTest)randomizeTestData(lEventArray);
		
		
		if(logsOn){console.groupCollapsed("%c[MA] %c Transforming temporal data into Date()", "color: #0e4a75; font-weight:bold;", "text-decoration:underline;")};
		
		let evID = 0;
		let  totalTimedEvents = 0;
		for(event in lEventArray){ 
			if(logsOn){console.log(`\t Processing Event ${event}`);}
			if( typeof(lEventArray[event].timeStamp) != "undefined" ){
				if(logsOn){console.log(`\t Event ${event} has timeStamp already defined: ${lEventArray[event].timeStamp}`); continue;}
			}
			//Give the Object an ID attribute for latter use and reference
			lEventArray[event]._evID = `event_${evID}`;
			let countTemporal = 0;

			/*- For each event, get whether it has got temporal attributes related to it and build Date() objects 
				based on the provided text (e.g. 20 December 2018 --> number) */  
			for(attr in lEventArray[event]["ATTRIBUTES"]){

				if(logsOn){
					console.log(`\t\t Event [${event}][${attr}]: \"${lEventArray[event]["ATTRIBUTES"][attr].INFO}\" is temporal? \n \t\t ${lEventArray[event]["ATTRIBUTES"][attr].INFO === "when"}`);
				}

				if(lEventArray[event]["ATTRIBUTES"][attr].INFO === "when"){
					//Create a Date object from INFO text
					lEventArray[event].timeStamp = new Date(lEventArray[event]["ATTRIBUTES"][attr].TEXT);
					if(logsOn){console.log(`\t\t new Date() involving ${event}; value:${lEventArray[event].timeStamp}`);};
					countTemporal++;
				}
			}
			lEventArray[event].hasTime = countTemporal;
			if(lEventArray[event].hasTime === 1) totalTimedEvents += countTemporal;
			evID++;
		}
		if(logsOn) console.groupEnd();
		
		//Reorder elements of the array in the case it is necessary regarding temporality
		if(doSort){
			if(logsOn) console.groupCollapsed("%c[MA] %c Sorting temporal events ", "color: #0e4a75; font-weight:bold;", "text-decoration:underline;");
			lEventArray.sort(function(a,b){
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
					console.log("%c SORTED EVENTS TABLE:","text-decoration:underline;");
					console.table(lEventArray,["TEXT","TYPE","hasTime","timeStamp"]);
					console.groupEnd()
			}
		}
		
		console.log("EXECUTING annotation");
		for(event of lEventArray){
			if(event.inTextAnnotationNode == undefined){
				 event.inTextAnnotationNode = annotateInDOMinnerHTML(event.TEXT,`annotate_${event._evID}`,document.querySelector("#texto"));
			}
		}
		
		/*for(event of lEventArray){
			event.inTextAnnotationNode.innerHTML = "ME PARTO EL CULO";
		}*/
		
		
		let svgDim = computeHTMLElemDimensions(svgInDOM);
		/* Distance made among elements displayed in the screen */
		let marginTime_line = ((totalTimedEvents%3)+1)* 20/100 * svgDim.width; // @REVISIT --> to be handled better
		let eventTimelineConstantSeparation = (svgDim.width -2*marginTime_line)/(totalTimedEvents-1);
		
		if(logsOn) console.groupCollapsed("%c[MA] %c Creating lines ", "color: #0e4a75; font-weight:bold;", "text-decoration:underline;");
		
		//- Draw Timeline
		let centreLine = createCenterHlineSVG(0,0,svgDim.width,svgDim.height,svgInDOM,"tmpLine");
		//- Draw auxiliar line if tere are non-temporal events
		let nonTempLine = createCenterHlineSVG((2/3)*svgDim.width,(2/3)*svgDim.height,svgDim.width,svgDim.height,svgInDOM,"nonTmpLine");
		
		if(logsOn) console.groupEnd();
		
		if(logsOn)console.groupCollapsed("%c[MA] %c Creating event nodes ", "color: #0e4a75; font-weight:bold;", "text-decoration:underline;");
		let markerDirAlternating = true;
		
		//- Create a group of <g> nodes to contain all the graphical elements associated to an event 
			for(let iEv= 0; iEv < lEventArray.length; iEv++){
					// a) -CREATE TIMED EVENTS GRAPHICALLY 
					if( lEventArray[iEv].hasTime >0 && typeof lEventArray[iEv].timeStamp !== undefined ){
						console.log(`\t Processing Event ${iEv}:`,lEventArray[iEv]) ;
						createEventNodeGroup(lEventArray[iEv]._evID,/*cx!*/marginTime_line+iEv*eventTimelineConstantSeparation,/*cy!*/svgDim.height/2,lEventArray[iEv],20,svgInDOM,markerDirAlternating);
						markerDirAlternating = !markerDirAlternating;
						
					}
					else{// b) -CREATE NON-TIMED EVENTS GRAPHICALLY 
						//@complete
						createEventNodeGroup(lEventArray[iEv]._evID,0.2*iEv + (2/3)*svgDim.width, (svgDim.height - (2/3)*svgDim.height)/2 +(2/3)*svgDim.height,lEventArray[iEv],20,svgInDOM   );
					}
				}
		
		if(logsOn) console.groupEnd();
		
		/* Creates outermost <g>  */
		function createEventNodeGroup(_id,_cx,_cy,lEvent,radius = 10, oSVG, dirMarker){
		
			if(typeof oSVG === 'undefined' && oSVG === null){
				oSVG = document.querySelector("svg");
			}
			let svgDim = computeHTMLElemDimensions(oSVG);

			//Creamos dos nuevos atributos que contienen dónde se encuentra el centro del nodo que representa al evento (cnx,cny)
			lEvent.cnx = _cx;
			lEvent.cny = _cy;
			
			//Creamos propiedades para evento de cada tipo @REVISIT --> incluir en protoype
			lEvent.eventTypes = ["procedural","background procedural","facts under judgement"];
			lEvent.pathEventImages = ["img/Procedural.png","img/BackgroundProcedural.png","img/FactsUnderJudgement.png"];
			
			/* HELPER FUNCTIONS */
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
					case "facts under judgment".toUpperCase() || this.eventTypes[2].toUpperCase() :
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
					case "facts under judgment".toUpperCase() || this.eventTypes[2].toUpperCase():
							return this.pathEventImages[2] ;
							break;
					default: 
							return "/img.logoLynx.png";
				}
			}

			/* MAIN GROUP CREATION*/
			//-------------------- OPEN console group #1
			if(logsOn) console.groupCollapsed(`%c[MA] %c Main group creation ${_id}`, "color: #0e4a75; font-weight:bold;", "text-decoration:underline;");
			// Creamos un grupo <svg> para contener too lo relacionado a un evento (e.g. <svg id="event_1" ...>) 
			let newG = createSVGTag("g", {id:_id});
			buildGraph ("graph_"+lEvent._evID, lEvent, 40,10, newG, 20 );
			//-------------------- CLOSE console group #2
			if(logsOn) console.groupEnd();
			
			oSVG.append(newG);
			//creamos los markers para cada evento
			
			oSVG.append(createMarker(lEvent, dirMarker, (svgDim.height/2)/2, 20));
		
		}
		
		
		/*@REVISIT*/
		function createMarker(lEvent, direction = true, heightMarker, radiusMarker){
		/* CREATE MARKERS */
			let _markerNewG = createSVGTag("g", {id:`marker_${lEvent._evID}` }); //Crea un grupo que va a contener los componentes de un marker que corresponde a cada evento, mostrando el tipo de evento que es.
			let heightOfMarkers = heightMarker ;// (svgDim.height/2)/2 ;
			//let radiusMarker = 3*radius;
			//Coordinates of Marker
			lEvent.cMx = lEvent.cnx;
			if(direction) lEvent.cMy = lEvent.cny-heightOfMarkers;
			else lEvent.cMy = lEvent.cny+heightOfMarkers;

			let _markerInnerCircle = createSVGTag("circle", {cx:lEvent.cMx ,cy:lEvent.cMy,r:radiusMarker ,class:"innerMarkerCircle"});

			let _markerOuterCircle= createSVGTag("circle", {cx:lEvent.cMx ,cy:lEvent.cMy,r:radiusMarker+10,class:lEvent.getMainNodeStylingClass()});

			//We obtain the coordinates and lenght of the square side that allows to fit an image perfectly centered in our marker.
			let fitCircleCoords = { fcx:lEvent.cMx-(Math.sqrt(Math.pow(radiusMarker,2)/2)),
									fcy: lEvent.cMy-(Math.sqrt(Math.pow(radiusMarker,2)/2)),
									l:  (Math.sqrt(Math.pow(radiusMarker,2)/2)) *2
								  }

			let _markerIcon = createSVGTag("image", {x:fitCircleCoords.fcx, y:fitCircleCoords.fcy, height:fitCircleCoords.l, width:fitCircleCoords.l ,href:`${lEvent.getAssociatedEventImgPath()}`});

			//POINTER
			let pathConnect = createSVGTag("path", {d:`M ${fitCircleCoords.fcx+8} ${fitCircleCoords.fcy+fitCircleCoords.l} L ${lEvent.cnx} ${lEvent.cny}  L ${fitCircleCoords.fcx+fitCircleCoords.l-8} ${fitCircleCoords.fcy+fitCircleCoords.l} Z`, class:"innerMarkerCircle"});

			//Anchor element que ha de conducir al evento dento del texto como tal [@REVISIT]
			let anchorElem = createSVGTag("a",{href:`#${lEvent.inTextAnnotationNode.id}`});


			anchorElem.appendChild(_markerOuterCircle);
			anchorElem.appendChild(_markerInnerCircle);
			anchorElem.appendChild(pathConnect);
			anchorElem.appendChild(_markerIcon);

			//AUX ANNOTATIONS TO EASE DEBUGGING 
			if(auxGuidelines){

				/*
				* [ createPoinntAnnotation ]
				* @params
				* label: name for the point in the svg canvas to be annotated
				* _cx: x coordinate for the point to be marked
				* _cy: y coordinate for the point to be marked
				* textAt: "start" | "middle" | "end"  depending on where with respect to the text we 
				*    	  want the label
				* color:  a string representing the color for the annotation
				* appendTo: a svg node wher within which we want to include the annotation elems
				* dx: a number to place the label at a point _cx+dx
				* dy: a number to place the label at a point _cy+dy
				* @return the svg node where the new elements were included
				*/
				function createPointAnnotation(label, _cx, _cy, textAt="middle", color, appendTo, _dx=0,_dy=0){

					let auxCircle = createSVGTag("circle",{cx:_cx ,cy:_cy ,r:2 ,fill:color});
					let textNameCoords = createSVGTag("text", {x:_cx , y:_cy ,"text-anchor":textAt,fill:color,"font-size":10,dx: _dx,dy:_dy});
					textNameCoords.textContent = label +`: (${Math.round(_cx)},${Math.round(_cy)})` ;

					appendTo.appendChild(auxCircle);
					appendTo.appendChild(textNameCoords);

					return appendTo;
				}




				//Node center: cn
				createPointAnnotation("cn",lEvent.cnx,lEvent.cny,"middle","red", anchorElem,0,30 );
				//Marker center: cM
				createPointAnnotation("cM",lEvent.cMx,lEvent.cMy,"end","red", anchorElem,-30,0);
				//Circle Fit Image origin: 
				createPointAnnotation("fc0",fitCircleCoords.fcx,fitCircleCoords.fcy,"end","red", anchorElem,-30,0);
				//Annotate lenght of the square that fits within the circle


				let auxLine = createSVGTag("path", {d:`M ${fitCircleCoords.fcx} ${fitCircleCoords.fcy} h ${fitCircleCoords.l}`,stroke:"blue"});

				let textNameCoords = createSVGTag("text", {x:(fitCircleCoords.fcx+fitCircleCoords.l)/2 , y:fitCircleCoords.fcx-5 ,"text-anchor":"middle",fill:"blue","font-size":10});
					textNameCoords.textContent = `l=${fitCircleCoords.l}` ;
				anchorElem.appendChild(auxLine);
				anchorElem.appendChild(textNameCoords);



			}

			_markerNewG.appendChild(anchorElem);

			return _markerNewG;
			
		}
		

		/* [PENDING DESCRIPTION] Creamos todos los componentes internos a un grupo <g id="graphEv_X" ...>  y los  añadimos al grupo del evento (appentTo obj)*/
		function buildGraph(idGraph, lEvent, maxNodeDistance, maxNodeRadius, appendTo, radius =15){

			/* Creamos un círculo svg con que representará un evento y que tendrá un color concreto dependiendo del tipo de evento que estemos evaluando : Procedural, Background procedural o Facts under judgement */
			let eventCircle = createSVGTag("circle", {cx:lEvent.cnx,cy:lEvent.cny,r:radius, class:lEvent.getMainNodeStylingClass()});
			if(logsOn) console.log(`\t Creating main node ${idGraph}`);
			/* Creamos un nodo de texto con los datos del grafo*/
			let textNodeMain = createSVGTag("text", {x:lEvent.cnx,y:lEvent.cny,class:"mainNodeText"});
			//textNodeMain.textContent = lEvent.TEXT;
			textNodeMain.textContent = lEvent._evID.toUpperCase();
				
			/* Creamos un title que muestre la fecha exacta al hacer mouseover (Only temporal events) */
			let newTitle;
			if(lEvent.hasTime === 1){
				newTitle = createSVGTag("title");
				newTitle.textContent = lEvent.timeStamp.getVerboseDate();
			}

			if(logsOn) console.log("\t %c [L!] %c Adding annotation functionality on click event", "background-color:red;color:white","text-decoration:underline;");
			
			
			
			//eventCircle.addEventListener("click", function(){alert("on click event properly added");}/*annotateInText*/); // @Pending


			// Añadimos los nodos dentro del anterior <g>, el grupo que engloba al grafo
			if(lEvent.hasTime === 1) appendTo.appendChild(newTitle);
			appendTo.appendChild(eventCircle);
			appendTo.appendChild(textNodeMain);

			/* CREATION OF BRANCHES */
			if(logsOn) console.groupCollapsed(`%c[MA] %c Creation of branches ${idGraph}`, "color: #0e4a75; font-weight:bold;", "text-decoration:underline;");

			//Creamos un objeto que representa el ángulo que separará cada nodo.
			//  - Si no hay atributos, no generamos más nodos y devolvemos el padre con el nodo central añadido
			if(lEvent["ATTRIBUTES"] === undefined){ return appendTo;}
			let alpha = { deg: 360/(lEvent["ATTRIBUTES"].length)};
			alpha.rad = alpha.deg  * (Math.PI/180);

			if(logsOn) console.log(`\t ${idGraph} #Attributes: length ${lEvent._evID} `+lEvent["ATTRIBUTES"].length);
			if(logsOn) console.log("\t\t alpha separation DEG: "+alpha.deg);
			if(logsOn) console.log("\t\t alpha separation RAD: "+alpha.rad);


			// - For each attribute, we create a circular node and a connecting line from the center of the main node towards
			//	 the center of the new circular node, with a length given by the provided radius
			let evCount = 1 ;
			// - Create new group of svg branches for the graph
			let groupBranches = createSVGTag("g",{id:`${lEvent._evID}`+"_Braches"});
			for(lAttr in lEvent["ATTRIBUTES"]){

				/*console.log("cnx" ,lEvent.cnx );
				console.log( "maxNodebe", maxNodeDistance  );
				console.log( "sin", Math.sin(alpha.rad) );*/

				// -Create coordinates as attributes for each event attribute that will require a node
				lEvent["ATTRIBUTES"][lAttr].cAx = lEvent.cnx +  maxNodeDistance * Math.sin(evCount*alpha.rad)/Math.tan(evCount*alpha.rad) ;
				lEvent["ATTRIBUTES"][lAttr].cAy = lEvent.cny +  maxNodeDistance * Math.sin(evCount*alpha.rad) ;

				if(logsOn) console.log(`\t Creating Graph for ${lEvent._evID}["ATTRIBUTES"][${lAttr}] at (${lEvent["ATTRIBUTES"][lAttr].cAx,lEvent["ATTRIBUTES"][lAttr].cAy}`);

				let connectLine_i = createSVGTag("path", {d:`M ${lEvent.cnx} ${lEvent.cny} L ${lEvent["ATTRIBUTES"][lAttr].cAx} ${lEvent["ATTRIBUTES"][lAttr].cAy}`,class:"interNodeLine"});

				let outerNode_i = createSVGTag("circle", {cx:lEvent["ATTRIBUTES"][lAttr].cAx ,cy:lEvent["ATTRIBUTES"][lAttr].cAy, r:maxNodeRadius, class:"outerNodeGraph"});
				
				//Event Listerners @REVISIT --> right now they only resize on mouse over.
			/*	outerNode_i.addEventListener("mouseover",function(e){
					//e.target.getAttribute("r");
					//e.target.setAttribute("r","30");
					e.target.classList.toggle("zoomOuterNode");
					
				} );
				outerNode_i.addEventListener("mouseout",function(e){
					//e.target.setAttribute("r","20");
					e.target.classList.toggle("zoomOuterNode");
				}); */

				let textOuterNode = createSVGTag("text",{x:lEvent["ATTRIBUTES"][lAttr].cAx,y:lEvent["ATTRIBUTES"][lAttr].cAy,dy:-(maxNodeRadius/2),class:"outerNodeTextLabel"});
				textOuterNode.textContent =  lEvent["ATTRIBUTES"][lAttr].INFO;
				let textOuterNodeDesc = createSVGTag("text",{x:lEvent["ATTRIBUTES"][lAttr].cAx,y:lEvent["ATTRIBUTES"][lAttr].cAy,dy:0,class:"outerNodeTextDesc"});
				textOuterNodeDesc.textContent = lEvent["ATTRIBUTES"][lAttr].TEXT;

				groupBranches.appendChild(connectLine_i);
				groupBranches.appendChild(outerNode_i);
				groupBranches.appendChild(textOuterNode);
				groupBranches.appendChild(textOuterNodeDesc);
				evCount++;
			}
			if(appendTo != 'undefined')
			appendTo.prepend(groupBranches);

			if(logsOn) console.groupEnd();

			return appendTo;

		}

		
		if(logsOn)console.groupEnd();
		if(logsOn) console.timeEnd("elapsed printTimeline");
		return lEventArray;
		
	}
	
	
	
	


}

function createCenterHlineSVG(minX=0,minY=0,maxX,maxY,appendTo,id ="temporalLine",namespace="http://www.w3.org/2000/svg"){
	
	//Create a <path> node
	var lineNode = document.createElementNS(namespace,"path");
	//Set attributes to make the line show in the middle of the provided 
	lineNode.setAttributeNS(null,"id",id); //Give it an id to ease later modification
	
	lineNode.setAttributeNS(null,"d", "M "+Math.round(minX)+"  "+ Math.round(((maxY-minY)/2)+minY) + " h " + Math.round(maxX-minX));
	lineNode.classList.add("centerLineColor");
	lineNode.setAttributeNS(null,"stroke-width", "10");
	//lineNode.setAttributeNS(null,"stroke","#000000");
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
		else if(item.TYPE.toUpperCase() === "facts under judgement".toUpperCase() || item.TYPE.toUpperCase() === "facts under judgment".toUpperCase()){
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









function randomizeTestData(lEventArray){
	
	let max = 2, min = 0;
	
	console.groupCollapsed("%c CALL randomizeTestData()--> Events:","background-color:black; color:white;");
	
	for(ev in lEventArray){
		console.log(`Ev[${ev}]: ${lEventArray[ev].TYPE}`);
		
		let randType = Math.random()* (max-min+1) + min;
		//Randomize assignment of type of event
		switch (randType){
			case 0 : lEventArray[ev].TYPE = "procedural";
			 	break;
			case 1: lEventArray[ev].TYPE = "background procedural";
				break;
			case 2: lEventArray[ev].TYPE = "facts under judgement";
				break;
		}
		
		let countWhenAttr = 0;
		if(lEventArray[ev]["ATTRIBUTES"] == undefined){ continue; }
		console.group("Attributes:");
		for(attr in lEventArray[ev]["ATTRIBUTES"]){
			
			if(lEventArray[ev]["ATTRIBUTES"][attr].INFO == "when"){
				countWhenAttr++;
			}
			console.log(`Ev[${ev}][ATTRIBUTES][${attr}]:`,lEventArray[ev]["ATTRIBUTES"][attr]);
		}
		console.groupEnd();
		
		if(countWhenAttr==0){
			lEventArray[ev]["ATTRIBUTES"][0].INFO = "when";
				lEventArray[ev]["ATTRIBUTES"][0].TEXT = (new Date()).getTime().toString();
		}
	
	}
	
	console.groupEnd()
	
}




/* LEGEND CODE @REVISIT 
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
*/
