window.addEventListener("load",Window_Load_Handler,false);

function Window_Load_Handler()
     {
     var nodeButtonFeltolt=document.querySelector("#butFeltolt");
     nodeButtonFeltolt.addEventListener('click', ButFeltolt_Click_Handler, false);
     var nodeButtonKosarba=document.querySelector("#butKosarba");
     nodeButtonKosarba.addEventListener('click', ButKosarba_Click_Handler, false);
     }
         
     function ButFeltolt_Click_Handler()
    {
        var nodeAruId=document.querySelector("#id").value;
        var nodeAruNeve=document.querySelector("#nev").value;
        var nodeAr=document.querySelector("#ar").value;
        var nodeAruKepe=document.querySelector("#kep").value;
        var InnerHTMLCheckbox=innerHTML="<input type=\"checkbox\">";
        var Aruobject=new Arutipus(InnerHTMLCheckbox, nodeAruId, nodeAruNeve, nodeAr, nodeAruKepe);
        arrAru.push(Aruobject);
        CreateElementWebshop();
    }
    function Arutipus (checkbox, id, neve, ara, kep)
     {
         this.id=id;
         this.neve=neve;
         this.ara=ara;
         this.kep=kep;
         this.checkbox=checkbox;
     }
     var arrAru=[]; 
console.log(arrAru)
        function CreateElementWebshop()
        {
         for(i=(arrAru.length-1); i<arrAru.length; i++)
         {
        var nodeWebshopBody=document.querySelector("#WebshopBody");
        var nodeTR=document.createElement("TR");
        var nodeTD2=document.createElement("TD");
        var nodeTD3=document.createElement("TD");
        var nodeTD4=document.createElement("TD");
        var nodeTD5=document.createElement("TD");
        //nodeTD1.innerHTML="<input type=\"checkbox\">";
        nodeTR.innerHTML=arrAru[i].checkbox;
        nodeTD2.innerText=arrAru[i].id;
        nodeTD3.innerText=arrAru[i].neve;
        nodeTD4.innerText=arrAru[i].ara;
        nodeTD5.innerText=arrAru[i].kep;
        nodeTR.appendChild(nodeTD2);
        nodeTR.appendChild(nodeTD3);
        nodeTR.appendChild(nodeTD4);
        nodeTR.appendChild(nodeTD5);
        nodeWebshopBody.appendChild(nodeTR);
        arrAru.splice(i,1);
         }
        }

 //innen kosar

function ButKosarba_Click_Handler()
{
        var checkedInputsParents=document.querySelector("#WebshopBody input:checked")//.parentNode;
        for(i=0; i=checkedInputsParents.length; i++)
        {
            for(k=1; k<checkedInputsParents[i].length; k++)
            {
                var nodeAruId=checkedInputsParents[i][1];
                var nodeAruNeve=checkedInputsParents[i][2];
                var nodeAr=checkedInputsParents[i][3];
                var nodeAruKepe=checkedInputsParents[i][4];
                
                /*if(k===0)
                {
                    var nodeAruId=checkedInputsParents[i][k];
                }
                else if*/
            }
        }
        
        var InnerHTMLCheckbox=innerHTML="<input type=\"checkbox\">";
        var Kosarbaobject=new Kosartipus(InnerHTMLCheckbox, nodeAruId, nodeAruNeve, nodeAr, nodeAruKepe);
        arrKosar.push(Kosarbaobject);
        CreateElementKosar();
}

function Kosartipus (checkbox, id, neve, ara, kep)
{
    this.id=id;
    this.neve=neve;
    this.ara=ara;
    this.kep=kep;
    this.checkbox=checkbox;
}
var arrKosar=[];
console.log(Kosartipus);

function CreateElementKosar()
        {
         for(i=(arrKosar.length-1); i<arrKosar.length; i++)
        {
        var VevokosarBody=document.querySelector("#VevokosarBody");
        var nodeTR=document.createElement("TR");
        var nodeTD2=document.createElement("TD");
        var nodeTD3=document.createElement("TD");
        var nodeTD4=document.createElement("TD");
        var nodeTD5=document.createElement("TD");
        nodeTR.innerHTML=arrKosar[i].checkbox;
        nodeTD2.innerText=arrKosar[i].id;
        nodeTD3.innerText=arrKosar[i].neve;
        nodeTD4.innerText=arrKosar[i].ara;
        nodeTD5.innerText=arrKosar[i].kep;
        nodeTR.appendChild(nodeTD2);
        nodeTR.appendChild(nodeTD3);
        nodeTR.appendChild(nodeTD4);
        nodeTR.appendChild(nodeTD5);
        VevokosarBody.appendChild(nodeTR);
         }
        }






