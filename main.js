document.addEventListener('DOMContentLoaded', function () {
    const maindate = new Date('2023-12-31T00:00:00').getTime();

    function timerinfo() {
        const current= new Date().getTime();
        const tolast= maindate - current;

        const days = Math.floor(tolast / (1000 * 60 * 60 * 24));
        const hours = Math.floor((tolast % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((tolast % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((tolast % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = type(days);
        document.getElementById('hours').innerText = type(hours);
        document.getElementById('minutes').innerText = type(minutes);
        document.getElementById('seconds').innerText = type(seconds);
    }

    function type(time) {
        return time < 10 ? `0${time}` : time;
    }

    timerinfo();

    setInterval(timerinfo, 1000);
});
