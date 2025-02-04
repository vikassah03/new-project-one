import React from 'react'
import Footer from '../Footer/page';
import Navbar from '../Navbar/page';
const page = () => {
    return (
        <div >
            <Navbar />
            <div className='px-4 sm:px-6 lg:px-40 text-justify py-28'>
                <h1 className="text-center py-5 text-3xl text-gray-700">Terms of Service</h1>
                <hr />
                <p>Last Updated: 3-August-2024</p>
                <h3 className="text-center py-5 text-2xl text-gray-700">1. Introduction</h3>
                <p>By accessing or using CodingQuizHub (the www.codingquizhub.com), you acknowledge and agree to comply with and be bound by these Terms of Service.</p>
                <h3 className="text-center py-5 text-2xl text-gray-700">2. Use of the Website</h3>
                <p><b> Free Use:</b> The Website is provided free of charge.</p>
                <p> <b>Permitted Use:</b> You may use the Website for personal, non-commercial purposes only.</p>
                <p> <b>Prohibited Activities: </b>You may not:
                    Use the Website for any unlawful purpose.
                    Interfere with the Website's security or functionality.
                    Reproduce, distribute, or transmit any content from the Website without our prior written consent.</p>
                <h3 className="text-center py-5 text-2xl text-gray-700">3. Content</h3>
                <p> <b>Accuracy:</b> While we strive to provide accurate information, we make no warranties about the completeness or accuracy of the content.</p>
                <p><b>User-Generated Content: </b>The Website may allow users to submit content. You are solely responsible for the content you submit.</p>
                <h3 className="text-center py-5 text-2xl text-gray-700">4. Intellectual Property</h3>
                <p><b>Ownership:</b> All content on the Website, including but not limited to text, images, and software, is owned by us or our licensors.</p>
                <p><b>License: </b>We grant you a limited license to access and use the Website.</p>
                <h3 className="text-center py-5 text-2xl text-gray-700">5. Data Collection</h3>
                <p><b>No Personal Data Collection:</b> Our website does not require users to sign in, sign out, or create an account. Therefore, we do not collect any personal data from our users.</p>
                <p><b>Passive Data Collection: </b>While we do not collect personal data, we may collect certain information passively, such as IP addresses and browser information. This data is used solely for improving website functionality and user experience.</p>

            </div>
            <Footer />

        </div>
    )
}

export default page