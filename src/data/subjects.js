// src/data/subjects.js

  function generateOSQuestions() {
    const topics = [
      "Process Management",
      "Memory Management",
      "File System",
      "CPU Scheduling",
      "Deadlocks",
      "I/O System",
      "Security",
      "Virtual Memory",
      "Threads",
      "System Calls",
    ];

    const questions = [
      {
        id: "os-1",
        question:
          "Which of the following is NOT a state in a process life cycle?",
        options: ["New", "Ready", "Waiting", "Destroyed"],
        answer: "D",
        explanation:
          'Process states are: New, Ready, Running, Waiting, Terminated. "Destroyed" is not a standard process state.',
        topic: "Process Management",
        difficulty: "Easy",
      },
      {
        id: "os-2",
        question:
          "What is the purpose of the fork() system call in Unix/Linux?",
        options: [
          "To create a new process",
          "To terminate a process",
          "To allocate memory",
          "To create a thread",
        ],
        answer: "A",
        explanation:
          "fork() creates a new process by duplicating the calling process. The new process is called the child process.",
        topic: "Process Management",
        difficulty: "Easy",
      },
      {
        id: "os-3",
        question: "Which scheduling algorithm can lead to starvation?",
        options: [
          "First Come First Serve (FCFS)",
          "Shortest Job First (SJF)",
          "Round Robin (RR)",
          "All of the above",
        ],
        answer: "B",
        explanation:
          "SJF can lead to starvation as longer processes may wait indefinitely if shorter processes keep arriving.",
        topic: "CPU Scheduling",
        difficulty: "Medium",
      },
      {
        id: "os-4",
        question: "What is the main purpose of virtual memory?",
        options: [
          "To increase RAM speed",
          "To allow execution of processes larger than physical memory",
          "To decrease CPU usage",
          "To improve disk performance",
        ],
        answer: "B",
        explanation:
          "Virtual memory allows programs to execute that require more memory than physically available by using disk space.",
        topic: "Virtual Memory",
        difficulty: "Medium",
      },
      {
        id: "os-5",
        question: "In paging, what is stored in the page table?",
        options: [
          "Logical to physical address mapping",
          "File permissions",
          "Process priorities",
          "I/O device status",
        ],
        answer: "A",
        explanation:
          "Page table contains mapping between logical pages and physical frames.",
        topic: "Memory Management",
        difficulty: "Medium",
      },
      {
        id: "os-6",
        question:
          "Which of the following is a necessary condition for deadlock?",
        options: [
          "Mutual Exclusion",
          "Hold and Wait",
          "No Preemption",
          "All of the above",
        ],
        answer: "D",
        explanation:
          "All four conditions (Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait) must be present for deadlock.",
        topic: "Deadlocks",
        difficulty: "Hard",
      },
      {
        id: "os-7",
        question: "What does RAID stand for?",
        options: [
          "Redundant Array of Independent Disks",
          "Random Access Integrated Drives",
          "Read After Initial Delay",
          "Redundant Access to Integrated Data",
        ],
        answer: "A",
        explanation:
          "RAID stands for Redundant Array of Independent Disks, used for data redundancy and performance improvement.",
        topic: "File System",
        difficulty: "Easy",
      },
      {
        id: "os-8",
        question: "Which Unix command displays process status?",
        options: ["ls", "ps", "top", "Both B and C"],
        answer: "D",
        explanation:
          "Both ps and top commands display process status information in Unix/Linux systems.",
        topic: "Process Management",
        difficulty: "Easy",
      },
      {
        id: "os-9",
        question: "What is thrashing in operating systems?",
        options: [
          "High CPU utilization",
          "Excessive paging causing low CPU utilization",
          "Memory fragmentation",
          "Disk failure",
        ],
        answer: "B",
        explanation:
          "Thrashing occurs when excessive paging causes the system to spend more time swapping pages than executing processes.",
        topic: "Virtual Memory",
        difficulty: "Hard",
      },
      {
        id: "os-10",
        question: "Which scheduling algorithm uses time quantum?",
        options: ["FCFS", "SJF", "Priority Scheduling", "Round Robin"],
        answer: "D",
        explanation:
          "Round Robin scheduling uses time quantum to allocate CPU time to each process.",
        topic: "CPU Scheduling",
        difficulty: "Easy",
      },
      {
        id: "os-11",
        question: "What is the purpose of the exec() system call?",
        options: [
          "To create a new process",
          "To replace current process memory with new program",
          "To execute shell commands",
          "To allocate shared memory",
        ],
        answer: "B",
        explanation:
          "exec() replaces the current process image with a new process image.",
        topic: "Process Management",
        difficulty: "Medium",
      },
      {
        id: "os-12",
        question:
          "Which memory allocation scheme suffers from external fragmentation?",
        options: ["Paging", "Segmentation", "Both", "Neither"],
        answer: "B",
        explanation:
          "Segmentation suffers from external fragmentation, while paging does not.",
        topic: "Memory Management",
        difficulty: "Hard",
      },
      {
        id: "os-13",
        question: "What is a semaphore?",
        options: [
          "A hardware device",
          "A synchronization tool",
          "A type of memory",
          "A scheduling algorithm",
        ],
        answer: "B",
        explanation:
          "Semaphore is a synchronization tool used to control access to shared resources.",
        topic: "Process Management",
        difficulty: "Medium",
      },
      {
        id: "os-14",
        question: "In Unix, what is the inode?",
        options: [
          "Input node for processes",
          "Data structure storing file metadata",
          "Network interface",
          "Interrupt handler",
        ],
        answer: "B",
        explanation:
          "Inode is a data structure that stores metadata about a file (permissions, ownership, timestamps, etc.).",
        topic: "File System",
        difficulty: "Medium",
      },
      {
        id: "os-15",
        question: "What is the main advantage of multithreading?",
        options: [
          "Reduced memory usage",
          "Better security",
          "Improved responsiveness",
          "Simpler programming",
        ],
        answer: "C",
        explanation:
          "Multithreading improves responsiveness by allowing programs to continue execution even if part is blocked.",
        topic: "Threads",
        difficulty: "Medium",
      },
      {
        id: "os-16",
        question:
          "Which page replacement algorithm suffers from Belady's anomaly?",
        options: ["FIFO", "Optimal", "LRU", "MRU"],
        answer: "A",
        explanation:
          "FIFO page replacement algorithm suffers from Belady's anomaly where increasing frames can increase page faults.",
        topic: "Virtual Memory",
        difficulty: "Hard",
      },
      {
        id: "os-17",
        question: "What does PCB stand for in process management?",
        options: [
          "Process Control Block",
          "Program Counter Block",
          "Process Communication Buffer",
          "Program Control Buffer",
        ],
        answer: "A",
        explanation:
          "PCB stands for Process Control Block, which contains information about a process.",
        topic: "Process Management",
        difficulty: "Easy",
      },
      {
        id: "os-18",
        question: "Which of the following is a real-time operating system?",
        options: ["Windows 10", "Linux", "VxWorks", "macOS"],
        answer: "C",
        explanation:
          "VxWorks is a real-time operating system used in embedded systems.",
        topic: "System Calls",
        difficulty: "Easy",
      },
      {
        id: "os-19",
        question: "What is the purpose of the swap space?",
        options: [
          "To store temporary files",
          "To extend physical memory using disk",
          "To cache frequently used data",
          "To backup system files",
        ],
        answer: "B",
        explanation:
          "Swap space extends physical memory by using disk space for pages not currently in use.",
        topic: "Virtual Memory",
        difficulty: "Medium",
      },
      {
        id: "os-20",
        question: "Which command creates a hard link in Unix?",
        options: ["ln", "ln -s", "link", "hlink"],
        answer: "A",
        explanation:
          "ln command creates hard links, while ln -s creates symbolic links.",
        topic: "File System",
        difficulty: "Easy",
      },
      {
        id: "os-21",
        question: "What is context switching?",
        options: [
          "Switching between user and kernel mode",
          "Saving state of one process and loading another",
          "Changing CPU scheduling algorithm",
          "Swapping memory pages",
        ],
        answer: "B",
        explanation:
          "Context switching is the process of saving the state of one process and loading the state of another.",
        topic: "Process Management",
        difficulty: "Medium",
      },
      {
        id: "os-22",
        question:
          "Which scheduling algorithm provides the minimum average waiting time?",
        options: ["FCFS", "SJF", "Round Robin", "Priority"],
        answer: "B",
        explanation:
          "SJF provides minimum average waiting time among non-preemptive algorithms.",
        topic: "CPU Scheduling",
        difficulty: "Hard",
      },
      {
        id: "os-23",
        question: "What is a zombie process?",
        options: [
          "A process that uses too much memory",
          "A process that has terminated but entry still exists in process table",
          "A process that is stuck in infinite loop",
          "A process with highest priority",
        ],
        answer: "B",
        explanation:
          "Zombie process is one that has completed execution but still has an entry in the process table.",
        topic: "Process Management",
        difficulty: "Medium",
      },
      {
        id: "os-24",
        question: "Which of these is a disk scheduling algorithm?",
        options: ["FCFS", "SCAN", "C-SCAN", "All of the above"],
        answer: "D",
        explanation:
          "All are disk scheduling algorithms used to optimize disk head movement.",
        topic: "I/O System",
        difficulty: "Medium",
      },
      {
        id: "os-25",
        question: "What is the purpose of the TLB?",
        options: [
          "To store temporary files",
          "To cache page table entries",
          "To buffer I/O operations",
          "To track system logs",
        ],
        answer: "B",
        explanation:
          "Translation Lookaside Buffer (TLB) caches page table entries to speed up address translation.",
        topic: "Memory Management",
        difficulty: "Hard",
      },
      {
        id: "os-26",
        question:
          "Which system call is used for inter-process communication using pipes?",
        options: ["pipe()", "fork()", "exec()", "wait()"],
        answer: "A",
        explanation:
          "pipe() system call creates a pipe for IPC between related processes.",
        topic: "Process Management",
        difficulty: "Medium",
      },
      {
        id: "os-27",
        question:
          "What is the main difference between preemptive and non-preemptive scheduling?",
        options: [
          "Memory allocation",
          "CPU can be taken from running process",
          "Number of processes",
          "I/O handling",
        ],
        answer: "B",
        explanation:
          "In preemptive scheduling, CPU can be taken from a running process; in non-preemptive, it cannot.",
        topic: "CPU Scheduling",
        difficulty: "Easy",
      },
      {
        id: "os-28",
        question: "Which RAID level provides mirroring?",
        options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
        answer: "B",
        explanation:
          "RAID 1 provides mirroring (duplication of data on multiple disks).",
        topic: "File System",
        difficulty: "Medium",
      },
      {
        id: "os-29",
        question: "What is the purpose of the chmod command?",
        options: [
          "Change memory allocation",
          "Change file permissions",
          "Change process priority",
          "Change directory",
        ],
        answer: "B",
        explanation:
          "chmod changes file permissions (read, write, execute) in Unix/Linux.",
        topic: "File System",
        difficulty: "Easy",
      },
      {
        id: "os-30",
        question: "Which of the following is a microkernel architecture?",
        options: ["Windows NT", "Linux", "Mach", "All of the above"],
        answer: "C",
        explanation:
          "Mach is a microkernel, while Windows NT and Linux are hybrid/modified microkernels.",
        topic: "System Calls",
        difficulty: "Hard",
      },
      {
        id: "os-31",
        question: "What does DMA stand for?",
        options: [
          "Direct Memory Access",
          "Dynamic Memory Allocation",
          "Direct Module Access",
          "Dynamic Module Allocation",
        ],
        answer: "A",
        explanation:
          "DMA (Direct Memory Access) allows hardware to access memory without CPU intervention.",
        topic: "I/O System",
        difficulty: "Medium",
      },
      {
        id: "os-32",
        question: "Which command kills a process by PID?",
        options: ["kill -9 PID", "stop PID", "end PID", "terminate PID"],
        answer: "A",
        answer: "A",
        explanation:
          "kill -9 PID forcefully terminates a process using SIGKILL signal.",
        topic: "Process Management",
        difficulty: "Easy",
      },
      {
        id: "os-33",
        question:
          "What is the main advantage of layered operating system architecture?",
        options: [
          "Better performance",
          "Modularity and ease of debugging",
          "Smaller memory footprint",
          "Faster boot time",
        ],
        answer: "B",
        explanation:
          "Layered architecture provides modularity, making the system easier to debug and maintain.",
        topic: "System Calls",
        difficulty: "Medium",
      },
      {
        id: "os-34",
        question: "Which page replacement algorithm is theoretically optimal?",
        options: ["FIFO", "LRU", "Optimal", "Clock"],
        answer: "C",
        explanation:
          "Optimal page replacement algorithm is theoretically optimal but not implementable in practice.",
        topic: "Virtual Memory",
        difficulty: "Hard",
      },
      {
        id: "os-35",
        question: "What is the purpose of the wait() system call?",
        options: [
          "To pause process execution",
          "To wait for child process to terminate",
          "To wait for I/O completion",
          "To wait for memory allocation",
        ],
        answer: "B",
        explanation:
          "wait() system call makes parent process wait for child process to terminate.",
        topic: "Process Management",
        difficulty: "Medium",
      },
      {
        id: "os-36",
        question:
          "Which of the following is a critical section problem solution?",
        options: [
          "Peterson's Solution",
          "Dekker's Algorithm",
          "Semaphores",
          "All of the above",
        ],
        answer: "D",
        explanation:
          "All are solutions to the critical section problem for process synchronization.",
        topic: "Process Management",
        difficulty: "Hard",
      },
      {
        id: "os-37",
        question: "What is the purpose of the bootloader?",
        options: [
          "To load operating system into memory",
          "To boot from network",
          "To initialize hardware",
          "All of the above",
        ],
        answer: "D",
        explanation:
          "Bootloader performs all these functions during system startup.",
        topic: "System Calls",
        difficulty: "Medium",
      },
      {
        id: "os-38",
        question: "Which file system is journaling?",
        options: ["FAT32", "ext3", "NTFS", "Both B and C"],
        answer: "D",
        explanation:
          "Both ext3 and NTFS are journaling file systems that maintain log of changes.",
        topic: "File System",
        difficulty: "Medium",
      },
      {
        id: "os-39",
        question: "What is the main purpose of the BIOS?",
        options: [
          "To provide user interface",
          "To perform hardware initialization",
          "To manage memory",
          "To schedule processes",
        ],
        answer: "B",
        explanation:
          "BIOS (Basic Input/Output System) initializes hardware during boot process.",
        topic: "System Calls",
        difficulty: "Easy",
      },
      {
        id: "os-40",
        question: "Which scheduling algorithm is used in Windows?",
        options: [
          "Round Robin",
          "Multilevel Queue",
          "Multilevel Feedback Queue",
          "Priority-based preemptive",
        ],
        answer: "C",
        explanation:
          "Windows uses Multilevel Feedback Queue scheduling algorithm.",
        topic: "CPU Scheduling",
        difficulty: "Hard",
      },
      {
        id: "os-41",
        question: "What is a system call?",
        options: [
          "Call to hardware device",
          "Programmatic way to request OS services",
          "Function call within program",
          "Network call",
        ],
        answer: "B",
        explanation:
          "System call is a programmatic way for programs to request services from the operating system.",
        topic: "System Calls",
        difficulty: "Easy",
      },
      {
        id: "os-42",
        question: "Which of the following is NOT a file type in Unix?",
        options: ["Regular file", "Directory", "Symbolic link", "Registry"],
        answer: "D",
        explanation:
          "Registry is a Windows concept; Unix has regular files, directories, symbolic links, device files, etc.",
        topic: "File System",
        difficulty: "Easy",
      },
      {
        id: "os-43",
        question: "What is the purpose of the nice command?",
        options: [
          "To make output look nice",
          "To change process priority",
          "To format files",
          "To compress data",
        ],
        answer: "B",
        explanation:
          "nice command changes the priority (niceness) of a process in Unix/Linux.",
        topic: "Process Management",
        difficulty: "Medium",
      },
      {
        id: "os-44",
        question: "Which of these is a memory management technique?",
        options: [
          "Paging",
          "Segmentation",
          "Virtual Memory",
          "All of the above",
        ],
        answer: "D",
        explanation:
          "All are memory management techniques used by operating systems.",
        topic: "Memory Management",
        difficulty: "Easy",
      },
      {
        id: "os-45",
        question: "What is the purpose of the /proc filesystem?",
        options: [
          "To store process executables",
          "To provide process and system information",
          "To backup system files",
          "To store temporary files",
        ],
        answer: "B",
        explanation:
          "/proc is a virtual filesystem that provides process and system information.",
        topic: "File System",
        difficulty: "Medium",
      },
      {
        id: "os-46",
        question: "Which of the following is a deadlock handling technique?",
        options: [
          "Prevention",
          "Avoidance",
          "Detection and Recovery",
          "All of the above",
        ],
        answer: "D",
        explanation:
          "All are techniques to handle deadlocks in operating systems.",
        topic: "Deadlocks",
        difficulty: "Medium",
      },
      {
        id: "os-47",
        question: "What is the purpose of the mount command?",
        options: [
          "To mount file systems",
          "To increase memory",
          "To mount hardware devices",
          "To increase CPU speed",
        ],
        answer: "A",
        explanation:
          "mount command attaches a filesystem to the directory tree at a mount point.",
        topic: "File System",
        difficulty: "Easy",
      },
      {
        id: "os-48",
        question: "Which algorithm is used for deadlock avoidance?",
        options: ["Banker's Algorithm", "Round Robin", "FCFS", "LRU"],
        answer: "A",
        explanation:
          "Banker's Algorithm is used for deadlock avoidance by ensuring safe state.",
        topic: "Deadlocks",
        difficulty: "Hard",
      },
      {
        id: "os-49",
        question: "What is the main purpose of an interrupt?",
        options: [
          "To terminate processes",
          "To signal events to CPU",
          "To allocate memory",
          "To schedule tasks",
        ],
        answer: "B",
        explanation:
          "Interrupts signal events (I/O completion, errors, etc.) to the CPU for immediate attention.",
        topic: "I/O System",
        difficulty: "Medium",
      },
      {
        id: "os-50",
        question: "Which command displays disk usage in Unix?",
        options: ["du", "df", "Both A and B", "diskuse"],
        answer: "C",
        explanation:
          "du shows disk usage of files/directories, df shows filesystem disk space usage.",
        topic: "File System",
        difficulty: "Easy",
      },
      {
        id: "os-51",
        question: "What is the purpose of the supervisor mode?",
        options: [
          "For user programs",
          "For operating system kernel",
          "For device drivers",
          "For system utilities",
        ],
        answer: "B",
        explanation:
          "Supervisor mode (kernel mode) is for operating system kernel execution with privileged instructions.",
        topic: "System Calls",
        difficulty: "Medium",
      },
      {
        id: "os-52",
        question: "Which of these is a thread synchronization mechanism?",
        options: ["Mutex", "Semaphore", "Monitor", "All of the above"],
        answer: "D",
        explanation:
          "All are thread synchronization mechanisms used to control access to shared resources.",
        topic: "Threads",
        difficulty: "Medium",
      },
      {
        id: "os-53",
        question: "What is the purpose of the fdisk command?",
        options: [
          "To format disks",
          "To partition disks",
          "To defragment disks",
          "To backup disks",
        ],
        answer: "B",
        explanation: "fdisk is used for disk partitioning in Linux.",
        topic: "File System",
        difficulty: "Medium",
      },
      {
        id: "os-54",
        question: "Which of the following is a spooling device?",
        options: ["Printer", "Keyboard", "Monitor", "Speaker"],
        answer: "A",
        explanation:
          "Printer is a spooling device where jobs are queued before printing.",
        topic: "I/O System",
        difficulty: "Easy",
      },
      {
        id: "os-55",
        question: "What is the purpose of the PATH environment variable?",
        options: [
          "To set system path",
          "To specify directories for executable search",
          "To set file paths",
          "To configure network paths",
        ],
        answer: "B",
        explanation:
          "PATH specifies directories where the shell looks for executable files.",
        topic: "System Calls",
        difficulty: "Easy",
      },
      {
        id: "os-56",
        question: "Which of these is a characteristic of real-time OS?",
        options: [
          "Predictable timing",
          "High throughput",
          "User-friendly interface",
          "Large memory support",
        ],
        answer: "A",
        explanation:
          "Real-time OS focuses on predictable timing and meeting deadlines.",
        topic: "System Calls",
        difficulty: "Medium",
      },
      {
        id: "os-57",
        question: "What is the purpose of the umask command?",
        options: [
          "To set default file permissions",
          "To unmask hidden files",
          "To mask processes",
          "To unmount filesystems",
        ],
        answer: "A",
        explanation:
          "umask sets default permissions for newly created files and directories.",
        topic: "File System",
        difficulty: "Medium",
      },
      {
        id: "os-58",
        question: "Which of these is a distributed operating system?",
        options: ["Windows", "Linux", "Amoeba", "macOS"],
        answer: "C",
        explanation:
          "Amoeba is a distributed operating system designed for distributed computing.",
        topic: "System Calls",
        difficulty: "Hard",
      },
      {
        id: "os-59",
        question: "What is the purpose of the cron daemon?",
        options: [
          "To schedule periodic tasks",
          "To monitor CPU usage",
          "To manage memory",
          "To handle interrupts",
        ],
        answer: "A",
        explanation:
          "cron daemon schedules and executes periodic tasks (cron jobs) at specified times.",
        topic: "System Calls",
        difficulty: "Medium",
      },
      {
        id: "os-60",
        question: "Which command shows system uptime?",
        options: ["uptime", "time", "runtime", "systime"],
        answer: "A",
        explanation:
          "uptime command displays how long the system has been running.",
        topic: "System Calls",
        difficulty: "Easy",
      },
      {
        id: "os-61",
        question: "What is the purpose of the init process?",
        options: [
          "Initial process with PID 1",
          "Initializes all other processes",
          "Parent of all processes",
          "All of the above",
        ],
        answer: "D",
        explanation:
          "init is the first process (PID 1) that initializes and is parent to all other processes.",
        topic: "Process Management",
        difficulty: "Medium",
      },
      {
        id: "os-62",
        question: "Which of these is a page replacement algorithm?",
        options: ["FIFO", "LRU", "Optimal", "All of the above"],
        answer: "D",
        explanation:
          "All are page replacement algorithms used in virtual memory management.",
        topic: "Virtual Memory",
        difficulty: "Medium",
      },
      {
        id: "os-63",
        question: "What is the purpose of the getpid() system call?",
        options: [
          "Get parent ID",
          "Get process ID",
          "Get user ID",
          "Get group ID",
        ],
        answer: "B",
        explanation: "getpid() returns the process ID of the calling process.",
        topic: "Process Management",
        difficulty: "Easy",
      },
      {
        id: "os-64",
        question: "Which of these is a Linux distribution?",
        options: ["Ubuntu", "Fedora", "Debian", "All of the above"],
        answer: "D",
        explanation: "All are popular Linux distributions.",
        topic: "System Calls",
        difficulty: "Easy",
      },
      {
        id: "os-65",
        question: "What is the purpose of the chown command?",
        options: [
          "Change file ownership",
          "Change file permissions",
          "Change directory",
          "Change process owner",
        ],
        answer: "A",
        explanation: "chown changes the owner and group of files/directories.",
        topic: "File System",
        difficulty: "Easy",
      },
      {
        id: "os-66",
        question: "Which of these is a shell in Unix/Linux?",
        options: ["Bash", "Zsh", "Ksh", "All of the above"],
        answer: "D",
        explanation: "All are Unix/Linux shells (command line interpreters).",
        topic: "System Calls",
        difficulty: "Easy",
      },
      {
        id: "os-67",
        question: "What is the purpose of the fsck command?",
        options: [
          "To format disk",
          "To check and repair filesystem",
          "To fragment disk",
          "To backup filesystem",
        ],
        answer: "B",
        explanation: "fsck checks and repairs Linux filesystems.",
        topic: "File System",
        difficulty: "Medium",
      },
      {
        id: "os-68",
        question: "Which scheduling algorithm is used in traditional Unix?",
        options: [
          "Round Robin with multilevel feedback",
          "FCFS",
          "Priority-based",
          "SJF",
        ],
        answer: "A",
        explanation:
          "Traditional Unix uses Round Robin with multilevel feedback queue scheduling.",
        topic: "CPU Scheduling",
        difficulty: "Hard",
      },
      {
        id: "os-69",
        question: "What is the purpose of the syslog daemon?",
        options: [
          "To log system messages",
          "To schedule tasks",
          "To manage memory",
          "To handle network",
        ],
        answer: "A",
        explanation:
          "syslog daemon handles logging of system messages and events.",
        topic: "System Calls",
        difficulty: "Medium",
      },
      {
        id: "os-70",
        question: "Which command shows memory usage?",
        options: ["free", "top", "vmstat", "All of the above"],
        answer: "D",
        explanation:
          "All these commands show memory usage information in different formats.",
        topic: "Memory Management",
        difficulty: "Easy",
      },
      {
        id: "os-71",
        question: "What is the purpose of the tar command?",
        options: [
          "To archive files",
          "To compress files",
          "To backup files",
          "All of the above",
        ],
        answer: "D",
        explanation:
          "tar is used for archiving, compression, and backup of files and directories.",
        topic: "File System",
        difficulty: "Easy",
      },
      {
        id: "os-72",
        question: "Which of these is a process state?",
        options: ["Running", "Ready", "Blocked", "All of the above"],
        answer: "D",
        explanation: "All are standard process states in operating systems.",
        topic: "Process Management",
        difficulty: "Easy",
      },
      {
        id: "os-73",
        question: "What is the purpose of the ulimit command?",
        options: [
          "To limit resource usage",
          "To unlimit resources",
          "To list limits",
          "Both A and C",
        ],
        answer: "D",
        explanation: "ulimit sets or displays resource limits for processes.",
        topic: "Process Management",
        difficulty: "Medium",
      },
      {
        id: "os-74",
        question: "Which of these is a memory hierarchy component?",
        options: ["Cache", "RAM", "Disk", "All of the above"],
        answer: "D",
        explanation:
          "All are components of memory hierarchy from fastest to slowest.",
        topic: "Memory Management",
        difficulty: "Easy",
      },
      {
        id: "os-75",
        question: "What is the purpose of the grep command?",
        options: [
          "To search text",
          "To group files",
          "To edit text",
          "To compress files",
        ],
        answer: "A",
        explanation: "grep searches for patterns in text files.",
        topic: "System Calls",
        difficulty: "Easy",
      },
      {
        id: "os-76",
        question: "Which of these is a Windows operating system?",
        options: [
          "Windows 10",
          "Windows Server",
          "Windows XP",
          "All of the above",
        ],
        answer: "D",
        explanation: "All are versions of Windows operating system.",
        topic: "System Calls",
        difficulty: "Easy",
      },
      {
        id: "os-77",
        question: "What is the purpose of the ping command?",
        options: [
          "To test network connectivity",
          "To measure round-trip time",
          "To check host reachability",
          "All of the above",
        ],
        answer: "D",
        explanation:
          "ping tests network connectivity, measures RTT, and checks host reachability.",
        topic: "System Calls",
        difficulty: "Easy",
      },
      {
        id: "os-78",
        question: "Which of these is a file permission in Unix?",
        options: ["Read", "Write", "Execute", "All of the above"],
        answer: "D",
        explanation: "All are basic file permissions in Unix/Linux systems.",
        topic: "File System",
        difficulty: "Easy",
      },
      {
        id: "os-79",
        question: "What is the purpose of the ifconfig command?",
        options: [
          "To configure network interfaces",
          "To show network configuration",
          "To set IP addresses",
          "All of the above",
        ],
        answer: "D",
        explanation:
          "ifconfig configures and displays network interface parameters.",
        topic: "System Calls",
        difficulty: "Medium",
      },
      {
        id: "os-80",
        question: "Which of these is a Linux file system?",
        options: ["ext4", "XFS", "Btrfs", "All of the above"],
        answer: "D",
        explanation: "All are file systems used in Linux.",
        topic: "File System",
        difficulty: "Medium",
      },
      {
        id: "os-81",
        question: "What is the purpose of the shutdown command?",
        options: [
          "To shutdown system",
          "To reboot system",
          "To halt system",
          "All of the above",
        ],
        answer: "D",
        explanation: "shutdown can shutdown, reboot, or halt the system.",
        topic: "System Calls",
        difficulty: "Easy",
      },
      {
        id: "os-82",
        question: "Which of these is a system monitoring tool?",
        options: ["top", "htop", "glances", "All of the above"],
        answer: "D",
        explanation: "All are system monitoring tools for Linux/Unix.",
        topic: "System Calls",
        difficulty: "Easy",
      },
      {
        id: "os-83",
        question: "What is the purpose of the rsync command?",
        options: [
          "To synchronize files",
          "To remote copy",
          "To backup files",
          "All of the above",
        ],
        answer: "D",
        explanation:
          "rsync synchronizes files between locations, useful for remote copying and backups.",
        topic: "File System",
        difficulty: "Medium",
      },
      {
        id: "os-84",
        question: "Which of these is a process signal?",
        options: ["SIGKILL", "SIGTERM", "SIGINT", "All of the above"],
        answer: "D",
        explanation:
          "All are signals that can be sent to processes in Unix/Linux.",
        topic: "Process Management",
        difficulty: "Medium",
      },
      {
        id: "os-85",
        question: "What is the purpose of the find command?",
        options: [
          "To find files",
          "To search directories",
          "To locate commands",
          "All of the above",
        ],
        answer: "D",
        explanation:
          "find searches for files in directory hierarchy based on various criteria.",
        topic: "File System",
        difficulty: "Easy",
      },
      {
        id: "os-86",
        question: "Which of these is a compression tool?",
        options: ["gzip", "bzip2", "xz", "All of the above"],
        answer: "D",
        explanation: "All are compression tools used in Unix/Linux.",
        topic: "File System",
        difficulty: "Easy",
      },
      {
        id: "os-87",
        question: "What is the purpose of the ssh command?",
        options: [
          "Secure shell access",
          "Remote login",
          "Encrypted communication",
          "All of the above",
        ],
        answer: "D",
        explanation:
          "ssh provides secure encrypted communication for remote login and command execution.",
        topic: "System Calls",
        difficulty: "Easy",
      },
      {
        id: "os-88",
        question: "Which of these is a text editor?",
        options: ["vi", "nano", "emacs", "All of the above"],
        answer: "D",
        explanation: "All are text editors available in Unix/Linux systems.",
        topic: "System Calls",
        difficulty: "Easy",
      },
      {
        id: "os-89",
        question: "What is the purpose of the scp command?",
        options: [
          "Secure copy",
          "Remote file transfer",
          "Encrypted file copy",
          "All of the above",
        ],
        answer: "D",
        explanation:
          "scp securely copies files between hosts using SSH protocol.",
        topic: "File System",
        difficulty: "Medium",
      },
      {
        id: "os-90",
        question: "Which of these is a package manager?",
        options: ["apt", "yum", "dnf", "All of the above"],
        answer: "D",
        explanation:
          "All are package managers for different Linux distributions.",
        topic: "System Calls",
        difficulty: "Easy",
      },
      {
        id: "os-91",
        question: "What is the purpose of the cron table (crontab)?",
        options: [
          "Schedule cron jobs",
          "List scheduled tasks",
          "Edit cron jobs",
          "All of the above",
        ],
        answer: "D",
        explanation:
          "crontab contains schedule of cron jobs and is used to manage scheduled tasks.",
        topic: "System Calls",
        difficulty: "Medium",
      },
      {
        id: "os-92",
        question: "Which of these is a network troubleshooting tool?",
        options: ["netstat", "traceroute", "nslookup", "All of the above"],
        answer: "D",
        explanation: "All are network troubleshooting and diagnostic tools.",
        topic: "System Calls",
        difficulty: "Medium",
      },
      {
        id: "os-93",
        question: "What is the purpose of the iostat command?",
        options: [
          "Monitor I/O statistics",
          "Show CPU utilization",
          "Display disk usage",
          "All of the above",
        ],
        answer: "D",
        explanation:
          "iostat reports CPU statistics and input/output statistics for devices and partitions.",
        topic: "I/O System",
        difficulty: "Hard",
      },
      {
        id: "os-94",
        question: "Which of these is a Linux kernel parameter?",
        options: [
          "vm.swappiness",
          "net.ipv4.ip_forward",
          "fs.file-max",
          "All of the above",
        ],
        answer: "D",
        explanation:
          "All are Linux kernel parameters that can be tuned via sysctl.",
        topic: "System Calls",
        difficulty: "Hard",
      },
      {
        id: "os-95",
        question: "What is the purpose of the lsof command?",
        options: [
          "List open files",
          "Show network connections",
          "Display process files",
          "All of the above",
        ],
        answer: "D",
        explanation: "lsof lists information about files opened by processes.",
        topic: "File System",
        difficulty: "Medium",
      },
      {
        id: "os-96",
        question: "Which of these is a Linux boot loader?",
        options: ["GRUB", "LILO", "Syslinux", "All of the above"],
        answer: "D",
        explanation: "All are boot loaders used in Linux systems.",
        topic: "System Calls",
        difficulty: "Medium",
      },
      {
        id: "os-97",
        question: "What is the purpose of the strace command?",
        options: [
          "Trace system calls",
          "Monitor signals",
          "Debug programs",
          "All of the above",
        ],
        answer: "D",
        explanation:
          "strace traces system calls and signals for debugging purposes.",
        topic: "System Calls",
        difficulty: "Hard",
      },
      {
        id: "os-98",
        question: "Which of these is a Linux desktop environment?",
        options: ["GNOME", "KDE", "XFCE", "All of the above"],
        answer: "D",
        explanation: "All are popular Linux desktop environments.",
        topic: "System Calls",
        difficulty: "Easy",
      },
      {
        id: "os-99",
        question: "What is the purpose of the journalctl command?",
        options: [
          "View systemd logs",
          "Filter logs",
          "Monitor system logs",
          "All of the above",
        ],
        answer: "D",
        explanation:
          "journalctl queries and displays messages from systemd journal.",
        topic: "System Calls",
        difficulty: "Medium",
      },
      {
        id: "os-100",
        question: "Which of these is NOT a valid Linux directory?",
        options: ["/bin", "/system", "/etc", "/var"],
        answer: "B",
        explanation:
          "/system is not a standard Linux directory. Standard directories include /bin, /etc, /var, /usr, /home, etc.",
        topic: "File System",
        difficulty: "Easy",
      },
    ];

    return questions;
  }

