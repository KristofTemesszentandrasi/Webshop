window.addEventListener("load",Window_Load_Handler,false);

function Window_Load_Handler()
     {
     var nodeButtonFeltolt=document.querySelector("#butFeltolt");
     nodeButtonFeltolt.addEventListener('click', ButFeltolt_Click_Handler, false);
     var nodeButtonKosarba=document.querySelector("#butKosarba");
     nodeButtonKosarba.addEventListener('click', ButKosarba_Click_Handler, false);
     var nodeButtonKiveszem=document.querySelector("#butKiveszem");
     nodeButtonKiveszem.addEventListener('click', ButKiveszem_Click_Handler, false);
     var nodeButtonTorles=document.querySelector("#butTorles");
     nodeButtonTorles.addEventListener('click', ButTorles_Click_Handler, false);
     var btnVasarlas=document.querySelector("#butVasarlas");
     btnVasarlas.addEventListener("click",ButVasarlas_Click_Handler,false);
     var aruIdSorrend=document.querySelector("#aruID");
     aruIdSorrend.addEventListener("click",AruId_Click_Handler,false);
     var aruNeveSorrend=document.querySelector("#aruNeve");
     aruNeveSorrend.addEventListener("click",AruNeve_Click_Handler,false);
     var aruAraSorrend=document.querySelector("#aruAra");
     aruAraSorrend.addEventListener("click",AruAra_Click_Handler,false);
     var aruIdFordSorrend=document.querySelector("#idForditottSorrendezo");
     aruIdFordSorrend.addEventListener("click",AruIdFord_Click_Handler,false);
     var aruNeveFordSorrend=document.querySelector("#NevForditottSorrendezo");
     aruNeveFordSorrend.addEventListener("click",AruNeveFord_Click_Handler,false);
     var aruAraFordSorrend=document.querySelector("#ArForditottSorrendezo");
     aruAraFordSorrend.addEventListener("click",AruAraFord_Click_Handler,false);
     var Sorrendvisszaallito=document.querySelector("#Sorrendvisszaallito");
     Sorrendvisszaallito.addEventListener("click",SorrendVissza_Click_Handler,false);
     var btnKereses=document.querySelector("#btnKereses");
     btnKereses.addEventListener("click",btnKereses_Click_Handler,false);
     }
         
     function ButFeltolt_Click_Handler()
    {
        var nodeAruId=document.querySelector("#id").value;
        var aruIdSzamban=parseInt(nodeAruId);
        var nodeAruNeve=document.querySelector("#nev").value;
        var nodeAr=document.querySelector("#ar").value;
        var aruArSzamban=parseInt(nodeAr);
        var nodeAruKepe=document.querySelector("#kep").value;
        var Aruobject=new Arutipus(aruIdSzamban, nodeAruNeve, aruArSzamban, nodeAruKepe);
        arrAru.push(Aruobject);
        CreateElementWebshop();
    }  
    function Arutipus (id, neve, ara, kep)
     {
         this.id=id;
         this.neve=neve;
         this.ara=ara;
         this.kep=kep;
     }
     var arrAru=[]; 

        function CreateElementWebshop()
        {
         for(i=(arrAru.length-1); i<arrAru.length; i++)
         {
        var nodeWebshopBody=document.querySelector("#WebshopBody");
        var nodeTR=document.createElement("TR");
        var nodeTD1=document.createElement("TD");
        var nodeTD2=document.createElement("TD");
        var nodeTD3=document.createElement("TD");
        var nodeTD4=document.createElement("TD");
        var nodeTD5=document.createElement("TD");
        var img=document.createElement("IMG");
        img.setAttribute("src",arrAru[i].kep);
        img.setAttribute("height",70);
        nodeTD1.innerHTML="<input type=\"checkbox\">";
        nodeTD2.innerText=arrAru[i].id;
        nodeTD3.innerText=arrAru[i].neve;
        nodeTD4.innerText=arrAru[i].ara;
        nodeTD5.appendChild(img);
        nodeTR.appendChild(nodeTD1);
        nodeTR.appendChild(nodeTD2);
        nodeTR.appendChild(nodeTD3);
        nodeTR.appendChild(nodeTD4);
        nodeTR.appendChild(nodeTD5);
        nodeWebshopBody.appendChild(nodeTR);
         }
        }
        function ButTorles_Click_Handler()
        {
                var checkedInputs=document.querySelectorAll("#WebshopBody input:checked");
                for(i=0; i<checkedInputs.length; i++)
                {
                    var WebshopBody=document.querySelector("#WebshopBody");
                    var checkedRow=checkedInputs[i].parentElement.parentElement; 
                    var checkedRowId=checkedRow.querySelector("td:nth-child(2)").innerText; 
                    for(var j=0; j<arrAru.length; j++)
                    {
                        if(arrAru[j].id==checkedRowId)
                        {
                            arrAru.splice(j,1);
                        }
                    }                       
                    WebshopBody.removeChild(checkedRow);                                    
                }
        }               

 //innen kosar
