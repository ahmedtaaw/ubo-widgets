////issue days after day one must be seted according to date 1
////not but adding 1 or negative 1


let  day, month;
let monthnumber = new Date().getMonth();
let daynumber = new Date().getDate();
let weekday = new Date().getDay();
let _tomorrowweekday = new Date();
let _tomorrowdaynumber = new Date();
let _monththis=new Date();
let weekArray = [];
let writeweek = [];
let datesdiffrence;
let diff;
$(document).ready(function () {

    /****append and get days after and before */
    writetabs(DaysAfterBeforeToday());
    let tabCarousel = $('.tabs-carousel');
    diff = $('.ubo-44Ef .nav-tabs li').index($('li.active'));
    $('.select2').select2({ minimumResultsForSearch: Infinity });
    /*tabCarousel.owlCarousel({
        nav: true,
        dots: false,
        items: 7
    });*/
    let pickerlinkTodaysdate = new Date();
    $('.flatpickr').flatpickr({
        /*disable: [
            {
                from: "2017-10-08",
                to: "2017-10-14"
            }
        ],*/
        onChange: function (dateObj, dateStr) {
            let currenttime =new Date();
            currenttime.setDate(daynumber);
            currenttime.setMonth(monthnumber);
            currenttime = currenttime.getTime();
            let selectedtime = dateObj[0].getTime();
            datesdiffrence = Math.round((selectedtime - currenttime) / (1000 * 60 * 60 * 24)) + 1;
            setNewDate_Datepicker(dateObj[0].getDate(),dateObj[0].getDay(),dateObj[0].getMonth());
            editActive(datesdiffrence);
            
        }
    });



});
function editActive(ev) {
   if (ev >= 0 && ev <= 6) {
       console.log(ev);
       console.log(diff);
        $('.ubo-44Ef .nav-tabs li').removeClass('active');
        $('.ubo-44Ef .nav-tabs li').eq(ev + diff).addClass('active');
    } else {
        //if the date coming from the datepicker is
        //out of range of the filter
        //distroy filter and build it from scratch
        $('.tabs-carousel li').remove();
        writetabs(weekArray);
        //console.log(weekArray);
        console.log("fire your function that Load Data ya developer ya gamel ;)")
    }
    
}
function writetabs(ev) {
    let tabCarousel = $('.tabs-carousel');
    for (let [index, value] of ev.entries()) {
        if (index == 0) {
            tabCarousel.append(`<li role="presentation" class="active"><a href="#tab` + index + `" aria-controls="tab` + index + `" role="tab" data-toggle="tab" aria-expanded="true">` + value + `</a></li>`);
        } else {
            tabCarousel.append(`<li role="presentation"><a href="#tab` + index + `" aria-controls="tab` + index + `" role="tab" data-toggle="tab">` + value + `</a></li>`);
        }
    }
}
function setNewDate_Datepicker(d,dw,m){
    weekArray=[];
    monthnumber=m;
    daynumber=d;
    weekday=dw;
    for (let i = 0; i < 7; i++) {
        _tomorrowweekday.setDate(weekday + i);
        _tomorrowdaynumber.setDate(daynumber+i);
        day5week();
    }
    //console.log(weekArray);
   //return weekArray;
}
function DaysAfterBeforeToday() {
    for (let i = 0; i < 7; i++) {
        _tomorrowweekday.setDate(weekday + i);
        _tomorrowdaynumber.setDate(daynumber+i);
        day5week();
    }
    return weekArray;
}
function day5week() {
    switch (monthnumber) {
        case 0:
            month = "يناير";
            break;
        case 1:
            month = "فبراير";
            break;
        case 2:
            month = "مارس";
            break;
        case 3:
            month = "ابريل";
            break;
        case 4:
            month = "مايو";
            break;
        case 5:
            month = "يوليو";
            break;
        case 6:
            month = "يونيو";
            break;
        case 7:
            month = "أغسطس";
            break;
        case 8:
            month = "سبتمبر";
            break;
        case 9:
            month = "أكتوبر";
            break;
        case 10:
            month = "نوفمبر";
            break;
        case 11:
            month = "ديسمبر";
            break;

    }
    switch (_tomorrowweekday.getDay()) {
        case 0:
            day = "الأحد";
            break;
        case 1:
            day = "الإثنين";
            break;
        case 2:
            day = "الثلاثاء";
            break;
        case 3:
            day = "الاربعاء";
            break;
        case 4:
            day = "الخميس";
            break;
        case 5:
            day = "الجمعة";
            break;
        case 6:
            day = "السبت";
    }

    weekArray.push((day + " " + _tomorrowdaynumber.getDate() + " " + month));

}

