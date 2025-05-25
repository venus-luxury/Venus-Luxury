import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const ShareOnWhatsAppButton = ({ data }) => {
    const productUrl = `https://venus-luxury-f.vercel.app/product/${data?.slug || data?._id}`
    const message = `Check out this watch I found: ${productUrl}`

    const handleShare = (e) => {
        e.preventDefault()
        e.stopPropagation()

        const phoneNumber = '918780920221' // India's country code (91) + phone number
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, "_blank")
    }

    return (
        <div className='w-full max-w-[150px]'>
            <button
                onClick={handleShare}
                className='bg-green-600 hover:bg-green-700 text-white px-2 lg:px-4 py-1 rounded flex items-center justify-center gap-2 w-full'
            >
                <FaWhatsapp />
                Share
            </button>
        </div>
    )
}

export default ShareOnWhatsAppButton
