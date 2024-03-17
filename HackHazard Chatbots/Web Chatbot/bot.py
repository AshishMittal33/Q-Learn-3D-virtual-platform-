import streamlit as st
import random

qa_pairs={
    "what is web development?": "Web development is the process of building and maintaining websites or web applications.",
    "what are the different layers of web development?":"Web development typically involves three layers: front-end, back-end, and database.",
    "what is html?":"HTML (Hypertext Markup Language) is the standard markup language used to create web pages.",
    "what is css?":"CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML.",
    "what is javascript?":"JavaScript is a programming language that enables interactive and dynamic content on websites.",
    "what is the difference between client-side and server-side scripting?":"Client-side scripting runs on the user's browser, while server-side scripting runs on the web server.",
    "what is a responsive web design?":"Responsive web design is an approach to design websites that automatically adjust to various screen sizes and devices.",
    "what is a framework in web development?":"A framework is a pre-built set of tools, libraries, and conventions that developers use to streamline the development process.",
    "what is the difference between a library and a framework?":"A library provides functions and utilities that developers can use in their code, while a framework dictates the structure and flow of an application.",
    "what is bootstrap?":"Bootstrap is a popular front-end framework for building responsive and mobile-first websites.",
    "what is jquery?":"jQuery is a fast, small, and feature-rich JavaScript library that simplifies HTML document traversing, event handling, and animating.",
    "what is ajax?":"AJAX (Asynchronous JavaScript and XML) is a technique used in web development to create asynchronous web applications. It allows parts of a web page to be updated without reloading the entire page.",
    "what is a content management system ?":"A Content Management System is a software application used to manage the creation and modification of digital content. It simplifies the process of creating and updating websites.",
    "what is the difference between http and https?":"HTTP (Hypertext Transfer Protocol) is insecure, while HTTPS (Hypertext Transfer Protocol Secure) encrypts the data transmitted between the browser and the server, providing a secure connection.",
    "what is a restful api?":"A RESTful API is an architectural style for designing networked applications. It uses HTTP requests to perform CRUD (Create, Read, Update, Delete) operations on resources.",
    "what is a database in web development?":"A database is a structured collection of data. In web development, databases are used to store and manage information for dynamic websites and web applications.",
    "what is sql?":"SQL (Structured Query Language) is a standard programming language used to manage relational databases.",
    "what is nosql?":"NoSQL (Not Only SQL) is a term used to describe databases that use non-relational models. They are often used for large-scale distributed data storage.",
    "what is git?":"Git is a distributed version control system used to track changes in source code during software development.",
    "what is a repository in git?":"A repository is a storage location where Git stores files and their history.",
    "what is version control?":"Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later.",
    "what is a web server?":"A web server is software that serves web pages to clients over the HTTP protocol.",
    "what is apache?":"Apache is a popular open-source web server software.",
    "what is nginx?":"Nginx is a high-performance, open-source web server software used for serving static and dynamic content on the web.",
    "what is a domain name?":"A domain name is the human-readable address of a website, such as example.com.",
    "what is dns?":"DNS (Domain Name System) is a system that translates domain names into IP addresses, allowing users to access websites using domain names.",
    "what is web hosting?":"Web hosting is a service that allows individuals and organizations to make their website accessible via the World Wide Web.",
    "what is a web browser?":"A web browser is a software application used to access information on the World Wide Web.",
    "what is a web application?":"A web application is a software application that runs on a web server and is accessed through a web browser over a network.",
    "what is http?":"HTTP (Hypertext Transfer Protocol) is the protocol used for transmitting data on the World Wide Web.",
    "what is a cookie?":"A cookie is a small piece of data sent from a website and stored on the user's computer by the web browser.",
    "what is cross-site scripting ?":"Cross-site scripting is a security vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users.",
    "what is a session?":"A session is a period of time during which a user interacts with a web application.",
    "what is a web framework?":"A web framework is a software framework designed to support the development of web applications.",
    "what is a template engine?":"A template engine is a software module that generates HTML documents dynamically based on templates and data provided by the developer.",
    "what is url rewriting?":"URL rewriting is the process of modifying a URL's appearance, typically for the purpose of improving search engine optimization (SEO) or making the URL more user-friendly.",
    "what is web accessibility?":"Web accessibility refers to the inclusive practice of ensuring websites are usable by people of all abilities and disabilities.",
    "what is the difference between put and post requests?":"PUT is used to update or replace an existing resource, while POST is used to create a new resource.",
    "what is a web service?":"A web service is a software system designed to support interoperable machine-to-machine interaction over a network.",
    "what is a microservice architecture?":"Microservice architecture is an architectural style that structures an application as a collection of small, loosely coupled services.",
    "what is serverless computing?": "Serverless computing is a cloud computing execution model in which the cloud provider dynamically manages the allocation of machine resources.",
    "what is progressive web app?": "Progressive Web Apps are web applications that use modern web capabilities to provide a user experience similar to that of native apps.",
    "what is single page application (SPA)?": "A Single Page Application is a web application that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server.",
    "what is web scraping?": "Web scraping is the process of extracting data from websites.",
    "what is a web socket?": "A web socket is a communication protocol that provides full-duplex communication channels over a single TCP connection.",
    "what is a cdn?": "A CDN (Content Delivery Network) is a distributed network of servers that delivers web content to users based on their geographic location.",
    "what is a framework in javascript?": "A JavaScript framework is a pre-written JavaScript code library that makes it easier for developers to build dynamic web pages and web applications.",
    "what is the difference between synchronous and asynchronous programming?": "In synchronous programming, operations block until the task is completed, while in asynchronous programming, operations can continue while waiting for a task to complete.",
    "what is web performance optimization?": "Web performance optimization is the process of improving the speed and efficiency of a website or web application."
}

