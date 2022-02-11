function displayInfo(){
    document.getElementById("salonInfo").innerHTML=`
    <p> Welcome to ${salon.name}</p>
    <p> You find us at ${salon.address.street}</p>
    <p> ${salon.address.number}</p>
    <p> We are open from ${salon.hours.open} to ${salon.hours.close}</p>`;
}
displayInfo();

