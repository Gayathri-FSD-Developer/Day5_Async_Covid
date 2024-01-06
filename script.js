// var base_url='https://covid-19.dataflowkit.com/v1';

// let widget = document.getElementById('widget');
let clickableDiv = document.getElementById('confirmed');
let active = document.getElementById('active');
let recovered = document.getElementById('recovered');
let deceased = document.getElementById('deceased');
var highlight= document.getElementById('highlight');

// console.log(clickableDiv,active,recovered,deceased);
clickableDiv.addEventListener('click',()=>
{
      // Toggle the 'clicked' class to trigger the transition effect(confirmed)
    //   widget.classList.toggle('widgets');249, 6, 55, 0.196
    highlight.setAttribute('style','opacity: 1; background: rgba(255, 10, 58, 0.125); transform: translate3d(0px, 0px, 0px); width: calc(25%);');
    document.getElementById('widget').setAttribute('style','display:block;')
});
active.addEventListener('click',()=>
{
    // highlight.setAttribute('style','opacity: 1; background: rgba(0, 123, 255, 0.125); transform: translate3d(125px, 0px, 0px); width: calc(25%);');
    highlight.setAttribute('style','opacity: 1; background: rgba(0, 123, 255, 0.125); transform: translate3d(150px, 0px, 0px); width: calc(25%);');
    document.getElementById('widget').setAttribute('style','display:block;')
});
recovered.addEventListener('click',()=>
{
    highlight.setAttribute('style','opacity: 1; background: rgba(40, 167, 69, 0.125); transform: translate3d(295px, 0px, 0px); width: calc(25%);');
    document.getElementById('widget').setAttribute('style','display:block;')

});
deceased.addEventListener('click',()=>
{
    highlight.setAttribute('style','opacity: 1; background: rgba(108, 117, 125, 0.125); transform: translate3d(455px, 0px, 0px); width: calc(25%);');
    document.getElementById('widget').setAttribute('style','display:block;')
});

// Api fetch starts here

let btn= document.getElementById('button-addon2');
btn.addEventListener('click',function(){
    let search= document.getElementById("input_str").value;
    // console.log(search);
    fetch(`https://covid-19.dataflowkit.com/v1/${search}`)
    // fetch('https://coronavirus.m.pipedream.net/')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    // for(var key in data.rawData)
    // {
    //     // console.log(search);exit;

    //    if(data['rawData'][key]['Province_State']== search)
    //    {
    //     // console.log(search);
    //     console.log(data['rawData'][key]); 
    //    }
    // }
    console.log(data);
    var act= data['Active Cases_text'];
    var conf= data['Total Cases_text'];
    var recov= data['Total Recovered_text'];
    var death= data['Total Deaths_text'];
    var time= data['Last Update'];
    console.log(act,conf,recov,death);

    if(act=='N/A'||act=='')
    {
        act="Updating";
    }
    if(conf=='N/A'||conf=='')
    {
        conf="Updating";
    }
    if(recov=='N/A'||recov=='')
    {
        recov="Updating";
    }
    if(death=='N/A'||death=='')
    {
        death="Updating";

    }
    document.getElementById('conf').innerText=conf;
    document.getElementById('acti').innerText=act;
    document.getElementById('reco').innerText=recov;
    document.getElementById('death').innerText=death;  
    document.getElementById('time').innerText=time;
})
});





