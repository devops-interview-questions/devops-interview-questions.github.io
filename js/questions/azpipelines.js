let azpipelinesQuestions =  {
    Section: "Azure Pipelines",
    Title: "20 Questions",
    URLs: [
        {
            Title: 'Video tutorial 1',
            URL: 'https://youtu.be/NuYDAs3kNV8'
        },
        {
            Title: 'Video tutorial 2',
            URL: 'https://youtu.be/8sFTdzz55KU'
        },
        {
            Title: 'Source: climbtheladder.com',
            URL: "https://climbtheladder.com/azure-pipelines-interview-questions/",
        }
    ],
    Questions: [
        [
            `Video tutorials`,
            `<iframe width="560" height="315" src="https://www.youtube.com/embed/NuYDAs3kNV8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            <iframe width="560" height="315" src="https://www.youtube.com/embed/8sFTdzz55KU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        ],
        [
            ``,
            `Azure Pipelines is a cloud-based Continuous Integration and Continuous Delivery (CI/CD) service that helps organizations automate the release process for their applications. As a DevOps tool, Azure Pipelines can be used to automate the build, testing and deployment of code changes. If you’re interviewing for a position that involves Azure Pipelines, it’s important to be prepared to answer questions about the tool. In this article, we review some of the most common Azure Pipelines interview questions.`
        ],
        [
            `What is Azure DevOps?`,
            `Azure DevOps is a cloud-based set of tools and services that help developers collaborate and ship software quickly and efficiently. Azure DevOps includes a set of continuous integration and continuous delivery (CI/CD) pipelines that allow developers to automatically build, test, and deploy their code. Azure DevOps also provides a set of tools for managing code repositories, builds, and deployments.`
        ],
        [
            `Can you explain what the term “Build pipeline” means in context with Azure Pipelines?`,
            `A build pipeline is a series of steps that are used to build, test, and deploy software. In Azure Pipelines, build pipelines are used to automatically build and test code whenever changes are made, and they can be used to deploy code to different environments.`
        ],
        [
            `How do you create a build pipeline for Azure?`,
            `You can create a build pipeline for Azure by using the Azure Pipelines service. This service allows you to create and manage build pipelines for your Azure projects. To create a build pipeline, you will need to first create an Azure DevOps account. Once you have an account, you can then create a new build pipeline by going to the Azure Pipelines service and selecting the “New Pipeline” button.`
        ],
        [
            `Why would you use an automated deployment pipeline for your app?`,
            `Automated deployment pipelines are used to ensure that your app is always up-to-date and that you can quickly and easily deploy new updates. This can save you a lot of time and effort in the long run, and it can also help to prevent errors and ensure that your app is always running smoothly.`
        ],
        [
            `Can you explain what Continuous Integration (CI) and Continuous Delivery (CD) mean?`,
            `Continuous Integration is the practice of merging all developer working copies with a shared mainline several times a day. Continuous Delivery is the practice of automatically building, testing and deploying every change to a production environment, making changes available to users as soon as they are ready.`
        ],
        [
            `When using CI/CD, where should you store configuration information to avoid hardcoding it?`,
            `Configuration information should be stored in a secure location that is accessible to the CI/CD system, such as a key management system or a secrets management system. This will allow you to avoid hardcoding secrets and other sensitive information into your CI/CD pipeline, which could lead to security vulnerabilities.`
        ],
        [
            `What are some benefits of using Azure Pipelines over other continuous integration tools like Jenkins or Travis CI?`,
            `Azure Pipelines is a cloud-based continuous integration tool that is hosted on Microsoft Azure. One of the main benefits of using Azure Pipelines is that it is very easy to set up and get started with. Additionally, Azure Pipelines integrates well with other Azure services, making it a good choice for teams that are already using Azure for other purposes. Finally, Azure Pipelines offers a generous free tier that includes 10 free parallel jobs, making it a good option for small projects or teams on a budget.`
        ],
        [
            `Can you give me a few examples of how Azure Pipelines can be used to automate deployments?`,
            `Azure Pipelines can be used to automate just about any type of deployment you can imagine. A few examples include:

            --- Deploying a website or web application to a web server
            --- Deploying a mobile app to a mobile device
            --- Deploying a desktop application to a desktop
            --- Deploying a cloud service to Azure
            --- Deploying a virtual machine to Azure
            --- Deploying a database to Azure`
        ],
        [
            `Can you explain the difference between Multi-stage pipelines and YAML pipelines?`,
            `Multi-stage pipelines are a newer feature in Azure Pipelines that allow for more complex workflows. YAML pipelines are the older way of doing things and are generally simpler.`
        ],
        [
            `What are the advantages of using YAML pipelines instead of GUI-based ones?`,
            `YAML pipelines offer a number of advantages over GUI-based pipelines, chief among them being that they are much easier to read and understand. This makes them much easier to maintain and edit, as well as making it simpler to share pipelines between developers. YAML pipelines also offer a greater degree of flexibility and customization, allowing for a greater degree of control over the build process.`
        ],
        [
            `What is the significance of artifacts in Azure Pipelines?`,
            `Artifacts are files that are generated by the build process and are used by the release process. They can be used to store binaries, build outputs, and other files that need to be available to the release process.`
        ],
        [
            `Can you explain what templates are and why they’re used in Azure Pipelines?`,
            `Templates are used in Azure Pipelines to help you manage and reuse your pipeline configurations. By using templates, you can define a set of steps, parameters, and variables once, and then reuse that template across multiple pipelines. This can save you a lot of time and effort when configuring your pipelines, and it can help ensure that your pipelines are consistent and follow best practices.`
        ],
        [
            `Can you explain what triggers are in Azure Pipelines?`,
            `Triggers are what tell Azure Pipelines when to automatically start a new build pipeline. There are several different types of triggers that can be configured, such as when a new commit is pushed to a specified branch or when a new work item is created.`
        ],
        [
            `What’s the best way to check whether your pipeline was successful or not after execution?`,
            `The best way to check whether your pipeline was successful or not is to check the logs. The logs will show you all of the steps that were executed and whether they were successful or not.`
        ],
        [
            `What is a release pipeline in Azure Pipelines?`,
            `A release pipeline in Azure Pipelines is a way to automate the process of taking code from a build pipeline and deploying it to one or more servers. A release pipeline can be triggered manually or automatically, and can be configured to run automatically when new code is pushed to a specified branch in your code repository.`
        ],
        [
            `What are environments in Azure Pipelines? What are their usage?`,
            `Environments in Azure Pipelines are used to group together a set of resources, usually for the purpose of deploying an application to that environment. For example, you might have an environment for your development team, and another for your production team. Environments can also be used to represent different stages of your application lifecycle, such as a staging environment where you test new features before they are deployed to production.`
        ],
        [
            `Can you show me how to write a simple script that prints out a message if my pipeline fails?`,
            `Yes, I can show you how to write a simple script that prints out a message if your pipeline fails. Here is an example:

            <code>if (pipeline.status == “failed”) {
            print(“The pipeline has failed.”);
            }</code>`
        ],
        [
            `Is there any way I can limit access to certain users while executing specific tasks on Azure Pipelines?`,
            `Yes, you can limit access to certain users while executing specific tasks on Azure Pipelines by using Azure Active Directory (AD) groups. You can create an AD group for each task and then add the appropriate users to each group. This will ensure that only the users who are members of the group will have access to the task.`
        ],
        [
            `Can you give me an example of when you might want to add custom code to your pipeline?`,
            `There are many reasons why you might want to add custom code to your Azure Pipeline. For example, you might want to add custom code to perform a specific task that is not already included in the pipeline, or you might want to add code to customize the behavior of an existing task. In either case, custom code can help you to achieve your specific goals for the pipeline.`
        ],
        [
            `What are the different ways data can be passed from one stage of the pipeline to another?`,
            `Data can be passed from one stage of the Azure Pipeline to another using variables. Variables can be defined at different scopes, and they can be passed between stages using the Azure Pipeline Variables task.`
        ]
    ]
}