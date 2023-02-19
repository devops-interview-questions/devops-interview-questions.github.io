(()=>{

    let questions = [

        {
            Section: "Welcome!",
            Title: "",
            URLs: [
                // {
                //     Title: '',
                //     URL: "https://devops-interview-questions.github.io/",
                // }
            ],
            Questions: [
                [
                    `About`,
                    `DevOps is a rapidly growing field that combines software development and IT operations to accelerate the delivery of high-quality software products. The focus of DevOps is on collaboration, automation, and continuous delivery, with the goal of improving the speed and reliability of software delivery.

                    As a result of the growing demand for DevOps professionals, it is essential for job seekers to have a strong understanding of the key concepts and techniques involved in the field. This is where DevOps interview questions come into play.
                    
                    DevOps interview questions are designed to assess a candidate's knowledge of the key principles and practices of DevOps, as well as their experience with various tools and technologies. These questions may cover topics such as Continuous Integration and Continuous Deployment (CI/CD), containerization, infrastructure as code, and monitoring and logging.
                    
                    Whether you are an experienced DevOps professional or just starting out in the field, preparing for DevOps interview questions is an important step in your career journey. By familiarizing yourself with the key concepts and techniques of DevOps, you can demonstrate your knowledge and skills to potential employers and set yourself apart as a highly qualified candidate.`
                ],
                // [
                //     `Disclaimer`,
                //     `The interview guidelines provided below are intended to serve as a general guide for conducting job interviews. They are not intended to be legal advice, and should not be relied upon as such. These guidelines are not exhaustive and do not cover all potential legal issues that may arise during the interview process. We encourages all interviewers to consult with human resources or legal counsel to ensure compliance with all applicable laws and regulations. The company is not responsible for any actions or decisions made by interviewers in reliance on these guidelines.`
                // ],
                // [
                //     `Introduction videos`,
                //     `<iframe width="560" height="315" src="https://www.youtube.com/embed/_Gpe1Zn-1fE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    
                //     <iframe width="560" height="315" src="https://www.youtube.com/embed/9pZ2xmsSDdo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    
                //     <iframe width="560" height="315" src="https://www.youtube.com/embed/j5Zsa_eOXeY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
                // ]
            ]
        },
        // cicdQuestions,
        // linuxQuestions,
        // unixQuestions,
        // shellQuestions,
        // shellScriptingQuestions,
        // gitQuestions,
        // dockerQuestions,
        // docker2Questions,
        // k8s2Questions,
        // k8sQuestions,
        // azdoQuestions,
        // azdo2Questions,
        // azpipelinesQuestions,
        // azQuestions,
        awsQuestions, // TODO
        // aws2Questions, // TODO
        // {
        //     Section: "AWS",
        //     Title: "Top 100+",
        //     URLs: [
        //         {
        //             Title: 'Source: simplilearn.com',
        //             URL: "https://www.simplilearn.com/tutorials/aws-tutorial/aws-interview-questions",
        //         }
        //     ],
        //     Questions: [
        //         [
        //             ``,
        //             ``
        //         ]
        //     ]
        // },
        // {
        //     Section: "AWS",
        //     Title: "Top 55",
        //     URLs: [
        //         {
        //             Title: 'Source: intellipaat.com',
        //             URL: "https://intellipaat.com/blog/interview-question/amazon-aws-interview-questions/",
        //         }
        //     ],
        //     Questions: [
        //         [
        //             ``,
        //             ``
        //         ]
        //     ]
        // }

    ];


    let html = "";

    for(let section of questions){

        html += `
        
            <section>

                <h2 class="sticky-xl-top fw-bold pt-3 pt-xl-5 pb-2 pb-xl-3">${section.Section}</h2>

                <article class="my-3">

                    <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                        <h3>${section.Title}</h3>
        `;
        
        for (let URL of section.URLs){
            html += `
                        <a class="d-flex align-items-center" href="${URL.URL}" target="_blank">${URL.Title}</a>
                    `;
        }

        html += `
                   </div>

                    <div>

        `;

        for (let question of section.Questions){

            html += `
                <div class="bd-example-snippet bd-code-snippet">
                    <div class="bd-example">

                        <p class="h3 border-bottom">${question[0]}</p>

                        <p class="lead1" style="white-space: pre-line;">${question[1].replace(/---/g, `&bull;`)}</p>

                    </div>
                </div>
            `;

        }               

        html += `

                    </div>

                </article>
                
            </section>
        
        `;


    }

    $('#cheatsheetContent').prepend(html);

    let onThisPage = "";
    let i = 0;
    
    $('#cheatsheetContent h2').each(function(){

        onThisPage += `
            <li class="my-2">
                <button class="btn d-inline-flex align-items-center collapsed border-0" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#contents-collapse${i}" aria-controls="contents-collapse${i}">${$(this).html()}</button>
                <ul class="list-unstyled ps-3 collapse" id="contents-collapse${i}">
        `;

        $(this).next().find("p.h3").each(function(){

            $(this).parent().parent().attr('id', `question${i}`);

            onThisPage += `
                <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#question${i}">${$(this).html()}</a></li>
            `
            i++;
        });

        onThisPage += `
                </ul>
            </li>
        `;

        i++;
        
    });

    $('#onThisPage').html(onThisPage);

})();