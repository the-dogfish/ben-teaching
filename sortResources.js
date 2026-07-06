

var albumCollections = {
  
"00001":{"CollectionName": "Fruits and Veggies","AlbumNumbers": "289,335,348", "Artists": ""},
"00002":{"CollectionName": "Take That & Co.","AlbumNumbers": "", "Artists": "Take That,Robbie Williams,Mark Owen,Gary Barlow,Jason Orange,Howard Donald"},
"00003":{"CollectionName": "The Beatles & Co.","AlbumNumbers": "", "Artists": "The Beatles,Paul MacCartney,Ringo Starr,John Lennon,George Harrison"},
"00004":{"CollectionName": "Lesser Known Recommendations","AlbumNumbers": "58,191,314,322,334,335", "Artists": ""},
"00005":{"CollectionName": "Albums Mostly About Sex","AlbumNumbers": "111,44,545", "Artists": ""},
"00006":{"CollectionName": "The Velvet Underground & Co.","AlbumNumbers": "", "Artists": "Nico,Velvet Underground,Lou Reed"},
"00007":{"CollectionName": "The Buckleys","AlbumNumbers": "", "Artists": "Tim Buckley,Jeff Buckley"},
"00008":{"CollectionName": "The Byrds & Co.","AlbumNumbers": "", "Artists": "The Byrds,Gene Clark,David Crosby,Michael Clarke,Chris Hillman,Roger McGuinn"},
"00009":{"CollectionName": "The Housemartins & Co.","AlbumNumbers": "", "Artists": "The Housemartins,The Beautiful South,Fatboy Slim,Norman Cook,Paul Heaton"},
"00010":{"CollectionName": "BC Camplight & Co.","AlbumNumbers": "", "Artists": "BC Camplight,Dilettante"},
}

var albumsById = {
"00001":{"Name": "Ordering Numbers","Umbrella":  "Number","Lesson": "","Exericses": "Ordering_Numbers_Worksheet","Colouring": "","Description": "Ordering positive and negative integers, decimals and fractions."},
"00002":{"Name": "Understanding Inequalities","Umbrella":  "Number","Lesson": "","Exericses": "Understanding_Inequalities_Worksheet","Colouring": "","Description": "Understanding and using the symbols for equal, not equal, less than, greater than, strictly less than, and strictly greater than (=, ≠, ≤, ≥, <, >)."},
};



/*ADD PRODUCERS, BAND MEMBERS, ETC HERE (if you want them to show up as a search option)*/
var extraArtists = ["Jack Antonoff", "Max Martin","Mick Jones","Tom Petty","Ian McDonald"];

var recentSortBy = "";
var recentOnlyShow = "";
var recentOnlyShowBy = "";

var AlbumArray = Object.keys(albumsById).map(function(v) {
  return $.extend({ ID: v }, albumsById[v]);
});

display(AlbumArray);  /*Display All AlbumArray data */

/*THIS CONTROLS SORTING, I.E. SORT BY YEAR, OR SORT BY ARTIST (alphabetical)*/
function sorting(EmpData,SearchString='',SortBy='ID',dirSort){
  switch(SortBy){

    case 'ID'   : 
      EmpData.sort(function(a,b) {
        return a.ID.localeCompare(b.ID);  /*Sort By ID something is wrong with this?*/
      });
    break;

    case 'Name' :
      EmpData.sort(function(a,b) {
        var c = a.Name;
        var d = b.Name;

        if (a.Name.length > 4){
            if (a.Name[0].toUpperCase() == "T" && a.Name[1].toUpperCase() == "H" && a.Name[2].toUpperCase() == "E" && a.Name[3] == " "){
                c = "";

                for(i = 4; i < a.Name.length;i++){
                    c+= a.Name[i];
                }
            }
        }
        if (b.Name.length > 4){
            if (b.Name[0].toUpperCase() == "T" && b.Name[1].toUpperCase() == "H" && b.Name[2].toUpperCase() == "E" && b.Name[3] == " "){
                d = "";

                for(i = 4; i < b.Name.length;i++){
                    d+= b.Name[i];
                }
            }
        }

        if (a.Name.length > 3){
            if (a.Name[0].toUpperCase() == "A" && a.Name[1] == " "){
                c = "";

                for(i = 2; i < a.Name.length;i++){
                    c+= a.Name[i];
                }
            }
        }
        if (b.Name.length > 3){
            if (b.Name[0].toUpperCase() == "T" && b.Name[1] == " "){
                d = "";

                for(i = 2; i < b.Name.length;i++){
                    d+= b.Name[i];
                }
            }
        }


        return c.localeCompare(d);  /*Sort By Name*/
      });
    break;

    default     :
      /*Silent is golden*/
    break; 
  }

    if (dirSort){
        return EmpData.reverse();
    }
    else{
        return EmpData;
    }

}


