//input 07:05:45PM 
//output 19:05:45

function timeConversion(s) {

    let period = s.slice(-2);

    let values = s.slice(0, 8).split(':');

    if (period == 'PM') {

        if (parseInt(values[0]) <= 11) {

            values[0] = (parseInt(values[0]) + 12);
        }

        return values.join(':');
    } else {

        if (parseInt(values[0]) == 12) {

            values[0] = '00';
        }

        return values.join(':');
    }
}

timeConversion('07:05:45PM');