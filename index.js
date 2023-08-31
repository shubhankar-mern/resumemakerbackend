const express = require('express');
const ejs = require('ejs');
const fs = require('fs');
const port =process.env.PORT || 5000;

const app = express();


app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {
    res.render('form'); // Render a form for users to input data
});

app.post('/generate', (req, res) => {
    const userData = {
        fullName: req.body.name,
        email: req.body.email,
        mobile: '+91-7003482971',
        linkedinLink: 'https://www.linkedin.com/in/shubhankar-singh-60ba84145/',
        linkedinCallSign: 'linkedin.com/in/shubhankar',
        githubLink: 'https://github.com/shubhankar-mern',
        githubCallSign: 'github.com/shubhankar',
        portfolioLink: 'https://shubhankar-mern.github.io/portfolio-github.io/',
        portfolioCallSign: 'shubhankars portfolio',
        education:{
            CollegeName: 'Netaji Subhash Engineering College',
            Place: 'Kolkata, WB',
            Degree_with_Specialization: 'Bachelor of Technology in Computer Science and Engineering',
            from: 'July 2016',
            to: 'July 2020',
            GradeMetric: 'CGPA:',
            gradepoint: '7.71',
        },
        experience: [
        {
            designation:'FullStack Developer',
            companyName:'Zeeve.io',
            jobPlace:'Noida, Delhi',
            from:'Feb 2022',
            to:'Present',
            jobtask:[
                'Developed REST API using Node.js and PostgreSQL, providing a robust and scalable backend architecture that handles concurrent user requests with a response time of less than 100ms',
                 'Migrated Recaptcha v2 to Recaptcha Enterprise, enhancing the security and reliability of the application against bot attacks, resulting in a 90\\% reduction in fraudulent activities and unauthorized access attempts',
                 'Worked on notification service microservice \& Integrated new Emails in the notification service backend and sdk, resulting in a 20\\% increase in timely and accurate email delivery',
                 'Designed and developed responsive frontends using React, Bootstrap classes, and Redux from wireframe and figma designs, resulting in a 40\\% improvement in user experience and engagement',
                 'Developed comprehensive test cases using Chai and Mocha for the notification service, achieving a test coverage of 95\\% across all critical functionalities.'
                    ]
        },
        {
            designation:'Cloud Infra Engineer',
            companyName:'LTI',
            jobPlace:'Powai, Mumbai',
            from:'June 2020',
            to:'Jan 2022',
            jobtask:[
                'Implemented and administered Microsoft Exchange for seamless communication and collaboration among team members, resulting in a 30\\% increase in productivity.Took server reports as well.',
                 'Provided exceptional L1 support to end-users, resolving tickets promptly and efficiently, maintaining a high customer satisfaction rate of 95\\%.',
                 'Documented detailed troubleshooting steps and resolutions, contributing to a comprehensive knowledge base for future ticket handling',
                    ]
        }
         ],
        
    };

    // Read the LaTeX template
    const template = fs.readFileSync('views/template.tex', 'utf-8');

    // Render the template with user data
    const renderedTemplate = ejs.render(template, userData);

    // Save the rendered template to a file
    fs.writeFileSync('output.tex', renderedTemplate);

    res.send('LaTeX document generated successfully.');
});


app.listen(port,()=>{
    console.log(`Server starting at port ${port}`);
});