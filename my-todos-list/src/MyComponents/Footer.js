import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "relative",
        width: "100%",
        // top: "90.4vh"
    };

    return (
        <footer className='bg-dark text-light p-2 mt-3' style={footerStyle}>
            <p className='text-center'>
                copyritghts By &copy; TodosList.com
            </p>
        </footer>
    )
}
