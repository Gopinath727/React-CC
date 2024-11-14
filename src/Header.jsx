// Header.js
import React, { useState } from 'react';
import './Header.css'; // Include the CSS for styling the header

const Header = ({ onCartClick }) => {
    const [showCustomerService, setShowCustomerService] = useState(false);
    const [openFAQIndex, setOpenFAQIndex] = useState(null); // Track which FAQ is open

    const toggleCustomerService = () => {
        setShowCustomerService(!showCustomerService);
    };

    const toggleFAQ = (index) => {
        setOpenFAQIndex(openFAQIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "How long does delivery take?",
            answer: "Delivery typically takes 3-5 business days for standard shipping.",
        },
        {
            question: "What is your return policy?",
            answer: "We offer a 30-day return policy for unused items in their original packaging.",
        },
        {
            question: "How can I track my order?",
            answer: "You can track your order using the tracking link provided in your confirmation email.",
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we ship to select international locations. Check our shipping policy for more details.",
        },
        {
            question: "Can I modify my order after placing it?",
            answer: "You can modify your order within 2 hours of placing it by contacting our support team.",
        },
    ];

    return (
        <header className="header">
            <div className="header-content">
                {/* Shop Name */}
                <pre className="shop-name">     Play Cave Sports Shop   </pre>

                {/* Navigation Button */}
                <div className="header-nav">
                    <button className="header-button" onClick={toggleCustomerService}>
                        Customer Service
                    </button>
                    <button className="header-button" onClick={onCartClick}>My Cart</button>
                </div>
            </div>

            {/* Display customer service points if button is clicked */}
            {showCustomerService && (
                <div className="customer-service-dropdown">
                    <ul>
                        <li>📞 Call Us: 1800-123-4567</li>
                        <li>✉ Email Support: support@sportsshop.com</li>
                        <li>❓ FAQs</li>
                    </ul>

                    <div className="faq-section">
                        <h3>Frequently Asked Questions</h3>
                        <ul>
                            {faqs.map((faq, index) => (
                                <li key={index}>
                                    <strong onClick={() => toggleFAQ(index)}>
                                        {faq.question}
                                    </strong>
                                    {openFAQIndex === index && (
                                        <p className="faq-answer">{faq.answer}</p>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
