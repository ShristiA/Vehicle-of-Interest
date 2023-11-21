
    function makeHttpObject() {
                try {return new XMLHttpRequest();}
                   catch (error) {alert("error");}
                try {return new ActiveXObject("Msxml2.XMLHTTP");}
                   catch (error) {alert("error");}
                try {return new ActiveXObject("Microsoft.XMLHTTP");}
                   catch (error) {alert("error");}
                throw new Error("Could not create HTTP request object.");
                }

    function refreshVOI(){ 
        // Find a <table> element with id="VOITable":
        document.getElementById("VOITable").style.display = "block"
        document.getElementById("VOIModelTable").style.display = "none"
        document.getElementById("VOIROITable").style.display = "none"
        document.getElementById("VOIMakeTable").style.display = "none"
        var VOITable = document.getElementById("VOITable");
        var tableRows = VOITable.getElementsByTagName('tr');   
        var rowCount = VOITable.rows.length;
//alert("get tabel");
        for (var r = 1; r < rowCount; r++) {
            VOITable.deleteRow(-1);
         }
         
        var request = makeHttpObject();
        var xmlDoc;
        var parser;
        var x, i;
        var vois, voi;
        request.open("GET", "http://localhost:8080/VehiclesOfInterestWebServices/webresources/model.vehicleofinterest", true);
        request.send();
        request.onreadystatechange = function() {

            if (request.readyState == 4)
            {
//alert("data " + request.responseText.toString());                
               parser = new DOMParser();
               vois = parser.parseFromString(request.responseText.toString(),"text/xml");
               voi = vois.documentElement.childNodes;

               for (i = 0; i < voi.length; i++)
               {
                  var row = VOITable.insertRow(-1);
                  
                  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
                  var cell1 = row.insertCell(0);
                  var cell2 = row.insertCell(1);
                  var cell3 = row.insertCell(2);
                  var cell4 = row.insertCell(3);
                  var cell5 = row.insertCell(4);
                  var cell6 = row.insertCell(5);
                  var cell7 = row.insertCell(6);
                  var cell8 = row.insertCell(7);

                  // Add some text to the new cells:
                  cell1.innerHTML = vois.getElementsByTagName("licensePlate")[i].childNodes[0].nodeValue;
                  cell2.innerHTML = vois.getElementsByTagName("reason")[(i*2) + 1].childNodes[0].nodeValue;
                  cell3.innerHTML = vois.getElementsByTagName("make")[(i*4)+1].childNodes[0].nodeValue;
                  cell4.innerHTML = vois.getElementsByTagName("model")[(i*2)+1].childNodes[0].nodeValue;
                  cell5.innerHTML = vois.getElementsByTagName("vehYear")[i].childNodes[0].nodeValue;
                  cell6.innerHTML = vois.getElementsByTagName("color")[i].childNodes[0].nodeValue;
                  cell7.innerHTML = vois.getElementsByTagName("ownersName")[i].childNodes[0].nodeValue;
                  cell8.innerHTML = vois.getElementsByTagName("ownersPhone")[i].childNodes[0].nodeValue;
              } // end of for loop
            }  // end of if statement
            console.log(voi)
            toggleButton = document.getElementById("toggleButton");
            VOITable = document.getElementById("VOITable");
            //toggle(toggleButton);
            //request.close();
            //toggle(VOITable) ;
          }; // end of fucntion
    } // end of refreshSales function


 function refreshMake(){  
        // Find a <table> element with id="VOITable":
        document.getElementById("VOITable").style.display = "none"
        document.getElementById("VOIModelTable").style.display = "none"
        document.getElementById("VOIROITable").style.display = "none"
                document.getElementById("VOIMakeTable").style.display = "block"
        var VOIMakeTable = document.getElementById("VOIMakeTable");
        var tableRows = VOIMakeTable.getElementsByTagName('tr');   
        var rowCount = VOIMakeTable.rows.length;
//alert("get tabel");
        for (var r = 1; r < rowCount; r++) {
            VOIMakeTable.deleteRow(-1);
         }
         
        var request = makeHttpObject();
        var xmlDoc;
        var parser;
        var x, i;
        var vois, voi;
        request.open("GET", "http://localhost:8080/VehiclesOfInterestWebServices/webresources/model.vehiclemake", true);
        request.send();
        request.onreadystatechange = function() {

            if (request.readyState == 4)
            {
//alert("data " + request.responseText.toString());                
               parser = new DOMParser();
               vois = parser.parseFromString(request.responseText.toString(),"text/xml");
               voi = vois.documentElement.childNodes;

               for (i = 0; i < voi.length; i++)
               {
                  var row = VOIMakeTable.insertRow(-1);
                  
                  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
                  var cell1 = row.insertCell(0);
                  // Add some text to the new cells:
                  cell1.innerHTML = vois.getElementsByTagName("make")[i].childNodes[0].nodeValue;

              } // end of for loop
            }  // end of if statement
            //request.close();
              
          }; // end of fucntion
    } // end of refreshSales function
    
    function refreshModel(){  
        // Find a <table> element with id="VOITable":
        document.getElementById("VOITable").style.display = "none"
        document.getElementById("VOIModelTable").style.display = "block"
        document.getElementById("VOIROITable").style.display = "none"
        document.getElementById("VOIMakeTable").style.display = "none"
    
        var VOIModelTable = document.getElementById("VOIModelTable");
        var tableRows = VOIModelTable.getElementsByTagName('tr');   
        var rowCount = VOIModelTable.rows.length;
//alert("get tabel");
        for (var r = 1; r < rowCount; r++) {
            VOIModelTable.deleteRow(-1);
         }
         
        var request = makeHttpObject();
        var xmlDoc;
        var parser;
        var x, i;
        var vois, voi;
        request.open("GET", "http://localhost:8080/VehiclesOfInterestWebServices/webresources/model.vehiclemodel", true);
        request.send();
        request.onreadystatechange = function() {

            if (request.readyState == 4)
            {
//alert("data " + request.responseText.toString());                
               parser = new DOMParser();
               vois = parser.parseFromString(request.responseText.toString(),"text/xml");
               voi = vois.documentElement.childNodes;

               for (i = 0; i < voi.length; i++)
               {
                  var row = VOIModelTable.insertRow(-1);
                  
                  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
                  var cell1 = row.insertCell(0);
                  var cell2 = row.insertCell(1);
                  // Add some text to the new cells:
                  cell1.innerHTML = vois.getElementsByTagName("make")[(i*2)+1].childNodes[0].nodeValue;
                  cell2.innerHTML = vois.getElementsByTagName("model")[(i)].childNodes[0].nodeValue;
              } // end of for loop
            }  // end of if statement
            //request.close();
              
          }; // end of fucntion
    } // end of refreshSales function


 function refreshROI(){  
     
     document.getElementById("VOITable").style.display = "none"
        document.getElementById("VOIModelTable").style.display = "none"
        document.getElementById("VOIROITable").style.display = "block"
        document.getElementById("VOIMakeTable").style.display = "none"
        // Find a <table> element with id="VOITable":
        var VOIROITable = document.getElementById("VOIROITable");
        var tableRows = VOIROITable.getElementsByTagName('tr');   
        var rowCount = VOIROITable.rows.length;
//alert("get tabel");
        for (var r = 1; r < rowCount; r++) {
            VOIROITable.deleteRow(-1);
         }
         
        var request = makeHttpObject();
        var xmlDoc;
        var parser;
        var x, i;
        var vois, voi;
        request.open("GET", "http://localhost:8080/VehiclesOfInterestWebServices/webresources/model.reasonforinterest", true);
        request.send();
        request.onreadystatechange = function() {

            if (request.readyState == 4)
            {
//alert("data " + request.responseText.toString());                
               parser = new DOMParser();
               vois = parser.parseFromString(request.responseText.toString(),"text/xml");
               voi = vois.documentElement.childNodes;

               for (i = 0; i < voi.length; i++)
               {
                  var row = VOIROITable.insertRow(-1);
                  
                  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
                  var cell1 = row.insertCell(0);
                  var cell2 = row.insertCell(1);
                  // Add some text to the new cells:
                  cell1.innerHTML = vois.getElementsByTagName("description")[(i)].childNodes[0].nodeValue;
                  cell2.innerHTML = vois.getElementsByTagName("reason")[(i)].childNodes[0].nodeValue;

              } // end of for loop
            }  // end of if statement
            //request.close();
              
          }; // end of fucntion
    } // end of refreshSales function
    
    function clearContent() {
      const myDiv = document.getElementById('outputContainer');
      myDiv.innerHTML = '';
    }
    function toggle(VOITable){
        let isTableVisible = false; 
         if (isTableVisible) {
        VOITable.style.display = 'none'; // Hide the table
      } else {
        VOITable.style.display = 'table'; // Show the table
      }
       isTableVisible === isTableVisible; // Toggle the visibility state
    }
