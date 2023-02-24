let unixQuestions =  {
    Section: "Unix Shell Scripting",
    Title: "Top 60",
    URLs: [
        {
            Title: 'Video tutorial 1',
            URL: "https://youtu.be/vLPdBp9vv9Y",
        },
        {
            Title: 'Video tutorial 2',
            URL: "https://youtu.be/8c1BL5b47kg",
        },
        {
            Title: 'Source: softwaretestinghelp.com',
            URL: "https://www.softwaretestinghelp.com/shell-scripting-interview-questions/",
        }
    ],
    Questions: [
        [
            `Video tutorials`,
            `<iframe width="560" height="315" src="https://www.youtube.com/embed/vLPdBp9vv9Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            <iframe width="560" height="315" src="https://www.youtube.com/embed/8c1BL5b47kg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        ],
        [
            `What is Shell?`,
            `Shell is a command interpreter, which interprets the command given by the user to the kernel. It can also be defined as an interface between a user and the operating system.`
        ],
        [
            `What is Shell Scripting?`,
            `Shell scripting is nothing but a series or sequence of UNIX commands written in a plain text file. Instead of specifying one job/command at a time, in shell scripting, we give a list of UNIX commands like a to-do list in a file to execute it.`
        ],
        [
            `What is the importance of writing Shell Scripts?`,
            `--- Shell script takes input from the user, file and displays it on the screen.
            --- Shell scripting is very useful in creating your own commands.
            --- It is helpful in automating some tasks of the day to day life.
            --- It is useful for automating system administration tasks.
            --- Mainly it saves time.`
        ],
        [
            `List some of the common and most widely used UNIX commands.`,
            `<table id="tablepress-137" class="tablepress tablepress-id-137 tablepress-responsive table table-striped">
            <thead>
            <tr class="row-1 odd">
            <th class="column-1"><strong>Command</strong></th><th class="column-2"><strong>Example/Usage of Command</strong></th><th class="column-3"><strong>Description</strong></th>
            </tr>
            </thead>
            <tbody class="row-hover">
            <tr class="row-2 even">
            <td class="column-1"><strong>ls</strong></td><td class="column-2">1. $ ls<br>
            2. $ ls –lrt or $ ls -ltr<br>
            </td><td class="column-3">1. It lists files in the current directory.<br>
            2. It lists files in the long format.<br>
            </td>
            </tr>
            <tr class="row-3 odd">
            <td class="column-1"><strong>cd </strong></td><td class="column-2">1. $ cd <br>
            2. $ cd test<br>
            3. $ cd .. (after cd space needs to be given before entering two dots.)<br>
            </td><td class="column-3">1. It changes directory to your home directory.<br>
            2. It changes directory to test.<br>
            3. It moves back to one directory or to the parent directory of your current directory.<br>
            </td>
            </tr>
            <tr class="row-4 even">
            <td class="column-1"><strong>mkdir</strong></td><td class="column-2">$ mkdir test</td><td class="column-3">It creates a directory called test.</td>
            </tr>
            <tr class="row-5 odd">
            <td class="column-1"><strong>rmdir</strong></td><td class="column-2">$ rmdir test1<br>
            <b>CAUTION: Be careful while using this command.<b><br>
            </b></b></td><td class="column-3">It removes directory test1.</td>
            </tr>
            <tr class="row-6 even">
            <td class="column-1"><strong>cp</strong></td><td class="column-2">1. $ cp file1 test<br>
            2. $ cp file1 file1.bak<br>
            </td><td class="column-3">1. It copies file1 to test directory.<br>
            2. It takes backup of file1.<br>
            </td>
            </tr>
            <tr class="row-7 odd">
            <td class="column-1"><strong>rm</strong></td><td class="column-2">$ rm file1<br>
            <b>CAUTION: Be careful while using this command.<b><br>
            </b></b></td><td class="column-3">It removes or deletes a file1.</td>
            </tr>
            <tr class="row-8 even">
            <td class="column-1"><strong>mv</strong></td><td class="column-2">$ mv file1 file2</td><td class="column-3">It moves or renames file1 to file2.</td>
            </tr>
            <tr class="row-9 odd">
            <td class="column-1"><strong>more</strong></td><td class="column-2">$ more <file name=""></file></td><td class="column-3">It checks or display one page at a time.</td>
            </tr>
            <tr class="row-10 even">
            <td class="column-1"><strong>touch</strong></td><td class="column-2">$ touch test</td><td class="column-3">It creates an empty file called test.</td>
            </tr>
            <tr class="row-11 odd">
            <td class="column-1"><strong>cat</strong></td><td class="column-2">1. $ cat File1	<br>
            2. $ cat test1 &gt; test2<br>
            </td><td class="column-3">1. It displays contents of File1.<br>
            2. It creates a new file test2 with the contents of test1.<br>
            </td>
            </tr>
            <tr class="row-12 even">
            <td class="column-1"><strong>compress</strong></td><td class="column-2">$ compress file1</td><td class="column-3">It reduces the size of file1 and creates a compressed file called file1.z and deletes file1.</td>
            </tr>
            <tr class="row-13 odd">
            <td class="column-1"><strong>date</strong></td><td class="column-2">$ date <br>
            e.g. Output:<br>
            Tuesday, September 12, 2017 06:58:06 AM MDT<br>
            </td><td class="column-3">It displays current date and time.</td>
            </tr>
            <tr class="row-14 even">
            <td class="column-1"><strong>diff</strong></td><td class="column-2">$ diff file1 file2</td><td class="column-3">It displays line by line difference between file1 and file2.</td>
            </tr>
            <tr class="row-15 odd">
            <td class="column-1"><strong>find</strong></td><td class="column-2">$ find . –name ‘*.t’ -print</td><td class="column-3">It searches in the current directory and in all its subdirectories for files ending with .t, and writes their<br>
            names in the output.<br>
            </td>
            </tr>
            <tr class="row-16 even">
            <td class="column-1"><strong>finger</strong></td><td class="column-2">$ finger</td><td class="column-3">It displays information about user.</td>
            </tr>
            <tr class="row-17 odd">
            <td class="column-1"><strong>who</strong></td><td class="column-2">$ who</td><td class="column-3">It lists the users those who are logged in on the machine.</td>
            </tr>
            <tr class="row-18 even">
            <td class="column-1"><strong>grep</strong></td><td class="column-2">1.$ grep Hello file1<br>
            2.$ grep –c Hello file1<br>
            </td><td class="column-3">1. It searches for the lines containing Hello in file1.<br>
            2. It gives count or number of lines that contains Hello in file1.<br>
            </td>
            </tr>
            <tr class="row-19 odd">
            <td class="column-1"><strong>kill</strong></td><td class="column-2">kill <pid><br>
            $ kill 1498<br>
            </pid></td><td class="column-3">It kills the process which is having PID as 1498.</td>
            </tr>
            <tr class="row-20 even">
            <td class="column-1"><strong>lpr</strong></td><td class="column-2">1.$ lpr –Pprinter1 test<br>
            2.$ lp file1<br>
            </td><td class="column-3">1. It sends file test to print it on printer1.<br>
            2. It prints file1.<br>
            </td>
            </tr>
            <tr class="row-21 odd">
            <td class="column-1"><strong>man</strong></td><td class="column-2">$ man ls</td><td class="column-3">It displays online manual or help about ls command.</td>
            </tr>
            <tr class="row-22 even">
            <td class="column-1"><strong>passwd</strong></td><td class="column-2">$ passwd</td><td class="column-3">It is used to change the password.</td>
            </tr>
            <tr class="row-23 odd">
            <td class="column-1"><strong>pwd</strong></td><td class="column-2">$ pwd<br>
            e.g. Output: /u/user1/Shell_Scripts_2017<br>
            </td><td class="column-3">It displays present working directory.</td>
            </tr>
            <tr class="row-24 even">
            <td class="column-1"><strong>ps</strong></td><td class="column-2">$ ps<br>
            e.g. Output:<br>
            PID TTY TIME COMMAND<br>
            1498 3b 0:10 sh<br>
            1500 3b 0:05 sh<br>
            </td><td class="column-3">It displays the list of processes which are currently running on the machine.</td>
            </tr>
            <tr class="row-25 odd">
            <td class="column-1"><strong>talk</strong></td><td class="column-2">$ talk user1</td><td class="column-3">It is used to talk to the user1 who is currently logged into the same machine.</td>
            </tr>
            <tr class="row-26 even">
            <td class="column-1"><strong>wc</strong></td><td class="column-2">$ wc file1 <br>
            e.g. Output:<br>
            4 6 42 file1	<br>
            </td><td class="column-3">It counts the number of lines, words and characters in file1.<br>
            <br>
            </td>
            </tr>
            <tr class="row-27 odd">
            <td class="column-1"><strong>chmod</strong></td><td class="column-2">$ chmod 744 file1</td><td class="column-3">It changes the permissions of file1 &amp; assigns this permission rwxr--r--</td>
            </tr>
            <tr class="row-28 even">
            <td class="column-1"><strong>gzip</strong></td><td class="column-2">$ gzip file1 </td><td class="column-3">It compresses the file1. After compression file1 should look like this, file1.gz</td>
            </tr>
            <tr class="row-29 odd">
            <td class="column-1"><strong>gunzip </strong></td><td class="column-2">$ gunzip file1.gz</td><td class="column-3">It uncompresses the file1.gz. After uncompression file1.gz should look like this, file1</td>
            </tr>
            <tr class="row-30 even">
            <td class="column-1"><strong>history</strong></td><td class="column-2">$ history</td><td class="column-3">It lists all the commands which are recently used.</td>
            </tr>
            <tr class="row-31 odd">
            <td class="column-1"><strong>logname</strong></td><td class="column-2">$ logname<br>
            e.g. Output:<br>
            user1<br>
            </td><td class="column-3">It prints log name of the user.</td>
            </tr>
            <tr class="row-32 even">
            <td class="column-1"><strong>uname</strong></td><td class="column-2">$ uname<br>
            e.g. Output:<br>
            SunOS<br>
            </td><td class="column-3">It gives information about unix system which you are using.</td>
            </tr>
            <tr class="row-33 odd">
            <td class="column-1"><strong>tty</strong></td><td class="column-2">$ tty<br>
            e.g. Output:<br>
            /dev/pts/1<br>
            </td><td class="column-3">It displays the device name of your terminal.</td>
            </tr>
            <tr class="row-34 even">
            <td class="column-1"><strong>sort</strong></td><td class="column-2">$ sort file1</td><td class="column-3">This will sort the contents of file1 and displays sorted output on the screen.</td>
            </tr>
            <tr class="row-35 odd">
            <td class="column-1"><strong>head</strong></td><td class="column-2">$ head -15 file1</td><td class="column-3">It displays first 15 lines of the file.</td>
            </tr>
            <tr class="row-36 even">
            <td class="column-1"><strong>tail</strong></td><td class="column-2">$ tail -15 file1</td><td class="column-3">It displays last 15 lines of the file.</td>
            </tr>
            </tbody>
            </table>`
        ],
        [
            `Shell programs are stored in which file?`,
            `Shell programs are stored in a file called sh.`
        ],
        [
            `What are the different types of Shells available?`,
            `There are mainly 4 important types of shells that are widely used.
    
            And they include:
            
            --- Bourne Shell (sh)
            --- C Shell (csh)
            --- Korn Shell (ksh)
            --- Bourne Again Shell (bash)`
        ],
        [
            `What are the advantages of C Shell over Bourne Shell?`,
            `--- C shell allows aliasing of commands i.e. a user can give any name of his choice to the command. This feature is mainly useful when a user has to type the lengthy command again and again. At that point of time, instead of typing a lengthy command a user can type the name that he has given.
            --- C shell provides a command history feature. It remembers the previously typed command. Thus, it avoids typing the command again and again.`
        ],
        [
            `In a typical UNIX environment how many kernels and shells are available?`,
            `In a typical UNIX environment, only one kernel and many shells are available.`
        ],
        [
            `Is separate compiler required for executing a shell program?`,
            `A separate compiler is not required to execute a shell program. The shell itself interprets the command in the shell program and executes them.`
        ],
        [
            `How many shell scripts come with UNIX operating system?`,
            `There are approximately 280 shell scripts that come with the UNIX operating system.`
        ],
        [
            `When should shell programming/scripting <b>NOT</b> be used?`,
            `--- When the task is very much complex like writing the entire payroll processing system.
            --- Where there is a high degree of productivity required.
            --- When it needs or involves different software tools.`
        ],
        [
            `Basis of shell program relies on what fact?`,
            `The basis of shell programming relies on the fact that the UNIX shell can accept commands not just only from the keyboard but also from a file.`
        ],
        [
            `What are the default permissions of a file when it is created?`,
            `666 i.e. rw-rw-rw- is the default permission of a file, when it is created.`
        ],
        [
            `What can be used to modify file permissions?`,
            `File permissions can be modified using <b>umask</b>.`
        ],
        [
            `How to accomplish any task via shell script?`,
            `Any task can be accomplished via shell script at the dollar ($) prompt and vice versa.`
        ],
        [
            `What are Shell Variables?`,
            `Shell variables are the main part of shell programming or scripting. They mainly provide the ability to store and manipulate information within a shell program.`
        ],
        [
            `What are the two types of Shell Variables? Explain in brief.`,
            `The two types of shell variables are:
    
            <b>1) UNIX Defined Variables or System Variables</b> – These are standard or shell defined variables. Generally, they are defined in CAPITAL letters.
            
            <b>Example</b>: SHELL – This is a Unix Defined or System Variable, which defines the name of the default working shell.
            
            <b>2) User Defined Variables</b> – These are defined by users. Generally, they are defined in lowercase letters
            
            <b>Example</b>: $ a=10 –Here the user has defined a variable called ‘a’ and assigned value to it as 10.`
        ],
        [
            `How are shell variables stored? Explain with a simple example.`,
            `Shell variables are stored as string variables.
    
            <b>Example</b>: $ a=10
            
            In the above statement a=10, the 10 stored in ‘a’ is not treated as a number, but as a string of characters 1 and 0.`
        ],
        [
            `What is the lifespan of a variable inside a shell script?`,
            `The lifespan of a variable inside shell script is only until the end of execution.`
        ],
        [
            `How to make variables as unchangeable?`,
            `Variables can be made unchangeable using <b>readonly</b>. For instance, if we want variable ‘<b>a</b>’ value to remain as <b>10</b> and not change, then we can achieve this using <b>readonly</b>.
            
            <b>Example</b>:
            $ a=10
            $ readonly a`
        ],
        [
            `How variables can be wiped out?`,
            `Variables can be wiped out or erased using the <b>unset</b> command.
    
            <b>Example</b>:
            $ a =20
            $ unset a
            
            Upon using the above command the variable ‘<b>a</b>’ and its value <b>20</b> get erased from shell’s memory.
            
            <b>CAUTION</b>: Be careful while using this <b>unset</b> command.`
        ],
        [
            `What are positional parameters? Explain with an example.`,
            `Positional parameters are the variables defined by a shell. And they are used whenever we need to convey information to the program. And this can be done by specifying arguments at the command line.
    
            There is a total of 9 positional parameters present i.e. from $1 to $9.
            
            <b>Example</b>: $ Test Indian IT Industry has grown very much faster
            In the above statement, positional parameters are assigned like this.
            $0 -> Test (Name of a shell program/script)
            $1 ->Indian
            $2 -> IT and so on.`
        ],
        [
            `What does the. (dot) indicate at the beginning of a file name and how should it be listed?`,
            `A file name that begins with a. (dot) is called as a hidden file. Whenever we try to list the files it will list all the files except hidden files.
    
            But, it will be present in the directory. And to list the hidden file we need to use –a option of ls. i.e. $ ls –a.`
        ],
        [
            `Generally, each block in UNIX is how many bytes?`,
            `Each block in UNIX is 1024 bytes.`
        ],
        [
            `By default, a new file and a new directory that is being created will have how many links?`,
            `New file contains one link. And a new directory contains two links.`
        ],
        [
            `Explain about file permissions.`,
            `There are 3 types of file permissions as shown below:
            
            <table id="tablepress-138" class="tablepress tablepress-id-138 tablepress-responsive table table-striped">
            <thead>
            <tr class="row-1 odd">
            <th class="column-1"><strong>Permissions</strong></th><th class="column-2"><strong>Weight</strong></th>
            </tr>
            </thead>
            <tbody class="row-hover">
            <tr class="row-2 even">
            <td class="column-1"><strong>r – read</strong></td><td class="column-2">4</td>
            </tr>
            <tr class="row-3 odd">
            <td class="column-1"><strong>w – write</strong></td><td class="column-2">2</td>
            </tr>
            <tr class="row-4 even">
            <td class="column-1"><strong>x - execute</strong></td><td class="column-2">1</td>
            </tr>
            </tbody>
            </table>
    
            The above permissions are mainly assigned to owner, group and to others i.e. outside the group. Out of 9 characters first set of 3 characters decides/indicates the permissions which are held by the owner of a file. The next set of 3 characters indicates the permissions for the other users in the group to which the file owner belongs to.
    
            And the last 3 sets of characters indicate the permissions for the users who are outside the group. Out of the 3 characters belonging to each set, the first character indicates the “read” permission, the second character indicates “write” permission and the last character indicates “execute” permission.
    
            <b>Example</b>: $ chmod 744 file1
    
            This will assign the permission rwxr–r–to file1.`
        ],
        [
            `What is a file system?`,
            `The file system is a collection of files that contain related information of the files.`
        ],
        [
            `What are the different blocks of a file system? Explain in brief.`,
            `Given below are the main 4 different blocks available on a file system.
            
            <table id="tablepress-139" class="tablepress tablepress-id-139 tablepress-responsive table table-striped">
            <thead>
            <tr class="row-1 odd">
            <th class="column-1"><strong>File System</strong></th><th class="column-2">&nbsp;</th>
            </tr>
            </thead>
            <tbody class="row-hover">
            <tr class="row-2 even">
            <td class="column-1"><strong>Block No.</strong></td><td class="column-2"> Name of the Block</td>
            </tr>
            <tr class="row-3 odd">
            <td class="column-1"><strong>1st Block</strong></td><td class="column-2">Boot Block</td>
            </tr>
            <tr class="row-4 even">
            <td class="column-1"><strong>2nd Block</strong></td><td class="column-2">Super Block</td>
            </tr>
            <tr class="row-5 odd">
            <td class="column-1"><strong>3rd Block</strong></td><td class="column-2">Inode Table</td>
            </tr>
            <tr class="row-6 even">
            <td class="column-1"><strong>4th Block</strong></td><td class="column-2">Data Block</td>
            </tr>
            </tbody>
            </table>
    
            --- <b>Super Block</b>: This block mainly tells about a state of the file system like how big it is, maximum how many files can be accommodated, etc.
            --- <b>Boot Block</b>: This represents the beginning of a file system. It contains the bootstrap loader program, which gets executed when we boot the host machine.
            --- <b>Inode Table</b>: As we know all the entities in a UNIX are treated as files. So, the information related to these files is stored in an Inode table.
            --- <b>Data Block</b>: This block contains the actual file contents.`
        ],
        [
            `What are the three different security provisions provided by UNIX for a file or data?`,
            `Three different security provisions provided by UNIX for a file or data are:
    
            --- It provides a unique user id and password to the user, so that unknown or unauthorized person should not be able to access it.
            --- At the file level, it provides security by providing read, write & execute permissions for accessing the files.
            --- Lastly, it provides security using file encryption. This method allows encoding a file in an unreadable format. Even if someone succeeds in opening a file, but they cannot read its contents until and unless it is decrypted`
        ],
        [
            `What are the three editors available in almost all the versions of UNIX?`,
            `The three editors are ed, ex & vi.`
        ],
        [
            `What are the three modes of operation of vi editor? Explain in brief.`,
            `The three modes of operation of <b>vi editors</b> are,
    
            1. <b>Command Mode</b>: In this mode, all the keys pressed by a user are interpreted as editor commands.
            2. <b>Insert Mode</b>: This mode allows for the insertion of a new text and editing of an existing text etc.
            3. <b>The ex-command Mode</b>: This mode allows a user to enter the commands at a command line.`
        ],
        [
            `What is the alternative command available to echo and what does it do?`,
            `<b>tput</b> is an alternative command to <b>echo</b>.
    
            Using this, we can control the way in which the output is displayed on the screen.`
        ],
        [
            `How to find out the number of arguments passed to the script?`,
            `The number of arguments passed to the script can be found by the below command.
    
            <b>echo $ #</b>`
        ],
        [
            `What are control instructions and how many types of control instructions are available in a shell? Explain in brief.`,
            `Control Instructions are the ones, which enable us to specify the order in which the various instructions in a program/script are to be executed by the computer. Basically, they determine a flow of control in a program.
    
            <b>There are 4 types of control instructions that are available in a shell.</b>
            
            --- <b>Sequence Control Instruction</b>: This ensures that the instructions are executed in the same order in which they appear in the program.
            --- <b>Selection or Decision Control Instruction</b>: It allows the computer to take the decision as to which instruction is to be executed next.
            --- <b>Repetition or Loop Control Instruction</b>: It helps a computer to execute a group of statements repeatedly.
            --- <b>Case-Control Instruction</b>: This is used when we need to select from several alternatives.`
        ],
        [
            `What are Loops and explain three different methods of loops in brief?`,
            `Loops are the ones, which involve repeating some portion of the program/script either a specified number of times or until a particular condition is being satisfied.
    
            <b>3 methods of loops are</b>:
            
            --- <b>For Loop</b>: This is the most commonly used loop. For loop allows specifying a list of values that the control variable in the loop can take. The loop is then executed for each value mentioned in the list.
            --- <b>While Loop</b>: This is used in a program when we want to do something for a fixed number of times. While loop gets executed until it returns a zero value.
            --- <b>Until Loop</b>: This is similar to while loop except that the loop executes until the condition is true. Until the loop gets executed at least once, it returns a non-zero value.`
        ],
        [
            `What is IFS?`,
            `IFS stands for Internal Field Separator. And it is one of the system variables. By default, its value is space, tab, and a new line. It signifies that in a line where one field or word ends and another begins.`
        ],
        [
            `What is a Break statement and what is it used for?`,
            `The break is a keyword and is used whenever we want to jump out of a loop instantly without waiting to get back to the control command.
    
            When the keyword break is encountered inside any loop in the program, control will get passed automatically to the first statement after a loop. A break is generally associated with an if.`
        ],
        [
            `What is Continue statement and what is it used for?`,
            `Continue is a keyword and is used whenever we want to take the control to the beginning of the loop, by passing the statements inside the loop which have not yet been executed.
    
            When the keyword Continue is encountered inside any loop in the program, control automatically passes to the beginning of the loop. Continue is generally associated with an if.`
        ],
        [
            `What are Metacharacters in a shell? Explain with some examples.`,
            `Metacharacters are special characters in a program or data field which provides information about other characters. They are also called, regular expressions in a shell.
    
            <b>Example</b>:
            
            ls s* – It lists all the files beginning with character ‘s’.
            
            <b>Execution over Shell Interpreter/Editor</b>
            <code>/u/user1/Shell_Scrips> ls s*</code>
            
            <b>Output</b>:
            <code>script1 script2</code>
    
            $ cat script1 > script2 – Here output of cat command or script1 will go to a script2.
            
            <b>Execution over Shell Interpreter/Editor</b>
            <code>/u/user1/Shell_Scripts> cat script1 > script2</code>
            
            <b>Output</b>:
            <code>#!/bin/bach
            # script1
            #Usage: script1
            echo Hello!!
            echo How are you?
            script2 #here it calls the script2
            pwd</code>
            
            $ ls; who – This will execute ls first and then who.
            
            <b>Execution over Shell Interpreter/Editor</b>
            <code>/u/user1/Shell_Scripts> ls; who</code>
            
            <b>Output:</b>
            <code>script10     script5
            Script2      script6</code>
            <code>tibadm    pts/1       Sep 14 08:22
            crmadm    pts/2       Sep 14 08:43</code>`
        ],
        [
            `How to execute multiple scripts? Explain with an example.`,
            `In a shell, we can easily execute multiple scripts i.e. one script can be called from the other. We need to mention the name of a script to be called when we want to invoke it.
    
            <b>Example</b>: In the below program/script upon executing the first two echo statements of script1, shell script executes script2. Once after executing script2, the control comes back to script1 which executes a <b>pwd</b> command and then terminates.
            
            <b>Code for script1</b>
            <code>
            #!/bin/bash
            # script1
            # Usage: script1
            echo Hello!
            echo How are you?
            script2  #here it calls the script2
            pwd
            </code>
            
            <b>Code for script2</b>
            <code>
            #script2
            echo Software testing is an interesting job.
            ~
            </code>
            
            <b>Execution of script1 over Shell Interpreter/Editor</b>
            <code>
            /u/user1/Shell_Script> script1
            </code>
            
            <b>Output displayed on the Editor upon executing script1</b>
            <code>
            Hello!
            How are you?
            Software testing is an interesting job.
            /u/user1/Shell_Scripts
            </code>
            `
        ],
        [
            `Which command needs to be used to know how long the system has been running?`,
            `<b>uptime</b> command needs to be used to know how long the system has been running.
    
            <b>Example</b>: $ uptime
            
            On entering the above command at shell prompt i.e. $ uptime, the output should look like this.
            
            9:21am  up 86 day(s), 11:46,  3 users,  load average: 2.24, 2.18, 2.16
            
            <b>Execution over Shell Interpreter/Editor</b>
            <code>/u/user1/Shell_Script> uptime</code>
            
            <b>Output:</b>
            <code>
            9:21am up 86 day(s), 11:46, 3 users, load avarage: 2.24, 2.18, 2.16
            </code>`
        ],
        [
            `How to find the current shell which you are using?`,
            `We can find the current shell that we are using with echo $SHELL.
    
            <b>Example</b>: $ echo $SHELL
            
            <b>Execution over Shell Interpreter/Editor</b>
            <code>$ echo $SHELL</code>
            
            Output:
            <code>/bin/bash</code>`
        ],
        [
            `How to find all the available shells in your system?`,
            `We can find all the available shells in our system with $ cat /etc/shells.
    
            <b>Example</b>: $ cat /etc/shells
            
            <b>Execution over Shell Interpreter/Editor</b>
            <code>$ cat /etc/shells</code>
            
            <b>Output</b>:
            <code>/bin/sh
            /bin/bash
            /sbin/nologin
            /bin/ksh
            /bin/dash
            /bin/tcsh
            /bin/csh</code>`
        ],
        [
            `How to read keyboard inputs in shell scripts?`,
            `Keyboard inputs can be read in shell scripts as shown below,
    
            <b>Script/Code</b>
            <code>#!/bin/bash
            #script6
            read name
            echo "Hello $name"</code>
            
            <b>Execution over Shell Interpreter/Editor</b>
            <code>/u/user1/Shell_Script> script6</code>
            
            <b>Output</b>:
            <code>Jugoslav
            Hello Jugoslav</code>`
        ],
        [
            `How many fields are present in a crontab file and what does each field specify?`,
            `The <b>crontab</b> file has six fields. The first five fields tell <b>cron</b> when to execute the command: minute(0-59), hour(0-23), day(1-31), month(1-12), and day of the week(0-6, Sunday = 0).
    
            And the sixth field contains the command to be executed.`
        ],
        [
            `What are the two files of crontab command?`,
            `Two files of crontab command are:
    
            --- <b>cron.allow</b> – It decides which users need to be permitted from using crontab command.
            --- <b>cron.deny</b> – It decides which users need to be prevented from using crontab command.`
        ],
        [
            `What command needs to be used to take the backup?`,
            `<b>tar</b> is the command which needs to be used to take the backup. It stands for tape archive. The <b>tar</b> command is mainly used to save and restore files to and from an archive medium like tape.`
        ],
        [
            `What are the different commands available to check the disk usage?`,
            `There are three different commands available to check the disk usage.
    
            They are:
            
            --- <b>df</b> – This command is used to check the free disk space.
            --- <b>du</b> – This command is used to check the directory wise disk usage.
            --- <b>dfspace</b> – This command is used to check the free disk space in terms of MB.`
        ],
        [
            `What are the different communication commands available in Unix/Shell?`,
            `Basically, there are 4 different communication commands available in Unix/Shell. And they are mail, news, wall & motd.`
        ],
        [
            `How to find out the total disk space used by a specific user, say for example username is John?`,
            `The total disk space used by John can be found out as:
    
            <b>du –s/home/John</b>`
        ],
        [
            `What is Shebang in a shell script?`,
            `Shebang is a # sign followed by an exclamation i.e. !. Generally, this can be seen at the beginning or top of the script/program. Usually, a developer uses this to avoid repetitive work. Shebang mainly determines the location of the engine which is to be used in order to execute the script.
    
            Here ‘#’ symbol is called hash and ‘!’ is called a bang.
            
            <b>Example</b>: #!/bin/bash
            
            The above line also tells which shell to use.`
        ],
        [
            `What is the command to be used to display the shell’s environment variables?`,
            `Command to be used to display the shell’s environment variables is <b>env</b> or <b>printenv</b>.`
        ],
        [
            `How to debug the problems encountered in shell script/program?`,
            `Though it depends on the type of problem encountered. Given below are some common methods used to debug the problems in the script.
    
            --- Debug statements can be inserted in the shell script to output/display the information which helps to identify the problem.
            --- Using “set -x” we can enable debugging in the script.`
        ],
        [
            `How to know the variable length?`,
            `Variable length can be checked by <b>$ {#variable}</b>`
        ],
        [
            `What is the difference between = and ==?`,
            `= -> This is used for assigning value to the variable.
            == -> This is used for string comparison.`
        ],
        [
            `How to open a read-only file in Unix/shell?`,
            `Read-only file can be opened by:
            vi –R <File Name>`
        ],
        [
            `How can the contents of a file inside jar be read without extracting in a shell script?`,
            `The contents of the file inside a jar can be read without extracting in a shell script as shown below.
            tar –tvf <File Name>.tar`
        ],
        [
            `What is the difference between diff and cmp commands?`,
            `<b>diff</b> – Basically, it tells about the changes which need to be made to make files identical.
    
            <b>cmp</b> – Basically it compares two files byte by byte and displays the very first mismatch.`
        ],
        [
            `Explain in brief about sed command with an example.`,
            `<b>sed</b> stands for <b>stream editor</b>. And it is used for editing a file without using an editor. It is used to edit a given stream i.e. a file or input from a pipeline.
    
            <b>Syntax</b>: sed options file
            
            <b>Example</b>:
            
            <b>Execution over Shell Interpreter/Editor</b>
            <code>/u/user1/Shell_Script> echo "Hello World" | sed 's/Hello/Hi/'</code>
            
            Here ‘<b>s</b>’ command present in <b>sed</b> will replace string <b>Hello</b> with <b>Hi</b>.
            
            Output:
            <code>Hi World</code>`
        ],
        [
            `Explain in brief about awk command with an example.`,
            `<b>awk</b> is a data manipulation utility or command. Hence, it is used for data manipulation.
    
            <b>Syntax:</b> awk options File Name
            
            <b>Example:</b>
            
            <b>Script/Code</b>
            <code>/u/user1/Shell_Scripts> cat > script10</code>
            <code>Hello Jovan
            Hello Radoje
            Hello Kosta
            Hello Mile
            Hello Radovan</code>
            
            awk utility/command assigns variables like this.
            $0 -> For whole line (e.g. Hello John)
            $1 -> For the first field i.e. Hello
            $2 -> For the second field
            
            <b>Execution over Shell Interpreter/Editor</b>
            <code>awk '{print $0}' script10</code>
            
            The above script prints all the 5 lines completely.
            
            <b>Output</b>:
            <code>Hello Jovan
            Hello Radoje
            Hello Kosta
            Hello Mile
            Hello Radovan</code>
    
            <b>Execution over Shell Interpreter/Editor</b>
            <code>awk '{print $1}' script10</code>
            
            The above script prints only the first word i.e. Hello from each line.
            
            <b>Output</b>:
            <code>Hello
            Hello
            Hello
            Hello
            Hello</code>`
        ]
    ]
}