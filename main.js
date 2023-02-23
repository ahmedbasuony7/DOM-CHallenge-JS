// // start header 
let allpage = document.createElement("div");
let mainheader =  document.createElement("div");
let logo= document.createElement("p");
let header= document.createElement("div");
let logoname =document.createTextNode("Elzero");

logo.appendChild(logoname);
header.appendChild(logo);
mainheader.appendChild(header);
allpage.appendChild(mainheader);
document.body.appendChild(allpage);


allpage.id="main";
mainheader.className="container";
logo.id="logo";

//logostyle = 
let logostyle=document.getElementById("logo");
logo.style.cssText=" color:green; font-weight:bold;margin-top=15px; margin-left:5px ; margin-bootom:5px;   font-size: x-large;" ;
logo.style.marginTop="15px";

// // container style
mainheader.style.cssText="display:flex; ";
mainheader.style.justifyContent="space-between"
mainheader.style.marginRight="150px";
mainheader.style.color="darkgray";
mainheader.style.fontSize="large";

let linksfather= document.createElement("div");
let otherlinks= document.createElement("ul");
let otherlinkschildern1 = document.createElement("li");
let otherlinkschildern2 = document.createElement("li");
let otherlinkschildern3 = document.createElement("li");
let otherlinkschildern4 = document.createElement("li");

otherlinkschildern1.className="links1";
otherlinkschildern2.className="links2";
otherlinkschildern3.className="links3";
otherlinkschildern4.className="links4";

let links1content = document.createTextNode("Home");
let links2content = document.createTextNode("About");
let links3content = document.createTextNode("Services");
let links4content = document.createTextNode("Contact");

otherlinkschildern1.appendChild(links1content);
otherlinkschildern2.appendChild(links2content);
otherlinkschildern3.appendChild(links3content);
otherlinkschildern4.appendChild(links4content);

otherlinks.appendChild(otherlinkschildern1);
otherlinks.appendChild(otherlinkschildern2);
otherlinks.appendChild(otherlinkschildern3);
otherlinks.appendChild(otherlinkschildern4);
linksfather.appendChild(otherlinks);
mainheader.appendChild(linksfather);

// linksfather
otherlinks.style.listStyle= "none";
otherlinks.style.display="flex";
otherlinkschildern1.style.marginRight="15px" 
otherlinkschildern2.style.marginRight="15px";
otherlinkschildern3.style.marginRight="15px" 
// end header

//  start body 
let mainbody = document.createElement("div");
let mainbodtcontainer = document.createElement("div");
let noumer1 = document.createElement("h2");
let noumer2 = document.createElement("h2");
let noumer3 = document.createElement("h2");
let noumer4 = document.createElement("h2");
let noumer5 = document.createElement("h2");
let noumer6 = document.createElement("h2");
let noumer7 = document.createElement("h2");
let noumer8 = document.createElement("h2");
let noumer9 = document.createElement("h2");
let noumer10 = document.createElement("h2");
let noumer11 = document.createElement("h2");
let noumer12 = document.createElement("h2");
let noumer13 = document.createElement("h2");
let noumer14 = document.createElement("h2");
let noumer15 = document.createElement("h2");


let productname1 = document.createElement("p");
productname1.style.textAlign="center";
let productname2 = document.createElement("p");
productname2.style.textAlign="center";
let productname3 = document.createElement("p");
productname3.style.textAlign="center";
let productname4 = document.createElement("p");
productname4.style.textAlign="center";
let productname5 = document.createElement("p");
productname5.style.textAlign="center";
let productname6 = document.createElement("p");
productname6.style.textAlign="center";
let productname7 = document.createElement("p");
productname7.style.textAlign="center";
let productname8 = document.createElement("p");
productname8.style.textAlign="center";
let productname9 = document.createElement("p");
productname9.style.textAlign="center";
let productname10 = document.createElement("p");
productname10.style.textAlign="center";
let productname11 = document.createElement("p");
productname11.style.textAlign="center";
let productname12 = document.createElement("p");
productname12.style.textAlign="center";
let productname13 = document.createElement("p");
productname13.style.textAlign="center";
let productname14 = document.createElement("p");
productname14.style.textAlign="center";
let productname15 = document.createElement("p");
productname15.style.textAlign="center";


let mainbodtcontainer1= document.createElement("div");
let mainbodtcontainer2= document.createElement("div");
let mainbodtcontainer3= document.createElement("div");
let mainbodtcontainer4= document.createElement("div");
let mainbodtcontainer5= document.createElement("div");
let mainbodtcontainer6= document.createElement("div");
let mainbodtcontainer7= document.createElement("div");
let mainbodtcontainer8= document.createElement("div");
let mainbodtcontainer9= document.createElement("div");
let mainbodtcontainer10= document.createElement("div");
let mainbodtcontainer11= document.createElement("div");
let mainbodtcontainer12= document.createElement("div");
let mainbodtcontainer13= document.createElement("div");
let mainbodtcontainer14= document.createElement("div");
let mainbodtcontainer15= document.createElement("div");


