exports.getlocation = (req,res,next)=>{
    if('geolocation' in navigator)
    {
      navigator.geolocation.getCurrentPosition( async position=>
      {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const data ={lat,lon};
    //     const options = {
    //       method='POST',
    //       headers:{
    //         'Content-type':'application/json'
    //       },
    //       body:JSON.stringify(data)
    //     }
    //     const repsonse = await fetch('/api',options);
    //    const info = await  response.JSON()
    //    console.log(info);


      });
    }
    else{
      console.log("Not available")
    }
}