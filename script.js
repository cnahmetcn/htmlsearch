var x = 0;
var sonuclar = Array();
var kontrol = Array();

function addresult(value, index, self)
{
    self.indexOf(value) === index;
    sonuclar[x] = document.getElementById("search").value; 
    x++;
    var unique = sonuclar.filter(addresult);
    document.getElementById("search").value = "";
 
    var hr = "<hr/>";     
    for (var i=0; i<unique.length; i++)
    {
        hr += unique[i] + "<br/>";
    }
    document.getElementById("results").innerHTML = hr;
}
