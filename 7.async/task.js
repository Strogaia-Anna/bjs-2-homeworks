class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.intervalId = null; 
    }

    addClock (time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы')
        }

        for (let alarm of this.alarmCollection) {
            if (time === alarm.time) {
                console.warn('Уже присутствует звонок на это же время')
                break;
            }
        }
        this.alarmCollection.push({
            callback: callback,
            time: time,
            canCall: true, 
        })
    }

    removeClock (time) {
        this.alarmCollection =  this.alarmCollection.filter(item => item.time != time);
    }

    getCurrentFormattedTime () {
        let date = new Date();
        let minutes = date.getMinutes();
        return `${date.getHours()}:${minutes < 10 ? '0' : ''}${minutes}`;

    }

    start () {
        if (this.intervalId) {
            return;
        }

        this.intervalId = setInterval(() => {
            let time = this.getCurrentFormattedTime();
            this.alarmCollection.forEach(item => {
                if (item.canCall && time === item.time) {
                    item.canCall = false;
                    item.callback();
                }
            }) 
        }, 1000)
    }

    stop () {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls () {
        this.alarmCollection.forEach(item => item.canCall = true)
    }

    clearAlarms () {
        this.stop();
        this.alarmCollection = [];
    }
}