import type { Article } from './articles';

const SERIES_ID = 'devops-end-to-end';

export const devopsArticles: Article[] = [
  {
    id: 'devops-1',
    seriesId: SERIES_ID,
    seriesIndex: 1,
    slug: 'what-is-devops',
    title: 'What is DevOps? The Complete Beginner\'s Guide',
    excerpt: 'Understand what DevOps actually means, why companies need it, and how it connects software development with operations.',
    category: 'DevOps',
    tags: ['DevOps', 'Beginner', 'CI/CD', 'Automation'],
    readingTime: 8,
    publishedAt: '2026-09-01',
    featured: true,
    trending: true,
    coverGradient: 'from-blue-500 via-indigo-500 to-purple-600',
    icon: '🚀',
    seoTitle: 'What is DevOps? Complete Beginner Guide & Lifecycle Explained',
    seoDescription: 'Learn what DevOps is, why it was introduced, the difference between Dev and Ops, and how automation and CI/CD solve real-world deployment problems.',
    keywords: ['what is devops', 'devops for beginners', 'dev vs ops', 'devops lifecycle', 'what is ci cd'],
    content: `
## 1. What will we learn?
In this article, we will explore the fundamental concepts of DevOps. We will understand how software is developed, how it is deployed, the problems that existed before DevOps, and how DevOps solves them. Finally, we'll outline the exciting project we will build throughout this series!

## 2. Why do we need this?
Before DevOps, software development was divided into two isolated teams: 
- **Developers (Dev)**: Wrote the code and wanted to push new features fast.
- **Operations (Ops)**: Managed the servers and wanted stability, resisting fast changes.

Because they didn't communicate well, deploying new software often caused servers to crash. Developers would say, *"It works on my machine!"* while Operations would say, *"It's broken on the server!"* We needed a way to bridge this gap.

## 3. What is it?
**DevOps** (Development + Operations) is not a single tool or a programming language. It is a **culture and a set of practices** that brings the Development and Operations teams together. 

The goal of DevOps is to automate the process of building, testing, and deploying software so it can be released rapidly, safely, and consistently.

## 4. Simple analogy
Imagine a restaurant kitchen.
- The **Chefs (Developers)** are creating new recipes and cooking food.
- The **Waiters (Operations)** are delivering the food to the customers (the servers) and making sure the dining room runs smoothly.

Without DevOps, the chefs just throw the food over a wall to the waiters without telling them what it is, causing chaos. **DevOps** is like introducing a smooth conveyor belt (automation) and a clear communication system so the food reaches the customer hot, fast, and without mistakes.

## 5. How it works
The DevOps lifecycle is continuous and usually looks like an infinity loop (∞):
- **Plan**: Decide what to build.
- **Code**: Write the software.
- **Build**: Compile the code into a runnable format.
- **Test**: Automatically check for bugs.
- **Release/Deploy**: Send the code to the servers (CI/CD).
- **Operate/Monitor**: Make sure the application is healthy.

**CI/CD** stands for Continuous Integration (merging code frequently) and Continuous Deployment (automatically pushing code to servers).

## 6. Step-by-step practical example
We don't have code to run just yet, but let's visualize a modern workflow:
1. A developer writes code on their laptop.
2. They upload it to GitHub.
3. An automated system (like GitHub Actions) catches the code, tests it, and packages it.
4. The system automatically places the packaged code onto a live AWS server.

## 7. What just happened?
In the workflow above, nobody had to manually log into a server, copy files, or manually test the application. The entire pipeline was automated. This is the magic of DevOps.

## 8. Common beginner mistakes
- **Thinking DevOps is just a tool**: Many beginners think learning Jenkins or Docker makes them a DevOps engineer. DevOps is primarily about the *culture* of automation and communication; tools just help achieve it.
- **Trying to automate everything on day one**: Automation should happen gradually.

## 9. Interview questions
**Q: What is the main goal of DevOps?**
A: To shorten the software development lifecycle and provide continuous, high-quality delivery by bridging the gap between Development and Operations.

**Q: Explain "It works on my machine" syndrome.**
A: A situation where code works on a developer's local laptop but fails in production because the server environment (operating system, versions, configurations) is different.

## 10. What we learned
We learned that DevOps is a cultural shift that uses automation (CI/CD) to safely and quickly deliver software. It solves the historical conflict between developers who want speed and operations engineers who want stability.

## 11. What's next?
To automate servers, we need to know how to talk to them. In the next article, [Article 2 — Linux Basics for DevOps](/article/linux-basics-devops), we will learn the essential terminal commands you need to control a server!
    `
  },
  {
    id: 'devops-2',
    seriesId: SERIES_ID,
    seriesIndex: 2,
    slug: 'linux-basics-devops',
    title: 'Linux Basics for DevOps: The Essential Commands',
    excerpt: 'Learn the foundational Linux terminal commands every DevOps engineer uses on a daily basis.',
    category: 'DevOps',
    tags: ['Linux', 'Terminal', 'DevOps', 'Beginner'],
    readingTime: 10,
    publishedAt: '2026-09-02',
    featured: false,
    trending: false,
    coverGradient: 'from-gray-700 via-gray-900 to-black',
    icon: '🐧',
    seoTitle: 'Linux Basics for DevOps: Essential Commands Guide',
    seoDescription: 'Master the essential Linux commands for DevOps. Learn pwd, ls, cd, grep, chmod, and SSH to navigate and manage servers with practical examples.',
    keywords: ['linux for devops', 'basic linux commands', 'devops linux tutorial', 'learn linux terminal', 'chmod and ssh basics'],
    content: `
## 1. What will we learn?
We will learn what Linux is and cover the most important terminal commands you need to navigate, manage files, and control processes on a server.

## 2. Why do we need this?
Almost all internet servers, cloud infrastructure (like AWS), and containers (like Docker) run on **Linux**. Because servers usually don't have a mouse or graphical interface (GUI), you must know how to talk to them using text commands via a terminal.

## 3. What is it?
**Linux** is an open-source operating system, just like Windows or macOS, but it is highly optimized for servers. The **Terminal** is a text-based interface where you type commands to tell Linux what to do.

## 4. Simple analogy
Imagine a GUI (like Windows) as driving an automatic car with a steering wheel and pedals. Using the Linux Terminal is like opening the hood and directly adjusting the engine with tools. It's harder to learn, but gives you absolute control.

## 5. How it works
When you open a terminal, you are placed in a directory (folder). You type a command, press Enter, and a program called a "shell" (like Bash) executes it and prints the output.

## 6. Step-by-step practical example

Here are the essential commands you will use every day:

**Where am I?**
\`\`\`bash
pwd
\`\`\`
*Output:* \`/home/ubuntu\` (Prints Working Directory)

**What is inside this folder?**
\`\`\`bash
ls
\`\`\`
*(Lists files and directories)*

**Change directory (Go to another folder)**
\`\`\`bash
cd /var/www/html
\`\`\`

**Create a new folder and an empty file**
\`\`\`bash
mkdir my_project
touch my_project/index.html
\`\`\`

**Read a file's content**
\`\`\`bash
cat my_project/index.html
\`\`\`

**Search for a word inside files**
\`\`\`bash
grep "error" server.log
\`\`\`

**Permissions (chmod)**
Servers are secure. Sometimes you need to make a script executable:
\`\`\`bash
chmod +x start_app.sh
\`\`\`

**Superuser DO (sudo)**
If you are denied permission to do something, you ask the "admin":
\`\`\`bash
sudo apt update
\`\`\`

**Connecting to another server safely (SSH)**
\`\`\`bash
ssh user@192.168.1.50
\`\`\`

## 7. What just happened?
You used standard text commands to navigate a computer's file system, create files, search logs, and elevate your permissions. This is exactly what you will do when you deploy applications to AWS later!

## 8. Common beginner mistakes
- **Forgetting \`sudo\`**: If you get a "Permission denied" error, you likely need to put \`sudo\` in front of your command.
- **Deleting the wrong thing**: \`rm -rf /folder\` deletes a folder forever. There is no recycling bin in the terminal!

## 9. Interview questions
**Q: What does the \`grep\` command do?**
A: It searches for specific text patterns within a file or output.

**Q: What is the difference between \`cp\` and \`mv\`?**
A: \`cp\` copies a file to a new location, while \`mv\` moves it (or renames it).

## 10. What we learned
We learned that the terminal is our primary tool for interacting with servers. We covered basic navigation (\`cd\`, \`pwd\`, \`ls\`), file manipulation (\`mkdir\`, \`touch\`), and security (\`sudo\`, \`chmod\`, \`ssh\`).

## 11. What's next?
Now that we know how to use the terminal, we need to learn how developers store and track their code. In [Article 3 — Git & GitHub](/article/git-github-devops), we will explore version control!
    `
  },
  {
    id: 'devops-3',
    seriesId: SERIES_ID,
    seriesIndex: 3,
    slug: 'git-github-devops',
    title: 'Git & GitHub Explained: Version Control for Beginners',
    excerpt: 'Learn why developers use Git and GitHub to track code changes and collaborate, including all the essential Git commands.',
    category: 'DevOps',
    tags: ['Git', 'GitHub', 'Version Control', 'Beginner'],
    readingTime: 12,
    publishedAt: '2026-09-03',
    featured: false,
    trending: false,
    coverGradient: 'from-gray-800 via-slate-800 to-black',
    icon: '🐙',
    seoTitle: 'Git & GitHub Tutorial for DevOps Beginners',
    seoDescription: 'Learn Git and GitHub basics for DevOps. Master git init, clone, commit, push, pull, and branching. Understand version control with practical examples.',
    keywords: ['git tutorial', 'github for beginners', 'git commands', 'version control basics', 'git merge and branch'],
    content: `
## 1. What will we learn?
We will learn what version control is, why it is the backbone of modern software development, the difference between Git and GitHub, and how to track and push your code using essential Git commands.

## 2. Why do we need this?
Imagine you are writing an essay. You save it as \`essay_v1.docx\`. Then you make changes and save it as \`essay_final.docx\`. Then \`essay_final_REALLY_FINAL.docx\`. It becomes a mess.

Now imagine 10 developers trying to edit the exact same code file at the exact same time. Without a tracking system, they would constantly overwrite each other's work and lose progress.

## 3. What is it?
- **Git**: A software tool installed on your computer that acts as a time machine for your files. It tracks every change made to your code.
- **GitHub**: A website that hosts your Git tracking history in the cloud, allowing multiple developers to collaborate and share their code.

## 4. Simple analogy
**Git** is like the "Save" feature in a video game that remembers exactly what you did at a specific checkpoint.
**GitHub** is like "Cloud Sync" for those save files, letting your friends download your save file and play from where you left off.

## 5. How it works
Your code goes through a specific journey:
1. **Working Directory**: The files on your computer.
2. **Staging Area**: Files you have marked to be saved.
3. **Commit**: A permanent "snapshot" or save-point of the staged files.
4. **Push**: Uploading that snapshot to GitHub.

## 6. Step-by-step practical example

**1. Create a new Git repository (folder tracker)**
\`\`\`bash
git init
\`\`\`

**2. Download an existing project from GitHub**
\`\`\`bash
git clone https://github.com/user/project.git
\`\`\`

**3. Check what files have changed**
\`\`\`bash
git status
\`\`\`

**4. Add changes to the staging area**
\`\`\`bash
git add .
\`\`\`
*(The \`.\` means "add everything")*

**5. Save the snapshot with a message**
\`\`\`bash
git commit -m "added a new button to the homepage"
\`\`\`

**6. Upload the snapshot to GitHub**
\`\`\`bash
git push origin main
\`\`\`

**7. Download the latest changes from GitHub (if someone else pushed code)**
\`\`\`bash
git pull
\`\`\`

**8. Create a safe copy (Branch) to experiment on**
\`\`\`bash
git checkout -b new-feature
\`\`\`

## 7. What just happened?
Developer → Writes Code → \`git add\` → \`git commit\` → \`git push\` → GitHub.
This is the universal workflow of almost every developer in the world. By putting the code on GitHub, our DevOps CI/CD pipeline (which we will build later) can automatically detect new code and deploy it!

## 8. Common beginner mistakes
- **Committing secrets**: Never commit a file containing passwords, API keys, or AWS keys! They will be public on GitHub. Always use a \`.gitignore\` file.
- **Forgetting to pull before pushing**: If your team pushed code while you were working, you must \`git pull\` to merge their work before you can \`git push\`.

## 9. Interview questions
**Q: What is the difference between Git and GitHub?**
A: Git is the local version control software; GitHub is a cloud hosting service for Git repositories.

**Q: What is a Pull Request (PR)?**
A: A formal request to merge your branch (your changes) into the main branch, allowing team members to review the code before it becomes official.

## 10. What we learned
We learned that Git tracks changes to files over time, and GitHub acts as a central hub for collaboration. We learned how to move code from our computer to the cloud using \`add\`, \`commit\`, and \`push\`.

## 11. What's next?
Before we put our code on the internet, we need to understand how the internet actually works. In [Article 4 — Networking Basics for DevOps](/article/networking-basics-devops), we will decode IPs, Ports, and DNS!
    `
  },
  {
    id: 'devops-4',
    seriesId: SERIES_ID,
    seriesIndex: 4,
    slug: 'networking-basics-devops',
    title: 'Networking Basics for DevOps: IPs, Ports & DNS',
    excerpt: 'Demystify how computers talk to each other over the internet. Learn about IP addresses, Ports, DNS, and Firewalls.',
    category: 'DevOps',
    tags: ['Networking', 'DNS', 'DevOps', 'Beginner'],
    readingTime: 9,
    publishedAt: '2026-09-04',
    featured: false,
    trending: false,
    coverGradient: 'from-green-500 via-emerald-600 to-teal-700',
    icon: '🌐',
    seoTitle: 'Networking Basics for DevOps: IP, Ports & DNS Explained',
    seoDescription: 'Learn essential networking concepts for DevOps. Understand Public vs Private IPs, Ports, DNS, HTTP/HTTPS, and Firewalls with simple analogies.',
    keywords: ['devops networking', 'ip address explained', 'dns basics', 'what is a port', 'public vs private ip'],
    content: `
## 1. What will we learn?
We will learn the foundational networking concepts that allow applications to communicate across the internet: IP addresses, Ports, DNS, HTTP, and Firewalls.

## 2. Why do we need this?
When you deploy an application, users need a way to reach it. If a user complains "the website is down", you need to know if the application crashed, or if a firewall blocked the port, or if the DNS is pointing to the wrong IP. Networking knowledge is mandatory for troubleshooting.

## 3. What is it?
- **IP Address**: A unique string of numbers that identifies a computer on the internet.
- **Port**: A specific "door" on that computer dedicated to a specific service.
- **DNS**: The phonebook of the internet that translates human names (google.com) into IPs.

## 4. Simple analogy
Think of a computer as a giant **Apartment Building**:
- The **IP Address** is the building's street address (e.g., 123 Main St).
- The **Port** is the specific apartment number inside the building (e.g., Room 80 for the Web Server).
- **DNS** is the contacts app in your phone. You don't memorize your friend's phone number (IP address); you just search their name (google.com) and the phone dials the number.
- The **Firewall** is the security guard at the door who only allows authorized people into specific rooms.

## 5. How it works
When you type \`https://mydeenblog.vercel.app\` in your browser:
1. Your computer asks a **DNS** server: *"What is the IP address for this domain?"*
2. DNS answers: *"It is 76.76.21.21"*
3. Your computer travels to that **IP Address**.
4. It knocks on **Port 443** (the standard port for HTTPS secure traffic).
5. The **Firewall** allows it in.
6. The server replies with the website's HTML!

## 6. Step-by-step practical example

**Public vs Private IP**
- **Public IP**: Reachable by anyone in the world (e.g., Google's servers).
- **Private IP**: Reachable only within your local network (e.g., your home Wi-Fi assigns your laptop an IP like \`192.168.1.5\`).

**Important Ports to memorize:**
- **Port 80**: HTTP (unencrypted web traffic)
- **Port 443**: HTTPS (encrypted, secure web traffic)
- **Port 22**: SSH (securely logging into a Linux server via terminal)
- **Port 3306**: MySQL database
- **Port 5432**: PostgreSQL database

## 7. What just happened?
By understanding these components, you now understand the journey of web traffic. When we deploy our DevOps project later, we will open Port 80 on our AWS Firewall so the world can see our application!

## 8. Common beginner mistakes
- **Opening Port 22 to the whole world**: Port 22 (SSH) gives terminal access to your server. If you leave it completely open in your AWS firewall without strict security, bots will constantly try to hack into your server.
- **Confusing Public and Private IPs**: Trying to access a private database IP from a public internet connection will never work.

## 9. Interview questions
**Q: What is DNS?**
A: Domain Name System. It resolves human-readable domain names (like github.com) into machine-readable IP addresses.

**Q: If a user cannot access your web application, but they can ping the server's IP, what might be the issue?**
A: The web server might be down, or a firewall is blocking Port 80 / Port 443.

## 10. What we learned
We learned that computers communicate using IP addresses and Ports, shielded by Firewalls. DNS makes the internet usable for humans by replacing numbers with names. 

## 11. What's next?
Now that we understand Linux and Networking, we are ready to rent a server on the internet! In [Article 5 — AWS Basics](/article/aws-basics-devops), we will explore Cloud Computing!
    `
  }
];
