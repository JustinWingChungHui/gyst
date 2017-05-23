CountDownTimer('06/08/2017 07:00 PM', 'countdown');

function CountDownTimer(date, id)
{
    var end = new Date(date);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById(id).innerHTML = 'VOTE NOW!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        var html = [days, 'DAYS', hours, 'HOURS', minutes, 'MINUTES', seconds, 'SECONDS'].join(" ");

        document.getElementById(id).innerHTML = html;
    }

    showRemaining();
    timer = setInterval(showRemaining, 1000);
}