// Data Structures Questions (100 questions)
function generateDSQuestions() {
  const topics = [
    "Arrays",
    "Linked Lists",
    "Stacks",
    "Queues",
    "Trees",
    "Graphs",
    "Hashing",
    "Sorting",
    "Searching",
    "Dynamic Programming",
  ];

  const questions = [
    {
      id: "ds-1",
      question: "Which data structure follows LIFO principle?",
      options: ["Queue", "Stack", "Tree", "Graph"],
      answer: "B",
      explanation: "Stack follows Last-In-First-Out (LIFO) principle.",
      topic: "Stacks",
      difficulty: "Easy",
    },
    {
      id: "ds-2",
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
      answer: "B",
      explanation:
        "Binary search has O(log n) time complexity for sorted arrays.",
      topic: "Searching",
      difficulty: "Medium",
    },
    // Add 98 more DS questions...
  ];

  return questions;
}

// Web Technology Questions (100 questions)
function generateWebQuestions() {
  const topics = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Node.js",
    "HTTP/HTTPS",
    "REST API",
    "Web Security",
    "Responsive Design",
    "Browser APIs",
  ];

  const questions = [
    {
      id: "web-1",
      question: "Which HTML5 element is used for navigation links?",
      options: ["<nav>", "<div>", "<header>", "<section>"],
      answer: "A",
      explanation: "<nav> element is used for navigation links in HTML5.",
      topic: "HTML5",
      difficulty: "Easy",
    },
    {
      id: "web-2",
      question: "What does CSS stand for?",
      options: [
        "Computer Style Sheets",
        "Creative Style System",
        "Cascading Style Sheets",
        "Colorful Style Sheets",
      ],
      answer: "C",
      explanation: "CSS stands for Cascading Style Sheets.",
      topic: "CSS3",
      difficulty: "Easy",
    },
    // Add 98 more Web Technology questions...
  ];

  return questions;
}