let pro1= document.createTextNode("product");
let pro2= document.createTextNode("product");
let pro3= document.createTextNode("product");
let pro4 =document.createTextNode("product");
let pro5 =document.createTextNode("product");
let pro6 =document.createTextNode("product");
let pro7 =document.createTextNode("product");
let pro8 =document.createTextNode("product");
let pro9 =document.createTextNode("product");
let pro10 =document.createTextNode("product");
let pro11 =document.createTextNode("product");
let pro12 =document.createTextNode("product");
let pro13 =document.createTextNode("product");
let pro14 =document.createTextNode("product");
let pro15=document.createTextNode("product");


let noumber1 = document.createTextNode(1);
noumer1.appendChild(noumber1);
noumer1.style.marginLeft="48%";

mainbodtcontainer1.appendChild(noumer1);
productname1.appendChild(pro1);
mainbodtcontainer1.appendChild(productname1);
mainbodtcontainer.appendChild(mainbodtcontainer1);



let noumber2 = document.createTextNode(2);
noumer2.appendChild(noumber2);
noumer2.style.marginLeft="48%";

mainbodtcontainer2.appendChild(noumer2);
productname2.appendChild(pro2);
mainbodtcontainer2.appendChild(productname2);
mainbodtcontainer.appendChild(mainbodtcontainer2);


let noumber3 = document.createTextNode(3);
noumer3.appendChild(noumber3);
noumer3.style.marginLeft="48%";

mainbodtcontainer3.appendChild(noumer3);
productname3.appendChild(pro3);
mainbodtcontainer3.appendChild(productname3);
mainbodtcontainer.appendChild(mainbodtcontainer3);

let noumber4 = document.createTextNode(4);
noumer4.appendChild(noumber4);
noumer4.style.marginLeft="48%";

mainbodtcontainer4.appendChild(noumer4);
productname4.appendChild(pro4);
mainbodtcontainer4.appendChild(productname4);
mainbodtcontainer.appendChild(mainbodtcontainer4);


let noumber5 = document.createTextNode(5);
noumer5.appendChild(noumber5);
//noumer5.style.transform=" translateX(48%)";
noumer5.style.marginLeft="48%";

mainbodtcontainer5.appendChild(noumer5);
productname5.appendChild(pro5);
mainbodtcontainer5.appendChild(productname5);
mainbodtcontainer.appendChild(mainbodtcontainer5);

let noumber6 = document.createTextNode(6);
noumer6.appendChild(noumber6);
noumer6.style.marginLeft="48%";

mainbodtcontainer6.appendChild(noumer6);
productname6.appendChild(pro6);
mainbodtcontainer6.appendChild(productname6);
mainbodtcontainer.appendChild(mainbodtcontainer6);

let noumber7 = document.createTextNode(7);
noumer7.appendChild(noumber7);
noumer7.style.marginLeft="48%";

mainbodtcontainer7.appendChild(noumer7);
productname7.appendChild(pro7);
mainbodtcontainer7.appendChild(productname7);
mainbodtcontainer.appendChild(mainbodtcontainer7);

let noumber8 = document.createTextNode(8);
noumer8.appendChild(noumber8);
noumer8.style.marginLeft="48%";

mainbodtcontainer8.appendChild(noumer8);
productname8.appendChild(pro8);
mainbodtcontainer8.appendChild(productname8);
mainbodtcontainer.appendChild(mainbodtcontainer8);

let noumber9 = document.createTextNode(9);
noumer9.appendChild(noumber9);
noumer9.style.marginLeft="48%";

mainbodtcontainer9.appendChild(noumer9);
productname9.appendChild(pro9);
mainbodtcontainer9.appendChild(productname9);
mainbodtcontainer.appendChild(mainbodtcontainer9);

let noumber10 = document.createTextNode(10);
noumer10.appendChild(noumber10);
//noumer10.style.transform=" translateX(48%)";
noumer10.style.marginLeft="48%";

mainbodtcontainer10.appendChild(noumer10);
productname10.appendChild(pro10);
mainbodtcontainer10.appendChild(productname10);
mainbodtcontainer.appendChild(mainbodtcontainer10);


let noumber11 = document.createTextNode(11);
noumer11.appendChild(noumber11);
noumer11.style.marginLeft="48%";

mainbodtcontainer11.appendChild(noumer11);
productname11.appendChild(pro11);
mainbodtcontainer11.appendChild(productname11);
mainbodtcontainer.appendChild(mainbodtcontainer11);


let noumber12 = document.createTextNode(12);
noumer12.appendChild(noumber12);
noumer12.style.marginLeft="48%";

mainbodtcontainer12.appendChild(noumer12);
productname12.appendChild(pro12);
mainbodtcontainer12.appendChild(productname12);
mainbodtcontainer.appendChild(mainbodtcontainer12);


let noumber13 = document.createTextNode(13);
noumer13.appendChild(noumber13);
noumer13.style.marginLeft="48%";

mainbodtcontainer13.appendChild(noumer13);
productname13.appendChild(pro13);
mainbodtcontainer13.appendChild(productname13);
mainbodtcontainer.appendChild(mainbodtcontainer13);


