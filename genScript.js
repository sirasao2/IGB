//---------------------------------------------------PEAK CALLING--------------------------------------------------

function myFunction() {
    document.getElementById("myImg").src = "draw/pc.png";
    myFunctionA();
}

function myFunctionA() {
    document.getElementById("div1").style.display = "inline";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "none";
    document.getElementById("div6").style.display = "none";

}

//---------------------------------------------------DIFF BIND--------------------------------------------------------

function myFunction1() {
    document.getElementById("myImg").src = "draw/diffn.png";
    myFunction1A();
}

function myFunction1A() {
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "inline";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "none";

}

//---------------------------------------------------MOTIF ANA--------------------------------------------------------

function myFunction2() {
    document.getElementById("myImg").src = "draw/motifa.png";
    myFunction2A();
}

function myFunction2A() {
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "inline";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "none";

}

//---------------------------------------------------PEAK ANNO--------------------------------------------------------

function myFunction3() {
    document.getElementById("myImg").src = "draw/peaka.png";
    myFunction3A();
}

function myFunction3A() {
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "inline";
    document.getElementById("div5").style.display = "none";

}

//---------------------------------------------------GENE ONTO--------------------------------------------------------

function myFunction4() {
    document.getElementById("myImg").src = "draw/goa.png";
    myFunction4A();
}

function myFunction4A() {
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "inline";

}

//---------------------------------------------------SDS--------------------------------------------------------


function myFunctionView1() {
    document.getElementById("divComp1").style.display = "inline";  // For BWA, BOWTIE, etc.
    document.getElementById("divComp2").style.display = "none";

}

function myFunctionView2() {
    document.getElementById("divComp1").style.display = "none";
    document.getElementById("divComp2").style.display = "inline";  // For CisGenome vs MEME-ChIP
}


function popUp(){
    alert("Only one software! Nothing to compare.");
}

//--------------------------------------------------SIS--------------------------------------------------------

function mySISView1() {
    document.getElementById("qcor").style.display = "inline";
    document.getElementById("rm").style.display = "none"; 
    document.getElementById("qcoram").style.display = "none";  
    document.getElementById("peakcall").style.display = "none";
    document.getElementById("mota").style.display = "none";  
    document.getElementById("peakanno").style.display = "none";  
    document.getElementById("db").style.display = "none";     
    document.getElementById("goa").style.display = "none";         
}

function mySISView2() {
    document.getElementById("qcor").style.display = "none";
    document.getElementById("rm").style.display = "inline"; 
    document.getElementById("qcoram").style.display = "none";  
    document.getElementById("peakcall").style.display = "none";
    document.getElementById("mota").style.display = "none";  
    document.getElementById("peakanno").style.display = "none";  
    document.getElementById("db").style.display = "none";     
    document.getElementById("goa").style.display = "none";         
}

function mySISView3() {
    document.getElementById("qcor").style.display = "none";
    document.getElementById("rm").style.display = "none"; 
    document.getElementById("qcoram").style.display = "inline";  
    document.getElementById("peakcall").style.display = "none";
    document.getElementById("mota").style.display = "none";  
    document.getElementById("peakanno").style.display = "none";  
    document.getElementById("db").style.display = "none";     
    document.getElementById("goa").style.display = "none";        
 
}

function mySISView4() {
    document.getElementById("qcor").style.display = "none";
    document.getElementById("rm").style.display = "none"; 
    document.getElementById("qcoram").style.display = "none";  
    document.getElementById("peakcall").style.display = "inline";
    document.getElementById("mota").style.display = "none";  
    document.getElementById("peakanno").style.display = "none";  
    document.getElementById("db").style.display = "none";     
    document.getElementById("goa").style.display = "none";         
}

function mySISView5() {
    document.getElementById("qcor").style.display = "none";
    document.getElementById("rm").style.display = "none"; 
    document.getElementById("qcoram").style.display = "none";  
    document.getElementById("peakcall").style.display = "none";
    document.getElementById("mota").style.display = "inline";  
    document.getElementById("peakanno").style.display = "none";  
    document.getElementById("db").style.display = "none";     
    document.getElementById("goa").style.display = "none";        

}

function mySISView6() {
    document.getElementById("qcor").style.display = "none";
    document.getElementById("rm").style.display = "none"; 
    document.getElementById("qcoram").style.display = "none";  
    document.getElementById("peakcall").style.display = "none";
    document.getElementById("mota").style.display = "none";  
    document.getElementById("peakanno").style.display = "inline";  
    document.getElementById("db").style.display = "none";     
    document.getElementById("goa").style.display = "none";         

}

function mySISView7() {
   document.getElementById("qcor").style.display = "none";
    document.getElementById("rm").style.display = "none"; 
    document.getElementById("qcoram").style.display = "none";  
    document.getElementById("peakcall").style.display = "none";
    document.getElementById("mota").style.display = "none";  
    document.getElementById("peakanno").style.display = "none";  
    document.getElementById("db").style.display = "inline";     
    document.getElementById("goa").style.display = "none";     

}

function mySISView8() {
    document.getElementById("qcor").style.display = "none";
    document.getElementById("rm").style.display = "none"; 
    document.getElementById("qcoram").style.display = "none";  
    document.getElementById("peakcall").style.display = "none";
    document.getElementById("mota").style.display = "none";  
    document.getElementById("peakanno").style.display = "none";  
    document.getElementById("db").style.display = "none";     
    document.getElementById("goa").style.display = "inline";         



}



