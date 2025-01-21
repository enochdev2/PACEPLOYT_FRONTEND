import React from 'react'

const Greetings = () => {
    const hour = new Date().getHours();

    const greetings = hour >= 0 && hour <= 5 ? 'You should be in bed 🙄!' : hour > 5 && hour <= 11 ? 'Good morning, wash your hands 🌥️' : hour > 11 && hour <= 17 ? 'Good afternoon ' : 'Good evening, wash your hands 🌙'

    return (
        <div>
            <h1 className='text-3xl font-bold mb-1'>Nsude,</h1>
            <p className='text-[#718096] font-light text-sm'>{greetings}</p>
        </div>
    )
}

export default Greetings