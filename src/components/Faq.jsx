import React, { useState } from 'react'
import "../styles/ExpandableComponents.css"
import FAQCard from '../cards/FAQCard';
const Faq = () => {
    const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="bg-white ">
      <div className=" flex justify-evenly  pb-12 relative z-10">
        <div className="flex p-2 px-8 rounded-xl items-center bg-red-500 text-white">
          FAQ
        </div>
      </div>
      <div>
      <div className=" flex flex-col items-center text-center justify-center w-full font-semibold text-5xl max-sm:text-4xl px-4">
        <div>
          <span>Frequently </span>
          <div className="underline">Asked Questions</div>
        </div>
        <div className='block box-border pb-8   font-thin text-lg text-center mt-12'>
        Learn More About Our GA4 Audit Tool: Read Our FAQ for Answers to Common Questions
        </div>
      </div>
      </div>

      <div className='pb-11'>
      <FAQCard
        question="What is GA4 Auditor and how does it work?"
        answer="GA4 Auditor is an advanced Google Analytics Audit tool designed to deliver a comprehensive analytics audit report with an actionable plan in just minutes. It scans your data and alerts you to potential issues and errors, giving you insights into your data quality and accuracy."
      />
      <FAQCard
        question="Which languages are supported by the audit report?"
        answer="The GA4 audit report currently supports English, and in our upcoming release, we will be introducing support for Spanish and French as well. If you would like to have your language supported, please feel free to contact us."
      />
      <FAQCard
        question="Do you offer whitelabeling?"
        answer="Yes, we offer whitelabeling for agencies and enterprises who want to brand the audit reports generated by our tool with their own report template and design."
      />
      </div>

    </div>
  )
}


export default Faq