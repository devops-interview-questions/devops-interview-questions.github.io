let linuxQuestions = {
    Section: 'Linux',
    Title: 'Top 35',
    URLs: [
        {
            Title: 'Video tutorial 1',
            URL: 'https://youtu.be/ROjZy1WbCIA'
        },
        {
            Title: 'Video tutorial 2',
            URL: 'https://youtu.be/Wvf0mBNGjXY'
        },
        {
            Title: 'Source: softwaretestinghelp.com',
            URL: 'https://www.softwaretestinghelp.com/linux-interview-questions-answers/',
        }
    ],
    Questions: [
        [
            `Video tutorials`,
            `<iframe width="560" height="315" src="https://www.youtube.com/embed/ROjZy1WbCIA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Wvf0mBNGjXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        ],
        [
            "What do you understand by Linux Kernel? Is it legal to edit it?",
            `‘Kernel’ basically refers to that core component of the computer operating system that provides basic services for the other parts as well as interacts with user commands. When it comes to ‘Linux Kernel’, it is referred to as low-level system software providing an interface for user-level interactions.
    
            Linux Kernel is considered as free and open-source software which is capable of managing hardware resources for the users. As it is released under General Public Licence (GPL), it becomes legal for anyone to edit it.`
        ],
        [
            `Differentiate between LINUX and UNIX?`,
            `
            Although there are multiple differences between LINUX and UNIX, enlisted points in the below table cover all the major differences.
            
            <table id="tablepress-92" class="tablepress tablepress-id-92 tablepress-responsive table table-striped">
                <thead>
                <tr class="row-1 odd">
                <th class="column-1">LINUX</th><th class="column-2">UNIX</th>
                </tr>
                </thead>
                <tbody class="row-hover">
                <tr class="row-2 even">
                <td class="column-1">LINUX is an open source software development and free operating system used for computer hardware &amp; software, game development, PCs, etc.</td><td class="column-2">UNIX is an operating system which is basically used in Intel, HP, internet servers, etc.</td>
                </tr>
                <tr class="row-3 odd">
                <td class="column-1">LINUX has priced as well as freely distributed and downloaded versions.</td><td class="column-2">Different versions/flavours of UNIX have different price structures.</td>
                </tr>
                <tr class="row-4 even">
                <td class="column-1">Users of this operating system could be anyone including home users, developers, etc.</td><td class="column-2">This operating system was basically developed for mainframes, servers and workstations except for OSX which is designed such that it can be used by anyone.</td>
                </tr>
                <tr class="row-5 odd">
                <td class="column-1">File support system includes Ext2, Ext3, Ext4, Jfs, Xfs, Btrfs, FAT, etc. </td><td class="column-2">File support system includes jfs, gpfs, hfs, etc.</td>
                </tr>
                <tr class="row-6 even">
                <td class="column-1">BASH (Bourne Again Shell) is the Linux default shell i.e. text mode interface which supports multiple command interpreters.</td><td class="column-2">Bourne shell serves as the text mode interface which is now compatible with many others including BASH.</td>
                </tr>
                <tr class="row-7 odd">
                <td class="column-1">LINUX provides two GUIs, KDE and Gnome.</td><td class="column-2">Common desktop environment was created which serves as a GUI for UNIX.</td>
                </tr>
                <tr class="row-8 even">
                <td class="column-1"><strong>Examples:</strong> Red Hat, Fedora, Ubuntu, Debian, etc.</td><td class="column-2"><strong>Examples:</strong> Solaris, All Linux</td>
                </tr>
                <tr class="row-9 odd">
                <td class="column-1">It provides higher security and has about 60-100 viruses listed till date.</td><td class="column-2">It is also highly secured and has about 85-120 viruses listed till date.</td>
                </tr>
                </tbody>
            </table>
            `
        ],
        [
            `Enlist the basic components of LINUX?`,
            `
            Linux operating system basically consists of 3 components. They are:
    
            --- <b>Kernel</b>: This is considered as the core part and is responsible for all major activities of the Linux operating system. Linux Kernel is considered as free and open-source software that is capable of managing hardware resources for the users. It consists of various modules and interacts directly with the underlying hardware.
            --- <b>System Library</b>: Most of the functionalities of the operating system are implemented by System Libraries. These act as a special function using which application programs accesses Kernel’s features.
            --- <b>System Utility</b>: These programs are responsible for performing specialized, individual-level tasks.
            `
        ],
        [
            `Why we use LINUX?`,
            `LINUX is used widely because it is completely different from other operating systems where every aspect comes with something extra i.e. some additional features.
    
            Some of the major reasons to use LINUX are listed below:
            
            --- It is an open-source operating system where programmers get the advantage of designing their own custom OS
            --- Software and the server licensing required to install Linux is completely free and can be installed on many computers as required
            --- It has low or minimum but controllable issues with viruses, malware, etc
            --- It is highly secured and supports multiple file systems`
        ],
        [
            `Enlist the features of the Linux operating system?`,
            `Following are some important features of the LINUX operating system:
    
            --- Linux Kernel and application programs can be installed on any kind of hardware platform and thus are considered portable.
            --- It serves the purpose of multitasking by serving various functions simultaneously.
            --- It provides security services in three ways namely, Authentication, Authorization, and Encryption.
            --- It supports multiple users to access the same system resource but by using different terminals for operation.
            --- Linux provides a hierarchical file system and its code is freely available to all.
            --- It has its own application support (to download and install applications) and customized keyboards.
            --- Linux distros provide live CD/USB to their users for installation.`
        ],
        [
            `Explain LILO?`,
            `LILO (Linux Loader) is the boot loader for the Linux operating system to load it into the main memory so that it can begin its operations. Bootloader here is a small program that manages a dual boot. LILO resides in MBR (Master Boot Record).
    
            Its major advantage is that it allows the fast bootup of Linux when installing in the MBR.
            
            Its limitation lies in the fact that it is not possible for all computers to tolerate modification of MBR.`
        ],
        [
            `What is Swap space?`,
            `Swap space is the amount of physical memory that is allocated for use by Linux to hold some concurrent running programs temporarily. This condition usually occurs when RAM does not have enough memory to support all concurrent running programs. This memory management involves the swapping of memory to and from physical storage.
    
            There are different commands and tools available to manage the Swap space usage.`
        ],
        [
            `What do you understand by the Root account?`,
            `As the name suggests, it is like a system administrator account which gives you the ability to fully control the system. The root account serves as the default account whenever Linux is installed.
    
            Below mentioned functions can be performed by the Root account:
            
            --- Create user accounts
            --- Maintain user accounts
            --- Assign different permissions to each account created and so on.`
        ],
        [
            `Explain the virtual desktop?`,
            `When there are multiple windows available on the current desktop and there appears the problem of minimizing and maximizing windows or restoring all the current programs, there ‘Virtual Desktop’ serves as an alternative. It allows you to open one or more programs on a clean slate.
    
            Virtual desktops are basically stored on a remote server and serve the following benefits:
            
            --- Cost savings as the resources can be shared and allocated as and when required.
            --- Resources and energy are more efficiently used.
            --- Data integrity is improved.
            --- Centralized administration.
            --- Fewer compatibility issues.`
        ],
        [
            `Differentiate between BASH and DOS?`,
            `The basic differences between BASH and DOS can be understood from the below table.
            
            <table id="tablepress-93" class="tablepress tablepress-id-93 tablepress-responsive dataTable no-footer" role="grid" aria-describedby="tablepress-93_info">
            <thead>
            <tr class="row-1 odd" role="row"><th class="column-1 sorting" tabindex="0" aria-controls="tablepress-93" rowspan="1" colspan="1" aria-label="BASH: activate to sort column ascending" style="width: 475.531px;">BASH</th><th class="column-2 sorting" tabindex="0" aria-controls="tablepress-93" rowspan="1" colspan="1" aria-label="DOS: activate to sort column ascending" style="width: 253.562px;">DOS</th></tr>
            </thead>
            <tbody class="row-hover">
    
    
    
            <tr class="row-2 even">
            <td class="column-1">BASH commands are case sensitive.</td><td class="column-2">DOS commands are not case sensitive.</td>
            </tr><tr class="row-3 odd">
            <td class="column-1">‘/’ character used as a directory separator.<br>
            ‘\’ character acts as an escape character.</td><td class="column-2">‘/’ character: serves as a command argument delimiter.<br>
            ‘\’ character: serves as a directory separator.</td>
            </tr><tr class="row-4 even">
            <td class="column-1">File naming convention includes: 8 character file name followed by a dot and 3 characters for the extension.</td><td class="column-2">No file naming convention is followed in DOS.</td>
            </tr></tbody>
            </table>
            `
        ],
        [
            `Explain the term GUI?`,
            `GUI stands for the Graphical User Interface. GUI is considered as the most attractive and user-friendly because it consists of the usage of images and icons. These images and icons are clicked and being manipulated by the users for the purpose of communication with the system.
    
            <b>Advantages of GUI</b>:
            
            --- It allows users to navigate and operate the software with the help of visual elements.
            --- The more intuitive and rich interface is possible to be created.
            --- Fewer chances of occurrence of errors as complex, multi-step, dependent tasks are easily grouped together.
            --- Productivity is enhanced with the means of multitasking as with a simple click of the mouse, the user is able to maintain multiple open applications and transitions between them.
            
            <b>Disadvantages of GUI</b>:
            
            --- End-users have less control over the operating system and file systems.
            --- Although it is easier to use a mouse and keyboard for navigation and controlling the operating system, the whole process is a bit slow.
            --- It requires more resources because of the elements that need to be loaded such as icons, fonts, etc.`
        ],
        [
            `Explain the term CLI?`,
            `CLI stands for Command Line Interface. It is a way for humans to interact with computers and is also known as the Command-line user interface. It relies on textual request and response transaction process where user types declarative commands to instruct the computer to perform operations.
    
            <b>Advantages of CLI</b>
            
            --- Very flexible
            --- Can easily access commands
            --- Much faster and easier to use by expert
            --- It does not use much CPU processing time.
            
            <b>Disadvantages of CLI</b>
            
            --- Learning and remembering type commands is hard.
            --- Have to be typed precisely.
            --- It can be very confusing.
            --- Surfing web, graphics, etc are a few tasks that are hard or impossible to do on the command line.`
        ],
        [
            `Enlist some Linux distributors (Distros) along with its usage?`,
            `Different parts of LINUX say kernel, system environment, graphical programs, etc are developed by different organizations. LINUX Distributions (Distros) assemble all these different parts of Linux and give us a compiled operating system to be installed and used.
    
            There are around six hundred Linux distributors. Some of the important ones are:
            
            --- <b>UBuntu</b>: It is a well known Linux Distribution with a lot of pre-installed apps and easy to use repositories libraries. It is very easy to use and works like a MAC operating system.
            --- <b>Linux Mint</b>: It uses cinnamon and mates desktop. It works on Windows and should be used by newcomers.
            --- <b>Debian</b>: It is the most stable, quicker and user-friendly Linux Distributors.
            --- <b>Fedora</b>: It is less stable but provides the latest version of the software. It has a GNOME3 desktop environment by default.
            --- <b>Red Hat Enterprise</b>: It is to be used commercially and to be well tested before release. It usually provides a stable platform for a long time.
            --- <b>Arch Linux</b>: Every package is to be installed by you and is not suitable for beginners.`
        ],
        [
            `How can you determine the total memory used by LINUX?`,
            `It is always required to keep a check on the memory usage in order to find out whether the user is able to access the server or the resources adequately. There are roughly 5 methods that determine the total memory used by Linux.
    
            This is explained as below:
            
            --- <b>Free command</b>: This is the most simple command to check memory usage. For Example, ‘$ free –m’, the option ‘m’ displays all the data in MBs.
            --- <b>/proc/meminfo</b>: The next way to determine memory usage is to read /proc/meminfo file. For Example,  ‘$ cat /proc/meminfo’
            --- <b>Vmstat</b>: This command basically lays out the memory usage statistics. For Example,  ‘$ vmstat –s’
            --- <b>Top command</b>: This command determines the total memory usage as well as also monitors the RAM usage.
            --- <b>Htop</b>: This command also displays memory usage along with other details.`
        ],
        [
            `Explain the 3 kinds of file permissions under LINUX?`,
            `Every file and directory in Linux are assigned three types of owners namely ‘User’, ‘Group’, and ‘Others’. The three kinds of permissions defined for all the three owners are:
    
            --- <b>Read</b>: This permission allows you to open and read the file as well as list the contents of the directory.
            --- <b>Write</b>: This permission allows you to modify the contents of the file as well as allows adding, removing and renaming files stored in the directories.
            --- <b>Execute</b>: Users can access and run the file in the directory. You cannot run a file unless the execute permission is set.`
        ],
        [
            `What is the maximum length for any file name under LINUX?`,
            `The maximum length for any file name under Linux is 255 characters.`
        ],
        [
            `How permissions are granted under LINUX?`,
            `A system administrator or the owner of the file can grant permissions using the ‘chmod’ command. Following symbols are used while writing permissions:
    
            --- ‘+’ for adding permission
            --- ‘-‘ for denying permission
            
            Permissions also include a single letter which denotes
            --- <b>u</b>: user; 
            --- <b>g</b>: group; 
            --- <b>o</b>: other; 
            --- <b>a</b>: all; 
            --- <b>r</b>: read; 
            --- <b>w</b>: write; 
            --- <b>x</b>: execute.`
        ],
        [
            `What are the different modes when using the vi editor?`,
            `The 3 different kinds of modes in vi editor are enlisted below:
    
            --- Command Mode/ Regular Mode
            --- Insertion Mode/ Edit Mode
            --- Ex Mode/ Replacement Mode`
        ],
        [
            `Explain the Linux Directory commands along with the description?`,
            `The Linux Directory commands along with descriptions are as follows:
    
            --- <b>pwd</b>: It is a built-in command which stands for ‘<b>print working directory</b>’. It displays the current working location, working path starting with/and directory of the user. Basically, it displays the full path to the directory you are currently in.
            --- <b>Is</b>: This command list out all the files in the directed folder.
            --- <b>cd</b>: This stands for ‘change directory’. This command is used to change to the directory you want to work from the present directory. We just need to type cd followed by the directory name to access that particular directory.
            --- <b>mkdir</b>: This command is used to create an entirely new directory.
            --- <b>rmdir</b>: This command is used to remove a directory from the system.`
        ],
        [
            `Differentiate between Cron and Anacron?`,
            `<table id="tablepress-94" class="tablepress tablepress-id-94 tablepress-responsive">
            <thead>
            <tr class="row-1 odd">
            <th class="column-1">Cron</th><th class="column-2">Anacron</th>
            </tr>
            </thead>
            <tbody class="row-hover">
            <tr class="row-2 even">
            <td class="column-1">Cron allows the user to schedule tasks to be executed every minute.</td><td class="column-2">Anacron allows the user to schedule tasks to be run either on a specific date or the first available cycle after the date.</td>
            </tr>
            <tr class="row-3 odd">
            <td class="column-1">Tasks can be scheduled by any normal user and are basically used when tasks have to be completed/executed at a particular hour or minute.</td><td class="column-2">Anacron can be used only by super users and is used when a task has to be executed irrespective of hour or minute.</td>
            </tr>
            <tr class="row-4 even">
            <td class="column-1">It is ideal for servers</td><td class="column-2">It is ideal for desktops and laptops</td>
            </tr>
            <tr class="row-5 odd">
            <td class="column-1">Cron expects the system to be running 24x7. </td><td class="column-2">Anacron does not expects the system to be running 24x7.</td>
            </tr>
            </tbody>
            </table>`
        ],
        [
            `Explain the work of Ctrl+Alt+Del key combination on the Linux operating system?`,
            `The work of Ctrl+Alt+Del key combination on the Linux operating system is the same as is for Windows i.e. to restart the system. The only difference is that there is no confirmation message displayed and a system is rebooted directly.`
        ],
        [
            `What is the role of case sensitivity in affecting the way commands are used?`,
            `Linux is considered a case sensitive. Case sensitivity can sometimes serve as the reason for displaying different answers for the same command as you might enter the different formats of commands each time. In terms of case sensitivity, the command is the same but the only difference occurs with regard to uppercase and lowercase letters.
    
            For Example,
            
            cd, CD, Cd are different commands with different outputs.`
        ],
        [
            `Explain Linux Shell?`,
            `For executing any commands user uses a program known as the shell. Linux shell is basically a user interface used for executing the commands and communicating with Linux operating system. Shell does not use the kernel to execute certain programs, create files, etc.
    
            There are several shells available with Linux which includes the following:
            
            --- BASH (Bourne Again SHell)
            --- CSH ( C Shell)
            --- KSH ( Korn Shell)
            --- TCSH
            
            There are basically two types of Shell commands
            
            --- <b>Built-in shell commands</b>: These commands are called from the shell and executed directly within the shell. Examples: ‘pwd’, ’help’, ’type’, ’set’, etc.
            --- <b>External/ Linux commands</b>: These commands are totally shell independent, have their own binary and are located in the file system.`
        ],
        [
            `What is a Shell script?`,
            `As the name suggests, the shell script is the script written for the shell. This is a program file or says a flat text file where certain Linux commands are executed one after another. Although the execution speed is slow, the Shell script is easy to debug and can also simplify everyday automation processes.`
        ],
        [
            `Explain the features of a Stateless Linux server?`,
            `The word stateless itself means ‘no state’. When on a single workstation, no state exists for the centralized server, and then the stateless Linux server comes into the picture. Under such conditions, scenarios like keeping all the systems on the same particular state can occur.
    
            Some of the features of Stateless Linux server are:
            
            --- Stores prototype of every machine
            --- Store snapshots
            --- Store home directories
            --- Uses LDAP which determines the snapshot of state to be run on which system.`
        ],
        [
            `What are system calls used for process management in Linux?`,
            `System call provides an interface between user program and operating system. 
    
            When the user wants to give an instruction to the OS then it will do it through system calls. Or a user program can access the kernel which is a part of the OS through system calls.
            
            It is a programmatic way in which a computer program requests a service from the kernel of the operating system.
            
            The different system calls are as follows:
            
            --- System calls for Process management
            --- System calls for File management
            --- System calls for Directory management
            
            A system is used to create a new process or a duplicate process called a fork.
            
            The duplicate process consists of all data in the file description and registers common. The original process is also called the parent process and the duplicate is called the child process.
            
            The fork call returns a value, which is zero in the child and equal to the child’s PID (Process Identifier) in the parent. The system calls like exit would request the services for terminating a process.
            
            Loading of programs or changing of the original image with duplicate needs execution of exec. Pid would help to distinguish between child and parent processes.
            
            Example
            Process management system calls in Linux.
            
            --- <b>fork</b> − For creating a duplicate process from the parent process.
            --- <b>wait</b> − Processes are supposed to wait for other processes to complete their work.
            --- <b>exec</b> − Loads the selected program into the memory.
            --- <b>exit</b> − Terminates the process.
            
            
            <b>fork()</b> − A parent process always uses a fork for creating a new child process. The child process is generally called a copy of the parent. After execution of fork, both parent and child execute the same program in separate processes.
            
            <b>exec()</b> − This function is used to replace the program executed by a process. The child sometimes may use exec after a fork for replacing the process memory space with a new program executable making the child execute a different program than the parent.
            
            <b>exit()</b> − This function is used to terminate the process.
            
            <b>wait()</b> − The parent uses a wait function to suspend execution till a child terminates. Using wait the parent can obtain the exit status of a terminated child.`
        ],
        [
            `Enlist some Linux to file content commands?`,
            `There are many commands present in Linux which are used to look at the contents of the file.
    
            Some of them are enlisted below:
            
            --- <b>head</b>: Displays the beginning of the file
            --- <b>tail</b>: Displays the last part of the file
            --- <b>cat</b>: Concatenate files and print on the standard output.
            --- <b>more</b>: Displays the content in pager form and is used to view the text in the terminal window one page or screen at a time.
            --- <b>less</b>: Displays the content in pager form and allows backward and single line movement.
            `
        ],
        [
            `Explain Redirection?`,
            `It is well known that every command takes input and displays output. Keyboard serves as the standard input device and the screen serves as the standard output device. Redirection is defined as the process of directing data from one output to another or even cases exist where output serves as input data for another process.
    
            There are basically three streams available in which input and output of the Linux environment are distributed.
            
            These are explained as below:
            
            --- <b>Input Redirection</b>: ‘<’ symbol is used for input redirection and is numbered as (0). Thus it is denoted as STDIN(0).
            --- <b>Output Redirection</b>: ‘>’ symbol is used for output redirection and is numbered as (1). Thus it is denoted as STDOUT(1).
            --- <b>Error Redirection</b>: It is denoted as STDERR(2).`
        ],
        [
            `Why is Linux considered more secure than other operating systems?`,
            `Linux is an open-source operating system and nowadays it is growing rapidly in the tech world/market. Although, the entire code written in Linux can be read by anyone, then also it is considered more secure because of the following reasons:
    
            --- Linux provides its user with limited default privileges which are basically restricted to the lower levels .i.e. in the case of any virus attack, it will reach only local files and folders where the system-wide damage is saved.
            --- It has a powerful auditing system that includes detailed logs.
            --- Enhanced features of IPtables are used in order to implement a greater level of security for the Linux machine.
            --- Linux has tougher program permissions before installing anything on your machine.
            `
        ],
        [
            `Explain command grouping in Linux?`,
            `Command grouping is basically done by the use of braces ‘()’ and parenthesis ‘{}’. Redirection is applied to the entire group when the command is grouped.
    
            --- When commands are placed within the braces, then they are executed by the current shell. Example, (list)
            --- When the commands are placed within the parenthesis, then they are executed by a subshell. Example, {list;}`
        ],
        [
            `What is Linux pwd (print working directory) command?`,
            `Linux pwd command displays the whole path of the current location you are working in starting from the root ‘/’. For Example, to print the current working directory enter “$ pwd”.
    
            It can be used for the below purposes:
            
            --- To find the full path of the current directory
            --- Store the full path
            --- Verify the absolute and physical path`
        ],
        [
            `Explain the Linux ‘cd’ command options along with the description?`,
            `‘cd’ stands for change directory and is used to change the current directory on which the user is working.
    
            <b>cd syntax</b>: $ cd {directory}
            
            Following purposes can be served with ‘cd’ commands:
            
            --- Change from current to a new directory
            --- Change directory using the absolute path
            --- Change directory using the relative path
            
            Few of the ‘cd’ options are enlisted below
            
            --- <b>cd~</b>: Brings you to the home directory
            --- <b>cd-</b>: Brings you to the previous directory
            --- <b>.</b>: Bring you to the parent directory
            --- <b>cd/</b>: Takes you to the entire system’s root directory`
        ],
        [
            `What is know about grep commands?`,
            `Grep stands for ‘global regular expression print’. This command is used for matching a regular expression against text in a file. This command performs pattern-based searching and only the matching lines are displayed as output. It makes use of options and parameters that are specified along with the command line.
    
            For example: Suppose we need to locate the phrase “our orders” in an HTML file named “order-listing.html”.
            
            Then the command will be as follows:
            
            $ grep “our orders” order-listing.html
            
            The grep command outputs the entire matching line to the terminal.`
        ],
        [
            `How to create a new file and modify an existing file in vi editor? Also, enlist the commands used to delete information from vi editor.?`,
            `--- <b>vi filename</b>: This is the command used to create a new file as well as modify an existing file.
            --- <b>View filename</b>: This command opens an existing file in read-only mode.
            --- <b>X</b>: This command deletes the character which is under the cursor or before the cursor location.
            --- <b>dd</b>: This command is used to delete the current line.`
        ],
        [
            `Enlist some Linux networking and troubleshooting commands?`,
            `Every computer is connected to the network internally or externally for the purpose of exchanging information. Network troubleshooting and configuration are essential parts of and network administration. The networking commands enable you to quickly troubleshoot connection issues with another system, check the response of another host, etc.
    
            A network administrator maintains a system network that includes network configuration and troubleshooting. Mentioned below are few commands along with their description:
            
            Mentioned below are few commands along with their description
            
            --- <b>Hostname</b>: To view the hostname (domain and IP address) of the machine and to set the hostname.
            --- <b>Ping</b>: To check if the remote server is reachable or not.
            --- <b>ifconfig</b>: To display and manipulate route and network interfaces. It displays network configuration. ‘ip’ is the replacement of ifconfig command.
            --- <b>netstat</b>: It displays network connections, routing tables, interface statistics. ‘ss’ is the replacement of netstat command which is used to get more information.
            --- <b>Traceroute</b>: It is a network troubleshooting utility that is used to find the number of hops required for a particular packet to reach the destination.
            --- <b>Tracepath</b>: It is the same as traceroute with a difference that it does not require root privileges.
            --- <b>Dig</b>: This command is used to query the DNS name servers for any task related to the DNS lookup.
            --- <b>nslookup</b>: To find DNS related query.
            --- <b>Route</b>: It shows the details of the route table and manipulates the IP routing table.
            --- <b>mtr</b>: This command combines ping and track path into a single command.
            --- <b>Ifplugstatus</b>: This command tells us whether the network cable is plugged in or not.`
        ]
    ]
}

console.log(JSON.stringify(linuxQuestions));