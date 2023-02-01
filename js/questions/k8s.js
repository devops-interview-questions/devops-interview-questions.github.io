let k8sQuestions =  {
    Section: "Kubernetes",
    Title: "Top 55",
    URLs: [
        {
            Title: 'Video tutorial 1',
            URL: 'https://youtu.be/s_o8dwzRlu4'
        },
        {
            Title: 'Video tutorial 2',
            URL: 'https://youtu.be/X48VuDVv0do'
        },
        {
            Title: 'Source: guru99.com',
            URL: "https://www.guru99.com/kubernetes-interview-questions-answers.html",
        }
    ],
    Questions: [
        [
            `Video tutorials`,
            `<iframe width="560" height="315" src="https://www.youtube.com/embed/s_o8dwzRlu4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            <iframe width="560" height="315" src="https://www.youtube.com/embed/X48VuDVv0do" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        ],
        [
            `What is Kubernetes?`,
            `Kubernetes is a container management system developed in the Google platform. The purpose of Kubernetes is to manage a containerized application in various types of physical, virtual, and cloud environments. Google Kubernetes is a highly flexible container tool to deliver even complex applications, consistently. Applications run on clusters of hundreds to thousands of individual servers.`
        ],
        [
            `Define node in Kubernetes`,
            `A node the smallest unit of hardware. It defines a single machine in a cluster that can be a virtual machine from a cloud provider or physical machine in the data center. Every machine available in the Kubernetes cluster can substitute other machines.`
        ],
        [
            `What is the work of a kube-scheduler?`,
            `Kube-scheduler is the default scheduler for Kubernetes. It assigns nodes to newly created pods.`
        ],
        [
            `Define daemon sets`,
            `Daemon sets are a set of pods that runs on a host. They are used for host layers attributes like monitoring network or simple network.`
        ],
        [
            `Define Heapster in Kubernetes`,
            `A Heapster is a metrics collection and performance monitoring system for data that are collected by the Kublet.`
        ],
        [
            `What tasks are performed by Kubernetes?`,
            `Kubernetes is the Linux kernel which is used for distributed systems. It helps you to be abstract the underlying hardware of the nodes(servers) and offers a consistent interface for applications that consume the shared pool of resources.`
        ],
        [
            `Define Kubernetes controller manager`,
            `The controller manager is a daemon used for garbage collection, core control loops, and namespace creation. It enables the running of more than one process on the master node.`
        ],
        [
            `Why use namespace in Kubernetes?`,
            `Namespaces in Kubernetes are used for dividing cluster resources between users. It helps the environment where more than one user spread projects or teams and provides a scope of resources.`
        ],
        [
            `Why use Kubernetes?`,
            `Kubernetes is used because:

            --- Kubernetes can run on-premises bare metal, OpenStack, public clouds Google, Azure, AWS, etc.
            --- It helps you to avoid vendor lock issues as it can use any vendor-specific APIs or services except where Kubernetes provides an abstraction, e.g., load balancer and storage.
            --- It will enable applications that need to be released and updated without any downtime.
            --- Kubernetes allows you to assure those containerized apps run where and when you want and help you to find resources and tools which you want to work.`
        ],
        [
            `What are the features of Kubernetes?`,
            `The features of Kubernetes are:

            --- Automated Scheduling
            --- Self-Healing Capabilities
            --- Automated rollouts & rollback
            --- Horizontal Scaling & Load Balancing
            --- Offers environment consistency for development, testing, and production
            --- Infrastructure is loosely coupled to each component can act as a separate unit
            --- Provides a higher density of resource utilization
            --- Offers enterprise-ready features
            --- Application-centric management
            --- Auto-scalable infrastructure
            --- You can create predictable infrastructure`
        ],
        [
            `Mention the types of controller managers`,
            `Types of controller managers are:
            1) endpoints controller,
            2) service accounts controller,
            3) node controller,
            4) namespace controller,
            5) replication controller,
            6) token controller.`
        ],
        [
            `Explain Kubernetes Architecture`,
            `--- <b>Master Node:</b> The master node is the first and most vital component which is responsible for the management of Kubernetes cluster. It is the entry point for all kinds of administrative tasks. There may be more than one master node in the cluster to check for fault tolerance.
            --- <b>API Server:</b> The API server acts as an entry point for all the REST commands used for controlling the cluster.
            --- <b>Scheduler:</b> The scheduler schedules the tasks to the slave node. It stores the resource usage information for every slave node. It is responsible for distributing the workload.
            --- <b>Etcd:</b> etcd components, store configuration detail, and wright values. It communicates with the most component to receive commands and work. It also manages network rules and port forwarding activity.
            --- <b>Worker/Slave nodes:</b> Worker nodes are another essential component that contains all the required services to manage the networking between the containers, communicate with the master node, which allows you to assign resources to the scheduled containers.
            --- <b>Kubelet:</b> It gets the configuration of a Pod from the API server and ensures that the described containers are up and running.
            --- <b>Docker Container:</b> Docker container runs on each of the worker nodes, which runs the configured pods.
            --- <b>Pods:</b> A pod is a combination of single or multiple containers that logically run together on nodes.
            
            <b><i>Kubernetes Architecture Diagram</i></b>

            <img src="https://www.guru99.com/images/1/061419_0430_KubernetesT1.png" />`
        ],
        [
            `List various services available in Kubernetes`,
            `Various services available in Kubernetes are 1) Cluster IP service, 2) Load Balancer service, 3) Node Port service, 4) External Name Creation service.`
        ],
        [
            `Define Cluster IP`,
            `The Cluster IP is a Kubernetes service that offers a service inside the cluster that other apps inside cluster can access.`
        ],
        [
            `Explain node port`,
            `The node port service is a fundamental way to get external traffic to your service. It opens a particular port on all nodes and forwards network traffic sent to this port.`
        ],
        [
            `Define kubelet`,
            `The kubelet is a service agent which controls and maintains group pf pods by checking pod specification using Kubernetes. The kubelet runs on each node and allows to communicate between a master node and a slave node.`
        ],
        [
            `What are the disadvantages of Kubernetes?`,
            `--- Kubernetes dashboard is not as helpful as it should be
            --- Security is not very effective.
            --- It is very complex and can reduce productivity
            --- Kubernetes is more costly than its alternatives.`
        ],
        [
            `What is Kube-proxy?`,
            `Kube-proxy is an implementation of both a network proxy and a load balancer. It is used to support service abstraction used with other networking operations. It is responsible for directing traffic to the container depend on IP and the port number.`
        ],
        [
            `What is the difference between Kubernetes and Docker Swarm?`,
            `The difference between Kubernetes and Docker Swarm is:
            
            <table class="table table-striped">