function ButKosarba_Click_Handler()
{
        var checkedInputs=document.querySelectorAll("#WebshopBody input:checked");
        for(i=0; i<checkedInputs.length; i++)
        {
            var checkedRow=checkedInputs[i].parentElement.parentElement;           
            var nodeAruId=checkedRow.querySelector("td:nth-child(2)").innerText;
            var nodeAruNeve=checkedRow.querySelector("td:nth-child(3)").innerText;
            var nodeAr=checkedRow.querySelector("td:nth-child(4)").innerText;
            var nodeAruKepe=checkedRow.querySelector("td:nth-child(5)").innerHTML;
            var Kosarbaobject=new Kosartipus(nodeAruId, nodeAruNeve, nodeAr, nodeAruKepe);   
            arrKosar.push(Kosarbaobject);    
                               
        }
        CreateElementKosar();
        
}

function Kosartipus (id, neve, ara, kep)
{
    this.id=id;
    this.neve=neve;
    this.ara=ara;
    this.kep=kep;
}

var arrKosar=[];
var arrArosszegzo=[];

function CreateElementKosar()
{
         for(i=0; i<arrKosar.length; i++)
         {
        var VevokosarBody=document.querySelector("#VevokosarBody");
        var nodeTR=document.createElement("TR");
        var nodeTD1=document.createElement("TD");
        var nodeTD2=document.createElement("TD");
        var nodeTD3=document.createElement("TD");
        var nodeTD4=document.createElement("TD");
        var nodeTD5=document.createElement("TD");
        nodeTD1.innerHTML="<input type=\"checkbox\">";
        nodeTD2.innerText=arrKosar[i].id;
        nodeTD3.innerText=arrKosar[i].neve;
        nodeTD4.innerText=arrKosar[i].ara;
        nodeTD5.innerHTML=arrKosar[i].kep;
        nodeTR.appendChild(nodeTD1);
        nodeTR.appendChild(nodeTD2);
        nodeTR.appendChild(nodeTD3);
        nodeTR.appendChild(nodeTD4);
        nodeTR.appendChild(nodeTD5);
        VevokosarBody.appendChild(nodeTR);
        var arSzamban=parseInt(arrKosar[i].ara);
        arrArosszegzo.push(arSzamban);
        var arakOsszege=0;
        for(j=0; j<arrArosszegzo.length; j++)
            {
            arakOsszege+=arrArosszegzo[j];
            }
        var VevokosarArmezo=document.querySelector("#VevokosarArTD");
        VevokosarArmezo.innerText=arakOsszege;
        
        }
         arrKosar=[];
}
        
function ButKiveszem_Click_Handler()
{
        var checkedInputs=document.querySelectorAll("#VevokosarBody input:checked");
        for(i=0; i<checkedInputs.length; i++)
        {
            var VevokosarBody=document.querySelector("#VevokosarBody");
            var checkedRow=checkedInputs[i].parentElement.parentElement;  
            var nodeAr=checkedRow.querySelector("td:nth-child(4)").innerText;
            var arSzamban=parseInt(nodeAr);
            for(j=0; j<arrArosszegzo.length; j++)
              {
                  if(arrArosszegzo[j]===arSzamban)
                  {
                    var VevokosarArmezo=document.querySelector("#VevokosarArTD");
                    var arOsszeg=VevokosarArmezo.innerText;
                    var arOsszegSzamban=parseInt(arOsszeg);
                    arOsszegSzamban-=arrArosszegzo[j];
                    arrArosszegzo.splice(j,1);                   
                  }
              }
            VevokosarBody.removeChild(checkedRow);                                      
        }
        var VevokosarArmezo=document.querySelector("#VevokosarArTD");
        VevokosarArmezo.innerText=arOsszegSzamban;
}     

function ButVasarlas_Click_Handler()
{
    var VevokosarArmezo=document.querySelector("#VevokosarArTD"); 
    var arOsszeg=VevokosarArmezo.innerText;
    alert("Ön az alábbi összegért vásárolt:"+" "+arOsszeg+" "+"Ft");
}