/*THIS CONTROLS SEARCHING, AND EXTRA CRITERIA LIKE 'ARTIST -> THE CLASH'*/
function searching(){
  var SearchString  = $('#search').val().toUpperCase();  /*Uppercase for Case Insentive*/
  var SortBy        = $('#sort').val();
  var dirSort       = $('#order').is(":checked");
  var devMode       = $('#order').is(":checked");
  var onlyShow      = $('#displayType').val();
  var Data          = sorting(AlbumArray,SearchString,SortBy,dirSort);
  var SearchData    = [];
  var CriteriaData    = [];
  var index         = 0;
  var index2        = 0;
  var Name          = '';
  recentSortBy = SortBy;
      recentOnlyShow = onlyShow;

  var onlyShowBy   = $('#onlyShowBy').val();
      recentOnlyShowBy = onlyShowBy;

  //this determines if we've matched the search
  for(i=0; i<Data.length; i++){
    Name      = Data[i].Name.toUpperCase();  /*Uppercase for Case Insentive*/
    if (Name.indexOf(SearchString)>=0){  /*Search By Name*/
      SearchData[index++] = Data[i];
    }
  }

  //we want to determine if we've matched the extra criteria
  for(i=0; i<SearchData.length; i++){

    if (onlyShow == "All"){
        CriteriaData[index2++] = SearchData[i];
    } 
    else if (onlyShowBy == "All"){
        CriteriaData[index2++] = SearchData[i];
    }
    else if (onlyShow == "Area" && (SearchData[i].Umbrella.includes(onlyShowBy))){
        CriteriaData[index2++] = SearchData[i];
    }
  }

  display(CriteriaData);  /*Display Sorting Data*/
}

/*THIS CONTROLS CREATING THE DROPDOWN MENUS, such as the list of topics*/
function displayDropdown(){

    var SearchString  = $('#search').val().toUpperCase();  /*Uppercase for Case Insentive*/
    var SortBy        = $('#sort').val();
    var dirSort       = $('#order').is(":checked");
    var onlyShow      = $('#displayType').val();
    var Data          = sorting(AlbumArray,SearchString,SortBy,dirSort);
    var onlyShow = $('#displayType').val();
    var html2 = '';
    //this part controls the show by topic/resource choosing section
    html2 = '<div class="control">Sort: <select name="onlyShowBy" id="onlyShowBy" onchange="searching()" class="standardText">';

    //we want to create a list of all topics, or whatever and then remove all duplicates
    const listOfOptions = [];
    const listOfOptionsNums = [];
    var checkShow = true;

    //not sure if I need this or not
    if (onlyShow == "Collections"){
      for (var i=1; i< 1000;i++){
        var numberString = "0".repeat((5-i.toString().length)).toString() + i.toString();

        if (albumCollections[numberString] != null){
                  listOfOptions.push(albumCollections[numberString].CollectionName);
                }   
        else{
          break;
        }
      }
    }


    for (var i=0; i<Data.length;i++){


        
        if (onlyShow == "Area"){
            if (!listOfOptions.includes(Data[i].Umbrella)){
                listOfOptions.push(Data[i].Umbrella);
            }
        }

        if (onlyShow == "All"){
            checkShow = false;
            break;
        }
    }

    for (var i=0; i<listOfOptions.length;i++){

          var counter = 0;

          if (onlyShow == "Collections"){
                  for (var k=1; k< 1000;k++){
                  var numberString = "0".repeat((5-k.toString().length)).toString() + k.toString();

                  if (albumCollections[numberString] != null){
                    if (albumCollections[numberString].CollectionName == listOfOptions[i]){

                        //we now know that this is the correct collection - this is where to put in the code to count number of albums etc

                        counter = albumCollections[numberString].AlbumNumbers.split(",").length;
                    }
                  }
            }
            listOfOptionsNums.push(counter);
            continue;
          }

          for (var j=0; j<Data.length;j++){

            if (onlyShow == "Area"){
              if (Data[j].Umbrella.includes(listOfOptions[i])){
                counter++;
              }
            }
            


          }
          listOfOptionsNums.push(counter);
    }


      listOfOptions.unshift("All");
      listOfOptionsNums.unshift(0);

        for(var i=0; i<listOfOptions.length;i++){
        if (listOfOptions[i].length > 0)
        {
          if (i != 0){
            html2 += '<option value="' + listOfOptions[i] + '" class="standardText">' + listOfOptions[i] + ' (' + listOfOptionsNums[i] + ') </option>';
          }
          else{
            html2 += '<option value="' + listOfOptions[i] + '" class="standardText">' + listOfOptions[i] + '</option>';
          }
          
        }
        }


    html2 += '</select> </div>';
    if (checkShow)
    {
        $('#choosers').html(html2);//now we push this
    }
    else
    {
        $('#choosers').html("");
    }
}