// Database Management System Questions (100 questions)
function generateDBMSQuestions() {
  const topics = [
    "SQL",
    "Normalization",
    "Transactions",
    "Indexing",
    "Joins",
    "ACID Properties",
    "NoSQL",
    "ER Diagrams",
    "Concurrency Control",
    "Database Security",
  ];

  const questions = [
    {
      id: "dbms-1",
      question: "Which SQL clause is used to filter records?",
      options: ["SELECT", "FROM", "WHERE", "GROUP BY"],
      answer: "C",
      explanation: "WHERE clause is used to filter records in SQL.",
      topic: "SQL",
      difficulty: "Easy",
    },
    {
      id: "dbms-2",
      question: "What does ACID stand for in database transactions?",
      options: [
        "Atomicity, Consistency, Isolation, Durability",
        "Accuracy, Consistency, Integrity, Durability",
        "Atomicity, Control, Isolation, Durability",
        "Accuracy, Control, Integrity, Durability",
      ],
      answer: "A",
      explanation:
        "ACID stands for Atomicity, Consistency, Isolation, Durability.",
      topic: "Transactions",
      difficulty: "Medium",
    },
    // Add 98 more DBMS questions...
  ];

  return questions;
}

// Computer Networks Questions (100 questions)
function generateCNQuestions() {
  const topics = [
    "OSI Model",
    "TCP/IP",
    "Network Protocols",
    "IP Addressing",
    "Routing",
    "Switching",
    "Network Security",
    "Wireless Networks",
    "Network Topologies",
    "DNS",
  ];

  const questions = [
    {
      id: "cn-1",
      question: "Which layer of OSI model handles routing?",
      options: ["Physical", "Data Link", "Network", "Transport"],
      answer: "C",
      explanation: "Network layer handles routing and forwarding.",
      topic: "OSI Model",
      difficulty: "Medium",
    },
    {
      id: "cn-2",
      question: "What is the default port for HTTP?",
      options: ["80", "443", "21", "25"],
      answer: "A",
      explanation: "HTTP uses port 80 by default.",
      topic: "Network Protocols",
      difficulty: "Easy",
    },
    // Add 98 more CN questions...
  ];

  return questions;
}

