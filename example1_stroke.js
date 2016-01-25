var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),


typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport


     && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';


nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write:

function(text){
    if (!this.elem)
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 -

this.elem.offsetWidth / 2) + 'px';
  }
};





function init(){


//init data
    var json = {
        id: "login",
        name: "login",
        data: {},
        children: [{
            id: "advertiser",
            name: "advertiser",
            data: {},
            children: [{
                id: "create advertiser",
                name: "create advertiser",
                data: {},
                children: [{
                    id: "nodeC1D1",
                    name: "C1D1",
                    data: {},
                    children: [{
                        id: "nodeD1E1",
                        name: "D1E1",
                        data: {},
                        children: []
                    }]
                }, {
                id: "C1D2",
                name: "C1D2",
                    data: {},
                    children: [{
                        id: "node48",
                        name: "4.8",


          data: {},
                        children: []
                    }, {
                        id: "node49",
                        name: "4.9",


        data: {},
                        children: []
                    }, {
                        id: "node410",
                        name: "4.10",


        data: {},
                        children: []
                    }, {
                        id: "node411",
                        name: "4.11",


        data: {},
                        children: []
                    }]
                }, {
                    id: "C1D3",
                    name: "C1D3",


              data: {},
                    children: [{
                        id: "node413",
                        name: "4.13",
                        data: {},


                   children: []
                    }]
                }, {
                    id: "C1D4",
                    name: "C1D4",
                    data:

{},
                    children: [{
                        id: "node415",
                        name: "4.15",
                        data: {},


children: []
                    }, {
                        id: "node416",
                        name: "4.16",
                        data: {},


children: []
                    }, {
                        id: "node417",
                        name: "4.17",
                        data: {},


children: []
                    }, {
                        id: "node418",
                        name: "4.18",
                        data: {},


children: []
                    }]
                }, {
                    id: "C1D5",
                    name: "C1D5",
                    data: {},


  children: [{
                        id: "node420",
                        name: "4.20",
                        data: {},
                        children: []


          }, {
                        id: "node421",
                        name: "4.21",
                        data: {},
                        children: []


          }]
                }]
            }, {
                id: "edit advertiser",
                name: "edit advertiser",
                data: {},
                children: [{


          id: "node323",
                    name: "3.23",
                    data: {},
                    children: [{
                        id: "node424",


            name: "4.24",
                        data: {},
                        children: []
                    }]
                }]
            }]
        }, {


    id: "publisher",
            name: "publisher",
            data: {},
            children: [{
                id: "node226",
                name: "2.26",


data: {},
                children: [{
                    id: "node327",
                    name: "3.27",
                    data: {},
                    children: [{


                     id: "node428",
                        name: "4.28",
                        data: {},
                        children: []
                    }, {


                     id: "node429",
                        name: "4.29",
                        data: {},
                        children: []
                    }]


           }, {
                    id: "node330",
                    name: "3.30",
                    data: {},
                    children: [{


id: "node431",
                        name: "4.31",
                        data: {},
                        children: []
                    }]
                }, {


              id: "node332",
                    name: "3.32",
                    data: {},
                    children: [{
                        id: "node433",


                name: "4.33",
                        data: {},
                        children: []
                    }, {
                        id: "node434",


                name: "4.34",
                        data: {},
                        children: []
                    }, {
                        id: "node435",


                name: "4.35",
                        data: {},
                        children: []
                    }, {
                        id: "node436",


                name: "4.36",
                        data: {},
                        children: []
                    }]
                }]
            }, {


  id: "node237",
                name: "2.37",
                data: {},
                children: [{
                    id: "node338",
                    name: "3.38",


                 data: {},
                    children: [{
                        id: "node439",
                        name: "4.39",
                        data: {},


                      children: []
                    }, {
                        id: "node440",
                        name: "4.40",
                        data: {},


                      children: []
                    }, {
                        id: "node441",
                        name: "4.41",
                        data: {},


                      children: []
                    }]
                }, {
                    id: "node342",
                    name: "3.42",


data: {},
                    children: [{
                        id: "node443",
                        name: "4.43",
                        data: {},


     children: []
                    }]
                }, {
                    id: "node344",
                    name: "3.44",
                    data: {},


       children: [{
                        id: "node445",
                        name: "4.45",
                        data: {},
                        children: []


               }, {
                        id: "node446",
                        name: "4.46",
                        data: {},
                        children: []


               }, {
                        id: "node447",
                        name: "4.47",
                        data: {},
                        children: []


               }]
                }, {
                    id: "node348",
                    name: "3.48",
                    data: {},
                    children: [{


                     id: "node449",
                        name: "4.49",
                        data: {},
                        children: []
                    }, {


                     id: "node450",
                        name: "4.50",
                        data: {},
                        children: []
                    }, {


                     id: "node451",
                        name: "4.51",
                        data: {},
                        children: []
                    }, {


                     id: "node452",
                        name: "4.52",
                        data: {},
                        children: []
                    }, {


                     id: "node453",
                        name: "4.53",
                        data: {},
                        children: []
                    }]


           }, {
                    id: "node354",
                    name: "3.54",
                    data: {},
                    children: [{


id: "node455",
                        name: "4.55",
                        data: {},
                        children: []
                    }, {


id: "node456",
                        name: "4.56",
                        data: {},
                        children: []
                    }, {


id: "node457",
                        name: "4.57",
                        data: {},
                        children: []
                    }]
                }]


    }, {
                id: "node258",
                name: "2.58",
                data: {},
                children: [{
                    id: "node359",


      name: "3.59",
                    data: {},
                    children: [{
                        id: "node460",
                        name: "4.60",


           data: {},
                        children: []
                    }, {
                        id: "node461",
                        name: "4.61",


           data: {},
                        children: []
                    }, {
                        id: "node462",
                        name: "4.62",


           data: {},
                        children: []
                    }, {
                        id: "node463",
                        name: "4.63",


           data: {},
                        children: []
                    }, {
                        id: "node464",
                        name: "4.64",


           data: {},
                        children: []
                    }]
                }]
            }]
        }, {
            id: "Campaign",
            name:"Campaign",
            data: {},
            children: [{
                id: "node266",
                name: "2.66",
                data: {},
                children: [{


                id: "node367",
                    name: "3.67",
                    data: {},
                    children: [{
                        id: "node468",


                  name: "4.68",
                        data: {},
                        children: []
                    }, {
                        id: "node469",


                  name: "4.69",
                        data: {},
                        children: []
                    }, {
                        id: "node470",


                  name: "4.70",
                        data: {},
                        children: []
                    }, {
                        id: "node471",


                  name: "4.71",
                        data: {},
                        children: []
                    }]
                }, {
                    id:

"node372",
                    name: "3.72",
                    data: {},
                    children: [{
                        id: "node473",


name: "4.73",
                        data: {},
                        children: []
                    }, {
                        id: "node474",


name: "4.74",
                        data: {},
                        children: []
                    }, {
                        id: "node475",


name: "4.75",
                        data: {},
                        children: []
                    }, {
                        id: "node476",


name: "4.76",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "node377",


          name: "3.77",
                    data: {},
                    children: [{
                        id: "node478",
                        name: "4.78",


               data: {},
                        children: []
                    }, {
                        id: "node479",
                        name: "4.79",


               data: {},
                        children: []
                    }]
                }, {
                    id: "node380",
                    name:

"3.80",
                    data: {},
                    children: [{
                        id: "node481",
                        name: "4.81",


data: {},
                        children: []
                    }, {
                        id: "node482",
                        name: "4.82",


data: {},
                        children: []
                    }]
                }]
            }, {
                id: "node283",
                name: "2.83",


        data: {},
                children: [{
                    id: "node384",
                    name: "3.84",
                    data: {},


children: [{
                        id: "node485",
                        name: "4.85",
                        data: {},
                        children: []


        }]
                }, {
                    id: "node386",
                    name: "3.86",
                    data: {},
                    children: [{


              id: "node487",
                        name: "4.87",
                        data: {},
                        children: []
                    }, {


              id: "node488",
                        name: "4.88",
                        data: {},
                        children: []
                    }, {


              id: "node489",
                        name: "4.89",
                        data: {},
                        children: []
                    }, {


              id: "node490",
                        name: "4.90",
                        data: {},
                        children: []
                    }, {


              id: "node491",
                        name: "4.91",
                        data: {},
                        children: []
                    }]


    }, {
                    id: "node392",
                    name: "3.92",
                    data: {},
                    children: [{
                        id:

"node493",
                        name: "4.93",
                        data: {},
                        children: []
                    }, {
                        id:

"node494",
                        name: "4.94",
                        data: {},
                        children: []
                    }, {
                        id:

"node495",
                        name: "4.95",
                        data: {},
                        children: []
                    }, {
                        id:

"node496",
                        name: "4.96",
                        data: {},
                        children: []
                    }]
                }, {


          id: "node397",
                    name: "3.97",
                    data: {},
                    children: [{
                        id: "node498",


            name: "4.98",
                        data: {},
                        children: []
                    }]
                }, {
                    id:

"node399",
                    name: "3.99",
                    data: {},
                    children: [{
                        id: "node4100",


name: "4.100",
                        data: {},
                        children: []
                    }, {
                        id: "node4101",


  name: "4.101",
                        data: {},
                        children: []
                    }, {
                        id: "node4102",


    name: "4.102",
                        data: {},
                        children: []
                    }, {
                        id: "node4103",


      name: "4.103",
                        data: {},
                        children: []
                    }]
                }]
            }, {
                id:

"node2104",
                name: "2.104",
                data: {},
                children: [{
                    id: "node3105",
                    name: "3.105",


               data: {},
                    children: [{
                        id: "node4106",
                        name: "4.106",
                        data: {},


                      children: []
                    }, {
                        id: "node4107",
                        name: "4.107",
                        data:

{},
                        children: []
                    }, {
                        id: "node4108",
                        name: "4.108",


data: {},
                        children: []
                    }]
                }]
            }, {
                id: "node2109",
                name: "2.109",


          data: {},
                children: [{
                    id: "node3110",
                    name: "3.110",
                    data: {},


children: [{
                        id: "node4111",
                        name: "4.111",
                        data: {},
                        children: []


          }, {
                        id: "node4112",
                        name: "4.112",
                        data: {},
                        children: []


            }]
                }, {
                    id: "node3113",
                    name: "3.113",
                    data: {},
                    children: [{


                    id: "node4114",
                        name: "4.114",
                        data: {},
                        children: []
                    }, {


                      id: "node4115",
                        name: "4.115",
                        data: {},
                        children: []
                    },

{
                        id: "node4116",
                        name: "4.116",
                        data: {},
                        children: []


}]
                }, {
                    id: "node3117",
                    name: "3.117",
                    data: {},
                    children: [{


        id: "node4118",
                        name: "4.118",
                        data: {},
                        children: []
                    }, {


          id: "node4119",
                        name: "4.119",
                        data: {},
                        children: []
                    }, {


            id: "node4120",
                        name: "4.120",
                        data: {},
                        children: []
                    }, {


              id: "node4121",
                        name: "4.121",
                        data: {},
                        children: []
                    }]


      }, {
                    id: "node3122",
                    name: "3.122",
                    data: {},
                    children: [{
                        id:

"node4123",
                        name: "4.123",
                        data: {},
                        children: []
                    }, {


id: "node4124",
                        name: "4.124",
                        data: {},
                        children: []
                    }]
                }]


      }, {
                id: "node2125",
                name: "2.125",
                data: {},
                children: [{
                    id: "node3126",


           name: "3.126",
                    data: {},
                    children: [{
                        id: "node4127",
                        name: "4.127",


                   data: {},
                        children: []
                    }, {
                        id: "node4128",
                        name: "4.128",


                     data: {},
                        children: []
                    }, {
                        id: "node4129",
                        name:

"4.129",
                        data: {},
                        children: []
                    }]
                }]
            }]
        }, {
            id:"Reports",
            name: "Reports",
            data: {},
            children: [{
                id: "node2131",
                name: "2.131",
                data:

{},
                children: [{
                    id: "node3132",
                    name: "3.132",
                    data: {},
                    children: [{


                 id: "node4133",
                        name: "4.133",
                        data: {},
                        children: []
                    }, {


                   id: "node4134",
                        name: "4.134",
                        data: {},
                        children: []
                    }, {


                     id: "node4135",
                        name: "4.135",
                        data: {},
                        children: []
                    },

{
                        id: "node4136",
                        name: "4.136",
                        data: {},
                        children: []


}, {
                        id: "node4137",
                        name: "4.137",
                        data: {},
                        children: []


  }]
                }]
            }, {
                id: "node2138",
                name: "2.138",
                data: {},
                children: [{


    id: "node3139",
                    name: "3.139",
                    data: {},
                    children: [{
                        id: "node4140",


         name: "4.140",
                        data: {},
                        children: []
                    }, {
                        id: "node4141",


           name: "4.141",
                        data: {},
                        children: []
                    }]
                }, {
                    id:

"node3142",
                    name: "3.142",
                    data: {},
                    children: [{
                        id: "node4143",


 name: "4.143",
                        data: {},
                        children: []
                    }, {
                        id: "node4144",


   name: "4.144",
                        data: {},
                        children: []
                    }, {
                        id: "node4145",


     name: "4.145",
                        data: {},
                        children: []
                    }, {
                        id: "node4146",


       name: "4.146",
                        data: {},
                        children: []
                    }, {
                        id: "node4147",


         name: "4.147",
                        data: {},
                        children: []
                    }]
                }]
            }]
        }]
    };


//end
$jit.ST.Plot.NodeTypes.implement({
	'stroke-ellipse': {
	    'render': function(node, canvas) {
			var width = node.getData('width'),
          height = node.getData('height'),
			pos = this.getAlignedPos(node.pos.getc(true), width, height),
			          posX = pos.x + width/2,
            posY = pos.y + height/2;
             this.nodeHelper.ellipse.render('stroke', { x: posX, y: posY }, width, height, canvas);
             //this.nodeHelper.ellipse.render('fill', { x: posX, y: posY }, width, height, canvas);
         }
    }
});

  //init Spacetree
    //Create a new ST instance

 var st = new $jit.ST({
        //id of viz container element
        injectInto: 'infovis',
        //set duration for the animation
        duration: 800,
        //set animation transition type
        transition: $jit.Trans.Quart.easeInOut,
        //set distance between node and its children
        levelDistance: 50,
        //enable panning
        Navigation: {
          enable:true,
          panning:true,
          zooming:20
        },


        //set node and edge styles
        //set overridable=true for styling individual
        //nodes or edges
        Node: {
            height: 40,
            width: 100,
            type: 'ellipse',
            color: '#ffe5e5',
            lineWidth: 17,
            overridable: true,
            CanvasStyles: {
				//fillStyle: '#ff8080',
                strokeStyle: '#000000',
			    lineWidth: 2
            }
        },

        Edge: {
            type: 'bezier',
            overridable: true,
            color:'#ff8080'
        },


        onBeforeCompute: function(node){


        Log.write("Loading " + node.name);
        },

        onAfterCompute: function(){
            Log.write("done");
        },

        //This method is called on DOM label creation.


   //Use this method to add event handlers and styles to  your node.

  onCreateLabel: function(label, node){
                     label.id = node.id;
                     label.innerHTML = node.name;
                     label.innerHTML+= "<br/><a href = 'javascript:window.open(\"http://testing.zedo.com/spacetree/"+node.id+".html\",\"_blank\",\"width=300,height=300\");'>Click</a>";
                     button.onclick = function(){
						 if(!srch.value.match("Search Page")) {
							 //alert("search field");
							 st.onClick(srch.value);
							 window.open("http://testing.zedo.com/spacetree/"+srch.value+".html","_blank","width=300,height=300"); } else { //alert("Input search values");
							 }
				     //if(normal.checked) {

   				     //} else {
				     //st.setRoot(node.id, 'animate');
    			     //}
     			 };
     			 label.onclick=function() {
     			     st.onClick(node.id);
     			 };

 //set label styles
            var style = label.style;
            style.width = 90 + 'px';
            style.height = 30 + 'px';
            style.cursor = 'pointer';
            style.color = '#333';
            style.fontSize = '0.8em';
            style.textAlign= 'center';
            style.paddingTop = '5px';




     },


      //This method is called right before plotting  a node. It's useful for changing an individual node
        //style properties before plotting it.
        //The data properties prefixed with a dollar
        //sign will override the global node style properties.


  onBeforePlotNode: function(node){
            //add some color to the nodes in the path between the
            //root node and the selected node.
            if(node.selected) {
                node.data.$color = "#ffffb3";
               // node.setCanvasStyle('fillStyle', '#e5f7ff', 'end');
               // node.setCanvasStyle('strokeStyle', '#00ace6', 'end');
               // node.data.$CanvasStyles = {strokeStyle : "#ffffb3",lineWidth:10};

            }
            else {
                delete node.data.$color;
                //if the node belongs to the last plotted level
                if(!node.anySubnode("exist")) {
                    //count children number
                    var count = 0;

                 //if(init.busy) return;
                // init.busy = true;
                    node.eachSubnode(function(n) {count++;});

					//var colors = ['#ffe5e5', '#ecffb3', '#fff2cc', '#ffffcc', '#e5f7ff', '#ffebcc'];
                   // node.setCanvasStyles('current', {fillStyle: colors[1], strokeStyle: '#ecffb3',lineWidth: 5});
                    //node.setCanvasStyle('strokeStyle', colors[count]);
                    //node.setCanvasStyle('fillStyle', colors[count]);
                    //node.setCanvasStyle('lineWidth', 10);

                    //assign a node color based on
                    //how many children it has

                                        //pink      //green   // purple   //yellow   //blue    //peach ecffb3
                   node.data.$color = ['#ffe5e5', '#ecffb3', '#fff2cc', '#ffffcc', '#e5f7ff', '#ffebcc'][count];
                   node.setCanvasStyle('strokeStyle', '#000000');
//node.data.CanvasStyles.strokeStyle = ['#ffe5e5', '#ecffb3', '#fff2cc', '#ffffcc', '#e5f7ff', '#ffebcc'][count];
//node.setCanvasStyles('end', {fillStyle: '#daa', strokeStyle: '#ffc',lineWidth: 12 });
//alert(node.data.$CanvasStyles);
//node.setCanvasStyles('end', {fillStyle: '#daa', strokeStyle: '#ffc',lineWidth: 2});
//st.compute('end');
//node.setCanvasStyle('strokeStyle', '#000000', 'end');
//st.geom.translate({x:-130, y:0}, 'end');
 // st.fx.animate({
   // modes: ['linear',
   //         'node-property:width:height',
   //         'edge-property:lineWidth:color',
   //         'label-property:size:color',
   //         'node-style:fillStyle:strokeStyle:lineWidth'],
   // duration: 1500,
   // onComplete: function() {
  //    init.busy = false;
   // }
 // });

                }
            }
        },

        //This method is called right before plotting
        //an edge. It's useful for changing an individual edge
        //style properties before plotting it.
        //Edge data proprties prefixed with a dollar sign will
        //override the Edge global style properties.


 onBeforePlotLine: function(adj){
            if (adj.nodeFrom.selected && adj.nodeTo.selected) {
                adj.data.$color = "#eed";
                adj.data.$lineWidth = 3;
            }
            else {
                delete adj.data.$color;
                delete adj.data.$lineWidth;
            }

      }
    });


 //load json data



  st.loadJSON(json);
    //compute node positions and layout

  st.compute();
    //optional: make a translation of the tree
    st.geom.translate(new $jit.Complex(-200, 0), "current");
    //emulate a click on the root node.


  st.onClick(st.root);
  //alert("st.root"+st.root);
    //end
    //Add event handlers to switch spacetree orientation.


  var top = $jit.id('r-top'),
        left = $jit.id('r-left'),
        bottom = $jit.id('r-bottom'),
        right = $jit.id('r-right'),
        normal = $jit.id('s-normal');
        srch = $jit.id('s-search');
        button = $jit.id('s-button');
        fld = $jit.id('s-field');



  function changeHandler() {
        if(this.checked) {
            top.disabled = bottom.disabled = right.disabled = left.disabled = true;
            st.switchPosition(this.value, "animate", {
                onComplete: function(){
                    top.disabled = bottom.disabled = right.disabled = left.disabled = false;


                }
            });
        }
    };

    var defaultText = "Search Page";
    var defaultfield = "Search field";
	//var searchBox = document.getElementById("s-search");

	//default text after load
	srch.value = defaultText;
	fld.value = defaultfield;

	//on focus behaviour
	srch.onfocus = function() {
		if (this.value == defaultText) {//clear text field
			this.value = '';
		}
	}

	fld.onfocus = function() {
			if (this.value == defaultfield) {//clear text field
				this.value = '';
			}
	}

	//on blur behaviour
	srch.onblur = function() {
		if (this.value == "") {//restore default text
			this.value = defaultText;
		}
	}

    fld.onblur = function() {
			if (this.value == "") {//restore default text
				this.value = defaultfield;
			}
	}


   // top.onchange = left.onchange = bottom.onchange = right.onchange = changeHandler;
    //end

}
