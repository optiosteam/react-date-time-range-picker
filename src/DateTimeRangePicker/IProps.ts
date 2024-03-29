import {Moment} from 'moment'
import {TCalendarLocaleSupport} from './TCalendarLocaleSupport'

interface IProps {
    date?: boolean,
    time?: boolean,
    range?: boolean,
    inline?: boolean,
    fromDate?: Moment,
    untilDate?: Moment,
    initialDate?: Moment
    months?: number,
    onChange?: (fromDateTime: Moment, untilDateTime?: Moment) => void
    calendarLocale?: TCalendarLocaleSupport
}

export default IProps
