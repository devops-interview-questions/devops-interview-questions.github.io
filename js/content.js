(()=>{

    let questions = [

        linuxQuestions,
        unixQuestions,
        shellQuestions,
        shellScriptingQuestions,
        gitQuestions,
        {
            Section: "Docker",
            Title: "Beginner",
            URL: "https://www.knowledgehut.com/interview-questions/docker",
            Questions: [
                [
                    ``,
                    ``
                ]
            ]
        },
        {
            Section: "Docker",
            Title: "Intermediate",
            URL: "https://www.knowledgehut.com/interview-questions/docker",
            Questions: [
                [
                    ``,
                    ``
                ]
            ]
        },
        {
            Section: "Docker",
            Title: "Advanced",
            URL: "https://www.knowledgehut.com/interview-questions/docker",
            Questions: [
                [
                    ``,
                    ``
                ]
            ]
        },
        {
            Section: "Docker",
            Title: "Top in 2023",
            URL: "https://www.interviewbit.com/docker-interview-questions/",
            Questions: [
                [
                    ``,
                    ``
                ]
            ]
        },
        {
            Section: "Kubernetes",
            Title: "Top 55",
            URL: "https://www.guru99.com/kubernetes-interview-questions-answers.html",
            Questions: [
                [
                    ``,
                    ``
                ]
            ]
        },
        {
            Section: "Kubernetes",
            Title: "Top 25+",
            URL: "https://www.interviewbit.com/kubernetes-interview-questions/#k8-services-running-on-nodes",
            Questions: [
                [
                    ``,
                    ``
                ]
            ]
        },
        {
            Section: "Azure",
            Title: "Top 45+",
            URL: "https://k21academy.com/microsoft-azure/az-303/top-interview-questions-for-microsoft-azure-solution-architect/",
            Questions: [
                [
                    ``,
                    ``
                ]
            ]
        },
        {
            Section: "Azure DevOps",
            Title: "Top 50",
            URL: "https://www.opstrainerz.com/blog/azure-devops-interview-questions",
            Questions: [
                [
                    ``,
                    ``
                ]
            ]
        },
        {
            Section: "Azure DevOps",
            Title: "Top 30",
            URL: "https://mindmajix.com/azure-devops-interview-questions",
            Questions: [
                [
                    ``,
                    ``
                ]
            ]
        },
        {
            Section: "Azure Pipelines",
            Title: "Top 20",
            URL: "https://www.softwaretestinghelp.com/shell-scripting-interview-questions/",
            Questions: [
                [
                    ``,
                    ``
                ]
            ]
        },
        {
            Section: "CI/CD",
            Title: "30 common",
            URL: "https://semaphoreci.com/blog/common-cicd-interview-questions",
            Questions: [
                [
                    ``,
                    ``
                ]
            ]
        },
        {
            Section: "AWS",
            Title: "Top 100+",
            URL: "https://www.simplilearn.com/tutorials/aws-tutorial/aws-interview-questions",
            Questions: [
                [
                    ``,
                    ``
                ]
            ]
        },
        {
            Section: "AWS",
            Title: "Top 55",
            URL: "https://intellipaat.com/blog/interview-question/amazon-aws-interview-questions/",
            Questions: [
                [
                    ``,
                    ``
                ]
            ]
        }

    ];


    let html = "";

    for(let section of questions){

        html += `
        
            <section>

                <h2 class="sticky-xl-top fw-bold pt-3 pt-xl-5 pb-2 pb-xl-3">${section.Section}</h2>

                <article class="my-3">

                    <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                        <h3>${section.Title}</h3>
                        <a class="d-flex align-items-center" href="${section.URL}">Origin website</a>
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