import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const ShareOnWhatsAppButton = ({ data }) => {
    const productUrl = `https://venus-luxury-f.vercel.app/product/${data?.slug || data?._id}`
    const productName = data?.name || "this watch"
    const price = typeof data?.price === 'number' ? data.price : 0
    const discount = typeof data?.discount === 'number' ? data.discount : 0

    // Calculate discounted price
    const discountedPrice = discount > 0 ? (price * (1 - discount / 100)).toFixed(0) : null

    const message = `Hey! I found this awesome watch: "${productName}" on Venus Luxury. I found it interesting!\n\nCheck it out here: ${productUrl}`

    const handleShare = (e) => {
        e.preventDefault()
        e.stopPropagation()

        const phoneNumber = '918780920221'
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, "_blank")
    }

    return (
        <div className='w-full max-w-[220px]'>
            <button
                onClick={handleShare}
                className='bg-green-600 hover:bg-green-700 text-white px-2 lg:px-4 py-1 rounded flex items-center justify-center gap-2 w-full'
            >
                <FaWhatsapp />
                Order here
            </button>
        </div>
    )
}

export default ShareOnWhatsAppButton