// Software Engineering Questions (100 questions)
function generateSEQuestions() {
  const topics = [
    "SDLC",
    "Agile Methodology",
    "Testing",
    "UML",
    "Design Patterns",
    "Software Metrics",
    "Project Management",
    "Requirement Engineering",
    "Software Maintenance",
    "Quality Assurance",
  ];

  const questions = [
    {
      id: "se-1",
      question: "Which model is also known as linear sequential model?",
      options: ["Waterfall", "Agile", "Spiral", "V-Model"],
      answer: "A",
      explanation: "Waterfall model is linear sequential model.",
      topic: "SDLC",
      difficulty: "Easy",
    },
    {
      id: "se-2",
      question: "What does SDLC stand for?",
      options: [
        "Software Design Life Cycle",
        "System Development Life Cycle",
        "Software Development Life Cycle",
        "System Design Life Cycle",
      ],
      answer: "C",
      explanation: "SDLC stands for Software Development Life Cycle.",
      topic: "SDLC",
      difficulty: "Easy",
    },
    // Add 98 more SE questions...
  ];

  return questions;
}

// Programming in C Questions (100 questions)
function generateCQuestions() {
  const topics = [
    "Basics",
    "Pointers",
    "Arrays",
    "Functions",
    "Structures",
    "File Handling",
    "Dynamic Memory",
    "Preprocessor",
    "Storage Classes",
    "Error Handling",
  ];

  const questions = [
    {
      id: "c-1",
      question: "Which operator is used to get memory address of a variable?",
      options: ["*", "&", "#", "@"],
      answer: "B",
      explanation: "& operator gives memory address of a variable.",
      topic: "Pointers",
      difficulty: "Easy",
    },
    {
      id: "c-2",
      question: "What is the size of int in 32-bit system?",
      options: ["2 bytes", "4 bytes", "8 bytes", "Depends on compiler"],
      answer: "B",
      explanation: "int is typically 4 bytes in 32-bit systems.",
      topic: "Basics",
      difficulty: "Medium",
    },
    // Add 98 more C questions...
  ];

  return questions;
}

