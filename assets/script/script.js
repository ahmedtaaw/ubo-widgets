let daynumber, day, month, year, weekday;
year = new Date().getFullYear();
daynumber = new Date().getDate();
weekday = new Date().getDay();
let tomorrowweekday = new Date();
let tomorrowdaynumber = new Date();
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
            let currenttime = new Date().getTime();
            let selectedtime = dateObj[0].getTime();
            datesdiffrence = Math.round((selectedtime - currenttime) / (1000 * 60 * 60 * 24)) + 1;
            editActive(datesdiffrence);
        }
    });



});
function editActive(ev) {
    if (ev >= -2 && ev <= 4) {
        $('.ubo-44Ef .nav-tabs li').removeClass('active');
        $('.ubo-44Ef .nav-tabs li').eq(ev + diff).addClass('active');
    } else {
        alert("FIRE LOADING the PAGE");
    }

}
function writetabs(ev) {
    let tabCarousel = $('.tabs-carousel');
    for (let [index, value] of ev.entries()) {
        if (index == 2) {
            tabCarousel.append(`<li role="presentation" class="active"><a href="#tab` + index + `" aria-controls="tab` + index + `" role="tab" data-toggle="tab" aria-expanded="true">` + value + `</a></li>`);
        } else {
            tabCarousel.append(`<li role="presentation"><a href="#tab` + index + `" aria-controls="tab` + index + `" role="tab" data-toggle="tab">` + value + `</a></li>`);
        }
    }
}
function DaysAfterBeforeToday() {
    for (let i = -1; i < 6; i++) {
        tomorrowweekday.setDate(weekday + i);
        tomorrowdaynumber.setDate(daynumber + (i - 1));
        day5week();
    }
    return weekArray;
}
function day5week() {
    switch (new Date().getMonth()) {
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
    switch (tomorrowweekday.getDay()) {
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

    weekArray.push((day + " " + tomorrowdaynumber.getDate() + " " + month));

}

