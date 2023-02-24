let aws2Questions =  {
    Section: "AWS",
    Title: "Top 70+",
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
            Title: 'Source: intellipaat.com',
            URL: "https://intellipaat.com/blog/interview-question/amazon-aws-interview-questions/",
        }
    ],
    Questions: [
        [
            `Video tutorials`,
            `<iframe width="560" height="315" src="https://www.youtube.com/embed/r4YIdn2eTm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/SOTamWNgDKc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        ],
        [
            `AWS Basic Interview Questions`,
            ``
        ],
        [
            `What is AWS?`,
            `AWS (Amazon Web Services) is a platform to provide secure cloud services, database storage, offerings to compute power, content delivery, and other services to help business level and develop.`
        ],
        [
            `Give the comparison between AWS and OpenStack.`,
            `<table class="table table-bordered table-striped">
            <tbody>
            <tr>
            <td style="background-color: #008dd9; color: #ffffff; text-align: center; width: 164px;"><strong>Criteria</strong></td>
            <td style="background-color: #008dd9; color: #ffffff; text-align: center; width: 193px;"><strong>AWS</strong></td>
            <td style="background-color: #008dd9; color: #ffffff; text-align: center; width: 185px;"><strong>OpenStack</strong></td>
            </tr>
            <tr>
            <td style="width: 164px;"><strong>License</strong></td>
            <td style="width: 193px;">Amazon proprietary</td>
            <td style="width: 185px;">Open-source</td>
            </tr>
            <tr>
            <td style="width: 164px;"><strong>Operating system</strong></td>
            <td style="width: 193px;"><span style="font-weight: 400;">Provided as per the cloud administrator </span></td>
            <td style="width: 185px;"><span style="font-weight: 400;">AMIs provided by AWS</span></td>
            </tr>
            <tr>
            <td style="width: 164px;"><strong>Performing repeatable operations</strong></td>
            <td style="width: 193px;">Through templates</td>
            <td style="width: 185px;">Through text files</td>
            </tr>
            </tbody>
            </table>`
        ],
        [
            `What is the importance of buffer in Amazon Web Services?`,
            `An Elastic Load Balancer ensures that the incoming traffic is distributed optimally across various AWS instances. A buffer will synchronize different components and makes the arrangement additionally elastic to a burst of load or traffic. The components are prone to work in an unstable way of receiving and processing requests. The buffer creates an equilibrium linking various apparatus and crafts them to work at an identical rate to supply more rapid services.`
        ],
        [
            `How are Spot Instance, On-demand Instance, and Reserved Instance different from one another?`,
            `Both Spot Instance and On-demand Instance are models for pricing.
            
            <table class="table table-bordered table-striped">
            <tbody>
            <tr>
            <td style="background-color: #008dd9; color: #ffffff; text-align: center;" width="312"><strong>Spot Instance</strong></td>
            <td style="background-color: #008dd9; color: #ffffff; text-align: center;" width="312"><strong>On-demand Instance</strong></td>
            </tr>
            <tr>
            <td width="312">With Spot Instance, customers can purchase compute capacity with no upfront commitment at all.</td>
            <td width="312">With On-demand Instance, users can launch instances at any time based on the demand.</td>
            </tr>
            <tr>
            <td width="312">Spot Instances are spare Amazon instances that you can bid for.</td>
            <td width="312">On-demand Instances are suitable for the high-availability needs of applications.</td>
            </tr>
            <tr>
            <td width="312">When the bidding price exceeds the spot price, the instance is automatically launched, and the spot price fluctuates based on supply and demand for instances.</td>
            <td width="312">On-demand Instances are launched by users only with the pay-as-you-go model.</td>
            </tr>
            <tr>
            <td width="312">When the bidding price is less than the spot price, the instance is immediately taken away by Amazon.</td>
            <td width="312">On-demand Instances will remain persistent without any automatic termination from Amazon.</td>
            </tr>
            <tr>
            <td width="312">Spot Instances are charged on an hourly basis.</td>
            <td width="312">On-demand Instances are charged on a per-second basis</td>
            </tr>
            </tbody>
            </table>`
        ],
        [
            `Why do we make subnets?`,
            `Creating subnets means dividing a large network into smaller ones. These subnets can be created for several reasons. For example, creating and using subnets can help reduce congestion by making sure that the traffic destined for a subnet stays in that subnet. This helps in efficiently routing the traffic coming to the network that reduces the network’s load.`
        ],
        [
            `Is there a way to upload a file that is greater than 100 megabytes in Amazon S3?`,
            `Yes, it is possible by using the multipart upload utility from AWS. With the multipart upload utility, larger files can be uploaded in multiple parts that are uploaded independently. You can also decrease upload time by uploading these parts in parallel. After the upload is done, the parts will be merged into a single object or file to create the original file from which the parts were created.`
        ],
        [
            `What is the maximum number of S3 buckets you can create?`,
            `The maximum number of S3 buckets that can be created is 100.`
        ],
        [
            `How can you save the data on root volume on an EBS-backed machine?`,
            `We can save the data by overriding the terminate option`
        ],
        [
            `When should you use the classic load balancer and the application load balancer?`,
            `The classic load balancer is used for simple load balancing of traffic across multiple EC2 instances.
            
            <img src="https://intellipaat.com/blog/wp-content/uploads/2016/06/AWS-IQ.jpg" />

            While, the application load balancing is used for more intelligent load balancing, based on the multi-tier architecture or container-based architecture of the application. Application load balancing is mostly used when there is a need to route traffic to multiple services.
            
            <img src="https://intellipaat.com/blog/wp-content/uploads/2016/06/1-2.jpg" />`
        ],
        [
            `How many total VPCs per account/region and subnets per VPC can you have?`,
            `We can have a total of 5 VPCs for every account/region and 200 subnets for every VPC that you have.`
        ],
        [
            `Your organization has decided to have all their workload on the public cloud. But, due to certain security concerns, your organization decides to distribute some of the workload on private servers. You are asked to suggest a cloud architecture for your organization. What will be your suggestion?`,
            `A hybrid cloud. The hybrid cloud architecture is where an organization can use the public cloud for shared resources and the private cloud for its confidential workloads.`
        ],
        [
            `Which one of the storage solutions offered by AWS would you use if you need extremely low pricing and data archiving?`,
            `AWS Glacier is an extremely low-cost storage service offered by Amazon that is used for data archiving and backup purposes. The longer you store data in Glacier, the lesser it will cost you.`
        ],
        [
            `You have connected four instances to ELB. To automatically terminate your unhealthy instances and replace them with new ones, which functionality would you use?`,
            `Auto-scaling groups`
        ],
        [
            `The data on the root volumes of store-backed and EBS-backed instances get deleted by default when they are terminated. If you want to prevent that from happening, which instance would you use?`,
            `EBS-backed instances. EBS-backed instances use EBS volume as their root volume. EBS volume consists of virtual drives that can be easily backed up and duplicated by snapshots.
            
            <img src="https://intellipaat.com/blog/wp-content/uploads/2016/06/4-2.jpg" />

            The biggest advantage of EBS-backed volumes is that the data can be configured to be stored for later retrieval even if the virtual machine or the instances are shut down.`
        ],
        [
            `How will you configure an Amazon S3 bucket to serve static assets for your public web application?`,
            `By configuring the bucket policy to provide public read access to all objects
            
            That is all we have in our section on basic Amazon Web Services interview questions section. Let’s move onto the next section on AWS interview questions for experienced professionals.`
        ],
        [
            `Intermediate AWS Interview Questions`,
            ``
        ],
        [
            `Your organization wants to send and receive compliance emails to its clients using its own email address and domain. What service would you suggest for achieving the same in an easy and cost-effective way?`,
            `Amazon Simple Email Service (Amazon SES), which is a cloud-based email sending service, can be used for this purpose.`
        ],
        [
            `Can you launch Amazon Elastic Compute Cloud (EC2) instances with predetermined private IP addresses? If yes, then with which Amazon service it is possible?`,
            `Yes. It is possible by using VPC (Virtual Private Cloud).`
        ],
        [
            `If you launched a standby RDS, will it be launched in the same availability zone as your primary?`,
            `No, standby instances are automatically launched in different availability zones than the primary, making them physically independent infrastructures. This is because the whole purpose of standby instances is to prevent infrastructure failure. So, in case the primary goes down, the standby instance will help recover all of the data.`
        ],
        [
            `What is the name of Amazon's Content Delivery Network ?`,
            `Amazon CloudFront`
        ],
        [
            `Which Amazon solution will you use if you want to accelerate moving petabytes of data in and out of AWS, using storage devices that are designed to be secure for data transfer?`,
            `Amazon Snowball. AWS Snowball is the data transport solution for large amounts of data that need to be moved into and out of AWS using physical storage devices.`
        ],
        [
            `If you are running your DB instance as Multi-AZ deployment, can you use standby DB instances along with your primary DB instance?`,
            `No, the standby DB instance cannot be used along with the primary DB instances since the standby DB instances are supposed to be used only if the primary instance goes down.`
        ],
        [
            `Your organization is developing a new multi-tier web application in AWS. Being a fairly new and small organization, there’s limited staff. But, the organization requires high availability. This new application comprises complex queries and table joins. Which Amazon service will be the best solution for your organization’s requirements?`,
            `DynamoDB will be the right choice here since it is designed to be highly scalable, more than RDS or any other relational database service.`
        ],
        [
            `You accidently stopped an EC2 instance in a VPC with an associated Elastic IP. If you start the instance again, what will be the result?`,
            `Elastic IP will be only disassociated from the instance if it’s terminated. If it’s stopped and started, there won’t be any change to instance and no data will be lost.`
        ],
        [
            `Your organization has around 50 IAM users. Now, it wants to introduce a new policy that will affect the access permissions of an IAM user. How can it implement this without having to apply the policy at the individual user level?`,
            `It is possible using AWS IAM groups, by adding users in the groups as per their roles and by simply applying the policy to the groups.`
        ],
        [
            `Advanced AWS Interview Questions`,
            ``
        ],
        [
            `Your organization is using DynamoDB for its application. This application collects data from its users every 10 minutes and stores it in DynamoDB. Then every day, after a particular time interval, the data (respective to each user) is extracted from DynamoDB and sent to S3. Then, the application visualizes this data to the users. You are asked to propose a solution to help optimize the backend of the application for latency at lower cost. What would you recommend?`,
            `ElastiCache. Amazon ElastiCache is a caching solution offered by Amazon.
            
            <img src="https://intellipaat.com/blog/wp-content/uploads/2016/06/5-2.jpg" />

            It can be used to store a cached version of the application in a region closer to users so that when requests are made by the users the cached version of the application can respond, and hence latency will be reduced.`
        ],
        [
            `I created a web application with autoscaling. I observed that the traffic on my application is the highest on Wednesdays and Fridays between 9 AM and 7 PM. What would be the best solution for me to handle the scaling?`,
            `Configure a policy in autoscaling to scale as per the predictable traffic patterns.`
        ],
        [
            `How would you handle a situation where the relational database engine crashes often whenever the traffic to your RDS instances increases, given that the replica of RDS instance is not promoted as the master instance?`,
            `A bigger RDS instance type needs to be opted for handling large amounts of traffic, creating manual or automated snapshots to recover data in case the RDS instance goes down.`
        ],
        [
            `You have an application running on your Amazon EC2 instance. You want to reduce the load on your instance as soon as the CPU utilization reaches 100 percent. How will you do that?`,
            `It can be done by creating an autoscaling group to deploy more instances when the CPU utilization exceeds 100 percent and distributing traffic among instances by creating a load balancer and registering the Amazon EC2 instances with it.`
        ],
        [
            `What would I have to do if I want to access Amazon Simple Storage buckets and use the information for access audits?`,
            `AWS CloudTrail can be used in this case as it is designed for logging and tracking API calls, and it has also been made available for storage solutions.`
        ],
        [
            `I created a key in North Virginia region to encrypt my data in Oregon region. I also added three users to the key and an external AWS account. Then, to encrypt an object in S3, when I tried to use the same key, it was not listed. Where did I go wrong?`,
            `The data and the key should be in the same region. That is, the data that has to be encrypted should be in the same region as the one in which the key was created. In this case, the data is in Oregon region, whereas the key is created in North Virginia region.`
        ],
        [
            `Suppose, you hosted an application on AWS that lets the users render images and do some general computing. Which of the below listed services can you use to route the incoming user traffic?`,
            `--- Classic Load Balancer
            --- Application Load Balancer
            --- Network Load balancer
            
            Application Load Balancer: It supports path-based routing of the traffic and hence helps in enhancing the performance of the application structured as smaller services.
            
            <img src="https://intellipaat.com/blog/wp-content/uploads/2016/06/2-4.jpg" />
            
            Using application load balancer, the traffic can be routed based on the requests made. In this case scenario, the traffic where requests are made for rendering images can be directed to the servers only deployed for rendering images and the traffic where the requests are made for computing can be directed to the servers deployed only for general computing purposes.`
        ],
        [
            `Suppose, I created a subnet and launched an EC2 instance in the subnet with default settings. Which of the following options will be ready to use on the EC2 instance as soon as it is launched?`,
            `--- Elastic IP
            --- Private IP
            --- Public IP
            --- Internet Gateway
            
            Private IP. Private IP is automatically assigned to the instance as soon as it is launched. While elastic IP has to be set manually, Public IP needs an Internet Gateway which again has to be created since it’s a new VPC.`
        ],
        [
            `Your organization has four instances for production and another four for testing. You are asked to set up a group of IAM users that can only access the four production instances and not the other four testing instances. How will you achieve this?`,
            `We can achieve this by defining tags on the test and production instances and then adding a condition to the IAM policy that allows access to specific tags.`
        ],
        [
            `Your organization wants to monitor the read and write IOPS for its AWS MySQL RDS instance and then send real-time alerts to its internal operations team. Which service offered by Amazon can help your organization achieve this scenario?`,
            `Amazon CloudWatch would help us achieve this. Since Amazon CloudWatch is a monitoring tool offered by Amazon, it’s the right service to use in the above-mentioned scenario.`
        ],
        [
            `Which of the following services can be used if you want to capture client connection information from your load balancer at a particular time interval?`,
            `--- Enabling access logs on your load balancer
            --- Enabling CloudTrail for your load balancer
            --- Enabling CloudWatch metrics for your load balancer

            Enabling CloudTrail for your load balancer. AWS CloudTrail is an inexpensive log monitoring solution provided by Amazon. It can provide logging information for load balancers or any other AWS resources. The provided information can further be used for analysis.`
        ],
        [
            `You have created a VPC with private and public subnets. In what kind of subnet would you launch the database servers?`,
            `Database servers should be ideally launched in private subnets. Private subnets are ideal for the backend services and databases of all applications since they are not meant to be accessed by the users of the applications, and private subnets are not routable from the Internet.`
        ],
        [
            `Is it possible to switch from an Instance-backed root volume to an EBS-backed root volume at any time?`,
            `No, it is not possible.`
        ],
        [
            `Can you change the instance type of the instances that are running in your application tier and are also using autoscaling? If yes, then how? (Choose one of the following)`,
            `--- Yes, by modifying autoscaling launch configuration
            --- Yes, by modifying autoscaling tags configuration
            --- Yes, by modifying autoscaling policy configuration
            --- No, it cannot be changed

            Yes, the instance type of such instances can be changed by modifying the autoscaling launch configuration. The tags configuration is used to add metadata to the instances.`
        ],
        [
            `Can you name the additional network interface that can be created and attached to your Amazon EC2 instance launched in your VPC?`,
            `Elastic Network Interface`
        ],
        [
            `Out of the following options, where does the user specify the maximum number of instances with the autoscaling commands?`,
            `--- Autoscaling policy configuration
            --- Autoscaling group
            --- Autoscaling tags configuration
            --- Autoscaling launch configuration

            Autoscaling launch configuration`
        ],
        [
            `Which service provided by AWS can you use to transfer objects from your data center, when you are using Amazon CloudFront?`,
            `Amazon Direct Connect. It is an AWS networking service that acts as an alternative to using the Internet to connect customers in on-premise sites with AWS.`
        ],
        [
            `You have deployed multiple EC2 instances across multiple availability zones to run your website. You have also deployed a Multi-AZ RDS MySQL Extra Large DB Instance. The site performs a high number of small read and write operations per second. After some time, you observed that there is read contention on RDS MySQL. What would be your approach to resolve the contention and optimize your website?`,
            `We can deploy ElastiCache in-memory cache running in every availability zone. This will help in creating a cached version of the website for faster access in each availability zone. We can also add an RDS MySQL read replica in each availability zone that can help in efficient and better performance for read operations. So, there will not be any increased workload on the RDS MySQL instance, hence resolving the contention issue.`
        ],
        [
            `Your company wants you to propose a solution so that the company’s data center can be connected to Amazon cloud network. What would be your proposal?`,
            `The data center can be connected to the Amazon cloud network by establishing a virtual private network (VPN) between the VPC and the data center. A virtual private network lets you establish a secure pathway or tunnel from your premise or device to AWS global network.`
        ],
        [
            `Which of the following Amazon Services would you choose if you want complex querying capabilities but not a whole data warehouse?`,
            `--- RDS
            --- Redshift
            --- ElastiCache
            --- DynamoDB

            Amazon RDS`
        ],
        [
            `You want to modify the security group rules while it is being used by multiple EC2 instances. Will you be able to do that? If yes, will the new rules be implemented on all previously running EC2 instances that were using that security group?`,
            `Yes, the security group that is being used by multiple EC2 instances can be modified. The changes will be implemented immediately and be applied to all the previously running EC2 instances without restarting the instances.`
        ],
        [
            `Which one of the following is a structured data store that supports indexing and data queries to both EC2 and S3?`,
            `--- DynamoDB
            --- MySQL
            --- Aurora
            --- SimpleDB

            SimpleDB`
        ],
        [
            `Which service offered by Amazon will you choose if you want to collect and process e-commerce data for near real-time analysis? (Choose any two)`,
            `--- DynamoDB
            --- Redshift
            --- Aurora
            --- SimpleDB

            DynamoDB. DynamoDB is a fully managed NoSQL database service that can be fed any type of unstructured data. Hence, DynamoDB is the aptest choice for collecting data from e-commerce websites. For near-real-time analysis, we can use Amazon Redshift.`
        ],
        [
            `If in CloudFront the content is not present at an edge location, what will happen when a request is made for that content?`,
            `CloudFront will deliver the content directly from the origin server. It will also store the content in the cache of the edge location where the content was missing.`
        ],
        [
            `Can you change the private IP address of an EC2 instance while it is in running or in a stopped state?`,
            `No, it cannot be changed. When an EC2 instance is launched, a private IP address is assigned to that instance at the boot time. This private IP address is attached to the instance for its entire lifetime and can never be changed.`
        ],
        [
            `Which of the following options will you use if you have to move data over long distances using the Internet, from instances that are spread across countries to your Amazon S3 bucket?`,
            `--- Amazon CloudFront
            --- Amazon Transfer Acceleration
            --- Amazon Snowball
            --- Amazon Glacier

            Amazon Transfer Acceleration. It throttles the data transfer up to 300 percent using optimized network paths and Amazon Content Delivery Network. Snowball cannot be used here as this service does not support cross-region data transfer.`
        ],
        [
            `Which of the following services is a data storage system that also has REST API interface and uses secure HMAC-SHA1 authentication keys?`,
            `--- Amazon Elastic Block Store
            --- Amazon Snapshot
            --- Amazon S3
            
            Amazon S3. It gets various requests from applications, and it has to identify which requests are to be allowed and which are to be denied. Amazon S3 REST API uses a custom HTTP scheme based on a keyed HMAC for authentication of requests.`
        ],
        [
            `What is EC2?`,
            `Launched in 2006, EC2 is a virtual machine that you can use to deploy your own servers in the cloud, giving you OS-level control. It helps you have control over the hardware and updates, similar to the case of on-premise servers. EC2 can run on either of these operating systems- Microsoft and Linux. It can also support applications like Python, PHP, Apache, and more.`
        ],
        [
            `What is Snowball?`,
            `Snowball is an application designed for transferring terabytes of data into and outside of the AWS cloud. It uses secured physical storage to transfer the data. Snowball is considered as a petabyte-scale data transport solution that helps in cost and time-saving.`
        ],
        [
            `What is CloudWatch?`,
            `The Amazon CloudWatch is used for monitoring and managing data and getting actionable insights for AWS, on-premise applications, etc. It helps you to monitor your entire task stack that includes the applications, infrastructure, and services. Apart from this, CloudWatch also assists you in optimizing your resource utilization and cost by providing analytics-driven insights.`
        ],
        [
            `What is Elastic Transcoder?`,
            `In the AWS cloud, the Elastic Transcoder is used for converting media files into versions that can be run/played on devices such as Tablets, PCs, Smartphones, etc. It consists of advanced transcoding features with conversion rates starting from $ 0.0075 per minute.`
        ],
        [
            `What do you understand by VPC?`,
            `VPC is the abbreviated form of Virtual Private Cloud. It allows you to launch AWS resources that can be defined by you and fully customize the network configurations. Through VPC, you can define and take full control of your virtual network environment. For example- you can have a private address range, internet gateways, subnets, etc.`
        ],
        [
            `What does an AMI include?`,
            `AMI stands for Amazon Machine Images. It includes the following:
            
            --- Single or multiple Amazon Elastic Block Store (Amazon EBS) snapshots. Basically, templates for the root volume of the instance.
            --- Launch permissions that let AWS accounts use AMI to launch instances.
            --- A block device mapping to specify what volumes to be attached to the instance during its launch.`
        ],
        [
            `What are the Storage Classes available in Amazon S3?`,
            `The following storage classes are available in Amazon S3:
            
            --- S3 Standard - It is by and large the default storage class. In cases where no specification about the storage class is provided while uploading the object, Amazon S3 assigns the S3 Standard storage class by default.
            --- Reduced Redundancy - It is assigned when non-critical, reproducible data needs to be stored. The Reduced Redundancy Storage class is designed in a way that the above data categories can be stored with less redundancy. 
            
            However, it is always advisable to go ahead with the S3 Standard storage class.`
        ],
        [
            `What are the native AWS security logging capabilities?`,
            `The native AWS security logging capabilities include AWS CloudTrail, AWS Config, AWS detailed billing reports, Amazon S3 access logs, Elastic load balancing Access logs, Amazon CloudFront access logs, Amazon VPC Flow logs, etc. To know about native AWS security logging capabilities in detail, click here.`
        ],
        [
            `What are key pairs?`,
            `When connecting to an Amazon EC2 instance, you need to prove your identity. Key pairs are used to execute this. Basically, a  key pair is a set of security credentials that are used during identity proof. It consists of a public key and a private key.`
        ],
        [
            `What are policies and what are the different types of policies?`,
            `Policies define the permissions required to execute an operation irrespective of the method used to perform it. AWS supports six types of policies:
            
            --- Identity-based policies
            --- Resource-based policies
            --- Permissions boundaries
            --- Organizations SCPs
            --- ACLs
            --- Session policies
            
            1- Identity-based policies- They are JSON permissions policy documents that control what actions an identity can perform, under what conditions, and on which resources. These policies are further classified into 2 categories:
            
            --- Managed Policies– These policies are standalone identity-based policies that can be attached to different users, groups in your AWS environment.
            --- Inline policies- These policies are directly attached to a single user, group, or role. In situations where inline policies are used, a strict one-to-one relationship between a policy and an identity is maintained. 

            2- Resource-based policies- These policies are the ones attached to a resource such as an Amazon S3 bucket. They define which actions can be performed on the particular resource and under what circumstances.
            
            3- IAM permissions boundaries- They actually refer to the maximum level of permissions that identity-based policies can grant to the specific entity.
            
            4- Service Control Policies (SCPs)- SCPs are the maximum level of permissions for an organization or organizational unit. 
            
            5- Access Control lists- They define and control which principals in another AWS account can access the particular resource.
            
            6- Session policies- They are advanced policies that are passed as a parameter when a temporary session is programmatically created for a role or federated user.`
        ],
        [
            `What kind of IP address can you use for your customer gateway (CGW) address?`,
            `We can use the Internet routable IP address, which is a public IP address of your NAT device.`
        ],
        [
            `Which of the following is not an option in security groups?`,
            `--- List of users
            --- Ports
            --- IP addresses
            --- List of protocols
            --- List of users
            --- List of Users`
        ],
        [
            `AWS Scenario Based Questions`,
            ``
        ],
        [
            `A Company has a running Web Application Server in the N. Virginia region and the server has a large size EBS volume of approximately 500 GB, and to see the demand of business, the company needs to migrate the server from the current region to another AWS account’s Mumbai location. Which is the best way to migrate the server from the current location to the Mumbai region? And what information AWS administrator does require about AWS A/C?`,
            `Create an AMI of the server running in the North Virginia region. Once the AMI is created, The administrator would need the 12 digit account number of the #2 AWS account. This is required for copying the AMI which we have created.
            
            Once the AMI is successfully copied into the Mumbai region, you can launch the instance using copied AMI in the Mumbai region. Once the instance is running and if it’s completely operational, the server in the North Virginia region could be terminated. This is the best way to migrate a server to a different account without any hassle.

            <img src="https://intellipaat.com/blog/wp-content/uploads/2021/08/image.png" />`
        ],
        [
            `Unable to ping Instance We launched a Windows 2019 IIS server in the Ohio region and deployed a dynamic website in this server, in addition, the webserver also connected with a backend MS-SQL server to store and access data related to the application. Our users were able to access the website over the Internet. The next day our client informed us that they were able to access the website, but weren’t able to ping the server from the Internet. To ensure ICMP rule in Security Group, we checked, and the Security Group had allowed rule from 0.0.0.0/0. Would you try to help troubleshoot the issue?`,
            `If the client is able to access the website from his/her end, it means the connection is perfect and no issue with connectivity and the Security Group configuration also seems correct.
            
            We can check the internal firewall of the Windows 2019 IIS server. If it is blocking ICMP traffic, we should enable it.`
        ],
        [
            `A start-up company has a web application based in the us-east-1 Region with multiple Amazon EC2 instances running behind an Application Load Balancer across multiple Availability Zones. As the company's user base grows in the us-west-1 region, the company needs a solution with low latency and improved high availability. What should a solutions architect do to achieve it.?`,
            `You need to notice here, currently, the web application is in us-ease-1, and the user base grows in the us-east-1 region. The very first step, provision multiple EC2 instances (web application servers) and configure an Application Load Balancer in us-west-1. Now, create Global Accelerator in AWS Global Accelerator which uses an endpoint group that includes the load balancer endpoints in both Regions.`
        ],
        [
            `A company currently operates a web application backed by an Amazon RDS MySQL database. It has automated backups that are run daily and are not encrypted. A security audit requires future backups to be encrypted and unencrypted backups to be destroyed. The company will make at least one encrypted backup before destroying the old backups. What should be done to enable encryption for future backups?`,
            `--- Create a snapshot of the database.
            --- Copy it to an encrypted snapshot.
            --- Restore the database from the encrypted snapshot.`
        ],
        [
            `A company is going to launch one branch in the UK and need to continue with its existing main branch in the USA. The company has almost 15 GB of data which is stored in an S3 Bucket in the Ohio region and data is stored with the default storage class. The Company also wants to provide its updated & stored data in the London S3 bucket using one zone accessibility storage class to save storage costs. In addition, the company also wants that the data must be updated automatically in S3’s London bucket; if any data is modified or written in the S3 bucket in Ohio.`,
            `Configure Cross Region Replication Rule in Ohio region bucket and select destination bucket in the London region to replicate the data and store it in destination using one zone IA storage class to save cost.`
        ],
        [
            `You are an AWS Architect in your company, and you are asked to create a new VPC in the N.Virginia Region with two Public and two Private subnets using the following CIDR blocks:`,
            `<code>VPC CIDR = 10.10.10.0/24
            
            Public Subnet
            
            Subnet01 : 10.10.10.0/26
            Subnet02 : 10.10.10.64/26
            
            Private Subnet
            
            Subnet03: 10.10.10.128/26
            Subnet04: 10.10.10.192/26</code>
            
            <b>Using the above CIDRs you created a new VPC, and you launched EC2 instances in all subnets as per the need.
            
            Now, you are facing an issue in private instances that you are unable to update operating systems from the internet. So, what architectural changes and configurations will you suggest to resolve the issue?</b>
            
            NAT G/W to be installed in one public subnet and will configure the route-table associated with private subnets to add NAT G/W entry to provide internet access to private instances.`
        ],
        [
            `The data on the root volumes of store-backed and EBS-backed instances get deleted by default when they are terminated. If you want to prevent that from happening, which instance would you use? And ensure if the EC2 instance is restarted, the data or configuration in the EC2 instance should not be lost.`,
            `EBS-backed instances or instances with EBS Volume. EBS-backed instances use EBS volume as their root volume. These volumes contain Operating Systems, Applications, and Data. We can create Snapshots from these volumes or AMI from Snapshots.
            
            The main advantage of EBS-backed volume is that the data can be configured to be stored for later retrieval even if the virtual machine or the instances are shut down.`
        ],
        [
            `You have an application running on an EC2 instance. You need to reduce the load on your instance as soon as the CPU utilization reaches 80 percent. How will you accomplish the job?`,
            `It can be done by creating an autoscaling group to deploy more instances when the CPU utilization of the EC2 instance exceeds 80 percent and distributing traffic among instances by creating an application load balancer and registering EC2 instances as target instances.`
        ],
        [
            `In AWS, three different storage services are available, such as EFS, S3, and EBS. When should I use Amazon EFS vs. Amazon S3 vs. Amazon Elastic Block Store (EBS)?`,
            `Amazon Web Services (AWS) offers cloud storage services to support a wide range of storage workloads.
            
            Amazon EFS is a file storage service for use with Amazon compute (EC2, containers, serverless) and on-premises servers. Amazon EFS provides a file system interface, file system access semantics (such as strong consistency and file locking), and concurrently accessible storage for up to thousands of Amazon EC2 instances.
            
            Amazon EBS is a block-level storage service for use with Amazon EC2. Amazon EBS can deliver performance for workloads that require the lowest latency access to data from a single EC2 instance.
            
            Amazon S3 is an object storage service. Amazon S3 makes data available through an Internet API that can be accessed anywhere`
        ],
        [
            `A company's web application is using multiple Linux Amazon EC2 instances and storing data on Amazon EBS volumes. The company is looking for a solution to increase the resiliency of the application in case of a failure and to provide storage that complies with atomicity, consistency, isolation, and durability (ACID). What should a solutions architect do to meet these requirements?`,
            `Create an Application Load Balancer with AWS Auto Scaling groups across multiple Availability Zones. Store data on Amazon EFS and mount a target on each instance.`
        ],
        [
            `An application running on AWS uses an Amazon Aurora Multi-AZ deployment for its database. When evaluating performance metrics, a solutions architect discovered that the database reads are causing high I/O and adding latency to the write requests against the database. What should the solutions architect do to separate the read requests from the write requests?`,
            `Create a read replica and modify the application to use the appropriate endpoint.`
        ],
        [
            `A client reports that they wanted to see an audit log of any changes made to AWS resources in their account. What can the client do to achieve this?`,
            `Enable AWS CloudTrail logs to be delivered to an Amazon S3 bucket`
        ],
        [
            `Usually, you have noticed that one EBS volume can be connected with one EC2 instance, our company wants to run a business-critical application on multiple instances in a single region and need to store all instances output in single storage within the VPC. Instead of using EFS, our company is recommending the use of multi-attach volume with instances. As an architect, you need to suggest them what instance type and EBS volumes they should use.`,
            `The instance type should be EC2 Nitro-based instances and Provisioned IOPs io1 multi-attach EBS volumes.`
        ],
        [
            `A company is using a VPC peering connection option to connect its multiple VPCs in a single region to allow for cross VPC communication. A recent increase in account creations and VPCs has made it difficult to maintain the VPC peering strategy, and the company expects to grow to hundreds of VPCs. There are also new requests to create site-to-site VPNs with some of the VPCs. A solutions architect has been tasked with creating a centrally networking setup for multiple accounts and VPNs. Which networking solution would you recommend to resolve it?`,
            `Configure a transit gateway with AWS Transit Gateway and connect all VPCs and VPNs.`
        ],
        [
            `An organization has multiple facilities in various continents such as North America, Europe, and the Asia Pacific. The organization is designing a new distributed application to manage and optimize its global supply chain and its manufacturing process. It needs to design the process in such a way that the booked order in one continent should be able to support data failover with a short Recovery Time Objective (RTO). The uptime of the application should not impact manufacturing, what kind of solution would you recommend as a solution architect?`,
            `Use Amazon DynamoDB global tables feature for the database`
        ]
    ]
}