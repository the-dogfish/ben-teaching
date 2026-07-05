

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
"00001":{"Name": "Eddie, Old Bob, Dick and Gary","Artist": "Tenpole Tudor","Date": "11/12/2025","Year": "1981","Genres": "Punk, New Wave","Score":"5.5","Stone":"0","Length": "35","bestSong": "Swords Of A Thousand Men","revisited":"N","imageName":"eddie, old bob, dick and gary.jpg","suggester": "","country": "England, Europe","description": "Swords of A Thousand Men' demonstrates that Tenpole Tudor can produce a great song, but the album doesn't have anything else close to that standard. The other singles just don't do it for me."},
"00002":{"Name": "Unreal Unearth: Unaired","Artist": "Hozier","Date": "11/12/2025","Year": "2023","Genres": "Indie, Folk, Soul, Rock","Score":"8.5","Stone":"0","Length": "88","bestSong": "Eat Your Young","revisited":"N","imageName":"unreal unearth.jpg","suggester": "Lucinda","country": "Ireland, Europe","description": "I like this a lot. Feel like I'd like it a bit more, though, if I were a lesbian. "},
"00003":{"Name": "London Calling","Artist": "The Clash(Mick Jones)","Date": "11/12/2025","Year": "1979","Genres": "Punk, Post Punk, New Wave","Score":"8","Stone":"16","Length": "65","bestSong": "London Calling","revisited":"N","imageName":"london calling.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "England, Europe","description": "What a start! So many great songs to choose from, but enough forgettable ones, too. Cut the 19 down to 10 or so, and you've got a perfect album. "},
"00004":{"Name": "Short n' Sweet","Artist": "Sabrina Carpenter(Jack Antonoff)","Date": "12/12/2025","Year": "2024","Genres": "Pop","Score":"8.5","Stone":"0","Length": "36","bestSong": "Espresso","revisited":"Y","imageName":"short n sweet.png","suggester": "","country": "USA, North America","description": "So many excellent tracks - she definitely knows how to write a hook. I'm excited to look through her back catalogue."},
"00005":{"Name": "Various Positions","Artist": "Leonard Cohen","Date": "12/12/2025","Year": "1984","Genres": "Rock, Folk","Score":"8.5","Stone":"0","Length": "35","bestSong": "The Law","revisited":"N","imageName":"various positions.jpg","suggester": "","country": "Canada, North America","description": "I love the tone of this whole album. Cohen's original Hallelujah is almost as good as the version in Shrek 4. 'The Law' and 'Dance Me To The End of Love' are both brilliant."},
"00006":{"Name": "Combat Rock","Artist": "The Clash(Mick Jones)","Date": "12/12/2025","Year": "1982","Genres": "New Wave, Post Punk, Dub, Rock","Score":"7.5","Stone":"0","Length": "46","bestSong": "Rock the Casbah","revisited":"N","imageName":"combat rock.jpg","suggester": "","country": "England, Europe","description": "I feel the same way about Combat Rock as I did about London Calling. So many great tracks, but cutting a few out could make for a perfect album."},
"00007":{"Name": "Soviet Kitsch","Artist": "Regina Spektor","Date": "12/12/2025","Year": "2003","Genres": "Indie, Art Pop","Score":"2.5","Stone":"0","Length": "38","bestSong": "Us","revisited":"N","imageName":"soviet kitsch.jpg","suggester": "","country": "Russia, USA, North America","description": "I have a soft spot for 'Us' so thought I'd give the album a go. I couldn't see the appeal of the mindless repetition and drony singing. Hoping to like some of her other stuff more."},
"00008":{"Name": "Ramones","Artist": "Ramones","Date": "12/12/2025","Year": "1976","Genres": "Punk","Score":"6.5","Stone":"47","Length": "29","bestSong": "Blitzkrieg Bop","revisited":"N","imageName":"ramones.jpg","suggester": "1001 Albums You Must Hear Before You Die","country": "USA, North America","description": "The album carries the same energy as 'Blitzkrieg Bop', but doesn't match the hook. A fun listen, but nothing blew me away."},
"00009":{"Name": "The Good Witch","Artist": "Maisie Peters","Date": "13/12/2025","Year": "2023","Genres": "Pop, Rock","Score":"9.5","Stone":"0","Length": "47","bestSong": "Body Better","revisited":"Y","imageName":"the good witch.jpg","suggester": "","country": "England, Europe","description": "Catchy, referential, and sentimental. Jumps between fast and pop-y to slow and soft seamlessly. Near perfect for me."},
"00010":{"Name": "The Clearing","Artist": "Wolf Alice","Date": "13/12/2025","Year": "2025","Genres": "Indie, Rock","Score":"8","Stone":"0","Length": "40","bestSong": "Bloom Baby Bloom","revisited":"N","imageName":"the clearing.png","suggester": "Lucinda","country": "England, Europe","description": "I like it! Bloom Baby Bloom is such a good song, and the rest of the album does not disappoint!"}

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

    case 'Stone'   : 
      EmpData.sort(function(a,b) {
        aScore = parseInt(a["Stone"]) + 400;
        bScore = parseInt(b["Stone"]) + 400;



        return aScore.toString().localeCompare(bScore.toString());   /*Sort By ROLLING STONE ID*/
      });
    break;

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

    case 'Artist' :
      EmpData.sort(function(a,b) {
        var c = a.Artist;
        var d = b.Artist;

        if (a.Artist.length > 4){
            if (a.Artist[0].toUpperCase() == "T" && a.Artist[1].toUpperCase() == "H" && a.Artist[2].toUpperCase() == "E" && a.Artist[3] == " "){
                c = "";

                for(i = 4; i < a.Artist.length;i++){
                    c+= a.Artist[i];
                }
            }
        }
        if (b.Artist.length > 4){
            if (b.Artist[0].toUpperCase() == "T" && b.Artist[1].toUpperCase() == "H" && b.Artist[2].toUpperCase() == "E" && b.Artist[3] == " "){
                d = "";

                for(i = 4; i < b.Artist.length;i++){
                    d+= b.Artist[i];
                }
            }
        }

        if (a.Artist.length > 3){
            if (a.Artist[0].toUpperCase() == "A" && a.Artist[1] == " "){
                c = "";

                for(i = 2; i < a.Artist.length;i++){
                    c+= a.Artist[i];
                }
            }
        }
        if (b.Artist.length > 3){
            if (b.Artist[0].toUpperCase() == "T" && b.Artist[1] == " "){
                d = "";

                for(i = 2; i < b.Artist.length;i++){
                    d+= b.Artist[i];
                }
            }
        }


        return c.localeCompare(d);  /*Sort By Artist*/
      });
    break;

    case 'Date' :
      EmpData.sort(function(a,b) {
        return a.ID.localeCompare(b.ID);  /*Sort By Date*/
      });
    break;

    case 'Year' :
      EmpData.sort(function(a,b) {
        return a.Year.localeCompare(b.Year);  /*Sort By Year*/
      });
    break;

    case 'Score' :
      EmpData.sort(function(a,b) {
        aScore = a["Score"];
        if (aScore.length == 1 || aScore.length == 3){
            aScore = "0" + aScore;
         }
        bScore = b["Score"];
        if (bScore.length == 1 || bScore.length == 3){
            bScore = "0" + bScore;
         }


        return aScore.localeCompare(bScore);  /*Sort By Rating*/
      });
    break;

    case 'Length' :
      EmpData.sort(function(a,b) {
        aScore = parseInt(a["Length"]) + 400;
        bScore = parseInt(b["Length"]) + 400;



        return aScore.toString().localeCompare(bScore.toString());  /*Sort By Rating*/
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
    Name      = Data[i].Name.toUpperCase() + Data[i].Artist.toUpperCase();  /*Uppercase for Case Insentive*/
    if (Name.indexOf(SearchString)>=0){  /*Search By Name*/
      SearchData[index++] = Data[i];
    }
  }

  //we want to determine if we've matched the extra criteria
  for(i=0; i<SearchData.length; i++){

    if (SortBy == "Stone" && SearchData[i].Stone == "0"){
      continue;
    }

    if (onlyShow == "All"){
        CriteriaData[index2++] = SearchData[i];
    } 
    else if (onlyShowBy == "All"){
        CriteriaData[index2++] = SearchData[i];
    }
    else if (onlyShow == "Recommender" && (SearchData[i].suggester.includes(onlyShowBy) || (SearchData[i].Stone != "0" && onlyShowBy == "Rolling Stone Top 500"))){
        CriteriaData[index2++] = SearchData[i];
    }
    else if (onlyShow == "Artist" && SearchData[i].Artist.includes(onlyShowBy)){
        CriteriaData[index2++] = SearchData[i];
    }
    else if (onlyShow == "Collections"){

      //we run through all the collections
      for (var j=1; j< 1000;j++){
        var numberString = "0".repeat((5-j.toString().length)).toString() + j.toString();

        if (albumCollections[numberString] != null){

            //if the collection is real and valid, then we check if this collection holds the correct name

            if (albumCollections[numberString].CollectionName == onlyShowBy){
              
              //now we run through that collections album numbers

              if (albumCollections.numberString != ""){
                for (var k=0; k< albumCollections[numberString].AlbumNumbers.split(",").length;k++){

                  //if the album number matches the album ID then we're good

                  if (parseInt(albumCollections[numberString].AlbumNumbers.split(",")[k]) == parseInt(SearchData[i].ID)){
                    CriteriaData[index2++] = SearchData[i];
                  }
                }
              }

              if (albumCollections.Artists != ""){
                for (var k=0; k< albumCollections[numberString].Artists.split(",").length;k++){

                  //if the artist match then we're good

                  if (albumCollections[numberString].Artists.split(",")[k].length == 0){
                    break;
                  }

                  if (SearchData[i].Artist.includes(albumCollections[numberString].Artists.split(",")[k])){
                    if (!CriteriaData.includes(SearchData[i])){
                      CriteriaData[index2++] = SearchData[i];
                    }
                  }
                }
              }


            }
        }
      }
    }
    else if (onlyShow == "Month"){
      var yearCorrect = false;
      if (onlyShowBy.includes("2025") && SearchData[i].Date.split("/")[2].includes("2025")){
          yearCorrect = true;
      }
      else if (onlyShowBy.includes("2026") && SearchData[i].Date.split("/")[2].includes("2026")){
          yearCorrect = true;
      }

      var monthCorrect = false;

      if (onlyShowBy.includes("January") && SearchData[i].Date.split("/")[1].includes("01")){
        monthCorrect = true;
      }
      else if (onlyShowBy.includes("February") && SearchData[i].Date.split("/")[1].includes("02")){
        monthCorrect = true;
      }
      else if (onlyShowBy.includes("March") && SearchData[i].Date.split("/")[1].includes("03")){
        monthCorrect = true;
      }
      else if (onlyShowBy.includes("April") && SearchData[i].Date.split("/")[1].includes("04")){
        monthCorrect = true;
      }
      else if (onlyShowBy.includes("May") && SearchData[i].Date.split("/")[1].includes("05")){
        monthCorrect = true;
      }
      else if (onlyShowBy.includes("June") && SearchData[i].Date.split("/")[1].includes("06")){
        monthCorrect = true;
      }
      else if (onlyShowBy.includes("July") && SearchData[i].Date.split("/")[1].includes("07")){
        monthCorrect = true;
      }
      else if (onlyShowBy.includes("August") && SearchData[i].Date.split("/")[1].includes("08")){
        monthCorrect = true;
      }
      else if (onlyShowBy.includes("September") && SearchData[i].Date.split("/")[1].includes("09")){
        monthCorrect = true;
      }
      else if (onlyShowBy.includes("October") && SearchData[i].Date.split("/")[1].includes("10")){
        monthCorrect = true;
      }
      else if (onlyShowBy.includes("November") && SearchData[i].Date.split("/")[1].includes("11")){
        monthCorrect = true;
      }
      else if (onlyShowBy.includes("December") && SearchData[i].Date.split("/")[1].includes("12")){
        monthCorrect = true;
      }

      if (yearCorrect && monthCorrect){
        CriteriaData[index2++] = SearchData[i];
      }
    }
    else if (onlyShow == "Decade"){
        var lowerBound = 1940;
        var upperBound = 2025;
        if (onlyShowBy.includes("1940")){
            lowerBound = 1940;
            upperBound = 1950;
        }
        else if (onlyShowBy.includes("1950")){
            lowerBound = 1950;
            upperBound = 1960;
        }
        else if (onlyShowBy.includes("1960")){
            lowerBound = 1960;
            upperBound = 1970;
        }
        else if (onlyShowBy.includes("1970")){
            lowerBound = 1970;
            upperBound = 1980;
        }
        else if (onlyShowBy.includes("1980")){
            lowerBound = 1980;
            upperBound = 1990;
        }
        else if (onlyShowBy.includes("1990")){
            lowerBound = 1990;
            upperBound = 2000;
        }   
        else if (onlyShowBy.includes("2000")){
            lowerBound = 2000;
            upperBound = 2010;
        }       
        else if (onlyShowBy.includes("2010")){
            lowerBound = 2010;
            upperBound = 2020;
        }
        else if (onlyShowBy.includes("2020")){
            lowerBound = 2020;
            upperBound = 2030;
        }

        if (Number(SearchData[i].Year) < upperBound && lowerBound <= Number(SearchData[i].Year)){
            CriteriaData[index2++] = SearchData[i];
        }


    }
    else if (onlyShow == "Genre" && SearchData[i].Genres.includes(onlyShowBy)){
        CriteriaData[index2++] = SearchData[i];
    }
    else if (onlyShow == "Country" && SearchData[i].country.includes(onlyShowBy)){
        CriteriaData[index2++] = SearchData[i];
    }
    else if (onlyShow == "Revisited" && ((SearchData[i].revisited.includes("Y") && onlyShowBy == "Have Revisited") || (SearchData[i].revisited.includes("N") && onlyShowBy == "Have Not Revisited"))){
        CriteriaData[index2++] = SearchData[i];
    }
  }

  display(CriteriaData);  /*Display Sorting Data*/
}

/*THIS CONTROLS CREATING THE DROPDOWN MENUS, such as the list of artists*/
function displayDropdown(){

    var SearchString  = $('#search').val().toUpperCase();  /*Uppercase for Case Insentive*/
    var SortBy        = $('#sort').val();
    var dirSort       = $('#order').is(":checked");
    var onlyShow      = $('#displayType').val();
    var Data          = sorting(AlbumArray,SearchString,SortBy,dirSort);
    var onlyShow = $('#displayType').val();
    var html2 = '';
    //this part controls the show by artist/suggester/decade choosing section
    html2 = '<div class="control">Sort: <select name="onlyShowBy" id="onlyShowBy" onchange="searching()" class="standardText">';

    //we want to create a list of all artists, or people, or decades, or whatever and create a list of all unique ones
    const listOfOptions = [];
    const listOfOptionsNums = [];
    var checkShow = true;

    if (onlyShow == "Artist"){
      for (var i=0; i<extraArtists.length;i++)
        {
          listOfOptions.push(extraArtists[i]);
        }
    }

    if (onlyShow == "Recommender"){
            listOfOptions.push("Rolling Stone Top 500");
    }

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


        
        if (onlyShow == "Recommender"){
            if (!listOfOptions.includes(Data[i].suggester.split("(")[0]) && Data[i].suggester.length > 0){
                listOfOptions.push(Data[i].suggester.split("(")[0]);
            }
        }

        if (onlyShow == "All"){
            checkShow = false;
            break;
        }

        if (onlyShow == "Artist"){
            if (!listOfOptions.includes($.trim(Data[i].Artist.split("(")[0]))){
                var artistName = $.trim(Data[i].Artist.split("(")[0]);

                if (artistName.includes(",")){
                  for (var j=0; j < artistName.split(",").length; j++){
                    if(!listOfOptions.includes($.trim(artistName.split(",")[j]))){
                      listOfOptions.push($.trim(artistName.split(",")[j]));
                    }
                  }
                }
                else{
                      listOfOptions.push(artistName);
                }
            }
        }

        if (onlyShow == "Month"){
            listOfOptions.push.apply(listOfOptions,buildCleverMonths());
            break;
        }

        if (onlyShow == "Revisited"){
            listOfOptions.push("Have Revisited");
            listOfOptions.push("Have Not Revisited");
            break;
        }

        if (onlyShow == "Decade"){
            listOfOptions.push("1940's");
            listOfOptions.push("1950's");
            listOfOptions.push("1960's");
            listOfOptions.push("1970's");
            listOfOptions.push("1980's");
            listOfOptions.push("1990's");
            listOfOptions.push("2000's");
            listOfOptions.push("2010's");
            listOfOptions.push("2020's");
            break;
        }

        if (onlyShow == "Genre"){
            var myString =  Data[i].Genres.replace(", ",",").replace(" ,",",");
            var myArray = myString.split(",");
            
            
            for (var k=0; k<Data.length;k++){

                let myGenre = myArray[k];
                
                if (!listOfOptions.includes($.trim(myGenre))){
                    listOfOptions.push($.trim(myGenre));
                }
            }
        }

        if (onlyShow == "Country"){
            var myString =  Data[i].country.replace(", ",",").replace(" ,",",");
            var myArray = myString.split(",");
            
            for (var k=0; k<Data.length;k++){

              let myCountry = myArray[k];

                if (!listOfOptions.includes($.trim(myCountry))){
                    listOfOptions.push($.trim(myCountry));
                }
            }
        }
    }

    if (onlyShow != "Month"){
           listOfOptions.sort(function(a,b) {

          var c = a;
          var d = b;

        if (a.length > 4){
            if (a[0].toUpperCase() == "T" && a[1].toUpperCase() == "H" && a[2].toUpperCase() == "E" && a[3] == " "){
                c = "";

                for(i = 4; i < a.length;i++){
                    c+= a[i];
                }
            }
        }
        if (b.length > 4){
            if (b[0].toUpperCase() == "T" && b[1].toUpperCase() == "H" && b[2].toUpperCase() == "E" && b[3] == " "){
                d = "";

                for(i = 4; i < b.length;i++){
                    d+= b[i];
                }
            }
        }

        if (a.length > 3){
            if (a[0].toUpperCase() == "A" && a[1] == " "){
                c = "";

                for(i = 2; i < a.length;i++){
                    c+= a[i];
                }
            }
        }
        if (b.length > 3){
            if (b[0].toUpperCase() == "T" && b[1] == " "){
                d = "";

                for(i = 2; i < b.length;i++){
                    d+= b[i];
                }
            }
        }


        return c.localeCompare(d);/*Sort By Alphabetical*/
      });
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
            if (onlyShow == "Recommender"){
              if (Data[j].suggester.includes(listOfOptions[i]) || (listOfOptions[i] == "Rolling Stone Top 500" && Data[j].Stone != "0")){
                counter++;
              }
            }
            else if (onlyShow == "Artist"){
              if (Data[j].Artist.includes(listOfOptions[i])){
                counter++;
              }
            }
            else if (onlyShow == "Genre"){
              if (Data[j].Genres.includes(listOfOptions[i])){
                counter++;
              }
            }
            else if (onlyShow == "Country"){
              if (Data[j].country.includes(listOfOptions[i])){
                counter++;
              }
            }
            else if (onlyShow == "Month"){
              var yearCorrect = false;
              if (listOfOptions[i].includes("2025") && Data[j].Date.split("/")[2].includes("2025")){
                yearCorrect = true;
              }
              else if (listOfOptions[i].includes("2026") && Data[j].Date.split("/")[2].includes("2026")){
              yearCorrect = true;
              }

              var monthCorrect = false;

      if (listOfOptions[i].includes("January") && Data[j].Date.split("/")[1].includes("01")){
        monthCorrect = true;
      }
      else if (listOfOptions[i].includes("February") && Data[j].Date.split("/")[1].includes("02")){
        monthCorrect = true;
      }
      else if (listOfOptions[i].includes("March") && Data[j].Date.split("/")[1].includes("03")){
        monthCorrect = true;
      }
      else if (listOfOptions[i].includes("April") && Data[j].Date.split("/")[1].includes("04")){
        monthCorrect = true;
      }
      else if (listOfOptions[i].includes("May") && Data[j].Date.split("/")[1].includes("05")){
        monthCorrect = true;
      }
      else if (listOfOptions[i].includes("June") && Data[j].Date.split("/")[1].includes("06")){
        monthCorrect = true;
      }
      else if (listOfOptions[i].includes("July") && Data[j].Date.split("/")[1].includes("07")){
        monthCorrect = true;
      }
      else if (listOfOptions[i].includes("August") && Data[j].Date.split("/")[1].includes("08")){
        monthCorrect = true;
      }
      else if (listOfOptions[i].includes("September") && Data[j].Date.split("/")[1].includes("09")){
        monthCorrect = true;
      }
      else if (listOfOptions[i].includes("October") && Data[j].Date.split("/")[1].includes("10")){
        monthCorrect = true;
      }
      else if (listOfOptions[i].includes("November") && Data[j].Date.split("/")[1].includes("11")){
        monthCorrect = true;
      }
      else if (listOfOptions[i].includes("December") && Data[j].Date.split("/")[1].includes("12")){
        monthCorrect = true;
      }

      if (yearCorrect && monthCorrect){
        counter++;
      }
            }
            else if (onlyShow == "Decade"){
        var lowerBound = 1940;
        var upperBound = 2025;
        if (listOfOptions[i].includes("1940")){
            lowerBound = 1940;
            upperBound = 1950;
        }
        else if (listOfOptions[i].includes("1950")){
            lowerBound = 1950;
            upperBound = 1960;
        }
        else if (listOfOptions[i].includes("1960")){
            lowerBound = 1960;
            upperBound = 1970;
        }
        else if (listOfOptions[i].includes("1970")){
            lowerBound = 1970;
            upperBound = 1980;
        }
        else if (listOfOptions[i].includes("1980")){
            lowerBound = 1980;
            upperBound = 1990;
        }
        else if (listOfOptions[i].includes("1990")){
            lowerBound = 1990;
            upperBound = 2000;
        }   
        else if (listOfOptions[i].includes("2000")){
            lowerBound = 2000;
            upperBound = 2010;
        }       
        else if (listOfOptions[i].includes("2010")){
            lowerBound = 2010;
            upperBound = 2020;
        }
        else if (listOfOptions[i].includes("2020")){
            lowerBound = 2020;
            upperBound = 2030;
        }

        if (Number(Data[j].Year) < upperBound && lowerBound <= Number(Data[j].Year)){
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

/*THIS DISPLAYS THE ALBUMS, AND THE STATS*/
function display(Data){
    var html = '';
     var devMode = $('#devm').is(":checked");
  //this part controls the display of albums
  for(var i=0; i<Data.length;i++){
    html+='<div class="album album_' + (i % 7).toString() + '">';
    html += '<img class="albumCover" src="./images/albums/' + Data[i].imageName + '" alt="' + Data[i].Name + ' Album Cover"></img>';

    if (devMode){
      html+='<p class="name">'+Data[i].Name+ ' (' + Data[i].Year + ') - ID: ' + Data[i].ID + '</p>';
    }
    else{
      html+='<p class="name">'+Data[i].Name+ ' (' + Data[i].Year + ')</p>';
    }

      

      var artistName = Data[i].Artist.split("(")[0];


      html+='<p class="artist">'+artistName+'</p>';
      html+='<p class="standardText"> Date: '+Data[i].Date+'</p>';
      html+='<p class="standardText"> Best Song: '+Data[i].bestSong+'</p>';

      var stoneDisplayed = false;

      if (recentSortBy == "Stone" || (recentOnlyShow == "Recommender" && recentOnlyShowBy == "Rolling Stone Top 500")){
        html+='<p class="standardText"> Rolling Stone Placement: '+ Data[i].Stone +'</p>';
        stoneDisplayed = true;
      }

      var lengthHours = Math.floor(parseFloat(Data[i].Length) / 60);
      var lengthMinutes = parseFloat(Data[i].Length) - (60 * lengthHours);

      var lengthText = lengthMinutes + ' Minutes';

      if (lengthHours == 1){
        lengthText = '1 Hour ' + lengthText;
      }
      else if (lengthHours > 1){
        lengthText = lengthHours + ' Hours ' + lengthText;
      }

      if (lengthMinutes == 0){
        if (lengthHours == 1){
            lengthText = '1 Hour ';
           }
        else if (lengthHours > 1){
          lengthText = lengthHours + ' Hours';
          }
      }

      if ((Data[i].description.length > 290 && Data[i].suggester.length > 0) || stoneDisplayed){
        html+='<p class="standardText"> Score: '+Data[i].Score+ ' and Length: ' + lengthText;
      }
      else{
      html+='<p class="standardText"> Score: '+Data[i].Score+'/10</p>';
      html+='<p class="standardText"> Length: '+ lengthText;
      }
      if (Data[i].suggester.length > 0){
        html+='<p class="standardText"> Recommended By: '+Data[i].suggester.split("(")[0]+'</p>';
      }
    html+='<p class="boldText">'+Data[i].description+'</p>';
    html+='</div>';
  };
  $('#albums').html(html);


  /*Display some info about what is currently being displayed*/
  var SearchString  = $('#search').val().toUpperCase();  /*Uppercase for Case Insentive*/
  var SortBy        = $('#sort').val();
  var dirSort       = $('#order').is(":checked");
  var DataFull          = sorting(AlbumArray,SearchString,SortBy,dirSort);
  var albumCount = '<p>Displaying ' + Data.length + "/" + DataFull.length + " Albums\nMean Score: ";


  var totalScore = 0;
  var sumForVariance = 0;
  var lowestValue = 10;
  var highestValue = 0;

  var totalLength = 0;

  const allScores = [];
  for(i=0; i<Data.length; i++){
    totalScore += Number(Data[i].Score);
    totalLength += Number(Data[i].Length);
    allScores.push(Data[i].Score);

    if (lowestValue > Number(Data[i].Score)){
      lowestValue = Number(Data[i].Score);
    }
    if (highestValue < Number(Data[i].Score)){
      highestValue = Number(Data[i].Score);
    }
  }

  for(i=0; i<Data.length; i++){
    sumForVariance += (Math.pow(Number(Data[i].Score) - totalScore / Data.length,2)) / Data.length;

  }


  
  if (Data.length == 0){
    $('#albumCount').html('<p>Displaying ' + Data.length + "/" + DataFull.length + ' Albums <\p>');

    $('#stats').html('<p><\p>');
    return;
  }
  const mode = Array.from(new Set(allScores)).reduce((prev, curr) => allScores.filter(el => el === curr).length > allScores.filter(el => el === prev).length ? curr : prev);


  //turns the total length into a nicely worded thing
    var totalLengthHours = Math.floor(parseFloat(totalLength) / 60);
    var totalLengthMinutes = parseFloat(totalLength) - (60 * totalLengthHours);
    var totalLengthDays = Math.floor(totalLengthHours / 24);

    totalLengthHours = totalLengthHours - totalLengthDays * 24;

      var totalLengthText = totalLengthMinutes + ' Minutes';

      if (totalLengthHours == 1){
        totalLengthText = '1 Hour ' + totalLengthText;
      }
      else if (totalLengthHours > 1){
        totalLengthText = totalLengthHours + ' Hours ' + totalLengthText;
      }

      if (totalLengthMinutes == 0){
        if (totalLengthHours == 1){
            totalLengthText = '1 Hour ';
           }
        else if (totalLengthHours > 1){
          totalLengthText = totalLengthHours + ' Hours';
          }
      }

      if (totalLengthDays == 1){
        totalLengthText = '1 Day ' + totalLengthText;
      }
      else if (totalLengthDays > 1){
        totalLengthText = totalLengthDays + ' Days ' + totalLengthText;
      }


    if (devMode){
    albumCount +=  (Math.round(totalScore * 100 / Data.length)/100).toString() + '\nTotal Length: ' + totalLengthText  + "<\p>";
  }
  else{
    albumCount +=  (Math.round(totalScore * 100 / Data.length)/100).toString() + "<\p>";
  }
  stats = "<p>Mean Score: " + (Math.round(totalScore * 100 / Data.length)/100).toString() + "<p>";
  stats += "<p>Standard Deviation: " + (Math.round(Math.sqrt(sumForVariance) * 100)/100).toString() + "<p>";
  stats += "<p>Lowest Score: " + (lowestValue).toString() + "<p>";
  stats += "<p>Highest Score: " + (highestValue).toString() + "<p>";
  stats += "<p>Modal Score: " + (mode).toString() + "<p>";
  stats += "<p>PCC (Year:Score): " + (calculatePCC(Data)).toString() + "<p>";

  if (Data.length == 0){
    stats = "";
  }

  $('#albumCount').html(albumCount);

  $('#stats').html(stats);
}

function delayedSearching(){
  setTimeout(function() { searching(); }, 50);
}

function calculatePCC(Data){
  var sumX = 0;
  var sumY = 0;
  var sumXY = 0;
  var sumXSquare = 0;
  var sumYSquare = 0;

  for (var i=0; i<Data.length;i++)
  {
    sumX += Number(Data[i].Year);
    sumY += Number(Data[i].Score);
    sumXY += (Number(Data[i].Year) * Number(Data[i].Score));
    sumXSquare += Number(Data[i].Year) * Number(Data[i].Year);
    sumYSquare += Number(Data[i].Score) * Number(Data[i].Score);
  }

  return (Math.round(100 * (Data.length * sumXY - sumX * sumY)/Math.sqrt((Data.length * sumXSquare - sumX * sumX) * (Data.length * sumYSquare - sumY * sumY)))/100);
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

/*THIS WORKS OUT WHAT MONTHS I HAVE LISTENED TO ALBUMS IN*/
function buildCleverMonths(){
  const listOfOptions = [];
  for(i=2025; i< 2050; i++){
    for(j=1; j< 13; j++){
      var month = "";
      if (j == 1){
        month = "January";
      }
      else if (j == 2){
        month = "February";
      }
      else if (j == 3){
        month = "March";
      }
      else if (j == 4){
        month = "April";
      }
      else if (j == 5){
        month = "May";
      }
      else if (j == 6){
        month = "June";
      }
      else if (j == 7){
        month = "July";
      }
      else if (j == 8){
        month = "August";
      }
      else if (j == 9){
        month = "September";
      }
      else if (j == 10){
        month = "October";
      }
      else if (j == 11){
        month = "November";
      }
      else if (j == 12){
        month = "December";
      }

      var bothCorrect = false;
      for(k=0; k< AlbumArray.length; k++){
          var yearCorrect = false;
      if (AlbumArray[k].Date.split("/")[2].includes(i)){
          yearCorrect = true;
      }

      var monthCorrect = false;

      if (month.includes("January") && AlbumArray[k].Date.split("/")[1].includes("01")){
        monthCorrect = true;
      }
      else if (month.includes("February") && AlbumArray[k].Date.split("/")[1].includes("02")){
        monthCorrect = true;
      }
      else if (month.includes("March") && AlbumArray[k].Date.split("/")[1].includes("03")){
        monthCorrect = true;
      }
      else if (month.includes("April") && AlbumArray[k].Date.split("/")[1].includes("04")){
        monthCorrect = true;
      }
      else if (month.includes("May") && AlbumArray[k].Date.split("/")[1].includes("05")){
        monthCorrect = true;
      }
      else if (month.includes("June") && AlbumArray[k].Date.split("/")[1].includes("06")){
        monthCorrect = true;
      }
      else if (month.includes("July") && AlbumArray[k].Date.split("/")[1].includes("07")){
        monthCorrect = true;
      }
      else if (month.includes("August") && AlbumArray[k].Date.split("/")[1].includes("08")){
        monthCorrect = true;
      }
      else if (month.includes("September") && AlbumArray[k].Date.split("/")[1].includes("09")){
        monthCorrect = true;
      }
      else if (month.includes("October") && AlbumArray[k].Date.split("/")[1].includes("10")){
        monthCorrect = true;
      }
      else if (month.includes("November") && AlbumArray[k].Date.split("/")[1].includes("11")){
        monthCorrect = true;
      }
      else if (month.includes("December") && AlbumArray[k].Date.split("/")[1].includes("12")){
        monthCorrect = true;
      }

      if (yearCorrect && monthCorrect){
        bothCorrect = true;
        break;
      }
      }

      if (bothCorrect){
        listOfOptions.push(month + " " + i);
      }
  
    }
  
  }

  return listOfOptions;
}