qa_pairs1 = {
    "what is web development?": "Web development is the process of building and maintaining websites or web applications.",
    "what are the different layers of web development?":"Web development typically involves three layers: front-end, back-end, and database.",
    "what is html?":"HTML (Hypertext Markup Language) is the standard markup language used to create web pages.",
    "what is css?":"CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML.",
    "what is javascript?":"JavaScript is a programming language that enables interactive and dynamic content on websites.",
    "what is the difference between client-side and server-side scripting?":"Client-side scripting runs on the user's browser, while server-side scripting runs on the web server.",
    "what is a responsive web design?":"Responsive web design is an approach to design websites that automatically adjust to various screen sizes and devices.",
    "what is a framework in web development?":"A framework is a pre-built set of tools, libraries, and conventions that developers use to streamline the development process.",
    "what is the difference between a library and a framework?":"A library provides functions and utilities that developers can use in their code, while a framework dictates the structure and flow of an application.",
    "what is bootstrap?":"Bootstrap is a popular front-end framework for building responsive and mobile-first websites.",
    "what is jquery?":"jQuery is a fast, small, and feature-rich JavaScript library that simplifies HTML document traversing, event handling, and animating.",
    "what is ajax?":"AJAX (Asynchronous JavaScript and XML) is a technique used in web development to create asynchronous web applications. It allows parts of a web page to be updated without reloading the entire page.",
    "what is a content management system ?":"A Content Management System is a software application used to manage the creation and modification of digital content. It simplifies the process of creating and updating websites.",
    "what is the difference between http and https?":"HTTP (Hypertext Transfer Protocol) is insecure, while HTTPS (Hypertext Transfer Protocol Secure) encrypts the data transmitted between the browser and the server, providing a secure connection.",
    "what is a restful api?":"A RESTful API is an architectural style for designing networked applications. It uses HTTP requests to perform CRUD (Create, Read, Update, Delete) operations on resources."
}
qa_pairs2 = {
    "what is a database in web development?":"A database is a structured collection of data. In web development, databases are used to store and manage information for dynamic websites and web applications.",
    "what is sql?":"SQL (Structured Query Language) is a standard programming language used to manage relational databases.",
    "what is nosql?":"NoSQL (Not Only SQL) is a term used to describe databases that use non-relational models. They are often used for large-scale distributed data storage.",
    "what is git?":"Git is a distributed version control system used to track changes in source code during software development.",
    "what is a repository in git?":"A repository is a storage location where Git stores files and their history.",
    "what is version control?":"Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later.",
    "what is a web server?":"A web server is software that serves web pages to clients over the HTTP protocol.",
    "what is apache?":"Apache is a popular open-source web server software.",
    "what is nginx?":"Nginx is a high-performance, open-source web server software used for serving static and dynamic content on the web.",
    "what is a domain name?":"A domain name is the human-readable address of a website, such as example.com.",
    "what is dns?":"DNS (Domain Name System) is a system that translates domain names into IP addresses, allowing users to access websites using domain names.",
    "what is web hosting?":"Web hosting is a service that allows individuals and organizations to make their website accessible via the World Wide Web.",
    "what is a web browser?":"A web browser is a software application used to access information on the World Wide Web.",
    "what is a web application?":"A web application is a software application that runs on a web server and is accessed through a web browser over a network.",
    "what is http?":"HTTP (Hypertext Transfer Protocol) is the protocol used for transmitting data on the World Wide Web.",
    "what is a cookie?":"A cookie is a small piece of data sent from a website and stored on the user's computer by the web browser."
}
qa_pairs3 = {
    "what is cross-site scripting ?":"Cross-site scripting is a security vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users.",
    "what is a session?":"A session is a period of time during which a user interacts with a web application.",
    "what is a web framework?":"A web framework is a software framework designed to support the development of web applications.",
    "what is a template engine?":"A template engine is a software module that generates HTML documents dynamically based on templates and data provided by the developer.",
    "what is url rewriting?":"URL rewriting is the process of modifying a URL's appearance, typically for the purpose of improving search engine optimization (SEO) or making the URL more user-friendly.",
    "what is web accessibility?":"Web accessibility refers to the inclusive practice of ensuring websites are usable by people of all abilities and disabilities.",
    "what is the difference between put and post requests?":"PUT is used to update or replace an existing resource, while POST is used to create a new resource.",
    "what is a web service?":"A web service is a software system designed to support interoperable machine-to-machine interaction over a network.",
    "what is a microservice architecture?":"Microservice architecture is an architectural style that structures an application as a collection of small, loosely coupled services.",
    "what is serverless computing?": "Serverless computing is a cloud computing execution model in which the cloud provider dynamically manages the allocation of machine resources.",
    "what is progressive web app?": "Progressive Web Apps are web applications that use modern web capabilities to provide a user experience similar to that of native apps.",
    "what is single page application (SPA)?": "A Single Page Application is a web application that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server.",
    "what is web scraping?": "Web scraping is the process of extracting data from websites.",
    "what is a web socket?": "A web socket is a communication protocol that provides full-duplex communication channels over a single TCP connection.",
    "what is a cdn?": "A CDN (Content Delivery Network) is a distributed network of servers that delivers web content to users based on their geographic location.",
    "what is a framework in javascript?": "A JavaScript framework is a pre-written JavaScript code library that makes it easier for developers to build dynamic web pages and web applications.",
    "what is the difference between synchronous and asynchronous programming?": "In synchronous programming, operations block until the task is completed, while in asynchronous programming, operations can continue while waiting for a task to complete.",
    "what is web performance optimization?": "Web performance optimization is the process of improving the speed and efficiency of a website or web application."
}

