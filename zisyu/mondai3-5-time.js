function time_sa() {
    var time_2019, time_now, sa_day, sa_zikan, sa_byo;
    time_now = new Date();
    time_2019 = new Date(2020, 0, 1, 0, 0);
    sa_day = parseInt((time_2019 - time_now)/86400000);
    sa_zikan = parseInt((time_2019 - time_now - sa_day*86400000)/3600000);
    sa_byo = parseInt((time_2019 - time_now - sa_day*86400000 - sa_zikan*3600000)/1000);
    window.alert("あと" + sa_day + "日" + sa_zikan + "時間" + sa_byo + "秒");
}

time_sa();
