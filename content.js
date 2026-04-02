window.STUDY_DATA = {
  modes: [
    {
      id: "silly",
      label: "Silly Mode",
      description: "Explain it like the topic is brand new and the scary words need shrinking."
    },
    {
      id: "plain",
      label: "Plain English",
      description: "Strip away the jargon and focus on the main idea."
    },
    {
      id: "radiology",
      label: "Radiology Lens",
      description: "Relate the topic to RIS, PACS, scheduling, imaging, and reporting."
    },
    {
      id: "exam",
      label: "Exam Keywords",
      description: "Use wording close to the course language for revision and written answers."
    }
  ],
  units: [
    {
      id: "unit-1",
      label: "Unit 1",
      chapter: "Chapter 1",
      title: "Information Systems in Business Today",
      objective: "Understand why information systems matter and what makes up a complete information system.",
      quickWin: "If the lecture says 'business objectives,' think about how an imaging department tries to reduce waiting time, avoid repeat exams, and move reports faster.",
      examFocus: "Know the difference between information technology and information systems, the input-processing-output-feedback cycle, and the six strategic business objectives.",
      concepts: [
        {
          term: "Information system vs. information technology",
          memoryHook: "IT is the toolset. An information system is the toolset plus people, data, and workflow.",
          silly: "IT is the gadgets. The information system is the whole team using the gadgets, rules, and info together.",
          plain: "Buying software or hardware does not solve a problem by itself. The real system includes the people using it, the data being entered, the rules being followed, and the steps that turn data into useful information.",
          radiology: "A CT scanner is technology. The full information system is the scanner, patient order, RIS worklist, PACS archive, radiologist report, and the staff rules that keep the process moving safely.",
          exam: "Information technology refers to hardware and software. An information system is a set of interrelated components that collect, process, store, and distribute information to support coordination, control, analysis, and decision making."
        },
        {
          term: "Why organizations invest in information systems",
          memoryHook: "Most exam answers fit one of six goals: efficiency, new services, relationships, decisions, advantage, survival.",
          silly: "Places buy systems because they want work to be faster, easier, smarter, and less messy.",
          plain: "Organizations use information systems to work faster, make fewer mistakes, launch new services, understand customers, make better decisions, stay ahead of competitors, and keep up with industry expectations.",
          radiology: "A department might use dashboards to cut report turnaround time, online booking to improve patient convenience, and analytics to balance staffing across MRI, CT, and X-ray rooms.",
          exam: "The strategic business objectives are operational excellence, new products/services/business models, customer and supplier intimacy, improved decision making, competitive advantage, and survival."
        },
        {
          term: "Input, processing, output, and feedback",
          memoryHook: "Data goes in, work happens, useful result comes out, then someone checks and improves it.",
          silly: "Stuff goes in, the system does work, useful stuff comes out, then someone checks if it was good.",
          plain: "An information system starts by receiving raw data, changes that data into something meaningful, produces a result, and then uses feedback to correct or improve the process.",
          radiology: "Input can be the patient's order and demographics. Processing can be scheduling, verification, and image indexing. Output can be the completed study and report. Feedback can be quality review or a supervisor noticing delays and adjusting workflow.",
          exam: "The basic activities in an information system are input, processing, output, and feedback. Feedback returns output to appropriate members of the organization to help evaluate or correct the input stage."
        },
        {
          term: "The three dimensions of information systems",
          memoryHook: "Every system has an organization side, a management side, and a technology side.",
          silly: "To understand a system, look at the people, the bosses, and the machines.",
          plain: "You cannot understand a system only by looking at software. You also need to see the people and structure involved, the decisions managers make, and the hardware, software, and data underneath it.",
          radiology: "Organization means roles such as technologists, radiologists, front desk staff, and billing. Management means decisions about staffing, scheduling, and policy. Technology means modalities, servers, networks, software, and databases.",
          exam: "Information systems have organizational, management, and technology dimensions. Complementary assets such as training, management behavior, and supportive culture increase system value."
        }
      ],
      scenarios: [
        {
          title: "Imaging order journey",
          summary: "A patient order shows how one system links many steps.",
          steps: [
            "The physician enters the order and patient details.",
            "Scheduling assigns a time slot and updates the worklist.",
            "The technologist completes the exam and sends images to PACS.",
            "The radiologist reads the study and the report returns to the EHR."
          ],
          takeaway: "The exam is not just 'software.' It is a coordinated information system moving data across people and departments."
        },
        {
          title: "Better decisions from real-time data",
          summary: "Information reduces guesswork.",
          steps: [
            "A dashboard shows wait times rising in ultrasound.",
            "A supervisor shifts staff before delays become severe.",
            "Patients are seen faster and overtime costs fall."
          ],
          takeaway: "This is improved decision making, one of the main reasons systems are valuable."
        }
      ],
      pitfalls: [
        "Do not say information system and information technology mean the same thing.",
        "Do not confuse raw data with useful information.",
        "Do not forget the human and management sides of a system."
      ],
      quiz: [
        {
          id: "u1-q1",
          prompt: "Which choice is the best example of feedback in an imaging workflow?",
          options: [
            "The physician enters a CT order.",
            "The system stores the images in PACS.",
            "A supervisor reviews dashboard delays and changes staffing.",
            "The patient receives an appointment text message."
          ],
          answer: 2,
          explain: "Feedback is information returned to help evaluate or correct the process. Staffing changes based on dashboard results are feedback."
        },
        {
          id: "u1-q2",
          prompt: "Which statement best distinguishes IT from an information system?",
          options: [
            "IT includes people and procedures, but information systems do not.",
            "IT is only data, while information systems are only software.",
            "IT refers to hardware and software, while information systems include people, processes, and data as well.",
            "They are two words for the same thing."
          ],
          answer: 2,
          explain: "The course draws a clear line: IT is the technology; the information system is the wider working arrangement."
        },
        {
          id: "u1-q3",
          prompt: "Reducing report turnaround time through better workflow is mainly an example of:",
          options: [
            "Operational excellence",
            "Data redundancy",
            "Referential integrity",
            "Object-oriented development"
          ],
          answer: 0,
          explain: "Operational excellence means improving efficiency, speed, accuracy, and performance."
        }
      ]
    },
    {
      id: "unit-2",
      label: "Unit 2",
      chapter: "Chapters 2 and 3",
      title: "Business Processes, Enterprise Systems, and Competition",
      objective: "Learn how processes flow through an organization, how different systems support different managers, and how systems create strategic value.",
      quickWin: "Translate 'order fulfillment' into 'exam fulfillment': booking, preparation, imaging, reporting, billing, and follow-up.",
      examFocus: "Know business processes, TPS/MIS/DSS/ESS, enterprise applications, collaboration tools, and Porter's competitive forces with IT strategies.",
      concepts: [
        {
          term: "Business processes",
          memoryHook: "A process is a repeatable chain of tasks, not one isolated action.",
          silly: "A process is a recipe. You do step 1, step 2, step 3, and the job gets done.",
          plain: "A business process is a connected set of steps that moves work from start to finish. Systems improve value when they help the full flow, not just one small task.",
          radiology: "An imaging process might start with an order, then booking, patient preparation, scanning, image transfer, reporting, billing, and result delivery.",
          exam: "Business processes are logically related tasks for accomplishing specific business outcomes. They can be tied to functional areas or be cross-functional."
        },
        {
          term: "TPS, MIS, DSS, and ESS",
          memoryHook: "TPS runs daily work, MIS summarizes it, DSS explores choices, ESS gives leaders a high-level view.",
          silly: "TPS does the busy little jobs, MIS makes report cards, DSS helps with hard choices, and ESS gives the boss the bird's-eye view.",
          plain: "Different systems serve different levels of management. Operational staff need transaction systems. Middle managers need reports. Analysts need tools to compare options. Executives need concise dashboards.",
          radiology: "A registration and scheduling system is TPS. Monthly modality usage reports are MIS. A tool that tests what happens if one MRI room closes is DSS. A hospital imaging dashboard for directors is ESS.",
          exam: "Transaction Processing Systems handle routine transactions. Management Information Systems summarize TPS data. Decision Support Systems support non-routine analysis. Executive Support Systems provide senior managers with easy access to internal and external information."
        },
        {
          term: "Enterprise applications",
          memoryHook: "Enterprise systems connect departments that usually act separately.",
          silly: "Enterprise apps are giant glue. They help departments stop acting like strangers.",
          plain: "Large systems link major parts of the organization so data does not stay trapped in one department. This improves coordination and reduces duplication.",
          radiology: "ERP can connect finance, HR, and procurement. CRM can support patient communication. Supply chain systems help contrast media, disposable items, and equipment servicing. Knowledge systems capture procedures and best practices.",
          exam: "Enterprise applications include ERP, SCM, CRM, and knowledge management systems. They span functional areas and improve organizational performance by integrating processes."
        },
        {
          term: "Competition, collaboration, and strategy",
          memoryHook: "Systems are not only operational tools; they can also shape how an organization competes.",
          silly: "Systems can help a place be cheaper, better, more special, or friendlier than the next place.",
          plain: "Information systems can help an organization work cheaper, offer something different, serve a niche better, or build stronger relationships with customers and suppliers.",
          radiology: "A private imaging center can differentiate itself with online booking, patient reminders, fast report delivery, and image access for referring physicians.",
          exam: "Porter's model highlights traditional competitors, new entrants, substitutes, customers, and suppliers. IT strategies include low-cost leadership, product differentiation, focus on market niche, and strengthening customer and supplier intimacy."
        }
      ],
      scenarios: [
        {
          title: "One patient, many system layers",
          summary: "The same exam creates data for several management levels.",
          steps: [
            "TPS records the appointment, check-in, and payment.",
            "MIS converts those transactions into weekly volume and no-show reports.",
            "DSS helps managers test how staffing changes may reduce delays.",
            "ESS shows imaging performance trends to senior leadership."
          ],
          takeaway: "The systems are related, but they serve different questions and audiences."
        },
        {
          title: "Collaboration in practice",
          summary: "Good systems help teams share knowledge, not just store data.",
          steps: [
            "Technologists document contrast reaction steps in a shared knowledge base.",
            "Staff use messaging and intranet tools to spread updates quickly.",
            "Managers keep procedures consistent across shifts and sites."
          ],
          takeaway: "Collaboration tools matter because healthcare work is team-based and time-sensitive."
        }
      ],
      pitfalls: [
        "Do not mix up MIS and DSS. MIS summarizes routine results; DSS helps with analysis and choices.",
        "Do not describe a process as one single step.",
        "Do not mention Porter's forces without linking them to a usable IT strategy."
      ],
      quiz: [
        {
          id: "u2-q1",
          prompt: "Which system is best matched with capturing daily appointments, patient check-ins, and payments?",
          options: [
            "TPS",
            "ESS",
            "DSS",
            "Knowledge management system"
          ],
          answer: 0,
          explain: "Routine day-to-day transactions belong to Transaction Processing Systems."
        },
        {
          id: "u2-q2",
          prompt: "A manager wants a monthly report showing MRI volume by day and by scanner. This is mainly:",
          options: [
            "CRM",
            "MIS",
            "ESS",
            "Object-oriented development"
          ],
          answer: 1,
          explain: "MIS turns transactional data into structured reports for management."
        },
        {
          id: "u2-q3",
          prompt: "An imaging center uses online booking and rapid report delivery to stand out from competitors. Which strategy fits best?",
          options: [
            "Product differentiation",
            "Data redundancy",
            "Parallel conversion",
            "Referential integrity"
          ],
          answer: 0,
          explain: "Differentiation means using systems to provide a more distinctive customer experience."
        }
      ]
    },
    {
      id: "unit-3",
      label: "Unit 3",
      chapter: "Chapter 5",
      title: "IT Infrastructure and Emerging Technologies",
      objective: "Understand the technology foundation an organization needs and the main trends affecting hardware, software, and cost decisions.",
      quickWin: "If a modality room cannot send images, the problem may be in the infrastructure, not the scanner alone.",
      examFocus: "Know the meaning of IT infrastructure, its major components, hardware and software trends, and the management ideas of scalability, governance, and total cost of ownership.",
      concepts: [
        {
          term: "What IT infrastructure really means",
          memoryHook: "Infrastructure is the foundation that lets everything else run.",
          silly: "Infrastructure is the invisible floor under all the tech. If the floor is shaky, everything wobbles.",
          plain: "IT infrastructure is the shared set of hardware, software, data storage, network services, and support services an organization depends on every day.",
          radiology: "In imaging, infrastructure includes workstations, servers, PACS storage, network links, backup systems, operating systems, and support vendors that keep studies moving.",
          exam: "IT infrastructure is the set of physical devices and software applications required to operate the enterprise, plus firm-wide services such as computing platforms, telecommunications, and data management."
        },
        {
          term: "Core components of infrastructure",
          memoryHook: "Think in layers: devices, systems software, business software, data, networks, web services, and support.",
          silly: "It has computers, programs, storage, internet, and the helper services that keep them alive.",
          plain: "The course breaks infrastructure into key categories such as hardware platforms, operating systems, enterprise software, data storage, networking, internet platforms, and consulting or integration services.",
          radiology: "A hospital may use diagnostic PCs, Windows or Linux servers, PACS software, SQL databases, secure networking, web portals, and outside vendors for setup and support.",
          exam: "Major infrastructure components include computer hardware platforms, operating system platforms, enterprise software applications, data management and storage, networking/telecommunications platforms, internet platforms, and consulting/system integration services."
        },
        {
          term: "Current hardware and software trends",
          memoryHook: "The trend list is mostly mobile, virtualized, cloud-based, faster, and more distributed.",
          silly: "Modern tech wants to be mobile, cloud-based, shared, fast, and less power-hungry.",
          plain: "Modern infrastructure is shaped by mobile devices, virtualization, cloud computing, edge computing, open-source software, web services, and outsourced software platforms.",
          radiology: "Cloud archiving can reduce local storage pressure. Virtualization lets one physical server run several services. Edge computing can help when image processing or AI needs low latency near the scanner.",
          exam: "Important trends include mobile digital platforms, virtualization, cloud computing, edge computing, green computing, Linux and open-source software, web services, service-oriented architecture, and cloud-based software services."
        },
        {
          term: "Management decisions: scalability, governance, and TCO",
          memoryHook: "A cheap purchase can still be expensive once training, support, downtime, and energy are counted.",
          silly: "Cheap now can become expensive later, so count the hidden headaches too.",
          plain: "Technology decisions are not only technical. Managers have to decide who controls infrastructure, whether systems can grow with demand, and what the full cost will be over time.",
          radiology: "Buying storage for a growing image archive means thinking about future scan volumes, training, maintenance, vendor support, downtime risk, electricity, and whether cloud storage is more practical than buying servers.",
          exam: "Scalability is the ability to expand to serve a larger number of users. Governance concerns who controls IT infrastructure. Total Cost of Ownership includes direct and indirect costs such as installation, training, support, maintenance, downtime, space, and energy."
        }
      ],
      scenarios: [
        {
          title: "When PACS feels slow",
          summary: "Users often blame the visible application, but the issue may be deeper.",
          steps: [
            "A technologist notices images take too long to open.",
            "The cause may be server load, storage performance, network congestion, or virtualization limits.",
            "The fix may involve infrastructure changes rather than retraining the user."
          ],
          takeaway: "Infrastructure is the hidden layer that supports visible clinical systems."
        },
        {
          title: "Cloud archive decision",
          summary: "Buying and renting infrastructure have different tradeoffs.",
          steps: [
            "Leaders compare on-site image storage with a cloud archive service.",
            "They review cost, security, reliability, workflow impact, and vendor agreements.",
            "They also include indirect costs such as maintenance and downtime risk."
          ],
          takeaway: "This is a classic infrastructure investment decision using rent-versus-buy logic and TCO thinking."
        }
      ],
      pitfalls: [
        "Do not define infrastructure as hardware only.",
        "Do not talk about cloud benefits without also noting security and reliability concerns.",
        "Do not forget indirect costs when discussing TCO."
      ],
      quiz: [
        {
          id: "u3-q1",
          prompt: "What does virtualization mainly allow?",
          options: [
            "A single physical resource can act like multiple resources.",
            "Only cloud vendors can provide storage.",
            "Data redundancy is removed automatically.",
            "Managers stop needing reports."
          ],
          answer: 0,
          explain: "Virtualization lets one physical system support several logical systems, which can reduce hardware and power use."
        },
        {
          id: "u3-q2",
          prompt: "Which item belongs in Total Cost of Ownership?",
          options: [
            "Only the purchase price of hardware",
            "Only software subscription fees",
            "Training, support, maintenance, downtime, and energy costs",
            "Only the salary of senior management"
          ],
          answer: 2,
          explain: "TCO includes both direct and indirect costs, not just the purchase price."
        },
        {
          id: "u3-q3",
          prompt: "Why might edge computing matter in imaging environments?",
          options: [
            "It removes the need for databases.",
            "It helps reduce latency by placing processing closer to where data is generated.",
            "It is another name for outsourcing.",
            "It is only used for payroll systems."
          ],
          answer: 1,
          explain: "Edge computing places servers closer to data sources to reduce latency and network traffic."
        }
      ]
    },
    {
      id: "unit-4",
      label: "Unit 4",
      chapter: "Chapter 6",
      title: "Databases and Information Management",
      objective: "Understand why databases are better than separate files and how data can be organized for analysis and decision making.",
      quickWin: "If patient details are different in two systems, you are already seeing the file-environment problem this unit describes.",
      examFocus: "Know file environment problems, DBMS capabilities, relational concepts, keys, database design, and business intelligence tools such as data warehouses.",
      concepts: [
        {
          term: "Why separate files cause problems",
          memoryHook: "When each department keeps its own version, errors multiply.",
          silly: "If everyone keeps their own notebook, the notes stop matching.",
          plain: "Traditional file systems create duplication, inconsistency, wasted effort, and poor visibility because each department keeps separate data files.",
          radiology: "If registration, imaging, and billing all keep their own patient details, one address change may be updated in one place and missed in another.",
          exam: "Problems of the traditional file environment include data redundancy, data inconsistency, program-data dependence, inflexibility, poor security, and lack of data sharing and availability."
        },
        {
          term: "What a DBMS does",
          memoryHook: "A DBMS centralizes data and controls access to it.",
          silly: "A DBMS is one smart shared notebook instead of many messy separate notebooks.",
          plain: "A database management system organizes data so many applications can use the same source instead of every department building its own copy.",
          radiology: "The same patient and exam data can support scheduling, reporting, billing, and quality measurement without separate re-entry in each area.",
          exam: "A DBMS serves as an interface between applications and physical data files. It centralizes data, controls redundancy, improves security, supports sharing, and provides backup and recovery."
        },
        {
          term: "Relational databases, keys, and operations",
          memoryHook: "Tables become powerful when rows can be matched correctly.",
          silly: "Relational databases are tables with name tags, so the right rows can find each other.",
          plain: "Relational databases store data in tables. Keys identify records and connect tables. Operations such as select, join, and project let users produce useful views of data.",
          radiology: "A Patient table can link to an Exam table through patient ID. A Study table can link to a Radiologist table. That makes it possible to report exam volume by radiologist, modality, or location.",
          exam: "A primary key uniquely identifies each record in a table. A foreign key links one table to another. Relational operations include select, join, and project."
        },
        {
          term: "Business intelligence and big data",
          memoryHook: "Operational databases run the business; analytical systems help understand it.",
          silly: "Daily databases keep the place running. Big analysis tools help you spot patterns and trends.",
          plain: "Large organizations often move data into data warehouses or data marts so analysts can study trends without slowing down the day-to-day systems.",
          radiology: "A department may use a warehouse to analyze turnaround time, repeat rates, scanner utilization, contrast use, or referral patterns across months and sites.",
          exam: "Business intelligence infrastructure includes data warehouses, data marts, in-memory computing, and analytical platforms. Big data refers to very large datasets generated from many sources."
        }
      ],
      scenarios: [
        {
          title: "Duplicate patient data problem",
          summary: "A mismatch across systems creates operational risk.",
          steps: [
            "A patient changes phone number at registration.",
            "The new number appears in one system but not in another.",
            "The reminder message goes to the wrong place and the patient misses the exam."
          ],
          takeaway: "This is data inconsistency caused by separate files and weak integration."
        },
        {
          title: "Joining tables for quality reporting",
          summary: "Relational databases make performance analysis possible.",
          steps: [
            "An analyst pulls data from Patient, Exam, Modality, and Report tables.",
            "The system joins related records using keys.",
            "Managers see report turnaround by modality and by site."
          ],
          takeaway: "This is why relational databases are powerful: they turn stored data into useful information."
        }
      ],
      pitfalls: [
        "Do not confuse a primary key with a foreign key.",
        "Do not say a database is just one file.",
        "Do not treat data warehouses as the same thing as operational TPS databases."
      ],
      quiz: [
        {
          id: "u4-q1",
          prompt: "What is the main purpose of a primary key?",
          options: [
            "To store a user's password",
            "To uniquely identify each record in a table",
            "To replace all foreign keys",
            "To create a data warehouse"
          ],
          answer: 1,
          explain: "A primary key uniquely identifies a record. That is what makes relationships dependable."
        },
        {
          id: "u4-q2",
          prompt: "Which situation best shows data redundancy?",
          options: [
            "One database table is backed up nightly.",
            "The same patient address is stored in several separate departmental files.",
            "A query joins two tables.",
            "A dashboard summarizes exam volume."
          ],
          answer: 1,
          explain: "Redundancy means the same data exists in multiple places, which often causes inconsistency."
        },
        {
          id: "u4-q3",
          prompt: "A data warehouse is best described as:",
          options: [
            "A local folder for one employee's spreadsheet files",
            "A centralized repository that stores integrated data from multiple sources for analysis",
            "A scanner console with image processing software",
            "A foreign key used in one table"
          ],
          answer: 1,
          explain: "The warehouse supports analysis and business intelligence by combining data from many sources."
        }
      ]
    },
    {
      id: "unit-5",
      label: "Unit 5",
      chapter: "Chapter 13",
      title: "Building Information Systems",
      objective: "Understand how systems are created, how they change organizations, and what development approaches are available.",
      quickWin: "Think about implementing a new booking portal or replacing a paper-based contrast screening workflow. That is systems building in a clinical setting.",
      examFocus: "Know the levels of organizational change, the systems development process, structured vs. object-oriented design, prototyping, traditional life cycle, and outsourcing.",
      concepts: [
        {
          term: "Systems development and organizational change",
          memoryHook: "System change ranges from simple automation to major redesign.",
          silly: "A new system can be a tiny tidy-up or a giant 'we do work differently now' moment.",
          plain: "New systems do more than digitize tasks. They can streamline procedures, redesign workflows, or even force a department to rethink how work is done.",
          radiology: "Moving from paper requests to digital booking is automation. Redesigning the full imaging workflow to reduce handoffs and delays is business process redesign.",
          exam: "IT-enabled change can occur at the levels of automation, rationalization of procedures, business process redesign, and paradigm shift."
        },
        {
          term: "The systems development process",
          memoryHook: "First understand the problem, then design the solution, then build, test, convert, and maintain.",
          silly: "Good system building is: find the problem, plan it, build it, test it, switch to it, then keep fixing it.",
          plain: "A system should be built through a sequence of activities: analyze the current problem, design the solution, code it, test it, move users to it, and then maintain it after launch.",
          radiology: "Before launching a new image-sharing portal, the team should analyze referral problems, design screens and data flow, test with users, decide how to switch from the old process, and monitor issues after go-live.",
          exam: "Core activities are systems analysis, systems design, programming, testing, conversion, production, and maintenance."
        },
        {
          term: "Structured design, object-oriented development, and CASE tools",
          memoryHook: "Structured methods focus on process steps; object-oriented methods focus on interacting objects.",
          silly: "Structured design draws the steps. Object-oriented design groups things into smart little pieces. CASE tools help do the boring parts faster.",
          plain: "Different design methods organize thinking in different ways. Structured approaches map processes and data flows. Object-oriented methods package data and behavior together. CASE tools automate some design work.",
          radiology: "A structured diagram may show how an exam request moves through the department. An object-oriented view may model Patient, Exam, Report, and Scheduler as connected objects with their own data and actions.",
          exam: "Structured methodologies use step-by-step analysis and tools such as data flow diagrams and structure charts. Object-oriented development uses objects with attributes and methods. CASE tools automate repetitive development tasks."
        },
        {
          term: "Traditional life cycle, prototyping, and outsourcing",
          memoryHook: "Formal projects fit large stable needs; prototypes help when users are unsure; outsourcing adds flexibility but also dependence on vendors.",
          silly: "Waterfall is slow and neat. Prototypes are quick test versions. Outsourcing means asking another company to help.",
          plain: "There is more than one way to build a system. Formal life cycle methods are controlled but slow. Prototyping is fast and useful when requirements are unclear. Outsourcing can provide skills or lower costs, but it also introduces hidden costs and vendor risk.",
          radiology: "If staff are unsure how a patient self-check-in screen should work, a quick prototype is helpful. If a hospital buys a cloud-based scheduling service, it gains flexibility but depends on the vendor for service quality and changes.",
          exam: "The traditional systems life cycle is a phased waterfall approach. Prototyping builds an experimental system for user evaluation. Outsourcing may involve external vendors, software packages, or cloud/SaaS providers and can create hidden transition costs."
        }
      ],
      scenarios: [
        {
          title: "Replacing a paper checklist",
          summary: "The level of change depends on how much workflow is rethought.",
          steps: [
            "A paper contrast screening form becomes a digital form.",
            "If the same approval steps remain, the change is mostly automation.",
            "If the department removes duplicate steps and changes roles, it becomes rationalization or redesign."
          ],
          takeaway: "The exam often asks you to identify the level of organizational change, not just the technology."
        },
        {
          title: "Prototype before full rollout",
          summary: "Early user feedback prevents expensive mistakes.",
          steps: [
            "A small pilot version of a booking interface is shown to technologists and front desk staff.",
            "Users point out confusing fields and missing alerts.",
            "The design is revised before the final system is built and deployed broadly."
          ],
          takeaway: "Prototyping is valuable when requirements are uncertain or the user interface matters a lot."
        }
      ],
      pitfalls: [
        "Do not list the development stages in the wrong order.",
        "Do not treat prototyping as always better; it also has weaknesses such as poor documentation or scalability issues.",
        "Do not present outsourcing as free of hidden costs."
      ],
      quiz: [
        {
          id: "u5-q1",
          prompt: "When is prototyping especially useful?",
          options: [
            "When user requirements are still unclear",
            "Only when no testing is needed",
            "Only for payroll systems",
            "When an organization wants zero user feedback"
          ],
          answer: 0,
          explain: "Prototyping helps when requirements or design ideas are uncertain and user feedback is needed early."
        },
        {
          id: "u5-q2",
          prompt: "Which sequence matches the core systems development process best?",
          options: [
            "Testing, design, programming, analysis, maintenance",
            "Systems analysis, systems design, programming, testing, conversion, production and maintenance",
            "Programming, outsourcing, hardware purchase, sales, conversion",
            "Object-oriented design, dashboards, ESS, maintenance"
          ],
          answer: 1,
          explain: "That is the standard sequence presented in the unit."
        },
        {
          id: "u5-q3",
          prompt: "Which statement about outsourcing is most accurate?",
          options: [
            "It removes all hidden costs.",
            "It can add flexibility, but vendor selection, transition, and dependence can create costs and risk.",
            "It means the same thing as prototyping.",
            "It is only used when building databases."
          ],
          answer: 1,
          explain: "The unit presents outsourcing as useful but not cost-free. Transition and vendor management matter."
        }
      ]
    }
  ],
  glossary: [
    {
      term: "Information system",
      plain: "A working arrangement of people, processes, data, hardware, and software that turns data into useful information.",
      radiology: "RIS plus PACS plus staff workflow and reporting rules together form an information system."
    },
    {
      term: "Information technology",
      plain: "The hardware and software tools used by an organization.",
      radiology: "Scanners, servers, workstations, and applications are IT components."
    },
    {
      term: "Business process",
      plain: "A connected set of tasks that achieves a result from start to finish.",
      radiology: "Order entry to final report delivery is one imaging process."
    },
    {
      term: "TPS",
      plain: "A Transaction Processing System records routine daily activity.",
      radiology: "Appointment booking, check-in, exam completion, and billing capture are TPS work."
    },
    {
      term: "MIS",
      plain: "A Management Information System summarizes routine data into reports for managers.",
      radiology: "A weekly report showing CT exam volume by shift is MIS output."
    },
    {
      term: "DSS",
      plain: "A Decision Support System helps analyze options and supports non-routine decisions.",
      radiology: "A tool that models how scanner downtime would affect waiting time is DSS."
    },
    {
      term: "ESS",
      plain: "An Executive Support System gives senior leaders concise dashboards and trend views.",
      radiology: "Hospital executives may monitor imaging demand, turnaround time, and revenue through ESS-style dashboards."
    },
    {
      term: "ERP",
      plain: "An enterprise system that integrates core processes across departments.",
      radiology: "Finance, HR, procurement, and operations data can connect through ERP."
    },
    {
      term: "CRM",
      plain: "A Customer Relationship Management system supports communication and service with customers.",
      radiology: "Patient reminders, follow-up messages, and satisfaction tracking can sit in CRM-like tools."
    },
    {
      term: "IT infrastructure",
      plain: "The shared technical foundation that supports the organization's systems.",
      radiology: "Servers, storage, network links, web access, operating systems, and support vendors are infrastructure."
    },
    {
      term: "Virtualization",
      plain: "A way to make one physical resource behave like several logical resources.",
      radiology: "One server can host several clinical applications instead of buying a separate server for each."
    },
    {
      term: "Cloud computing",
      plain: "On-demand computing services delivered over a network.",
      radiology: "A cloud archive can store imaging studies without all storage being local."
    },
    {
      term: "DBMS",
      plain: "Software that manages databases and controls how applications use data.",
      radiology: "A DBMS helps scheduling, reporting, and billing use shared patient and exam data."
    },
    {
      term: "RDBMS",
      plain: "A relational DBMS stores data in related tables.",
      radiology: "Patient, Exam, and Report tables can be linked so analysts can combine data safely."
    },
    {
      term: "Primary key",
      plain: "A field that uniquely identifies one record in a table.",
      radiology: "A patient ID or exam ID can serve as a primary key."
    },
    {
      term: "Foreign key",
      plain: "A field in one table that points to the primary key of another table.",
      radiology: "An Exam table may contain patient ID as a foreign key linking back to the Patient table."
    },
    {
      term: "Referential integrity",
      plain: "Rules that keep table relationships consistent and valid.",
      radiology: "An exam should not reference a patient record that does not exist."
    },
    {
      term: "Data warehouse",
      plain: "A centralized repository that stores integrated data for analysis.",
      radiology: "Long-term performance reporting across sites often uses warehouse data."
    },
    {
      term: "Prototyping",
      plain: "Building a quick early version of a system so users can react to it.",
      radiology: "A sample booking screen shown to staff before full development is a prototype."
    },
    {
      term: "Outsourcing",
      plain: "Using an external vendor for software, infrastructure, or development work.",
      radiology: "A hospital may subscribe to a cloud scheduling platform instead of building its own."
    },
    {
      term: "TCO",
      plain: "Total Cost of Ownership, including direct and indirect costs over time.",
      radiology: "Storage decisions should include support, downtime, energy, and training, not just purchase price."
    }
  ],
  checklist: [
    "I can explain the difference between information technology and an information system.",
    "I can use radiology examples to distinguish TPS, MIS, DSS, and ESS.",
    "I can name the main parts of IT infrastructure and describe at least two current trends.",
    "I can explain why a DBMS is better than separate departmental files.",
    "I can define primary key, foreign key, and referential integrity.",
    "I can describe the systems development stages in the correct order.",
    "I can compare the traditional life cycle, prototyping, and outsourcing without mixing them up."
  ]
};