/*THIS DISPLAYS THE TOPICS*/
function display(Data){
    var html = '';
     var devMode = $('#devm').is(":checked");
  //this part controls the display of albums
  for(var i=0; i<Data.length;i++){
    html+='<div class="album album_' + (i % 7).toString() + '">';//determines which border we give this topic

    if (devMode){
      html+='<p class="name">'+Data[i].Name+ ' - ID: ' + Data[i].ID + '</p>';
    }
    else{
      html+='<p class="name">'+Data[i].Name+ '</p>';
    }

      html+='<p class="artist">Topic: '+Data[i].Umbrella+'</p>';

      html+='<p class="boldText">'+Data[i].Description+'</p>';
      if (Data[i].Exericses.length >= 1){
              html += '<button type="submit" onclick="window.open(\'pdfs/' + Data[i].Exericses + '.pdf\')">Open Worksheet</button>'
      }
      html+='</div>';
  };
  $('#albums').html(html);

  /*Display some info about what is currently being displayed*/
  var SearchString  = $('#search').val().toUpperCase();  /*Uppercase for Case Insentive*/
  var SortBy        = $('#sort').val();
  var dirSort       = $('#order').is(":checked");
  var DataFull          = sorting(AlbumArray,SearchString,SortBy,dirSort);
  var albumCount = '<p>Displaying ' + Data.length + "/" + DataFull.length + " Topics";

  //const mode = Array.from(new Set(allScores)).reduce((prev, curr) => allScores.filter(el => el === curr).length > allScores.filter(el => el === prev).length ? curr : prev);


  $('#albumCount').html(albumCount);

}

function delayedSearching(){
  setTimeout(function() { searching(); }, 50);
}



$('#search').keyup(function(){  /*Live Search, When Pressing any Keys*/
  searching();
});

$('#sort').change(function(){  /*Live Search, When Sort by*/
  searching();
});

$('#order').change(function(){  /*Live Search, When Toggle Button*/
  searching();
});

$('#devm').change(function(){  /*Live Search, When Toggle Button*/
  searching();
});

$('#displayType').change(function(){  /*Live Search, When Toggle Button*/
  displayDropdown();
});

$('#onlyShowBy').change(function(){  /*Live Search, When Toggle Button*/
  displayDropdown();
  recentOnlyShowBy = onlyShowBy;
});


function changeSortDirection(){
    const direction_button = document.getElementById("direction_button");
    if (direction_button.innerHTML == "↑"){
        direction_button.innerHTML = "↓";
    }
    if (direction_button.innerHTML == "↓"){
        direction_button.innerHTML = "↑";
    }
}