const axios  = require("axios")


const getTrucks = async (req,res)=>{
    var long=req.params.id1
    var lat =req.params.id2
    console.log(lat+" "+long)
    const datajson = await axios.get(`https://data.sfgov.org/resource/rqzj-sfat.json?$where=within_circle(location,${lat},${long},%20500)`)
    try
    {
    if(datajson)
    {
    var truck=datajson.data
    //console.log("========================"+datajson.data)
    var foodDetails=await getData(truck)
    
    res.render('truckdetails',{foodDetails})
    }
}
catch(err)
{
    console.log(err)
}
}
async function getData(truck)
{
   // console.log(truck)
    var data = new Array();
   for(let val in truck)
   {
      data[val]={'applicant' : truck[val].applicant,
                'facilitytype':truck[val].facilitytype,
                    'address':truck[val].address,
                    'fooditems':truck[val].fooditems
                    }
    
    }
   // console.log(data)
    return data
}
module.exports=getTrucks