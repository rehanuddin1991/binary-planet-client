import React from 'react'

const FAQsection = () => {
    return (
        <div className='mt-10'>
            <div className="join join-vertical w-full  xs:w-[17rem] xs:-ml-8">
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">1. What types of computer accessories do you sell?</div>
                    <div className="collapse-content">
                        <p>We offer a wide range of computer accessories, including keyboards, mice, headsets, external hard drives, USB hubs, laptop cooling pads, webcams, docking stations, and more.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">2. Do you provide warranties for the products?                    </div>
                    <div className="collapse-content">
                        <p>Yes, all our products come with manufacturer warranties. The duration varies by product. Please check the specific product page or packaging for warranty details.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">3. What is your return policy?                    </div>
                    <div className="collapse-content">
                        <p>We offer a 30-day return policy for most items, provided the product is unused and in its original packaging. Some exceptions may apply, such as for opened software or personalized items.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">4. Can I track my order once it's shipped?                    </div>
                    <div className="collapse-content">
                        <p>Yes, once your order has been shipped, we will send you a tracking number via email. You can track your order on the shipping carrier's website.</p>
                    </div>
                </div>


                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">5. Do you offer bulk discounts for businesses?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, we provide bulk pricing for businesses, educational institutions, and resellers. Contact our sales team for more information on volume discounts.</p>
                    </div>
                </div>



                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">6. How long does shipping take?
                    </div>
                    <div className="collapse-content">
                        <p>Shipping typically takes 3-7 business days, depending on your location. Expedited shipping options are available at checkout.</p>
                    </div>
                </div>



                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">7. What payment methods do you accept?
                    </div>
                    <div className="collapse-content">
                        <p>We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and other secure payment gateways.</p>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default FAQsection