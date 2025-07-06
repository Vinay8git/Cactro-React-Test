import React, { useState } from 'react';

function FlightBooker() {
    const [flightType, setFlightType] = useState('one-way');
    const [departureDate, setDepartureDate] = useState(' ');
    const [returnDate, setReturnDate] = useState(' ');

    const today = new Date().toISOString().split('T')[0];

    const isValid = () => {
        if(!departureDate || departureDate < today) return false;
        if(flightType === 'return' && (!returnDate || returnDate < departureDate)) return false;

        return true;
    };

    const handleSubmit = () => {
        if(flightType === 'one-way' ) {
            alert(`You have booked a one-way flight on ${departureDate}.`);
        }
        else {
            alert(`You have booked a return flight from ${departureDate} to ${returnDate}.`);
        }

    };

    return (
        <div style={{padding: '1rem', maxWidth: '800px'}}>
            <h2>Flight Booker</h2>
            <label>
                Flight Type:
                <select value={flightType} onChange={(e) => setFlightType(e.target.value)}>
                    <option value="one-way">One-Way Flight</option>
                    <option value="return">Return Flight</option>
                </select>
            </label>
            <br /><br />
            <label>
                Departure Date:
                <input
                    type="date"
                    value={departureDate}
                    onChange = {e => setDepartureDate(e.target.value)}
                    min = {today}/>
            </label>
            <br /><br />
            <label>
                Return Date:
                <input
                    type="date"
                    value={returnDate}
                    onChange = {e => setReturnDate(e.target.value)}
                    min = {today}/>
            </label>
            <br /><br />
            <button onClick = {handleSubmit} disabled={!isValid()}>
                Book Flight
            </button>
        </div>
    );

}

export default FlightBooker;