<thead>
<tr>
<th>Kubernetes</th>
<th>Docker Swarm</th>
</tr>
</thead>
<tbody>
<tr>
<td>
Kubernetes Provides an auto-scaling feature.</td>
<td>
Docker Swarm does not provide an auto-scaling feature.</td>
</tr>
<tr>
<td>
Manually configure your load balancing settings.</td>
<td>
Does auto load balancing</td>
</tr>
<tr>
<td>
Installation is complicated &amp; time-consuming.</td>
<td>
Installation is easy &amp; fast.</td>
</tr>
<tr>
<td>
GUI is available.</td>
<td>
GUI not available.</td>
</tr>
<tr>
<td>
It provides a built-in load balancing technique.</td>
<td>
Process scheduling is done to maintain services while updating.</td>
</tr>
</tbody>
</table>`
        ],
        [
            `Define Ingress Network`,
            `Ingress network is defined as a collection of rules which allow permission for connections into the Kubernetes cluster.`
        ],
        [
            `What is Kubectl used for?`,
            `Kubectl is a software for controlling Kubernetes clusters. Ctl stands for control, which is a command-line interface to pass the command to the cluster and manage the Kubernetes component.`
        ],
        [
            `What is GKE?`,
            `GKE or Google Container Engine is a management platform that supports clusters and Docker containers that run within public cloud services of Google.`
        ],
        [
            `Why load balancer is needed?`,
            `A load balancer is needed because it gives a standard way to distribute network traffic among different services, which runs in the backend.`
        ],
        [
            `How to run Kubernetes locally?`,
            `Kubernetes can be run locally using the Minikube tool. It runs a single-node cluster in a VM (virtual machine) on the computer. Therefore, it offers the ideal way for users who have just started learning Kubernetes.`
        ],
        [
            `What are the tools that are used for container monitoring?`,
            `Tools that are used for container monitoring are:

            --- Heapster
            --- cAdvisor
            --- Prometheus
            --- InfluxDB
            --- Grafana`
        ],
        [
            `List components of Kubernetes`,
            `There are three components of Kubernetes, they are:

            --- Addons
            --- Node components
            --- Master Components`
        ],
        [
            `Define headless service`,
            `Headless service is defined as a service that uses IP address, but instead of load balancing, it returns of associated pods.`
        ],
        [
            `What are the important components of node status?`,
            `The important component of node status are:

            --- Condition
            --- Capacity
            --- Info
            --- Address`
        ],
        [
            `What is minikube?`,
            `Minikube is a software that helps the user to run Kubernetes. It runs on the single nodes that are inside VM on your computer. This tool is also used by programmers who are developing an application using Kubernetes.`
        ],
        [
            `Mention the uses of GKE`,
            `The uses of the GKE (Google Kubernetes Engine) are:

            --- It can be used to create docker container clusters
            --- Resize application controllers
            --- Update and then upgrade the clusters of container
            --- Debug cluster of the container.
            --- GKE can be used to creates a replication controller, jobs, services, container pods, or load balancer.`
        ],
        [
            `Define orchestration in Kubernetes`,
            `Orchestration in Kubernetes defines as an automatic method of scheduling the work of every container. It is used for applications that are based on microservices within clusters.`
        ],
        [
            `Explain Prometheus in Kubernetes`,
            `Prometheus is an application that is used for monitoring and alerting. It can be called out to your systems, grab real-time metrics, compress it, and stores properly in a database.`
        ],
        [
            `List tools for container orchestration`,
            `The tools for container orchestration are 
            
            1) Docker swarm, 
            2) Apache Mesos, and 
            3) Kubernetes.`
        ],
        [
            `Mention the list of objects of Kubernetes?`,
            `Objects that are used in Kubernetes are: 
            
            1) Pods,
            2) Replication sets and controllers, 
            3) Jobs and cron jobs, 
            4) Daemon sets, 
            5) Distinctive identities, 
            6) Deployments, 
            7) and Stateful sets.`
        ],
        [
            `Define Stateful sets in Kubernetes`,
            `The stateful set is a workload API object that is used to manage the stateful application. It can also be used to manage the deployments and scaling the sets of pods. The state information and other data of stateful pods are store in the disk storage, which connects with stateful set.`
        ],
        [
            `Why use Daemon sets?`,
            `Daemon sets are used because:

            --- It enables to runs storage platforms like ceph and glusterd on each node.
            --- Daemon sets run the logs collection on every node such as filebeat or fluentd.
            --- It performs node monitoring on each and every node.`
        ],
        [
            `Explain Replica set`,
            `A Replica set is used to keep replica pods stable. It enables us to specify the available number of identical pods. This can be considered a replacement for the replication .controller.`
        ],
        [
            `List out some important Kubectl commands:`,
            `The important Kubectl commands are:

            --- kubectl annotate
            --- kubectl cluster-info
            --- kubectl attach
            --- kubectl apply
            --- kubectl config
            --- kubectl autoscale
            --- kubectl config current-context
            --- kubectl config set.`
        ],
        [
            `Why uses Kube-apiserver?`,
            `Kube-apiserver is an API server of Kubernetes that is used to configure and validate API objects, which include services, controllers, etc. It provides the frontend to the cluster’s shared region using which components interact with each other.`
        ],
        [
            `Explain the types of Kubernetes pods`,
            `There are two types of pods in Kubernetes:

            --- <b>Single Container Pod:</b> It can be created with the run command.
            --- <b>Multicontainer pods:</b> It can be created using the “create” command in Kubernetes.`
        ],
        [
            `What are the labels in Kubernetes?`,
            `Labels are a collection of keys that contain some values. The key values are connected to pods, replication controllers, and associated services. Generally, labels are added to some object during its creation time. They can be modified by the users at run time.`
        ],
        [
            `What are the objectives of the replication controller?`,
            `The objectives of the replication controller are:

            --- It is responsible for controlling and administering the pod lifecycle.
            --- It monitors and verifies whether the allowed number of replicas are running or not.
            --- The replication controller helps the user to check the pod status.
            --- It enables to alter a pod. The user can drag its position the way interested in it.`
        ],
        [
            `What do you mean by persistent volume?`,
            `A persistent volume is a storage unit that is controlled by the administrator. It is used to manage an individual pod in a cluster.`
        ],
        [
            `What are Secrets in Kubernetes?`,
            `Secrets are sensitive information like login credentials of the user. They are objects in Kubernetes that stores sensitive information like username and password after performing encryption.`
        ],
        [
            `What is Sematext Docker Agent?`,
            `Sematext Docker agent is a log collection agent with events and metrics. It runs as a small container in each Docker host. These agents gather metrics, events, and logs for all cluster nodes and containers.`
        ],
        [
            `Define OpenShift`,
            `OpenShift is a public cloud application development and hosting platform developed by Red Hat. It offers automation for management so that developers can focus on writing the code.`
        ],
        [
            `Define K8s`,
            `K8s (K-eight characters-S) is a term for Kubernetes. It is an open-source orchestration framework for the containerized applications.`
        ],
        [
            `What are federated clusters?`,
            `Federated clusters multiple clusters that are managed as a single cluster.`
        ],
        [
            `Mention the difference between Docker volumes and Kubernetes Volumes`,
            `<table class="table table-striped">
            <thead>
            <tr>
            <th>Kubernetes Volumes</th>
            <th>Docker Volumes</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td>
            Volumes are not limited to any container.</td>
            <td>
            Volumes are limited to a pod in the container.</td>
            </tr>
            <tr>
            <td>
            Kubernetes volumes support all containers deployed in a pod of Kubernetes.</td>
            <td>
            Docker volumes do not support all containers deployed in Docker.</td>
            </tr>
            </tbody>
            </table>`
        ],
        [
            `What are the ways to provide API-Security on Kubernetes?`,
            `The ways to provide API-Security on Kubernetes are:

            --- Using correct auth mode with API server authentication mode= Node.
            --- Make kubeless that protects its API via authorization-mode=Webhook.
            --- Ensure the kube-dashboard uses a restrictive RBAC (Role-Based Access Control) policy`
        ],
        [
            `What is ContainerCreating pod?`,
            `A ContainerCreating pod is one that can be scheduled on a node but can’t start up properly.`
        ],
        [
            `What are the types of Kubernetes Volume?`,
            `The types of Kubernetes Volume are:

            --- EmptyDir
            --- GCE persistent disk
            --- Flocker
            --- HostPath
            --- NFS
            --- ISCSI
            --- rbd
            --- PersistentVolumeClaim
            --- downwardAPI`
        ],
        [
            `Explain PVC`,
            `The full form of PVC stands for Persistent Volume Claim. It is storage requested by Kubernetes for pods. The user does not require to know the underlying provisioning. This claim should be created in the same namespace where the pod is created.`
        ],
        [
            `What is the Kubernetes Network Policy?`,
            `Network Policy defines how the pods in the same namespace would communicate with each other and the network endpoint.`
        ],
        [
            `What is Kubernetes proxy service?`,
            `Kubernetes proxy service is a service which runs on the node and helps in making it available to an external host.`
        ]
    ]
}