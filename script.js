var x = 0;
var sonuclar = Array();
var kontrol = Array();

function addresult()
{
    
    sonuclar[x] = document.getElementById("search").value; 
    x++;
    document.getElementById("search").value = "";
 
    var hr = "<hr/>";     
    for (var i=0; i<sonuclar.length; i++)
    {
        hr += sonuclar[i] + "<br/>";
    }
    document.getElementById("results").innerHTML = hr;
}