let noumber14 = document.createTextNode(14);
noumer14.appendChild(noumber14);
noumer14.style.marginLeft="48%";

mainbodtcontainer14.appendChild(noumer14);
productname14.appendChild(pro14);
mainbodtcontainer14.appendChild(productname14);
mainbodtcontainer.appendChild(mainbodtcontainer14);

let noumber15 = document.createTextNode(15);
noumer15.appendChild(noumber15);
noumer15.style.marginLeft="48%";
//noumer15.style.transform=" translateX(48%)";

mainbodtcontainer15.appendChild(noumer15);
productname15.appendChild(pro15);
mainbodtcontainer15.appendChild(productname15);
mainbodtcontainer.appendChild(mainbodtcontainer15);

mainbody.id="mainbody";
mainbodtcontainer.className="mai";

//mainbody.style.margin="50px";
mainbody.style.backgroundColor="#cccc";
mainbody.style.paddingBottom="20px";

mainbodtcontainer.style.display="flex";
mainbodtcontainer.style.flexWrap="wrap";
mainbodtcontainer.style.justifyContent="space-evenly";
///mainbodtcontainer.style.gap="5px";
//mainbodtcontainer.style.marginTop="10px";
//mainbodtcontainer.style.width="350px";
//mainbodycontainer.style.cssText="display:flex; ";

mainbodtcontainer1.style.width="285px";
mainbodtcontainer1.style.backgroundColor="white"
mainbodtcontainer1.style.marginTop="20px";
mainbodtcontainer1.style.marginLeft="5px";

mainbodtcontainer2.style.width="285px";
mainbodtcontainer2.style.backgroundColor="white"
mainbodtcontainer2.style.marginTop="20px";
mainbodtcontainer2.style.marginLeft="5px";

mainbodtcontainer3.style.width="285px";
mainbodtcontainer3.style.backgroundColor="white"
mainbodtcontainer3.style.marginTop="20px";
mainbodtcontainer3.style.marginLeft="5px";

mainbodtcontainer4.style.width="285px";
mainbodtcontainer4.style.backgroundColor="white"
mainbodtcontainer4.style.marginTop="20px";
mainbodtcontainer4.style.marginLeft="5px";

mainbodtcontainer5.style.width="285px";
mainbodtcontainer5.style.backgroundColor="white"
mainbodtcontainer5.style.marginTop="20px";
mainbodtcontainer5.style.marginLeft="5px";

mainbodtcontainer6.style.width="285px";
mainbodtcontainer6.style.backgroundColor="white"
mainbodtcontainer6.style.marginTop="20px";
mainbodtcontainer6.style.marginLeft="5px";

mainbodtcontainer7.style.width="285px";
mainbodtcontainer7.style.backgroundColor="white"
mainbodtcontainer7.style.marginTop="20px";
mainbodtcontainer7.style.marginLeft="5px";

mainbodtcontainer8.style.width="285px";
mainbodtcontainer8.style.backgroundColor="white"
mainbodtcontainer8.style.marginTop="20px";
mainbodtcontainer8.style.marginLeft="5px";

mainbodtcontainer9.style.width="285px";
mainbodtcontainer9.style.backgroundColor="white"
mainbodtcontainer9.style.marginTop="20px";
mainbodtcontainer9.style.marginLeft="5px";

mainbodtcontainer10.style.width="285px";
mainbodtcontainer10.style.backgroundColor="white"
mainbodtcontainer10.style.marginTop="20px";
mainbodtcontainer10.style.marginLeft="5px";

mainbodtcontainer11.style.width="285px";
mainbodtcontainer11.style.backgroundColor="white"
mainbodtcontainer11.style.marginTop="20px";
mainbodtcontainer11.style.marginLeft="5px";

mainbodtcontainer12.style.width="285px";
mainbodtcontainer12.style.backgroundColor="white"
mainbodtcontainer12.style.marginTop="20px";
mainbodtcontainer12.style.marginLeft="5px";

mainbodtcontainer13.style.width="285px";
mainbodtcontainer13.style.backgroundColor="white"
mainbodtcontainer13.style.marginTop="20px";
mainbodtcontainer13.style.marginLeft="5px";

mainbodtcontainer14.style.width="285px";
mainbodtcontainer14.style.backgroundColor="white"
mainbodtcontainer14.style.marginTop="20px";
mainbodtcontainer14.style.marginLeft="5px";

mainbodtcontainer15.style.width="285px";
mainbodtcontainer15.style.backgroundColor="white"
mainbodtcontainer15.style.marginTop="20px";
mainbodtcontainer15.style.marginRight="5px";
//mainbodtcontainer.appendChild(noumer1);

mainbody.appendChild(mainbodtcontainer);
allpage.appendChild(mainbody);

//  end body 


// // start footer
let footer = document.createElement("div");
let footercontent = document.createElement("p");
let footercontenttext = document.createTextNode(" Copyright 2023 ");


footercontent.appendChild(footercontenttext);
footer.appendChild(footercontent);
allpage.appendChild(footer);

footer.id="footer";

// footer style
footercontent.style.cssText="background-color:green; color:white; text-align:center; padding:20px; opacity:0.8; ";

// //  end footer