// Object Oriented Programming Questions (100 questions)
function generateOOPQuestions() {
  const topics = [
    "Classes & Objects",
    "Inheritance",
    "Polymorphism",
    "Encapsulation",
    "Abstraction",
    "Constructors",
    "Interfaces",
    "Exception Handling",
    "Templates",
    "Design Patterns",
  ];

  const questions = [
    {
      id: "oop-1",
      question: "Which OOP concept allows hiding implementation details?",
      options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
      answer: "D",
      explanation:
        "Abstraction hides implementation details and shows only functionality.",
      topic: "Abstraction",
      difficulty: "Medium",
    },
    {
      id: "oop-2",
      question: "Which type of inheritance is not supported in Java?",
      options: ["Single", "Multiple", "Multilevel", "Hierarchical"],
      answer: "B",
      explanation:
        "Java does not support multiple inheritance through classes.",
      topic: "Inheritance",
      difficulty: "Hard",
    },
    // Add 98 more OOP questions...
  ];

  return questions;
}

// Computer Architecture Questions (100 questions)
function generateArchitectureQuestions() {
  const topics = [
    "CPU Organization",
    "Memory Hierarchy",
    "I/O Organization",
    "Instruction Sets",
    "Pipelining",
    "Cache Memory",
    "Assembly Language",
    "Number Systems",
    "Boolean Algebra",
    "Microprocessors",
  ];

  const questions = [
    {
      id: "arch-1",
      question: "Which register holds memory address of next instruction?",
      options: [
        "Accumulator",
        "Program Counter",
        "Instruction Register",
        "Memory Address Register",
      ],
      answer: "B",
      explanation:
        "Program Counter holds address of next instruction to execute.",
      topic: "CPU Organization",
      difficulty: "Easy",
    },
    {
      id: "arch-2",
      question: "What is the purpose of ALU?",
      options: [
        "Store data",
        "Perform arithmetic operations",
        "Control operations",
        "Manage memory",
      ],
      answer: "B",
      explanation: "ALU performs arithmetic and logical operations.",
      topic: "CPU Organization",
      difficulty: "Easy",
    },
    // Add 98 more Architecture questions...
  ];

  return questions;
}