//sorrendezés
var masolatArrAru=[];
function Sorrendezo_Epito_Bonto()
{
var WebshopBody=document.querySelector("#WebshopBody");
var torlendoSorok=document.querySelectorAll("#WebshopBody tr");
for(b=0; b<torlendoSorok.length; b++)
    {                          
     WebshopBody.removeChild(torlendoSorok[b]);
    }
for(a=0; a<masolatArrAru.length; a++)
    {
var nodeTR=document.createElement("TR");
var nodeTD1=document.createElement("TD");
var nodeTD2=document.createElement("TD");
var nodeTD3=document.createElement("TD");
var nodeTD4=document.createElement("TD");
var nodeTD5=document.createElement("TD");
nodeTD1.innerHTML="<input type=\"checkbox\">";
nodeTD2.innerText=masolatArrAru[a].id;
nodeTD3.innerText=masolatArrAru[a].neve;
nodeTD4.innerText=masolatArrAru[a].ara;
nodeTD5.innerHTML=masolatArrAru[a].kep;
nodeTR.appendChild(nodeTD1);
nodeTR.appendChild(nodeTD2);
nodeTR.appendChild(nodeTD3);
nodeTR.appendChild(nodeTD4);
nodeTR.appendChild(nodeTD5);
WebshopBody.appendChild(nodeTR);    
    }
masolatArrAru=[];
}

function Sorrendezo_Kiolvaso()
{
    var kiolvasandoSorok=document.querySelectorAll("#WebshopBody tr");
    for(b=0; b<kiolvasandoSorok.length; b++)
        {                          
            var nodeAruId=kiolvasandoSorok[b].querySelector("td:nth-child(2)").innerText;
            var aruIdSzamban=parseInt(nodeAruId);
            var nodeAruNeve=kiolvasandoSorok[b].querySelector("td:nth-child(3)").innerText;
            var nodeAr=kiolvasandoSorok[b].querySelector("td:nth-child(4)").innerText;
            var aruArSzamban=parseInt(nodeAr);
            var nodeAruKepe=kiolvasandoSorok[b].querySelector("td:nth-child(5)").innerHTML;
            var RendezendoObject=new Kosartipus(aruIdSzamban, nodeAruNeve, aruArSzamban, nodeAruKepe);   
            masolatArrAru.push(RendezendoObject);
        } 
}

function AruId_Click_Handler()
{       
    Sorrendezo_Kiolvaso();

    var temp=[];
        for(var i=0; i<masolatArrAru.length/*-1*/; i++)
        {
            for(var j=0;/*j=i+1;*/ j<masolatArrAru.length; j++)
            {
                if(masolatArrAru[i].id<masolatArrAru[j].id)//>csökkenő sorrend
                {
                    temp.push(masolatArrAru[i],masolatArrAru[j]);
                    masolatArrAru[i]=temp[1];
                    masolatArrAru[j]=temp[0];
                    temp=[];
                }
            }
        }
        Sorrendezo_Epito_Bonto();
}

function AruIdFord_Click_Handler()
{  
    Sorrendezo_Kiolvaso();

    var temp=[];
        for(var i=0; i<masolatArrAru.length/*-1*/; i++)
        {
            for(var j=0;/*j=i+1;*/ j<masolatArrAru.length; j++)
            {
                if(masolatArrAru[i].id>masolatArrAru[j].id)//>csökkenő sorrend
                {
                    temp.push(masolatArrAru[i],masolatArrAru[j]);
                    masolatArrAru[i]=temp[1];
                    masolatArrAru[j]=temp[0];
                    temp=[];
                }
            }
        }
        Sorrendezo_Epito_Bonto();
}

function AruNeve_Click_Handler()
{
    Sorrendezo_Kiolvaso();

    var temp=[];
        for(var i=0; i<masolatArrAru.length/*-1*/; i++)
        {
            for(var j=0;/*j=i+1;*/ j<masolatArrAru.length; j++)
            {
                if(masolatArrAru[i].neve.localeCompare(masolatArrAru[j].neve)<0)
                {
                    temp.push(masolatArrAru[i],masolatArrAru[j]);
                    masolatArrAru[i]=temp[1];
                    masolatArrAru[j]=temp[0];
                    temp=[];
                }
            }
        }
        Sorrendezo_Epito_Bonto();  
}

function AruNeveFord_Click_Handler()
{
    Sorrendezo_Kiolvaso();

    var temp=[];
        for(var i=0; i<masolatArrAru.length/*-1*/; i++)
        {
            for(var j=0;/*j=i+1;*/ j<masolatArrAru.length; j++)
            {
                if(masolatArrAru[i].neve.localeCompare(masolatArrAru[j].neve)>0)
                {
                    temp.push(masolatArrAru[i],masolatArrAru[j]);
                    masolatArrAru[i]=temp[1];
                    masolatArrAru[j]=temp[0];
                    temp=[];
                }
            }
        }
        Sorrendezo_Epito_Bonto(); 
}

