let azQuestions =  {
    Section: "Microsoft Azure",
    Title: "Top 45+",
    URLs: [
        {
            Title: 'Video tutorial 1',
            URL: 'https://youtu.be/NKEFWyqJ5XA'
        },
        {
            Title: 'Source: k21academy.com',
            URL: "https://k21academy.com/microsoft-azure/solution-architect/top-interview-questions-for-microsoft-azure-solution-architect/",
        }
    ],
    Questions: [
        [
            `Video tutorials`,
            `<iframe width="560" height="315" src="https://www.youtube.com/embed/NKEFWyqJ5XA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        ],
        [
            `Beginner Level`,
            ``
        ],
        [
            `What are the different types of services offered in the cloud?`,
            `<img src="https://k21academy.com/wp-content/uploads/2021/02/2021-02-07-19_29_53-Top-50-Azure-Interview-Questions-and-Answers-For-2021-_-Edureka.png" />`
        ],
        [
            `What are the different cloud deployment models?`,
            `Following are the three cloud deployment models:

            --- <b>Public Cloud</b>: The infrastructure is owned by your cloud provider and the server that you are using could be a multi-tenant system.
            --- <b>Private Cloud</b>: The infrastructure is owned by you or your cloud provider gives you that service exclusively. For eg: Hosting your website on your servers, or hosting your website with the cloud provider on a dedicated server.
            --- <b>Hybrid Cloud</b>: When you use both Public Cloud, Private Cloud together, it is called Hybrid Cloud. For Example: Using your in-house servers for confidential data, and the public cloud for hosting your company’s public-facing website. This type of setup would be a hybrid cloud.`
        ],
        [
            `I have some private servers on my premises, also I have distributed some of my workloads on the public cloud, what is this architecture called?`,
            `This type of architecture would be a hybrid cloud. Why? Because we are using both, the public cloud, and on-premises servers i.e the private cloud.`
        ],
        [
            `What are the three main components of the Windows Azure platform?`,
            `Three most important components of the Windows Azure platform are:

            --- Compute
            --- Storage
            --- AppFabric

            You can find these components in the form of Azure Compute, Azure AppFabric, and Azure Storage.`
        ],
        [
            `Explain the advantage of the Azure CDN?`,
            `Azure CDN stands for Content Delivery Network. It has three advantages: quick responsiveness, help in saving the bandwidth and reduce the load time.`
        ],
        [
            `Explain the importance of the Azure HDInsight?`,
            `HDInsight is part of Hadoop components. It helps in processing a huge amount of data in an effective, smooth and quick manner. It even provides full control to manage the configuration of the clusters and software installed.`
        ],
        [
            `Define the Role in Azure?`,
            `In simple language, it can be understood as the set of permission that helps in performing read and write operation. Azure RBAC contain around 120 roles.`
        ],
        [
            `Explain the deployments slot in Azure`,
            `Deployment slots are present under the Azure Web App Service. There are two types of slot present in Azure Web App: Production slot and Staging slot. The production slot is the default one in which the app runs, but staging slots are the ones that help in testing the application usability before promoting to the production slot.`
        ],
        [
            `How two Virtual Network can communicate with each other?`,
            `To establish communication between two Virtual Network we need to create a Gateway subnet. The gateway subnet is configured while specifying the range of the Virtual network. It takes the use of IP addresses to specify the quantity of subnet to be contained.`
        ],
        [
            `Intermediate Level`,
            ``
        ],
        [
            `What are the different types of Storage areas in Azure?`,
            `<b>BLOB</b>: BLOBs offer a component for storing a lot of content or binary data, for example, pictures, audio, and visual documents. They can scale up to 200 terabytes and can be acquired by utilizing REST APIs.

            <b>Table</b>: Tables represent storage areas across machines for information that is in the form of properties on the cloud.
            
            <b>Queue</b>: The sole target of a queue is to empower communication among Web and Worker Role instances. They help in storing messages that may be accessed by a customer.`
        ],
        [
            `What is an Availability Set?`,
            `An availability set is a logical grouping of VMs that allows Azure to understand how your application is built to provide redundancy and availability. It is recommended that two or more VMs are created within an availability set to provide for a highly available application and to meet the 99.95% Azure SLA. When a single VM is used with Azure Premium Storage, the Azure SLA applies for unplanned maintenance events.`
        ],
        [
            `What are Fault Domains and Update Domains?`,
            `A <b>fault domain</b> is a logical group of the underlying hardware that share a common power source and network switch, similar to a rack within an on-premise data-centers. As you create VMs within an availability set, the Azure platform automatically distributes your VMs across these fault domains. This approach limits the impact of potential physical hardware failures, network outages, or power interruptions.

            An <b>update domain</b> is a logical group of the underlying hardware that can undergo maintenance or can be rebooted at the same time. As you create VMs within an availability set, the Azure platform automatically distributes your VMs across these update domains. This approach ensures that at least one instance of your application always remains running as the Azure platform undergoes periodic maintenance. The order of update domains being rebooted may not proceed sequentially during planned maintenance, but only one update domain is rebooted at a time.`
        ],
        [
            `What is autoscaling in Azure?`,
            ` Auto-scaling is a way to automatically scale up or down the number of computing resources that are being allocated to your application based on its needs at any given time.

            The key point is that you can now design a scalable architecture that will automatically scale up or scale down to meet your needs over the lifetime of your setup regardless of how fast/slow or big/small your site grows over that time.
            
            Here are the most popular ways of autoscaling:
            
            --- Horizontal Scaling
            --- Vertical Scaling`
        ],
        [
            `How is Windows Active Directory and Azure Active Directory different?`,
            `<img src="https://k21academy.com/wp-content/uploads/2021/02/2021-02-08-14_53_07-Top-35-Azure-Interview-Questions-and-Answers-Updated-2021.png" />`
        ],
        [
            `What happens when you exhaust the maximum failed attempts for authenticating yourself via Azure AD?`,
            `We use a more sophisticated strategy to lock accounts. This is based on the IP address of the request and the passwords entered. The duration of the lockout also increases based on the likelihood that it is an attack.`
        ],
        [
            `What is the difference between Service Bus Queues and Storage Queues?`,
            `The Azure Storage Queue is simple and the developer experience is quite good. It uses the local Azure Storage Emulator and debugging is made quite easy. The tooling for Azure Storage Queues allows you to easily peek at the top 32 messages and if the messages are in XML or JSON, you’re able to visualize their contents directly from Visual Studio Furthermore, these queues can be purged of their contents, which is especially useful during development and QA efforts.

            The Azure Service Bus Queues are evolved and surrounded by many useful mechanisms that make it enterprise worthy! They are built into the Service Bus and are able to forward messages to other Queues and Topics. They have a built-in dead-letter queue and messages have a time to live that you control, hence messages don’t automatically disappear after 7 days.`
        ],
        [
            `Differentiation between Azure Traffic Manager and Azure Load Balancers.`,
            `<b>Azure Traffic Manager</b>: The job of Azure Traffic Manager is to route traffic globally based on flexible policies, enabling an excellent user experience that aligns with how you’ve structured your application across the world.

            <b>Azure Load Balancer</b>: The job of Azure Load Balancer is to direct traffic inside a region. This is combined with Azure Traffic Manager, where the traffic manager routes the interior to a region between virtual machines. If you combine the two you get global traffic management combined with local failover.`
        ],
        [
            `What are the various power states of a VM?`,
            `<img src="https://k21academy.com/wp-content/uploads/2021/02/2021-02-08-15_20_01-Top-50-Azure-Interview-Questions-and-Answers-For-2021-_-Edureka.png" />`
        ],
        [
            `What is Azure App Service?`,
            `Azure App Service is a completely managed Platform-as-a-Service (PaaS) offering for proficient developers that conveys a rich arrangement of abilities to the web, mobile, and integration scenarios. Mobile apps in Azure App Service offer a very adaptable, universally accessible mobile application development platform for Enterprise Developers and System Integrators that conveys a rich set of capacities to mobile engineers.
            
            <img src="https://k21academy.com/wp-content/uploads/2021/02/1_jSUzukmOtd8jdzOus9h3Gw-1024x488.png" />`
        ],
        [
            `What is Azure Service Level Agreement (SLA)?`,
            `The SLA ensures that, when you send two or more role instances for each role, access to your cloud service will be maintained not less than 99.95 per cent of the time. Additionally, identification and re-correction activities will be started 99.9 per cent of the time when a role instance’s procedure isn’t running.`
        ],
        [
            `Give the various advantages of using Azure ML Studio`,
            `Azure ML Studio is the most popular features as it has a complete package that helps in Classification, Ranking, Clustering, Anomaly Detection, Recommendation, and Ranking. Due to the presence of drag and drop utility, processes become easy to perform. The various framework supported by the Azure ML Studio includes TensorFlow, SparkML, Microsoft Cognitive Toolkit and so on.`
        ],
        [
            `Brief about the Azure Notification Hub`,
            `Azure Notification Hub is the notification service provided by Microsoft Azure. These notifications can be sent to various platforms like Windows, Android, iOS, WindowsPhone, etc. It is an infrastructure that sends a push notification to any platform. Through Notification Hub, one can monitor, schedule, and telemetry the push notification. Tags and Templates are two main components to understand the Notification Hub`
        ],
        [
            `Explain the Azure Service Bus and what is its two entities?`,
            `Azure Service Bus is the cloud-based technology for messaging and communicating between different applications and devices. Azure Service Bus avails ‘message brokers’ to conduct the processing of messages and ‘messaging stores’ to cache the messages. Queue and Topic are the two entities present in the Azure Service Bus.`
        ],
        [
            `How hybrid cloud has aided in boosting Azure?`,
            `Hybrid Cloud allows building application on both clouds as well as on-premises. It helps Azure by attaining efficiency with the help of DevOps tools. Application in the hybrid cloud can be created at a faster pace. The ability to deploy from any remote location makes it more convenient.`
        ],
        [
            `Describe the use of Text Analysis API?`,
            `Azure ML Text Analysis API is a type of cloud-based service that is mainly used for the NLP of raw Text. The four major tasks of Text Analysis include language detection, key-phrase extraction, sentiment analysis, and entity recognition.`
        ],
        [
            `Explain about the Azure Web App?`,
            `Azure Web App is the service that helps us in developing the user interactive, multi-functional, secured, scalable, and highly reliable application. It is a platform that helps host web applications by building, deploying, and running applications. Azure Web App comes under Platform-as-a-Service. The various features of the Azure Web App include high scalability, Multilanguage support, DevOps Optimization, Compliance and Security, Easy Integration with Visual Studio and Code, Serverless Code and low maintenance cost.`
        ],
        [
            `Explain the concept of the dead letter Queue?`,
            `The dead letter Queue has a purpose to hold the messages that are not received by the receiver. It also looks for messages that are not processed. It generally occurs when queue length exceeds.`
        ],
        [
            `Introduce the term Azure Monitoring`,
            `Azure Monitor is the service offered by Microsoft that helps in analysing, collecting and telemetry data on on-premise and cloud environment. The major advantage of Azure Monitoring is that it helps in identifying the issues in a split of a second. It also helps in improving the performance.`
        ],
        [
            `Explain Verbose Monitoring in Azure`,
            `It collects data performance matrix within the particular role instance to analyse the circumstances that arise processing of the application.`
        ],
        [
            `When do Break-fix issues arise in Azure?`,
            `Break-Fix situation is the technical glitch that arises when the functions intended to support the performance of technology fails to achieve their core implementation.`
        ],
        [
            `List the three ways in which one can manage the session state in Azure?`,
            `The three ways of managing sessions include SQL Azure, Windows Azure Caching and Azure Table.`
        ],
        [
            `Describe the role of Azure Functions?`,
            `Azure Functions are the serverless solution that helps in developing the application without writing the code. It also helps in improving the development experience.`
        ],
        [
            `Explain the tasks performed by the Application Gateway?`,
            `It is a type of load balancer that helps in managing and monitoring the traffic of web application. It is configured under the application layer of the OSI model. Application Gateways helps in URL- based routing, SSL termination, managing sessions, monitor the HTTP traffic, and Web Application firewall management`
        ],
        [
            `Advanced Level`,
            ``
        ],
        [
            `My web app still uses an old Docker container image after I’ve updated the image on Docker Hub. Does Azure support continuous integration/deployment of custom containers?`,
            `Yes, it does. For private registries, you can update the container by stopping and then re-starting your web app. Alternatively, you can also change or add a dummy application setting to force an update of your container.`
        ],
        [
            `What are the three types of RBAC controls in Microsoft Azure?`,
            `The three different types of roles are :

            --- Owner: It has full access to all resources including the right to delegate access to others.
            --- Contributor: It can create and manage all types of Azure resources but can’t grant access to others.
            --- Reader: It can view existing Azure resources.`
        ],
        [
            `What should you do if your Azure Virtual Machine encounters issues caused by user configurations or host infrastructure?`,
            `Try to move the virtual machine to a different host.

            Use <b>Virtual Machine – Redeploy</b> blade to do this.`
        ],
        [
            `What are the steps to move an Azure Virtual Machine from one virtual network to another virtual network?`,
            `Delete a virtual machine in VNET1
            Create a virtual machine in VNET2
            Attach an existing disk to the newly created VM`
        ],
        [
            `How do you resize a virtual machine in Azure Availability Set?`,
            `Stop all VMs in the availability set
            Resize the one VM
            Start the one VM that you resized
            After the resizing succeeds, start the other VMs`
        ],
        [
            `Your company has manufacturing facilities worldwide. Each facility has several machines that produce products. The machines generate millions of messages daily to report progress, quality control metrics, and alerts. You need to design a solution to receive and process the messages from the machines. What Azure service should you include in the design?`,
            `<b>Azure Event Hubs</b> is a highly scalable data streaming platform and ingestion service capable of receiving and processing millions of events per second. It can process and store events, data, or telemetry produced by distributed software and devices. Data sent to an event hub can be transformed and stored using any real-time analytics provider or batching/storage adapters.`
        ],
        [
            `What do you need to do in order to be able to monitor the metrics and the logs of Linux Azure Virtual Machine?`,
            `You have to add <b>Linux Diagnostic Extension (LAD) 3.0</b>.

            The Linux Diagnostic Extension helps a user monitor the health of a Linux VM running on Microsoft Azure.`
        ],
        [
            `What is Windows Azure Diagnostics?`,
            `Windows Azure Diagnostics enables you to collect diagnostic data from an application running in Windows Azure. You can use diagnostic data for debugging and troubleshooting, measuring performance, monitoring resource usage, traffic analysis and capacity planning, and auditing.`
        ],
        [
            `What is the difference between Block Blob vs Page Blob?`,
            `<b>Block blobs</b> are comprised of blocks, each of which is identified by a block ID. You create or modify a block blob by uploading a set of blocks and committing them by their block IDs. If you are uploading a block blob that is no more than 64 MB in size, you can also upload it in its entirety with a single Put Blob operation.
            
            <b>Page blobs</b> are a collection of pages. A page is a range of data that is identified by its offset from the start of the blob. To create a page blob, you initialize the page blob by calling Put Blob and specifying its maximum size.`
        ],
        [
            `What is swap deployments?`,
            `To promote a deployment in the Azure staging environment to the production environment, you can “swap” the deployments by switching the VIPs by which the two deployments are accessed. After the deployment, the DNS name for the cloud service points to the deployment that had been in the staging environment.`
        ],
        [
            `Explain the class that is used while retrieving the data?`,
            `SPSite Data query helps in retrieving the data that are present in different lists. It sort and aggregate data with the help of SharePoint.`
        ],
        [
            `What are ARM template?`,
            `ARM stands for Azure Resource Manager Template that specifies the resource need for the solutions. ARM templates are JSON file that helps Azure to run as Azure “<i>Infrastructure as Code</i>”.`
        ],
        [
            `Explain about the Microservices?`,
            `Microservices is the approach in which core functions are built independently. Then they are integrated to complete the process. The advantage of microservice architecture is that if one of the functions fails it will not affect the other functions. It is built with the motive to deliver the services faster.`
        ],
        [
            `Brief about the AKS?`,
            `AKS stands for Azure Kubernetes Service built with the purpose to manage the containerized application. It helps in smoothly managing the Kubernetes cluster. It is open-source that scale, automate deployment and manage workload. It also has a self-healing feature. Kubernetes is abbreviated as K8s.`
        ],
        [
            `Explain about Azure CosmosDB`,
            `CosmosDB is offered by Microsoft and is a Platform as a Service <b>(PaaS)</b>. It is regarded as NoSQL cloud-based database. CosmosDB also contains an Azure Document database and is accessible for all the Azure Regions. The data in CosmosDB is distributed and replicated globally.

            In CosmosDB, capacity management, automatic scaling, and serverless databases help match demand with storage capacity. CosmosDB provides a solution for mobile, IoT applications, gaming, and the web that requires a considerable storage platform`
        ]
    ]
}