console.log("SCRATCH LOADED")

function echoYear(dateObj, element) {
    var getIntro = document.querySelector(element);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', era: 'long', hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "long" };
    var setIntro = getIntro.innerHTML = `Welcome. Today's date is ${new Date().toLocaleDateString("en-US", options)}.`;
};

function getDateObj() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth()+1;
    var year = date.getFullYear();

    return {month, day, year}
}

document.addEventListener("DOMContentLoaded", function() {
    echoYear(getDateObj(), "#hello")
 });