// Cybersecurity Questions (100 questions)
function generateCyberSecurityQuestions() {
  const topics = [
    "Cryptography",
    "Network Security",
    "Malware",
    "Firewalls",
    "Authentication",
    "Authorization",
    "Cyber Laws",
    "Ethical Hacking",
    "Digital Forensics",
    "Risk Management",
  ];

  const questions = [
    {
      id: "cyber-1",
      question: "Which encryption algorithm is asymmetric?",
      options: ["AES", "DES", "RSA", "RC4"],
      answer: "C",
      explanation: "RSA is asymmetric (public-key) encryption algorithm.",
      topic: "Cryptography",
      difficulty: "Medium",
    },
    {
      id: "cyber-2",
      question: "What does SSL stand for?",
      options: [
        "Secure Socket Layer",
        "System Security Layer",
        "Software Security Layer",
        "Server Security Layer",
      ],
      answer: "A",
      explanation: "SSL stands for Secure Socket Layer.",
      topic: "Network Security",
      difficulty: "Easy",
    },
    // Add 98 more Cyber Security questions...
  ];

  return questions;
}

// Current Affairs & IT Trends Questions (100 questions)
function generateCurrentAffairsQuestions() {
  const topics = [
    "IT Policies",
    "Digital India",
    "E-Governance",
    "Latest Technologies",
    "IT Companies",
    "Cyber Laws",
    "Startup Ecosystem",
    "Digital Payments",
    "Cloud Computing",
    "AI & ML",
  ];

  const questions = [
    {
      id: "ca-1",
      question:
        "Which program aims to transform India into a digitally empowered society?",
      options: [
        "Make in India",
        "Digital India",
        "Startup India",
        "Skill India",
      ],
      answer: "B",
      explanation:
        "Digital India aims to transform India into digitally empowered society.",
      topic: "Digital India",
      difficulty: "Easy",
    },
    {
      id: "ca-2",
      question: "Which ministry launched DigiLocker?",
      options: [
        "Ministry of Electronics & IT",
        "Ministry of Education",
        "Ministry of Finance",
        "Ministry of Home Affairs",
      ],
      answer: "A",
      explanation: "DigiLocker was launched by Ministry of Electronics & IT.",
      topic: "E-Governance",
      difficulty: "Medium",
    },
    // Add 98 more Current Affairs questions...
  ];

  return questions;
}

