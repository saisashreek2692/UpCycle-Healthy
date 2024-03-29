/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePicker({
    placeholder = "Select Date",
    className,
    value,
    dateFormat = "dd/MM/yyyy",
    onChange,
    ...restProps
}) {

    const [selectedDate, setSelectedDate] = useState(value);
    const onDateChange = () => {
        const newValue = value instanceof Date ? value.toISOString(): "";
        setSelectedDate(newValue);
        onChange?.(newValue);
    };

    return (
        <>
            <div className={className}>
                <ReactDatePicker
                    dateFormat={dateFormat}
                    placeholderText={placeholder}
                    selected={selectedDate ? new Date(selectedDate) : null}
                    onChange={onDateChange}
                    {...restProps}
                 />
            </div>
        </>
    );

}

function DatePickerRange({
    startDate,
    endDate,
    placeholder="Select Range",
    className,
    dateFormat= "dd/MM/yyyy",
    onChange,
    ...restProps
}) {

    const [startDateValue, setStartDate] = useState(startDate);
    const [endDateValue, setEndDate] = useState(endDate);

    const onDateChange = ([start, end]) => {
        const newStartDate = start instanceof Date ? start.toISOString(): start;
        const newEndDate = end instanceof Date ? end.toISOString(): end;
        setStartDate(newStartDate);
        setEndDate(newEndDate);
        onChange?.([newStartDate, newEndDate]);
    }

    return(
        <>
            <div className={className}>
                <ReactDatePicker
                    dateFormat={dateFormat}
                    placeholderText={placeholder}
                    startDate={startDateValue ? new Date(startDate) : null}
                    endDate={endDateValue ? new Date(endDate) : null}
                    onChange={onDateChange}
                    selectsRange
                    {...restProps}
                 />
            </div>
        </>
    );
}

DatePicker.Range = DatePickerRange;
DatePicker.DateTime = (props) => <DatePicker dateFormat="dd/MM/yyyy h:mm aa" showTimeSelect {...props} />;
DatePicker.Time = (props) => <DatePicker dateFormat="h:mm aa" showTimeSelect showTimeSelectOnly {...props} />


export { DatePicker };