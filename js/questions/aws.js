let awsQuestions =  {
    Section: "AWS",
    Title: "Top 100+",
    URLs: [
        {
            Title: 'Video tutorial 1',
            URL: 'https://youtu.be/r4YIdn2eTm4'
        },
        {
            Title: 'Video tutorial 2',
            URL: 'https://youtu.be/SOTamWNgDKc'
        },
        {
            Title: 'Source: simplilearn.com',
            URL: "https://www.simplilearn.com/tutorials/aws-tutorial/aws-interview-questions",
        }
    ],
    Questions: [
        [
            `Video tutorials`,
            `<iframe width="560" height="315" src="https://www.youtube.com/embed/r4YIdn2eTm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/SOTamWNgDKc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        ],
        [
            `Basic AWS Interview Questions`,
            ``
        ],
        [
            `Define and explain the three basic types of cloud services and the AWS products that are built based on them?`,
            `The three basic types of cloud services are:
            
            --- Computing
            --- Storage
            --- Networking

            Here are some of the AWS products that are built based on the three cloud service types:
            
            --- Computing - These include EC2, Elastic Beanstalk, Lambda, Auto-Scaling, and Lightsat.
            --- Storage - These include S3, Glacier, Elastic Block Storage, Elastic File System.
            --- Networking - These include VPC, Amazon CloudFront, Route53`
        ],
        [
            `What is the relation between the Availability Zone and Region?`,
            `AWS regions are separate geographical areas, like the US-West 1 (North California) and Asia South (Mumbai). On the other hand, availability zones are the areas that are present inside the regions. These are generally isolated zones that can replicate themselves whenever required.
            
            <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/aws-region.JPG" />`
        ],
        [
            `What is auto-scaling?`,
            `Auto-scaling is a function that allows you to provision and launch new instances whenever there is a demand. It allows you to automatically increase or decrease resource capacity in relation to the demand.`
        ],
        [
            `What is geo-targeting in CloudFront?`,
            `Geo-Targeting is a concept where businesses can show personalized content to their audience based on their geographic location without changing the URL. This helps you create customized content for the audience of a specific geographical area, keeping their needs in the forefront.`
        ],
        [
            `What are the steps involved in a CloudFormation Solution?`,
            `Here are the steps involved in a CloudFormation solution:
            
            <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/clouf-formation-template.JPG" />
            
            1. Create or use an existing CloudFormation template using JSON or YAML format.
            2. Save the code in an S3 bucket, which serves as a repository for the code.
            3. Use AWS CloudFormation to call the bucket and create a stack on your template. 
            4. CloudFormation reads the file and understands the services that are called, their order, the relationship between the services, and provisions the services one after the other.`
        ],
        [
            `How do you upgrade or downgrade a system with near-zero downtime?`,
            `You can upgrade or downgrade a system with near-zero downtime using the following steps of migration:
            
            --- Open EC2 console
            --- Choose Operating System AMI
            --- Launch an instance with the new instance type
            --- Install all the updates
            --- Install applications
            --- Test the instance to see if it’s working
            --- If working, deploy the new instance and replace the older instance
            --- Once it’s deployed, you can upgrade or downgrade the system with near-zero downtime.`
        ],
        [
            `What are the tools and techniques that you can use in AWS to identify if you are paying more than you should be, and how to correct it?`,
            `You can know that you are paying the correct amount for the resources that you are using by employing the following resources:
            
            --- Check the Top Services Table
            It is a dashboard in the cost management console that shows you the top five most used services. This will let you know how much money you are spending on the resources in question.
            
            --- Cost Explorer
            There are cost explorer services available that will help you to view and analyze your usage costs for the last 13 months. You can also get a cost forecast for the upcoming three months.
            
            --- AWS Budgets
            This allows you to plan a budget for the services. Also, it will enable you to check if the current plan meets your budget and the details of how you use the services.
            
            --- Cost Allocation Tags
            This helps in identifying the resource that has cost more in a particular month. It lets you organize your resources and cost allocation tags to keep track of your AWS costs.`
        ],
        [
            `Is there any other alternative tool to log into the cloud environment other than console?`,
            `The that can help you log into the AWS resources are:
            
            --- Putty
            --- AWS CLI for Linux
            --- AWS CLI for Windows
            --- AWS CLI for Windows CMD
            --- AWS SDK
            --- Eclipse`
        ],
        [
            `What services can be used to create a centralized logging solution?`,
            `The essential services that you can use are Amazon CloudWatch Logs, store them in Amazon S3, and then use Amazon Elastic Search to visualize them. You can use Amazon Kinesis Firehose to move the data from Amazon S3 to Amazon ElasticSearch.
            
            <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/centralized-logging.JPG" />`
        ],
        [
            `What are the native AWS Security logging capabilities?`,
            `Most of the AWS services have their logging options. Also, some of them have an account level logging, like in AWS CloudTrail, AWS Config, and others. Let’s take a look at two services in specific:
            
            --- AWS CloudTrail
            This is a service that provides a history of the AWS API calls for every account. It lets you perform security analysis, resource change tracking, and compliance auditing of your AWS environment as well. The best part about this service is that it enables you to configure it to send notifications via AWS SNS when new logs are delivered.
            
            --- AWS Config 
            This helps you understand the configuration changes that happen in your environment. This service provides an AWS inventory that includes configuration history, configuration change notification, and relationships between AWS resources. It can also be configured to send information via AWS SNS when new logs are delivered.`
        ],
        [
            `What is a DDoS attack, and what services can minimize them?`,
            `DDoS is a cyber-attack in which the perpetrator accesses a website and creates multiple sessions so that the other legitimate users cannot access the service. The native tools that can help you deny the DDoS attacks on your AWS services are:
            
            --- AWS Shield
            --- AWS WAF
            --- Amazon Route53
            --- Amazon CloudFront
            --- ELB
            --- VPC
            
            <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/aws-ddos-attack.JPG" />`
        ],
        [
            `You are trying to provide a service in a particular region, but you do not see the service in that region. Why is this happening, and how do you fix it?`,
            `Not all Amazon AWS services are available in all regions. When Amazon initially launches a new service, it doesn’t get immediately published in all the regions. They start small and then slowly expand to other regions. So, if you don’t see a specific service in your region, chances are the service hasn’t been published in your region yet. However, if you want to get the service that is not available, you can switch to the nearest region that provides the services.`
        ],
        [
            `How do you set up a system to monitor website metrics in real-time in AWS?`,
            `Amazon CloudWatch helps you to monitor the application status of various AWS services and custom events. It helps you to monitor:
            
            --- State changes in Amazon EC2
            --- Auto-scaling lifecycle events
            --- Scheduled events
            --- AWS API calls
            --- Console sign-in events

            <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/amazon-cloud-watch.JPG" />`
        ],
        [
            `What are the different types of virtualization in AWS, and what are the differences between them?`,
            `The three major types of virtualization in AWS are: 
            
            --- Hardware Virtual Machine (HVM)
            It is a fully virtualized hardware, where all the virtual machines act separate from each other. These virtual machines boot by executing a master boot record in the root block device of your image.
            
            --- Paravirtualization (PV)
            Paravirtualization-GRUB is the bootloader that boots the PV AMIs. The PV-GRUB chain loads the kernel specified in the menu.
            
            --- Paravirtualization on HVM
            PV on HVM helps operating systems take advantage of storage and network I/O available through the host.`
        ],
        [
            `Name some of the AWS services that are not region-specific`,
            `AWS services that are not region-specific are:
            
            --- IAM
            --- Route 53
            --- Web Application Firewall 
            --- CloudFront`
        ],
        [
            `What are the differences between NAT Gateways and NAT Instances?`,
            `While both NAT Gateways and NAT Instances serve the same function, they still have some key differences.
            
            <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/NAT-differences.JPG" />`
        ],
        [
            `What is CloudWatch?`,
            `The Amazon CloudWatch has the following features:
            
            --- Depending on multiple metrics, it participates in triggering alarms.
            --- Helps in monitoring the AWS environments like CPU utilization, EC2, Amazon RDS instances, Amazon SQS, S3, Load Balancer, SNS, etc.`
        ],
        [
            `What is an Elastic Transcoder?`,
            `To support multiple devices with various resolutions like laptops, tablets, and smartphones, we need to change the resolution and format of the video. This can be done easily by an AWS Service tool called the Elastic Transcoder, which is a media transcoding in the cloud that exactly lets us do the needful. It is easy to use, cost-effective, and highly scalable for businesses and developers.`
        ],
        [
            `AWS Interview Questions for Intermediate and Experienced`,
            ``
        ],
        [
            `With specified private IP addresses, can an Amazon Elastic Compute Cloud (EC2) instance be launched? If so, which Amazon service makes it possible?`,
            `Yes. Utilizing VPC makes it possible (Virtual Private Cloud).`
        ],
        [
            `Define Amazon EC2 regions and availability zones?`,
            `Availability zones are geographically separate locations. As a result, failure in one zone has no effect on EC2 instances in other zones. When it comes to regions, they may have one or more availability zones. This configuration also helps to reduce latency and costs.`
        ],
        [
            `Explain Amazon EC2 root device volume?`,
            `The image that will be used to boot an EC2 instance is stored on the root device drive. This occurs when an Amazon AMI runs a new EC2 instance. And this root device volume is supported by EBS or an instance store. In general, the root device data on Amazon EBS is not affected by the lifespan of an EC2 instance.`
        ],
        [
            `Mention the different types of instances in  Amazon EC2 and explain its features.`,
            `1. General Purpose Instances: They are used to compute a range of workloads and aid in the allocation of processing, memory, and networking resources.
            2. Compute Optimized Instances: These are ideal for compute-intensive applications. They can handle  batch processing workloads, high-performance web servers, machine learning inference, and various other tasks.
            3. Memory Optimized: They process workloads that handle massive datasets in memory and deliver them quickly.
            4. Accelerated Computing: It aids in the execution of floating-point number calculations, data pattern matching, and graphics processing. These functions are carried out using hardware accelerators.
            5. Storage Optimised: They handle tasks that require sequential read and write access to big data sets on local storage.`
        ],
        [
            `Will your standby RDS be launched in the same availability zone as your primary?`,
            `No, standby instances are launched in different availability zones than the primary, resulting in physically separate infrastructures. This is because the entire purpose of standby instances is to prevent infrastructure failure. As a result, if the primary instance fails, the backup instance will assist in recovering all of the data.`
        ],
        [
            `Advanced AWS Interview Questions and Answers`,
            ``
        ],
        [
            `What is the difference between a Spot Instance, an On-demand Instance, and a Reserved Instance?`,
            `Spot instances are unused EC2 instances that users can use at a reduced cost.
            
            When you use on-demand instances, you must pay for computing resources without making long-term obligations.
            
            Reserved instances, on the other hand, allow you to specify attributes such as instance type, platform, tenancy, region, and availability zone. Reserved instances offer significant reductions and capacity reservations when instances in certain availability zones are used.`
        ],
        [
            `How would you address a situation in which the relational database engine frequently collapses when traffic to your RDS instances increases, given that the RDS instance replica is not promoted as the master instance?`,
            `A larger RDS instance type is required for handling significant quantities of traffic, as well as producing manual or automated snapshots to recover data if the RDS instance fails.`
        ],
        [
            `What do you understand by 'changing' in Amazon EC2?`,
            `To make limit administration easier for customers, Amazon EC2 now offers the option to switch from the current 'instance count-based limitations' to the new 'vCPU Based restrictions.' As a result, when launching a combination of instance types based on demand, utilization is measured in terms of the number of vCPUs.`
        ],
        [
            `Define Snapshots in Amazon Lightsail?`,
            `The point-in-time backups of EC2 instances, block storage drives, and databases are known as snapshots. They can be produced manually or automatically at any moment. Your resources can always be restored using snapshots, even after they have been created. These resources will also perform the same tasks as the original ones from which the snapshots were made.`
        ],
        [
            `AWS Scenario-based Questions`,
            ``
        ],
        [
            `On an EC2 instance, an application of yours is active. Once the CPU usage on your instance hits 80%, you must reduce the load on it. What strategy do you use to complete the task?`,
            `It can be accomplished by setting up an autoscaling group to deploy additional instances, when an EC2 instance's CPU use surpasses 80% and by allocating traffic across instances via the creation of an application load balancer and the designation of EC2 instances as target instances.`
        ],
        [
            `Multiple Linux Amazon EC2 instances running a web application for a firm are being used, and data is being stored on Amazon EBS volumes. The business is searching for a way to provide storage that complies with atomicity, consistency, isolation, and durability while also increasing the application's resilience in the event of a breakdown (ACID). What steps should a solutions architect take to fulfill these demands?`,
            `AWS Auto Scaling groups can create an application load balancer that spans many availability zones. Mount a target on each instance and save data on Amazon EFS.`
        ],
        [
            `Your business prefers to use its email address and domain to send and receive compliance emails. What service do you recommend to implement it easily and budget-friendly?`,
            `This can be accomplished by using Amazon Simple Email Service (Amazon SES), a cloud-based   email-sending service.`
        ],
        [
            `Technical and Non-Technical AWS Interview Questions`,
            ``
        ],
        [
            `Describe SES.`,
            `Amazon offers the Simple Email Service (SES) service, which allows you to send bulk emails to customers swiftly at a minimal cost.`
        ],
        [
            `Describe PaaS.`,
            `PaaS supports the operation of multiple cloud platforms, primarily for the development, testing, and  oversight of the operation of the program.`
        ],
        [
            `How many S3 buckets can be created?`,
            `Up to 100 buckets can be created by default.`
        ],
        [
            `What is the maximum limit of elastic IPs anyone can produce?`,
            `A maximum of five elastic IP addresses can be generated per location and AWS account.`
        ],
        [
            `AWS Questions for Amazon EC2`,
            ``
        ],
        [
            `What is Amazon EC2?`,
            `EC2 is short for Elastic Compute Cloud, and it provides scalable computing capacity. Using Amazon EC2 eliminates the need to invest in hardware, leading to faster development and deployment of applications. You can use Amazon EC2 to launch as many or as few virtual servers as needed, configure security and networking, and manage storage. It can scale up or down to handle changes in requirements, reducing the need to forecast traffic. EC2 provides virtual computing environments called “instances.”`
        ],
        [
            `What Are Some of the Security Best Practices for Amazon EC2?`,
            `Security best practices for Amazon EC2 include using Identity and Access Management (IAM) to control access to AWS resources; restricting access by only allowing trusted hosts or networks to access ports on an instance; only opening up those permissions you require, and disabling password-based logins for instances launched from your AMI.`
        ],
        [
            `Can S3 Be Used with EC2 Instances, and If Yes, How?`,
            `Amazon S3 can be used for instances with root devices backed by local instance storage. That way, developers have access to the same highly scalable, reliable, fast, inexpensive data storage infrastructure that Amazon uses to run its own global network of websites. To execute systems in the Amazon EC2 environment, developers load Amazon Machine Images (AMIs) into Amazon S3 and then move them between Amazon S3 and Amazon EC2.
            
            Amazon EC2 and Amazon S3 are two of the best-known web services that make up AWS.`
        ],
        [
            `What is the difference between stopping and terminating an EC2 instance?`,
            `While you may think that both stopping and terminating are the same, there is a difference. When you stop an EC2 instance, it performs a normal shutdown on the instance and moves to a stopped state. However, when you terminate the instance, it is transferred to a stopped state, and the EBS volumes attached to it are deleted and can never be recovered.`
        ],
        [
            `What are the different types of EC2 instances based on their costs?`,
            `The three types of EC2 instances are:
            
            --- On-demand Instance
            It is cheap for a short time but not when taken for the long term
            
            --- Spot Instance
            It is less expensive than the on-demand instance and can be bought through bidding. 
            
            --- Reserved Instance
            If you are planning to use an instance for a year or more, then this is the right one for you.`
        ],
        [
            `How do you set up SSH agent forwarding so that you do not have to copy the key every time you log in?`,
            `Here’s how you accomplish this:
            
            1. Go to your PuTTY Configuration
            2. Go to the category SSH -> Auth
            3. Enable SSH agent forwarding to your instance
            
            <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Putty-configuration.JPG" />`
        ],
        [
            `What are Solaris and AIX operating systems? Are they available with AWS?`,
            `Solaris is an operating system that uses SPARC processor architecture, which is not supported by the public cloud currently. 
            
            AIX is an operating system that runs only on Power CPU and not on Intel, which means that you cannot create AIX instances in EC2.
            
            Since both the operating systems have their limitations, they are not currently available with AWS.`
        ],
        [
            `How do you configure CloudWatch to recover an EC2 instance?`,
            `Here’s how you can configure them:
            
            --- Create an Alarm using Amazon CloudWatch
            --- In the Alarm, go to Define Alarm -> Actions tab
            --- Choose Recover this instance option
            
            <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/create-alarm.JPG" />`
        ],
        [
            `What are the common types of AMI designs?`,
            `There are many types of AMIs, but some of the common AMIs are:
            
            --- Fully Baked AMI
            --- Just Enough Baked AMI (JeOS AMI)
            --- Hybrid AMI`
        ],
        [
            `What are Key-Pairs in AWS?`,
            `The Key-Pairs are password-protected login credentials for the Virtual Machines that are used to prove our identity while connecting the Amazon EC2 instances. The Key-Pairs are made up of a Private Key and a Public Key which lets us connect to the instances.`
        ],
        [
            `AWS Interview Questions for S3`,
            ``
        ],
        [
            `What is Amazon S3?`,
            `S3 is short for Simple Storage Service, and Amazon S3 is the most supported storage platform available. S3 is object storage that can store and retrieve any amount of data from anywhere. Despite that versatility, it is practically unlimited as well as cost-effective because it is storage available on demand. In addition to these benefits, it offers unprecedented levels of durability and availability. Amazon S3 helps to manage data for cost optimization, access control, and compliance.`
        ],
        [
            `How can you recover/login to an EC2 instance for which you have lost the key?`,
            `Follow the steps provided below to recover an EC2 instance if you have lost the key:
            
            1. Verify that the EC2Config service is running
            2. Detach the root volume for the instance
            3. Attach the volume to a temporary instance
            4. Modify the configuration file
            5. Restart the original instance`
        ],
        [
            `What are some critical differences between AWS S3 and EBS?`,
            `Here are some differences between AWS S3 and EBS
            
            <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/feature-differences.JPG" />`
        ],
        [
            `How do you allow a user to gain access to a specific bucket?`,
            `You need to follow the four steps provided below to allow access. They are:
            
            1. Categorize your instances
            2. Define how authorized users can manage specific servers.
            3. Lockdown your tags
            4. Attach your policies to IAM users`
        ],
        [
            `How can you monitor S3 cross-region replication to ensure consistency without actually checking the bucket?`,
            `Follow the flow diagram provided below to monitor S3 cross-region replication:
            
            <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/S3-cross-region.JPG" />`
        ],
        [
            `What is SnowBall?`,
            `To transfer terabytes of data outside and inside of the AWS environment, a small application called SnowBall is used. 
            
            Data transferring using SnowBall is done in the following ways:
            
            1. A job is created.
            2. The SnowBall application is connected.
            3. The data is copied into the SnowBall application.
            4. Data is then moved to the AWS S3.`
        ],
        [
            `What are the Storage Classes available in Amazon S3?`,
            `The Storage Classes that are available in the Amazon S3 are the following:
            
            --- Amazon S3 Glacier Instant Retrieval storage class
            --- Amazon S3 Glacier Flexible Retrieval (Formerly S3 Glacier) storage class
            --- Amazon S3 Glacier Deep Archive (S3 Glacier Deep Archive)
            --- S3 Outposts storage class
            --- Amazon S3 Standard-Infrequent Access (S3 Standard-IA)
            --- Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)
            --- Amazon S3 Standard (S3 Standard)
            --- Amazon S3 Reduced Redundancy Storage
            --- Amazon S3 Intelligent-Tiering (S3 Intelligent-Tiering)`
        ],
        [
            `AWS Interview Questions for VPC`,
            ``
        ],
        [
            `What Is Amazon Virtual Private Cloud (VPC) and Why Is It Used?`,
            `A VPC is the best way of connecting to your cloud resources from your own data center. Once you connect your datacenter to the VPC in which your instances are present, each instance is assigned a private IP address that can be accessed from your data center. That way, you can access your public cloud resources as if they were on your own private network.`
        ],
        [
            `VPC is not resolving the server through DNS. What might be the issue, and how can you fix it?`,
            `To fix this problem, you need to enable the DNS hostname resolution, so that the problem resolves itself.`
        ],
        [
            `How do you connect multiple sites to a VPC?`,
            `If you have multiple VPN connections, you can provide secure communication between sites using the AWS VPN CloudHub. Here’s a diagram that will show you how to connect various sites to a VPC:
            
            <img src="https://s3.amazonaws.com/static2.simplilearn.com/ice9/free_resources_article_thumb/customer-gateway.JPG" />`
        ],
        [
            `Name and explain some security products and features available in VPC?`,
            `Here is a selection of security products and features:
            
            --- Security groups - This acts as a firewall for the EC2 instances, controlling inbound and outbound traffic at the instance level.
            --- Network access control lists - It acts as a firewall for the subnets, controlling inbound and outbound traffic at the subnet level.
            --- Flow logs - These capture the inbound and outbound traffic from the network interfaces in your VPC.`
        ],
        [
            `How do you monitor Amazon VPC?`,
            `You can monitor VPC by using:
            
            --- CloudWatch and CloudWatch logs
            --- VPC Flow Logs`
        ],
        [
            `How many Subnets can you have per VPC?`,
            `We can have up to 200 Subnets per Amazon Virtual Private Cloud (VPC).`
        ],
        [
            `General AWS Interview Questions`,
            ``
        ],
        [
            `When Would You Prefer Provisioned IOPS over Standard Rds Storage?`,
            `You would use Provisioned IOPS when you have batch-oriented workloads. Provisioned IOPS delivers high IO rates, but it is also expensive. However, batch processing workloads do not require manual intervention.`
        ],
        [
            `How Do Amazon Rds, Dynamodb, and Redshift Differ from Each Other?`,
            `Amazon RDS is a database management service for relational databases. It manages patching, upgrading, and data backups automatically. It’s a database management service for structured data only. On the other hand, DynamoDB is a NoSQL database service for dealing with unstructured data. Redshift is a data warehouse product used in data analysis.`
        ],
        [
            `What Are the Benefits of AWS’s Disaster Recovery?`,
            `Businesses use cloud computing in part to enable faster disaster recovery of critical IT systems without the cost of a second physical site. The AWS cloud supports many popular disaster recovery architectures ranging from small customer workload data center failures to environments that enable rapid failover at scale. With data centers all over the world, AWS provides a set of cloud-based disaster recovery services that enable rapid recovery of your IT infrastructure and data.`
        ],
        [
            `How can you add an existing instance to a new Auto Scaling group?`,
            `Here’s how you can add an existing instance to a new Auto Scaling group:
            
            --- Open EC2 console
            --- Select your instance under Instances
            --- Choose Actions -> Instance Settings -> Attach to Auto Scaling Group
            --- Select a new Auto Scaling group
            --- Attach this group to the Instance
            --- Edit the Instance if needed
            --- Once done, you can successfully add the instance to a new Auto Scaling group
            `
        ],
        [
            `What are the factors to consider while migrating to Amazon Web Services?`,
            `Here are the factors to consider during AWS migration:
            
            --- Operational Costs - These include the cost of infrastructure, ability to match demand and supply, transparency, and others.
            --- Workforce Productivity 
            --- Cost avoidance
            --- Operational resilience
            --- Business agility`
        ],
        [
            `What is RTO and RPO in AWS?`,
            `RTO or Recovery Time Objective is the maximum time your business or organization is willing to wait for a recovery to complete in the wake of an outage. On the other hand, RPO or Recovery Point Objective is the maximum amount of data loss your company is willing to accept as measured in time.`
        ],
        [
            `If you would like to transfer vast amounts of data, which is the best option among Snowball, Snowball Edge, and Snowmobile?`,
            `AWS Snowball is basically a data transport solution for moving high volumes of data into and out of a specified AWS region. On the other hand, AWS Snowball Edge adds additional computing functions apart from providing a data transport solution. The snowmobile is an exabyte-scale migration service that allows you to transfer data up to 100 PB.`
        ],
        [
            `Explain what T2 instances are?`,
            `The T2 Instances are intended to give the ability to burst to a higher performance whenever the workload demands it and also provide a moderate baseline performance to the CPU.
            
            The T2 instances are General Purpose instance types and are low in cost as well. They are usually used wherever workloads do not consistently or often use the CPU.`
        ],
        [
            `What are the advantages of AWS IAM?`,
            `AWS IAM allows an administrator to provide multiple users and groups with granular access. Various user groups and users may require varying levels of access to the various resources that have been developed. We may assign roles to users and create roles with defined access levels using IAM.
            
            It further gives us Federated Access, which allows us to grant applications and users access to resources without having to create IAM Roles.`
        ],
        [
            `Explain Connection Draining`,
            `Connection Draining is an AWS service that allows us to serve current requests on the servers that are either being decommissioned or updated.
            
            By enabling this Connection Draining, we let the Load Balancer make an outgoing instance finish its existing requests for a set length of time before sending it any new requests. A departing instance will immediately go off if Connection Draining is not enabled, and all pending requests will fail.`
        ],
        [
            `What is Power User Access in AWS?`,
            `The AWS Resources owner is identical to an Administrator User. The Administrator User can build, change, delete, and inspect resources, as well as grant permissions to other AWS users.
            
            Administrator Access without the ability to control users and permissions is provided to a Power User. A Power User Access user cannot provide permissions to other users but has the ability to modify, remove, view, and create resources.`
        ],
        [
            `AWS Questions for CloudFormation`,
            ``
        ],
        [
            `How is AWS CloudFormation different from AWS Elastic Beanstalk?`,
            `Here are some differences between AWS CloudFormation and AWS Elastic Beanstalk:
            
            --- AWS CloudFormation helps you provision and describe all of the infrastructure resources that are present in your cloud environment. On the other hand, AWS Elastic Beanstalk provides an environment that makes it easy to deploy and run applications in the cloud.
            --- AWS CloudFormation supports the infrastructure needs of various types of applications, like legacy applications and existing enterprise applications. On the other hand, AWS Elastic Beanstalk is combined with the developer tools to help you manage the lifecycle of your applications.`
        ],
        [
            `What are the elements of an AWS CloudFormation template?`,
            `AWS CloudFormation templates are YAML or JSON formatted text files that are comprised of five essential elements, they are:
            
            --- Template parameters
            --- Output values
            --- Data tables
            --- Resources
            --- File format version`
        ],
        [
            `What happens when one of the resources in a stack cannot be created successfully?`,
            `If the resource in the stack cannot be created, then the CloudFormation automatically rolls back and terminates all the resources that were created in the CloudFormation template. This is a handy feature when you accidentally exceed your limit of Elastic IP addresses or don’t have access to an EC2 AMI.
            
            <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Aws-cloud-formation.JPG" />`
        ],
        [
            `AWS Questions for Elastic Block Storage`,
            ``
        ],
        [
            `How can you automate EC2 backup using EBS?`,
            `Use the following steps in order to automate EC2 backup using EBS:
            
            Get the list of instances and connect to AWS through API to list the Amazon EBS volumes that are attached locally to the instance.
            List the snapshots of each volume, and assign a retention period of the snapshot. Later on, create a snapshot of each volume.
            Make sure to remove the snapshot if it is older than the retention period.`
        ],
        [
            `What is the difference between EBS and Instance Store?`,
            `EBS is a kind of permanent storage in which the data can be restored at a later point. When you save data in the EBS, it stays even after the lifetime of the EC2 instance. On the other hand, Instance Store is temporary storage that is physically attached to a host machine. With an Instance Store, you cannot detach one instance and attach it to another. Unlike in EBS, data in an Instance Store is lost if any instance is stopped or terminated.`
        ],
        [
            `Can you take a backup of EFS like EBS, and if yes, how?`,
            `Yes, you can use the EFS-to-EFS backup solution to recover from unintended changes or deletion in Amazon EFS. Follow these steps:
            
            1. Sign in to the AWS Management Console
            2. Click the launch EFS-to-EFS-restore button
            3. Use the region selector in the console navigation bar to select region
            4. Verify if you have chosen the right template on the Select Template page
            5. Assign a name to your solution stack
            6. Review the parameters for the template and modify them if necessary`
        ],
        [
            `How do you auto-delete old snapshots?`,
            `Here’s the procedure for auto-deleting old snapshots:
            
            --- As per procedure and best practices, take snapshots of the EBS volumes on Amazon S3.
            --- Use AWS Ops Automator to handle all the snapshots automatically.
            --- This allows you to create, copy, and delete Amazon EBS snapshots.
            
            <img src="https://s3.amazonaws.com/static2.simplilearn.com/ice9/free_resources_article_thumb/Amazon-s3.JPG" />`
        ],
        [
            `AWS Interview Questions for Elastic Load Balancing`,
            ``
        ],
        [
            `What are the different types of load balancers in AWS?`,
            `There are three types of load balancers that are supported by Elastic Load Balancing:
            
            1. Application Load Balancer
            2. Network Load Balancer
            3. Classic Load Balancer`
        ],
        [
            `What are the different uses of the various load balancers in AWS Elastic Load Balancing?`,
            `--- Application Load Balancer
            Used if you need flexible application management and TLS termination.
            
            --- Network Load Balancer
            Used if you require extreme performance and static IPs for your applications.
            
            --- Classic Load Balancer
            Used if your application is built within the EC2 Classic network`
        ],
        [
            `AWS Interview Questions for Security`,
            ``
        ],
        [
            `What Is Identity and Access Management (IAM) and How Is It Used?`,
            `Identity and Access Management (IAM) is a web service for securely controlling access to AWS services. IAM lets you manage users, security credentials such as access keys, and permissions that control which AWS resources users and applications can access.`
        ],
        [
            `How can you use AWS WAF in monitoring your AWS applications?`,
            `AWS WAF or AWS Web Application Firewall protects your web applications from web exploitations. It helps you control the traffic flow to your applications. With WAF, you can also create custom rules that block common attack patterns. It can be used for three cases: allow all requests, prevent all requests, and count all requests for a new policy.`
        ],
        [
            `What are the different AWS IAM categories that you can control?`,
            `Using AWS IAM, you can do the following:
            
            --- Create and manage IAM users
            --- Create and manage IAM groups
            --- Manage the security credentials of the users
            --- Create and manage policies to grant access to AWS services and resources`
        ],
        [
            `What are the policies that you can set for your users’ passwords?`,
            `Here are some of the policies that you can set:
            
            --- You can set a minimum length of the password, or you can ask the users to add at least one number or special characters in it.
            --- You can assign requirements of particular character types, including uppercase letters, lowercase letters, numbers, and non-alphanumeric characters.
            --- You can enforce automatic password expiration, prevent reuse of old passwords, and request for a password reset upon their next AWS sign in.
            --- You can have the AWS users contact an account administrator when the user has allowed the password to expire.`
        ],
        [
            `What is the difference between an IAM role and an IAM user?`,
            `The two key differences between the IAM role and IAM user are:
            
            --- An IAM role is an IAM entity that defines a set of permissions for making AWS service requests, while an IAM user has permanent long-term credentials and is used to interact with the AWS services directly.  
            --- In the IAM role, trusted entities, like IAM users, applications, or an AWS service, assume roles whereas the IAM user has full access to all the AWS IAM functionalities.`
        ],
        [
            `What are the managed policies in AWS IAM?`,
            `There are two types of managed policies; one that is managed by you and one that is managed by AWS. They are IAM resources that express permissions using IAM policy language. You can create, edit, and manage them separately from the IAM users, groups, and roles to which they are attached.`
        ],
        [
            `Can you give an example of an IAM policy and a policy summary?`,
            `Here’s an example of an IAM policy to grant access to add, update, and delete objects from a specific folder.
            
            <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/IAM-policy.JPG" />
            
            Here’s an example of a policy summary:
            
            <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/policy-summary.JPG" />`
        ],
        [
            `How does AWS IAM help your business?`,
            `IAM enables to:
            
            --- Manage IAM users and their access - AWS IAM provides secure resource access to multiple users
            --- Manage access for federated users – AWS allows you to provide secure access to resources in your AWS account to your employees and applications without creating IAM roles`
        ],
        [
            `AWS Interview Questions for Route 53`,
            ``
        ],
        [
            `What Is Amazon Route 53?`,
            `Amazon Route 53 is a scalable and highly available Domain Name System (DNS). The name refers to TCP or UDP port 53, where DNS server requests are addressed.`
        ],
        [
            `What Is Cloudtrail and How Do Cloudtrail and Route 53 Work Together?`,
            `CloudTrail is a service that captures information about every request sent to the Amazon Route 53 API by an AWS account, including requests that are sent by IAM users. CloudTrail saves log files of these requests to an Amazon S3 bucket. CloudTrail captures information about all requests. You can use information in the CloudTrail log files to determine which requests were sent to Amazon Route 53, the IP address that the request was sent from, who sent the request, when it was sent, and more.`
        ],
        [
            `What is the difference between Latency Based Routing and Geo DNS?`,
            `The Geo Based DNS routing takes decisions based on the geographic location of the request. Whereas, the Latency Based Routing utilizes latency measurements between networks and AWS data centers. Latency Based Routing is used when you want to give your customers the lowest latency possible. On the other hand, Geo Based routing is used when you want to direct the customer to different websites based on the country or region they are browsing from.`
        ],
        [
            `What is the difference between a Domain and a Hosted Zone?`,
            `--- Domain
            A domain is a collection of data describing a self-contained administrative and technical unit. For example, www.simplilearn.com is a domain and a general DNS concept.
            
            --- Hosted zone
            A hosted zone is a container that holds information about how you want to route traffic on the internet for a specific domain. For example, lms.simplilearn.com is a hosted zone.`
        ],
        [
            `How does Amazon Route 53 provide high availability and low latency?`,
            `Here’s how Amazon Route 53 provides the resources in question:
            
            --- Globally Distributed Servers
            Amazon is a global service and consequently has DNS services globally. Any customer creating a query from any part of the world gets to reach a DNS server local to them that provides low latency. 
            
            --- Dependency
            Route 53 provides a high level of dependability required by critical applications
            
            --- Optimal Locations
            Route 53 uses a global anycast network to answer queries from the optimal position automatically.`
        ],
        [
            `AWS Interview Questions for Config`,
            ``
        ],
        [
            `How does AWS config work with AWS CloudTrail?`,
            `AWS CloudTrail records user API activity on your account and allows you to access information about the activity. Using CloudTrail, you can get full details about API actions such as the identity of the caller, time of the call, request parameters, and response elements. On the other hand, AWS Config records point-in-time configuration details for your AWS resources as Configuration Items (CIs). 
            
            You can use a CI to ascertain what your AWS resource looks like at any given point in time. Whereas, by using CloudTrail, you can quickly answer who made an API call to modify the resource. You can also use Cloud Trail to detect if a security group was incorrectly configured.`
        ],
        [
            `Can AWS Config aggregate data across different AWS accounts?`,
            `Yes, you can set up AWS Config to deliver configuration updates from different accounts to one S3 bucket, once the appropriate IAM policies are applied to the S3 bucket.`
        ],
        [
            `AWS Interview Questions for Database`,
            ``
        ],
        [
            `How are reserved instances different from on-demand DB instances?`,
            `Reserved instances and on-demand instances are the same when it comes to function. They only differ in how they are billed.
            
            Reserved instances are purchased as one-year or three-year reservations, and in return, you get very low hourly based pricing when compared to the on-demand cases that are billed on an hourly basis.`
        ],
        [
            `Which type of scaling would you recommend for RDS and why?`,
            `There are two types of scaling - vertical scaling and horizontal scaling. Vertical scaling lets you vertically scale up your master database with the press of a button. A database can only be scaled vertically, and there are 18 different instances in which you can resize the RDS. On the other hand, horizontal scaling is good for replicas. These are read-only replicas that can only be done through Amazon Aurora.`
        ],
        [
            `What is a maintenance window in Amazon RDS? Will your DB instance be available during maintenance events?`,
            `RDS maintenance window lets you decide when DB instance modifications, database engine version upgrades, and software patching have to occur. The automatic scheduling is done only for patches that are related to security and durability. By default, there is a 30-minute value assigned as the maintenance window and the DB instance will still be available during these events though you might observe a minimal effect on performance.`
        ],
        [
            `What are the consistency models in DynamoDB?`,
            `There are two consistency models In DynamoDB. First, there is the Eventual Consistency Model, which maximizes your read throughput. However, it might not reflect the results of a recently completed write. Fortunately, all the copies of data usually reach consistency within a second. The second model is called the Strong Consistency Model. This model has a delay in writing the data, but it guarantees that you will always see the updated data every time you read it.`
        ],
        [
            `What type of query functionality does DynamoDB support?`,
            `DynamoDB supports GET/PUT operations by using a user-defined primary key. It provides flexible querying by letting you query on non-primary vital attributes using global secondary indexes and local secondary indexes.`
        ],
        [
            `AWS Interview Questions - Short Answer Questions`,
            ``
        ],
        [
            `Suppose you are a game designer and want to develop a game with single-digit millisecond latency, which of the following database services would you use?`,
            `Amazon DynamoDB`
        ],
        [
            `If you need to perform real-time monitoring of AWS services and get actionable insights, which services would you use?`,
            `Amazon CloudWatch`
        ],
        [
            `As a web developer, you are developing an app, targeted primarily for the mobile platform. Which of the following lets you add user sign-up, sign-in, and access control to your web and mobile apps quickly and easily?`,
            `Amazon Cognito`
        ],
        [
            `You are a Machine Learning Engineer who is on the lookout for a solution that will discover sensitive information that your enterprise stores in AWS and then use NLP to classify the data and provide business-related insights. Which among the services would you choose?`,
            `AWS Macie`
        ],
        [
            `You are the system administrator in your company, which is running most of its infrastructure on AWS. You are required to track your users and keep tabs on how they are being authenticated. You wish to create and manage AWS users and use permissions to allow and deny their access to AWS resources. Which of the following services suits you best?`,
            `AWS IAM`
        ],
        [
            `Which service do you use if you want to allocate various private and public IP addresses to make them communicate with the internet and other instances?`,
            `Amazon VPC`
        ],
        [
            `This service provides you with cost-efficient and resizable capacity while automating time-consuming administration tasks`,
            `Amazon Relational Database Service`
        ],
        [
            `Which of the following is a means for accessing human researchers or consultants to help solve problems on a contractual or temporary basis?`,
            `Amazon Mechanical Turk`
        ],
        [
            `This service is used to make it easy to deploy, manage, and scale containerized applications using Kubernetes on AWS. Which of the following is this AWS service?`,
            `Amazon Elastic Container Service`
        ],
        [
            `This service lets you run code without provisioning or managing servers. Select the correct service from the below options`,
            `AWS Lambda`
        ],
        [
            `As an AWS Developer, using this pay-per-use service, you can send, store, and receive messages between software components. Which of the following is it?`,
            `Amazon Simple Queue Service`
        ],
        [
            `Which service do you use if you would like to host a real-time audio and video conferencing application on AWS, this service provides you with a secure and easy-to-use application?`,
            `Amazon Chime`
        ],
        [
            `As your company's AWS Solutions Architect, you are in charge of designing thousands of similar individual jobs. Which of the following services best meets your requirements?`,
            `AWS Batch`
        ],
        [
            `FAQs`,
            ``
        ],
        [
            `Does Amazon support all services with region-based services?`,
            `No, not all of its services offer usage that is specific to a particular place. But the majority of the services are region-specific.`
        ],
        [
            `In AWS, what is EBS?`,
            `A storage system used to store persistent data is called elastic block storage (EBS). Block-level storage volumes and EC2 instances can be used with EBS for throughput- and transaction-intensive workloads of any scale.`
        ],
        [
            `What is Amazon EC2?`,
            `Amazon Elastic Compute Cloud (Amazon EC2) is a computing capability that is scalable on the Amazon Web Services (AWS) Cloud.`
        ],
        [
            `What is the benefit of Amazon EC2?`,
            `Using Amazon EC2 eliminates the need to invest in hardware upfront, allowing you to develop and deploy apps more quickly.`
        ]
    ]
}