let shellQuestions = {
    Section: "Shell Scripting",
    Title: "Top in 2022",
    URLs: [
        {
            Title: 'Video tutorial 1',
            URL: 'https://youtu.be/v-F3YLd6oMw'
        },
        {
            Title: 'Video tutorial 2',
            URL: 'https://youtu.be/1mt2-LbKuvY'
        },
        {
            Title: 'Video tutorial 3',
            URL: 'https://youtu.be/zsajhz2_50g'
        },
        {
            Title: 'Source: interviewbit.com',
            URL: "https://www.interviewbit.com/shell-scripting-interview-questions/",
        }
    ],
    Questions: [
        [
            `Video tutorials`,
            `<iframe width="560" height="315" src="https://www.youtube.com/embed/v-F3YLd6oMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/1mt2-LbKuvY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            <iframe width="560" height="315" src="https://www.youtube.com/embed/zsajhz2_50g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        ],
        [
            `What is Shell Scripting`,
            `Text files containing commands to execute by a shell are called shell scripts. In this, long and repetitive series of commands are compiled into a single script that can be stored and executed at any time, thereby reducing programming efforts. In shell scripts, repetitive work is largely avoided. The most common reason for using shell scripting is to program operating systems of Windows, UNIX, Apple, etc. In addition, companies use this script to develop an operating system with their own features. In terms of system-level operations, it is considered to be the easiest programming language to use. A shell script is referred to as a batch file in DOS operating system, and EXEC in IBM's mainframe VM operating systems. Shell scripts can be used for the following applications: 

            --- Automation of the code compiling process.
            --- Run a program or create an environment for programming.
            --- Complete batch processing and file manipulation.
            --- Integrate existing programs.
            --- Perform routine backups.
            --- Keeping an eye on a system.
            --- System administration's tasks
            --- Creating, maintaining, and implementing system boot scripts
            
            <b>A sample shell script: </b>
            <code>echo "hello world" </code>
            
            <b>Run it as follows: </b>
            <code>$ bash hello.sh 
            # prints 
            hello world</code>`
        ],
        [
            `What is Shell?`,
            `A Shell is basically a command-line interpreter between user and kernel or a complete environment specially designed to run commands, shell scripts, and programs. In this, whenever a user enters human-readable commands (input commands) through the keyboard, the shell communicates with the kernel to execute these commands, and display output in a shell script. Just as there are different flavors of operating systems, there are also different types of shells. Every shell has its own set of commands and functions. Shells issue the prompt, $, called a command prompt. You can type into the prompt while it is displayed.  

            After you press enter, your input is read by the shell. Based on the first word of your input, it determines the command you want to run. The characters in a word are separated using spaces and tabs.  
            
            <b>Example</b>: 
            
            Here is an example of a date command that displays the current date and time:  
            
            <code>$date Tue Aug 10 06:03:35 MST 2021</code>`
        ],
        [
            `Why is a shell script needed?`,
            `Shell scripts can be written for a variety of reasons:

            --- Keeping repetitive tasks to a minimum.
            --- Can be used by system administrators for routine backups.
            --- Monitoring the system.
            --- Adding new functions to the shell.
            --- Shell scripting allows you to create your own tools.
            --- System admin can automate daily tasks.
            `
        ],
        [
            `Write some advantages of shell scripting.`,
            `Shell scripting offers the following benefits:

            --- An interactive debugging tool, as well as a quick start.   
            --- Programmers need not change their syntax since both command and syntax are identical to those entered directly into the command line.  
            --- Shell scripts are easy to use and quicker to write.   
            --- It helps automate administrative tasks, so it is time-saving.   
            --- As shell scripts are written in an interpreted language, they can be run without any additional effort on almost any modern operating system, including UNIX, Linux, BSD, and Mac OS X.  
            --- They can be utilized for bulk execution rather than single instructions.   
            --- Using it, you can develop your own custom operating system with relevant features.  
            --- Software applications can be developed according to their respective platforms with this tool.`
        ],
        [
            `Write some limitations of shell scripting.`,
            `Shell scripting has the following disadvantages:

            --- Errors are frequent and costly, and a single error can alter the command.  
            --- The execution speed is slow. 
            --- Bugs or inadequacies in the language's syntax or implementation.  
            --- Large, complex tasks aren't well suited to it.  
            --- Contrary to other scripting languages, etc., it provides a minimal data structure.   
            --- Every time a shell command is executed, a new process is launched.
            `
        ],
        [
            `Name the file in which shell programs are stored.`,
            `A file called sh stores shell programs. Sh files contain commands written in a scripting language that is run by Unix shells.`
        ],
        [
            `Name different types of shells available.`,
            `Shells are divided into two categories: 
            --- <b>Bourne shell</b>: The $ character is the default prompt when using a Bourne-type shell.
            --- <b>C shell</b>: The % character is the default prompt when using a C-type shell.

            The Bourne-type is subdivided into the following categories:
            
            --- <b>Bourne Again shell (BASH)</b>: This is the most common shell available on all Linux and based systems. It is open-source and freeware. In addition, it is an SH-compatible shell, with improved programming and interactive features over SH. It also allows you to efficiently perform many tasks.
            --- <b>Korn shell (KSH)</b>: Korn is basically a Unix shell that was initially based on the Bash Shell Scripting. It's a high-level language that's quite advanced. It has associative arrays and handles the loop syntax better than Bash. It is basically an improved version of Bourne shell.
            
            The C-type is subdivided into the following categories:   
            
            --- <b>C shell (CSH)</b>: C shell is almost like C itself since it uses the shell syntax of the C programming language. In most cases, a command is executed either interactively from a terminal keyboard or from a file.
            --- <b>TENEX/TOPS C shell (TCSH)</b>: TCSH does not have a specific full name. TCSH is considered as an enhanced version of the CSH as it includes some additional features over CSH like command-line editing and filename or command completion. As with the previous version, it supports C-style syntax also.
            `
        ],
        [
            `Write difference between Bourne Shell and C Shell.`,
            `--- <b>Bourne Shell</b>: It has compactness and speed that set it apart from other shells. But it lacks interactive features such as the ability to recall previous commands. Additionally, the Bourne shell does not support arithmetic and logical expressions.
            --- <b>C Shell</b>: It is a UNIX enhancement that incorporates interactive features like aliases and history of commands. Besides its built-in arithmetic and expression syntax, it also includes convenient programming features.
            
            <b>Difference between Bourne shell and C shell</b>

            --- The C shell allows you to alias commands easily, whereas Bourne Shell does not allow this.
            --- In the C shell, long commands can be used repeatedly, but not in Bourne.
            --- Bourne does not have access to the command history, but the C shell does.
            --- In the case of C, there is no need to repeatedly type the command.`
        ],
        [
            `What do you mean by Shell variable?`,
            `Shell variables are integral parts of all Shell programs and scripts. In general, we know that variables usually store data either in the form of characters or numbers. Shell also stores and manipulates information using variables in its programs. Generally, shell variables are stored as strings. Variables in the shell provide the information needed for scripts/commands to execute. In the following example, a shell variable is created and then printed: 

            variable ="Hello" 
            echo $variable`
        ],
        [
            `What are different types of variables mostly used in shell scripting?`,
            `Shell scripts usually have two types of variables:  

            --- <b>System-defined variables</b>: Also called environment variables, these are special built-in variables in the Linux kernel for each shell. They are normally defined in capital letters by the OS (Linux) and are standard variables.
            <b>Example</b>:  
            SHELL  
            It is a Unix Defined or System Variable, which specifies the default working shell. 
            
            --- <b>User-defined variables</b>: These variables are created and defined by users in order to store, access, read, and manipulate data. In general, they are defined in lowercase letters. The Echo command allows you to view them.
            <b>Example</b>:    
            $ a=10 
            In this case, the user has defined the variable ‘a’ and assigned it the value 10.
            `
        ],
        [
            `Explain the term positional parameters.`,
            `In a shell program, positional parameters specify arguments that are used to launch the current process. A special set of variables is usually maintained by the shell for storing positional parameter values. Bash is an example of a shell that uses positional parameters. The bash shell can be used on Linux, BSD, macOS X, and Windows 10.

            <b>For example</b>: 
            
            mycommand one five "six four”   
            
            In this case, the command name is mycommand, and there are four parameters in the command line: one, five, and "six four”.   
            
            <b>Note</b>: A space delimits each positional parameter and each thing after spaces are interpreted by the shell as individual parameters. Therefore, the parameter itself should be enclosed in quotation marks if it contains a space, as in "six four".`
        ],
        [
            `What are control instructions?`,
            `Control instructions specify how the different instructions will be executed in the script. They are primarily used to determine the control flow in Shell programs. The execution of a shell script proceeds in succession without these instructions. In shell programs, control instructions govern how execution flows.`
        ],
        [
            `How many types of control instructions are available in a shell?`,
            `Shells provide four types of control instructions as given below:  

            --- <b>Sequence Control Instruction</b>: This assures that a program's command runs in the sequence they are listed. As soon as the first command in the sequence has been completed, the second command follows, and so on.
            --- <b>Decision Control Instruction</b>: It is also known as Selection Control Instruction. This instructs the computer which instruction it should execute next. In this, checking a condition is the basis for deciding which section to execute. If a given condition is True, a statement or set of statements will be executed; otherwise, they will be ignored.
            --- <b>Loop Control Instruction</b>: It is also known as Repetition Instruction. This instruction allows a computer to continuously run a particular sequence of code. In a loop structure, the statements can be repeated until a condition is True or False, a particular number of times, or once for each element within the collection
            --- <b>Case-Control Instruction</b>: This is used for selecting among several choices. Typically, they are used to execute only a particular block of statements within a series of statements.`
        ],
        [
            `Explain ways to create shortcuts in Linux.`,
            `Links present in Linux OS can be used to create shortcuts as given below: 

            --- <b>Hard Link</b>: Hard links are mirror images of the originally linked files and are linked with an inode number. A hard-linked file remains even after the original file is deleted. Since hard links point to inodes, they cannot be implemented on directories. Hard links are created by the following command:
            <code>$ ln  [original filename] [link name]</code>
            
            --- <b>Soft Link</b>: Generally, soft links (also referred to as Symbolic links) are linked to the file name and can reside on the same as well as different file systems. When a soft link is created or deleted, it does not affect the original file, but when the original file is deleted, the soft link stops working. Typically, soft links are aliases (alternative paths) for the original file. Soft links are created by the following command:
            <code>$ ln  -s [original filename] [link name]</code>
            `
        ],
        [
            `How to check whether a link is a hard one or a soft link?`,
            `We can use -h and -L operators of the test command to check whether a link is hard or soft (symbolic link).

            --- <b>-h file      //true if the file is a symbolic link</b>
            --- <b>-L file      //true if the file is a symbolic link</b>
            One can also use:
            
            <b>readlink FILE; echo $?</b>       // This returns 1 if it's a hard link and 0 if it's a symbolic link.`
        ],
        [
            `Write difference between Hard link and Soft Link.`,
            `<table>
            <thead><tr>
            <th>Hard Link</th>
            <th>Soft Link</th>
            </tr></thead>
            <tbody>
            <tr>
            <td>Hard-linked files have the same inode number.&nbsp;</td>
            <td>Soft-linked files have different inode numbers.</td>
            </tr>
            <tr>
            <td>Despite deleting the target file, it remains valid.</td>
            <td>When an original file is deleted, it becomes invalid.</td>
            </tr>
            <tr>
            <td>Hard links are faster than soft links.&nbsp;</td>
            <td>Soft links are slower than hard links.</td>
            </tr>
            <tr>
            <td>The command used for creating a hard link in Linux is "ln".&nbsp;&nbsp;</td>
            <td>The command used for creating a soft link in Linux is “ln -s”.</td>
            </tr>
            <tr>
            <td>There is no way to use it across file systems.&nbsp;&nbsp;</td>
            <td>You can use it on any file system.</td>
            </tr>
            <tr>
            <td>Hard links cannot use relative paths.&nbsp;</td>
            <td>Both absolute and relative paths can be used in soft links.&nbsp;</td>
            </tr>
            </tbody>
            </table>`
        ],
        [
            `What do you mean by GUI Scripting?`,
            `The GUI (Graphical User Interface) is a client/server interface that uses graphical icons and visual indicators to allow users to interact with devices. Specifically, it is used to control a computer and its applications. A wide variety of applications are supported, and it is largely dependent on the operating system.`
        ],
        [
            `What is the shebang line in shell scripting?`,
            `Shell scripts or programs often contain shebang at the top. In general, the Shebang (the series of characters "#!") is used to indicate the operating system to use a particular interpreter to process the rest of the file. Here, the symbol '#' is referred to as hash, and "!" is referred to as bang. This usually aids developers in avoiding repetitive work. Scripts are generally executed by the engine; therefore, shebang determines the location of the engine that will be used to run the script. 

            <b>Example</b>:  
            
            #!/bin/bash  
            
            In addition, this line also specifies which shell to use.`
        ],
        [
            `What is a file system? Write down the four core components of a Linux file system.`,
            `Generally, file systems are referred to as the collections of files, which include information related to those files. It would be impossible to tell where one piece of data stops and the next begins without a file system. There are four blocks in a file system: 

            --- <b>Super Block</b>: A superblock contains information about a file system, including block size, group size, usage statistics, empty/filled blocks, inode table size & location, and so on. One of the tools used to describe a file system, along with inodes, entries, and files, is the superblock. Multiple superblocks are created with the file system, as the superblock contains critical information.  
            --- <b>Boot Block</b>: Located on the disk label, a boot block is a special set of blocks that contains data or information on the disk layout. Normally, this block contains the bootstrap loader program, which a user runs upon launching the host computer. The boot block remains blank if the file system is not used for boot.    
            --- <b>Data Block</b>: Also called storage blocks, data blocks contain the remainder of the space allocated to the file system. The data block's size is measured at the time of file system creation. For a regular file, the content of files is contained in the data blocks. For directories, the inode number and file name of the files are contained in the data blocks.  
            --- <b>Inode</b>: Inodes contain information about each file in the filesystem. Normally, an inode doesn't contain a file's name, which is located in a directory instead.  An inode contains information such as the type of file, the permission bits, the owner, the group, the file size, and the time when the file was modified.`
        ],
        [
            `Name the alternative command for echo.`,
            `The tput command is an alternative command for echo. We can use this command to control how the output is displayed.  Additionally, shell scripts can do things such as underline text and center text, regardless of the size of the screen.`
        ],
        [
            `Explain the way you can connect to a database server.`,
            `Open client driver comes with the isql utility that can be used to connect to a database server from Linux. Here's how to do it: 

            <b>isql –S serverName –U username –P password</b>`
        ],
        [
            `What is the importance of $#?`,
            `$# usually holds the number of arguments, although it may be different for functions. To put it simply, it was used to store the number of command-line arguments passed to a shell script.`
        ],
        [
            `Write the command that is used to execute a shell file.`,
            `Firstly, use the chmod command to set execute permission on your script as shown below: 

            <b>chmod +x script-name-here.sh </b>
            
            Secondly, run or execute your script as follows: 
            
            <b>./script-name-here.sh</b>
            
            Alternatively, you can execute shell script by: 
            
            <b>sh script-name-here.sh</b>`
        ],
        [
            `Name the command that can be used to find out the number of arguments passed to the script?`,
            `The following command will display the number of arguments passed to the script: <b>echo $ #</b>`
        ],
        [
            `How long does a variable in a shell script last?`,
            `Variables inside shell scripts have a lifespan of only as long as the execution lasts.`
        ],
        [
            `What does the . (dot) indicate at the beginning of the file name? How can it be listed?`,
            `If the file name begins with ".", it is a hidden file. When a dot appears at the beginning of a filename, the file is hidden in most file managers and shell programs. A Shell usually lists all the files except hidden files when you try to list the files in a shell. Despite this, hidden files can be found in the directory. The Is command must be run with the "–a" flag if you wish to see hidden files.`
        ],
        [
            `What is the use of the "$?" command?`,
            `By using the command "$?", you can find out the status of the last command executed.`
        ],
        [
            `What is the best way to run a script in the background?`,
            `For a script to run in the background, simply add "&" at the end of the command.

            <b>Example:</b>
            
            script.sh &
            
            command &`
        ],
        [
            `What do you mean by crontab?`,
            `Crontab stands for "cron table," meaning that it makes use of the cron scheduler to perform tasks. In other words, it is the list of commands that you wish to run on a regular schedule and the command that will let you manage it. It is possible to view or edit the table of commands using the crontab command. In addition to the schedule, the term "Crontab" also refers to the name of the program used to edit the schedule.`
        ],
        [
            `Name two files of crontab command.`,
            `<b>cron.deny</b> and <b>cron.allow</b> are two files in the /etc/cron.d directory that controls access to the crontab command. Crontab command tasks such as creating, editing, displaying, or removing crontab files are relegated to specific users through these files. Both files usually consist of a list of user names, one user name per line. Together, these access control files perform the following functions:

            --- cron.allow decides which users are allowed to run the crontab command.
            --- cron.deny decides which users are denied from using the crontab command.
            --- When cron.allow or cron.deny doesn't exist, superuser privileges are required to run it.`
        ],
        [
            `Name the command that is used to take the backup.`,
            `The backup is taken using the tar command. Tar is an acronym for tape archive and is used to create backups using tar, gzip, and bzip. Files can be saved and restored from and to a tape using this command. In this, files and directories are generally compressed into tarballs, an archive file. For this purpose, it is among the most widely used commands. Furthermore, the tarball can be easily moved from one server to another.`
        ],
        [
            `Write the difference between $* and $@`,
            `Unlike $@, where each quoted argument is treated as a separate argument, $* treats each positional parameter as a single argument.`
        ],
        [
            `Name the command that is used to compare the strings in a shell script.`,
            `To compare text strings, use the test command. By comparing each character in each string, the test command usually compares text strings.  In most cases, tests are generally included as a conditional execution of shell commands. It can be used for:

            --- Comparison of file attributes
            --- Comparison of strings
            --- Comparing basic arithmetic operations
            
            Using square brackets ([ and ]) around the EXPRESSION is equivalent to testing it with the test. 
            
            <b>Syntax of test command:</b>
            
            --- test EXPRESSION
            --- test EXPRESSION && true-command
            --- test EXPRESSION || false-command
            --- test EXPRESSION && true-command || false-command
            
            <b>Examples:</b>  
            
            --- test 50 -gt 40 && echo "Yes" || echo "No"
            
            Because 50 is greater than 40, this command prints the text "Yes".
            
            --- ["Excellent" = "Excellent"]; echo $?
            
            As the two strings are identical, this command prints "0" because the expression is true.`
        ],
        [
            `Write down the Syntax for all the loops in Shell Scripting.`,
            `In shell scripting, you can use three looping statements as given below:

            --- while statement
            --- for statement
            --- until statement
            
            <b>Syntax is as follows:</b>
            
            --- <b>For Loop</b>: Loops that operate on lists of items are known as loops. Each item in the list receives the same set of commands.
            
            <b>Syntax</b>: 
            <code>
             for var in word1 word2 ... wordN 
            do   
                    Statement to be executed  
            done
            </code>

            <b>Example</b>: 
            <code>
            for a in 1 2 3 4 5 6 7 8 9 10 
            do 
                if [ $a == 3 ] 
                then 
                    break 
                fi 
                echo "Iteration no $a" 
            done 
            </code>

            <b>Output:</b> 
            <code>
            $bash -f main.sh 
            Iteration no 1 
            Iteration no 2
            </code> 
            
            --- <b>While Loop</b>: It involves evaluating a command first and then executing a loop based on the result. The loop will be terminated if the command raises to false.
            
            <b>Syntax</b>:  
            <code>
            while command 
            do 
                Statement to be executed 
            done
            </code>

            <b>Example:</b>
            <code>
            a=0 
            while [ $a -lt 3 ] 
            do  
                echo $a 
                a=\`expr $a + 1\` 
            done 
            </code>

            <b>Output</b>: 
            <code>
            $bash -f main.sh 
            0 
            1 
            2 
            3 
            </code>

            --- <b>Until Loop</b>: As often as the condition/command evaluates to false, the until loop is executed. Once the condition or command becomes true, the loop terminates.
            
            <b>Syntax</b>: 
            <code>
            until command 
            do  
                     Statement to be executed until command is true 
            done
            </code>

            <b>Example</b>: 
            <code>
            a=0 
            until [ $a -gt 3 ] 
            do  
                echo $a 
                a=\`expr $a + 1\` 
            done 
            </code>

            <b>Output</b>: 
            <code>
            $bash -f main.sh 
            0 
            1 
            2 
            3 
            </code>`
        ],
        [
            `What are interactive and non-interactive shells?`,
            `--- <b>Interactive shell</b>: /bin/bash and /bin/sh is interactive shell. It is a non-login shell that gets started from a command line. It first copies the parent environment and then invokes.

            --- <b>Non-Interactive shell</b>: /sbin/nologin shell is non-interactive shell. It is present when the shell script is running and just inherits the parent's environment.`
        ],
        [
            `How will you pass and access arguments to a script in Linux?`,
            `In scripts, arguments are passed as follows: 

            scriptName "Arg1" "Arg2"…."Argn" 
            
            Arguments in a script can be accessed as follows: 
            
            $1 , $2 .. $n`
        ],
        [
            `What do you mean by the “s” permission bit in a file?`,
            `The SUID (Set User ID) bit is known as the "s" bit. SUIDS are special file permissions for executable files that enable other users to run the file as the file owner. There will be an s (to indicate SUID) special permission for the user instead of the normal x, which represents execute permissions. A file that has the "s" bit set will grant the process the rights of the file's owner while the program is running.

            <b>Example: </b>
            
            Executing the "passwd" command to change the password, for example, allows the user to write the new password to the shadow file even though its owner is "root".`
        ],
        [
            `How will you debug a shell script?`,
            `With set, you can turn on or off debugging options in the shell: 

            --- <b>Set -x</b>: This displays commands and their arguments as they are being executed.
            --- <b>Set -v</b>: It displays shell input lines in real-time as they are read.`
        ],
        [
            `What is the best way to debug the shell script/program problems?`,
            `Following are some common methods of debugging a script:

            --- The shell script can be modified to include debug statements to display the information that can be useful in identifying the problem.   
            --- By setting -x in the script, we can enable debugging.`
        ],
        [
            `What is the importance of sed command and awk command?`,
            `--- <b>sed Command</b>: sed command is an acronym for stream editor. It is used for editing a file without using an editor. The SED command performs a variety of operations on files, such as searching, finding and replacing, inserting and deleting. However, substitution or find and replace are the most commonly used features of SED.
            
            <b>Syntax</b>: sed options file 
            
            <b>Example</b>: Execution over Shell Interpreter/Editor
            
            <code>/u/user1/Shell_Scripts_2020> echo "Hi Gourav" | sed 's/Hi/Hello/' </code>

            In this case, “s” command in sed replaces the string Hi with “Hello”. 
            
            <b>Output</b>: 
            <code>Hello Gourav</code>
            
            --- <b>awk Command</b>: The command is a scripting language generally used to manipulate data and generate reports. There is no need to compile it and users are allowed to have access to a variable, string functions, numeric functions, and logical operations.
            
            <b>Syntax</b>: awk options File Name 
            
            <b>Example</b>: Script/Code
            
            <code>/u/user1/Shell_Scripts_2017> cat > script10 
            Hello Aisha 
            Hello Rohan 
            Hello Gourav </code>

            An awk command/utility assigns variables in following way: 
            
            $0 -> For whole line (e.g. Hello Aisha)  
            
            $1 -> For the first field i.e. Hello  
            
            $2 -> For the second field 
            
            <b>Execution over Shell Interpreter/Editor </b>
            
            <code>awk ‘{print $0}’ script10 </code>

            The above script prints all the 3 lines completely. 
            
            <b>Output</b>: 
            <code>
            Hello Aisha 
            Hello Rohan 
            Hello Gourav
            </code>

            <b>Execution over Shell Interpreter/Editor </b>
            
            <code>awk ‘{print $1}’ script10 </code>

            The above script prints only the first word i.e., Hello from each line. 
            
            Output: 
            <code>
            Hello 
            Hello 
            Hello
            </code>`
        ],
        [
            `Write the difference between “=” and “==”.`,
            `--- <b>= operator</b>: Assigning the value into a variable is accomplished by using the = operator. It is referred to as the assignment operator.
            
            <b>Example</b>: Suppose variable a holds 5 and variable b holds 2, then: 

            <code>a = $b;              #Would assign value of b to a </code>

            --- <b>== operator</b>: This is used to compare strings. In the double equals operator, both operands are compared. If they are equal, it returns true, otherwise, it returns false.
            
            <b>Example</b>: Suppose variable a holds 5 and variable b holds 2, then:
            
            <code>[ $a == $b ];      #Comparing the values of a and b.</code>`
        ],
        [
            `Name the command that is used to display the shell's environment variable.`,
            `Shell functions, along with other Linux programs, are controlled by environmental variables.   Any child process of the shell has access to an environment variable. These variables are necessary for some programs to function properly. <b>env</b> or <b>printenv</b> commands can be used to display the shell's environment variables.`
        ],
        [
            `Name different commands that are available to check the disk usage.`,
            `The following commands are available to check disk space usage:

            --- <b>df</b> – It is used to find out how much space is left on a disk.
            --- <b>du</b> – With this command, you can find out how much disk space the specified files and each subdirectory take up.
            --- <b>dfspace</b> – Using this command, you can check the amount of free disk space in MB.`
        ],
        [
            `What do you mean by metacharacters?`,
            `In a data field or program, metacharacters are special characters that provide information about other characters. In shells, they're called regular expressions.  A character that is neither a letter nor a number is generally considered a metacharacter. Using shell metacharacters, you can group together commands, redirect and pipe input/output, put commands in the background, reduce the size of file names and path names, etc. You can use them as wildcards to specify a file name without typing in the file's full name. The most common metacharacters are as follows:

            --- <b>Asterisk (*)</b>: Use the * to match any character.
            --- <b>Question Mark (?)</b>: It matches a single character in the filename.
            --- <b>Brackets ([…])</b>:  The metacharacters used here match some specified characters.
            --- <b>Hyphen (-)</b>: When placed within [] (brackets), the - metacharacter matches a specified range.`
        ],
        [
            `How will you find total shells available in your system?`,
            `Within your system, there are several shells available. If you want to find all the shells on the system, you can use $ cat /etc/shells. 

            <b>Example</b>: 
            
            $ cat /etc/shells 
            
            <b>Execution over Shell Interpreter/Editor</b>: 
            
            $ cat /etc/shells 
            
            <b>Output</b>: 
            
            /bin/sh 
            
            /bin/bash 
            
            /sbin/nologin 
            
            /bin/ksh 
            
            /bin/csh`
        ],
        [
            `Explain how you will open a read-only file in Unix/Shell.`,
            `You can open a read-only file by: <b>vi –R <Filename></b>`
        ],
        [
            `Name the command that one should use to know how long the system has been running.`,
            `Using the Uptime command, you can see how long your system has been active. You can also determine the number of users with running sessions, and the average system load for 1, 5, and 15 minutes. The information displayed at once can also be filtered based on your specified options. 

            <b>Example: $ uptime   </b>
            
            Entering the above command at the shell prompt, namely $ uptime, will produce the following output:
            
            9:21am  up 86 day(s), 11:46,  3 users,  load average: 2.24, 2.18, 2.16`
        ],
        [
            `Write the difference between $$ and $!?`,
            `You can use $$ to get the process id of the current process. However, $! displays the process id for a background process that recently went away.`
        ],
        [
            `Write difference between grep and find command.`,
            `--- <b>Grep command</b>: This command facilitates searching and displaying content based on regular expressions specified by the user. Using the Grep command, one can search in a file for patterns. Grep command have the following syntax:
            <b>grep “literal string” <filename></b>
            
            <b>Example: </b>
            <code>
            grep “apple” file1.txt                     //Displays all the lines with the word “apple” in the file1
            
            grep “apple” file1.txt  file2.txt   //Scan multiple documents and search the word “apple” in both files.
            </code>

            --- <b>Find command</b>: The FIND command searches for files and folders based on their size, modification time, and access time. You can use this command to search files and directories. Find command have the following syntax:
            <b>find <path> <search criteria> <action></b>
            
            <b>Example:</b>
            <code>
            find –type  f                      // Command will find all the files
            
            find  –type  d                    //Command will find all the directories
            
            find .  –name file1.txt       //Command will find file1.txt in the current directory.
            </code>`
        ],
        [
            `How can we create a function in shell script?`,
            `In other programming languages, shell functions are much like subroutines, procedures, and functions. The syntax for declaring a function is as follows:
            <code>
            function_name () 
            { 
               list of commands
            } 
            </code>
            Function_name is the name of your function, and that's what you'll use to call it from anywhere in your script. The function name must be followed by parentheses, then a list of commands enclosed in braces.
            
            <b>Example</b>:
            
            The following example shows how function can be used:
            <code>
            #!/bin/sh
            # Define your function here
             
            Hello () 
              {
                 echo "Hello World"
              }
             
            # Invoke your function
            Hello
            </code>

            The following output will be displayed after execution:
            <code>
            $./test.sh
            Hello World
            </code>`
        ],
        [
            `How to use pipe commands?`,
            `Pipe command allows you to use several commands in the same way, in which the output of one is used as input for another. Like a pipeline, each process output is directly input to the next one. A pipe is represented by the symbol "|". The flow of data through a pipeline is unidirectional, i.e., from left to right.

            <b>Syntax</b>:
            
            <code>command_1 | command_2 | command_3 | .... | command_N</code>`
        ]
    ]
}