function getFormvalue() {
    //Write your code here
	 let name = document.getElementsByTagName("input")[0];
	let lname = document.getElementsByTagName("input")[1];
    nameValue = name.value;
    lnameValue = lname.value;
    //console.log(nameValue,lnameValue);
	alert(nameValue +" "+ lnameValue);

}
