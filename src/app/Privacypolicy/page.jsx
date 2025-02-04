import React from 'react'
import Footer from '../Footer/page';
import Navbar from '../Navbar/page';
const page = () => {
  return (
    <div >
      <Navbar/>
      <div className='px-4 sm:px-6 lg:px-40 text-justify py-28'>
      <h1 className="text-center py-5 text-3xl text-gray-700">Privacy Policy</h1>
      <hr />
      <p>Last Updated: 3-August-2024</p>
      <h3 className="text-center py-5 text-2xl text-gray-700">1. Introduction</h3>
      <p>Welcome to CodingQuizHub. We respect your privacy and are committed to protecting any personal information you may provide while visiting our site. However, please note that our website currently does not have user login or logout functionalities, nor do we collect, store, or process any personal data from our visitors. This policy outlines our approach to user privacy and data protection.</p>
      <h3 className="text-center py-5 text-2xl text-gray-700">2. Information We Collect</h3>
      <p>Since our website does not require user registration or login, we do not collect personal information such as names, email addresses, phone numbers, or physical addresses. We also do not use cookies or tracking technologies that identify individual visitors.</p>
      <h3 className="text-center py-5 text-2xl text-gray-700">3. Usage Data</h3>
      <p>We may collect general information about your visit to our website, such as your IP address, browser type, operating system, referring URLs, and other technical data. This information is collected in an aggregated and anonymized manner, primarily to help us understand how our website is being used and to improve its performance and user experience.</p>
      <h3 className="text-center py-5 text-2xl text-gray-700">4. Third-Party Services</h3>
      <p>Our website may contain links to third-party sites or services that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and we cannot accept responsibility or liability for their respective privacy policies.</p>
      <h3 className="text-center py-5 text-2xl text-gray-700">5. Data Security</h3>
      <p>While we do not collect personal data, we are committed to ensuring that any information shared with us through general inquiries or contact forms is handled securely. We implement appropriate technical and organizational measures to protect any data from unauthorized access, alteration, disclosure, or destruction.</p>
      
 
    </div>
    <Footer/>

    </div>
  )
}

export default page