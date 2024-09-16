import React, { useState } from 'react';
import './CSS/Search.css'

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className='searchbar' onSubmit={handleSubmit}>
      <h2>Search us</h2>
      <p>You can search us about what you like!</p>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for cosmetics..."
      />
      <button type="submit">Search</button>
      <div className="faq">
        <h3>Frequently Asked Questions</h3>
        <p>
          <b>General Questions</b> <br />
        1.What types of cosmetics do you offer? <br />

          Answer: We offer a wide range of cosmetics including makeup, skincare, and haircare products.<br />
        2.Are your products tested on animals?<br />

          Answer: We are committed to cruelty-free practices and do not test our products on animals.<br />
        3.Do you offer international shipping?<br />

          Answer: Yes, we offer international shipping to most countries. Please check our shipping policy for more details.<br />
          <b>Product Questions</b><br />
        1.How do I choose the right shade of foundation or concealer?<br />

          Answer: We provide a shade guide on each product page. You can also use our virtual try-on tool to find the perfect match.<br />
        2.Are your products suitable for sensitive skin?<br />

          Answer: Many of our products are formulated for sensitive skin. Please check the product descriptions for specific information.<br />
        3.Where can I find ingredients for a specific product?<br />

          Answer: Ingredients are listed on each product page under the "Ingredients" tab.<br />
          <b> Order and Shipping</b> <br />
        1.How can I track my order?<br />

          Answer: Once your order ships, you'll receive a tracking number via email to monitor its status.<br />
        2.Can I change or cancel my order after placing it?<br />

          Answer: Orders can be modified or canceled within a short window after placement. Please contact our customer service immediately.<br />
        3.What should I do if my order arrives damaged or incorrect?<br />

          Answer: Please contact our customer service with your order number and a description of the issue. We will assist you in resolving the problem.<br />
          <b>Returns and Refunds</b> <br />
        1.What is your return policy?<br />

          Answer: We accept returns within [number] days of receipt. Products must be unopened and in their original packaging. Please refer to our return policy for details.<br />
        2.How do I return a product?<br />

          Answer: Contact our customer service for return instructions and a return shipping label.<br />
        3.When will I receive my refund?<br />

          Answer: Refunds are processed within [number] business days of receiving the returned item. The amount will be credited to your original payment method.<br />
        </p>
      </div>
    </form>
  );
};

export default Search;