pairs = [qa_pairs1, qa_pairs2, qa_pairs3]
random_pair = random.choice(pairs)

def respond_to_question(question,random_pair):
    if question in random_pair:
        return random_pair[question]
    else:
        return "Enter Wrong Information! Please Check The Query?"
st.set_page_config(page_title="😎🧠 Web Developer Chatbot")

with st.sidebar:
    st.title('😎🧠 Web Developer Chatbot')
    st.write('**This chatbot will provide the knowledge about Web Development.**')
    st.write("**Today questions task to learn.**")
    for i in random_pair:
        st.write(i)

st.title("Web Developer ChatBot")

if "messages" not in st.session_state.keys():
    st.session_state.messages = [{"role": "assistant", "content": "How May I Help You Today?"}]

for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.write(message["content"])

def clear_chat_history():
    st.session_state.messages = [{"role": "assistant", "content": "How May I Help You Today?"}]
st.sidebar.button('Clear Chat History', on_click=clear_chat_history)

def respond_to_question(question):
    if question in qa_pairs:
        return qa_pairs[question]
    else:
        return "Enter Wrong Information! Please Check The Query?"

if prompt := st.chat_input():
    st.session_state.messages.append({"role": "user", "content": prompt})
    with st.chat_message("user"):
        st.write(prompt)


if st.session_state.messages[-1]["role"] != "assistant":
    with st.chat_message("assistant"):
        with st.spinner("Thinking..."):
            response = respond_to_question(prompt)
            placeholder = st.empty()
            full_response = ''
            for item in response:
                full_response += item
                placeholder.markdown(full_response)
            placeholder.markdown(full_response)
    message = {"role": "assistant", "content": full_response}
    st.session_state.messages.append(message)
