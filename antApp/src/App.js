import React, { Component } from 'react';
import './App.css';

import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

import moment from 'moment';

function disabledDate(current) {
    var min = moment('2017/03/4', 'YYYY/MM/DD')
    var max = moment('2017/09/1', 'YYYY/MM/DD')
    var judge = function() {
        var start = current && current.valueOf() < min
        var end = current && current.valueOf() > max
        return start || end
    }
    return judge()
}

class App extends Component {
    render() {
        return (
            <div>
                <DatePicker
                    format="YYYY-MM-DD HH:mm:ss"
                    disabledDate={disabledDate}
                    showTime
                />
            </div>
        )
    }
}

export default App;
