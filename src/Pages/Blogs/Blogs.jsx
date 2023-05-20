import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h4 className='text-center font-bold my-5 text-xl mb-10'>All Blogs Are Here</h4>
           
            <h3 className='font-bold'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
            <p>Answer: Access token is a credential that is issued to a client by an authorization server after a successful authentication process. It represents the authorization granted to the client to access specific resources or perform certain actions on behalf of the authenticated user. <br />
            A refresh token is a long-lived credential that is also issued by the authorization server alongside the access token.Both access tokens and refresh tokens need to be securely stored on the client-side. <br /> And They should be stored in a highly secure manner, preferably in an HTTP-only cookie with the 'secure' flag enabled. This ensures that the cookie is only transmitted over HTTPS connections, reducing the risk of interception.
            </p><br />

            <h3 className='font-bold'>Compare SQL and NoSQL databases?</h3>
            <p>Answer: SQL and NoSQL databases are two broad categories of database management systems that differ in their data models, query languages, and design philosophies. <br />
            SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p><br />

            <h3 className='font-bold'>What is express js? What is Nest JS?</h3>
            <p>Answer: Express.js is a fast and minimalist web application framework for Node.js.  Express.js simplifies the process of creating server-side applications by providing a thin layer of web application functionality on top of Node.js's core HTTP module.<br />
            Nest.js is a progressive and powerful Node.js framework for building maintainable server-side applications. It leverages TypeScript and follows the modular architecture pattern inspired by Angular. Nest.js is built with a focus on developer productivity and application scalability.</p><br />

            <h3 className='font-bold'>What is MongoDB aggregate and how does it work ?</h3>
            <p>Answer:  MongoDB aggregate function is a powerful tool for performing advanced data aggregation operations on collections. It allows you to process and transform data using a pipeline of stages, each of which performs a specific operation on the input data.The aggregate operation takes an array of stages as its input. 

            </p><br />
            
        </div>
    );
};

export default Blogs;