function AruAra_Click_Handler()
{
    Sorrendezo_Kiolvaso();

    var temp=[];
        for(var i=0; i<masolatArrAru.length/*-1*/; i++)
        {
            for(var j=0;/*j=i+1;*/ j<masolatArrAru.length; j++)
            {
                if(masolatArrAru[i].ara<masolatArrAru[j].ara)//>csökkenő sorrend
                {
                    temp.push(masolatArrAru[i],masolatArrAru[j]);
                    masolatArrAru[i]=temp[1];
                    masolatArrAru[j]=temp[0];
                    temp=[];
                }
            }
        }
        Sorrendezo_Epito_Bonto();
}

function AruAraFord_Click_Handler()
{
    Sorrendezo_Kiolvaso();

    var temp=[];
        for(var i=0; i<masolatArrAru.length/*-1*/; i++)
        {
            for(var j=0;/*j=i+1;*/ j<masolatArrAru.length; j++)
            {
                if(masolatArrAru[i].ara>masolatArrAru[j].ara)//>csökkenő sorrend
                {
                    temp.push(masolatArrAru[i],masolatArrAru[j]);
                    masolatArrAru[i]=temp[1];
                    masolatArrAru[j]=temp[0];
                    temp=[];
                }
            }
        }
        Sorrendezo_Epito_Bonto();   
}

function SorrendVissza_Click_Handler()
{
    var nodeWebshopBody=document.querySelector("#WebshopBody");
    var torlendoSorok=document.querySelectorAll("#WebshopBody tr");
    for(b=0; b<torlendoSorok.length; b++)
    {                          
     WebshopBody.removeChild(torlendoSorok[b]);
    }
    for(i=0; i<arrAru.length; i++)
         {
        var nodeTR=document.createElement("TR");
        var nodeTD1=document.createElement("TD");
        var nodeTD2=document.createElement("TD");
        var nodeTD3=document.createElement("TD");
        var nodeTD4=document.createElement("TD");
        var nodeTD5=document.createElement("TD");
        var img=document.createElement("IMG");
        img.setAttribute("src",arrAru[i].kep);
        img.setAttribute("height",70);
        nodeTD1.innerHTML="<input type=\"checkbox\">";
        nodeTD2.innerText=arrAru[i].id;
        nodeTD3.innerText=arrAru[i].neve;
        nodeTD4.innerText=arrAru[i].ara;
        nodeTD5.appendChild(img);
        nodeTR.appendChild(nodeTD1);
        nodeTR.appendChild(nodeTD2);
        nodeTR.appendChild(nodeTD3);
        nodeTR.appendChild(nodeTD4);
        nodeTR.appendChild(nodeTD5);
        nodeWebshopBody.appendChild(nodeTR);
         }
}
 
function btnKereses_Click_Handler()
{
    var keresettSzoveg=document.querySelector("#kereses").value;
    kereses(keresettSzoveg);
}

function kereses(keresett)
{   
    var keresettAru=[];    
    for(var a=0; a<arrAru.length; a++)
        {
        if(arrAru[a].id==keresett)
            {
                keresettAru.push(arrAru[a]);     
            }
        }
    for(var j=0; j<arrAru.length; j++)
    {
        if(arrAru[j].ara==keresett)
            {
                keresettAru.push(arrAru[j]);     
            }
    }
    for(var k=0; k<arrAru.length; k++)
        {
        if(arrAru[k].neve==keresett)
            {
                keresettAru.push(arrAru[k]);     
            }
        }
    
    var nodeWebshopBody=document.querySelector("#WebshopBody");
    var torlendoSorok=document.querySelectorAll("#WebshopBody tr");
    for(b=0; b<torlendoSorok.length; b++)
    {                          
     WebshopBody.removeChild(torlendoSorok[b]);
    }
    for(i=0; i<arrAru.length; i++)
         {
        var nodeTR=document.createElement("TR");
        var nodeTD1=document.createElement("TD");
        var nodeTD2=document.createElement("TD");
        var nodeTD3=document.createElement("TD");
        var nodeTD4=document.createElement("TD");
        var nodeTD5=document.createElement("TD");
        var img=document.createElement("IMG");
        img.setAttribute("src",keresettAru[i].kep);
        img.setAttribute("height",70);
        nodeTD1.innerHTML="<input type=\"checkbox\">";
        nodeTD2.innerText=keresettAru[i].id;
        nodeTD3.innerText=keresettAru[i].neve;
        nodeTD4.innerText=keresettAru[i].ara;
        nodeTD5.appendChild(img);
        nodeTR.appendChild(nodeTD1);
        nodeTR.appendChild(nodeTD2);
        nodeTR.appendChild(nodeTD3);
        nodeTR.appendChild(nodeTD4);
        nodeTR.appendChild(nodeTD5);
        nodeWebshopBody.appendChild(nodeTR);
         }
}