export const subjects = {
  "operating-system": {
    id: "operating-system",
    name: "Operating System",
    icon: "fas fa-desktop",
    iconColor: "#3a0ca3",
    details: "Process, Memory, File System",
    questions: generateOSQuestions(),
  },
  "data-structures": {
    id: "data-structures",
    name: "Data Structures",
    icon: "fas fa-sitemap",
    iconColor: "#7209b7",
    details: "Array, Tree, Graph, Algorithms",
    questions: generateDSQuestions(),
  },
  "web-technology": {
    id: "web-technology",
    name: "Web Technology",
    icon: "fas fa-globe",
    iconColor: "#8338ec",
    details: "HTML, CSS, JS, React, Node",
    questions: generateWebQuestions(),
  },
  dbms: {
    id: "dbms",
    name: "Database Management",
    icon: "fas fa-database",
    iconColor: "#4cc9f0",
    details: "SQL, Normalization, Transactions",
    questions: generateDBMSQuestions(),
  },
  "computer-networks": {
    id: "computer-networks",
    name: "Computer Networks",
    icon: "fas fa-network-wired",
    iconColor: "#4361ee",
    details: "OSI, TCP/IP, Network Security",
    questions: generateCNQuestions(),
  },
  "software-engineering": {
    id: "software-engineering",
    name: "Software Engineering",
    icon: "fas fa-code",
    iconColor: "#f72585",
    details: "SDLC, Agile, Testing, UML",
    questions: generateSEQuestions(),
  },
  "c-programming": {
    id: "c-programming",
    name: "C Programming",
    icon: "fas fa-c",
    iconColor: "#4895ef",
    details: "Pointers, Functions, File Handling",
    questions: generateCQuestions(),
  },
  oop: {
    id: "oop",
    name: "Object Oriented Programming",
    icon: "fas fa-object-group",
    iconColor: "#560bad",
    details: "Java, Inheritance, Polymorphism",
    questions: generateOOPQuestions(),
  },
  "computer-architecture": {
    id: "computer-architecture",
    name: "Computer Architecture",
    icon: "fas fa-microchip",
    iconColor: "#3f37c9",
    details: "CPU, Memory, Assembly, Pipelining",
    questions: generateArchitectureQuestions(),
  },
  cybersecurity: {
    id: "cybersecurity",
    name: "Cyber Security",
    icon: "fas fa-shield-alt",
    iconColor: "#06d6a0",
    details: "Cryptography, Network Security, Laws",
    questions: generateCyberSecurityQuestions(),
  },
  "current-affairs": {
    id: "current-affairs",
    name: "Current Affairs & IT Trends",
    icon: "fas fa-newspaper",
    iconColor: "#ff9e00",
    details: "Digital India, IT Policies, Trends",
    questions: generateCurrentAffairsQuestions(),
  },
};
