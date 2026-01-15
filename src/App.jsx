import React, { useState, useEffect, useRef } from "react";
import { subjects as SUBJECTS } from "./data/subjects";

const STORAGE_KEY = "pscAssistant2026Data";

// Study Tips & Tricks Data with Comprehensive Software Engineering Notes
const STUDY_TIPS = {
  "Software Engineering": {
    icon: "fas fa-code",
    color: "#4F46E5",
    tricks: [
      {
        title: "SDLC Models Memory Trick",
        content:
          "Remember 'WASP VIRG' - Waterfall, Agile, Spiral, Prototype, V-Model, Iterative, RAD, Agile. Waterfall = Linear, V-Model = Verification & Validation, Spiral = Risk-driven",
      },
      {
        title: "Waterfall Model Phases",
        content:
          "Requirements → Design → Implementation → Testing → Deployment → Maintenance. Linear sequential, no going back, best for clear requirements",
      },
      {
        title: "V-Model Testing Parallels",
        content:
          "Requirements ↔ Acceptance Test | High-level Design ↔ System Test | Detailed Design ↔ Integration Test | Coding ↔ Unit Test",
      },
      {
        title: "Spiral Model Quadrants",
        content:
          "Planning → Risk Analysis → Engineering → Evaluation. Risk-driven, iterative with prototyping",
      },
      {
        title: "Incremental Model",
        content:
          "Divide system into builds/increments. Each increment adds functionality. Early delivery possible",
      },
      {
        title: "Prototype Model Types",
        content:
          "Throwaway (discarded), Evolutionary (refined), Incremental (piecewise), Extreme (XP style)",
      },
      {
        title: "RAD Model Phases",
        content:
          "Requirements Planning → User Design → Construction → Cutover. Time-boxed, uses workshops",
      },
      {
        title: "Agile Manifesto Values",
        content:
          "Individuals & Interactions > Processes & Tools | Working Software > Comprehensive Documentation | Customer Collaboration > Contract Negotiation | Responding to Change > Following a Plan",
      },
      {
        title: "Agile Principles (Top 6)",
        content:
          "1. Early delivery | 2. Welcome changes | 3. Frequent delivery | 4. Daily collaboration | 5. Motivated individuals | 6. Face-to-face communication",
      },
      {
        title: "Agile vs Traditional",
        content:
          "Agile: Iterative, customer collaboration, flexible | Traditional: Linear, contract negotiation, rigid",
      },
      {
        title: "SDLC Selection Criteria",
        content:
          "Consider: Requirements clarity, Risk level, Project size, Customer involvement, Time constraints",
      },
      {
        title: "Scrum Framework",
        content:
          "Sprint (2-4 weeks) | Product Backlog | Sprint Backlog | Increment | Roles: PO, SM, Dev Team",
      },
      {
        title: "Scrum Roles Detailed",
        content:
          "Product Owner: Defines what, prioritizes | Scrum Master: How, facilitates | Development Team: Does the work, self-organizing",
      },
      {
        title: "Scrum Artifacts",
        content:
          "Product Backlog: Ordered requirements | Sprint Backlog: Selected items + plan | Increment: Sum of completed items",
      },
      {
        title: "Scrum Events Timeline",
        content:
          "Sprint Planning → Daily Scrum → Sprint Review → Sprint Retrospective → Repeat",
      },
      {
        title: "User Story Format",
        content:
          "As a [role], I want [feature] so that [benefit]. INVEST criteria: Independent, Negotiable, Valuable, Estimable, Small, Testable",
      },
      {
        title: "Velocity & Burndown",
        content:
          "Velocity: Story points completed per sprint | Burndown Chart: Work remaining over time",
      },
      {
        title: "Extreme Programming (XP) Practices",
        content:
          "Pair Programming | Test-Driven Development | Continuous Integration | Refactoring | Simple Design",
      },
      {
        title: "Kanban Principles",
        content:
          "Visualize workflow | Limit WIP | Manage flow | Make policies explicit | Improve collaboratively",
      },
      {
        title: "Lean Software Development",
        content:
          "Eliminate waste | Amplify learning | Decide late | Deliver fast | Empower team | Build integrity | See whole",
      },
      {
        title: "Agile Estimation Techniques",
        content:
          "Planning Poker | T-Shirt Sizing | Dot Voting | Bucket System | Affinity Estimating",
      },
      {
        title: "Testing Levels Hierarchy",
        content:
          "Unit (Component) → Integration (Interface) → System (Complete) → Acceptance (User)",
      },
      {
        title: "Testing Types Classification",
        content:
          "Functional vs Non-functional | Manual vs Automated | Static vs Dynamic | Black Box vs White Box",
      },
      {
        title: "Black Box Testing Techniques",
        content:
          "Equivalence Partitioning | Boundary Value Analysis | Decision Table | State Transition | Use Case Testing",
      },
      {
        title: "White Box Testing Techniques",
        content:
          "Statement Coverage | Decision Coverage | Condition Coverage | Path Coverage | Cyclomatic Complexity",
      },
      {
        title: "Performance Testing Types",
        content:
          "Load (Normal) | Stress (Beyond) | Soak/Endurance (Long) | Spike (Sudden) | Scalability (Growth)",
      },
      {
        title: "Regression Testing Strategy",
        content:
          "Retest All | Selective | Prioritized | Hybrid. Important for continuous integration",
      },
      {
        title: "Test Case Components",
        content:
          "Test Case ID | Description | Preconditions | Test Steps | Expected Result | Actual Result | Status",
      },
      {
        title: "Testing Life Cycle",
        content:
          "Requirement Analysis → Test Planning → Test Design → Test Execution → Test Closure",
      },
      {
        title: "Defect Life Cycle States",
        content:
          "New → Assigned → Open → Fixed → Retest → Verified → Closed | Reopen → Rejected",
      },
      {
        title: "Test Driven Development (TDD) Cycle",
        content:
          "Red (Write failing test) → Green (Make test pass) → Refactor (Improve code)",
      },
      {
        title: "Testing Metrics",
        content:
          "Defect Density | Defect Removal Efficiency | Test Coverage | Requirement Traceability",
      },
      {
        title: "Alpha vs Beta Testing",
        content:
          "Alpha: Internal, controlled environment | Beta: External, real environment",
      },
      {
        title: "UML Diagram Categories",
        content:
          "Structural: Class, Object, Component, Deployment, Composite Structure | Behavioral: Use Case, Sequence, Activity, State Machine",
      },
      {
        title: "Class Diagram Relationships",
        content:
          "Association (has-a) | Inheritance (is-a) | Aggregation (weak has-a) | Composition (strong has-a) | Dependency (uses) | Realization (implements)",
      },
      {
        title: "Use Case Relationships",
        content:
          "Include (Mandatory) | Extend (Optional) | Generalization (Inheritance) | Association (Actor-UseCase)",
      },
      {
        title: "Sequence Diagram Elements",
        content:
          "Objects/Lifelines | Activation Bars | Messages (Synchronous, Asynchronous, Return) | Fragments (Alt, Opt, Loop, Par)",
      },
      {
        title: "Activity Diagram vs Flowchart",
        content:
          "Activity: Business processes, concurrent flows | Flowchart: Algorithm steps, sequential",
      },
      {
        title: "State Diagram Components",
        content:
          "States (Initial, Final, Composite) | Transitions (Events, Guards, Actions) | History States",
      },
      {
        title: "Component Diagram Purpose",
        content:
          "Shows physical components and dependencies | Used for system architecture",
      },
      {
        title: "Deployment Diagram",
        content:
          "Shows hardware nodes and software components deployed | Shows network topology",
      },
      {
        title: "Design Pattern Categories",
        content:
          "Creational (Object creation) | Structural (Class/Object composition) | Behavioral (Communication between objects)",
      },
      {
        title: "Creational Patterns",
        content:
          "Singleton (Single instance) | Factory Method (Subclass decides) | Abstract Factory (Families) | Builder (Complex objects) | Prototype (Cloning)",
      },
      {
        title: "Structural Patterns",
        content:
          "Adapter (Interface bridge) | Bridge (Decouple abstraction) | Composite (Tree structures) | Decorator (Add responsibilities) | Facade (Simplified interface) | Flyweight (Share objects) | Proxy (Control access)",
      },
      {
        title: "Behavioral Patterns",
        content:
          "Chain of Responsibility | Command | Interpreter | Iterator | Mediator | Memento | Observer | State | Strategy | Template Method | Visitor",
      },
      {
        title: "MVC Pattern Components",
        content:
          "Model (Data & business logic) | View (Presentation layer) | Controller (Input handling, mediator)",
      },
      {
        title: "Singleton Implementation Types",
        content:
          "Eager (class load) | Lazy (first use) | Thread-safe | Double-checked locking | Bill Pugh | Enum based",
      },
      {
        title: "Factory vs Abstract Factory",
        content:
          "Factory: Creates single product | Abstract Factory: Creates families of related products",
      },
      {
        title: "Observer Pattern Implementation",
        content:
          "Subject maintains observer list | Notify observers on state change | Push vs Pull model",
      },
      {
        title: "Strategy Pattern Use",
        content:
          "Define algorithm family | Encapsulate each algorithm | Make them interchangeable",
      },
      {
        title: "Design Pattern Selection Criteria",
        content:
          "Problem type | Flexibility needed | Complexity | Performance | Maintainability",
      },
      {
        title: "Product Metrics",
        content:
          "Size: LOC, Function Points | Complexity: Cyclomatic, Halstead | Quality: Defect Density, MTBF",
      },
      {
        title: "Process Metrics",
        content:
          "Productivity: LOC/person-month | Effort: Person-hours | Schedule: Calendar time | Quality: Defect rates",
      },
      {
        title: "Project Metrics",
        content:
          "Cost Variance | Schedule Variance | Earned Value | ROI | Risk Exposure",
      },
      {
        title: "Function Point Calculation",
        content:
          "External Inputs + External Outputs + External Inquiries + Internal Files + External Interfaces",
      },
      {
        title: "Cyclomatic Complexity Formula",
        content:
          "V(G) = E - N + 2P | Where E=edges, N=nodes, P=connected components | V(G) also = Number of decisions + 1",
      },
      {
        title: "Halstead Metrics",
        content:
          "n1 = distinct operators | n2 = distinct operands | N1 = total operators | N2 = total operands | Volume = (N1+N2) * log2(n1+n2)",
      },
      {
        title: "Project Management Triangle",
        content:
          "Scope (Features) | Time (Schedule) | Cost (Budget) | Quality (Affects all)",
      },
      {
        title: "Project Life Cycle Phases",
        content: "Initiation → Planning → Execution → Monitoring → Closure",
      },
      {
        title: "WBS (Work Breakdown Structure)",
        content:
          "Hierarchical decomposition | 100% rule | 8-80 hour rule | Deliverable-oriented",
      },
      {
        title: "Critical Path Method (CPM)",
        content:
          "Longest path | Zero float/slack | Determines project duration | Activities on nodes",
      },
      {
        title: "PERT Estimation Formula",
        content:
          "Expected Time = (Optimistic + 4*Most Likely + Pessimistic) / 6",
      },
      {
        title: "Earned Value Management (EVM)",
        content:
          "PV (Planned Value) | EV (Earned Value) | AC (Actual Cost) | CV = EV-AC | SV = EV-PV | CPI = EV/AC | SPI = EV/PV",
      },
      {
        title: "Risk Management Process",
        content:
          "Identify → Analyze (Qualitative/Quantitative) → Plan (Avoid, Transfer, Mitigate, Accept) → Implement → Monitor",
      },
      {
        title: "Software Configuration Management",
        content:
          "Version Control | Change Control | Configuration Identification | Configuration Audits",
      },
      {
        title: "COCOMO Model Types",
        content:
          "Basic: Size only | Intermediate: Size + cost drivers | Detailed: Phase-wise estimation",
      },
      {
        title: "Team Management Styles",
        content:
          "Autocratic | Democratic | Laissez-faire | Transformational | Servant leadership",
      },
      {
        title: "Requirement Types",
        content:
          "Functional (What system does) | Non-functional (Quality attributes) | Domain (Business rules) | User (User needs) | System (Technical)",
      },
      {
        title: "SRS Characteristics (FURPS+)",
        content:
          "Functionality | Usability | Reliability | Performance | Supportability | + Design constraints, Implementation, Interface, Physical",
      },
      {
        title: "SRS Quality Attributes",
        content:
          "Complete | Consistent | Unambiguous | Traceable | Verifiable | Modifiable | Prioritized",
      },
      {
        title: "Requirement Elicitation Techniques",
        content:
          "Interviews | Questionnaires | Observation | Brainstorming | Prototyping | Workshops | Document Analysis",
      },
      {
        title: "Requirement Analysis Models",
        content:
          "Use Case Model | Data Flow Diagrams | Entity Relationship Diagrams | State Transition Diagrams",
      },
      {
        title: "Feasibility Study Types",
        content:
          "Technical (Can we build?) | Economic (Should we build?) | Legal (May we build?) | Operational (Will it work?) | Schedule (Can we build on time?)",
      },
      {
        title: "Requirement Prioritization",
        content:
          "MoSCoW: Must have, Should have, Could have, Won't have | Kano Model: Basic, Performance, Excitement | Cost-Value",
      },
      {
        title: "Requirement Traceability Matrix",
        content:
          "Links requirements to design, code, and tests | Bidirectional tracing | Ensures coverage",
      },
      {
        title: "Maintenance Types (CAPE)",
        content:
          "Corrective (Fix bugs) | Adaptive (Environment changes) | Perfective (Enhancements) | Emergency (Critical fixes)",
      },
      {
        title: "Maintenance Cost Factors",
        content:
          "Typically 40-80% of total cost | Increases with: Poor documentation | High complexity | Low modularity | Frequent staff changes",
      },
      {
        title: "Software Re-engineering Process",
        content:
          "Reverse Engineering → Restructuring → Forward Engineering | Optionally: Data Re-engineering",
      },
      {
        title: "Legacy System Evolution Strategies",
        content:
          "Scrap (Replace) | Continue (Maintain) | Re-engineer (Improve) | Outsource (External) | Wrap (Interface)",
      },
      {
        title: "Software Aging Symptoms",
        content:
          "Increased defects | Reduced performance | Difficulty in changes | High maintenance cost | Technology obsolescence",
      },
      {
        title: "Impact Analysis Steps",
        content:
          "Identify change scope | Trace dependencies | Assess risk | Estimate effort | Plan implementation",
      },
      {
        title: "QA vs QC Difference",
        content:
          "QA: Process-oriented, preventive (Building it right) | QC: Product-oriented, detective (Built right?)",
      },
      {
        title: "CMMI Maturity Levels",
        content:
          "1. Initial (Ad-hoc) | 2. Managed (Repeatable) | 3. Defined (Standardized) | 4. Quantitatively Managed | 5. Optimizing",
      },
      {
        title: "ISO Standards for SE",
        content:
          "ISO 9001: Quality Management | ISO/IEC 12207: Life Cycle Processes | ISO/IEC 25010: Quality Model | ISO/IEC 15504: Process Assessment",
      },
      {
        title: "Six Sigma Methodology",
        content:
          "DMAIC: Define → Measure → Analyze → Improve → Control | DMADV: Define → Measure → Analyze → Design → Verify",
      },
      {
        title: "Software Quality Attributes",
        content:
          "Correctness | Reliability | Efficiency | Integrity | Usability | Maintainability | Testability | Portability",
      },
      {
        title: "Audit Types in QA",
        content:
          "Internal (First party) | External (Second party) | Certification (Third party) | Process vs Product audits",
      },
      {
        title: "Peer Review Types",
        content:
          "Walkthroughs (Author presents) | Technical Reviews (Experts review) | Inspections (Formal, metrics) | Code Reviews",
      },
      {
        title: "Continuous Improvement Models",
        content:
          "PDCA: Plan-Do-Check-Act | Kaizen (Small improvements) | TQM (Total Quality Management)",
      },
      {
        title: "Architectural Styles",
        content:
          "Layered | Client-Server | MVC | Pipe and Filter | Peer-to-Peer | Event-Driven | Microservices",
      },
      {
        title: "Design Principles (SOLID)",
        content:
          "S: Single Responsibility | O: Open-Closed | L: Liskov Substitution | I: Interface Segregation | D: Dependency Inversion",
      },
      {
        title: "Cohesion Types (Good to Bad)",
        content:
          "Functional → Sequential → Communicational → Procedural → Temporal → Logical → Coincidental",
      },
      {
        title: "Coupling Types (Good to Bad)",
        content: "Data → Stamp → Control → External → Common → Content",
      },
      {
        title: "Design Quality Attributes",
        content:
          "Modularity | Abstraction | Encapsulation | Coupling | Cohesion | Sufficiency | Completeness | Primitiveness",
      },
      {
        title: "Architecture Trade-off Analysis",
        content:
          "ATAM: Evaluate quality attributes | Identify risks | Sensitivity points | Trade-off points",
      },
      {
        title: "DevOps Practices",
        content:
          "Continuous Integration | Continuous Delivery | Continuous Deployment | Infrastructure as Code | Monitoring & Logging",
      },
      {
        title: "Microservices Architecture",
        content:
          "Small, independent services | Own database per service | Lightweight communication | Independent deployment",
      },
      {
        title: "Cloud Computing Models",
        content:
          "IaaS (Infrastructure) | PaaS (Platform) | SaaS (Software) | FaaS (Function)",
      },
      {
        title: "CI/CD Pipeline Stages",
        content:
          "Code → Build → Test → Deploy → Monitor | Automated at each stage",
      },
      {
        title: "Software Security Practices",
        content:
          "Secure SDLC | Threat Modeling | Static/Dynamic Analysis | Penetration Testing | Security Training",
      },
    ],
    detailedNotes: {
      SDLC: {
        keyConcepts: [
          "SDLC = Software Development Life Cycle - systematic process",
          "Waterfall: Linear sequential, rigid, good for clear requirements",
          "V-Model: Verification & Validation, testing parallel to development",
          "Spiral: Risk-driven, combines Waterfall + Prototyping",
          "Agile: Iterative, flexible, customer collaboration",
          "RAD: Rapid Application Development through prototyping",
          "Incremental: Divide into builds, early delivery possible",
          "Prototype: Working model first, refine based on feedback",
        ],
        importantPoints: [
          "Waterfall phases: Requirements → Design → Implementation → Testing → Deployment → Maintenance",
          "V-Model testing parallels: Coding ↔ Unit Test, Design ↔ Integration Test, Requirements ↔ Acceptance Test",
          "Spiral quadrants: Planning → Risk Analysis → Engineering → Evaluation",
          "Maintenance includes: Bug fixing, performance improvement, new features",
          "Agile delivers working software in increments (not at end)",
        ],
        memoryAids: [
          "WASP VIRG: Waterfall, Agile, Spiral, Prototype, V-Model, Iterative, RAD, Agile",
          "Waterfall = Linear Sequential Model",
          "V-Model = Verification & Validation Model",
          "RAD = Rapid Application Development",
        ],
      },
      Agile: {
        keyConcepts: [
          "Scrum: Framework with Sprints, Product Backlog, Sprint Backlog",
          "Roles: Product Owner (customer voice), Scrum Master (facilitator), Dev Team (builders)",
          "Sprint: Time-boxed iteration (2-4 weeks)",
          "XP (Extreme Programming): Pair Programming, TDD, Continuous Integration",
          "Kanban: Visualize workflow, limit WIP",
          "User Story: As a [role], I want [feature] so that [benefit]",
          "Velocity: Story points completed per sprint",
        ],
        importantPoints: [
          "Product Owner represents customers, prioritizes Product Backlog",
          "Scrum Master facilitates events (Daily Scrum, Sprint Planning, etc.)",
          "Daily Stand-up: Quick status update (Yesterday? Today? Obstacles?)",
          "Sprint Review: Demo work at end of Sprint",
          "Agile values: Individuals & interactions > processes & tools",
          "TDD = Test Driven Development: Red → Green → Refactor",
        ],
        memoryAids: [
          "Scrum events: Planning → Daily → Review → Retrospective",
          "INVEST criteria for User Stories: Independent, Negotiable, Valuable, Estimable, Small, Testable",
          "Agile Manifesto 1st principle: Individuals & interactions > processes & tools",
        ],
      },
      Testing: {
        keyConcepts: [
          "Testing levels: Unit → Integration → System → Acceptance",
          "Unit Testing: Tests individual components (by developers)",
          "Integration Testing: Tests interaction between modules",
          "System Testing: Tests complete system (Alpha testing)",
          "Acceptance Testing: User validation (UAT, Beta testing)",
          "Black Box: No code knowledge, tests functionality",
          "White Box: With code knowledge, tests internal logic",
          "Regression: Ensures new changes don't break existing functionality",
        ],
        importantPoints: [
          "UAT = User Acceptance Testing (by end users)",
          "Beta Testing: Done at client site",
          "Alpha Testing: Internal, controlled environment",
          "Smoke Testing: Initial basic testing to check stability",
          "Performance Testing: Load, stress, soak, spike testing",
          "Security Testing: Finds vulnerabilities",
          "Test Case: Test inputs + expected results",
        ],
        memoryAids: [
          "Testing Pyramid: Unit → Integration → System → Acceptance (bottom to top)",
          "Black Box techniques: Equivalence Partitioning, Boundary Value Analysis",
          "Defect life cycle: New → Assigned → Open → Fixed → Retest → Verified → Closed",
        ],
      },
      UML: {
        keyConcepts: [
          "UML = Unified Modeling Language for visualizing software systems",
          "14 types of UML diagrams divided into Structural and Behavioral",
          "Class Diagram: Most common structural diagram showing classes and relationships",
          "Use Case Diagram: Shows system functionality from user perspective",
          "Sequence Diagram: Shows object interactions in time sequence",
          "Activity Diagram: Similar to flowchart for business processes",
          "State Diagram: Shows state changes of an object",
        ],
        importantPoints: [
          "Structural diagrams show static structure: Class, Object, Component, Deployment",
          "Behavioral diagrams show dynamic behavior: Use Case, Sequence, Activity, State",
          "Association: Has-a relationship between classes",
          "Inheritance: Is-a relationship between classes",
          "Aggregation: Weak whole-part relationship (empty diamond)",
          "Composition: Strong whole-part relationship (filled diamond)",
        ],
        memoryAids: [
          "UML Relationships: AIDA - Association, Inheritance, Dependency, Aggregation/Composition",
          "Use Case relationships: IEG - Include, Extend, Generalization",
          "Sequence diagram messages: SAR - Synchronous, Asynchronous, Return",
        ],
      },
      DesignPatterns: {
        keyConcepts: [
          "Design Patterns = Reusable solutions to common software design problems",
          "Creational Patterns: Deal with object creation (Singleton, Factory, Builder)",
          "Structural Patterns: Deal with object composition (Adapter, Decorator, Facade)",
          "Behavioral Patterns: Deal with object interaction (Observer, Strategy, Command)",
          "MVC: Architectural pattern separating Model, View, Controller",
          "Singleton: Ensures only one instance exists",
          "Factory: Creates objects without specifying exact class",
          "Observer: One-to-many dependency between objects",
        ],
        importantPoints: [
          "Singleton pattern uses private constructor",
          "Factory Method lets subclasses decide which class to instantiate",
          "Abstract Factory creates families of related objects",
          "Adapter makes incompatible interfaces work together",
          "Decorator adds responsibilities to objects dynamically",
          "Observer pattern used in event handling systems",
          "Strategy pattern encapsulates algorithms making them interchangeable",
        ],
        memoryAids: [
          "Creational patterns: S-FAB-P - Singleton, Factory, Abstract Factory, Builder, Prototype",
          "Structural patterns: ABC-DFFP - Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy",
          "Behavioral patterns: Most patterns starting with letters C, I, M, O, S, T, V",
        ],
      },
      ProjectManagement: {
        keyConcepts: [
          "Project Management Triangle: Scope, Time, Cost (Quality affects all)",
          "WBS = Work Breakdown Structure: Hierarchical task decomposition",
          "CPM = Critical Path Method: Longest path determines project duration",
          "PERT = Program Evaluation Review Technique: Uses optimistic, most likely, pessimistic estimates",
          "EVM = Earned Value Management: Tracks project performance",
          "Risk Management: Identify, Analyze, Plan, Implement, Monitor",
          "Software Configuration Management: Version control, change control",
        ],
        importantPoints: [
          "Critical Path has zero float/slack",
          "PERT formula: (O + 4M + P)/6",
          "EVM formulas: CV = EV - AC, SV = EV - PV, CPI = EV/AC, SPI = EV/PV",
          "Risk responses: Avoid, Transfer, Mitigate, Accept",
          "Configuration Management ensures software integrity",
          "COCOMO models: Basic, Intermediate, Detailed",
        ],
        memoryAids: [
          "Project phases: IPEMC - Initiation, Planning, Execution, Monitoring, Closure",
          "Risk management: IAPIM - Identify, Analyze, Plan, Implement, Monitor",
          "EVM: PV, EV, AC - Plan, Earn, Actual",
        ],
      },
    },
    quickReference: {
      "se-1": "SDLC = Software Development Life Cycle",
      "se-2": "Waterfall model is linear sequential",
      "se-3": "V-Model emphasizes Verification & Validation",
      "se-4": "Spiral model is risk-driven",
      "se-5": "Agile is iterative and incremental",
      "se-6": "RAD = Rapid Application Development",
      "se-7": "Prototype model creates working model first",
      "se-8": "Incremental model divides system into builds",
      "se-9": "Scrum iteration is called Sprint",
      "se-10": "Sprint duration is 2-4 weeks",
      "se-11": "Product Owner represents customer",
      "se-12": "Scrum Master facilitates process",
      "se-13": "User Story: As a [role], I want [feature] so that [benefit]",
      "se-14": "Velocity = Story points completed per sprint",
      "se-15": "XP = Extreme Programming",
      "se-16": "TDD = Test Driven Development",
      "se-17": "Testing levels: Unit → Integration → System → Acceptance",
      "se-18": "UAT = User Acceptance Testing",
      "se-19": "Black Box testing doesn't require code knowledge",
      "se-20": "White Box testing requires code knowledge",
      "se-21": "Regression testing checks for broken functionality",
      "se-22": "Alpha testing is internal, Beta is external",
      "se-23": "UML = Unified Modeling Language",
      "se-24": "Class diagram shows static structure",
      "se-25": "Sequence diagram shows dynamic behavior",
      "se-26": "Use Case diagram shows system functionality",
      "se-27": "Activity diagram similar to flowchart",
      "se-28": "Design Patterns: Creational, Structural, Behavioral",
      "se-29": "Singleton ensures single instance",
      "se-30": "Factory Method creates objects",
      "se-31": "Observer implements one-to-many dependency",
      "se-32": "MVC = Model-View-Controller",
      "se-33": "LOC = Lines of Code",
      "se-34": "FP = Function Points",
      "se-35": "Cyclomatic Complexity measures code complexity",
      "se-36": "Project Management Triangle: Scope, Time, Cost",
      "se-37": "WBS = Work Breakdown Structure",
      "se-38": "CPM = Critical Path Method",
      "se-39": "PERT uses three-time estimates",
      "se-40": "EVM = Earned Value Management",
      "se-41": "SRS = Software Requirements Specification",
      "se-42":
        "FURPS = Functionality, Usability, Reliability, Performance, Supportability",
      "se-43": "MoSCoW prioritization: Must, Should, Could, Won't",
      "se-44": "Maintenance types: Corrective, Adaptive, Perfective, Emergency",
      "se-45": "Maintenance costs: 40-80% of total cost",
      "se-46": "QA = Quality Assurance (preventive)",
      "se-47": "QC = Quality Control (detective)",
      "se-48": "CMMI has 5 maturity levels",
      "se-49": "ISO 9001 is quality management standard",
      "se-50": "Six Sigma uses DMAIC methodology",
      "se-51": "SOLID principles for object-oriented design",
      "se-52": "High cohesion, low coupling is good design",
      "se-53": "DevOps combines Development and Operations",
      "se-54": "CI/CD = Continuous Integration/Continuous Deployment",
      "se-55": "Microservices architecture uses small independent services",
      "se-56": "Cloud models: IaaS, PaaS, SaaS, FaaS",
      "se-57":
        "Waterfall phases: Requirements, Design, Implementation, Testing, Deployment, Maintenance",
      "se-58": "Agile Manifesto values individuals over processes",
      "se-59": "Scrum artifacts: Product Backlog, Sprint Backlog, Increment",
      "se-60":
        "Scrum events: Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective",
      "se-61":
        "Black box techniques: Equivalence Partitioning, Boundary Value Analysis",
      "se-62": "White box techniques: Statement Coverage, Decision Coverage",
      "se-63": "Test Case components: ID, Description, Steps, Expected Result",
      "se-64":
        "Defect life cycle: New → Assigned → Open → Fixed → Retest → Closed",
      "se-65":
        "Class relationships: Association, Inheritance, Aggregation, Composition",
      "se-66": "Use Case relationships: Include, Extend, Generalization",
      "se-67":
        "Creational patterns: Singleton, Factory, Abstract Factory, Builder, Prototype",
      "se-68":
        "Structural patterns: Adapter, Bridge, Composite, Decorator, Facade",
      "se-69": "Behavioral patterns: Observer, Strategy, Command, Iterator",
      "se-70": "Function Points measure software size",
      "se-71": "Cyclomatic Complexity V(G) = E - N + 2P",
      "se-72":
        "Project phases: Initiation, Planning, Execution, Monitoring, Closure",
      "se-73": "Risk responses: Avoid, Transfer, Mitigate, Accept",
      "se-74": "Requirement types: Functional, Non-functional, Domain, User",
      "se-75":
        "Elicitation techniques: Interviews, Questionnaires, Observation",
      "se-76": "Feasibility types: Technical, Economic, Legal, Operational",
      "se-77":
        "Re-engineering: Reverse Engineering → Restructuring → Forward Engineering",
      "se-78": "Legacy strategies: Scrap, Continue, Re-engineer, Outsource",
      "se-79":
        "Software quality attributes: Correctness, Reliability, Efficiency",
      "se-80": "Audit types: Internal, External, Certification",
      "se-81": "Peer reviews: Walkthroughs, Inspections, Code Reviews",
      "se-82":
        "Architectural styles: Layered, Client-Server, MVC, Microservices",
      "se-83": "Cohesion types from good to bad: Functional → Coincidental",
      "se-84": "Coupling types from good to bad: Data → Content",
      "se-85": "DevOps practices: CI, CD, Infrastructure as Code",
      "se-86": "Cloud service models comparison",
      "se-87": "Security practices: Secure SDLC, Threat Modeling",
      "se-88": "Agile principles focus on customer collaboration",
      "se-89": "Waterfall is document-driven",
      "se-90": "Spiral model has four quadrants",
      "se-91": "Prototype can be throwaway or evolutionary",
      "se-92": "RAD uses workshops and time-boxing",
      "se-93": "Kanban uses visualization and WIP limits",
      "se-94": "Lean focuses on eliminating waste",
      "se-95": "Performance testing types: Load, Stress, Soak, Spike",
      "se-96": "Security testing finds vulnerabilities",
      "se-97": "State diagram shows state transitions",
      "se-98": "Component diagram shows physical components",
      "se-99": "Deployment diagram shows hardware nodes",
      "se-100": "Design patterns improve code maintainability",
    },
    examStrategy: {
      topicWeightage: [
        "SDLC Models: 15-20 questions",
        "Agile & Scrum: 15-18 questions",
        "Software Testing: 12-15 questions",
        "UML Diagrams: 10-12 questions",
        "Design Patterns: 8-10 questions",
        "Project Management: 8-10 questions",
        "Software Metrics: 5-7 questions",
        "Requirement Engineering: 5-7 questions",
        "Software Maintenance: 4-6 questions",
        "Quality Assurance: 4-6 questions",
        "Software Architecture: 3-5 questions",
        "Emerging Trends: 3-5 questions",
      ],
      preparationTips: [
        "1. Start with SDLC models - master Waterfall, V-Model, Spiral, Agile differences",
        "2. Memorize Agile Manifesto values and Scrum framework thoroughly",
        "3. Understand testing levels and types with examples",
        "4. Practice UML diagram symbols and relationships",
        "5. Learn at least 2-3 design patterns from each category",
        "6. Remember important formulas: PERT, EVM, Cyclomatic Complexity",
        "7. Create flashcards for acronyms: SDLC, RAD, UML, SRS, CMMI, etc.",
        "8. Solve previous year question papers",
        "9. Focus on concept application, not just rote learning",
        "10. Review weak areas regularly",
      ],
      timeManagement: [
        "PERT: (O + 4M + P) / 6",
        "Cyclomatic Complexity: V(G) = E - N + 2P",
        "EVM: CV = EV - AC, SV = EV - PV",
        "CPI = EV / AC, SPI = EV / PV",
        "Function Points: EI + EO + EQ + ILF + EIF",

        "SDLC: Software Development Life Cycle",
        "RAD: Rapid Application Development",
        "UML: Unified Modeling Language",
        "SRS: Software Requirements Specification",
        "UAT: User Acceptance Testing",
        "TDD: Test Driven Development",
        "XP: Extreme Programming",
        "WBS: Work Breakdown Structure",
        "CPM: Critical Path Method",
        "PERT: Program Evaluation Review Technique",
        "EVM: Earned Value Management",
        "CMMI: Capability Maturity Model Integration",
        "ISO: International Organization for Standardization",
        "QA: Quality Assurance",
        "QC: Quality Control",
        "CI/CD: Continuous Integration/Continuous Deployment",
        "IaaS/PaaS/SaaS: Cloud Service Models",
        "MVC: Model-View-Controller",
        "LOC: Lines of Code",
        "FP: Function Points",
      ],
    },
  },

  "Data Structures": {
    icon: "fas fa-database",
    color: "#10B981",
    tricks: [
      // Arrays & Strings (8 tricks)
      {
        title: "Array Memory Calculation",
        content:
          "Address = Base + (i * size). For 2D: Row-major: Base + [(i - r1) * n + (j - c1)] * size. Column-major: Base + [(j - c1) * m + (i - r1)] * size",
      },
      {
        title: "Array Types",
        content:
          "1D (Vector), 2D (Matrix), Multi-dimensional, Dynamic (Resizable), Jagged (Rows different lengths), Sparse (Mostly zero)",
      },
      {
        title: "String Operations",
        content:
          "Length | Concatenation | Substring | Comparison | Reversal | Palindrome check | Pattern matching (Naive, KMP, Rabin-Karp)",
      },
      {
        title: "Sparse Matrix Storage",
        content:
          "Triplet format: (row, col, value) | Compressed Sparse Row (CSR): values, column indices, row pointers",
      },
      {
        title: "Array Rotations",
        content:
          "1. Juggling algorithm (GCD based) | 2. Reversal algorithm | 3. Block swap algorithm",
      },
      {
        title: "String Matching Algorithms",
        content:
          "Naive: O(mn) | KMP: O(m+n) uses LPS array | Rabin-Karp: O(mn) worst, O(m+n) avg with hash | Boyer-Moore: O(mn) worst, O(n/m) best",
      },
      {
        title: "Array Searching Techniques",
        content:
          "Linear: O(n) | Binary: O(log n) sorted | Jump: O(√n) | Interpolation: O(log log n) uniform",
      },
      {
        title: "Common Array Problems",
        content:
          "Find duplicates | Find missing number | Majority element | Maximum subarray sum | Equilibrium index | Leaders in array",
      },

      // Linked Lists (10 tricks)
      {
        title: "Linked List Types",
        content:
          "Singly (1 link) | Doubly (2 links) | Circular (last→first) | Multiply (multiple dimensions) | XOR (space optimized) | Skip (fast search)",
      },
      {
        title: "LL Operations Complexity",
        content:
          "Access: O(n) | Search: O(n) | Insertion: O(1) at head, O(n) elsewhere | Deletion: O(1) head, O(n) elsewhere",
      },
      {
        title: "Reverse Linked List Methods",
        content:
          "1. Iterative (3 pointers) | 2. Recursive | 3. Stack based | 4. Reverse in groups",
      },
      {
        title: "Cycle Detection Algorithms",
        content:
          "Floyd's Cycle: Fast(2x) & slow pointers | Brent's Algorithm: Teleportation method | Hash Table: Store visited nodes",
      },
      {
        title: "Find Middle Node",
        content:
          "Tortoise & Hare: Fast(2x) & slow pointers. Fast reaches end, slow at middle",
      },
      {
        title: "Merge Two Sorted Lists",
        content:
          "Compare heads, attach smaller, move pointer. Recursive/Iterative approaches. Time: O(m+n)",
      },
      {
        title: "Common LL Problems",
        content:
          "Nth from end | Palindrome check | Intersection point | Sort list (merge sort) | Remove duplicates | Rotate list",
      },
      {
        title: "Skip List Properties",
        content:
          "Probabilistic data structure | Multiple levels | Expected O(log n) search | Used in Redis, Lucene",
      },
      {
        title: "XOR Linked List",
        content:
          "Space efficient | Stores XOR of prev & next addresses | Requires 2 nodes for traversal | Not commonly used",
      },
      {
        title: "Linked List vs Array",
        content:
          "LL: Dynamic size, O(1) insertion at head | Array: Random access, cache friendly, fixed size",
      },

      // Stacks (8 tricks)
      {
        title: "Stack Operations",
        content:
          "Push: Add to top | Pop: Remove from top | Peek/Top: View top | isEmpty: Check empty | isFull: Check full (array)",
      },
      {
        title: "Stack Applications",
        content:
          "Function calls (call stack) | Expression evaluation | Undo operations | Backtracking | Browser history | Parenthesis matching",
      },
      {
        title: "Expression Conversion",
        content:
          "Infix to Postfix: Use stack, precedence rules | Postfix evaluation: Push operands, pop for operators",
      },
      {
        title: "Parentheses Matching",
        content:
          "Push opening brackets | Pop & match closing brackets | Stack empty at end → balanced",
      },
      {
        title: "Two Stacks in One Array",
        content:
          "Start 1 from left, 2 from right | Grow towards each other | Overflow when top1 + 1 = top2",
      },
      {
        title: "Min/Max Stack",
        content:
          "Main stack + auxiliary stack | Push: Push to main, push min/max to aux | Pop: Pop from both",
      },
      {
        title: "Stack Implementation Choices",
        content:
          "Array: Fixed size, faster | Linked List: Dynamic, slower | Dynamic Array: Resizable, amortized O(1)",
      },
      {
        title: "Common Stack Problems",
        content:
          "Next greater element | Stock span problem | Largest rectangle histogram | Celebrity problem | Tower of Hanoi",
      },

      // Queues (8 tricks)
      {
        title: "Queue Operations",
        content:
          "Enqueue: Add to rear | Dequeue: Remove from front | Front: Get front | Rear: Get rear | isEmpty | isFull",
      },
      {
        title: "Queue Types",
        content:
          "Simple (FIFO) | Circular (efficient) | Priority (weighted) | Double-ended (Deque) | Input/Output restricted",
      },
      {
        title: "Circular Queue Implementation",
        content:
          "Use array with modulo arithmetic | front = (front + 1) % capacity | rear = (rear + 1) % capacity",
      },
      {
        title: "Priority Queue Types",
        content:
          "Min-PQ: Smallest priority first | Max-PQ: Largest priority first | Implementation: Binary Heap, Fibonacci Heap",
      },
      {
        title: "Deque Operations",
        content:
          "InsertFront | InsertRear | DeleteFront | DeleteRear | GetFront | GetRear | isEmpty | isFull",
      },
      {
        title: "Queue Applications",
        content:
          "BFS traversal | CPU scheduling | Print spooling | Message queues | Cache implementation",
      },
      {
        title: "Queue Implementation Choices",
        content:
          "Array: Fixed size, O(1) operations | Linked List: Dynamic, O(1) operations | Circular Array: Efficient space",
      },
      {
        title: "Common Queue Problems",
        content:
          "Generate binary numbers | Reverse queue | Interleave queue halves | LRU Cache | Sliding window maximum",
      },

      // Trees (12 tricks)
      {
        title: "Tree Terminology",
        content:
          "Root (top) | Node (element) | Edge (connection) | Parent/Child | Leaf (no children) | Height/Depth | Degree (children)",
      },
      {
        title: "Binary Tree Types",
        content:
          "Full/Strict: 0 or 2 children | Complete: All levels filled except last, left to right | Perfect: All leaves same level | Balanced: |Height diff| ≤ 1",
      },
      {
        title: "Tree Traversals",
        content:
          "Inorder (LNR) | Preorder (NLR) | Postorder (LRN) | Level order (BFS) | Reverse level order | Boundary traversal",
      },
      {
        title: "Binary Search Tree Properties",
        content:
          "Left < Parent < Right | No duplicates (usually) | Inorder gives sorted order | Operations: O(h) time",
      },
      {
        title: "BST Operations",
        content:
          "Search: Compare & go left/right | Insert: Find spot & add | Delete: 3 cases (leaf, one child, two children)",
      },
      {
        title: "AVL Tree Rotations",
        content:
          "LL: Right rotate | RR: Left rotate | LR: Left then right rotate | RL: Right then left rotate",
      },
      {
        title: "Red-Black Tree Properties",
        content:
          "1. Node red/black | 2. Root black | 3. Red nodes have black children | 4. Black height same all paths",
      },
      {
        title: "Heap Properties",
        content:
          "Complete binary tree | Min-heap: Parent ≤ children | Max-heap: Parent ≥ children | Array representation: parent(i)=⌊(i-1)/2⌋",
      },
      {
        title: "Tree vs Binary Tree",
        content:
          "Tree: Any children | Binary Tree: Max 2 children | Binary Search Tree: Sorted | Heap: Complete, heap property",
      },
      {
        title: "Segment Tree Applications",
        content:
          "Range queries (sum, min, max) | Range updates | Time: Build O(n), Query O(log n), Update O(log n)",
      },
      {
        title: "Trie Structure",
        content:
          "Prefix tree | Each node = character | Path = word | Used for dictionaries, autocomplete, IP routing",
      },
      {
        title: "Common Tree Problems",
        content:
          "Height/diameter | Check BST | LCA | Views (top, bottom, left, right) | Construct from traversals",
      },

      // Graphs (10 tricks)
      {
        title: "Graph Terminology",
        content:
          "Vertex/Node | Edge/Arc | Directed/Undirected | Weighted/Unweighted | Path/Cycle | Connected/Disconnected",
      },
      {
        title: "Graph Representations",
        content:
          "Adjacency Matrix: O(V²) space | Adjacency List: O(V+E) space | Edge List: O(E) space",
      },
      {
        title: "Graph Traversals",
        content:
          "BFS: Queue, shortest path in unweighted | DFS: Stack/Recursion, connected components | Applications differ",
      },
      {
        title: "Shortest Path Algorithms",
        content:
          "Dijkstra: Non-negative weights, O(E log V) | Bellman-Ford: Negative weights, O(VE) | Floyd-Warshall: All pairs, O(V³)",
      },
      {
        title: "Minimum Spanning Tree",
        content:
          "Prim's: Greedy, O(E log V) | Kruskal's: Sort edges, Union-Find, O(E log E)",
      },
      {
        title: "Topological Sort",
        content:
          "DFS with stack | Kahn's algorithm (indegree) | Works only on DAGs | Used for task scheduling",
      },
      {
        title: "Union-Find (Disjoint Set)",
        content:
          "Union by rank | Path compression | Operations nearly O(1) | Used in Kruskal's, cycle detection",
      },
      {
        title: "Graph Types",
        content:
          "Simple (no loops) | Complete (all connected) | Bipartite (2 colorable) | Tree (acyclic connected) | DAG (no cycles)",
      },
      {
        title: "Cycle Detection Methods",
        content:
          "Undirected: Union-Find, DFS with parent | Directed: DFS with recursion stack, topological sort",
      },
      {
        title: "Common Graph Problems",
        content:
          "Connected components | Strongly connected | Articulation points | Bridges | Hamiltonian/Eulerian paths",
      },

      // Hashing (6 tricks)
      {
        title: "Hash Function Properties",
        content:
          "Deterministic (same key → same hash) | Uniform distribution | Fast computation | Minimal collisions",
      },
      {
        title: "Collision Resolution",
        content:
          "Chaining: Linked lists in buckets | Open Addressing: Linear/Quadratic probing, Double hashing | Robin Hood hashing",
      },
      {
        title: "Load Factor",
        content:
          "α = n/m (items/slots) | High α → more collisions | Rehash when α > threshold (usually 0.75)",
      },
      {
        title: "Hash Table Operations",
        content:
          "Insert: Hash, handle collision | Search: Hash, probe | Delete: Mark tombstone or rehash",
      },
      {
        title: "Perfect Hashing",
        content:
          "No collisions for given set | Two-level hashing | Static data | O(1) worst-case",
      },
      {
        title: "Common Hash Applications",
        content:
          "Dictionaries | Symbol tables | Caches | Database indexing | Cryptography | Bloom filters",
      },

      // Sorting Algorithms (10 tricks)
      {
        title: "Sorting Algorithm Comparison",
        content:
          "Bubble: O(n²), stable | Selection: O(n²), unstable | Insertion: O(n²), stable | Merge: O(n log n), stable | Quick: O(n²) worst, O(n log n) avg, unstable | Heap: O(n log n), unstable",
      },
      {
        title: "Quick Sort Partition",
        content:
          "Lomuto: Last element pivot | Hoare: First element pivot | Dutch National Flag: 3-way partition for duplicates",
      },
      {
        title: "Merge Sort Merge Step",
        content:
          "Divide array into halves | Recursively sort | Merge using temporary array | Stable sort",
      },
      {
        title: "Heap Sort Steps",
        content:
          "Build max heap from array | Repeatedly extract max (swap with last) | Heapify down | In-place, not stable",
      },
      {
        title: "Counting Sort",
        content:
          "Non-comparison | O(n+k) time, O(k) space | Integer keys in range | Stable if implemented carefully",
      },
      {
        title: "Radix Sort",
        content:
          "Sort by digits (LSD/MSD) | Uses counting sort as subroutine | O(d*(n+k)) time | Stable",
      },
      {
        title: "Bucket Sort",
        content:
          "Divide into buckets | Sort buckets individually | Concatenate | O(n+k) average",
      },
      {
        title: "Shell Sort",
        content:
          "Generalization of insertion sort | Gap sequence (Knuth: 3k+1) | Unstable | O(n log n) to O(n²)",
      },
      {
        title: "Stability in Sorting",
        content:
          "Stable: Bubble, Insertion, Merge, Counting, Radix | Unstable: Selection, Quick, Heap, Shell",
      },
      {
        title: "When to Use Which Sort",
        content:
          "Small n: Insertion | Large n: Quick/Merge/Heap | Almost sorted: Insertion | Limited memory: Heap | Integer keys: Counting/Radix",
      },

      // Searching Algorithms (6 tricks)
      {
        title: "Binary Search Conditions",
        content:
          "Array must be sorted | Works on monotonic functions | O(log n) time | Iterative/Recursive",
      },
      {
        title: "Binary Search Variations",
        content:
          "First occurrence | Last occurrence | Count occurrences | Floor/Ceiling | Rotated array search",
      },
      {
        title: "Interpolation Search",
        content:
          "Works on uniformly distributed sorted data | Uses formula: pos = lo + [(x - arr[lo]) * (hi - lo) / (arr[hi] - arr[lo])] | O(log log n) average",
      },
      {
        title: "Exponential Search",
        content:
          "For unbounded/infinite arrays | Find range then binary search | O(log n) time",
      },
      {
        title: "Jump Search",
        content:
          "Block size = √n | Jump blocks then linear search | O(√n) time | Between linear & binary",
      },
      {
        title: "Ternary Search",
        content:
          "Divide into 3 parts | For unimodal functions | O(log₃ n) time | Slower than binary",
      },

      // Advanced Data Structures (6 tricks)
      {
        title: "B-Tree Properties",
        content:
          "Self-balancing | Multi-way search tree | Order m: min ⌈m/2⌉ children, max m children | Used in databases, file systems",
      },
      {
        title: "B+ Tree vs B-Tree",
        content:
          "B+: All data in leaves, leaves linked | B: Data in all nodes | B+ better for range queries, databases",
      },
      {
        title: "Fenwick Tree (BIT)",
        content:
          "Binary Indexed Tree | O(log n) update & query | Space O(n) | Prefix sums, range updates",
      },
      {
        title: "Suffix Array & Tree",
        content:
          "Suffix Array: Sorted suffixes | Suffix Tree: Compressed trie of suffixes | Used for pattern matching, LCP",
      },
      {
        title: "Bloom Filter",
        content:
          "Probabilistic data structure | False positives possible, no false negatives | Space efficient | Membership test",
      },
      {
        title: "Skip List",
        content:
          "Multi-level linked list | Expected O(log n) search | Used in Redis, LevelDB | Alternative to balanced trees",
      },
    ],

    detailedNotes: {
      Arrays: {
        keyConcepts: [
          "Contiguous memory allocation",
          "Random access O(1) using index",
          "Fixed size (static) or dynamic (resizable)",
          "Multi-dimensional arrays stored in row/column major",
          "Time complexities: Access O(1), Search O(n), Insert O(n), Delete O(n)",
        ],
        importantPoints: [
          "0-based indexing most common",
          "Memory address calculation: Base + (index * element_size)",
          "Dynamic arrays (ArrayList, Vector) amortized O(1) insertion",
          "Jagged arrays: Arrays of arrays with different lengths",
          "Sparse arrays: Store only non-zero elements to save space",
        ],
        memoryAids: [
          "Array operations: CRUD - Create, Read, Update, Delete",
          "Row-major: Row by row (C/C++/Java)",
          "Column-major: Column by column (Fortran/Matlab)",
        ],
      },
      LinkedLists: {
        keyConcepts: [
          "Non-contiguous memory allocation",
          "Sequential access only",
          "Dynamic size, easy insertion/deletion",
          "Each node contains data and pointer(s)",
          "Types: Singly, Doubly, Circular, XOR, Skip",
        ],
        importantPoints: [
          "Head pointer points to first node",
          "Tail pointer (optional) points to last node",
          "Dummy/sentinel nodes simplify operations",
          "Circular lists have last node pointing to first",
          "Skip lists provide O(log n) search with multiple levels",
        ],
        memoryAids: [
          "LL traversal: While current != null, move to next",
          "Reverse LL: Previous, Current, Next pointers",
          "Cycle detection: Floyd's Tortoise and Hare",
        ],
      },
      StacksQueues: {
        keyConcepts: [
          "Stacks: LIFO (Last In First Out)",
          "Queues: FIFO (First In First Out)",
          "Abstract Data Types (ADTs)",
          "Can be implemented using arrays or linked lists",
          "Applications: Function calls, BFS/DFS, expression evaluation",
        ],
        importantPoints: [
          "Stack operations: push, pop, peek, isEmpty",
          "Queue operations: enqueue, dequeue, front, rear",
          "Circular queue avoids false overflow",
          "Priority queue: Element with highest/lowest priority first",
          "Deque: Double-ended queue, insert/delete both ends",
        ],
        memoryAids: [
          "Stack: Like stack of plates",
          "Queue: Like queue at ticket counter",
          "Priority Queue: Like hospital emergency room",
        ],
      },
      Trees: {
        keyConcepts: [
          "Hierarchical data structure",
          "Root node with parent-child relationships",
          "Binary trees: Max 2 children per node",
          "Binary Search Trees: Sorted ordering",
          "Balanced trees: AVL, Red-Black, B-trees",
        ],
        importantPoints: [
          "Tree height: Longest path from root to leaf",
          "Tree depth: Distance from root to node",
          "Full binary tree: 0 or 2 children",
          "Complete binary tree: All levels filled except last",
          "Heap: Complete binary tree with heap property",
        ],
        memoryAids: [
          "BST property: Left < Parent < Right",
          "Traversals: Inorder (LNR), Preorder (NLR), Postorder (LRN)",
          "AVL rotations: LL, RR, LR, RL",
        ],
      },
      Graphs: {
        keyConcepts: [
          "Vertices (nodes) and edges (connections)",
          "Directed vs Undirected",
          "Weighted vs Unweighted",
          "Cyclic vs Acyclic",
          "Connected vs Disconnected",
        ],
        importantPoints: [
          "Adjacency matrix: O(V²) space, O(1) edge check",
          "Adjacency list: O(V+E) space, efficient for sparse graphs",
          "BFS: Shortest path in unweighted graphs",
          "DFS: Connected components, topological sort",
          "MST: Minimum edges connecting all vertices",
        ],
        memoryAids: [
          "BFS uses Queue, DFS uses Stack",
          "Dijkstra: Greedy, non-negative weights",
          "Prim vs Kruskal: Both find MST differently",
        ],
      },
      SortingSearching: {
        keyConcepts: [
          "Comparison vs Non-comparison sorts",
          "In-place vs Not in-place",
          "Stable vs Unstable sorts",
          "Internal vs External sorting",
          "Divide & Conquer, Greedy, Dynamic approaches",
        ],
        importantPoints: [
          "Quick sort: Average O(n log n), worst O(n²), in-place",
          "Merge sort: Always O(n log n), stable, needs extra space",
          "Heap sort: O(n log n), in-place, not stable",
          "Binary search: O(log n), requires sorted array",
          "Linear search: O(n), works on any array",
        ],
        memoryAids: [
          "Sorting: Quick (pivot), Merge (divide), Heap (priority)",
          "Searching: Binary (half), Linear (one by one)",
          "Stability: Bubble, Insertion, Merge are stable",
        ],
      },
    },

    quickReference: {
      "ds-1": "Array provides O(1) random access",
      "ds-2": "Linked list provides O(1) insertion at head",
      "ds-3": "Stack follows LIFO principle",
      "ds-4": "Queue follows FIFO principle",
      "ds-5": "Binary tree has maximum 2 children per node",
      "ds-6": "BST left subtree < root < right subtree",
      "ds-7": "AVL tree is height balanced binary tree",
      "ds-8": "Heap is complete binary tree with heap property",
      "ds-9": "Graph vertices connected by edges",
      "ds-10": "Hash table provides O(1) average search time",
      "ds-11": "Bubble sort time complexity O(n²)",
      "ds-12": "Merge sort time complexity O(n log n)",
      "ds-13": "Quick sort worst case O(n²), average O(n log n)",
      "ds-14": "Binary search requires sorted array",
      "ds-15": "Linear search works on unsorted array",
      "ds-16": "DFS uses stack, BFS uses queue",
      "ds-17": "Dijkstra finds shortest path in weighted graphs",
      "ds-18": "Prim and Kruskal find Minimum Spanning Tree",
      "ds-19": "Topological sort works only on DAGs",
      "ds-20": "Linked list nodes contain data and pointer",
      "ds-21": "Circular queue prevents false overflow",
      "ds-22": "Deque allows insertion/deletion at both ends",
      "ds-23": "Priority queue processes highest priority first",
      "ds-24": "Tree height = longest root to leaf path",
      "ds-25": "Tree degree = maximum children of any node",
      "ds-26": "Full binary tree: 0 or 2 children per node",
      "ds-27": "Complete binary tree: filled left to right",
      "ds-28": "Balanced tree: |left height - right height| ≤ 1",
      "ds-29": "Red-black tree maintains color properties",
      "ds-30": "B-tree used for disk-based storage",
      "ds-31": "Trie used for dictionary implementations",
      "ds-101": "Segment tree for range queries",
      "ds-32": "Fenwick tree for prefix sums",
      "ds-33": "Union-Find for disjoint sets",
      "ds-34": "Adjacency matrix: O(V²) space",
      "ds-35": "Adjacency list: O(V+E) space",
      "ds-36": "Graph connectivity: Strongly vs Weakly",
      "ds-37": "Articulation point: Removal disconnects graph",
      "ds-38": "Bridge: Removal increases components",
      "ds-39": "Eulerian path: Visits every edge once",
      "ds-40": "Hamiltonian path: Visits every vertex once",
      "ds-41": "Hash function should minimize collisions",
      "ds-42": "Collision resolution: Chaining, Open addressing",
      "ds-43": "Load factor = n/m (items/slots)",
      "ds-44": "Perfect hashing: No collisions",
      "ds-45": "Bloom filter: Probabilistic, space efficient",
      "ds-46": "Insertion sort: O(n²), stable, good for small n",
      "ds-47": "Selection sort: O(n²), unstable, in-place",
      "ds-48": "Shell sort: Gap-based insertion sort",
      "ds-49": "Counting sort: O(n+k), non-comparison",
      "ds-50": "Radix sort: Digit by digit sorting",
      "ds-51": "Bucket sort: Divide into buckets",
      "ds-52": "Interpolation search: O(log log n) average",
      "ds-53": "Exponential search: For unbounded arrays",
      "ds-54": "Jump search: O(√n) time",
      "ds-55": "Ternary search: Divide into 3 parts",
      "ds-56": "Skip list: Multi-level linked list",
      "ds-57": "B+ tree: All data in leaves, leaves linked",
      "ds-58": "Suffix tree: Compressed trie of suffixes",
      "ds-59": "Graph coloring: Chromatic number",
      "ds-60": "Maximum flow: Ford-Fulkerson algorithm",
      "ds-61": "Matching: Hopcroft-Karp for bipartite",
      "ds-62": "TSP: Traveling Salesman Problem",
      "ds-63": "NP-Complete problems",
      "ds-64": "Dynamic programming applications",
      "ds-65": "Greedy algorithm properties",
      "ds-66": "Backtracking: Try possibilities, undo",
      "ds-67": "Divide and conquer: Break, solve, combine",
      "ds-68": "Recursion base case essential",
      "ds-69": "Memoization: Store computed results",
      "ds-70": "Tabulation: Bottom-up DP",
      "ds-71": "Time complexity analysis",
      "ds-72": "Space complexity analysis",
      "ds-73": "Big O: Upper bound",
      "ds-74": "Big Ω: Lower bound",
      "ds-75": "Big Θ: Tight bound",
      "ds-76": "Amortized analysis",
      "ds-77": "Best, Average, Worst case",
      "ds-78": "Asymptotic notation rules",
      "ds-79": "Recurrence relation solving",
      "ds-80": "Master theorem for divide & conquer",
      "ds-81": "Array rotation algorithms",
      "ds-82": "Kadane's algorithm: Maximum subarray",
      "ds-83": "Moore's voting: Majority element",
      "ds-84": "Dutch national flag: 3-way partition",
      "ds-85": "Reservoir sampling: Random selection",
      "ds-86": "Knuth shuffle: Random permutation",
      "ds-87": "Josephus problem: Circular elimination",
      "ds-88": "N-queens problem: Backtracking",
      "ds-89": "Sudoku solver: Constraint satisfaction",
      "ds-90": "Knapsack problem: DP solution",
      "ds-91": "Longest common subsequence",
      "ds-92": "Edit distance: Levenshtein",
      "ds-93": "Matrix chain multiplication",
      "ds-94": "Coin change problem",
      "ds-95": "Fibonacci: Recursive vs DP",
      "ds-96": "Tower of Hanoi: Recursive",
      "ds-97": "KMP algorithm: Pattern matching",
      "ds-98": "Rabin-Karp: Hashing for strings",
      "ds-99": "Boyer-Moore: Pattern skipping",
      "ds-100": "Data structure selection criteria",
    },

    examStrategy: {
      topicWeightage: [
        "Arrays & Strings: 15-18 questions",
        "Linked Lists: 10-12 questions",
        "Stacks & Queues: 8-10 questions",
        "Trees: 15-18 questions",
        "Graphs: 12-15 questions",
        "Hashing: 6-8 questions",
        "Sorting Algorithms: 8-10 questions",
        "Searching Algorithms: 6-8 questions",
        "Advanced DS: 4-6 questions",
        "Time/Space Complexity: 4-6 questions",
      ],
      preparationTips: [
        "1. Master time/space complexities of all operations",
        "2. Practice implementation of all major data structures",
        "3. Memorize traversal algorithms for trees and graphs",
        "4. Understand sorting algorithm trade-offs",
        "5. Practice common problems for each data structure",
        "6. Learn to select appropriate DS for given problem",
        "7. Draw diagrams for tree/graph problems",
        "8. Practice recurrence relation solving",
        "9. Understand worst/average/best case scenarios",
        "10. Solve previous year questions with time limits",
      ],
      timeManagement: [
        "Array access: O(1)",
        "Array search: O(n)",
        "Linked list access: O(n)",
        "Linked list insertion at head: O(1)",
        "Stack/Queue operations: O(1)",
        "BST operations: O(h), worst O(n)",
        "AVL operations: O(log n)",
        "Hash table operations: O(1) average",
        "Binary search: O(log n)",
        "Linear search: O(n)",
        "Bubble/Selection/Insertion sort: O(n²)",
        "Merge/Heap sort: O(n log n)",
        "Quick sort: O(n log n) average, O(n²) worst",
        "BFS/DFS: O(V+E)",
        "Dijkstra: O(E log V)",
        "Prim/Kruskal: O(E log V)",

        "Binary Search (iterative/recursive)",
        "Quick Sort (Lomuto/Hoare partition)",
        "Merge Sort (merge function)",
        "Heap Sort (heapify)",
        "BFS & DFS traversal",
        "Dijkstra's shortest path",
        "Prim's/Kruskal's MST",
        "Topological sort (Kahn's/DFS)",
        "Union-Find with path compression",
        "KMP pattern matching",
        "Kadane's maximum subarray",
        "Moore's voting algorithm",
        "Floyd's cycle detection",
        "AVL tree rotations",
        "Hash table collision resolution",
      ],
    },
  },

  "Web Technology": {
    icon: "fas fa-globe",
    color: "#F59E0B",
    tricks: [
      // HTTP & Web Basics (8 tricks)
      {
        title: "HTTP Methods (CRUD)",
        content: "Create=POST, Read=GET, Update=PUT/PATCH, Delete=DELETE",
        example: "GET /api/users (Read users), POST /api/users (Create user)",
      },
      {
        title: "HTTP Status Codes",
        content:
          "1xx=Info, 2xx=Success, 3xx=Redirect, 4xx=Client Error, 5xx=Server Error",
        example: "200=OK, 404=Not Found, 500=Internal Server Error",
      },
      {
        title: "HTTP vs HTTPS",
        content:
          "HTTP: Unencrypted, port 80 | HTTPS: Encrypted with SSL/TLS, port 443",
        example: "HTTPS prevents man-in-the-middle attacks",
      },
      {
        title: "URL Structure",
        content: "protocol://domain:port/path?query#fragment",
        example: "https://example.com:443/products?id=1#section2",
      },
      {
        title: "Cookies vs LocalStorage vs SessionStorage",
        content:
          "Cookies: 4KB, server accessible | LocalStorage: 5-10MB, persistent | SessionStorage: 5-10MB, tab session only",
        example: "Cookies for auth tokens, LocalStorage for preferences",
      },
      {
        title: "Web Architecture Components",
        content:
          "Client (Browser) → Web Server → Application Server → Database Server",
        example: "Chrome → Nginx → Node.js → MongoDB",
      },
      {
        title: "MIME Types",
        content:
          "text/html, text/css, application/javascript, image/jpeg, application/json",
        example: "Content-Type: application/json in HTTP headers",
      },
      {
        title: "RESTful API Principles",
        content:
          "Stateless, Client-Server, Cacheable, Uniform Interface, Layered System",
        example: "Use proper HTTP methods and status codes",
      },

      // HTML (8 tricks)
      {
        title: "HTML5 Semantic Elements",
        content:
          "<header>, <nav>, <main>, <article>, <section>, <aside>, <footer>",
        example: "<article> for blog posts, <nav> for navigation",
      },
      {
        title: "HTML Forms",
        content: "<form>, <input>, <textarea>, <select>, <button>, <label>",
        example: "input types: text, email, password, number, date, file",
      },
      {
        title: "HTML5 New Input Types",
        content: "email, url, tel, number, range, date, time, color, search",
        example: "<input type='email' required> for email validation",
      },
      {
        title: "HTML Attributes",
        content:
          "Global: id, class, style, title | Form: required, disabled, readonly, placeholder, pattern",
        example: "<input required pattern='[A-Za-z]{3,}'>",
      },
      {
        title: "HTML Media Elements",
        content: "<img>, <audio>, <video>, <source>, <track>",
        example: "<video controls><source src='movie.mp4'></video>",
      },
      {
        title: "HTML Meta Tags",
        content:
          "<title>, <meta charset>, <meta name='viewport'>, <meta name='description'>",
        example:
          "<meta name='viewport' content='width=device-width, initial-scale=1'>",
      },
      {
        title: "HTML Canvas vs SVG",
        content:
          "Canvas: Pixel-based, JavaScript drawn | SVG: Vector-based, XML format",
        example: "Canvas for games, SVG for logos",
      },
      {
        title: "HTML Accessibility (ARIA)",
        content: "aria-label, aria-describedby, aria-hidden, role attributes",
        example: "<button aria-label='Close menu'>X</button>",
      },

      // CSS (12 tricks)
      {
        title: "CSS Box Model",
        content: "Content → Padding → Border → Margin (Inside to Outside)",
        example: "width/height applies to content only by default",
      },
      {
        title: "CSS Positioning",
        content: "static (default), relative, absolute, fixed, sticky",
        example: "position: fixed for navigation bars",
      },
      {
        title: "CSS Display Properties",
        content: "block, inline, inline-block, flex, grid, none",
        example: "display: flex for modern layouts",
      },
      {
        title: "CSS Selector Specificity",
        content: "Inline (1000) > ID (100) > Class (10) > Element (1)",
        example: "#header .nav (110) beats .nav .item (20)",
      },
      {
        title: "CSS Flexbox",
        content:
          "Container: display: flex; justify-content; align-items | Items: flex-grow; flex-shrink; flex-basis",
        example: "justify-content: space-between for equal spacing",
      },
      {
        title: "CSS Grid",
        content:
          "Container: display: grid; grid-template-columns; grid-gap | Items: grid-column; grid-row",
        example: "grid-template-columns: repeat(3, 1fr)",
      },
      {
        title: "CSS Media Queries",
        content: "@media (max-width: 768px) { ... } for responsive design",
        example: "Mobile-first: min-width queries",
      },
      {
        title: "CSS Transitions & Animations",
        content:
          "Transition: property duration timing-function delay | Animation: @keyframes name",
        example: "transition: all 0.3s ease-in-out",
      },
      {
        title: "CSS Pseudo-classes",
        content:
          ":hover, :focus, :active, :visited, :nth-child(), :first-child, :last-child",
        example: "a:hover { color: red; }",
      },
      {
        title: "CSS Pseudo-elements",
        content: "::before, ::after, ::first-line, ::first-letter, ::selection",
        example: ".price::before { content: '$'; }",
      },
      {
        title: "CSS Variables (Custom Properties)",
        content:
          ":root { --primary-color: #007bff; } | color: var(--primary-color);",
        example: "Change theme colors easily",
      },
      {
        title: "CSS Units",
        content: "px, %, em, rem, vw, vh, vmin, vmax",
        example: "font-size: 1rem (root em), padding: 2em (parent em)",
      },

      // JavaScript (15 tricks)
      {
        title: "JavaScript Data Types",
        content:
          "Primitive: string, number, boolean, null, undefined, symbol, bigint | Reference: object, array, function",
        example: "typeof null returns 'object' (historical bug)",
      },
      {
        title: "Variable Declarations",
        content:
          "var (function-scoped), let (block-scoped), const (block-scoped, immutable reference)",
        example: "Use const by default, let when reassigning",
      },
      {
        title: "JavaScript Hoisting",
        content:
          "Variable and function declarations are hoisted to top of scope | let/const are hoisted but not initialized",
        example: "Can call function before declaration",
      },
      {
        title: "Closures",
        content:
          "Function + its lexical scope | Inner function remembers outer scope",
        example: "Used for data privacy and currying",
      },
      {
        title: "Event Bubbling & Capturing",
        content:
          "Capturing (down) → Target → Bubbling (up) | Use event.stopPropagation()",
        example: "document.addEventListener('click', fn, true) for capturing",
      },
      {
        title: "Prototypal Inheritance",
        content:
          "Objects inherit from other objects via prototype chain | __proto__ property",
        example: "arr.__proto__ === Array.prototype",
      },
      {
        title: "Call, Apply, Bind",
        content:
          "call(obj, arg1, arg2) | apply(obj, [args]) | bind(obj) returns new function",
        example: "Use bind for event handlers to maintain context",
      },
      {
        title: "Promises",
        content:
          "Pending → Fulfilled/Rejected | .then(), .catch(), .finally() | Promise.all(), Promise.race()",
        example: "fetch(url).then(res => res.json()).then(data => ...)",
      },
      {
        title: "Async/Await",
        content:
          "async function returns Promise | await pauses execution until Promise settles",
        example: "async function getData() { const data = await fetch(url); }",
      },
      {
        title: "ES6+ Features",
        content:
          "Arrow functions, Template literals, Destructuring, Spread/Rest, Modules, Classes",
        example: "const {name, age} = person; // destructuring",
      },
      {
        title: "DOM Manipulation",
        content:
          "document.getElementById(), querySelector(), createElement(), appendChild(), removeChild()",
        example: "document.querySelector('.class').style.color = 'red'",
      },
      {
        title: "Event Listeners",
        content:
          "addEventListener(event, callback, options) | removeEventListener()",
        example: "element.addEventListener('click', handleClick, {once: true})",
      },
      {
        title: "JSON Methods",
        content: "JSON.stringify(obj) → string | JSON.parse(string) → obj",
        example: "LocalStorage stores strings, need JSON.stringify()",
      },
      {
        title: "Error Handling",
        content:
          "try { ... } catch(error) { ... } finally { ... } | throw new Error('message')",
        example: "Handle fetch errors with try-catch",
      },
      {
        title: "JavaScript Timing Events",
        content:
          "setTimeout(fn, ms) runs once | setInterval(fn, ms) repeats | clearTimeout(), clearInterval()",
        example: "Debouncing with setTimeout",
      },

      // React (10 tricks)
      {
        title: "React Components",
        content:
          "Class: extends React.Component, render() | Function: return JSX, use hooks",
        example: "Functional components with hooks are modern standard",
      },
      {
        title: "React Lifecycle Methods (Class)",
        content:
          "Mounting: constructor, render, componentDidMount | Updating: shouldComponentUpdate, render, componentDidUpdate | Unmounting: componentWillUnmount",
        example: "componentDidMount for API calls",
      },
      {
        title: "React Hooks",
        content:
          "useState (state), useEffect (side effects), useContext (context), useReducer (complex state), useRef (DOM refs)",
        example: "const [count, setCount] = useState(0)",
      },
      {
        title: "React Props & State",
        content:
          "Props: Passed from parent, read-only | State: Internal, mutable with setState/setter",
        example: "State for dynamic data, props for configuration",
      },
      {
        title: "React Event Handling",
        content:
          "onClick, onChange, onSubmit | Synthetic events (cross-browser wrapper)",
        example: "<button onClick={(e) => handleClick(e)}>Click</button>",
      },
      {
        title: "React Conditional Rendering",
        content: "&& operator, ternary ? :, if statements outside JSX",
        example: "{isLoggedIn && <Dashboard />}",
      },
      {
        title: "React Lists & Keys",
        content:
          "map() to render lists | keys help React identify which items changed",
        example: "users.map(user => <li key={user.id}>{user.name}</li>)",
      },
      {
        title: "React Context API",
        content: "CreateContext, Provider, Consumer | useContext hook",
        example: "Avoids prop drilling for global state",
      },
      {
        title: "React Router",
        content: "BrowserRouter, Route, Link, Switch, useHistory, useParams",
        example: "<Route path='/users/:id' component={User} />",
      },
      {
        title: "React Performance",
        content:
          "React.memo(), useMemo(), useCallback(), shouldComponentUpdate()",
        example: "Memoize expensive calculations with useMemo",
      },

      // Node.js & Backend (8 tricks)
      {
        title: "Node.js Modules",
        content: "CommonJS: require(), module.exports | ES6: import, export",
        example: "const fs = require('fs') // CommonJS",
      },
      {
        title: "Express.js Middleware",
        content:
          "Functions that execute between request and response | app.use(), app.get(), app.post()",
        example: "app.use(express.json()) parses JSON bodies",
      },
      {
        title: "REST API Design",
        content:
          "Resources as nouns, HTTP methods as verbs | GET /users, POST /users, PUT /users/:id, DELETE /users/:id",
        example: "Use plural resource names",
      },
      {
        title: "Middleware Types",
        content:
          "Application-level, Router-level, Error-handling, Built-in, Third-party",
        example: "morgan for logging, cors for cross-origin",
      },
      {
        title: "Database Connection",
        content: "MongoDB (Mongoose), PostgreSQL (pg), MySQL (mysql2)",
        example: "mongoose.connect('mongodb://localhost/db')",
      },
      {
        title: "Authentication Methods",
        content: "Session-based, Token-based (JWT), OAuth (Google, Facebook)",
        example: "JWT: header.payload.signature",
      },
      {
        title: "File Uploads",
        content: "multer middleware for handling multipart/form-data",
        example: "const upload = multer({dest: 'uploads/'})",
      },
      {
        title: "Error Handling in Express",
        content: "Try-catch, Error middleware, Custom error classes",
        example:
          "app.use((err, req, res, next) => { res.status(500).json({error}) })",
      },

      // Security & Deployment (6 tricks)
      {
        title: "Web Security Threats",
        content:
          "XSS (Cross-site Scripting), CSRF (Cross-site Request Forgery), SQL Injection, Clickjacking",
        example: "Sanitize user input to prevent XSS",
      },
      {
        title: "CORS (Cross-Origin Resource Sharing)",
        content:
          "Browser security feature | Access-Control-Allow-Origin header",
        example: "app.use(cors()) to enable all origins",
      },
      {
        title: "Webpack & Bundling",
        content: "Bundles modules, minifies code, tree shaking, code splitting",
        example: "Create React App uses Webpack internally",
      },
      {
        title: "Deployment Platforms",
        content:
          "Static: Netlify, Vercel | Full-stack: Heroku, AWS, DigitalOcean, Railway",
        example: "Vercel for React apps, Heroku for Node.js",
      },
      {
        title: "Environment Variables",
        content: "process.env in Node.js | .env files for local development",
        example: "API keys in .env, not in code",
      },
      {
        title: "Web Performance Optimization",
        content: "Minification, Compression, Caching, Lazy loading, CDN",
        example: "Use Lighthouse for performance audits",
      },
    ],

    detailedNotes: {
      HTML5: {
        keyConcepts: [
          "Semantic HTML improves accessibility and SEO",
          "HTML5 introduced new semantic elements: header, nav, main, article, section, aside, footer",
          "Form validation with required, pattern, min, max attributes",
          "Media elements: video, audio with built-in controls",
          "Canvas API for dynamic graphics, SVG for vector images",
          "Web Storage: localStorage and sessionStorage",
          "Geolocation API, Web Workers, Web Sockets",
        ],
        importantPoints: [
          "Always include <!DOCTYPE html> at the beginning",
          "Use semantic elements instead of generic divs",
          "Set viewport meta tag for responsive design: <meta name='viewport' content='width=device-width, initial-scale=1'>",
          "HTML5 provides form input types: email, url, tel, number, date, color, range",
          "Use aria-* attributes for accessibility",
          "Canvas is pixel-based (raster), SVG is vector-based",
          "HTML5 APIs: Geolocation, Drag and Drop, Web Storage, Web Workers",
        ],
        memoryAids: [
          "HTML5 semantic elements: HN MAS AF (Header, Nav, Main, Article, Section, Aside, Footer)",
          "Input types: EUTN DR CS (Email, URL, Tel, Number, Date, Range, Color, Search)",
          "Form attributes: RDPP (Required, Disabled, Placeholder, Pattern)",
        ],
      },

      CSS3: {
        keyConcepts: [
          "Box Model: content, padding, border, margin",
          "Flexbox for 1D layouts (row or column)",
          "CSS Grid for 2D layouts (rows and columns)",
          "Responsive Design with media queries",
          "CSS Transitions and Animations",
          "CSS Variables (Custom Properties)",
          "CSS Selectors: class, id, attribute, pseudo-classes, pseudo-elements",
        ],
        importantPoints: [
          "Use box-sizing: border-box for predictable sizing",
          "Flexbox properties: display: flex, justify-content, align-items, flex-direction",
          "Grid properties: display: grid, grid-template-columns, grid-template-rows, gap",
          "Mobile-first approach: min-width media queries",
          "CSS Specificity: inline > id > class > element",
          "Use rem units for font sizes (relative to root)",
          "CSS Custom Properties enable theming and reusable values",
        ],
        memoryAids: [
          "Box Model order: CPBM (Content, Padding, Border, Margin)",
          "Flexbox container properties: DJAF (Display, Justify-content, Align-items, Flex-direction)",
          "Media query breakpoints: 576px (sm), 768px (md), 992px (lg), 1200px (xl)",
        ],
      },

      "JavaScript ES6+": {
        keyConcepts: [
          "Let and const for block scoping (vs var function scoping)",
          "Arrow functions with lexical this binding",
          "Template literals for string interpolation",
          "Destructuring assignment for arrays and objects",
          "Spread and Rest operators (...)",
          "Modules: import and export",
          "Promises and async/await for asynchronous code",
          "Classes and inheritance",
        ],
        importantPoints: [
          "Use const by default, let when reassignment needed",
          "Arrow functions don't have their own this, arguments, super, or new.target",
          "Template literals use backticks and ${expression}",
          "Destructuring: const {name, age} = person",
          "Spread copies arrays/objects: [...arr], {...obj}",
          "Rest collects arguments: function(...args)",
          "Async functions always return a Promise",
          "Classes are syntactic sugar over prototype inheritance",
        ],
        memoryAids: [
          "Variable declarations: VLC (Var, Let, Const)",
          "Arrow function syntax: (params) => expression",
          "Destructuring: {} for objects, [] for arrays",
        ],
      },

      React: {
        keyConcepts: [
          "Components: Function and Class components",
          "Props (input) and State (internal data)",
          "Lifecycle Methods (Class) and Hooks (Function)",
          "Event Handling with synthetic events",
          "Conditional Rendering",
          "Lists and Keys",
          "Context API for global state",
          "React Router for navigation",
        ],
        importantPoints: [
          "Functional components with hooks are recommended",
          "State should be immutable: use setState or useState setter",
          "Keys help React identify which items have changed",
          "Use React.memo() to prevent unnecessary re-renders",
          "Context avoids prop drilling but consider Redux for complex state",
          "React Router enables SPA (Single Page Application) navigation",
          "useEffect replaces componentDidMount, componentDidUpdate, componentWillUnmount",
        ],
        memoryAids: [
          "React hooks: SUSERC (useState, useEffect, useContext, useReducer, useCallback)",
          "Class lifecycle: CMU (ComponentDidMount, ComponentDidUpdate, ComponentWillUnmount)",
          "Event handlers: onClick, onChange, onSubmit",
        ],
      },

      "Node.js & Express": {
        keyConcepts: [
          "Node.js runtime for server-side JavaScript",
          "Express.js web application framework",
          "Middleware architecture",
          "RESTful API design",
          "Database integration (MongoDB, PostgreSQL)",
          "Authentication and Authorization",
          "Error handling and logging",
          "Environment configuration",
        ],
        importantPoints: [
          "Node.js is single-threaded with event loop",
          "Express middleware executes in order of definition",
          "REST APIs use HTTP methods: GET, POST, PUT, DELETE",
          "Use Mongoose for MongoDB, Sequelize for SQL databases",
          "Implement JWT for token-based authentication",
          "Always validate and sanitize user input",
          "Use environment variables for configuration",
          "Implement proper error handling middleware",
        ],
        memoryAids: [
          "Express methods: GPPD (GET, POST, PUT, DELETE)",
          "Middleware order matters: First defined, first executed",
          "REST principles: SCUL (Stateless, Client-Server, Uniform Interface, Layered System)",
        ],
      },

      "Web Security": {
        keyConcepts: [
          "Cross-Site Scripting (XSS)",
          "Cross-Site Request Forgery (CSRF)",
          "SQL Injection",
          "Authentication and Session Management",
          "HTTPS and SSL/TLS",
          "Content Security Policy (CSP)",
          "CORS (Cross-Origin Resource Sharing)",
          "Input Validation and Sanitization",
        ],
        importantPoints: [
          "Sanitize all user input to prevent XSS",
          "Use CSRF tokens for state-changing requests",
          "Parameterized queries prevent SQL injection",
          "Store passwords with bcrypt (hashing + salting)",
          "Always use HTTPS in production",
          "Implement CSP headers to restrict resource loading",
          "Configure CORS properly for API security",
          "Validate input on both client and server sides",
        ],
        memoryAids: [
          "Security threats: XSS, CSRF, SQLi",
          "Password storage: Hash + Salt + Pepper",
          "HTTPS ports: 443, HTTP port: 80",
        ],
      },
    },

    quickReference: {
      "web-1":
        "HTTP Methods: GET (read), POST (create), PUT (update), DELETE (remove)",
      "web-2": "HTTP Status Codes: 200 OK, 404 Not Found, 500 Server Error",
      "web-3":
        "HTML5 semantic elements: header, nav, main, article, section, aside, footer",
      "web-4": "CSS Box Model: Content → Padding → Border → Margin",
      "web-5": "CSS Flexbox: display: flex; justify-content; align-items",
      "web-6":
        "CSS Grid: display: grid; grid-template-columns; grid-template-rows",
      "web-7":
        "JavaScript data types: string, number, boolean, null, undefined, object, symbol",
      "web-8":
        "let = block-scoped, const = block-scoped constant, var = function-scoped",
      "web-9": "Arrow functions: (params) => expression",
      "web-10": "Template literals use backticks: `Hello ${name}`",
      "web-11": "Destructuring: const {name, age} = person",
      "web-12": "Spread operator: [...array], {...object}",
      "web-13": "React hooks: useState, useEffect, useContext",
      "web-14":
        "React useState: const [state, setState] = useState(initialValue)",
      "web-15":
        "React useEffect: useEffect(() => { effect; return cleanup; }, [deps])",
      "web-16": "React props are read-only, state is mutable",
      "web-17": "Node.js: JavaScript runtime built on Chrome's V8 engine",
      "web-18": "Express.js: Minimal web framework for Node.js",
      "web-19": "REST API uses HTTP methods: GET, POST, PUT, DELETE",
      "web-20":
        "Middleware: Functions that process requests before reaching route handlers",
      "web-21":
        "JWT: JSON Web Token for authentication (header.payload.signature)",
      "web-22": "CORS: Cross-Origin Resource Sharing, security feature",
      "web-23": "SQL Injection: Prevent with parameterized queries",
      "web-24": "XSS: Cross-Site Scripting, prevent by sanitizing user input",
      "web-25": "CSRF: Cross-Site Request Forgery, prevent with tokens",
      "web-26": "localStorage: Persistent, 5-10MB, same origin",
      "web-27": "sessionStorage: Tab session only, 5-10MB",
      "web-28": "Cookies: 4KB, sent with every request, can be server-set",
      "web-29": "Promises: Pending → Fulfilled/Rejected, use .then(), .catch()",
      "web-30":
        "Async/Await: async function returns Promise, await pauses execution",
      "web-31": "DOM: Document Object Model, tree representation of HTML",
      "web-32": "Event Bubbling: Events propagate from target to root",
      "web-33": "Event Capturing: Events propagate from root to target",
      "web-34": "Closure: Function with access to its lexical scope",
      "web-35":
        "Hoisting: Variable/function declarations moved to top of scope",
      "web-36": "Prototype: Object from which other objects inherit properties",
      "web-37": "Call, Apply, Bind: Methods to set 'this' context",
      "web-38": "JSON: JavaScript Object Notation, lightweight data format",
      "web-39": "API: Application Programming Interface",
      "web-40": "REST: Representational State Transfer, architectural style",
      "web-41":
        "SPA: Single Page Application, loads once then updates dynamically",
      "web-42": "MPA: Multi Page Application, traditional page reloads",
      "web-43": "SEO: Search Engine Optimization",
      "web-44": "Responsive Design: Adapts to different screen sizes",
      "web-45": "Media Queries: @media (max-width: 768px) { ... }",
      "web-46": "Viewport: Browser's visible area, set with meta tag",
      "web-47": "CSS Specificity: Inline > ID > Class > Element",
      "web-48": "CSS Units: px, %, em, rem, vw, vh",
      "web-49": "CSS Variables: --name: value; use: var(--name)",
      "web-50": "CSS Transitions: transition: property duration timing delay",
      "web-51": "CSS Animations: @keyframes name { from {} to {} }",
      "web-52": "Pseudo-classes: :hover, :focus, :active, :nth-child()",
      "web-53": "Pseudo-elements: ::before, ::after, ::first-line",
      "web-54": "HTML Forms: <form>, <input>, <select>, <textarea>, <button>",
      "web-55": "Form Validation: required, pattern, min, max, minlength",
      "web-56":
        "HTML5 APIs: Geolocation, Web Storage, Web Workers, Web Sockets",
      "web-57": "Canvas: Pixel-based graphics with JavaScript API",
      "web-58": "SVG: Vector graphics in XML format",
      "web-59": "Webpack: Module bundler for JavaScript applications",
      "web-60": "Babel: JavaScript compiler for converting ES6+ to ES5",
      "web-61": "npm: Node Package Manager, default for Node.js",
      "web-62": "yarn: Alternative package manager, faster than npm",
      "web-63": "Git: Version control system",
      "web-64": "GitHub: Platform for Git repository hosting",
      "web-65": "DevOps: Development + Operations, CI/CD practices",
      "web-66": "CI/CD: Continuous Integration/Continuous Deployment",
      "web-67": "Docker: Containerization platform",
      "web-68": "Kubernetes: Container orchestration platform",
      "web-69": "AWS: Amazon Web Services, cloud platform",
      "web-70": "Azure: Microsoft cloud platform",
      "web-71": "Google Cloud: Google's cloud platform",
      "web-72": "Heroku: Platform as a Service (PaaS)",
      "web-73": "Netlify: Hosting platform for static sites",
      "web-74": "Vercel: Hosting platform for frontend frameworks",
      "web-75": "Firebase: Google's mobile/web development platform",
      "web-76": "MongoDB: NoSQL document database",
      "web-77": "PostgreSQL: Open-source relational database",
      "web-78": "MySQL: Popular open-source relational database",
      "web-79": "SQLite: Lightweight, file-based SQL database",
      "web-80": "Redis: In-memory key-value store",
      "web-81": "GraphQL: Query language for APIs (alternative to REST)",
      "web-82": "Apollo: Implementation of GraphQL",
      "web-83": "Redux: State management library for JavaScript apps",
      "web-84": "MobX: Alternative state management library",
      "web-85": "TypeScript: Typed superset of JavaScript",
      "web-86":
        "WebSockets: Protocol for real-time bidirectional communication",
      "web-87": "Socket.io: Library for real-time web applications",
      "web-88": "OAuth: Authorization framework for third-party access",
      "web-89": "JWT vs Session: Token-based vs server-side session",
      "web-90": "bcrypt: Password hashing function",
      "web-91": "Helmet.js: Security middleware for Express",
      "web-92": "CORS middleware: app.use(cors())",
      "web-93": "Body Parser: Middleware to parse request bodies",
      "web-94": "Morgan: HTTP request logger middleware",
      "web-95": "Mongoose: MongoDB object modeling for Node.js",
      "web-96": "Sequelize: Promise-based Node.js ORM for SQL databases",
      "web-97": "Prisma: Next-generation ORM for Node.js",
      "web-98": "Next.js: React framework with server-side rendering",
      "web-99": "Gatsby: React-based static site generator",
      "web-100":
        "WebAssembly: Low-level language for web, runs at near-native speed",
    },

    examStrategy: {
      topicWeightage: [
        "HTML5 & Semantic Elements: 10-12 questions",
        "CSS3 & Layouts: 12-15 questions",
        "JavaScript Fundamentals: 15-18 questions",
        "React & Frontend Frameworks: 12-15 questions",
        "Node.js & Express: 8-10 questions",
        "Web APIs & Browser Features: 8-10 questions",
        "Web Security: 6-8 questions",
        "Performance & Optimization: 5-7 questions",
        "HTTP & Networking: 5-7 questions",
        "Tools & Deployment: 4-6 questions",
      ],
      preparationTips: [
        "1. Master HTML5 semantic elements and their appropriate usage",
        "2. Practice CSS Flexbox and Grid layouts thoroughly",
        "3. Understand JavaScript closures, promises, and async/await",
        "4. Learn React hooks (useState, useEffect, useContext) in depth",
        "5. Study HTTP methods, status codes, and REST principles",
        "6. Memorize common web security threats and prevention methods",
        "7. Practice DOM manipulation and event handling",
        "8. Understand the difference between localStorage, sessionStorage, and cookies",
        "9. Learn about CORS, CSP, and other security headers",
        "10. Practice with code snippets and understand output prediction",
      ],
      timeManagement: [
        "Event Bubbling vs Event Capturing",
        "Closures and Lexical Scoping",
        "Promises and Async/Await",
        "React Component Lifecycle",
        "CSS Specificity Calculation",
        "HTTP Methods and Status Codes",
        "RESTful API Design Principles",
        "XSS, CSRF, SQL Injection Prevention",
        "CORS and Same-Origin Policy",
        "Web Storage APIs Comparison",

        "Array methods: map, filter, reduce, forEach",
        "Object destructuring and spread operator",
        "Template literals and string interpolation",
        "Arrow functions vs regular functions",
        "Event handling in React vs vanilla JS",
        "Conditional rendering patterns in React",
        "Promise chaining and error handling",
        "Middleware pattern in Express.js",
        "Component composition in React",
        "State management patterns",

        "Explain the difference between == and ===",
        "What is hoisting in JavaScript?",
        "How does 'this' keyword work?",
        "Explain event delegation",
        "What are React hooks and why were they introduced?",
        "Difference between state and props",
        "Explain the virtual DOM",
        "What is JWT and how does it work?",
        "Explain CORS and how to handle it",
        "What are service workers and PWA?",
      ],
    },
  },

  "Database Management": {
    icon: "fas fa-database",
    color: "#EF4444",
    tricks: [
      // Database Fundamentals (10 tricks)
      {
        title: "ACID Properties",
        content:
          "Atomicity (All or nothing), Consistency (Valid state), Isolation (Concurrent transactions don't interfere), Durability (Committed data persists)",
        example: "Bank transfer: Debit & credit both succeed or both fail",
      },
      {
        title: "DBMS vs File System",
        content:
          "DBMS: Data independence, concurrency control, security, integrity | File System: No relationships, redundancy, inconsistency, security issues",
        example: "DBMS prevents data duplication (normalization)",
      },
      {
        title: "Three-Schema Architecture",
        content:
          "External (User views) → Conceptual (Logical structure) → Internal (Physical storage)",
        example: "Users see tables (external), DBMS sees data files (internal)",
      },
      {
        title: "Database Languages",
        content:
          "DDL (Define structure), DML (Manipulate data), DCL (Control access), TCL (Transaction control)",
        example: "CREATE/ALTER (DDL), SELECT/INSERT (DML), GRANT/REVOKE (DCL)",
      },
      {
        title: "Data Models",
        content:
          "Hierarchical (Tree), Network (Graph), Relational (Tables), ER (Entities-Relationships), Object-oriented",
        example: "Relational: Most common, uses SQL",
      },
      {
        title: "Keys in DBMS",
        content:
          "Super (Uniquely identifies), Candidate (Minimal super), Primary (Chosen candidate), Foreign (References primary), Alternate (Other candidates), Composite (Multiple attributes)",
        example: "PRIMARY KEY (unique), FOREIGN KEY (references)",
      },
      {
        title: "Entity-Relationship Model",
        content:
          "Entity (Rectangle), Attribute (Oval), Relationship (Diamond), Weak Entity (Double rectangle), Key Attribute (Underlined)",
        example:
          "Student (entity) → Enrolls in (relationship) → Course (entity)",
      },
      {
        title: "Cardinality Ratios",
        content:
          "One-to-One (1:1), One-to-Many (1:N), Many-to-One (N:1), Many-to-Many (M:N)",
        example: "Student:Course = M:N (multiple students in multiple courses)",
      },
      {
        title: "DBMS Architecture Types",
        content:
          "Centralized (Single location), Distributed (Multiple locations), Parallel (Multiple processors), Client-Server",
        example: "Bank with branches uses distributed DBMS",
      },
      {
        title: "Data Independence",
        content:
          "Logical (Conceptual schema changes don't affect apps), Physical (Internal schema changes don't affect conceptual)",
        example: "Adding index (physical) doesn't change queries (logical)",
      },

      // Normalization (8 tricks)
      {
        title: "Normalization Goals",
        content:
          "Reduce redundancy, eliminate anomalies (Insertion, Update, Deletion), improve data integrity, simplify structure",
        example: "Avoid storing same data in multiple places",
      },
      {
        title: "1NF (First Normal Form)",
        content:
          "Atomic values (no multi-valued attributes), single value per cell, unique column names",
        example: "Split 'Address' into Street, City, Zip (atomic)",
      },
      {
        title: "2NF (Second Normal Form)",
        content:
          "In 1NF + No partial dependency (non-prime depends on whole primary key)",
        example: "StudentID,CourseID → Grade (2NF), StudentID → Name (not 2NF)",
      },
      {
        title: "3NF (Third Normal Form)",
        content:
          "In 2NF + No transitive dependency (non-prime depends only on primary key)",
        example:
          "EmployeeID → DeptID → DeptName (DeptName transitively depends)",
      },
      {
        title: "BCNF (Boyce-Codd NF)",
        content: "Stricter 3NF: Every determinant must be candidate key",
        example: "For X → Y, X must be super key",
      },
      {
        title: "4NF (Fourth Normal Form)",
        content: "In BCNF + No multi-valued dependencies (except trivial)",
        example: "EmployeeID, Skill, Language (separate tables needed)",
      },
      {
        title: "5NF (Fifth Normal Form)",
        content: "In 4NF + No join dependency (lossless decomposition)",
        example: "Table can be reconstructed from projections without loss",
      },
      {
        title: "Normalization vs Denormalization",
        content:
          "Normalization: Less redundancy, more tables | Denormalization: More redundancy, fewer tables (for performance)",
        example: "Data warehouse often denormalized for fast queries",
      },

      // SQL Queries (15 tricks)
      {
        title: "SQL Data Types",
        content:
          "Numeric: INT, DECIMAL, FLOAT | String: CHAR, VARCHAR, TEXT | Date: DATE, TIME, DATETIME | Binary: BLOB",
        example: "VARCHAR(255) for variable-length strings",
      },
      {
        title: "SQL Constraints",
        content:
          "NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, DEFAULT, INDEX",
        example:
          "CREATE TABLE Students (ID INT PRIMARY KEY, Age INT CHECK(Age>=18))",
      },
      {
        title: "SELECT Statement",
        content:
          "SELECT columns FROM table WHERE condition GROUP BY columns HAVING condition ORDER BY columns",
        example:
          "SELECT name, salary FROM employees WHERE dept='Sales' ORDER BY salary DESC",
      },
      {
        title: "SQL JOIN Types",
        content:
          "INNER (Matching rows), LEFT (All left + matching right), RIGHT (All right + matching left), FULL (All from both), CROSS (Cartesian product), SELF (Join with itself)",
        example:
          "FROM Employees e INNER JOIN Departments d ON e.dept_id = d.id",
      },
      {
        title: "Aggregate Functions",
        content: "COUNT(), SUM(), AVG(), MIN(), MAX(), GROUP_CONCAT()",
        example: "SELECT dept, AVG(salary) FROM employees GROUP BY dept",
      },
      {
        title: "SQL Subqueries",
        content:
          "Scalar (Returns single value), Column (Returns column), Row (Returns row), Table (Returns table)",
        example:
          "SELECT name FROM employees WHERE salary > (SELECT AVG(salary) FROM employees)",
      },
      {
        title: "Set Operations",
        content:
          "UNION (All distinct rows), UNION ALL (All rows), INTERSECT (Common rows), EXCEPT/MINUS (Rows in first not in second)",
        example: "SELECT id FROM table1 UNION SELECT id FROM table2",
      },
      {
        title: "SQL Views",
        content:
          "Virtual table based on query result | CREATE VIEW name AS SELECT ... | Can be updated (with restrictions)",
        example:
          "CREATE VIEW HighSalary AS SELECT * FROM employees WHERE salary > 50000",
      },
      {
        title: "Indexes",
        content:
          "Clustered (Physical order), Non-clustered (Separate structure), Unique, Composite, Full-text",
        example: "CREATE INDEX idx_name ON employees(last_name, first_name)",
      },
      {
        title: "Transactions in SQL",
        content: "BEGIN TRANSACTION → SQL Statements → COMMIT/ROLLBACK",
        example:
          "BEGIN; UPDATE account SET balance=balance-100 WHERE id=1; COMMIT;",
      },
      {
        title: "Stored Procedures",
        content:
          "Precompiled SQL code stored in database | CREATE PROCEDURE name | EXECUTE/CALL name",
        example: "CREATE PROCEDURE GetEmployees AS SELECT * FROM employees",
      },
      {
        title: "Triggers",
        content:
          "Automatic actions on table events (INSERT, UPDATE, DELETE) | BEFORE/AFTER triggers",
        example:
          "CREATE TRIGGER audit AFTER INSERT ON employees FOR EACH ROW ...",
      },
      {
        title: "SQL Functions",
        content:
          "Scalar: UPPER(), LOWER(), ROUND(), CONCAT() | Aggregate: COUNT(), SUM() | Window: ROW_NUMBER(), RANK()",
        example: "SELECT UPPER(name), ROUND(salary,2) FROM employees",
      },
      {
        title: "Window Functions",
        content:
          "OVER() clause: PARTITION BY (groups), ORDER BY (order within group), ROWS/RANGE (frame)",
        example:
          "SELECT name, salary, AVG(salary) OVER(PARTITION BY dept) FROM employees",
      },
      {
        title: "Common Table Expressions (CTE)",
        content:
          "WITH cte_name AS (SELECT ...) SELECT * FROM cte_name | Recursive CTEs possible",
        example:
          "WITH HighSalary AS (SELECT * FROM employees WHERE salary>50000) SELECT * FROM HighSalary",
      },

      // Transaction Management (8 tricks)
      {
        title: "Transaction States",
        content: "Active → Partially Committed → Committed | Failed → Aborted",
        example: "Active (executing), Committed (saved), Aborted (rolled back)",
      },
      {
        title: "Concurrency Problems",
        content:
          "Dirty Read (Uncommitted), Non-repeatable Read (Changed), Phantom Read (New rows), Lost Update",
        example:
          "T1 reads, T2 updates, T1 reads different value (non-repeatable)",
      },
      {
        title: "Isolation Levels",
        content:
          "Read Uncommitted (Lowest), Read Committed, Repeatable Read, Serializable (Highest)",
        example: "SET TRANSACTION ISOLATION LEVEL READ COMMITTED",
      },
      {
        title: "Lock-based Protocols",
        content:
          "Shared Lock (S-lock: read), Exclusive Lock (X-lock: write) | Two-phase Locking (2PL): Growing → Shrinking",
        example: "Multiple shared locks allowed, exclusive lock exclusive",
      },
      {
        title: "Timestamp-based Protocols",
        content:
          "Assign timestamp to transactions | Read/Write timestamps for data items | Conflict resolved by timestamp order",
        example: "Older transaction (smaller timestamp) has priority",
      },
      {
        title: "Deadlock Handling",
        content:
          "Prevention (No hold & wait, circular wait), Avoidance (Banker's algorithm), Detection (Wait-for graph), Recovery (Victim selection)",
        example: "Wait-for graph cycle indicates deadlock",
      },
      {
        title: "Recovery Techniques",
        content:
          "Log-based (Undo/Redo), Checkpoint (Snapshot), Shadow paging (Copy-on-write)",
        example: "Write-ahead logging (WAL): Log before actual write",
      },
      {
        title: "ACR Properties",
        content:
          "Atomicity (Log), Consistency (Constraints), Isolation (Concurrency control), Durability (Recovery)",
        example: "Each property handled by different DBMS component",
      },

      // File Organization (6 tricks)
      {
        title: "File Organization Methods",
        content:
          "Heap (Unordered), Sequential (Ordered), Hash (Key-based), Indexed (With index), Clustered (Related records together)",
        example: "Hash file: Direct access via hash function",
      },
      {
        title: "Indexing Methods",
        content:
          "Primary (Clustered), Secondary (Non-clustered), Dense (Every record), Sparse (Some records), Multi-level (B-tree)",
        example: "B-tree: Balanced tree for fast search",
      },
      {
        title: "B-Tree Properties",
        content:
          "Balanced tree, All leaves same depth, Each node (except root) ≥ t-1 keys, Each node ≤ 2t-1 keys",
        example: "Used in databases for indexing",
      },
      {
        title: "B+ Tree vs B-Tree",
        content:
          "B+: All data in leaves, leaves linked sequentially | B: Data in all nodes | B+ better for range queries",
        example: "Databases use B+ trees for indexes",
      },
      {
        title: "Hashing Techniques",
        content:
          "Static: Modulo, Mid-square, Folding | Dynamic: Extendible, Linear hashing",
        example: "Hash(key) = key % table_size (modulo division)",
      },
      {
        title: "Collision Resolution",
        content:
          "Open addressing: Linear/Quadratic probing, Double hashing | Chaining: Linked lists in buckets",
        example: "Linear probing: h(key) = (h(key) + i) % size",
      },

      // Query Processing (8 tricks)
      {
        title: "Query Processing Steps",
        content: "Parsing & Translation → Optimization → Evaluation",
        example: "SQL → Parse tree → Optimized plan → Execution",
      },
      {
        title: "Query Optimization",
        content:
          "Heuristic (Rules-based), Cost-based (Statistics), Semantic (Meaning-based)",
        example: "Push selections down, use indexes, join ordering",
      },
      {
        title: "Join Algorithms",
        content:
          "Nested Loop (Brute force), Block Nested Loop (Buffer blocks), Index Nested Loop (Use index), Merge Join (Sorted), Hash Join (Hash tables)",
        example: "Hash join: Build hash table on smaller relation",
      },
      {
        title: "Selection Operations",
        content:
          "Linear search (Scan), Binary search (Sorted), Using index (Primary/secondary), Conjunctive selection",
        example: "Use index for equality, scan for range",
      },
      {
        title: "Sorting Algorithms for DB",
        content:
          "External merge sort (For large data), In-memory sort (Quick, heap)",
        example: "External sort: Divide, sort chunks, merge",
      },
      {
        title: "Query Evaluation Plans",
        content:
          "Materialized (Store intermediate), Pipelined (Stream results), Left-deep, Right-deep, Bushy trees",
        example: "Pipelining saves memory but may be slower",
      },
      {
        title: "Cost Estimation",
        content:
          "Statistics: Number of tuples, distinct values, min/max values, histograms",
        example: "Cost = Disk accesses + CPU time",
      },
      {
        title: "Database Statistics",
        content:
          "Catalog stores: Table size, Attribute cardinality, Index information, Distribution histograms",
        example: "UPDATE STATISTICS table_name",
      },

      // Advanced Topics (8 tricks)
      {
        title: "Distributed Databases",
        content:
          "Fragmentation (Horizontal/Vertical), Replication, Allocation, Distributed transactions",
        example: "Horizontal: Different rows at different sites",
      },
      {
        title: "NoSQL Databases",
        content:
          "Document (MongoDB), Key-Value (Redis), Column-family (Cassandra), Graph (Neo4j)",
        example: "MongoDB stores JSON-like documents",
      },
      {
        title: "Data Warehousing",
        content:
          "ETL (Extract, Transform, Load), Star schema, Snowflake schema, Fact tables, Dimension tables",
        example: "Star: Central fact table, surrounding dimensions",
      },
      {
        title: "OLTP vs OLAP",
        content:
          "OLTP: Transactional, many small updates | OLAP: Analytical, few complex queries",
        example: "Bank transactions (OLTP) vs sales analysis (OLAP)",
      },
      {
        title: "Data Mining",
        content:
          "Classification, Clustering, Association rules, Regression, Anomaly detection",
        example: "Market basket analysis: {bread} → {butter}",
      },
      {
        title: "Database Security",
        content:
          "Authentication, Authorization (GRANT/REVOKE), Encryption, Auditing, Inference control",
        example: "GRANT SELECT ON employees TO user1",
      },
      {
        title: "Database Tuning",
        content:
          "Index tuning, Query rewriting, Denormalization, Partitioning, Caching",
        example: "Add index on frequently queried columns",
      },
      {
        title: "Big Data Technologies",
        content:
          "Hadoop (HDFS, MapReduce), Spark (In-memory), Hive (SQL-like), NoSQL databases",
        example: "Hadoop for batch processing, Spark for real-time",
      },
    ],

    detailedNotes: {
      "Database Fundamentals": {
        keyConcepts: [
          "DBMS: Software to create, maintain, and manipulate databases",
          "Data: Raw facts, Information: Processed data with meaning",
          "Database Schema: Logical structure (intension)",
          "Database Instance: Actual data at a time (extension)",
          "Data Models: Conceptual representation of data",
          "Keys: Attributes used to identify records uniquely",
          "ER Model: Graphical representation of entities and relationships",
        ],
        importantPoints: [
          "ACID properties ensure transaction reliability",
          "Data independence allows changing storage without affecting applications",
          "Three-tier architecture separates user interface, application logic, and data storage",
          "Data dictionary stores metadata about the database",
          "Database administrator (DBA) manages DBMS operations",
          "Data redundancy leads to inconsistency and waste of storage",
          "Data integrity ensures accuracy and consistency of data",
        ],
        memoryAids: [
          "ACID: All Cats Isolate During naps (Atomicity, Consistency, Isolation, Durability)",
          "DBMS architecture: ECI (External, Conceptual, Internal)",
          "Database languages: DDDT (DDL, DML, DCL, TCL)",
        ],
      },

      "Relational Model & Normalization": {
        keyConcepts: [
          "Relation: Table with rows (tuples) and columns (attributes)",
          "Domain: Set of allowable values for an attribute",
          "Tuple: Row in a relation representing a single entity",
          "Attribute: Column in a relation representing a property",
          "Normalization: Process of organizing data to reduce redundancy",
          "Functional Dependency: X → Y means Y is determined by X",
          "Normal Forms: 1NF, 2NF, 3NF, BCNF, 4NF, 5NF",
        ],
        importantPoints: [
          "First Normal Form requires atomic values and no repeating groups",
          "Second Normal Form eliminates partial dependencies",
          "Third Normal Form eliminates transitive dependencies",
          "BCNF is stronger than 3NF (every determinant is candidate key)",
          "Denormalization is used for performance optimization in data warehouses",
          "Referential integrity ensures foreign key values match primary key values",
          "Entity integrity ensures primary key values are unique and not null",
        ],
        memoryAids: [
          "Normalization: 1NF (Atomic), 2NF (No partial), 3NF (No transitive)",
          "Dependencies: FD (Functional), MVD (Multi-valued), JD (Join)",
          "Keys: SCPFA (Super, Candidate, Primary, Foreign, Alternate)",
        ],
      },

      "SQL Programming": {
        keyConcepts: [
          "DDL: CREATE, ALTER, DROP, TRUNCATE, RENAME",
          "DML: SELECT, INSERT, UPDATE, DELETE",
          "DCL: GRANT, REVOKE",
          "TCL: COMMIT, ROLLBACK, SAVEPOINT",
          "Constraints: Rules enforced on data columns",
          "Joins: Combine rows from two or more tables",
          "Subqueries: Queries nested inside other queries",
        ],
        importantPoints: [
          "SELECT statement retrieves data from database",
          "WHERE clause filters rows, HAVING filters groups",
          "GROUP BY groups rows, ORDER BY sorts results",
          "Aggregate functions operate on sets of rows",
          "Views are virtual tables based on query results",
          "Indexes improve query performance but slow down updates",
          "Transactions ensure data consistency with COMMIT/ROLLBACK",
        ],
        memoryAids: [
          "SQL order: SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY",
          "Join types: ILRFC (Inner, Left, Right, Full, Cross)",
          "Constraints: NUPFC (NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK)",
        ],
      },

      "Transaction Management": {
        keyConcepts: [
          "Transaction: Sequence of operations performed as a single unit",
          "ACID properties: Atomicity, Consistency, Isolation, Durability",
          "Schedule: Sequence of operations from multiple transactions",
          "Serializability: Schedule equivalent to some serial schedule",
          "Locking: Mechanism to control concurrent access",
          "Deadlock: Two or more transactions waiting for each other",
          "Recovery: Restoring database after failure",
        ],
        importantPoints: [
          "Isolation levels control visibility of uncommitted changes",
          "Two-phase locking ensures serializability",
          "Timestamp ordering assigns timestamps to transactions",
          "Deadlock prevention methods: Wait-die, Wound-wait",
          "Log-based recovery uses undo/redo operations",
          "Checkpoints reduce recovery time by limiting log processing",
          "Write-ahead logging ensures log written before data",
        ],
        memoryAids: [
          "Isolation levels: RU, RC, RR, S (Read Uncommitted, Read Committed, Repeatable Read, Serializable)",
          "Lock types: S (Shared), X (Exclusive)",
          "Deadlock handling: PADR (Prevention, Avoidance, Detection, Recovery)",
        ],
      },

      "File Organization & Indexing": {
        keyConcepts: [
          "File organization: Physical arrangement of records in files",
          "Heap file: Records inserted at end of file",
          "Sequential file: Records ordered by key value",
          "Indexing: Data structure to speed up data retrieval",
          "Primary index: On ordering key field",
          "Secondary index: On non-ordering field",
          "Multi-level index: Index on index (B-tree)",
        ],
        importantPoints: [
          "B-tree is balanced tree structure for indexing",
          "B+ tree stores data only in leaf nodes, better for range queries",
          "Hashing provides direct access to records",
          "Static hashing uses fixed hash table size",
          "Dynamic hashing allows table to grow and shrink",
          "Clustering index determines physical order of data",
          "Dense index has entry for every search key value",
        ],
        memoryAids: [
          "File organizations: HSSI (Heap, Sequential, Sorted, Indexed)",
          "Index types: PSC (Primary, Secondary, Clustering)",
          "Hashing methods: MOD, MS, F (Modulo, Mid-square, Folding)",
        ],
      },

      "Advanced Database Concepts": {
        keyConcepts: [
          "Distributed DBMS: Database spread across multiple locations",
          "NoSQL: Non-relational databases for unstructured data",
          "Data warehouse: Central repository for analytical data",
          "OLAP: Online Analytical Processing for complex queries",
          "Data mining: Discovering patterns in large datasets",
          "Big Data: Extremely large datasets requiring special processing",
          "Database security: Protecting database from unauthorized access",
        ],
        importantPoints: [
          "CAP theorem: Consistency, Availability, Partition tolerance - pick two",
          "BASE properties: Basically Available, Soft state, Eventual consistency",
          "ETL process: Extract, Transform, Load for data warehousing",
          "Star schema: Fact table surrounded by dimension tables",
          "Snowflake schema: Normalized dimension tables",
          "Sharding: Horizontal partitioning across multiple servers",
          "Replication: Maintaining copies of data at different sites",
        ],
        memoryAids: [
          "NoSQL types: DKCG (Document, Key-Value, Column, Graph)",
          "Data warehouse: ETL (Extract, Transform, Load)",
          "CAP theorem: Choose 2 of 3 (Consistency, Availability, Partition tolerance)",
        ],
      },
    },

    quickReference: {
      "db-1": "DBMS: Database Management System manages databases",
      "db-2": "ACID: Atomicity, Consistency, Isolation, Durability",
      "db-3": "Three schema architecture: External, Conceptual, Internal",
      "db-4": "DDL: Data Definition Language (CREATE, ALTER, DROP)",
      "db-5":
        "DML: Data Manipulation Language (SELECT, INSERT, UPDATE, DELETE)",
      "db-6": "DCL: Data Control Language (GRANT, REVOKE)",
      "db-7": "TCL: Transaction Control Language (COMMIT, ROLLBACK, SAVEPOINT)",
      "db-8": "Primary Key: Uniquely identifies each record, NOT NULL",
      "db-9": "Foreign Key: References Primary Key of another table",
      "db-10":
        "Candidate Key: Minimal super key that uniquely identifies records",
      "db-11": "Super Key: Set of attributes that uniquely identifies records",
      "db-12": "Alternate Key: Candidate keys not chosen as primary key",
      "db-13": "Composite Key: Primary key consisting of multiple columns",
      "db-14": "1NF: First Normal Form - atomic values, no repeating groups",
      "db-15": "2NF: Second Normal Form - in 1NF + no partial dependency",
      "db-16": "3NF: Third Normal Form - in 2NF + no transitive dependency",
      "db-17": "BCNF: Boyce-Codd Normal Form - stricter than 3NF",
      "db-18": "Functional Dependency: X → Y means Y is determined by X",
      "db-19":
        "Partial Dependency: Non-prime attribute depends on part of primary key",
      "db-20":
        "Transitive Dependency: Non-prime attribute depends on another non-prime",
      "db-21": "ER Model: Entity-Relationship model for database design",
      "db-22": "Entity: Real-world object (rectangle in ER diagram)",
      "db-23": "Attribute: Property of entity (oval in ER diagram)",
      "db-24":
        "Relationship: Association between entities (diamond in ER diagram)",
      "db-25":
        "Cardinality: Number of instances in relationship (1:1, 1:N, M:N)",
      "db-26": "Weak Entity: Depends on another entity for existence",
      "db-27": "SQL: Structured Query Language for database operations",
      "db-28": "SELECT: Retrieves data from database",
      "db-29": "WHERE: Filters rows based on condition",
      "db-30": "GROUP BY: Groups rows that have same values",
      "db-31": "HAVING: Filters groups (used with GROUP BY)",
      "db-32": "ORDER BY: Sorts result set",
      "db-33": "JOIN: Combines rows from two or more tables",
      "db-34": "INNER JOIN: Returns matching rows from both tables",
      "db-35": "LEFT JOIN: Returns all rows from left table + matching right",
      "db-36": "RIGHT JOIN: Returns all rows from right table + matching left",
      "db-37":
        "FULL JOIN: Returns all rows when there's a match in either table",
      "db-38": "CROSS JOIN: Cartesian product of both tables",
      "db-39": "SELF JOIN: Join table with itself",
      "db-40": "UNION: Combines result sets of two SELECT statements",
      "db-41": "UNION ALL: UNION but allows duplicates",
      "db-42": "INTERSECT: Returns common rows from both SELECT statements",
      "db-43": "EXCEPT/MINUS: Returns rows from first SELECT not in second",
      "db-44": "Aggregate Functions: COUNT, SUM, AVG, MIN, MAX",
      "db-45":
        "Scalar Functions: Operate on single value (UPPER, LOWER, ROUND)",
      "db-46": "Subquery: Query within another query",
      "db-47": "View: Virtual table based on SELECT statement",
      "db-48": "Index: Improves data retrieval speed",
      "db-49": "Clustered Index: Determines physical order of data",
      "db-50": "Non-clustered Index: Separate structure from data",
      "db-51": "Transaction: Sequence of operations performed as single unit",
      "db-52": "COMMIT: Saves all changes made in current transaction",
      "db-53": "ROLLBACK: Undoes all changes made in current transaction",
      "db-54": "SAVEPOINT: Sets point within transaction to rollback to",
      "db-55": "ACID properties ensure reliable transactions",
      "db-56": "Atomicity: All or nothing execution",
      "db-57": "Consistency: Database remains in valid state",
      "db-58": "Isolation: Concurrent transactions don't interfere",
      "db-59": "Durability: Committed changes persist",
      "db-60":
        "Concurrency Problems: Dirty read, non-repeatable read, phantom read",
      "db-61":
        "Isolation Levels: Read Uncommitted, Read Committed, Repeatable Read, Serializable",
      "db-62": "Locking: Mechanism to control concurrent access",
      "db-63":
        "Shared Lock (S-lock): Allows reading, multiple transactions can hold",
      "db-64":
        "Exclusive Lock (X-lock): Allows writing, only one transaction can hold",
      "db-65": "Two-Phase Locking (2PL): Growing phase → Shrinking phase",
      "db-66": "Deadlock: Two transactions waiting for each other",
      "db-67": "Deadlock Prevention: No hold & wait, circular wait prevention",
      "db-68": "Deadlock Detection: Wait-for graph method",
      "db-69": "Deadlock Recovery: Victim selection and rollback",
      "db-70": "Recovery Techniques: Log-based, checkpoint, shadow paging",
      "db-71":
        "Write-Ahead Logging (WAL): Log written before actual data update",
      "db-72": "Checkpoint: Snapshot of database at specific time",
      "db-73": "Normalization: Reduces redundancy, eliminates anomalies",
      "db-74": "Denormalization: Introduces redundancy for performance",
      "db-75": "File Organization: Heap, sequential, hash, indexed sequential",
      "db-76": "Hashing: Direct access using hash function",
      "db-77": "Collision: Two keys hash to same location",
      "db-78": "Collision Resolution: Open addressing, chaining",
      "db-79": "B-tree: Balanced tree structure for indexing",
      "db-80": "B+ tree: All data in leaves, leaves linked sequentially",
      "db-81": "Distributed DBMS: Database spread across multiple locations",
      "db-82": "Fragmentation: Horizontal, vertical, mixed",
      "db-83": "Replication: Maintaining copies of data at different sites",
      "db-84":
        "CAP Theorem: Consistency, Availability, Partition tolerance (choose 2)",
      "db-85":
        "NoSQL: Non-relational databases (Document, Key-value, Column, Graph)",
      "db-86": "MongoDB: Document-oriented NoSQL database",
      "db-87": "Redis: In-memory key-value store",
      "db-88": "Cassandra: Column-family NoSQL database",
      "db-89": "Neo4j: Graph database",
      "db-90": "Data Warehouse: Central repository for analytical data",
      "db-91": "OLTP: Online Transaction Processing (many small transactions)",
      "db-92": "OLAP: Online Analytical Processing (few complex queries)",
      "db-93": "ETL: Extract, Transform, Load process",
      "db-94": "Star Schema: Fact table + dimension tables",
      "db-95": "Snowflake Schema: Normalized dimension tables",
      "db-96": "Data Mining: Discovering patterns in large datasets",
      "db-97": "Classification: Predicting category/class",
      "db-98": "Clustering: Grouping similar objects",
      "db-99": "Association Rules: Finding relationships between variables",
      "db-100":
        "Big Data: Extremely large datasets requiring special processing",
    },

    examStrategy: {
      topicWeightage: [
        "Database Fundamentals & Architecture: 8-10 questions",
        "ER Model & Relational Model: 10-12 questions",
        "Normalization & Functional Dependencies: 12-15 questions",
        "SQL Queries & Programming: 15-18 questions",
        "Transaction Management & Concurrency Control: 10-12 questions",
        "File Organization & Indexing: 8-10 questions",
        "Query Processing & Optimization: 6-8 questions",
        "Distributed Databases: 5-7 questions",
        "NoSQL & Advanced Topics: 4-6 questions",
        "Data Warehousing & Mining: 4-6 questions",
      ],
      preparationTips: [
        "1. Master SQL queries - practice SELECT statements with all clauses",
        "2. Understand normalization thoroughly (1NF, 2NF, 3NF, BCNF)",
        "3. Learn to identify functional dependencies and candidate keys",
        "4. Practice drawing ER diagrams and converting to relational schema",
        "5. Memorize ACID properties and transaction states",
        "6. Understand different types of joins and when to use them",
        "7. Learn about indexing methods (B-tree, B+ tree, hashing)",
        "8. Practice writing complex queries with subqueries and joins",
        "9. Understand concurrency problems and isolation levels",
        "10. Study NoSQL database types and their characteristics",
      ],
      timeManagement: [
        "Number of super keys: 2^(n-k) where n=total attributes, k=key attributes",
        "Degree of relation: Number of attributes",
        "Cardinality of relation: Number of tuples",
        "Selectivity = (Number of records satisfying condition) / (Total records)",
        "Join selectivity = (1/MAX(ndistinct(col1), ndistinct(col2)))",
        "Index height for B-tree: log_t(n) where t=minimum degree, n=number of keys",
        "SELECT with WHERE, GROUP BY, HAVING, ORDER BY",
        "INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN",
        "Correlated and non-correlated subqueries",
        "UNION, INTERSECT, EXCEPT operations",
        "Aggregate functions with GROUP BY",
        "Window functions (ROW_NUMBER, RANK, DENSE_RANK)",
        "Common Table Expressions (CTE)",
        "Views and Index creation",
        "Stored procedures and triggers",
        "Transaction control with COMMIT/ROLLBACK",

        "Find candidate keys and normalize to 3NF/BCNF",
        "Convert ER diagram to relational schema",
        "Write SQL queries for given requirements",
        "Identify functional dependencies",
        "Solve transaction schedules for serializability",
        "Calculate number of disk accesses for queries",
        "Design indexes for given query patterns",
        "Solve deadlock detection using wait-for graph",
        "Calculate cost of different join algorithms",
        "Design data warehouse schema (star/snowflake)",
      ],
    },
  },

 "Computer Networks": {
  icon: "fas fa-network-wired",
  color: "#8B5CF6",
  tricks: [
    // Network Fundamentals (10 tricks)
    {
      title: "OSI Model Layers",
      content: "Please Do Not Throw Sausage Pizza Away - Physical, Data Link, Network, Transport, Session, Presentation, Application",
      example: "Physical (cables) → Application (browser)"
    },
    {
      title: "TCP/IP Model Layers",
      content: "Network Interface, Internet, Transport, Application (4 layers vs OSI's 7)",
      example: "Combines OSI's Presentation & Session into Application layer"
    },
    {
      title: "Network Types by Area",
      content: "PAN (Personal: Bluetooth), LAN (Local: Office), MAN (Metropolitan: City), WAN (Wide: Internet)",
      example: "LAN in office building, WAN connecting cities"
    },
    {
      title: "Network Topologies",
      content: "Bus (Single cable), Star (Hub/switch), Ring (Token passing), Mesh (All connected), Tree (Hierarchical), Hybrid",
      example: "Star: Most common, easy to troubleshoot"
    },
    {
      title: "Transmission Modes",
      content: "Simplex (One way), Half-duplex (Two way, one at a time), Full-duplex (Both ways simultaneously)",
      example: "Radio (simplex), Walkie-talkie (half-duplex), Phone (full-duplex)"
    },
    {
      title: "Network Devices",
      content: "Hub (Layer 1, dumb), Switch (Layer 2, intelligent), Router (Layer 3, routes between networks), Gateway (Connects different protocols)",
      example: "Switch for LAN, Router for internet connection"
    },
    {
      title: "Data Transmission",
      content: "Analog (Continuous), Digital (Discrete) | Synchronous (Timed), Asynchronous (Start/stop bits) | Serial (One bit), Parallel (Multiple bits)",
      example: "Ethernet uses digital, synchronous, serial transmission"
    },
    {
      title: "Switching Techniques",
      content: "Circuit Switching (Dedicated path), Packet Switching (Store & forward), Message Switching (Store entire message)",
      example: "Telephone (circuit), Internet (packet)"
    },
    {
      title: "Multiplexing Techniques",
      content: "FDM (Frequency Division), TDM (Time Division), WDM (Wavelength Division), CDM (Code Division)",
      example: "Radio stations (FDM), CPU time sharing (TDM)"
    },
    {
      title: "Network Performance Metrics",
      content: "Bandwidth (Capacity), Throughput (Actual data rate), Latency (Delay), Jitter (Variation in delay), Packet Loss",
      example: "High bandwidth but high latency = slow video calls"
    },

    // Physical Layer (8 tricks)
    {
      title: "Transmission Media Types",
      content: "Guided: Twisted Pair (UTP/STP), Coaxial Cable, Fiber Optics | Unguided: Radio Waves, Microwaves, Infrared",
      example: "UTP for Ethernet, Fiber for backbone"
    },
    {
      title: "UTP Cable Categories",
      content: "Cat 3 (10 Mbps), Cat 5 (100 Mbps), Cat 5e (1 Gbps), Cat 6 (10 Gbps), Cat 6a (10 Gbps longer), Cat 7 (10 Gbps shielded)",
      example: "Cat 5e most common for home/office"
    },
    {
      title: "Fiber Optics Types",
      content: "Single-mode (Long distance, laser), Multi-mode (Short distance, LED) | Core diameter: Single (9µm), Multi (50/62.5µm)",
      example: "Single-mode for ISPs, Multi-mode for campus"
    },
    {
      title: "Wireless Standards",
      content: "WiFi: 802.11a/b/g/n/ac/ax | Bluetooth: 802.15.1 | Zigbee: 802.15.4",
      example: "802.11ac = WiFi 5, 802.11ax = WiFi 6"
    },
    {
      title: "IEEE 802 Standards",
      content: "802.3 (Ethernet), 802.11 (WiFi), 802.15 (WPAN), 802.16 (WiMAX), 802.1Q (VLAN)",
      example: "802.3 defines Ethernet frame format"
    },
    {
      title: "Line Coding Schemes",
      content: "Unipolar, Polar (NRZ, RZ, Manchester, Differential Manchester), Bipolar (AMI, B8ZS, HDB3)",
      example: "Ethernet uses Manchester encoding"
    },
    {
      title: "Modulation Techniques",
      content: "Analog: AM, FM, PM | Digital: ASK, FSK, PSK, QAM | Pulse: PCM, DM, ADM",
      example: "WiFi uses QAM for high data rates"
    },
    {
      title: "Transmission Impairments",
      content: "Attenuation (Loss of strength), Distortion (Change in shape), Noise (Unwanted signals)",
      example: "Repeaters amplify signal to overcome attenuation"
    },

    // Data Link Layer (12 tricks)
    {
      title: "Data Link Layer Functions",
      content: "Framing, Physical addressing, Flow control, Error control, Access control",
      example: "Adds MAC addresses to frames"
    },
    {
      title: "MAC Address Format",
      content: "48 bits (12 hex digits) | First 24 bits: OUI (Manufacturer) | Last 24 bits: Device specific",
      example: "00:1A:2B:3C:4D:5E"
    },
    {
      title: "Ethernet Frame Format",
      content: "Preamble (7B) + SFD (1B) + Destination MAC (6B) + Source MAC (6B) + Type/Length (2B) + Data (46-1500B) + CRC (4B)",
      example: "Minimum frame size = 64 bytes"
    },
    {
      title: "Error Detection Methods",
      content: "Parity (Single/double), Checksum, CRC (Cyclic Redundancy Check)",
      example: "Ethernet uses CRC-32"
    },
    {
      title: "Error Correction Methods",
      content: "Hamming Code, Binary Convolution Code, Reed-Solomon, LDPC",
      example: "Hamming code adds redundant bits to correct single-bit errors"
    },
    {
      title: "Flow Control Protocols",
      content: "Stop-and-Wait, Sliding Window (Go-Back-N, Selective Repeat)",
      example: "TCP uses sliding window for flow control"
    },
    {
      title: "Multiple Access Protocols",
      content: "Random Access: ALOHA, CSMA, CSMA/CD, CSMA/CA | Controlled: Token Passing, Polling | Channelization: FDMA, TDMA, CDMA",
      example: "Ethernet uses CSMA/CD, WiFi uses CSMA/CA"
    },
    {
      title: "HDLC Frame Types",
      content: "I-frame (Information), S-frame (Supervisory), U-frame (Unnumbered)",
      example: "I-frames carry data, S-frames control flow/errors"
    },
    {
      title: "PPP Features",
      content: "Byte-oriented, Supports multiple network layers, Error detection, Link control protocol, Authentication (PAP/CHAP)",
      example: "Used for dial-up internet connections"
    },
    {
      title: "Switching in Data Link",
      content: "Store-and-Forward (Check CRC), Cut-Through (Forward immediately), Fragment-Free (Check first 64 bytes)",
      example: "Modern switches use store-and-forward"
    },
    {
      title: "VLAN (Virtual LAN)",
      content: "Logical segmentation of physical network | Types: Port-based, MAC-based, Protocol-based, IP-based",
      example: "Separate departments on same switch using VLANs"
    },
    {
      title: "STP (Spanning Tree Protocol)",
      content: "Prevents loops in switched networks | Elects root bridge, blocks redundant paths | 802.1D standard",
      example: "STP convergence time ~30-50 seconds"
    },

    // Network Layer (15 tricks)
    {
      title: "Network Layer Functions",
      content: "Logical addressing, Routing, Fragmentation, Congestion control",
      example: "IP addressing and routing decisions"
    },
    {
      title: "IP Address Classes",
      content: "A: 1-126 (8M hosts), B: 128-191 (65K hosts), C: 192-223 (254 hosts), D: 224-239 (Multicast), E: 240-255 (Experimental)",
      example: "192.168.1.1 = Class C private address"
    },
    {
      title: "Private IP Ranges",
      content: "10.0.0.0 - 10.255.255.255 (Class A), 172.16.0.0 - 172.31.255.255 (Class B), 192.168.0.0 - 192.168.255.255 (Class C)",
      example: "Home routers use 192.168.1.0/24"
    },
    {
      title: "Subnetting Calculation",
      content: "Borrow bits from host portion | Number of subnets = 2^n | Hosts per subnet = 2^(32-n) - 2",
      example: "/24 mask = 255.255.255.0 = 256-2=254 hosts"
    },
    {
      title: "CIDR (Classless Inter-Domain Routing)",
      content: "Eliminates class boundaries | Uses slash notation (/24) | More efficient IP allocation",
      example: "192.168.1.0/24 = 192.168.1.1 to 192.168.1.254"
    },
    {
      title: "IPv4 Header Fields",
      content: "Version, IHL, Type of Service, Total Length, Identification, Flags, Fragment Offset, TTL, Protocol, Header Checksum, Source/Dest IP",
      example: "TTL prevents infinite looping (decremented at each router)"
    },
    {
      title: "IPv6 Features",
      content: "128-bit addresses, Simplified header, No fragmentation, Built-in security, Auto-configuration, Flow labeling",
      example: "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
    },
    {
      title: "Routing Protocols Types",
      content: "Static (Manual), Dynamic (Automatic) | IGP (Internal): RIP, OSPF, EIGRP | EGP (External): BGP",
      example: "RIP for small networks, OSPF for large"
    },
    {
      title: "Distance Vector Protocols",
      content: "RIP (Hop count metric), IGRP (Bandwidth+delay) | Periodic updates, Slow convergence, Count-to-infinity problem",
      example: "RIP max hops = 15, 16 = unreachable"
    },
    {
      title: "Link State Protocols",
      content: "OSPF (Cost metric), IS-IS | Builds complete topology map, Fast convergence, Dijkstra algorithm",
      example: "OSPF areas reduce routing table size"
    },
    {
      title: "BGP (Border Gateway Protocol)",
      content: "Path vector protocol | Uses AS numbers | Policy-based routing | TCP port 179",
      example: "Internet backbone uses BGP"
    },
    {
      title: "NAT (Network Address Translation)",
      content: "Static (1:1 mapping), Dynamic (Pool of addresses), PAT/Overloading (Many:1 with ports)",
      example: "Home router uses PAT for multiple devices"
    },
    {
      title: "ICMP (Internet Control Message Protocol)",
      content: "Error reporting and diagnostics | ping uses ICMP Echo Request/Reply | traceroute uses ICMP Time Exceeded",
      example: "Destination Unreachable, Time Exceeded, Redirect messages"
    },
    {
      title: "ARP (Address Resolution Protocol)",
      content: "Maps IP to MAC address | ARP Request (Broadcast), ARP Reply (Unicast) | ARP cache stores mappings",
      example: "Before sending packet, check ARP cache for MAC"
    },
    {
      title: "DHCP (Dynamic Host Configuration Protocol)",
      content: "DORA process: Discover, Offer, Request, Acknowledge | UDP ports 67 (server), 68 (client)",
      example: "Automatically assigns IP, mask, gateway, DNS"
    },

    // Transport Layer (10 tricks)
    {
      title: "Transport Layer Functions",
      content: "Process-to-process delivery, Segmentation, Connection control, Flow control, Error control",
      example: "Port numbers identify applications"
    },
    {
      title: "TCP vs UDP",
      content: "TCP: Connection-oriented, Reliable, Flow/error control, Ordered delivery | UDP: Connectionless, Unreliable, Faster, No guarantees",
      example: "HTTP uses TCP, DNS uses UDP"
    },
    {
      title: "TCP Header Fields",
      content: "Source/Dest Port, Sequence/Ack numbers, Header Length, Flags (URG, ACK, PSH, RST, SYN, FIN), Window Size, Checksum",
      example: "SYN=1 for connection request, FIN=1 for termination"
    },
    {
      title: "TCP Connection Management",
      content: "3-way Handshake: SYN → SYN+ACK → ACK | 4-way Termination: FIN → ACK → FIN → ACK",
      example: "SYN flood attack exploits handshake"
    },
    {
      title: "TCP Congestion Control",
      content: "Slow Start (Exponential growth), Congestion Avoidance (Additive increase), Fast Retransmit (3 dup ACKs), Fast Recovery",
      example: "TCP Reno/Tahoe algorithms"
    },
    {
      title: "TCP Timers",
      content: "Retransmission (RTO), Persistence (Zero window), Keepalive (Idle connection), TIME-WAIT (2MSL)",
      example: "RTO based on RTT (Round Trip Time)"
    },
    {
      title: "UDP Header",
      content: "Source/Dest Port, Length, Checksum (optional) | No sequence numbers, no flow control",
      example: "DNS query = 53 bytes UDP packet"
    },
    {
      title: "Port Numbers",
      content: "Well-known: 0-1023 (HTTP=80, HTTPS=443, FTP=21, SSH=22, DNS=53) | Registered: 1024-49151 | Dynamic: 49152-65535",
      example: "Web server listens on port 80"
    },
    {
      title: "Sockets",
      content: "IP Address + Port Number = Socket | TCP socket reliable, UDP socket unreliable",
      example: "192.168.1.1:80 = web server socket"
    },
    {
      title: "Quality of Service (QoS)",
      content: "Integrated Services (IntServ), Differentiated Services (DiffServ) | Techniques: Traffic shaping, Admission control, Resource reservation",
      example: "VoIP traffic gets higher priority than email"
    },

    // Application Layer (10 tricks)
    {
      title: "Application Layer Protocols",
      content: "HTTP/HTTPS (Web), FTP/TFTP (File), SMTP/POP3/IMAP (Email), DNS (Name resolution), DHCP (IP config), SNMP (Network mgmt)",
      example: "HTTP for browsing, DNS for name lookup"
    },
    {
      title: "HTTP Methods",
      content: "GET (Retrieve), POST (Submit), PUT (Update), DELETE (Remove), HEAD (Headers only), OPTIONS (Capabilities)",
      example: "GET /index.html retrieves webpage"
    },
    {
      title: "HTTP Status Codes",
      content: "1xx (Informational), 2xx (Success), 3xx (Redirection), 4xx (Client error), 5xx (Server error)",
      example: "200 OK, 404 Not Found, 500 Internal Error"
    },
    {
      title: "HTTPS (HTTP Secure)",
      content: "HTTP over SSL/TLS | Port 443 | Encryption, Authentication, Integrity",
      example: "Padlock icon in browser indicates HTTPS"
    },
    {
      title: "DNS Hierarchy",
      content: "Root (.) → TLD (.com, .org) → Second-level (example) → Subdomain (www) | Recursive/Iterative queries",
      example: "www.example.com = subdomain.second-level.TLD"
    },
    {
      title: "DNS Record Types",
      content: "A (IPv4 address), AAAA (IPv6), CNAME (Alias), MX (Mail exchange), NS (Name server), PTR (Reverse lookup), SOA (Start of authority)",
      example: "example.com A 192.0.2.1"
    },
    {
      title: "Email Protocols",
      content: "SMTP (Send, port 25), POP3 (Receive, port 110), IMAP (Manage, port 143) | SSL/TLS versions: SMTPS=465, POP3S=995, IMAPS=993",
      example: "Outlook uses SMTP to send, IMAP to receive"
    },
    {
      title: "FTP Modes",
      content: "Active (Server initiates data connection), Passive (Client initiates both) | Port 21 (control), Port 20 (data active)",
      example: "Passive mode works better through firewalls"
    },
    {
      title: "Network Security",
      content: "Firewalls (Packet filter, Stateful, Application), IDS/IPS (Intrusion detection/prevention), VPN (Virtual Private Network)",
      example: "VPN encrypts traffic between remote user and office"
    },
    {
      title: "Cryptography in Networks",
      content: "Symmetric (AES, DES), Asymmetric (RSA, DSA), Hash (MD5, SHA), Digital Certificates, SSL/TLS Handshake",
      example: "SSL uses asymmetric for key exchange, symmetric for data"
    }
  ],

  detailedNotes: {
    "Network Models & Architecture": {
      keyConcepts: [
        "OSI Model: 7-layer reference model for network communication",
        "TCP/IP Model: 4-layer practical implementation model",
        "Protocol: Set of rules for communication between devices",
        "Interface: Definition of interaction between layers",
        "Encapsulation: Adding headers/trailers at each layer",
        "Peer-to-peer communication: Same layer on different devices"
      ],
      importantPoints: [
        "Physical Layer: Transmits raw bits over physical medium",
        "Data Link Layer: Node-to-node delivery, framing, MAC addressing",
        "Network Layer: Host-to-host delivery, routing, logical addressing",
        "Transport Layer: Process-to-process delivery, reliability",
        "Session Layer: Dialog control, synchronization",
        "Presentation Layer: Translation, encryption, compression",
        "Application Layer: Network services to applications"
      ],
      memoryAids: [
        "OSI: Please Do Not Throw Sausage Pizza Away",
        "TCP/IP: Network Access, Internet, Transport, Application",
        "PDUs: Bits (Physical), Frames (Data Link), Packets (Network), Segments (Transport), Data (Upper layers)"
      ]
    },
    
    "Data Link Layer & Switching": {
      keyConcepts: [
        "MAC Address: Physical address burned into NIC (48 bits)",
        "Frame: Data link layer PDU with header, data, trailer",
        "CSMA/CD: Ethernet's collision detection mechanism",
        "CSMA/CA: WiFi's collision avoidance mechanism",
        "VLAN: Virtual LAN for logical network segmentation",
        "STP: Prevents switching loops in redundant topologies"
      ],
      importantPoints: [
        "Ethernet uses CSMA/CD with binary exponential backoff",
        "Switch learns MAC addresses from incoming frames",
        "Broadcast domain: Set of devices that receive broadcast frames",
        "Collision domain: Set of devices where collisions can occur",
        "Full-duplex eliminates collisions (dedicated send/receive paths)",
        "VLAN trunking uses 802.1Q tagging to carry multiple VLANs"
      ],
      memoryAids: [
        "MAC address format: XX:XX:XX:XX:XX:XX (6 bytes)",
        "Ethernet minimum frame: 64 bytes, maximum: 1518 bytes",
        "Switch = Many collision domains, Hub = One collision domain"
      ]
    },
    
    "IP Addressing & Subnetting": {
      keyConcepts: [
        "IPv4: 32-bit address, dotted decimal notation",
        "Subnet Mask: Identifies network vs host portion",
        "CIDR: Classless addressing with slash notation",
        "Private Addresses: Non-routable on public internet",
        "NAT: Translates private IP to public IP",
        "IPv6: 128-bit address, hexadecimal notation"
      ],
      importantPoints: [
        "Class A: 1-126, 8 network bits, 24 host bits",
        "Class B: 128-191, 16 network bits, 16 host bits",
        "Class C: 192-223, 24 network bits, 8 host bits",
        "Subnetting borrows bits from host portion",
        "Supernetting combines multiple networks",
        "APIPA: 169.254.0.0/16 for automatic IP when DHCP fails"
      ],
      memoryAids: [
        "Private ranges: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16",
        "Loopback: 127.0.0.1 (localhost)",
        "Broadcast: 255.255.255.255 (limited) or network.255 (directed)"
      ]
    },
    
    "Routing Protocols": {
      keyConcepts: [
        "Static Routing: Manual route configuration",
        "Dynamic Routing: Automatic route learning",
        "IGP: Interior Gateway Protocol (within AS)",
        "EGP: Exterior Gateway Protocol (between AS)",
        "Metric: Value used to determine best path",
        "Convergence: Time for all routers to have consistent routing info"
      ],
      importantPoints: [
        "RIP: Distance vector, hop count metric, max 15 hops",
        "OSPF: Link state, cost metric, Dijkstra algorithm",
        "EIGRP: Cisco proprietary, hybrid protocol",
        "BGP: Path vector, policy-based, TCP port 179",
        "Administrative Distance: Trustworthiness of routing source",
        "Routing Table: Contains best paths to known networks"
      ],
      memoryAids: [
        "RIP timers: Update 30s, Invalid 180s, Hold-down 180s, Flush 240s",
        "OSPF areas reduce LSDB size and improve scalability",
        "BGP uses AS-Path attribute for loop prevention"
      ]
    },
    
    "TCP/UDP & Transport Services": {
      keyConcepts: [
        "TCP: Connection-oriented, reliable, flow-controlled",
        "UDP: Connectionless, unreliable, faster",
        "Port: 16-bit number identifying application",
        "Socket: Endpoint for communication (IP:Port)",
        "Segmentation: Breaking data into smaller units",
        "Multiplexing/Demultiplexing: Combining/separating data streams"
      ],
      importantPoints: [
        "TCP 3-way handshake establishes connection",
        "TCP uses sequence numbers for ordering and reliability",
        "Sliding window protocol for flow control",
        "TCP congestion control prevents network overload",
        "UDP suitable for real-time applications (VoIP, gaming)",
        "Well-known ports: 0-1023 (system/root privileges required)"
      ],
      memoryAids: [
        "TCP flags: UAPRSF (Urgent, Ack, Push, Reset, Syn, Fin)",
        "Common ports: 80(HTTP), 443(HTTPS), 53(DNS), 25(SMTP)",
        "TCP header: 20-60 bytes, UDP header: 8 bytes"
      ]
    },
    
    "Application Protocols & Security": {
      keyConcepts: [
        "HTTP: Stateless protocol for web communication",
        "DNS: Distributed database for name resolution",
        "DHCP: Automatic IP configuration",
        "Email Protocols: SMTP, POP3, IMAP",
        "Network Security: CIA triad (Confidentiality, Integrity, Availability)",
        "Cryptography: Encryption, hashing, digital signatures"
      ],
      importantPoints: [
        "HTTP uses TCP port 80, HTTPS uses TLS on port 443",
        "DNS uses UDP port 53 for queries, TCP for zone transfers",
        "DHCP DORA process: Discover, Offer, Request, Acknowledge",
        "Firewalls filter traffic based on rules (ACLs)",
        "VPN creates secure tunnel over public network",
        "SSL/TLS provides secure communication (handshake, encryption)"
      ],
      memoryAids: [
        "DNS hierarchy: Root → TLD → SLD → Subdomain",
        "Email flow: User → MUA → MSA → MTA → MDA → MUA",
        "Security: Symmetric (fast), Asymmetric (key exchange), Hash (integrity)"
      ]
    }
  },

  quickReference: {
    "cn-1": "OSI Model: Physical, Data Link, Network, Transport, Session, Presentation, Application",
    "cn-2": "TCP/IP Model: Network Access, Internet, Transport, Application",
    "cn-3": "PAN: Personal Area Network (Bluetooth, infrared)",
    "cn-4": "LAN: Local Area Network (office, home network)",
    "cn-5": "MAN: Metropolitan Area Network (city-wide network)",
    "cn-6": "WAN: Wide Area Network (internet, connects cities/countries)",
    "cn-7": "Network Topologies: Bus, Star, Ring, Mesh, Tree, Hybrid",
    "cn-8": "Transmission Modes: Simplex, Half-duplex, Full-duplex",
    "cn-9": "Hub: Layer 1 device, operates at Physical layer",
    "cn-10": "Switch: Layer 2 device, operates at Data Link layer",
    "cn-11": "Router: Layer 3 device, operates at Network layer",
    "cn-12": "Gateway: Connects networks with different protocols",
    "cn-13": "Repeater: Amplifies signal, Physical layer device",
    "cn-14": "Bridge: Connects two network segments, Data Link layer",
    "cn-15": "MAC Address: 48-bit physical address (e.g., 00:1A:2B:3C:4D:5E)",
    "cn-16": "IP Address: 32-bit logical address (IPv4), 128-bit (IPv6)",
    "cn-17": "Port: 16-bit number identifying application (0-65535)",
    "cn-18": "Socket: IP Address + Port Number",
    "cn-19": "Protocol: Set of rules for communication (TCP, IP, HTTP, etc.)",
    "cn-20": "Packet: Network layer PDU",
    "cn-21": "Frame: Data Link layer PDU",
    "cn-22": "Segment: Transport layer PDU (TCP)",
    "cn-23": "Datagram: Transport layer PDU (UDP)",
    "cn-24": "Bandwidth: Maximum data transfer rate",
    "cn-25": "Throughput: Actual data transfer rate",
    "cn-26": "Latency: Time delay in transmission",
    "cn-27": "Jitter: Variation in latency",
    "cn-28": "Packet Loss: Packets failing to reach destination",
    "cn-29": "Attenuation: Signal strength loss over distance",
    "cn-30": "Noise: Unwanted signals interfering with transmission",
    "cn-31": "Crosstalk: Interference between adjacent wires",
    "cn-32": "Twisted Pair: UTP (Unshielded), STP (Shielded)",
    "cn-33": "Coaxial Cable: Single copper conductor with shielding",
    "cn-34": "Fiber Optics: Glass/plastic fibers carrying light signals",
    "cn-35": "Single-mode Fiber: Long distance, laser source",
    "cn-36": "Multi-mode Fiber: Short distance, LED source",
    "cn-37": "WiFi Standards: 802.11a/b/g/n/ac/ax",
    "cn-38": "Bluetooth: Short-range wireless, 802.15.1",
    "cn-39": "Ethernet: 802.3 standard for wired LANs",
    "cn-40": "CSMA/CD: Carrier Sense Multiple Access with Collision Detection",
    "cn-41": "CSMA/CA: Carrier Sense Multiple Access with Collision Avoidance",
    "cn-42": "Token Ring: 802.5 standard, token passing protocol",
    "cn-43": "FDDI: Fiber Distributed Data Interface, token ring on fiber",
    "cn-44": "ATM: Asynchronous Transfer Mode, cell switching",
    "cn-45": "Frame Relay: Packet switching for WANs",
    "cn-46": "ISDN: Integrated Services Digital Network",
    "cn-47": "DSL: Digital Subscriber Line (ADSL, VDSL)",
    "cn-48": "Cable Internet: Uses cable TV infrastructure",
    "cn-49": "Leased Line: Dedicated connection (T1, T3, E1, E3)",
    "cn-50": "VPN: Virtual Private Network, secure tunnel over public network",
    "cn-51": "IPv4: 32-bit address, 4.3 billion addresses",
    "cn-52": "IPv6: 128-bit address, 3.4×10³⁸ addresses",
    "cn-53": "Class A: 1-126, /8 mask, 16 million hosts",
    "cn-54": "Class B: 128-191, /16 mask, 65,000 hosts",
    "cn-55": "Class C: 192-223, /24 mask, 254 hosts",
    "cn-56": "Class D: 224-239, Multicast addresses",
    "cn-57": "Class E: 240-255, Experimental/reserved",
    "cn-58": "Private IPs: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16",
    "cn-59": "Loopback: 127.0.0.0/8 (127.0.0.1 = localhost)",
    "cn-60": "APIPA: 169.254.0.0/16, automatic IP when no DHCP",
    "cn-61": "Subnetting: Dividing network into smaller networks",
    "cn-62": "Supernetting: Combining multiple networks",
    "cn-63": "CIDR: Classless Inter-Domain Routing (slash notation)",
    "cn-64": "VLSM: Variable Length Subnet Masking",
    "cn-65": "NAT: Network Address Translation",
    "cn-66": "PAT: Port Address Translation (NAT overload)",
    "cn-67": "ARP: Address Resolution Protocol (IP → MAC)",
    "cn-68": "RARP: Reverse ARP (MAC → IP)",
    "cn-69": "ICMP: Internet Control Message Protocol (ping, traceroute)",
    "cn-70": "IGMP: Internet Group Management Protocol (multicast)",
    "cn-71": "DHCP: Dynamic Host Configuration Protocol",
    "cn-72": "DNS: Domain Name System (name → IP)",
    "cn-73": "TCP: Transmission Control Protocol, reliable, connection-oriented",
    "cn-74": "UDP: User Datagram Protocol, unreliable, connectionless",
    "cn-75": "TCP Ports: Well-known (0-1023), Registered (1024-49151), Dynamic (49152-65535)",
    "cn-76": "HTTP: Port 80, HyperText Transfer Protocol",
    "cn-77": "HTTPS: Port 443, HTTP Secure (SSL/TLS)",
    "cn-78": "FTP: Port 21 (control), 20 (data), File Transfer Protocol",
    "cn-79": "SFTP: Port 22, SSH File Transfer Protocol",
    "cn-80": "TFTP: Port 69, Trivial FTP (no authentication)",
    "cn-81": "SSH: Port 22, Secure Shell",
    "cn-82": "Telnet: Port 23, unencrypted remote login",
    "cn-83": "SMTP: Port 25, Simple Mail Transfer Protocol (sending email)",
    "cn-84": "POP3: Port 110, Post Office Protocol v3 (receiving email)",
    "cn-85": "IMAP: Port 143, Internet Message Access Protocol (email management)",
    "cn-86": "SNMP: Port 161, Simple Network Management Protocol",
    "cn-87": "LDAP: Port 389, Lightweight Directory Access Protocol",
    "cn-88": "RIP: Routing Information Protocol, distance vector, max 15 hops",
    "cn-89": "OSPF: Open Shortest Path First, link state, Dijkstra algorithm",
    "cn-90": "EIGRP: Enhanced Interior Gateway Routing Protocol, Cisco proprietary",
    "cn-91": "BGP: Border Gateway Protocol, path vector, Internet routing",
    "cn-92": "Static Routing: Manual configuration, no overhead",
    "cn-93": "Dynamic Routing: Automatic, adapts to changes",
    "cn-94": "Default Route: 0.0.0.0/0, gateway of last resort",
    "cn-95": "Firewall: Filters traffic based on security rules",
    "cn-96": "IDS: Intrusion Detection System (monitors)",
    "cn-97": "IPS: Intrusion Prevention System (blocks)",
    "cn-98": "DoS: Denial of Service attack",
    "cn-99": "DDoS: Distributed DoS attack (multiple sources)",
    "cn-100": "SSL/TLS: Secure Sockets Layer/Transport Layer Security (encryption)"
  },

  examStrategy: {
    topicWeightage: [
      "Network Models & Architecture: 10-12 questions",
      "Data Link Layer & MAC Protocols: 12-15 questions",
      "IP Addressing & Subnetting: 15-18 questions",
      "Routing Protocols: 10-12 questions",
      "TCP/UDP & Transport Layer: 12-15 questions",
      "Application Layer Protocols: 10-12 questions",
      "Network Devices & Topologies: 8-10 questions",
      "Wireless Networks: 6-8 questions",
      "Network Security: 5-7 questions",
      "Advanced Topics (IPv6, QoS, etc.): 4-6 questions"
    ],
    preparationTips: [
      "1. Memorize OSI and TCP/IP models with layer functions and protocols",
      "2. Practice IP subnetting calculations until they become second nature",
      "3. Understand TCP 3-way handshake and connection termination",
      "4. Learn differences between TCP and UDP with real-world examples",
      "5. Study routing protocols (RIP, OSPF, BGP) and their characteristics",
      "6. Master common port numbers and their corresponding protocols",
      "7. Practice network device functions (hub, switch, router, gateway)",
      "8. Understand wireless standards (802.11 series) and their differences",
      "9. Learn about network security concepts (firewalls, VPN, encryption)",
      "10. Solve previous year questions on subnetting and routing"
    ],
    timeManagement: [
      "Number of subnets = 2^n (where n = borrowed bits)",
      "Hosts per subnet = 2^(32-n) - 2",
      "Network address = IP address AND subnet mask",
      "Broadcast address = Network address OR inverted mask",
      "First usable host = Network address + 1",
      "Last usable host = Broadcast address - 1",
      "RTT (Round Trip Time) = Time for packet to go and return",
      "Throughput = Window size / RTT",
      "Bandwidth-delay product = Bandwidth × RTT"
      ,
      "ARP (Address Resolution Protocol)",
      "ICMP (Internet Control Message Protocol)",
      "DHCP (Dynamic Host Configuration Protocol)",
      "DNS (Domain Name System)",
      "HTTP/HTTPS (Hypertext Transfer Protocol)",
      "FTP/SFTP (File Transfer Protocol)",
      "SMTP/POP3/IMAP (Email protocols)",
      "RIP/OSPF/BGP (Routing protocols)",
      "TCP/UDP (Transport protocols)",
      "SNMP (Simple Network Management Protocol)",
      "Calculate subnet mask, network address, broadcast address",
      "Determine valid host range for given IP and mask",
      "Identify class of IP address and default mask",
      "Calculate number of subnets and hosts per subnet",
      "Convert between binary, decimal, and hexadecimal",
      "Analyze TCP sequence/acknowledgment numbers",
      "Calculate network performance metrics",
      "Design network topology for given requirements",
      "Configure routing tables for simple networks",
      "Troubleshoot network connectivity issues"
    ]
  }
},

 "C Programming": {
  icon: "fas fa-c",
  color: "#3B82F6",
  tricks: [
    // C Fundamentals (10 tricks)
    {
      title: "C Program Structure",
      content: "Documentation → Link → Definition → Global Declaration → Main() → Subprograms",
      example: "#include → #define → int main() → { statements } → return 0;"
    },
    {
      title: "C Tokens",
      content: "Keywords (32), Identifiers, Constants, Strings, Operators, Special Symbols",
      example: "Keywords: int, float, if, else, while, for, return"
    },
    {
      title: "C Character Set",
      content: "Alphabets (A-Z, a-z), Digits (0-9), Special Characters (!@#$%^&* etc.), White Spaces",
      example: "Valid identifier: student_name, Invalid: 2student (starts with digit)"
    },
    {
      title: "C Data Types",
      content: "Basic: int, float, double, char | Derived: array, pointer, structure, union | Void: no value",
      example: "int age = 25; float salary = 50000.50; char grade = 'A';"
    },
    {
      title: "Variable Declaration Rules",
      content: "Start with letter/underscore, contain letters/digits/underscore, max 31 chars, case-sensitive, not a keyword",
      example: "Valid: _temp, count2 | Invalid: 2count, int (keyword)"
    },
    {
      title: "Storage Classes",
      content: "auto (default), register (fast access), static (persists), extern (global access)",
      example: "static int count; // retains value between function calls"
    },
    {
      title: "Constants in C",
      content: "Integer (123), Real (12.34), Character ('A'), String (\"Hello\"), Escape sequences (\\n, \\t)",
      example: "Escape: \\n newline, \\t tab, \\\\ backslash, \\\" double quote"
    },
    {
      title: "#define vs const",
      content: "#define PI 3.14 (preprocessor, no memory) | const float PI = 3.14; (compiler, has memory)",
      example: "#define is text replacement, const is actual variable"
    },
    {
      title: "sizeof Operator",
      content: "Returns size in bytes | sizeof(int) = 4 (usually), sizeof(char) = 1",
      example: "printf(\"Size: %d\", sizeof(float)); // 4"
    },
    {
      title: "Typedef",
      content: "Creates alias for existing type | typedef int Integer; Integer x = 10;",
      example: "typedef struct {int x; int y;} Point; Point p1;"
    },

    // Operators (10 tricks)
    {
      title: "Arithmetic Operators",
      content: "+ (add), - (subtract), * (multiply), / (divide), % (modulo - remainder)",
      example: "5 % 2 = 1, 10 / 3 = 3 (integer division)"
    },
    {
      title: "Relational Operators",
      content: "== (equal), != (not equal), < (less), > (greater), <= (less or equal), >= (greater or equal)",
      example: "if(age >= 18) printf(\"Adult\");"
    },
    {
      title: "Logical Operators",
      content: "&& (AND), || (OR), ! (NOT) | Short-circuit evaluation",
      example: "if(age > 18 && age < 60) printf(\"Working\");"
    },
    {
      title: "Bitwise Operators",
      content: "& (AND), | (OR), ^ (XOR), ~ (NOT), << (left shift), >> (right shift)",
      example: "5 & 3 = 1 (0101 & 0011 = 0001)"
    },
    {
      title: "Assignment Operators",
      content: "= (simple), +=, -=, *=, /=, %=, &=, |=, ^=, <<=, >>=",
      example: "x += 5; // x = x + 5"
    },
    {
      title: "Increment/Decrement",
      content: "++ (increment), -- (decrement) | Prefix (++x) vs Postfix (x++)",
      example: "int x=5; y = x++; // y=5, x=6 | y = ++x; // y=6, x=6"
    },
    {
      title: "Conditional/Ternary Operator",
      content: "condition ? expression1 : expression2",
      example: "max = (a > b) ? a : b; // find maximum"
    },
    {
      title: "Comma Operator",
      content: "Evaluates multiple expressions, returns last value",
      example: "int x = (a=5, b=10, a+b); // x=15"
    },
    {
      title: "Operator Precedence",
      content: "Highest: () [] -> . | Unary: ! ~ ++ -- + - * & sizeof | Multiplicative: * / % | Additive: + - | Shift: << >>",
      example: "a + b * c // * before +"
    },
    {
      title: "Type Conversion",
      content: "Implicit (automatic): char → int → float | Explicit (cast): (type)expression",
      example: "float avg = (float)sum / count; // explicit cast"
    },

    // Control Statements (10 tricks)
    {
      title: "if Statement",
      content: "if(condition) { statements; } | Single statement: braces optional",
      example: "if(marks >= 40) printf(\"Pass\");"
    },
    {
      title: "if-else Statement",
      content: "if(condition) { true-block; } else { false-block; }",
      example: "if(age >= 18) printf(\"Adult\"); else printf(\"Minor\");"
    },
    {
      title: "Nested if-else",
      content: "if inside if | Use else-if ladder for multiple conditions",
      example: "if(marks >= 80) grade='A'; else if(marks >= 60) grade='B'; else grade='C';"
    },
    {
      title: "switch Statement",
      content: "switch(expression) { case value1: ... break; case value2: ... break; default: ... }",
      example: "switch(day) { case 1: printf(\"Monday\"); break; ... }"
    },
    {
      title: "while Loop",
      content: "while(condition) { statements; } | Entry controlled, 0 or more iterations",
      example: "while(i < 10) { printf(\"%d\", i); i++; }"
    },
    {
      title: "do-while Loop",
      content: "do { statements; } while(condition); | Exit controlled, at least 1 iteration",
      example: "do { printf(\"Enter number: \"); scanf(\"%d\", &num); } while(num <= 0);"
    },
    {
      title: "for Loop",
      content: "for(initialization; condition; increment) { statements; }",
      example: "for(i=0; i<10; i++) printf(\"%d\", i);"
    },
    {
      title: "Nested Loops",
      content: "Loop inside loop | Outer controls rows, inner controls columns",
      example: "for(i=1; i<=5; i++) { for(j=1; j<=i; j++) printf(\"*\"); printf(\"\\n\"); }"
    },
    {
      title: "break Statement",
      content: "Exits loop or switch immediately | Only from innermost loop",
      example: "while(1) { if(condition) break; } // exit infinite loop"
    },
    {
      title: "continue Statement",
      content: "Skips rest of loop body, continues with next iteration",
      example: "for(i=0; i<10; i++) { if(i%2==0) continue; printf(\"%d \", i); } // prints odd numbers"
    },

    // Arrays (10 tricks)
    {
      title: "Array Declaration",
      content: "type array_name[size]; | Index from 0 to size-1",
      example: "int marks[5]; // 5 integers: marks[0] to marks[4]"
    },
    {
      title: "Array Initialization",
      content: "int arr[5] = {1,2,3,4,5}; | Partial: int arr[5] = {1,2}; (rest 0)",
      example: "int arr[] = {1,2,3}; // size = 3 automatically"
    },
    {
      title: "2D Arrays",
      content: "type array_name[rows][cols]; | Stored row-major order",
      example: "int matrix[3][3]; // 3x3 matrix"
    },
    {
      title: "Array Name as Pointer",
      content: "Array name = address of first element | arr ≡ &arr[0]",
      example: "int arr[5]; printf(\"%p\", arr); // prints address"
    },
    {
      title: "Array Bounds",
      content: "No bounds checking in C | Accessing out of bounds causes undefined behavior",
      example: "int arr[5]; arr[10] = 5; // ERROR: out of bounds"
    },
    {
      title: "String in C",
      content: "Character array ending with '\\0' (null character) | char str[10] = \"Hello\";",
      example: "char name[] = \"John\"; // 5 chars: J,o,h,n,\\0"
    },
    {
      title: "String Functions",
      content: "strlen() length, strcpy() copy, strcat() concatenate, strcmp() compare, strrev() reverse",
      example: "strcpy(dest, src); // copy src to dest"
    },
    {
      title: "Array of Strings",
      content: "2D char array or array of char pointers",
      example: "char names[3][10] = {\"John\", \"Mary\", \"Tom\"};"
    },
    {
      title: "Array Operations",
      content: "Traversal, Insertion, Deletion, Searching (Linear, Binary), Sorting (Bubble, Selection)",
      example: "Bubble sort: compare adjacent, swap if wrong order"
    },
    {
      title: "Dynamic Arrays",
      content: "Using pointers and malloc() | int *arr = (int*)malloc(n * sizeof(int));",
      example: "Allocate memory at runtime, free with free(arr)"
    },

    // Pointers (15 tricks)
    {
      title: "Pointer Basics",
      content: "Variable that stores memory address | Declaration: type *ptr;",
      example: "int x = 10; int *p = &x; // p points to x"
    },
    {
      title: "Pointer Operators",
      content: "& (address of), * (value at address) | Unary operators",
      example: "int x=10; int *p=&x; printf(\"%d\", *p); // 10"
    },
    {
      title: "Pointer Arithmetic",
      content: "p++ increments by sizeof(type) | Works with arrays",
      example: "int arr[5]; int *p=arr; p++; // points to arr[1]"
    },
    {
      title: "Pointers and Arrays",
      content: "arr[i] ≡ *(arr+i) | Pointer can access array elements",
      example: "*(arr+2) = arr[2]; // same"
    },
    {
      title: "Pointer to Pointer",
      content: "int **pp; // pointer to pointer to int",
      example: "int x=10; int *p=&x; int **pp=&p;"
    },
    {
      title: "Array of Pointers",
      content: "int *arr[5]; // array of 5 integer pointers",
      example: "char *names[] = {\"John\", \"Mary\", \"Tom\"};"
    },
    {
      title: "Pointer to Array",
      content: "int (*p)[5]; // pointer to array of 5 integers",
      example: "int arr[5]; int (*p)[5] = &arr;"
    },
    {
      title: "Function Pointers",
      content: "int (*fp)(int, int); // pointer to function returning int",
      example: "fp = &add; result = (*fp)(5,3);"
    },
    {
      title: "NULL Pointer",
      content: "Pointer that points to nothing | #define NULL 0",
      example: "int *p = NULL; // safe initialization"
    },
    {
      title: "Void Pointer",
      content: "void *vp; // generic pointer, can point to any type",
      example: "void *vp; int x=10; vp = &x;"
    },
    {
      title: "Dangling Pointer",
      content: "Pointer pointing to freed memory | Causes undefined behavior",
      example: "int *p = malloc(10); free(p); // p now dangling"
    },
    {
      title: "Wild Pointer",
      content: "Uninitialized pointer | Points to random memory",
      example: "int *p; // wild pointer, initialize before use"
    },
    {
      title: "const with Pointers",
      content: "const int *p; (pointer to constant) | int *const p; (constant pointer) | const int *const p; (both)",
      example: "const int *p = &x; // can't change *p, can change p"
    },
    {
      title: "Pointer Comparison",
      content: "Can compare with ==, !=, <, > | Only valid for same array",
      example: "if(p < q) printf(\"p before q in array\");"
    },
    {
      title: "Far/Near Pointers",
      content: "Near (16-bit offset), Far (32-bit segment:offset) | Legacy for segmented memory",
      example: "Historical, not used in modern flat memory"
    },

    // Functions (10 tricks)
    {
      title: "Function Definition",
      content: "return_type function_name(parameters) { body; return value; }",
      example: "int add(int a, int b) { return a+b; }"
    },
    {
      title: "Function Prototype",
      content: "Declaration before use | return_type function_name(parameters);",
      example: "int add(int, int); // prototype"
    },
    {
      title: "Function Call",
      content: "function_name(arguments); | Pass by value (default)",
      example: "result = add(5, 3);"
    },
    {
      title: "Actual vs Formal Parameters",
      content: "Actual: values passed in call | Formal: variables in function definition",
      example: "add(5,3) // 5,3 actual | int add(int a, int b) // a,b formal"
    },
    {
      title: "Return Statement",
      content: "return expression; | Returns control to caller | void functions can use return;",
      example: "return a+b; // returns sum"
    },
    {
      title: "Call by Value",
      content: "Copy of argument passed | Changes inside function don't affect original",
      example: "void swap(int a, int b) { ... } // won't swap original"
    },
    {
      title: "Call by Reference",
      content: "Address passed using pointers | Changes affect original",
      example: "void swap(int *a, int *b) { temp=*a; *a=*b; *b=temp; }"
    },
    {
      title: "Recursion",
      content: "Function calls itself | Must have base case to stop",
      example: "int factorial(int n) { if(n<=1) return 1; return n*factorial(n-1); }"
    },
    {
      title: "Storage Classes in Functions",
      content: "auto (local, default), static (persists), register (suggest fast access), extern (global)",
      example: "static int count=0; // retains value between calls"
    },
    {
      title: "main() Function",
      content: "Entry point of program | int main(void) or int main(int argc, char *argv[])",
      example: "int main() { printf(\"Hello\"); return 0; }"
    },

    // Structures & Unions (8 tricks)
    {
      title: "Structure Definition",
      content: "struct tag { members; }; | Creates new data type",
      example: "struct Student { char name[20]; int roll; float marks; };"
    },
    {
      title: "Structure Variable",
      content: "struct tag variable; | Access members with . (dot) operator",
      example: "struct Student s1; s1.roll = 101;"
    },
    {
      title: "Structure Pointer",
      content: "struct tag *ptr; | Access members with -> (arrow) operator",
      example: "struct Student *p = &s1; p->roll = 101;"
    },
    {
      title: "Array of Structures",
      content: "struct Student class[50]; | Each element is structure",
      example: "class[0].roll = 101; class[1].roll = 102;"
    },
    {
      title: "Nested Structures",
      content: "Structure inside structure",
      example: "struct Address { char city[20]; }; struct Student { char name[20]; struct Address addr; };"
    },
    {
      title: "typedef with Structures",
      content: "typedef struct { members; } new_name; | Creates alias",
      example: "typedef struct { int x,y; } Point; Point p1;"
    },
    {
      title: "Union Definition",
      content: "union tag { members; }; | All members share same memory",
      example: "union Data { int i; float f; char str[20]; };"
    },
    {
      title: "Structure vs Union",
      content: "Struct: All members have separate memory | Union: All members share memory (size = largest member)",
      example: "Struct: Can access all members simultaneously | Union: Only one member valid at a time"
    },

    // File Handling (7 tricks)
    {
      title: "File Operations",
      content: "fopen() open, fclose() close, fread() read, fwrite() write, fseek() move, ftell() position",
      example: "FILE *fp = fopen(\"file.txt\", \"r\");"
    },
    {
      title: "File Modes",
      content: "\"r\" read, \"w\" write (truncate), \"a\" append, \"r+\" read/write, \"w+\" read/write (truncate), \"a+\" read/append",
      example: "\"rb\" binary read, \"wb\" binary write"
    },
    {
      title: "Character I/O",
      content: "fgetc() get char, fputc() put char, getc(), putc()",
      example: "ch = fgetc(fp); fputc(ch, fp);"
    },
    {
      title: "String I/O",
      content: "fgets() get string, fputs() put string",
      example: "fgets(str, 100, fp); fputs(str, fp);"
    },
    {
      title: "Formatted I/O",
      content: "fscanf() read formatted, fprintf() write formatted",
      example: "fscanf(fp, \"%d %f\", &num, &value); fprintf(fp, \"%d\", num);"
    },
    {
      title: "Binary I/O",
      content: "fread() read binary, fwrite() write binary",
      example: "fread(&obj, sizeof(struct Student), 1, fp);"
    },
    {
      title: "File Position",
      content: "fseek() move, ftell() current position, rewind() to beginning",
      example: "fseek(fp, 0, SEEK_END); // move to end"
    },

    // Dynamic Memory (5 tricks)
    {
      title: "malloc()",
      content: "Allocates memory | void* malloc(size_t size); | Returns NULL if fails",
      example: "int *p = (int*)malloc(10 * sizeof(int));"
    },
    {
      title: "calloc()",
      content: "Allocates and initializes to zero | void* calloc(size_t n, size_t size);",
      example: "int *p = (int*)calloc(10, sizeof(int)); // all zeros"
    },
    {
      title: "realloc()",
      content: "Resizes allocated memory | void* realloc(void *ptr, size_t new_size);",
      example: "p = realloc(p, 20 * sizeof(int)); // resize"
    },
    {
      title: "free()",
      content: "Deallocates memory | void free(void *ptr); | Prevents memory leak",
      example: "free(p); p = NULL; // avoid dangling pointer"
    },
    {
      title: "Memory Leak",
      content: "Allocated memory not freed | Wastes memory, causes crashes",
      example: "Always free() what you malloc()"
    }
  ],

  detailedNotes: {
    "C Fundamentals & Operators": {
      keyConcepts: [
        "C is procedural, structured, middle-level programming language",
        "Developed by Dennis Ritchie at Bell Labs (1972)",
        "Compilation process: Preprocessing → Compilation → Assembly → Linking",
        "Tokens: Smallest individual units (keywords, identifiers, operators, etc.)",
        "Data types specify type of data and memory required",
        "Constants: Fixed values that cannot be changed during execution",
        "Variables: Named memory locations that can store values"
      ],
      importantPoints: [
        "32 keywords in C: auto, break, case, char, const, continue, etc.",
        "Identifiers: Names given to variables, functions, arrays, etc.",
        "Escape sequences begin with backslash: \\n, \\t, \\\", \\\\, etc.",
        "sizeof() operator gives size in bytes, not number of elements",
        "Type modifiers: signed, unsigned, short, long",
        "Integer division truncates decimal part (5/2 = 2)",
        "Modulo operator % works only with integers"
      ],
      memoryAids: [
        "Keywords: 32 total, all lowercase, cannot be used as identifiers",
        "Data type sizes: char(1), int(4), float(4), double(8) - typical values",
        "Operator precedence: PUMASRBLC (Parentheses, Unary, Multiplicative, Additive, Shift, Relational, Bitwise, Logical, Conditional, Assignment, Comma)"
      ]
    },
    
    "Control Statements & Loops": {
      keyConcepts: [
        "Sequence: Statements executed in order",
        "Selection: if, if-else, switch - choose based on condition",
        "Iteration: while, do-while, for - repeat statements",
        "Branching: break, continue, goto - alter flow",
        "Conditional expression returns 0 (false) or non-zero (true)"
      ],
      importantPoints: [
        "if evaluates expression: non-zero = true, zero = false",
        "switch expression must be integer or character type",
        "case values must be constants, cannot be variables",
        "Default case in switch is optional, executes when no match",
        "while: check condition first, may execute 0 times",
        "do-while: execute first, then check condition, executes at least once",
        "for loop: initialization done once, condition checked each iteration",
        "break exits loop/switch immediately, continue skips to next iteration",
        "goto jumps to label, avoid for structured programming"
      ],
      memoryAids: [
        "Switch: Expression must be int/char, cases must be constants, break needed after each case",
        "Loop types: while (0+ times), do-while (1+ times), for (known iterations)",
        "Flow control: break (exit), continue (next iteration), goto (jump anywhere)"
      ]
    },
    
    "Arrays & Strings": {
      keyConcepts: [
        "Array: Collection of similar data elements stored contiguously",
        "Index: Position of element, starts from 0",
        "1D Array: Single row of elements",
        "2D Array: Matrix with rows and columns",
        "String: Character array terminated by null character (\\0)",
        "Array name is constant pointer to first element"
      ],
      importantPoints: [
        "Array declaration: type name[size];",
        "Array initialization: int arr[5] = {1,2,3,4,5};",
        "Partial initialization sets remaining elements to 0",
        "2D array: int matrix[3][4]; // 3 rows, 4 columns",
        "Row-major order: Elements stored row by row",
        "String functions: strlen(), strcpy(), strcat(), strcmp()",
        "strcpy() copies including null character",
        "strcmp() returns 0 if equal, <0 if first less, >0 if first greater",
        "Array bounds not checked - programmer's responsibility"
      ],
      memoryAids: [
        "Array: Homogeneous, contiguous, random access, fixed size",
        "String: Char array ending with \\0, library functions in string.h",
        "2D array: matrix[i][j] where i=row, j=column"
      ]
    },
    
    "Pointers & Dynamic Memory": {
      keyConcepts: [
        "Pointer: Variable that stores memory address",
        "& operator: Address of variable",
        "* operator: Value at address (dereference)",
        "Pointer arithmetic: p++ moves to next element",
        "Dynamic memory: Allocated at runtime using heap",
        "Memory allocation functions: malloc(), calloc(), realloc(), free()"
      ],
      importantPoints: [
        "Declaration: int *p; // p is pointer to int",
        "Initialization: int *p = &x; // p points to x",
        "Dereferencing: *p gives value at address",
        "NULL pointer: Points to nothing, safe to check",
        "Void pointer: Generic pointer, needs casting",
        "malloc(): Allocates raw memory, doesn't initialize",
        "calloc(): Allocates and initializes to zero",
        "realloc(): Changes size of allocated memory",
        "free(): Releases memory back to system",
        "Memory leak: Forgetting to free allocated memory"
      ],
      memoryAids: [
        "Pointer: Variable containing address of another variable",
        "Dynamic memory: malloc (raw), calloc (zeroed), realloc (resize), free (release)",
        "Common errors: Dangling pointer (freed memory), wild pointer (uninitialized), memory leak (not freed)"
      ]
    },
    
    "Functions & Recursion": {
      keyConcepts: [
        "Function: Block of code performing specific task",
        "Function declaration/prototype: Tells compiler about function",
        "Function definition: Actual implementation",
        "Function call: Invoking function with arguments",
        "Parameter passing: Call by value (copy), call by reference (address)",
        "Recursion: Function calling itself",
        "Storage classes: auto, register, static, extern"
      ],
      importantPoints: [
        "Function prototype: return_type name(parameters);",
        "Actual parameters: Values passed in function call",
        "Formal parameters: Variables in function definition",
        "Return statement: Returns value to caller, exits function",
        "Call by value: Changes to parameters don't affect arguments",
        "Call by reference: Using pointers, changes affect arguments",
        "Recursion needs: Base case (stopping condition), recursive call",
        "Static variable: Retains value between function calls",
        "main() function: Program entry point, returns int to OS"
      ],
      memoryAids: [
        "Function: Declaration (prototype), Definition (implementation), Call (invocation)",
        "Parameter passing: By value (copy, no effect), by reference (pointer, affects original)",
        "Recursion: Base case (stop), recursive case (call self with smaller problem)"
      ]
    },
    
    "Structures, Unions & Files": {
      keyConcepts: [
        "Structure: User-defined data type grouping different types",
        "Union: Similar to structure but members share memory",
        "typedef: Creates alias for existing type",
        "File: Named location on disk storing related information",
        "File operations: Open, read, write, close",
        "File modes: Read, write, append, binary"
      ],
      importantPoints: [
        "Structure declaration: struct tag { members; };",
        "Structure variable: struct tag variable;",
        "Member access: variable.member or pointer->member",
        "Array of structures: struct Student class[50];",
        "Nested structures: Structure inside structure",
        "Union size = size of largest member",
        "Only one union member can contain value at a time",
        "File pointer: FILE *fp;",
        "fopen() returns pointer, NULL if fails",
        "Always check if file opened successfully",
        "Always close files with fclose()"
      ],
      memoryAids: [
        "Structure: Group different data types, each member has separate memory",
        "Union: Members share memory, size = largest member, only one active",
        "File operations: fopen (open), fread/fwrite (data), fclose (close)"
      ]
    }
  },

  quickReference: {
    "c-1": "C is procedural, structured, middle-level programming language",
    "c-2": "Developed by Dennis Ritchie at Bell Labs in 1972",
    "c-3": "C program structure: Preprocessor directives → Global declarations → main() → Other functions",
    "c-4": "main() function is the entry point of every C program",
    "c-5": "#include includes header files, #define defines macros",
    "c-6": "Comments: // single line, /* */ multi-line",
    "c-7": "Keywords: Reserved words with special meaning (32 keywords)",
    "c-8": "Identifiers: Names for variables, functions, etc. (letters, digits, underscore)",
    "c-9": "Data types: int, float, double, char, void",
    "c-10": "int: Integer values, typically 4 bytes",
    "c-11": "float: Single precision floating point, 4 bytes",
    "c-12": "double: Double precision floating point, 8 bytes",
    "c-13": "char: Single character, 1 byte",
    "c-14": "void: No value, used for functions that don't return value",
    "c-15": "Constants: Fixed values (123, 12.34, 'A', \"Hello\")",
    "c-16": "Variables: Named memory locations that store values",
    "c-17": "Declaration: int x; (tells compiler about variable)",
    "c-18": "Initialization: int x = 10; (declaration + assignment)",
    "c-19": "Escape sequences: \\n newline, \\t tab, \\\\ backslash, \\\" double quote",
    "c-20": "Operators: Symbols that perform operations on operands",
    "c-21": "Arithmetic operators: +, -, *, /, %",
    "c-22": "Relational operators: ==, !=, <, >, <=, >=",
    "c-23": "Logical operators: && (AND), || (OR), ! (NOT)",
    "c-24": "Assignment operators: =, +=, -=, *=, /=, %=",
    "c-25": "Increment/decrement: ++ (increment), -- (decrement)",
    "c-26": "Bitwise operators: & (AND), | (OR), ^ (XOR), ~ (NOT), << (left shift), >> (right shift)",
    "c-27": "Conditional operator: condition ? expr1 : expr2",
    "c-28": "sizeof operator: Returns size in bytes",
    "c-29": "Comma operator: expr1, expr2 (evaluates both, returns expr2)",
    "c-30": "Operator precedence determines order of evaluation",
    "c-31": "Type conversion: Implicit (automatic), Explicit (cast)",
    "c-32": "Control statements: if, if-else, switch, while, do-while, for",
    "c-33": "if statement: Executes block if condition is true",
    "c-34": "if-else: Executes one block if true, another if false",
    "c-35": "switch: Multi-way decision based on integer/character value",
    "c-36": "while loop: Entry-controlled, 0 or more iterations",
    "c-37": "do-while loop: Exit-controlled, at least 1 iteration",
    "c-38": "for loop: Initialization, condition, increment in one line",
    "c-39": "break: Exits loop or switch immediately",
    "c-40": "continue: Skips to next iteration of loop",
    "c-41": "goto: Unconditional jump to label (avoid for structured programming)",
    "c-42": "Array: Collection of similar elements stored contiguously",
    "c-43": "1D array: int arr[5]; // 5 integers",
    "c-44": "2D array: int matrix[3][4]; // 3 rows, 4 columns",
    "c-45": "Array index starts from 0, ends at size-1",
    "c-46": "Array initialization: int arr[5] = {1,2,3,4,5};",
    "c-47": "Array name is constant pointer to first element",
    "c-48": "String: Character array terminated by null character (\\0)",
    "c-49": "String functions: strlen(), strcpy(), strcat(), strcmp()",
    "c-50": "strlen(): Returns length of string (excluding \\0)",
    "c-51": "strcpy(dest, src): Copies src to dest",
    "c-52": "strcat(dest, src): Appends src to dest",
    "c-53": "strcmp(s1, s2): Compares s1 and s2, returns 0 if equal",
    "c-54": "Pointers: Variables that store memory addresses",
    "c-55": "Pointer declaration: int *p;",
    "c-56": "Address operator: &x gives address of x",
    "c-57": "Dereference operator: *p gives value at address p",
    "c-58": "Pointer arithmetic: p++ moves to next element of same type",
    "c-59": "Array and pointer relationship: arr[i] ≡ *(arr+i)",
    "c-60": "Pointer to pointer: int **pp;",
    "c-61": "Pointer to array: int (*p)[5];",
    "c-62": "Array of pointers: int *arr[5];",
    "c-63": "Function pointer: int (*fp)(int, int);",
    "c-64": "NULL pointer: Points to nothing, defined as 0",
    "c-65": "Void pointer: Generic pointer, can point to any type",
    "c-66": "Dynamic memory allocation: malloc(), calloc(), realloc(), free()",
    "c-67": "malloc(size): Allocates memory of given size",
    "c-68": "calloc(n, size): Allocates memory for n elements of given size, initializes to 0",
    "c-69": "realloc(ptr, new_size): Changes size of allocated memory",
    "c-70": "free(ptr): Deallocates previously allocated memory",
    "c-71": "Functions: Blocks of code performing specific tasks",
    "c-72": "Function prototype: return_type name(parameters);",
    "c-73": "Function definition: return_type name(parameters) { body }",
    "c-74": "Function call: name(arguments);",
    "c-75": "return statement: Returns value to caller",
    "c-76": "Actual parameters: Values passed in function call",
    "c-77": "Formal parameters: Variables in function definition",
    "c-78": "Call by value: Copy of argument passed (default)",
    "c-79": "Call by reference: Address passed using pointers",
    "c-80": "Recursion: Function calling itself",
    "c-81": "Storage classes: auto, register, static, extern",
    "c-82": "auto: Default for local variables",
    "c-83": "register: Suggests storing in register for fast access",
    "c-84": "static: Retains value between function calls",
    "c-85": "extern: Declares variable defined elsewhere",
    "c-86": "Structure: User-defined data type grouping different types",
    "c-87": "struct keyword defines structure: struct tag { members; };",
    "c-88": "Structure variable: struct Student s1;",
    "c-89": "Member access: s1.roll (dot operator) or p->roll (arrow operator)",
    "c-90": "typedef: Creates alias for type: typedef int Integer;",
    "c-91": "Union: Similar to structure but members share memory",
    "c-92": "union keyword defines union: union tag { members; };",
    "c-93": "Union size = size of largest member",
    "c-94": "File handling: Reading from and writing to files",
    "c-95": "FILE *fp; declares file pointer",
    "c-96": "fopen(filename, mode): Opens file, returns pointer",
    "c-97": "fclose(fp): Closes file",
    "c-98": "File modes: \"r\" read, \"w\" write, \"a\" append, \"b\" binary",
    "c-99": "fprintf(), fscanf(): Formatted file I/O",
    "c-100": "Preprocessor directives: #include, #define, #ifdef, #ifndef, #endif"
  },

  examStrategy: {
    topicWeightage: [
      "C Fundamentals & Operators: 10-12 questions",
      "Control Statements & Loops: 12-15 questions",
      "Arrays & Strings: 15-18 questions",
      "Pointers & Dynamic Memory: 15-18 questions",
      "Functions & Recursion: 12-15 questions",
      "Structures & Unions: 8-10 questions",
      "File Handling: 5-7 questions",
      "Preprocessor & Macros: 4-6 questions",
      "Error Handling & Debugging: 3-5 questions",
      "Program Output Prediction: 10-12 questions"
    ],
    preparationTips: [
      "1. Master pointer concepts thoroughly - most important topic",
      "2. Practice array manipulation and string functions extensively",
      "3. Understand recursion with examples (factorial, Fibonacci, etc.)",
      "4. Memorize operator precedence and associativity",
      "5. Practice structure and union differences with examples",
      "6. Learn file handling functions and their parameters",
      "7. Practice dynamic memory allocation with malloc/free",
      "8. Study storage classes and their scope/lifetime",
      "9. Solve output prediction questions from previous papers",
      "10. Write and debug small programs for each concept"
    ],
    timeManagement: [
      "Fibonacci series using recursion",
      "Factorial calculation",
      "Prime number checking",
      "Palindrome checking for strings/numbers",
      "Matrix multiplication",
      "String operations without library functions",
      "Linked list implementation",
      "Binary search implementation",
      "Bubble/Selection/Insertion sort",
      "File copy program",
      "Structure for student database",
      "Pointer arithmetic examples",
      "Command line argument handling",
      "Dynamic array implementation",
      "Stack/Queue using arrays",

      "Forgetting semicolon at end of statements",
      "Using = instead of == in conditions",
      "Array index out of bounds",
      "Not initializing pointers before use",
      "Forgetting to free dynamically allocated memory",
      "String without null terminator",
      "Missing break in switch cases",
      "Infinite loops due to wrong condition",
      "Wrong format specifiers in printf/scanf",
      "Not checking return value of malloc()",

      "stdio.h: printf(), scanf(), getchar(), putchar(), gets(), puts()",
      "string.h: strlen(), strcpy(), strcat(), strcmp(), strrev(), strstr()",
      "stdlib.h: malloc(), calloc(), realloc(), free(), exit()",
      "math.h: sqrt(), pow(), abs(), ceil(), floor()",
      "ctype.h: isalpha(), isdigit(), isalnum(), toupper(), tolower()",
      "time.h: time(), clock(), difftime()"
    ]
  }
},

"Object Oriented Programming": {
  icon: "fas fa-object-group",
  color: "#EC4899",
  tricks: [
    // OOP Fundamentals (10 tricks)
    {
      title: "OOP Pillars",
      content: "APIE - Abstraction, Polymorphism, Inheritance, Encapsulation",
      example: "Class abstracts real-world entity, methods polymorph, inherits properties, data encapsulated"
    },
    {
      title: "Class vs Object",
      content: "Class: Blueprint/template | Object: Instance of class | Class defines, object exists",
      example: "Class: Car (blueprint) | Object: MyCar, YourCar (actual cars)"
    },
    {
      title: "Basic OOP Concepts",
      content: "Object: Real-world entity | Class: Collection of objects | Method: Behavior of object | Message: Communication between objects",
      example: "Student class with objects Ravi, Priya; method: calculateGrade()"
    },
    {
      title: "Benefits of OOP",
      content: "Reusability (inheritance), Modularity (classes), Maintainability, Security (encapsulation), Flexibility (polymorphism), Easy debugging",
      example: "Reuse code through inheritance, hide data through encapsulation"
    },
    {
      title: "Application Areas",
      content: "GUI applications, Simulation systems, AI/expert systems, CAD/CAM systems, Database systems, Web applications",
      example: "Java GUI apps, C++ games, Python AI"
    },
    {
      title: "Object Characteristics",
      content: "Identity (unique name), State (attributes), Behavior (methods), Class membership",
      example: "Car object: Identity=LicensePlate, State=Color/Speed, Behavior=Accelerate/Brake"
    },
    {
      title: "Message Passing",
      content: "Objects communicate by sending/receiving messages | object.method(parameters)",
      example: "car1.startEngine(); // message to car1 to start engine"
    },
    {
      title: "Dynamic Binding",
      content: "Code associated with procedure call determined at runtime | Enables polymorphism",
      example: "Shape s = new Circle(); s.draw(); // calls Circle's draw() at runtime"
    },
    {
      title: "Persistent Objects",
      content: "Objects that exist beyond program execution | Stored in databases/files",
      example: "Student objects saved to database persist between sessions"
    },
    {
      title: "OOP vs Procedural",
      content: "OOP: Data + methods together, focuses on objects | Procedural: Data + functions separate, focuses on procedures",
      example: "OOP: Student class with methods | Procedural: Student data + separate functions"
    },

    // Classes & Objects (10 tricks)
    {
      title: "Class Components",
      content: "Data members (attributes/variables), Member functions (methods), Constructors, Destructors, Access specifiers",
      example: "class Student { private: int roll; public: void display(); };"
    },
    {
      title: "Object Creation",
      content: "Static: ClassName obj; (compile time) | Dynamic: ClassName *obj = new ClassName(); (runtime)",
      example: "Student s1; // static | Student *s2 = new Student(); // dynamic"
    },
    {
      title: "Access Specifiers",
      content: "public: Accessible everywhere | private: Only within class | protected: Class + derived classes",
      example: "public methods for interface, private data for security"
    },
    {
      title: "Member Functions",
      content: "Inside class: Defined in class | Outside class: Declared in class, defined outside using ::",
      example: "void Student::display() { ... } // outside definition"
    },
    {
      title: "Inline Functions",
      content: "Small functions defined inside class | Avoid function call overhead | Compiler may ignore",
      example: "class Math { public: inline int square(int x) { return x*x; } };"
    },
    {
      title: "Static Members",
      content: "Shared by all objects | Only one copy exists | Initialize outside class",
      example: "class Counter { static int count; }; int Counter::count = 0;"
    },
    {
      title: "Friend Functions",
      content: "Non-member function with access to private members | Declared with friend keyword",
      example: "friend void display(Student s); // can access private members"
    },
    {
      title: "Friend Classes",
      content: "One class can access private members of another | Mutual friendship needed",
      example: "class B { friend class A; }; // A can access B's private members"
    },
    {
      title: "const Member Functions",
      content: "Cannot modify object's data members | const at end of declaration",
      example: "int getValue() const { return value; } // cannot modify value"
    },
    {
      title: "Mutable Members",
      content: "Can be modified even in const functions | mutable keyword",
      example: "mutable int debugCount; // can modify in const functions"
    },

    // Constructors & Destructors (10 tricks)
    {
      title: "Constructor Types",
      content: "Default (no parameters), Parameterized (with parameters), Copy (object as parameter)",
      example: "Student() {}, Student(int r), Student(Student &s)"
    },
    {
      title: "Constructor Characteristics",
      content: "Same name as class, No return type, Automatically called, Can be overloaded, Cannot be virtual",
      example: "class Student { public: Student(); // constructor };"
    },
    {
      title: "Default Constructor",
      content: "No parameters | Provided by compiler if no constructor defined | Initializes members to default values",
      example: "Student s1; // calls default constructor"
    },
    {
      title: "Parameterized Constructor",
      content: "With parameters | Used to initialize objects with specific values",
      example: "Student s1(101, \"John\"); // initialize with roll and name"
    },
    {
      title: "Copy Constructor",
      content: "Creates object as copy of existing object | Student s2(s1); or Student s2 = s1;",
      example: "Used when passing object by value, returning object from function"
    },
    {
      title: "Constructor Overloading",
      content: "Multiple constructors with different parameters",
      example: "Student(); Student(int r); Student(int r, string n);"
    },
    {
      title: "Destructor",
      content: "~ClassName() | Called when object destroyed | Releases resources | No parameters, cannot be overloaded",
      example: "~Student() { delete[] marks; } // free dynamic memory"
    },
    {
      title: "Order of Execution",
      content: "Base class constructor → Derived class constructor → Derived class destructor → Base class destructor",
      example: "Parent created first, child created next, child destroyed first, parent destroyed last"
    },
    {
      title: "Constructor Initialization List",
      content: "More efficient than assignment in constructor body | Must use for const members, references",
      example: "Student(int r) : roll(r) { } // initialization list"
    },
    {
      title: "Dynamic Constructor",
      content: "Allocates memory dynamically using new | Must define copy constructor and destructor properly",
      example: "Student() { marks = new int[5]; }"
    },

    // Inheritance (15 tricks)
    {
      title: "Inheritance Types",
      content: "Single (One base, one derived), Multiple (Multiple bases, one derived), Multilevel (Chain), Hierarchical (One base, many derived), Hybrid (Combination)",
      example: "Vehicle → Car (single), Vehicle → Car → SportsCar (multilevel)"
    },
    {
      title: "Inheritance Syntax",
      content: "class Derived : access-specifier Base { ... }; | access-specifier: public, private, protected",
      example: "class Car : public Vehicle { ... };"
    },
    {
      title: "Access Specifiers in Inheritance",
      content: "public inheritance: public stays public, protected stays protected | private inheritance: all become private | protected inheritance: public becomes protected",
      example: "Base public → Derived public (if public inheritance)"
    },
    {
      title: "Types of Inheritance",
      content: "Public: Most common, IS-A relationship | Private: HAS-A relationship, implementation inheritance | Protected: Rarely used",
      example: "Car IS-A Vehicle (public), Car HAS-A Engine (composition better)"
    },
    {
      title: "Method Overriding",
      content: "Redefining base class method in derived class | Same name, parameters, return type | Virtual functions enable runtime polymorphism",
      example: "Base: virtual void show() | Derived: void show() override"
    },
    {
      title: "Virtual Functions",
      content: "Dynamic binding, runtime polymorphism | Declared with virtual keyword | Must be overridden in derived classes",
      example: "virtual void calculateArea() = 0; // pure virtual"
    },
    {
      title: "Abstract Class",
      content: "Contains at least one pure virtual function | Cannot instantiate | Used as interface",
      example: "class Shape { virtual void draw() = 0; }; // abstract"
    },
    {
      title: "Pure Virtual Function",
      content: "virtual return_type func() = 0; | Must be overridden in derived concrete classes",
      example: "Makes class abstract, defines interface"
    },
    {
      title: "Function Hiding",
      content: "Derived class function hides base class function with same name (not same signature)",
      example: "Base: void display(int) | Derived: void display() // hides base display(int)"
    },
    {
      title: "Constructor in Inheritance",
      content: "Base constructor called first | Derived constructor can pass parameters to base",
      example: "Derived(int x, int y) : Base(x) { this->y = y; }"
    },
    {
      title: "Destructor in Inheritance",
      content: "Should be virtual in base class | Derived destructor called first",
      example: "virtual ~Base() ensures proper cleanup of derived objects"
    },
    {
      title: "Multiple Inheritance Issues",
      content: "Ambiguity (same name in multiple bases), Diamond problem (duplicate base), Complexity",
      example: "class D : public B1, public B2 { }; // if both B1,B2 have same method"
    },
    {
      title: "Virtual Base Class",
      content: "Solves diamond problem | Ensures only one copy of base class | virtual keyword in inheritance",
      example: "class B { }; class D1 : virtual public B { }; class D2 : virtual public B { };"
    },
    {
      title: "Object Slicing",
      content: "When derived object assigned to base object, derived part gets sliced off",
      example: "Base b = derivedObj; // only base part copied"
    },
    {
      title: "Upcasting & Downcasting",
      content: "Upcast: Derived* → Base* (safe) | Downcast: Base* → Derived* (needs dynamic_cast)",
      example: "Base *b = new Derived(); // upcast | Derived *d = dynamic_cast<Derived*>(b); // downcast"
    },

    // Polymorphism (10 tricks)
    {
      title: "Types of Polymorphism",
      content: "Compile-time: Function overloading, Operator overloading | Runtime: Virtual functions, Function overriding",
      example: "Overloading (compile-time), Overriding (runtime)"
    },
    {
      title: "Function Overloading",
      content: "Same name, different parameters | Compile-time polymorphism | Within same class",
      example: "void print(int), void print(double), void print(string)"
    },
    {
      title: "Operator Overloading",
      content: "Redefine operators for user-defined types | operator+(), operator==()",
      example: "Complex operator+(Complex c) { ... }"
    },
    {
      title: "Rules for Operator Overloading",
      content: "Cannot change precedence, associativity, arity | Cannot create new operators | Some operators cannot be overloaded (::, ., *, ?:)",
      example: "Overload + for Complex numbers to add real and imaginary parts"
    },
    {
      title: "Unary Operator Overloading",
      content: "One operand | Can be member function (no parameters) or friend function (one parameter)",
      example: "Complex operator-() { return Complex(-real, -imag); } // negation"
    },
    {
      title: "Binary Operator Overloading",
      content: "Two operands | Member function: one parameter | Friend function: two parameters",
      example: "Complex operator+(Complex c) { ... } // member"
    },
    {
      title: "Overloading ++ and --",
      content: "Prefix: operator++() | Postfix: operator++(int) | int parameter distinguishes postfix",
      example: "Counter operator++() { // prefix } | Counter operator++(int) { // postfix }"
    },
    {
      title: "Overloading = Operator",
      content: "Assignment operator | Must handle self-assignment | Returns reference to *this",
      example: "String& operator=(const String& s) { if(this != &s) copy; return *this; }"
    },
    {
      title: "Overloading << and >>",
      content: "For input/output | Must be friend functions | Return reference to stream",
      example: "friend ostream& operator<<(ostream& out, Complex c) { out << c.real; return out; }"
    },
    {
      title: "Virtual Function Table",
      content: "VTable: Array of function pointers | Created for classes with virtual functions | Each object has VPointer to VTable",
      example: "Enables runtime polymorphism, adds small overhead"
    },

    // Advanced OOP (10 tricks)
    {
      title: "Exception Handling",
      content: "try { code } catch(type e) { handle } throw exception | Standard exceptions: bad_alloc, out_of_range",
      example: "try { if(x==0) throw \"Divide by zero\"; } catch(const char* e) { cout << e; }"
    },
    {
      title: "Templates",
      content: "Generic programming | Function templates: template<class T> | Class templates: template<class T> class",
      example: "template<class T> T max(T a, T b) { return (a>b)?a:b; }"
    },
    {
      title: "STL Components",
      content: "Containers (vector, list, map), Algorithms (sort, find), Iterators (pointers to elements), Functors (function objects)",
      example: "vector<int> v; sort(v.begin(), v.end());"
    },
    {
      title: "Namespaces",
      content: "Prevents name conflicts | namespace name { declarations } | using namespace name;",
      example: "namespace Math { const double PI=3.14; } Math::PI"
    },
    {
      title: "Type Conversion",
      content: "Basic to class (constructor), Class to basic (operator function), Class to class (constructor or operator)",
      example: "class Time { Time(int s) { } }; // basic to class"
    },
    {
      title: "RTTI (Runtime Type Information)",
      content: "typeid() returns type information | dynamic_cast for safe downcasting",
      example: "if(typeid(*ptr) == typeid(Derived)) Derived *d = dynamic_cast<Derived*>(ptr);"
    },
    {
      title: "Smart Pointers",
      content: "unique_ptr (exclusive ownership), shared_ptr (shared ownership), weak_ptr (non-owning reference)",
      example: "unique_ptr<Student> p(new Student()); // auto deletes"
    },
    {
      title: "Lambda Expressions",
      content: "[capture](parameters) -> return_type { body } | Anonymous functions",
      example: "auto square = [](int x) { return x*x; }; cout << square(5);"
    },
    {
      title: "Move Semantics",
      content: "std::move() transfers resources | Avoids unnecessary copying | rvalue references (&&)",
      example: "String(String&& other) { data = other.data; other.data = nullptr; } // move constructor"
    },
    {
      title: "Design Patterns",
      content: "Singleton (single instance), Factory (object creation), Observer (event handling), Strategy (algorithm family)",
      example: "Singleton ensures only one instance exists globally"
    },

    // Memory Management (5 tricks)
    {
      title: "new vs malloc()",
      content: "new: Calls constructor, type-safe, can be overloaded | malloc(): C function, no constructor, returns void*",
      example: "Student *s = new Student(); vs Student *s = (Student*)malloc(sizeof(Student));"
    },
    {
      title: "delete vs free()",
      content: "delete: Calls destructor, type-safe | free(): C function, no destructor",
      example: "delete s; vs free(s);"
    },
    {
      title: "Shallow vs Deep Copy",
      content: "Shallow: Copies pointers (same memory) | Deep: Copies data (new memory)",
      example: "Default copy constructor does shallow copy, need to define for deep copy"
    },
    {
      title: "Memory Leak",
      content: "Allocated memory not freed | new without delete | Causes program to consume more memory",
      example: "void func() { int *p = new int[100]; } // memory leak if not deleted"
    },
    {
      title: "RAII (Resource Acquisition Is Initialization)",
      content: "Resource tied to object lifetime | Constructor acquires, destructor releases | Prevents leaks",
      example: "File handling: open in constructor, close in destructor"
    },

    // OOP Principles (5 tricks)
    {
      title: "SOLID Principles",
      content: "S: Single Responsibility | O: Open-Closed | L: Liskov Substitution | I: Interface Segregation | D: Dependency Inversion",
      example: "Class should have only one reason to change (Single Responsibility)"
    },
    {
      title: "DRY Principle",
      content: "Don't Repeat Yourself | Reuse code through inheritance, functions, templates",
      example: "Common code in base class, derived classes inherit"
    },
    {
      title: "KISS Principle",
      content: "Keep It Simple, Stupid | Simple design, easy to understand and maintain",
      example: "Avoid unnecessary complexity in class hierarchy"
    },
    {
      title: "YAGNI Principle",
      content: "You Ain't Gonna Need It | Don't add functionality until needed",
      example: "Don't create complex inheritance unless actually required"
    },
    {
      title: "Composition over Inheritance",
      content: "Favor object composition over class inheritance | More flexible, less coupling",
      example: "Car HAS-A Engine (composition) vs Car IS-A Vehicle (inheritance)"
    }
  ],

  detailedNotes: {
    "OOP Fundamentals & Principles": {
      keyConcepts: [
        "Object: Real-world entity with state and behavior",
        "Class: Blueprint/template for creating objects",
        "Encapsulation: Wrapping data and methods together, hiding implementation",
        "Abstraction: Showing essential features, hiding background details",
        "Inheritance: Creating new classes from existing ones",
        "Polymorphism: Ability to take many forms (same interface, different implementation)",
        "Message Passing: Objects communicate by invoking each other's methods"
      ],
      importantPoints: [
        "Encapsulation is implemented using access specifiers (public, private, protected)",
        "Abstraction is achieved through abstract classes and interfaces",
        "Inheritance supports code reusability and establishes IS-A relationship",
        "Polymorphism enables writing generic code that works with different types",
        "Dynamic binding allows method invocation to be resolved at runtime",
        "Objects have identity (unique), state (attributes), behavior (methods)",
        "OOP focuses on data rather than procedures (unlike procedural programming)"
      ],
      memoryAids: [
        "OOP pillars: APIE (Abstraction, Polymorphism, Inheritance, Encapsulation)",
        "Access specifiers: Public (everywhere), Private (class only), Protected (class + derived)",
        "Object characteristics: ISB (Identity, State, Behavior)"
      ]
    },
    
    "Classes, Objects & Constructors": {
      keyConcepts: [
        "Class declaration defines data members and member functions",
        "Object is instance of class created at runtime",
        "Constructor: Special method called when object is created",
        "Destructor: Special method called when object is destroyed",
        "Static members: Shared by all objects of the class",
        "Friend functions/classes: Access private members without being member"
      ],
      importantPoints: [
        "Constructors have same name as class, no return type, can be overloaded",
        "Destructor has ~ before class name, no parameters, cannot be overloaded",
        "Default constructor is provided by compiler if no constructor is defined",
        "Copy constructor creates object as copy of existing object",
        "Static data members must be defined outside the class",
        "Static member functions can only access static data members",
        "Friend functions are not member functions but have access to private members",
        "const member functions cannot modify object's data members",
        "Initialization list is more efficient than assignment in constructor"
      ],
      memoryAids: [
        "Constructor: Same name as class, no return type, automatic call",
        "Destructor: ~ClassName(), no parameters, automatic call",
        "Static: One copy shared by all objects, initialized outside class"
      ]
    },
    
    "Inheritance & Polymorphism": {
      keyConcepts: [
        "Single inheritance: One base class, one derived class",
        "Multiple inheritance: Multiple base classes, one derived class",
        "Multilevel inheritance: Chain of inheritance",
        "Hierarchical inheritance: One base class, multiple derived classes",
        "Hybrid inheritance: Combination of different inheritance types",
        "Virtual functions: Enable runtime polymorphism",
        "Abstract class: Cannot be instantiated, contains pure virtual functions"
      ],
      importantPoints: [
        "Public inheritance establishes IS-A relationship",
        "Private inheritance establishes HAS-A relationship (composition is better)",
        "Protected members are accessible in derived classes",
        "Virtual functions enable dynamic binding (runtime polymorphism)",
        "Pure virtual function makes class abstract: virtual void func() = 0;",
        "Abstract classes are used as interfaces",
        "Constructor call order: Base class first, then derived class",
        "Destructor call order: Derived class first, then base class",
        "Virtual destructor ensures proper cleanup of derived objects",
        "Diamond problem in multiple inheritance solved using virtual base class"
      ],
      memoryAids: [
        "Inheritance types: SMMHH (Single, Multiple, Multilevel, Hierarchical, Hybrid)",
        "Virtual function: Enables runtime polymorphism, declared with virtual keyword",
        "Abstract class: Contains pure virtual function, cannot create objects"
      ]
    },
    
    "Operator Overloading & Templates": {
      keyConcepts: [
        "Operator overloading: Giving new meaning to existing operators",
        "Function overloading: Multiple functions with same name, different parameters",
        "Function templates: Generic functions that work with different data types",
        "Class templates: Generic classes that work with different data types",
        "Friend functions for operator overloading when left operand is not object"
      ],
      importantPoints: [
        "Cannot overload: . (dot), .* (pointer to member), :: (scope), ?: (ternary), sizeof",
        "Cannot change precedence, associativity, or number of operands",
        "Overloaded operators can be member functions or friend functions",
        "Stream insertion (<<) and extraction (>>) must be overloaded as friend functions",
        "Assignment operator (=) should handle self-assignment",
        "Function templates use template<class T> or template<typename T>",
        "Class templates allow creating generic data structures",
        "Template specialization allows different implementation for specific types",
        "STL provides template-based containers, algorithms, and iterators"
      ],
      memoryAids: [
        "Operator overloading: Redefine operators for user-defined types",
        "Template: Generic programming, works with any data type",
        "STL: Standard Template Library (containers, algorithms, iterators)"
      ]
    },
    
    "Exception Handling & Advanced Features": {
      keyConcepts: [
        "Exception handling: Mechanism to handle runtime errors",
        "try block: Code that might throw exception",
        "catch block: Handles exception",
        "throw statement: Throws exception",
        "Standard exceptions: bad_alloc, out_of_range, invalid_argument, etc.",
        "Smart pointers: Automatic memory management",
        "Move semantics: Efficient transfer of resources"
      ],
      importantPoints: [
        "Exceptions separate error handling code from normal code",
        "Multiple catch blocks can handle different exception types",
        "catch(...) handles any type of exception",
        "Exception specifications (throw()) are deprecated in C++11",
        "Smart pointers automatically delete memory when out of scope",
        "unique_ptr has exclusive ownership, cannot be copied",
        "shared_ptr has shared ownership with reference counting",
        "weak_ptr is non-owning reference to shared_ptr managed object",
        "Move constructor and move assignment operator avoid deep copies",
        "RTTI (typeid, dynamic_cast) for type information at runtime"
      ],
      memoryAids: [
        "Exception handling: try (monitor), throw (raise), catch (handle)",
        "Smart pointers: unique (exclusive), shared (multiple), weak (reference)",
        "Move semantics: std::move transfers resources efficiently"
      ]
    },
    
    "Design Patterns & Best Practices": {
      keyConcepts: [
        "Singleton: Ensures only one instance of class exists",
        "Factory: Creates objects without specifying exact class",
        "Observer: One-to-many dependency between objects",
        "Strategy: Encapsulates family of algorithms",
        "SOLID principles: Guidelines for object-oriented design",
        "Composition over inheritance: More flexible design approach"
      ],
      importantPoints: [
        "Singleton pattern uses private constructor and static method",
        "Factory pattern centralizes object creation logic",
        "Observer pattern is used in event handling systems",
        "Strategy pattern makes algorithms interchangeable",
        "Single Responsibility: Class should have only one reason to change",
        "Open-Closed: Open for extension, closed for modification",
        "Liskov Substitution: Derived class should substitute base class",
        "Interface Segregation: Many specific interfaces better than one general",
        "Dependency Inversion: Depend on abstractions, not concretions",
        "Composition provides more flexibility than inheritance"
      ],
      memoryAids: [
        "SOLID: Single, Open-Closed, Liskov, Interface Segregation, Dependency Inversion",
        "Design patterns: Solutions to common software design problems",
        "Best practices: Follow principles for maintainable, scalable code"
      ]
    }
  },

  quickReference: {
    "oop-1": "OOP: Object-Oriented Programming (objects + classes + inheritance + polymorphism)",
    "oop-2": "Object: Real-world entity with state (data) and behavior (methods)",
    "oop-3": "Class: Blueprint/template for creating objects",
    "oop-4": "Encapsulation: Wrapping data and methods together, data hiding",
    "oop-5": "Abstraction: Showing essential features, hiding implementation details",
    "oop-6": "Inheritance: Creating new classes from existing classes (code reusability)",
    "oop-7": "Polymorphism: Same interface, different implementations (many forms)",
    "oop-8": "Message Passing: Objects communicate by invoking methods",
    "oop-9": "Dynamic Binding: Method call resolved at runtime (virtual functions)",
    "oop-10": "Class Declaration: class ClassName { access-specifier: members; };",
    "oop-11": "Object Creation: ClassName obj; (static) or ClassName *obj = new ClassName(); (dynamic)",
    "oop-12": "Access Specifiers: public (accessible everywhere), private (class only), protected (class + derived)",
    "oop-13": "Member Functions: Functions defined inside class (methods)",
    "oop-14": "Inline Functions: Small functions defined inside class (avoid call overhead)",
    "oop-15": "Static Members: Shared by all objects (one copy), static keyword",
    "oop-16": "Friend Functions: Non-member functions with access to private members",
    "oop-17": "Friend Classes: One class can access private members of another class",
    "oop-18": "Constructor: Special method called when object is created",
    "oop-19": "Destructor: Special method called when object is destroyed (~ClassName())",
    "oop-20": "Default Constructor: No parameters, provided by compiler if not defined",
    "oop-21": "Parameterized Constructor: With parameters for initialization",
    "oop-22": "Copy Constructor: Creates object as copy of existing object (ClassName(const ClassName&))",
    "oop-23": "Constructor Overloading: Multiple constructors with different parameters",
    "oop-24": "Destructor Characteristics: No parameters, no return type, cannot be overloaded",
    "oop-25": "Initialization List: More efficient way to initialize members (Constructor(): member(value) {})",
    "oop-26": "Inheritance Types: Single, Multiple, Multilevel, Hierarchical, Hybrid",
    "oop-27": "Single Inheritance: One base class, one derived class",
    "oop-28": "Multiple Inheritance: Multiple base classes, one derived class",
    "oop-29": "Multilevel Inheritance: Chain of inheritance (A→B→C)",
    "oop-30": "Hierarchical Inheritance: One base class, multiple derived classes",
    "oop-31": "Hybrid Inheritance: Combination of multiple and multilevel inheritance",
    "oop-32": "Public Inheritance: Base public→Derived public, Base protected→Derived protected",
    "oop-33": "Private Inheritance: All base members become private in derived class",
    "oop-34": "Protected Inheritance: Base public becomes protected in derived class",
    "oop-35": "Virtual Functions: Enable runtime polymorphism (virtual keyword)",
    "oop-36": "Pure Virtual Function: virtual void func() = 0; (makes class abstract)",
    "oop-37": "Abstract Class: Contains at least one pure virtual function, cannot instantiate",
    "oop-38": "Function Overriding: Redefining base class method in derived class (same signature)",
    "oop-39": "Function Overloading: Same name, different parameters (compile-time polymorphism)",
    "oop-40": "Virtual Base Class: Solves diamond problem in multiple inheritance",
    "oop-41": "Object Slicing: Derived object assigned to base object loses derived part",
    "oop-42": "Upcasting: Derived* to Base* (safe, implicit)",
    "oop-43": "Downcasting: Base* to Derived* (needs dynamic_cast, check with typeid)",
    "oop-44": "Operator Overloading: Giving new meaning to existing operators",
    "oop-45": "Unary Operator Overloading: operator++(), operator--() (one operand)",
    "oop-46": "Binary Operator Overloading: operator+(), operator-() (two operands)",
    "oop-47": "Overloading << and >>: Must be friend functions for stream I/O",
    "oop-48": "Cannot Overload: ., .*, ::, ?:, sizeof, typeid",
    "oop-49": "Function Templates: template<class T> T func(T a, T b) { ... }",
    "oop-50": "Class Templates: template<class T> class ClassName { T data; };",
    "oop-51": "STL: Standard Template Library (containers, algorithms, iterators)",
    "oop-52": "Containers: vector, list, deque, stack, queue, map, set",
    "oop-53": "Algorithms: sort, find, binary_search, copy, transform",
    "oop-54": "Iterators: Pointers to container elements (begin(), end())",
    "oop-55": "Exception Handling: try { } catch(type e) { } throw value;",
    "oop-56": "try block: Code that might throw exception",
    "oop-57": "catch block: Handles exception of specific type",
    "oop-58": "throw statement: Throws exception",
    "oop-59": "Standard Exceptions: bad_alloc, out_of_range, invalid_argument, logic_error",
    "oop-60": "Multiple catch blocks: Different handlers for different exception types",
    "oop-61": "catch(...): Catches any type of exception",
    "oop-62": "RTTI: Runtime Type Information (typeid, dynamic_cast)",
    "oop-63": "typeid operator: Returns type information (typeid(obj).name())",
    "oop-64": "dynamic_cast: Safe downcasting with runtime check",
    "oop-65": "Smart Pointers: Automatic memory management (unique_ptr, shared_ptr, weak_ptr)",
    "oop-66": "unique_ptr: Exclusive ownership, cannot be copied",
    "oop-67": "shared_ptr: Shared ownership with reference counting",
    "oop-68": "weak_ptr: Non-owning reference to shared_ptr managed object",
    "oop-69": "Move Semantics: Efficient transfer of resources (std::move, rvalue references)",
    "oop-70": "Move Constructor: ClassName(ClassName&& other) { transfer resources }",
    "oop-71": "Move Assignment: ClassName& operator=(ClassName&& other) { transfer resources }",
    "oop-72": "Lambda Expressions: [capture](parameters) -> return_type { body }",
    "oop-73": "Namespaces: namespace Name { declarations } using namespace Name;",
    "oop-74": "std namespace: Standard library namespace (std::cout, std::vector)",
    "oop-75": "Singleton Pattern: Ensures only one instance of class exists",
    "oop-76": "Factory Pattern: Creates objects without specifying exact class",
    "oop-77": "Observer Pattern: One-to-many dependency between objects",
    "oop-78": "Strategy Pattern: Encapsulates family of algorithms, makes them interchangeable",
    "oop-79": "SOLID Principles: Single, Open-Closed, Liskov, Interface Segregation, Dependency Inversion",
    "oop-80": "Single Responsibility: Class should have only one reason to change",
    "oop-81": "Open-Closed: Open for extension, closed for modification",
    "oop-82": "Liskov Substitution: Derived class should substitute base class without affecting correctness",
    "oop-83": "Interface Segregation: Many client-specific interfaces better than one general-purpose",
    "oop-84": "Dependency Inversion: Depend on abstractions, not concretions",
    "oop-85": "Composition over Inheritance: Favor object composition over class inheritance",
    "oop-86": "RAII: Resource Acquisition Is Initialization (resource tied to object lifetime)",
    "oop-87": "Shallow Copy: Copies pointers (shares memory)",
    "oop-88": "Deep Copy: Copies data (new memory allocated)",
    "oop-89": "Memory Leak: Allocated memory not freed (new without delete)",
    "oop-90": "Virtual Destructor: virtual ~ClassName() ensures proper cleanup of derived objects",
    "oop-91": "Virtual Function Table (VTable): Table of function pointers for virtual functions",
    "oop-92": "VPointer: Pointer to VTable in each object with virtual functions",
    "oop-93": "const Member Functions: Cannot modify object (int get() const { return value; })",
    "oop-94": "mutable Members: Can be modified even in const functions (mutable int counter;)",
    "oop-95": "Friend for Operator Overloading: Needed when left operand is not object of class",
    "oop-96": "Overloading Assignment (=): Must handle self-assignment, return *this",
    "oop-97": "Overloading ++/--: Prefix: operator++(), Postfix: operator++(int)",
    "oop-98": "Diamond Problem: Multiple inheritance where derived gets two copies of base",
    "oop-99": "Virtual Inheritance: Solves diamond problem (class Derived: virtual public Base)",
    "oop-100": "OOP Languages: C++, Java, C#, Python, Ruby, Smalltalk (first OOP language)"
  },

  examStrategy: {
    topicWeightage: [
      "OOP Fundamentals & Principles: 10-12 questions",
      "Classes, Objects & Constructors: 12-15 questions",
      "Inheritance & Polymorphism: 15-18 questions",
      "Operator Overloading & Templates: 10-12 questions",
      "Exception Handling & Advanced Features: 8-10 questions",
      "Memory Management & Smart Pointers: 8-10 questions",
      "Design Patterns & SOLID Principles: 6-8 questions",
      "STL & Containers: 5-7 questions",
      "Virtual Functions & Abstract Classes: 10-12 questions",
      "Output Prediction & Code Analysis: 10-12 questions"
    ],
    preparationTips: [
      "1. Master inheritance and polymorphism concepts thoroughly",
      "2. Understand virtual functions, abstract classes, and interfaces",
      "3. Practice operator overloading with various operators",
      "4. Learn all types of inheritance with examples",
      "5. Study constructor/destructor calling sequence in inheritance",
      "6. Understand deep copy vs shallow copy with examples",
      "7. Practice exception handling with try-catch blocks",
      "8. Learn SOLID principles with real-world examples",
      "9. Study common design patterns (Singleton, Factory, Observer)",
      "10. Practice output prediction for inheritance and polymorphism code"
    ],
    timeManagement: [
      "Implement all types of inheritance with example hierarchies",
      "Virtual function demonstration with base class pointer",
      "Abstract class and interface implementation",
      "Operator overloading for complex numbers or strings",
      "Template class for stack/queue implementation",
      "Exception handling for divide by zero, array bounds",
      "Singleton pattern implementation",
      "Factory pattern for shape objects",
      "Observer pattern for event handling",
      "Deep copy implementation with copy constructor",
      "Smart pointer usage examples",
      "STL container operations (vector, map, set)",
      "Lambda expression examples",
      "Move semantics demonstration",
      "Multiple inheritance with virtual base class",

      "Difference between abstraction and encapsulation",
      "Runtime vs compile-time polymorphism",
      "Virtual function mechanism (VTable, VPointer)",
      "When to use virtual destructor",
      "Diamond problem and its solution",
      "Difference between overloading and overriding",
      "Abstract class vs interface",
      "Shallow copy vs deep copy",
      "Smart pointers and their use cases",
      "RAII principle with examples",
      "SOLID principles explanation",
      "Composition vs inheritance",
      "Singleton pattern implementation thread safety",
      "Exception safety guarantees",
      "Move semantics benefits",

      "Virtual function table and virtual pointer",
      "Object slicing and how to avoid it",
      "Rule of Three/Five/Zero",
      "Copy elision and return value optimization",
      "Dynamic binding mechanism",
      "Pure virtual functions and abstract classes",
      "Multiple inheritance challenges",
      "Template specialization",
      "Exception propagation",
      "Memory leak detection and prevention",
      "Smart pointer ownership semantics",
      "Lambda capture modes",
      "Move constructor vs copy constructor",
      "Virtual inheritance memory layout",
      "Design pattern applicability scenarios"
    ]
  }
  },

 "Computer Architecture": {
  icon: "fas fa-microchip",
  color: "#6366F1",
  tricks: [
    // Basic Structure & Function (10 tricks)
    {
      title: "Von Neumann Architecture",
      content: "CPU + Memory + I/O | Stored program concept | Sequential execution | Single memory for data & instructions",
      example: "Most modern computers follow modified von Neumann architecture"
    },
    {
      title: "Harvard Architecture",
      content: "Separate memories for data & instructions | Parallel access | Higher performance | Used in microcontrollers",
      example: "DSP processors, ARM processors use Harvard architecture"
    },
    {
      title: "CPU Components",
      content: "ALU (Arithmetic Logic Unit), CU (Control Unit), Registers (Storage), Buses (Data paths)",
      example: "ALU performs calculations, CU coordinates operations, Registers hold temporary data"
    },
    {
      title: "Instruction Cycle",
      content: "Fetch → Decode → Execute → Store | Repeated for each instruction",
      example: "CPU fetches instruction from memory, decodes it, executes, stores result"
    },
    {
      title: "Interrupt Cycle",
      content: "Check for interrupts → If present, save context → Service interrupt → Restore context → Continue",
      example: "I/O device sends interrupt when data ready"
    },
    {
      title: "Bus Structure",
      content: "Data Bus (Transfers data), Address Bus (Memory addresses), Control Bus (Control signals)",
      example: "32-bit address bus = 2³² addressable memory locations"
    },
    {
      title: "Register Types",
      content: "General Purpose (Data), Special Purpose (PC, IR, MAR, MDR), Status (Flags), Stack Pointer",
      example: "PC (Program Counter) holds address of next instruction"
    },
    {
      title: "Memory Hierarchy",
      content: "Registers → Cache → RAM → Secondary Storage (Fast → Slow, Small → Large, Expensive → Cheap)",
      example: "CPU registers fastest but smallest, hard disk slowest but largest"
    },
    {
      title: "Performance Metrics",
      content: "Clock speed (Hz), CPI (Clock cycles per instruction), MIPS (Million instructions per second), Throughput",
      example: "CPU with 3GHz clock = 3 billion cycles per second"
    },
    {
      title: "Amdahl's Law",
      content: "Speedup = 1 / [(1-P) + P/S] | P = portion improved, S = speedup of that portion",
      example: "If 80% of program parallelized with 4x speedup, overall speedup = 1/[(0.2) + (0.8/4)] = 2.5x"
    },

    // Instruction Set Architecture (15 tricks)
    {
      title: "ISA Types",
      content: "CISC (Complex Instruction Set Computer), RISC (Reduced Instruction Set Computer)",
      example: "Intel x86 = CISC, ARM = RISC"
    },
    {
      title: "CISC Characteristics",
      content: "Complex instructions, Variable length, Microprogrammed control, Many addressing modes, Few registers",
      example: "Single instruction can do complex operation like memory-to-memory move"
    },
    {
      title: "RISC Characteristics",
      content: "Simple instructions, Fixed length, Hardwired control, Few addressing modes, Many registers, Load/store architecture",
      example: "Only load/store instructions access memory, all others use registers"
    },
    {
      title: "Instruction Formats",
      content: "Three-address (op dest, src1, src2), Two-address (op dest, src), One-address (accumulator), Zero-address (stack)",
      example: "ADD R1, R2, R3 (three-address) vs ADD R1, R2 (two-address)"
    },
    {
      title: "Addressing Modes",
      content: "Immediate (operand in instruction), Direct (address in instruction), Indirect (address of address), Register, Indexed, Base+Index",
      example: "MOV R1, #5 (immediate) vs MOV R1, [2000] (direct)"
    },
    {
      title: "Instruction Types",
      content: "Data transfer (MOV, LOAD, STORE), Arithmetic (ADD, SUB, MUL), Logical (AND, OR, NOT), Control (JMP, CALL, RET), I/O (IN, OUT)",
      example: "Data transfer between registers/memory, arithmetic operations, program flow control"
    },
    {
      title: "Stack Operations",
      content: "PUSH (add to top), POP (remove from top), CALL (push return address), RET (pop return address)",
      example: "Function calls use stack for return addresses and local variables"
    },
    {
      title: "Subroutine Linkage",
      content: "CALL saves return address, RET retrieves it | Parameters passed via registers, stack, or memory",
      example: "CALL pushes PC to stack, RET pops it back"
    },
    {
      title: "Condition Codes",
      content: "Zero (Z), Carry (C), Overflow (V), Sign (S/N) | Set after arithmetic/logical operations",
      example: "After ADD, if result=0 → Z=1, if overflow → V=1"
    },
    {
      title: "Endianness",
      content: "Big-endian (MSB at lowest address), Little-endian (LSB at lowest address)",
      example: "Intel = little-endian, Motorola = big-endian"
    },
    {
      title: "Instruction Pipeline",
      content: "Break instruction into stages: Fetch (F), Decode (D), Execute (E), Memory (M), Writeback (W)",
      example: "5-stage pipeline allows 5 instructions in different stages simultaneously"
    },
    {
      title: "Pipeline Hazards",
      content: "Structural (resource conflict), Data (dependency), Control (branch) | Solved by forwarding, stalling, prediction",
      example: "Data hazard: Instruction needs result of previous not yet written"
    },
    {
      title: "Branch Prediction",
      content: "Static (always taken/not taken), Dynamic (history based), Branch target buffer (cache target addresses)",
      example: "Predict branch direction to avoid pipeline stalls"
    },
    {
      title: "Superscalar Architecture",
      content: "Multiple execution units, Can issue multiple instructions per cycle, Requires dynamic scheduling",
      example: "Modern processors can execute 4-8 instructions per cycle"
    },
    {
      title: "VLIW Architecture",
      content: "Very Long Instruction Word | Compiler packs multiple operations into one long instruction",
      example: "Used in DSP processors, compiler handles scheduling"
    },

    // Processor Organization (15 tricks)
    {
      title: "ALU Operations",
      content: "Arithmetic (add, subtract), Logical (AND, OR, XOR, NOT), Shift (left, right, arithmetic, logical), Compare",
      example: "ALU performs all calculations, comparisons, and logical operations"
    },
    {
      title: "Control Unit Implementation",
      content: "Hardwired (fast, complex design), Microprogrammed (flexible, slower) | Control memory stores microinstructions",
      example: "RISC uses hardwired, CISC uses microprogrammed control"
    },
    {
      title: "Datapath Components",
      content: "ALU, Registers, Multiplexers, Buses, Memory, PC, IR | Connected to perform instruction execution",
      example: "Single-cycle datapath completes instruction in one clock cycle"
    },
    {
      title: "Single Cycle vs Multi-cycle",
      content: "Single: All instructions take same time (wasteful) | Multi: Different instructions different cycles (efficient)",
      example: "ADD takes less time than MULT, so multi-cycle better"
    },
    {
      title: "Register File",
      content: "Collection of general-purpose registers | Read/write ports for simultaneous access | Register addressing",
      example: "32 registers × 32 bits each, with 2 read ports and 1 write port"
    },
    {
      title: "Data Forwarding",
      content: "Bypass pipeline registers to send result directly to needing instruction | Reduces stalls",
      example: "Result of ALU operation forwarded to next instruction needing it"
    },
    {
      title: "Hazard Detection Unit",
      content: "Detects data hazards, inserts stalls or enables forwarding | Part of pipeline control",
      example: "Detects RAW (Read After Write) hazards"
    },
    {
      title: "Tomasulo Algorithm",
      content: "Dynamic scheduling with reservation stations, register renaming, common data bus",
      example: "Used in modern out-of-order execution processors"
    },
    {
      title: "Scoreboarding",
      content: "Centralized table tracks instruction dependencies and resource availability",
      example: "Older technique for dynamic scheduling"
    },
    {
      title: "Out-of-Order Execution",
      content: "Execute instructions as operands become available, not in program order | Maintains appearance of in-order",
      example: "Modern processors execute 100+ instructions out of order"
    },
    {
      title: "Speculative Execution",
      content: "Execute instructions before knowing if needed | Branch prediction + execute predicted path",
      example: "Execute both sides of branch, discard wrong path"
    },
    {
      title: "Register Renaming",
      content: "Map architectural registers to physical registers | Eliminates false dependencies",
      example: "More physical than architectural registers to allow parallelism"
    },
    {
      title: "Reorder Buffer",
      content: "Holds instructions in program order after out-of-order execution | Ensures in-order commit",
      example: "Instructions complete out of order but commit in order"
    },
    {
      title: "Multi-core Processors",
      content: "Multiple CPUs on single chip | Shared or private caches | Need cache coherence",
      example: "Dual-core, quad-core processors for parallel processing"
    },
    {
      title: "SIMD vs MIMD",
      content: "SIMD: Single Instruction Multiple Data (vector processors) | MIMD: Multiple Instruction Multiple Data (multi-core)",
      example: "GPU = SIMD, multi-core CPU = MIMD"
    },

    // Memory System (15 tricks)
    {
      title: "Memory Types",
      content: "RAM (Random Access: SRAM, DRAM), ROM (Read Only: PROM, EPROM, EEPROM, Flash), Cache (SRAM), Virtual (Disk)",
      example: "SRAM for cache (fast), DRAM for main memory (dense), Flash for storage"
    },
    {
      title: "SRAM vs DRAM",
      content: "SRAM: 6 transistors/cell, fast, expensive, no refresh | DRAM: 1 transistor+capacitor/cell, slow, cheap, needs refresh",
      example: "Cache uses SRAM, main memory uses DRAM"
    },
    {
      title: "Memory Access Methods",
      content: "Random Access (any location equal time), Sequential (tape), Direct (disk), Associative (content-addressable)",
      example: "RAM = random access, tape = sequential, cache = associative"
    },
    {
      title: "Cache Memory",
      content: "Small, fast memory between CPU and RAM | Stores frequently used data | Reduces average access time",
      example: "L1 cache (smallest, fastest), L2, L3 (larger, slower)"
    },
    {
      title: "Cache Mapping Techniques",
      content: "Direct (block to exactly one location), Fully Associative (block to any location), Set Associative (block to set of locations)",
      example: "2-way set associative: block can go to 2 locations in cache"
    },
    {
      title: "Cache Write Policies",
      content: "Write-through (write to cache and memory), Write-back (write to cache only, memory later) | Write allocate vs no-write allocate",
      example: "Write-back better performance, write-through simpler"
    },
    {
      title: "Cache Coherence",
      content: "Multiple caches must have consistent data | Protocols: MSI, MESI, MOESI | Snooping or directory based",
      example: "MESI: Modified, Exclusive, Shared, Invalid states"
    },
    {
      title: "Virtual Memory",
      content: "Use disk as extension of RAM | Pages swapped between disk and RAM | Managed by MMU",
      example: "Program thinks it has 4GB RAM, actually 1GB RAM + 3GB disk"
    },
    {
      title: "Paging",
      content: "Memory divided into fixed-size pages | Page table maps virtual to physical addresses | TLB accelerates translation",
      example: "4KB pages, page table has entry for each virtual page"
    },
    {
      title: "Segmentation",
      content: "Memory divided into variable-size segments | Segment table maps segments | Logical division",
      example: "Code segment, data segment, stack segment"
    },
    {
      title: "TLB (Translation Lookaside Buffer)",
      content: "Cache for page table entries | Very fast address translation | Reduces memory accesses",
      example: "TLB hit = fast translation, TLB miss = access page table in memory"
    },
    {
      title: "Page Replacement Algorithms",
      content: "FIFO (First In First Out), LRU (Least Recently Used), Optimal (theoretical), Clock (approximate LRU)",
      example: "LRU: Replace page not used for longest time"
    },
    {
      title: "Thrashing",
      content: "Excessive paging due to insufficient memory | CPU spends more time swapping than executing",
      example: "Too many processes, not enough physical memory"
    },
    {
      title: "Memory Interleaving",
      content: "Divide memory into banks, access in parallel | Increases bandwidth | Low-order vs high-order interleaving",
      example: "4-way interleaving: 4 memory banks accessed simultaneously"
    },
    {
      title: "RAID Levels",
      content: "RAID 0 (striping), RAID 1 (mirroring), RAID 5 (striping with parity), RAID 6 (dual parity), RAID 10 (striping + mirroring)",
      example: "RAID 0 for performance, RAID 1 for reliability, RAID 5 for balance"
    },

    // I/O Organization (10 tricks)
    {
      title: "I/O Transfer Modes",
      content: "Programmed I/O (CPU polls), Interrupt-driven I/O (device interrupts), DMA (Direct Memory Access)",
      example: "Keyboard = interrupt-driven, disk = DMA"
    },
    {
      title: "Programmed I/O",
      content: "CPU constantly checks device status | Simple but inefficient | CPU busy waiting",
      example: "CPU polls keyboard until key pressed"
    },
    {
      title: "Interrupt-driven I/O",
      content: "Device sends interrupt when ready | CPU services interrupt | More efficient",
      example: "Printer interrupts when ready for next page"
    },
    {
      title: "DMA (Direct Memory Access)",
      content: "Special controller transfers data between I/O and memory without CPU | Burst or cycle stealing mode",
      example: "Disk controller transfers data directly to memory"
    },
    {
      title: "I/O Processors",
      content: "Specialized processors for I/O | Offload I/O processing from CPU | Channels in mainframes",
      example: "IOP handles all I/O operations, CPU free for computation"
    },
    {
      title: "Bus Arbitration",
      content: "Decides which device gets bus control | Methods: Daisy chain, polling, independent request",
      example: "Multiple devices want to use bus, arbitration decides order"
    },
    {
      title: "I/O Interfaces",
      content: "Serial (one bit at a time), Parallel (multiple bits) | Synchronous (clocked), Asynchronous (handshaking)",
      example: "USB = serial, PCI = parallel"
    },
    {
      title: "I/O Buses",
      content: "ISA (old PC), PCI (Peripheral Component Interconnect), USB (Universal Serial Bus), SCSI (Small Computer System Interface)",
      example: "Modern computers use PCIe for internal, USB for external"
    },
    {
      title: "Device Drivers",
      content: "Software that controls hardware device | OS provides interface, driver implements device-specific operations",
      example: "Printer driver translates OS commands to printer language"
    },
    {
      title: "I/O Scheduling",
      content: "FCFS (First Come First Served), SSTF (Shortest Seek Time First), SCAN (elevator), C-SCAN (circular scan)",
      example: "Disk arm scheduling to minimize seek time"
    },

    // Advanced Topics (10 tricks)
    {
      title: "Multiprocessor Systems",
      content: "Tightly coupled (shared memory), Loosely coupled (message passing) | UMA (Uniform Memory Access), NUMA (Non-uniform)",
      example: "SMP (Symmetric Multiprocessor) = UMA, ccNUMA = non-uniform"
    },
    {
      title: "Parallel Processing",
      content: "Flynn's taxonomy: SISD, SIMD, MISD, MIMD | Data vs control parallelism | Granularity: Fine to coarse",
      example: "Vector processor = SIMD, multi-core = MIMD"
    },
    {
      title: "Interconnection Networks",
      content: "Bus (simple, bottleneck), Crossbar (complex, non-blocking), Multistage (Omega, Butterfly), Hypercube",
      example: "Small systems use bus, large use multistage networks"
    },
    {
      title: "Clock Distribution",
      content: "Synchronous (global clock), Asynchronous (no global clock), Mesochronous, Plesiochronous",
      example: "Most systems synchronous, but clock skew limits speed"
    },
    {
      title: "Power Management",
      content: "Dynamic voltage scaling, Clock gating, Power gating, Multiple power states | Reduce energy consumption",
      example: "CPU slows clock when idle to save power"
    },
    {
      title: "Fault Tolerance",
      content: "Error detection (parity, CRC), Error correction (ECC), Redundancy (TMR), Checkpointing, RAID",
      example: "ECC memory corrects single-bit errors"
    },
    {
      title: "Quantum Computing",
      content: "Qubits (0,1,superposition), Quantum gates, Entanglement | Exponential speedup for certain problems",
      example: "Shor's algorithm factors numbers exponentially faster"
    },
    {
      title: "Neuromorphic Computing",
      content: "Mimics brain structure, Spiking neural networks, Event-driven processing, Low power",
      example: "IBM TrueNorth, Intel Loihi chips"
    },
    {
      title: "Approximate Computing",
      content: "Accept approximate results for lower power/area | Useful for multimedia, machine learning",
      example: "Image processing can tolerate small errors"
    },
    {
      title: "Hardware Security",
      content: "Trusted Platform Module, Secure boot, Memory encryption, Side-channel attack protection",
      example: "Spectre/Meltdown vulnerabilities in speculative execution"
    }
  ],

  detailedNotes: {
    "Basic Computer Organization": {
      keyConcepts: [
        "Von Neumann architecture: Stored program concept with single memory for data and instructions",
        "Harvard architecture: Separate memories for data and instructions enabling parallel access",
        "CPU components: ALU (arithmetic/logic), CU (control), registers (temporary storage)",
        "Instruction cycle: Fetch, decode, execute, store - repeated for each instruction",
        "Interrupt handling: Save context, service interrupt, restore context, continue execution",
        "Bus structure: Data bus (transfers data), address bus (memory addresses), control bus (signals)",
        "Memory hierarchy: Registers → cache → RAM → secondary storage (fastest to slowest)"
      ],
      importantPoints: [
        "Program Counter (PC) holds address of next instruction to execute",
        "Instruction Register (IR) holds current instruction being executed",
        "Memory Address Register (MAR) holds address of memory location to access",
        "Memory Data Register (MDR) holds data being read from or written to memory",
        "Accumulator is special register for arithmetic operations in some architectures",
        "Status register contains condition codes (flags) like Zero, Carry, Overflow, Sign",
        "Stack Pointer (SP) points to top of stack in memory",
        "Base Register used for addressing in base+offset mode",
        "Index Register used for array indexing"
      ],
      memoryAids: [
        "CPU registers: PC IR MAR MDR (Program Counter, Instruction Register, Memory Address Register, Memory Data Register)",
        "Instruction cycle: FDES (Fetch, Decode, Execute, Store)",
        "Memory hierarchy: RCRS (Registers, Cache, RAM, Storage)"
      ]
    },
    
    "Instruction Set Architecture": {
      keyConcepts: [
        "CISC vs RISC: Complex vs Reduced Instruction Set Computer",
        "Instruction formats: Three-address, two-address, one-address, zero-address",
        "Addressing modes: How operands are specified (immediate, direct, indirect, indexed, etc.)",
        "Instruction types: Data transfer, arithmetic, logical, control transfer, I/O",
        "Stack operations: PUSH, POP for function calls and local variables",
        "Endianness: Byte ordering in memory (big-endian vs little-endian)",
        "Instruction pipeline: Breaking instruction execution into stages for parallelism"
      ],
      importantPoints: [
        "CISC characteristics: Complex instructions, variable length, microprogrammed control, many addressing modes",
        "RISC characteristics: Simple instructions, fixed length, hardwired control, load/store architecture, many registers",
        "Immediate addressing: Operand value is part of instruction itself",
        "Direct addressing: Instruction contains memory address of operand",
        "Indirect addressing: Instruction contains address of memory location that holds operand address",
        "Register addressing: Operand is in register",
        "Indexed addressing: Effective address = base address + index register",
        "Base+Index addressing: Effective address = base register + index register + offset",
        "Relative addressing: Address relative to program counter"
      ],
      memoryAids: [
        "Addressing modes: I D I R I B (Immediate, Direct, Indirect, Register, Indexed, Base+Index)",
        "RISC vs CISC: RISC = Reduced, CISC = Complex",
        "Endianness: Big = Most Significant Byte first, Little = Least Significant Byte first"
      ]
    },
    
    "Processor Organization & Pipelining": {
      keyConcepts: [
        "ALU functions: Arithmetic, logical, shift, compare operations",
        "Control unit: Hardwired (fast) vs microprogrammed (flexible)",
        "Datapath: Components and connections for instruction execution",
        "Pipeline stages: IF (Instruction Fetch), ID (Instruction Decode), EX (Execute), MEM (Memory), WB (Write Back)",
        "Pipeline hazards: Structural, data, control hazards that stall pipeline",
        "Hazard solutions: Forwarding, stalling, branch prediction",
        "Superscalar: Multiple execution units, issue multiple instructions per cycle"
      ],
      importantPoints: [
        "Single-cycle implementation: All instructions take one clock cycle (wasteful)",
        "Multi-cycle implementation: Different instructions take different number of cycles",
        "Pipeline speedup: Ideally N times for N-stage pipeline (ignoring hazards)",
        "Structural hazards: Resource conflicts when multiple instructions need same resource",
        "Data hazards: Dependencies between instructions (RAW, WAR, WAW)",
        "Control hazards: Branch instructions change flow before target known",
        "Data forwarding: Bypass pipeline registers to send result directly to needing instruction",
        "Branch prediction: Predict branch direction to avoid stalls",
        "Branch delay slot: Instruction after branch executed regardless of branch outcome",
        "Out-of-order execution: Execute instructions as operands become available"
      ],
      memoryAids: [
        "Pipeline stages: IF ID EX MEM WB (Instruction Fetch, Decode, Execute, Memory, Write Back)",
        "Data hazards: RAW (Read After Write), WAR (Write After Read), WAW (Write After Write)",
        "Hazard solutions: Forward (bypass), Stall (bubble), Predict (guess branch)"
      ]
    },
    
    "Memory System & Cache": {
      keyConcepts: [
        "Memory types: RAM (volatile), ROM (non-volatile), Cache (fast SRAM)",
        "SRAM vs DRAM: Static vs Dynamic RAM characteristics",
        "Cache memory: Small fast memory between CPU and main memory",
        "Cache mapping: Direct, associative, set-associative mapping techniques",
        "Cache policies: Write-through vs write-back, write-allocate vs no-write-allocate",
        "Virtual memory: Using disk as extension of physical memory",
        "Page tables: Translation from virtual to physical addresses"
      ],
      importantPoints: [
        "Cache hit: Data found in cache (fast access)",
        "Cache miss: Data not in cache, must fetch from main memory (slow)",
        "Hit ratio: Percentage of memory accesses that hit in cache",
        "Average memory access time = Hit time + Miss rate × Miss penalty",
        "Direct mapping: Each block maps to exactly one cache location",
        "Fully associative: Block can go anywhere in cache",
        "Set associative: Block maps to set of locations (n-way set associative)",
        "Write-through: Write to cache and memory simultaneously",
        "Write-back: Write to cache only, write to memory later when block replaced",
        "TLB (Translation Lookaside Buffer): Cache for page table entries"
      ],
      memoryAids: [
        "Cache mapping: Direct (1:1), Fully Associative (anywhere), Set Associative (set of locations)",
        "Write policies: Write-through (both), Write-back (cache only)",
        "Virtual memory: Pages (fixed size), Segments (variable size)"
      ]
    },
    
    "Input/Output Organization": {
      keyConcepts: [
        "I/O transfer modes: Programmed I/O, interrupt-driven I/O, DMA",
        "Programmed I/O: CPU polls device status (inefficient)",
        "Interrupt-driven I/O: Device interrupts CPU when ready",
        "DMA: Direct Memory Access without CPU intervention",
        "I/O processors: Specialized processors for handling I/O",
        "Bus arbitration: Deciding which device gets bus control",
        "I/O interfaces: Serial vs parallel, synchronous vs asynchronous"
      ],
      importantPoints: [
        "Polling: CPU repeatedly checks device status register",
        "Interrupt vector: Table of interrupt service routine addresses",
        "Interrupt priority: Higher priority interrupts can interrupt lower ones",
        "DMA controller: Special hardware for direct memory transfers",
        "DMA modes: Burst (block transfer), cycle stealing (one word at a time)",
        "Bus arbitration methods: Daisy chain, polling, independent request",
        "I/O bus standards: ISA, PCI, USB, SCSI characteristics",
        "Device drivers: OS software for controlling specific hardware",
        "I/O scheduling: Optimizing order of I/O requests (especially disk)"
      ],
      memoryAids: [
        "I/O methods: Programmed (poll), Interrupt (signal), DMA (direct)",
        "DMA modes: Burst (all at once), Cycle stealing (one at a time)",
        "Bus arbitration: Who gets the bus? Daisy chain, polling, independent request"
      ]
    },
    
    "Advanced Architectures": {
      keyConcepts: [
        "Multiprocessor systems: Multiple processors working together",
        "Parallel processing: Flynn's taxonomy (SISD, SIMD, MISD, MIMD)",
        "Interconnection networks: How processors/memory modules connect",
        "Multicore processors: Multiple CPU cores on single chip",
        "Vector processors: SIMD architecture for scientific computing",
        "GPU architecture: Massively parallel for graphics and computation",
        "Quantum computing: Based on quantum mechanical principles"
      ],
      importantPoints: [
        "UMA (Uniform Memory Access): All processors see same memory latency",
        "NUMA (Non-uniform Memory Access): Memory latency depends on location",
        "SMP (Symmetric Multiprocessor): Identical processors with shared memory",
        "MPP (Massively Parallel Processor): Many processors with distributed memory",
        "Cache coherence: Ensuring all caches have consistent data",
        "Coherence protocols: MSI, MESI, MOESI states and transitions",
        "Interconnection topologies: Bus, ring, mesh, hypercube, butterfly",
        "Multicore challenges: Cache coherence, memory bandwidth, programming model",
        "Amdahl's Law: Limits speedup from parallelization",
        "Gustafson's Law: Scaling problem size with processors"
      ],
      memoryAids: [
        "Flynn's taxonomy: SISD, SIMD, MISD, MIMD (Single/Multiple Instruction, Single/Multiple Data)",
        "Memory access: UMA (Uniform), NUMA (Non-uniform)",
        "Cache coherence protocols: MESI (Modified, Exclusive, Shared, Invalid)"
      ]
    }
  },

  quickReference: {
    "ca-1": "Von Neumann architecture: Stored program, single memory for data and instructions",
    "ca-2": "Harvard architecture: Separate memories for data and instructions",
    "ca-3": "CPU components: ALU (Arithmetic Logic Unit), CU (Control Unit), registers",
    "ca-4": "ALU: Performs arithmetic (add, subtract) and logical (AND, OR) operations",
    "ca-5": "Control Unit: Generates control signals to coordinate operations",
    "ca-6": "Registers: Fast storage locations inside CPU (general purpose, special purpose)",
    "ca-7": "Program Counter (PC): Holds address of next instruction",
    "ca-8": "Instruction Register (IR): Holds current instruction being executed",
    "ca-9": "Memory Address Register (MAR): Holds address of memory location to access",
    "ca-10": "Memory Data Register (MDR): Holds data being read from/written to memory",
    "ca-11": "Accumulator: Special register for arithmetic operations",
    "ca-12": "Status Register: Contains condition codes/flags (Zero, Carry, Overflow, Sign)",
    "ca-13": "Stack Pointer (SP): Points to top of stack in memory",
    "ca-14": "Base Register: Used in base addressing mode",
    "ca-15": "Index Register: Used in indexed addressing mode",
    "ca-16": "Instruction cycle: Fetch → Decode → Execute → Store",
    "ca-17": "Fetch: Get instruction from memory into IR",
    "ca-18": "Decode: Determine operation and operands",
    "ca-19": "Execute: Perform the operation",
    "ca-20": "Store: Write result to destination",
    "ca-21": "Interrupt: Signal from I/O device requesting service",
    "ca-22": "Interrupt service routine: Code that handles interrupt",
    "ca-23": "Bus: Set of wires for communication between components",
    "ca-24": "Data Bus: Carries data between components",
    "ca-25": "Address Bus: Carries memory addresses",
    "ca-26": "Control Bus: Carries control signals",
    "ca-27": "Memory hierarchy: Registers → Cache → RAM → Secondary storage",
    "ca-28": "Registers: Fastest, smallest, inside CPU",
    "ca-29": "Cache: Fast SRAM between CPU and RAM",
    "ca-30": "RAM: Main memory, volatile, DRAM",
    "ca-31": "Secondary storage: Disk, non-volatile, large, slow",
    "ca-32": "CISC: Complex Instruction Set Computer (Intel x86)",
    "ca-33": "RISC: Reduced Instruction Set Computer (ARM, MIPS)",
    "ca-34": "CISC characteristics: Complex instructions, variable length, microprogrammed",
    "ca-35": "RISC characteristics: Simple instructions, fixed length, hardwired, load/store",
    "ca-36": "Instruction formats: Three-address, two-address, one-address, zero-address",
    "ca-37": "Three-address: ADD R1, R2, R3 (R1 = R2 + R3)",
    "ca-38": "Two-address: ADD R1, R2 (R1 = R1 + R2)",
    "ca-39": "One-address: ADD X (Accumulator = Accumulator + X)",
    "ca-40": "Zero-address: ADD (Stack: push(pop() + pop()))",
    "ca-41": "Addressing modes: Immediate, direct, indirect, register, indexed, base+index",
    "ca-42": "Immediate: Operand value in instruction (MOV R1, #5)",
    "ca-43": "Direct: Address of operand in instruction (MOV R1, [2000])",
    "ca-44": "Indirect: Instruction contains address of address (MOV R1, [[2000]])",
    "ca-45": "Register: Operand in register (MOV R1, R2)",
    "ca-46": "Indexed: Effective address = base + index register (MOV R1, [R2+R3])",
    "ca-47": "Base+Index: Effective address = base register + index register + offset",
    "ca-48": "Instruction types: Data transfer, arithmetic, logical, control, I/O",
    "ca-49": "Data transfer: MOV, LOAD, STORE",
    "ca-50": "Arithmetic: ADD, SUB, MUL, DIV",
    "ca-51": "Logical: AND, OR, NOT, XOR",
    "ca-52": "Control: JMP, CALL, RET, conditional branches",
    "ca-53": "I/O: IN, OUT",
    "ca-54": "Stack operations: PUSH (add to top), POP (remove from top)",
    "ca-55": "Subroutine call: CALL pushes return address, RET pops it",
    "ca-56": "Endianness: Byte ordering in memory",
    "ca-57": "Big-endian: Most significant byte at lowest address (Motorola)",
    "ca-58": "Little-endian: Least significant byte at lowest address (Intel)",
    "ca-59": "Pipeline: Breaking instruction execution into stages for parallelism",
    "ca-60": "Pipeline stages: IF (Instruction Fetch), ID (Decode), EX (Execute), MEM (Memory), WB (Write Back)",
    "ca-61": "Pipeline hazards: Structural, data, control",
    "ca-62": "Structural hazard: Resource conflict (two instructions need same unit)",
    "ca-63": "Data hazard: Dependency between instructions (RAW, WAR, WAW)",
    "ca-64": "Control hazard: Branch changes flow before target known",
    "ca-65": "Hazard solutions: Forwarding, stalling, branch prediction",
    "ca-66": "Forwarding: Bypass pipeline registers to send result directly",
    "ca-67": "Stalling: Insert bubble (no-op) in pipeline",
    "ca-68": "Branch prediction: Guess branch direction to avoid stall",
    "ca-69": "Superscalar: Multiple execution units, issue multiple instructions per cycle",
    "ca-70": "VLIW: Very Long Instruction Word, compiler packs operations",
    "ca-71": "Out-of-order execution: Execute instructions as operands ready",
    "ca-72": "Speculative execution: Execute before knowing if needed",
    "ca-73": "Register renaming: Map architectural to physical registers",
    "ca-74": "Cache: Small fast memory between CPU and RAM",
    "ca-75": "Cache hit: Data found in cache",
    "ca-76": "Cache miss: Data not in cache, fetch from RAM",
    "ca-77": "Hit ratio: Percentage of accesses that hit",
    "ca-78": "Miss ratio: Percentage of accesses that miss",
    "ca-79": "Cache mapping: Direct, associative, set-associative",
    "ca-80": "Direct mapping: Each block maps to exactly one cache location",
    "ca-81": "Fully associative: Block can go anywhere in cache",
    "ca-82": "Set associative: Block maps to set of locations (n-way)",
    "ca-83": "Write-through: Write to cache and memory simultaneously",
    "ca-84": "Write-back: Write to cache only, write to memory when replaced",
    "ca-85": "Write allocate: On write miss, allocate block in cache",
    "ca-86": "No-write allocate: On write miss, write directly to memory",
    "ca-87": "Cache coherence: Multiple caches have consistent data",
    "ca-88": "Coherence protocols: MSI, MESI, MOESI",
    "ca-89": "Virtual memory: Use disk as extension of RAM",
    "ca-90": "Page: Fixed-size block of virtual memory",
    "ca-91": "Frame: Fixed-size block of physical memory",
    "ca-92": "Page table: Maps virtual pages to physical frames",
    "ca-93": "TLB: Translation Lookaside Buffer, cache for page table",
    "ca-94": "Page fault: Page not in physical memory, bring from disk",
    "ca-95": "Page replacement: FIFO, LRU, Optimal, Clock",
    "ca-96": "Thrashing: Excessive paging, poor performance",
    "ca-97": "Programmed I/O: CPU polls device status",
    "ca-98": "Interrupt-driven I/O: Device interrupts CPU",
    "ca-99": "DMA: Direct Memory Access without CPU",
    "ca-100": "Amdahl's Law: Speedup = 1 / [(1-P) + P/S]"
  },

  examStrategy: {
    topicWeightage: [
      "Basic Computer Organization: 10-12 questions",
      "Instruction Set Architecture: 15-18 questions",
      "Processor Organization & Pipelining: 15-18 questions",
      "Memory System & Cache: 15-18 questions",
      "Input/Output Organization: 8-10 questions",
      "Advanced Architectures: 6-8 questions",
      "Performance Measurement: 4-6 questions",
      "Numerical Problems: 8-10 questions",
      "Concept Definitions: 6-8 questions",
      "Diagram-based Questions: 4-6 questions"
    ],
    preparationTips: [
      "1. Master memory hierarchy and cache organization thoroughly",
      "2. Understand pipeline hazards and their solutions completely",
      "3. Practice numerical problems on cache hit ratio, average access time",
      "4. Learn all addressing modes with examples",
      "5. Study CISC vs RISC differences in detail",
      "6. Understand virtual memory concepts: paging, segmentation, TLB",
      "7. Practice Amdahl's Law calculations",
      "8. Learn I/O transfer methods: programmed, interrupt-driven, DMA",
      "9. Study multiprocessor cache coherence protocols",
      "10. Practice diagram labeling for CPU components, pipeline stages"
    ],
    timeManagement: [
      "CPU time = Instruction count × CPI × Clock cycle time",
      "MIPS = Clock rate / (CPI × 10⁶)",
      "MFLOPS = Number of FP operations / (Execution time × 10⁶)",
      "Average memory access time = Hit time + Miss rate × Miss penalty",
      "CPU time with cache = IC × (CPI + Memory stalls per instruction) × Clock cycle",
      "Memory stalls per instruction = Misses per instruction × Miss penalty",
      "Amdahl's Law: Speedup = 1 / [(1 - P) + P/S]",
      "Cache size = Number of blocks × Block size",
      "Number of blocks = Cache size / Block size",
      "Number of sets = Number of blocks / Associativity",
      "Effective access time with TLB = TLB hit time + TLB miss penalty × TLB miss rate",
      "Virtual address space = 2^(address bits) bytes",
      "Number of pages = Virtual address space / Page size",
      "Page table size = Number of pages × Page table entry size",

      "Calculate average memory access time with given hit ratio and access times",
      "Amdahl's Law calculations for speedup with parallelization",
      "Cache size, block size, tag/index/offset bit calculations",
      "Virtual address to physical address translation with page tables",
      "Pipeline speedup with and without hazards",
      "CPI calculation with given instruction mix",
      "MIPS/MFLOPS calculation from given parameters",
      "Memory bandwidth calculations",
      "TLB effective access time calculations",
      "RAID storage efficiency calculations",

      "Label CPU components in von Neumann architecture",
      "Draw and label pipeline stages with forwarding paths",
      "Cache organization diagrams for direct/set-associative mapping",
      "Memory hierarchy pyramid with access times and sizes",
      "Page table structure with virtual to physical mapping",
      "I/O interface block diagram",
      "Bus structure showing data, address, control lines",
      "Multiprocessor interconnection networks",
      "CPU datapath for simple instructions",
      "State diagram for cache coherence protocol"
    ]
  }
},

  "Cyber Security": {
  icon: "fas fa-shield-alt",
  color: "#059669",
  tricks: [
    // Cyber Security Fundamentals (10 tricks)
    {
      title: "CIA Triad",
      content: "Confidentiality (Data privacy), Integrity (Data accuracy), Availability (Access when needed) - Core security principles",
      example: "Encryption for confidentiality, hashing for integrity, backups for availability"
    },
    {
      title: "AAA Framework",
      content: "Authentication (Who are you?), Authorization (What can you do?), Accounting (What did you do?)",
      example: "Login (authn), permissions (authz), logs (accounting)"
    },
    {
      title: "Security Goals",
      content: "Prevention, Detection, Response, Recovery | Defense in depth (multiple layers)",
      example: "Firewalls prevent, IDS detect, incident response plan for recovery"
    },
    {
      title: "Risk Management",
      content: "Identify → Assess → Treat → Monitor | Risk = Threat × Vulnerability × Impact",
      example: "Risk assessment identifies critical assets and threats"
    },
    {
      title: "Security Policies",
      content: "Acceptable Use, Password, Access Control, Incident Response, Disaster Recovery, BYOD policies",
      example: "Password policy: 12 chars, special chars, 90-day expiry"
    },
    {
      title: "Security Controls Types",
      content: "Preventive (stop), Detective (identify), Corrective (fix), Deterrent (discourage), Compensating (alternative)",
      example: "Firewall (preventive), IDS (detective), backups (corrective)"
    },
    {
      title: "Defense in Depth",
      content: "Multiple security layers: Physical, Network, Host, Application, Data | If one fails, others protect",
      example: "Firewall + IDS + antivirus + encryption + access controls"
    },
    {
      title: "Zero Trust Model",
      content: "Never trust, always verify | Assume breach, verify explicitly, least privilege access",
      example: "Verify every access request regardless of location"
    },
    {
      title: "Cyber Kill Chain",
      content: "Reconnaissance → Weaponization → Delivery → Exploitation → Installation → C2 → Actions | Attack lifecycle",
      example: "Understanding attack stages helps defense at each point"
    },
    {
      title: "Security vs Privacy",
      content: "Security protects systems/data, Privacy protects personal information | Related but different",
      example: "Encryption provides security, privacy policies protect user data"
    },

    // Cryptography (15 tricks)
    {
      title: "Cryptography Goals",
      content: "Confidentiality (encryption), Integrity (hashing), Authentication (digital signatures), Non-repudiation (proof)",
      example: "Encrypt for secrecy, hash for tamper detection, sign for authentication"
    },
    {
      title: "Symmetric Encryption",
      content: "Same key for encryption/decryption | Fast, efficient for bulk data | DES, 3DES, AES, RC4",
      example: "AES-256: 256-bit key, used for file/disk encryption"
    },
    {
      title: "Asymmetric Encryption",
      content: "Public/private key pair | Slow, for key exchange/signing | RSA, DSA, ECC, Diffie-Hellman",
      example: "SSL/TLS uses asymmetric for key exchange, symmetric for data"
    },
    {
      title: "Hashing Functions",
      content: "One-way, fixed-size output | Data integrity verification | MD5 (broken), SHA-1 (weak), SHA-256, SHA-3",
      example: "Password storage: Store hash, not plain password"
    },
    {
      title: "Digital Signatures",
      content: "Hash encrypted with private key | Provides authentication, integrity, non-repudiation",
      example: "Sign document with private key, verify with public key"
    },
    {
      title: "Digital Certificates",
      content: "X.509 format | Binds public key to identity | Issued by Certificate Authority (CA)",
      example: "SSL certificates for websites verify site identity"
    },
    {
      title: "PKI Components",
      content: "CA (issues certificates), RA (verifies identity), CRL (revocation list), Certificate repository",
      example: "Hierarchical trust model with root CAs and intermediate CAs"
    },
    {
      title: "SSL/TLS Handshake",
      content: "Client hello → Server hello → Certificate → Key exchange → Finished | Secure channel establishment",
      example: "HTTPS uses TLS to encrypt web traffic"
    },
    {
      title: "Cryptographic Attacks",
      content: "Brute force, Dictionary, Rainbow table, Man-in-middle, Replay, Side-channel, Cryptanalysis",
      example: "Rainbow tables precompute hashes for common passwords"
    },
    {
      title: "Password Security",
      content: "Salt (random data added to password), Pepper (secret key), Key stretching (multiple hash iterations)",
      example: "bcrypt, scrypt, PBKDF2 for secure password hashing"
    },
    {
      title: "Cryptographic Modes",
      content: "ECB (weak), CBC (common), CTR (stream), GCM (authenticated) | Different uses for encryption",
      example: "CBC needs IV (Initialization Vector) for randomness"
    },
    {
      title: "Key Management",
      content: "Generation, Storage, Distribution, Rotation, Revocation, Backup, Recovery | Critical for security",
      example: "HSM (Hardware Security Module) for secure key storage"
    },
    {
      title: "Steganography",
      content: "Hiding data within other data | Images, audio, video | Different from cryptography",
      example: "Hide message in image LSB (Least Significant Bits)"
    },
    {
      title: "Quantum Cryptography",
      content: "QKD (Quantum Key Distribution) using quantum properties | Unhackable in theory",
      example: "BB84 protocol for quantum key exchange"
    },
    {
      title: "Homomorphic Encryption",
      content: "Compute on encrypted data without decrypting | Preserves privacy in cloud computing",
      example: "Process encrypted data in cloud, get encrypted result"
    },

    // Network Security (15 tricks)
    {
      title: "Firewall Types",
      content: "Packet Filter (stateless), Stateful (track connections), Application (proxy), Next-gen (deep inspection)",
      example: "Stateful firewall remembers established connections"
    },
    {
      title: "Firewall Architectures",
      content: "Screened host, Screened subnet (DMZ), Dual-homed, Multi-homed | Different deployment models",
      example: "DMZ hosts public servers between two firewalls"
    },
    {
      title: "IDS vs IPS",
      content: "IDS (Intrusion Detection System): Monitor & alert | IPS (Intrusion Prevention System): Block & prevent",
      example: "Snort = IDS/IPS, detects and blocks attacks"
    },
    {
      title: "IDS Types",
      content: "Signature-based (known patterns), Anomaly-based (behavior deviation), Heuristic (rule-based)",
      example: "Signature-based: Like antivirus patterns, Anomaly: Detect unusual traffic"
    },
    {
      title: "VPN Technologies",
      content: "IPSec (network layer), SSL/TLS (application layer), PPTP (old), L2TP, WireGuard (modern)",
      example: "IPSec VPN for site-to-site, SSL VPN for remote access"
    },
    {
      title: "VPN Modes",
      content: "Tunnel mode (entire packet), Transport mode (only payload) | Different encryption scopes",
      example: "Tunnel mode for site-to-site, transport for host-to-host"
    },
    {
      title: "NAT & Security",
      content: "Hides internal IPs, Provides basic firewall, Static/Dynamic/PAT (Port Address Translation)",
      example: "PAT allows multiple internal IPs to share one public IP"
    },
    {
      title: "DoS/DDoS Attacks",
      content: "SYN flood, UDP flood, ICMP flood, Amplification, Reflection | Overwhelm target resources",
      example: "DNS amplification: Small query generates large response to victim"
    },
    {
      title: "Mitigation Techniques",
      content: "Rate limiting, Filtering, Blackholing, Anycast, CDN, Scrubbing centers",
      example: "Cloudflare protects websites from DDoS attacks"
    },
    {
      title: "Wireless Security",
      content: "WEP (broken), WPA (TKIP), WPA2 (AES-CCMP), WPA3 (SAE) | Evolution of WiFi security",
      example: "WPA3 uses Simultaneous Authentication of Equals for better security"
    },
    {
      title: "Wireless Attacks",
      content: "Evil twin, Deauth attack, KRACK, WPS attack, Packet sniffing | Various WiFi vulnerabilities",
      example: "Evil twin: Fake access point to capture credentials"
    },
    {
      title: "Email Security",
      content: "SPF (Sender Policy Framework), DKIM (DomainKeys), DMARC (Domain-based Message Authentication)",
      example: "SPF defines allowed sending servers for domain"
    },
    {
      title: "DNS Security",
      content: "DNSSEC (signs DNS records), DNS over HTTPS/TLS, Response Policy Zones | Protect DNS integrity",
      example: "DNSSEC prevents DNS cache poisoning attacks"
    },
    {
      title: "Web Application Firewall",
      content: "Layer 7 protection | SQL injection, XSS, CSRF prevention | ModSecurity, Cloud WAF",
      example: "WAF blocks malicious HTTP requests to web apps"
    },
    {
      title: "Network Segmentation",
      content: "Divide network into zones | Reduce attack surface | VLANs, subnets, firewalls between segments",
      example: "Separate guest WiFi from internal network"
    },

    // Application & System Security (15 tricks)
    {
      title: "OWASP Top 10",
      content: "Injection, Broken Auth, Sensitive Data Exposure, XXE, Broken Access Control, Security Misconfigurations...",
      example: "SQL injection = #1 web app vulnerability"
    },
    {
      title: "SQL Injection",
      content: "Inject SQL commands through input | ' OR '1'='1' -- | Prevention: Prepared statements, input validation",
      example: "SELECT * FROM users WHERE user='admin'--' AND pass=''"
    },
    {
      title: "Cross-Site Scripting (XSS)",
      content: "Inject scripts into web pages | Stored, Reflected, DOM-based | Prevention: Output encoding, CSP",
      example: "<script>alert('XSS')</script> in comment field"
    },
    {
      title: "Cross-Site Request Forgery (CSRF)",
      content: "Trick user into executing unwanted actions | Anti-CSRF tokens, SameSite cookies",
      example: "Image tag with banking transfer URL as src"
    },
    {
      title: "Buffer Overflow",
      content: "Write beyond buffer boundaries | Stack/heap based | Prevention: ASLR, DEP, bounds checking",
      example: "Overflow overwrites return address to execute shellcode"
    },
    {
      title: "Privilege Escalation",
      content: "Vertical (user→admin), Horizontal (user→other user) | Exploit vulnerabilities for more access",
      example: "Windows UAC bypass, Linux sudo vulnerabilities"
    },
    {
      title: "Malware Types",
      content: "Virus (attaches), Worm (spreads), Trojan (disguised), Ransomware (encrypts), Spyware (monitors), Rootkit (hides)",
      example: "WannaCry = ransomware worm"
    },
    {
      title: "Antivirus Techniques",
      content: "Signature-based, Heuristic, Behavior-based, Sandboxing, Cloud analysis",
      example: "Modern AV uses ML and behavior analysis"
    },
    {
      title: "Sandboxing",
      content: "Isolated execution environment | Analyze malware safely | Virtual machines, containers",
      example: "Run suspicious files in sandbox before allowing on system"
    },
    {
      title: "Patch Management",
      content: "Identify → Test → Deploy → Verify | Regular updates critical for security",
      example: "Windows Update, WSUS for enterprise patch management"
    },
    {
      title: "Hardening Techniques",
      content: "Remove unnecessary services, Apply least privilege, Enable logging, Use security baselines",
      example: "CIS Benchmarks for system hardening standards"
    },
    {
      title: "Log Management",
      content: "Collection, Normalization, Correlation, Analysis, Retention | SIEM for security monitoring",
      example: "Splunk, ELK stack for log analysis"
    },
    {
      title: "Backup Strategies",
      content: "Full, Incremental, Differential | 3-2-1 rule: 3 copies, 2 media types, 1 offsite",
      example: "Daily incremental + weekly full backups"
    },
    {
      title: "Disaster Recovery",
      content: "RTO (Recovery Time Objective), RPO (Recovery Point Objective) | Define acceptable downtime/data loss",
      example: "RTO=4 hours: Systems restored within 4 hours of disaster"
    },
    {
      title: "Secure SDLC",
      content: "Requirements → Design → Implementation → Testing → Deployment → Maintenance | Security throughout lifecycle",
      example: "Threat modeling in design, code review, penetration testing"
    },

    // Access Control & Identity Management (10 tricks)
    {
      title: "Access Control Models",
      content: "DAC (Discretionary: owner decides), MAC (Mandatory: system decides), RBAC (Role-based), ABAC (Attribute-based)",
      example: "Windows files = DAC, Military systems = MAC"
    },
    {
      title: "RBAC Components",
      content: "Users → Roles → Permissions | Simplify administration | Role hierarchy, constraints",
      example: "Admin role: full access, User role: read-only"
    },
    {
      title: "Authentication Factors",
      content: "Knowledge (password), Possession (token), Inherence (biometric), Location, Time | MFA uses ≥2 factors",
      example: "Password + OTP = 2-factor authentication"
    },
    {
      title: "Single Sign-On",
      content: "One login for multiple systems | SAML, OAuth, OpenID Connect | Centralized authentication",
      example: "Login with Google on multiple websites"
    },
    {
      title: "Biometric Authentication",
      content: "Fingerprint, Face, Iris, Voice | FAR (False Accept Rate), FRR (False Reject Rate), CER (Crossover Error Rate)",
      example: "Smartphone fingerprint scanner = biometric auth"
    },
    {
      title: "Password Policies",
      content: "Length, Complexity, History, Expiry, Lockout | Balance security and usability",
      example: "NIST guidelines: longer passwords, no forced changes"
    },
    {
      title: "Privileged Access Management",
      content: "Just-in-time, Just-enough privileges | Monitor and control admin access | PAM solutions",
      example: "Request temporary admin rights when needed"
    },
    {
      title: "Identity Federation",
      content: "Trust between organizations for identity sharing | SAML for enterprise, OAuth for consumer",
      example: "University student accesses publisher resources with campus login"
    },
    {
      title: "Directory Services",
      content: "LDAP, Active Directory | Centralized user management | Kerberos for authentication",
      example: "Active Directory manages Windows domain users/computers"
    },
    {
      title: "Account Management",
      content: "Provisioning, De-provisioning, Review, Recertification | Lifecycle management",
      example: "Automatically disable accounts when employees leave"
    },

    // Security Governance & Compliance (10 tricks)
    {
      title: "Security Frameworks",
      content: "ISO 27001, NIST CSF, COBIT, CIS Controls | Standards for security management",
      example: "ISO 27001: International standard for ISMS"
    },
    {
      title: "Risk Assessment Methods",
      content: "Qualitative (high/medium/low), Quantitative (numeric), Semi-quantitative | Different approaches",
      example: "FAIR model for quantitative risk analysis"
    },
    {
      title: "Incident Response",
      content: "Preparation → Identification → Containment → Eradication → Recovery → Lessons learned | IR lifecycle",
      example: "IR team follows playbook when breach detected"
    },
    {
      title: "Forensic Process",
      content: "Identification → Preservation → Collection → Examination → Analysis → Presentation | Legal evidence handling",
      example: "Chain of custody for digital evidence"
    },
    {
      title: "Compliance Regulations",
      content: "GDPR (EU privacy), HIPAA (US healthcare), PCI DSS (payment cards), SOX (financial), FISMA (US gov)",
      example: "PCI DSS: Security standards for card processing"
    },
    {
      title: "Security Audits",
      content: "Internal, External, First-party, Second-party, Third-party | Different audit types",
      example: "Annual external audit for ISO 27001 certification"
    },
    {
      title: "Security Awareness Training",
      content: "Phishing simulation, Policy training, Social engineering awareness | Human factor protection",
      example: "Regular phishing tests to train employees"
    },
    {
      title: "Ethical Hacking",
      content: "Authorized penetration testing | Black box (no knowledge), White box (full knowledge), Gray box (some)",
      example: "Pen testers find vulnerabilities before attackers"
    },
    {
      title: "Vulnerability Assessment",
      content: "Identify, classify, prioritize vulnerabilities | Automated scanners, manual testing",
      example: "Nessus, OpenVAS for vulnerability scanning"
    },
    {
      title: "Security Metrics",
      content: "MTTD (Mean Time to Detect), MTTR (Mean Time to Respond), Number of incidents, Patch compliance rate",
      example: "Track metrics to measure security program effectiveness"
    },

    // Emerging Threats & Trends (10 tricks)
    {
      title: "IoT Security",
      content: "Weak passwords, No updates, Insecure interfaces | Botnets, Data privacy issues",
      example: "Mirai botnet attacked via insecure IoT devices"
    },
    {
      title: "Cloud Security",
      content: "Shared responsibility model | IAM, Encryption, Network security, Compliance | CSPM tools",
      example: "AWS Shared Responsibility: AWS secures cloud, customer secures in cloud"
    },
    {
      title: "Mobile Security",
      content: "App permissions, MDM (Mobile Device Management), App vetting, Secure containers | BYOD challenges",
      example: "MDM remotely wipes lost corporate devices"
    },
    {
      title: "Supply Chain Attacks",
      content: "Compromise vendor/partner to reach target | SolarWinds, NotPetya examples",
      example: "Malware in software updates from trusted vendor"
    },
    {
      title: "AI in Security",
      content: "Threat detection, Anomaly detection, Automated response, Phishing detection | ML for security",
      example: "AI analyzes network traffic patterns for anomalies"
    },
    {
      title: "AI Security Risks",
      content: "Adversarial attacks, Data poisoning, Model theft, Bias, Explainability | New attack vectors",
      example: "Adversarial examples fool image recognition"
    },
    {
      title: "Blockchain Security",
      content: "51% attacks, Smart contract vulnerabilities, Private key management, Consensus attacks",
      example: "DAO hack exploited smart contract vulnerability"
    },
    {
      title: "Social Engineering",
      content: "Phishing, Spear phishing, Whaling, Vishing, Smishing, Baiting, Pretexting | Human manipulation",
      example: "CEO fraud: Impersonate executive to request money transfer"
    },
    {
      title: "APT (Advanced Persistent Threat)",
      content: "Sophisticated, targeted, long-term attacks | Nation-state actors | Multi-phase attacks",
      example: "APT groups like APT28 (Fancy Bear), APT29 (Cozy Bear)"
    },
    {
      title: "Zero-Day Exploits",
      content: "Attack unknown vulnerabilities | No patch available | High value for attackers",
      example: "Stuxnet used multiple zero-days against Iranian systems"
    }
  ],

  detailedNotes: {
    "Cyber Security Fundamentals": {
      keyConcepts: [
        "CIA Triad: Confidentiality (prevent unauthorized disclosure), Integrity (prevent unauthorized modification), Availability (ensure authorized access)",
        "AAA Framework: Authentication (verify identity), Authorization (determine access rights), Accounting (track activities)",
        "Defense in Depth: Multiple layers of security controls providing redundancy",
        "Risk Management: Process of identifying, assessing, and controlling threats",
        "Security Policies: Formal documents outlining security requirements and procedures",
        "Zero Trust: Security model requiring verification for every access request",
        "Cyber Kill Chain: Framework for understanding attack progression"
      ],
      importantPoints: [
        "Confidentiality achieved through encryption, access controls, data classification",
        "Integrity maintained via hashing, digital signatures, checksums, version control",
        "Availability ensured through redundancy, backups, fault tolerance, DDoS protection",
        "Risk = Threat × Vulnerability × Impact (quantitative risk calculation)",
        "Security controls: Preventive (firewalls), Detective (IDS), Corrective (backups)",
        "Defense layers: Physical, Network, Host, Application, Data security",
        "Zero Trust principles: Verify explicitly, least privilege, assume breach"
      ],
      memoryAids: [
        "CIA: Confidentiality, Integrity, Availability (security triad)",
        "AAA: Authentication, Authorization, Accounting (access control)",
        "Risk formula: R = T × V × I (Threat × Vulnerability × Impact)"
      ]
    },
    
    "Cryptography & PKI": {
      keyConcepts: [
        "Symmetric Cryptography: Same key for encryption and decryption (AES, DES)",
        "Asymmetric Cryptography: Public/private key pairs (RSA, ECC)",
        "Hashing: One-way transformation producing fixed-size output (SHA-256, MD5)",
        "Digital Signatures: Provide authentication, integrity, non-repudiation",
        "Digital Certificates: Bind public keys to identities (X.509 format)",
        "PKI: Infrastructure for managing digital certificates and keys",
        "SSL/TLS: Protocols for secure communications over networks"
      ],
      importantPoints: [
        "Symmetric algorithms: Fast, suitable for bulk data encryption",
        "Asymmetric algorithms: Slow, used for key exchange and digital signatures",
        "Hash properties: Deterministic, quick computation, pre-image resistance",
        "Digital signature process: Hash document, encrypt hash with private key",
        "Certificate authorities (CA): Trusted entities issuing digital certificates",
        "Certificate revocation: CRL (Certificate Revocation List) and OCSP (Online Certificate Status Protocol)",
        "TLS handshake: Negotiate cipher suite, authenticate, establish keys"
      ],
      memoryAids: [
        "Symmetric: Same key, fast (AES), Asymmetric: Key pair, slow (RSA)",
        "Hash: One-way, fixed output (SHA-256), Digital signature: Hash + private key",
        "PKI components: CA (issues), RA (verifies), Repository (stores), CRL (revokes)"
      ]
    },
    
    "Network & System Security": {
      keyConcepts: [
        "Firewalls: Control network traffic based on security rules",
        "IDS/IPS: Monitor and prevent network intrusions",
        "VPN: Secure remote access and site-to-site connections",
        "Wireless Security: Protect WiFi networks from attacks",
        "Network Segmentation: Divide network to limit breach impact",
        "Endpoint Security: Protect individual devices (antivirus, EDR)",
        "Patch Management: Regular updates to fix vulnerabilities"
      ],
      importantPoints: [
        "Firewall types: Packet filter, stateful, application-layer, next-generation",
        "IDS detection methods: Signature-based (known attacks), anomaly-based (unusual behavior)",
        "VPN protocols: IPSec (network layer), SSL/TLS (application layer)",
        "Wireless security evolution: WEP → WPA → WPA2 → WPA3",
        "Network segmentation benefits: Contain breaches, control access, improve monitoring",
        "Endpoint protection: Antivirus, host firewall, application control, device encryption",
        "Patch management process: Test patches in lab, deploy in phases, verify installation"
      ],
      memoryAids: [
        "Firewall: Allow/block traffic, IDS: Detect attacks, IPS: Prevent attacks",
        "Wireless: WEP (broken), WPA (TKIP), WPA2 (AES), WPA3 (SAE)",
        "VPN: IPSec (IP layer), SSL/TLS (app layer), Site-to-site vs Remote access"
      ]
    },
    
    "Application Security & Threats": {
      keyConcepts: [
        "OWASP Top 10: Most critical web application security risks",
        "SQL Injection: Injecting SQL commands through user input",
        "XSS (Cross-Site Scripting): Injecting scripts into web pages",
        "CSRF (Cross-Site Request Forgery): Forcing user to execute unwanted actions",
        "Buffer Overflow: Writing beyond allocated memory boundaries",
        "Malware: Malicious software designed to harm systems",
        "Social Engineering: Manipulating people to bypass security"
      ],
      importantPoints: [
        "SQL injection prevention: Prepared statements, parameterized queries, input validation",
        "XSS types: Stored (persistent), reflected (non-persistent), DOM-based",
        "CSRF protection: Anti-CSRF tokens, SameSite cookie attribute",
        "Buffer overflow protections: ASLR, DEP, stack canaries, bounds checking",
        "Malware categories: Viruses, worms, trojans, ransomware, spyware, rootkits",
        "Social engineering techniques: Phishing, pretexting, baiting, tailgating",
        "Secure coding practices: Input validation, output encoding, error handling"
      ],
      memoryAids: [
        "OWASP Top 10: Injection, Broken Auth, Sensitive Data, XXE, Broken Access Control...",
        "Web attacks: SQLi (database), XSS (client), CSRF (actions)",
        "Malware: Virus (attaches), Worm (spreads), Trojan (disguised), Ransomware (locks)"
      ]
    },
    
    "Access Control & Identity Management": {
      keyConcepts: [
        "Access Control Models: DAC, MAC, RBAC, ABAC",
        "Authentication Factors: Something you know, have, are",
        "Multi-Factor Authentication: Combining multiple factors",
        "Single Sign-On: One authentication for multiple systems",
        "Privileged Access Management: Control and monitor admin access",
        "Directory Services: Centralized user management (Active Directory, LDAP)",
        "Identity Federation: Trust relationships between organizations"
      ],
      importantPoints: [
        "DAC: Owner controls access (Windows files), MAC: System controls (military)",
        "RBAC: Users assigned roles, roles have permissions (enterprise standard)",
        "Authentication factors: Knowledge (password), possession (token), inherence (biometric)",
        "MFA benefits: Defense in depth, reduces credential theft impact",
        "SSO protocols: SAML (XML-based), OAuth (authorization), OpenID Connect (authentication)",
        "PAM features: Session recording, password vaulting, just-in-time access",
        "Directory services: Hierarchical database of users, computers, resources"
      ],
      memoryAids: [
        "Access control: DAC (owner decides), MAC (system decides), RBAC (roles decide)",
        "Authentication factors: Knowledge, Possession, Inherence (KPI)",
        "SSO: One login, many apps (SAML for enterprise, OAuth for web)"
      ]
    },
    
    "Security Governance & Compliance": {
      keyConcepts: [
        "Security Frameworks: ISO 27001, NIST CSF, COBIT",
        "Risk Assessment: Identifying and evaluating security risks",
        "Incident Response: Process for handling security incidents",
        "Digital Forensics: Investigation of digital evidence",
        "Compliance Regulations: Legal requirements (GDPR, HIPAA, PCI DSS)",
        "Security Audits: Systematic evaluation of security controls",
        "Security Awareness: Training users to recognize threats"
      ],
      importantPoints: [
        "ISO 27001: International standard for Information Security Management System",
        "NIST Cybersecurity Framework: Identify, Protect, Detect, Respond, Recover",
        "Incident response phases: Preparation, Identification, Containment, Eradication, Recovery",
        "Forensic principles: Preserve evidence, maintain chain of custody, document everything",
        "GDPR: EU data protection regulation with heavy fines for violations",
        "PCI DSS: Security standard for organizations handling payment cards",
        "Security awareness: Regular training, phishing simulations, policy education"
      ],
      memoryAids: [
        "Incident response: PICERL (Preparation, Identification, Containment, Eradication, Recovery, Lessons)",
        "NIST CSF: IPDRR (Identify, Protect, Detect, Respond, Recover)",
        "Compliance: GDPR (privacy), HIPAA (healthcare), PCI DSS (payment cards)"
      ]
    }
  },

  quickReference: {
    "cs-1": "CIA Triad: Confidentiality, Integrity, Availability (core security principles)",
    "cs-2": "Confidentiality: Prevent unauthorized disclosure (encryption, access controls)",
    "cs-3": "Integrity: Prevent unauthorized modification (hashing, digital signatures)",
    "cs-4": "Availability: Ensure authorized access (redundancy, backups, DDoS protection)",
    "cs-5": "AAA Framework: Authentication, Authorization, Accounting",
    "cs-6": "Authentication: Verify identity (passwords, biometrics, tokens)",
    "cs-7": "Authorization: Determine access rights (permissions, roles)",
    "cs-8": "Accounting: Track activities (logging, auditing)",
    "cs-9": "Defense in Depth: Multiple security layers (physical, network, host, application)",
    "cs-10": "Zero Trust: Never trust, always verify (assume breach, verify explicitly)",
    "cs-11": "Risk Management: Identify → Assess → Treat → Monitor risks",
    "cs-12": "Risk = Threat × Vulnerability × Impact",
    "cs-13": "Security Controls: Preventive, Detective, Corrective, Deterrent, Compensating",
    "cs-14": "Cyber Kill Chain: Reconnaissance → Weaponization → Delivery → Exploitation → Installation → C2 → Actions",
    "cs-15": "Cryptography: Science of secure communications",
    "cs-16": "Symmetric Encryption: Same key for encryption/decryption (AES, DES, 3DES)",
    "cs-17": "Asymmetric Encryption: Public/private key pair (RSA, ECC, Diffie-Hellman)",
    "cs-18": "Hashing: One-way function producing fixed-size output (SHA-256, MD5, SHA-1)",
    "cs-19": "Digital Signature: Hash encrypted with private key (authentication, integrity)",
    "cs-20": "Digital Certificate: Binds public key to identity (X.509 format)",
    "cs-21": "PKI: Public Key Infrastructure (CA, RA, CRL, certificate repository)",
    "cs-22": "SSL/TLS: Secure Socket Layer/Transport Layer Security (HTTPS encryption)",
    "cs-23": "Firewall: Controls network traffic based on rules",
    "cs-24": "Firewall types: Packet filter, Stateful, Application, Next-generation",
    "cs-25": "IDS: Intrusion Detection System (monitors, alerts)",
    "cs-26": "IPS: Intrusion Prevention System (monitors, blocks)",
    "cs-27": "IDS detection: Signature-based, Anomaly-based, Heuristic",
    "cs-28": "VPN: Virtual Private Network (secure tunnel over public network)",
    "cs-29": "VPN types: Site-to-site, Remote access, SSL, IPSec",
    "cs-30": "DoS: Denial of Service attack (overwhelm target resources)",
    "cs-31": "DDoS: Distributed DoS (multiple sources attack together)",
    "cs-32": "Wireless Security: WEP, WPA, WPA2, WPA3",
    "cs-33": "WEP: Wired Equivalent Privacy (broken, insecure)",
    "cs-34": "WPA: WiFi Protected Access (TKIP encryption)",
    "cs-35": "WPA2: AES-CCMP encryption (current standard)",
    "cs-36": "WPA3: SAE (Simultaneous Authentication of Equals)",
    "cs-37": "OWASP Top 10: Most critical web application security risks",
    "cs-38": "SQL Injection: Inject SQL commands through input (#1 web vulnerability)",
    "cs-39": "XSS: Cross-Site Scripting (inject scripts into web pages)",
    "cs-40": "CSRF: Cross-Site Request Forgery (execute unwanted actions)",
    "cs-41": "Buffer Overflow: Write beyond allocated memory",
    "cs-42": "Malware: Malicious software (virus, worm, trojan, ransomware)",
    "cs-43": "Virus: Attaches to files/programs, requires execution",
    "cs-44": "Worm: Self-replicating, spreads without user action",
    "cs-45": "Trojan: Disguised as legitimate software",
    "cs-46": "Ransomware: Encrypts files, demands ransom",
    "cs-47": "Spyware: Monitors user activity secretly",
    "cs-48": "Rootkit: Hides malware existence",
    "cs-49": "Social Engineering: Manipulating people to bypass security",
    "cs-50": "Phishing: Fake emails/websites to steal credentials",
    "cs-51": "Spear Phishing: Targeted phishing to specific individuals",
    "cs-52": "Whaling: Phishing targeting executives",
    "cs-53": "Vishing: Voice phishing (phone calls)",
    "cs-54": "Smishing: SMS phishing (text messages)",
    "cs-55": "Access Control Models: DAC, MAC, RBAC, ABAC",
    "cs-56": "DAC: Discretionary Access Control (owner decides access)",
    "cs-57": "MAC: Mandatory Access Control (system decides based on labels)",
    "cs-58": "RBAC: Role-Based Access Control (access based on roles)",
    "cs-59": "ABAC: Attribute-Based Access Control (access based on attributes)",
    "cs-60": "Authentication Factors: Knowledge, Possession, Inherence",
    "cs-61": "Knowledge: Something you know (password, PIN)",
    "cs-62": "Possession: Something you have (token, smart card, phone)",
    "cs-63": "Inherence: Something you are (fingerprint, face, iris)",
    "cs-64": "MFA: Multi-Factor Authentication (≥2 factors)",
    "cs-65": "2FA: Two-Factor Authentication (2 factors)",
    "cs-66": "Single Sign-On: One login for multiple systems",
    "cs-67": "SSO protocols: SAML, OAuth, OpenID Connect",
    "cs-68": "SAML: Security Assertion Markup Language (XML-based, enterprise)",
    "cs-69": "OAuth: Authorization framework (access delegation)",
    "cs-70": "OpenID Connect: Authentication layer on top of OAuth 2.0",
    "cs-71": "Active Directory: Microsoft directory service (Windows domains)",
    "cs-72": "LDAP: Lightweight Directory Access Protocol (directory access)",
    "cs-73": "Kerberos: Network authentication protocol (tickets, realm)",
    "cs-74": "PAM: Privileged Access Management (control admin access)",
    "cs-75": "Security Frameworks: ISO 27001, NIST CSF, COBIT, CIS Controls",
    "cs-76": "ISO 27001: Information Security Management System standard",
    "cs-77": "NIST CSF: Cybersecurity Framework (Identify, Protect, Detect, Respond, Recover)",
    "cs-78": "COBIT: Control Objectives for Information and Related Technologies",
    "cs-79": "CIS Controls: Center for Internet Security Critical Security Controls",
    "cs-80": "Incident Response: Preparation → Identification → Containment → Eradication → Recovery",
    "cs-81": "RTO: Recovery Time Objective (acceptable downtime)",
    "cs-82": "RPO: Recovery Point Objective (acceptable data loss)",
    "cs-83": "Digital Forensics: Scientific investigation of digital evidence",
    "cs-84": "Chain of Custody: Documentation of evidence handling",
    "cs-85": "Compliance Regulations: GDPR, HIPAA, PCI DSS, SOX, FISMA",
    "cs-86": "GDPR: General Data Protection Regulation (EU privacy)",
    "cs-87": "HIPAA: Health Insurance Portability and Accountability Act (US healthcare)",
    "cs-88": "PCI DSS: Payment Card Industry Data Security Standard",
    "cs-89": "SOX: Sarbanes-Oxley Act (financial reporting)",
    "cs-90": "FISMA: Federal Information Security Management Act (US government)",
    "cs-91": "Penetration Testing: Authorized simulated attacks",
    "cs-92": "Pen test types: Black box (no knowledge), White box (full knowledge), Gray box (some)",
    "cs-93": "Vulnerability Assessment: Identify and classify vulnerabilities",
    "cs-94": "Security Audits: Systematic evaluation of security controls",
    "cs-95": "Security Awareness Training: Educate users about security",
    "cs-96": "IoT Security: Internet of Things security challenges",
    "cs-97": "Cloud Security: Shared responsibility model, IAM, encryption",
    "cs-98": "Mobile Security: MDM, app security, BYOD policies",
    "cs-99": "AI Security: Machine learning security, adversarial attacks",
    "cs-100": "Blockchain Security: 51% attacks, smart contract vulnerabilities"
  },

  examStrategy: {
    topicWeightage: [
      "Cyber Security Fundamentals & Principles: 10-12 questions",
      "Cryptography & PKI: 15-18 questions",
      "Network Security & Firewalls: 12-15 questions",
      "Application Security & OWASP: 12-15 questions",
      "Access Control & Identity Management: 10-12 questions",
      "Malware & Social Engineering: 8-10 questions",
      "Security Governance & Compliance: 8-10 questions",
      "Incident Response & Forensics: 6-8 questions",
      "Emerging Technologies & Trends: 5-7 questions",
      "Case Studies & Scenarios: 6-8 questions"
    ],
    preparationTips: [
      "1. Master the CIA triad and AAA framework thoroughly",
      "2. Understand different types of encryption and their uses",
      "3. Learn OWASP Top 10 vulnerabilities with examples",
      "4. Study firewall types and their differences",
      "5. Memorize malware types and characteristics",
      "6. Understand access control models (DAC, MAC, RBAC)",
      "7. Learn compliance regulations (GDPR, HIPAA, PCI DSS)",
      "8. Practice incident response steps",
      "9. Study social engineering techniques",
      "10. Review real-world attack case studies"
    ],
    timeManagement: [
      "Stuxnet: First known cyber weapon targeting industrial systems",
      "WannaCry: Ransomware worm exploiting EternalBlue vulnerability",
      "SolarWinds: Supply chain attack affecting government and corporations",
      "Equifax: Data breach exposing 147 million personal records",
      "Target: POS system breach through HVAC vendor",
      "Yahoo: Largest data breach affecting 3 billion accounts",
      "NotPetya: Destructive malware disguised as ransomware",
      "Mirai: IoT botnet causing massive DDoS attacks",
      "Heartbleed: OpenSSL vulnerability exposing memory contents",
      "Spectre/Meltdown: CPU vulnerabilities affecting most modern processors",
      "SQL Injection: ' OR '1'='1' -- bypass authentication",
      "XSS: <script>alert('XSS')</script> in input fields",
      "CSRF: Forged requests from authenticated users",
      "Phishing: Fake login pages to steal credentials",
      "Man-in-the-Middle: Intercept and modify communications",
      "DNS Spoofing: Redirect to malicious websites",
      "ARP Poisoning: Redirect network traffic",
      "Buffer Overflow: Overwrite memory to execute code",
      "Privilege Escalation: Gain higher access levels",
      "Zero-Day: Exploit unknown vulnerabilities",
      "Nmap: Network scanning and discovery",
      "Wireshark: Network protocol analyzer",
      "Metasploit: Penetration testing framework",
      "Nessus: Vulnerability scanner",
      "Snort: IDS/IPS system",
      "Burp Suite: Web application testing",
      "John the Ripper: Password cracking",
      "Hashcat: Advanced password recovery",
      "Kali Linux: Security testing distribution",
      "Splunk: SIEM and log analysis"
    ]
  }
},
};

export default function App() {
  const [userData, setUserData] = useState(() => {
    try {
      const s = localStorage.getItem(STORAGE_KEY);
      if (s) {
        return JSON.parse(s);
      }
    } catch (e) {
      console.error("Error parsing localStorage data:", e);
    }
    return {
      subjects: {},
      overallStats: {
        totalTests: 0,
        averageScore: 0,
        bestScore: 0,
        totalCorrect: 0,
        totalQuestions: 0,
        weakAreas: [],
        strongAreas: [],
        subjectRanking: [],
      },
    };
  });

  const [testOpen, setTestOpen] = useState(false);
  const [resultsOpen, setResultsOpen] = useState(false);
  const [analyticsOpen, setAnalyticsOpen] = useState(null);
  const [currentTest, setCurrentTest] = useState(null);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [selectedTipSubject, setSelectedTipSubject] = useState(null);
  const [activeTipTab, setActiveTipTab] = useState("tricks");
  const [showOverallAnalytics, setShowOverallAnalytics] = useState(false);
  const timerRef = useRef(null);

  // Initialize subjects in localStorage
  useEffect(() => {
    const initializedData = { ...userData };
    let needsUpdate = false;

    Object.keys(SUBJECTS).forEach((id) => {
      if (!initializedData.subjects[id]) {
        initializedData.subjects[id] = {
          testsTaken: 0,
          totalScore: 0,
          bestScore: 0,
          averageScore: 0,
          totalCorrect: 0,
          totalIncorrect: 0,
          totalQuestions: SUBJECTS[id].questions.length,
          topicPerformance: {},
          testHistory: [],
        };
        needsUpdate = true;
      }
    });

    if (needsUpdate) {
      setUserData(initializedData);
    }
  }, []);

  // Update overall stats whenever userData changes
  useEffect(() => {
    if (userData.subjects) {
      const overallStats = calculateOverallStats(userData.subjects);
      setUserData((prev) => ({
        ...prev,
        overallStats,
      }));
    }
  }, [userData.subjects]);

  // Calculate overall statistics
  const calculateOverallStats = (subjects) => {
    let totalTests = 0;
    let totalScore = 0;
    let totalCorrect = 0;
    let totalQuestions = 0;
    let bestScore = 0;
    const subjectScores = [];
    const weakAreas = [];
    const strongAreas = [];

    Object.entries(subjects).forEach(([subjectId, data]) => {
      totalTests += data.testsTaken || 0;
      totalScore += data.averageScore || 0;
      totalCorrect += data.totalCorrect || 0;
      totalQuestions += data.totalQuestions || 0;

      if (data.bestScore > bestScore) {
        bestScore = data.bestScore;
      }

      if (data.averageScore > 0) {
        subjectScores.push({
          subject: SUBJECTS[subjectId]?.name || subjectId,
          score: data.averageScore,
          testsTaken: data.testsTaken,
          color: SUBJECTS[subjectId]?.iconColor || "#4F46E5",
        });

        if (data.averageScore < 60) {
          weakAreas.push({
            subject: SUBJECTS[subjectId]?.name || subjectId,
            score: data.averageScore,
            color: SUBJECTS[subjectId]?.iconColor || "#4F46E5",
          });
        } else if (data.averageScore >= 80) {
          strongAreas.push({
            subject: SUBJECTS[subjectId]?.name || subjectId,
            score: data.averageScore,
            color: SUBJECTS[subjectId]?.iconColor || "#4F46E5",
          });
        }
      }
    });

    const averageScore =
      totalTests > 0
        ? Math.round(
            totalScore /
              Object.keys(subjects).filter((id) => subjects[id].testsTaken > 0)
                .length
          )
        : 0;

    return {
      totalTests,
      averageScore,
      bestScore,
      totalCorrect,
      totalQuestions,
      accuracy:
        totalQuestions > 0
          ? Math.round((totalCorrect / totalQuestions) * 100)
          : 0,
      weakAreas: weakAreas.sort((a, b) => a.score - b.score),
      strongAreas: strongAreas.sort((a, b) => b.score - a.score),
      subjectRanking: subjectScores.sort((a, b) => b.score - a.score),
    };
  };

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
  }, [userData]);

  // Start Test
  function startTest(subjectId) {
    const subject = SUBJECTS[subjectId];
    const questions = [...subject.questions]
      .sort(() => Math.random() - 0.5)
      .map((q) => ({ ...q }));

    const totalTime = Math.min(questions.length * 60, 7200);

    setCurrentTest({
      subjectId,
      questions,
      userAnswers: {},
      index: 0,
      timeRemaining: totalTime,
      submitted: false,
    });
    setTestOpen(true);
    setResultsOpen(false);
    setAnalyticsOpen(null);
    setShowCancelConfirm(false);
  }

  // Timer
  useEffect(() => {
    if (!currentTest || currentTest.submitted) return;

    timerRef.current = setInterval(() => {
      setCurrentTest((prev) => {
        if (!prev || prev.timeRemaining <= 1) {
          clearInterval(timerRef.current);
          if (!prev.submitted) {
            submitTest(prev);
          }
          return prev;
        }
        return { ...prev, timeRemaining: prev.timeRemaining - 1 };
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentTest]);

  // Select option
  function selectOption(qId, letter) {
    if (!currentTest || currentTest.submitted) return;

    setCurrentTest((prev) => ({
      ...prev,
      userAnswers: { ...prev.userAnswers, [qId]: letter },
    }));
  }

  // Cancel test
  function cancelTest() {
    if (currentTest && !currentTest.submitted) {
      setShowCancelConfirm(true);
    }
  }

  // Confirm cancel test
  function confirmCancelTest() {
    clearInterval(timerRef.current);
    setCurrentTest(null);
    setTestOpen(false);
    setShowCancelConfirm(false);
  }

  // Continue test
  function continueTest() {
    setShowCancelConfirm(false);
  }

  // Submit test
  function submitTest(testState = currentTest) {
    if (!testState || testState.submitted) return;

    clearInterval(timerRef.current);

    let correct = 0;
    const topicPerformance = {};

    testState.questions.forEach((q) => {
      if (testState.userAnswers[q.id] === q.answer) {
        correct++;
      }

      if (!topicPerformance[q.topic]) {
        topicPerformance[q.topic] = { correct: 0, total: 0 };
      }
      topicPerformance[q.topic].total++;
      if (testState.userAnswers[q.id] === q.answer) {
        topicPerformance[q.topic].correct++;
      }
    });

    const score = Math.round((correct / testState.questions.length) * 100);
    const testDate = new Date().toISOString();

    setUserData((prev) => {
      const next = { ...prev };
      if (!next.subjects) next.subjects = {};
      if (!next.subjects[testState.subjectId]) {
        next.subjects[testState.subjectId] = {
          testsTaken: 0,
          totalScore: 0,
          bestScore: 0,
          averageScore: 0,
          totalCorrect: 0,
          totalIncorrect: 0,
          totalQuestions: testState.questions.length,
          topicPerformance: {},
          testHistory: [],
        };
      }

      const s = next.subjects[testState.subjectId];

      s.testsTaken++;
      s.totalScore += score;
      s.averageScore = Math.round(s.totalScore / s.testsTaken);
      s.bestScore = Math.max(s.bestScore || 0, score);
      s.totalCorrect += correct;
      s.totalIncorrect += testState.questions.length - correct;

      // Add to test history
      s.testHistory.unshift({
        date: testDate,
        score: score,
        correct: correct,
        total: testState.questions.length,
        timeTaken: testState.timeRemaining,
      });

      // Keep only last 10 tests in history
      if (s.testHistory.length > 10) {
        s.testHistory = s.testHistory.slice(0, 10);
      }

      Object.entries(topicPerformance).forEach(([topic, data]) => {
        if (!s.topicPerformance[topic]) {
          s.topicPerformance[topic] = { correct: 0, total: 0 };
        }
        s.topicPerformance[topic].correct += data.correct;
        s.topicPerformance[topic].total += data.total;
      });

      return next;
    });

    setCurrentTest((prev) => (prev ? { ...prev, submitted: true } : null));
    setTestOpen(false);
    setResultsOpen(true);
    setShowCancelConfirm(false);
  }

  // Subject Card component
  const SubjectCard = ({ subjectId }) => {
    const subject = SUBJECTS[subjectId];
    const sdata = userData?.subjects?.[subjectId] || {
      testsTaken: 0,
      averageScore: 0,
      bestScore: 0,
      totalQuestions: subject?.questions.length || 0,
    };

    if (!subject) return null;

    return (
      <div
        className="bg-white rounded-xl shadow p-6 border-l-4 h-full"
        style={{ borderColor: subject.iconColor }}
      >
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white"
            style={{ background: subject.iconColor }}
          >
            <i className={subject.icon}></i>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold truncate">{subject.name}</h3>
            <p className="text-sm text-gray-500 truncate">{subject.details}</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 text-center mt-6">
          <div>
            <div className="font-bold">{sdata.averageScore || 0}%</div>
            <div className="text-xs text-gray-500">Avg</div>
          </div>
          <div>
            <div className="font-bold">{sdata.testsTaken || 0}</div>
            <div className="text-xs text-gray-500">Tests</div>
          </div>
          <div>
            <div className="font-bold">{sdata.bestScore || 0}%</div>
            <div className="text-xs text-gray-500">Best</div>
          </div>
          <div>
            <div className="font-bold">{subject.questions.length}</div>
            <div className="text-xs text-gray-500">Questions</div>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={() => startTest(subjectId)}
            className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
          >
            Take Test
          </button>
          <button
            onClick={() => setAnalyticsOpen(subjectId)}
            className="flex-1 border border-indigo-600 text-indigo-600 py-2 rounded-lg hover:bg-indigo-50"
          >
            Analytics
          </button>
          <button
            onClick={() => {
              setSelectedTipSubject(subject.name);
              setShowTips(true);
            }}
            className="flex-1 border border-green-600 text-green-600 py-2 rounded-lg hover:bg-green-50"
            title="Study Tips"
          >
            <i className="fas fa-lightbulb"></i>
          </button>
        </div>
      </div>
    );
  };

  // Handle close analytics
  const closeAnalytics = () => {
    setAnalyticsOpen(null);
  };

  // Format time display
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${secs
        .toString()
        .padStart(2, "0")}`;
    }
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <header className="max-w-7xl mx-auto mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-3">
              <i className="fas fa-laptop-code text-indigo-600"></i> 
              Assistant Programmer
            </h1>
            <p className="text-gray-600 mt-1">
              Comprehensive MCQ Practice with Advanced Analytics
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setShowOverallAnalytics(true)}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              <i className="fas fa-chart-bar"></i>
              Overall Analytics
            </button>
            <button
              onClick={() => setShowTips(true)}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              <i className="fas fa-lightbulb"></i>
              Study Tips
            </button>
          </div>
        </div>
      </header>

      {/* Overall Stats Dashboard */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <i className="fas fa-tachometer-alt text-indigo-600"></i>
              Overall Performance Dashboard
            </h2>
            <button
              onClick={() => setShowOverallAnalytics(true)}
              className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
            >
              <i className="fas fa-external-link-alt"></i>
              View Detailed Analytics
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div className="text-2xl font-bold text-blue-700">
                {userData.overallStats?.totalTests || 0}
              </div>
              <div className="text-sm text-gray-600">Total Tests Taken</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <div className="text-2xl font-bold text-green-700">
                {userData.overallStats?.averageScore || 0}%
              </div>
              <div className="text-sm text-gray-600">Overall Average</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
              <div className="text-2xl font-bold text-purple-700">
                {userData.overallStats?.bestScore || 0}%
              </div>
              <div className="text-sm text-gray-600">Best Score</div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
              <div className="text-2xl font-bold text-orange-700">
                {userData.overallStats?.accuracy || 0}%
              </div>
              <div className="text-sm text-gray-600">Overall Accuracy</div>
            </div>
          </div>

          {/* Subject Performance Summary */}
          <div className="mt-6 pt-6 border-t">
            <h3 className="text-lg font-semibold mb-4">
              Subject Performance Ranking
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {userData.overallStats?.subjectRanking
                ?.slice(0, 6)
                .map((subject, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm"
                        style={{ backgroundColor: subject.color }}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-medium">{subject.subject}</div>
                        <div className="text-sm text-gray-500">
                          {subject.testsTaken} tests
                        </div>
                      </div>
                    </div>
                    <div className="font-bold" style={{ color: subject.color }}>
                      {subject.score}%
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid Subject Cards */}
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
          {Object.keys(SUBJECTS).map((id) => (
            <SubjectCard key={id} subjectId={id} />
          ))}
        </div>
      </div>

      {/* STUDY TIPS MODAL */}
      {showTips && (
        <div
          className="fixed inset-0  flex items-center justify-center z-[60] p-4 backdrop-blur-sm bg-black/30"
          onClick={(e) => e.target === e.currentTarget && setShowTips(false)}
        >
          <div className="bg-white rounded-2xl w-full max-w-6xl max-h-[95vh] overflow-y-auto shadow-2xl border border-gray-200 ">
            {/* Header */}
            <div className="top-0  pb-4 border-b border-gray-200 0 z-10 p-6 bg-gray-500">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">
                    <i className="fas fa-lightbulb text-white text-xl"></i>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 :text-white">
                      Study Tips & Memory Tricks
                    </h2>
                    <p className="text-gray-500 :text-gray-400 mt-1">
                      {selectedTipSubject} - Easy to remember shortcuts for exam
                      preparation
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowTips(false)}
                  className="w-10 h-10 rounded-full bg-gray-100  flex items-center justify-center text-gray-500  hover:bg-gray-200  transition-colors hover:text-gray-700 :hover:text-gray-300"
                >
                  <i className="fas fa-times text-lg"></i>
                </button>
              </div>

              {/* Subject Selection Tabs */}
              <div className="flex flex-wrap gap-2 mb-4">
                <button
                  onClick={() => setSelectedTipSubject("All Subjects")}
                  className={`px-4 py-2.5 rounded-lg flex items-center gap-2 transition-all ${
                    selectedTipSubject === "All Subjects"
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-200 :shadow-indigo-900/30"
                      : "bg-gray-100  text-gray-700  hover:bg-gray-200  hover:shadow-md"
                  }`}
                >
                  <i className="fas fa-layer-group"></i>
                  All Subjects
                </button>
                {Object.keys(STUDY_TIPS).map((subject) => (
                  <button
                    key={subject}
                    onClick={() => setSelectedTipSubject(subject)}
                    className={`px-4 py-2.5 rounded-lg flex items-center gap-2 transition-all ${
                      selectedTipSubject === subject
                        ? "text-white shadow-lg"
                        : "bg-gray-100  text-gray-700  hover:bg-gray-200  hover:shadow-md"
                    }`}
                    style={
                      selectedTipSubject === subject
                        ? {
                            background: `linear-gradient(135deg, ${STUDY_TIPS[subject].color} 0%, ${STUDY_TIPS[subject].color}80 100%)`,
                            boxShadow: `0 10px 20px ${STUDY_TIPS[subject].color}30`,
                          }
                        : {}
                    }
                  >
                    <i className={STUDY_TIPS[subject].icon}></i>
                    {subject}
                  </button>
                ))}
              </div>

              {/* Content Type Tabs - Available for ALL Subjects */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveTipTab("tricks")}
                  className={`px-4 py-2.5 rounded-lg flex items-center gap-2 transition-all ${
                    activeTipTab === "tricks"
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-200 "
                      : "bg-gray-100  text-gray-700  hover:bg-gray-200  hover:shadow-md"
                  }`}
                >
                  <i className="fas fa-magic mr-2"></i>Memory Tricks
                </button>

                {/* Notes Tab for all subjects */}
                <button
                  onClick={() => setActiveTipTab("notes")}
                  className={`px-4 py-2.5 rounded-lg flex items-center gap-2 transition-all ${
                    activeTipTab === "notes"
                      ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg shadow-emerald-200 "
                      : "bg-gray-100  text-gray-700  hover:bg-gray-200  hover:shadow-md"
                  }`}
                >
                  <i className="fas fa-book mr-2"></i>Detailed Notes
                </button>

                {/* Quick Reference Tab for all subjects */}
                <button
                  onClick={() => setActiveTipTab("quickref")}
                  className={`px-4 py-2.5 rounded-lg flex items-center gap-2 transition-all ${
                    activeTipTab === "quickref"
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-200 :shadow-amber-900/30"
                      : "bg-gray-100  text-gray-700  hover:bg-gray-200  hover:shadow-md"
                  }`}
                >
                  <i className="fas fa-bolt mr-2"></i>Quick Reference
                </button>

                {/* Strategy Tab for all subjects */}
                <button
                  onClick={() => setActiveTipTab("strategy")}
                  className={`px-4 py-2.5 rounded-lg flex items-center gap-2 transition-all ${
                    activeTipTab === "strategy"
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-200 :shadow-purple-900/30"
                      : "bg-gray-100  text-gray-700  hover:bg-gray-200  hover:shadow-md"
                  }`}
                >
                  <i className="fas fa-chess mr-2"></i>Exam Strategy
                </button>
              </div>
            </div>

            {/* TRICKS TAB CONTENT */}
            {activeTipTab === "tricks" && (
              <div className="space-y-6 pt-6">
                {(selectedTipSubject === "All Subjects"
                  ? Object.entries(STUDY_TIPS).flatMap(
                      ([subject, data]) =>
                        data.tricks?.map((trick) => ({ ...trick, subject })) ||
                        []
                    )
                  : STUDY_TIPS[selectedTipSubject]?.tricks?.map((trick) => ({
                      ...trick,
                      subject: selectedTipSubject,
                    })) || []
                ).map((trick, index) => (
                  <div
                    key={index}
                    className="group border border-gray-200 :border-gray-800 rounded-xl p-5 hover:border-blue-300 :hover:border-blue-700 transition-all duration-300 hover:shadow-lg bg-white "
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${
                            STUDY_TIPS[trick.subject]?.color || "#4F46E5"
                          } 0%, ${
                            STUDY_TIPS[trick.subject]?.color || "#4F46E5"
                          }80 100%)`,
                          opacity:
                            selectedTipSubject === "All Subjects" ? 1 : 0.9,
                        }}
                      >
                        <i
                          className={
                            STUDY_TIPS[trick.subject]?.icon ||
                            "fas fa-lightbulb text-lg"
                          }
                        ></i>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-bold text-lg text-gray-900 :text-white group-hover:text-blue-600 :group-hover:text-blue-400 transition-colors">
                            {trick.title}
                          </h4>
                          {selectedTipSubject === "All Subjects" && (
                            <span
                              className="px-3 py-1.5 rounded-full text-xs font-medium border"
                              style={{
                                backgroundColor: `${
                                  STUDY_TIPS[trick.subject]?.color || "#4F46E5"
                                }15`,
                                color:
                                  STUDY_TIPS[trick.subject]?.color || "#4F46E5",
                                borderColor: `${
                                  STUDY_TIPS[trick.subject]?.color || "#4F46E5"
                                }30`,
                              }}
                            >
                              {trick.subject}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600  leading-relaxed">
                          {trick.content}
                        </p>
                        {trick.example && (
                          <div className="mt-3 p-3 bg-blue-50 :bg-blue-900/20 rounded-lg border border-blue-100 :border-blue-800/30">
                            <div className="flex items-center gap-2 mb-1">
                              <i className="fas fa-eye text-blue-500"></i>
                              <span className="text-sm font-medium text-blue-700 :text-blue-300">
                                Example:
                              </span>
                            </div>
                            <p className="text-sm text-blue-600 :text-blue-400">
                              {trick.example}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* DETAILED NOTES TAB - For All Subjects */}
            {activeTipTab === "notes" && (
              <div className="space-y-8 pt-6">
                {selectedTipSubject === "All Subjects" ? (
                  // Show all subjects notes in cards
                  <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(STUDY_TIPS).map(
                      ([subject, data]) =>
                        data.detailedNotes && (
                          <div
                            key={subject}
                            className="border border-gray-200 :border-gray-800 rounded-xl p-6 hover:shadow-lg transition-all bg-white "
                          >
                            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100 :border-gray-700">
                              <div
                                className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                                style={{
                                  background: STUDY_TIPS[subject]?.color,
                                }}
                              >
                                <i className={STUDY_TIPS[subject]?.icon}></i>
                              </div>
                              <h3 className="text-xl font-bold text-gray-900 :text-white">
                                {subject} Notes
                              </h3>
                            </div>

                            <div className="space-y-4">
                              {Object.entries(data.detailedNotes)
                                .slice(0, 2)
                                .map(([topic, topicData]) => (
                                  <div
                                    key={topic}
                                    className="bg-gray-50 :bg-gray-900/50 p-4 rounded-lg"
                                  >
                                    <h4 className="font-bold text-gray-800 :text-gray-200 mb-2">
                                      {topic}
                                    </h4>
                                    <div className="grid grid-cols-2 gap-2">
                                      <div className="text-sm text-blue-600 :text-blue-400">
                                        <i className="fas fa-key mr-1"></i>
                                        {topicData.keyConcepts?.length ||
                                          0}{" "}
                                        Concepts
                                      </div>
                                      <div className="text-sm text-green-600 :text-green-400">
                                        <i className="fas fa-star mr-1"></i>
                                        {topicData.importantPoints?.length ||
                                          0}{" "}
                                        Points
                                      </div>
                                    </div>
                                  </div>
                                ))}
                            </div>

                            <button
                              onClick={() => {
                                setSelectedTipSubject(subject);
                                setActiveTipTab("notes");
                              }}
                              className="w-full mt-4 py-2.5 text-sm bg-gradient-to-r from-gray-100 to-gray-50 :from-gray-800 :to-gray-900 text-gray-700  rounded-lg hover:shadow-md transition-all flex items-center justify-center gap-2"
                            >
                              View Full Notes
                              <i className="fas fa-arrow-right"></i>
                            </button>
                          </div>
                        )
                    )}
                  </div>
                ) : (
                  // Show detailed notes for selected subject
                  STUDY_TIPS[selectedTipSubject]?.detailedNotes &&
                  Object.entries(
                    STUDY_TIPS[selectedTipSubject].detailedNotes
                  ).map(([topic, data]) => (
                    <div
                      key={topic}
                      className="border border-gray-200 :border-gray-800 rounded-xl p-6 hover:shadow-lg transition-all bg-white "
                    >
                      <h3 className="text-xl font-bold mb-4 pb-3 border-b border-gray-100 :border-gray-700 text-gray-900 :text-white">
                        <i
                          className="fas fa-bookmark mr-2"
                          style={{
                            color: STUDY_TIPS[selectedTipSubject]?.color,
                          }}
                        ></i>
                        {topic} Notes
                      </h3>

                      <div className="grid lg:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 :from-blue-900/20 :to-cyan-900/20 p-5 rounded-xl border border-blue-100 :border-blue-800/30">
                          <h4 className="font-bold text-blue-800 :text-blue-300 mb-3 flex items-center">
                            <i className="fas fa-key mr-2"></i>Key Concepts
                          </h4>
                          <ul className="space-y-3">
                            {data.keyConcepts?.map((concept, idx) => (
                              <li
                                key={idx}
                                className="text-gray-700  flex items-start"
                              >
                                <span className="w-5 h-5 rounded-full bg-blue-100 :bg-blue-800 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                  <span className="text-xs font-bold text-blue-600 :text-blue-300">
                                    {idx + 1}
                                  </span>
                                </span>
                                {concept}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 :from-green-900/20 :to-emerald-900/20 p-5 rounded-xl border border-green-100 :border-green-800/30">
                          <h4 className="font-bold text-green-800 :text-green-300 mb-3 flex items-center">
                            <i className="fas fa-star mr-2"></i>Important Points
                          </h4>
                          <ul className="space-y-3">
                            {data.importantPoints?.map((point, idx) => (
                              <li
                                key={idx}
                                className="text-gray-700  flex items-start"
                              >
                                <i className="fas fa-check-circle text-green-500 :text-green-400 mt-0.5 mr-3 flex-shrink-0"></i>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 :from-purple-900/20 :to-pink-900/20 p-5 rounded-xl border border-purple-100 :border-purple-800/30">
                          <h4 className="font-bold text-purple-800 :text-purple-300 mb-3 flex items-center">
                            <i className="fas fa-brain mr-2"></i>Memory Aids
                          </h4>
                          <ul className="space-y-3">
                            {data.memoryAids?.map((aid, idx) => (
                              <li
                                key={idx}
                                className="text-gray-700  flex items-start"
                              >
                                <i className="fas fa-lightbulb text-yellow-500 :text-yellow-400 mt-0.5 mr-3 flex-shrink-0"></i>
                                {aid}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* QUICK REFERENCE TAB - For All Subjects */}
            {activeTipTab === "quickref" && (
              <div className="space-y-6 pt-6">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 :from-amber-900/20 :to-orange-900/20 border border-amber-200 :border-amber-800/30 rounded-xl p-5 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-100 :bg-amber-900 flex items-center justify-center">
                      <i className="fas fa-info-circle text-amber-600 :text-amber-400"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-800 :text-amber-300">
                        Quick Answer Reference
                      </h4>
                      <p className="text-sm text-amber-700 :text-amber-400 mt-1">
                        Use this as a cheat sheet for quick revision before the
                        exam
                      </p>
                    </div>
                  </div>
                </div>

                {selectedTipSubject === "All Subjects" ? (
                  // Show all subjects quick references
                  <div className="space-y-8">
                    {Object.entries(STUDY_TIPS).map(
                      ([subject, data]) =>
                        data.quickReference && (
                          <div
                            key={subject}
                            className="border border-gray-200 :border-gray-800 rounded-xl p-5"
                          >
                            <div className="flex items-center gap-3 mb-4">
                              <div
                                className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                                style={{
                                  background: STUDY_TIPS[subject]?.color,
                                }}
                              >
                                <i className={STUDY_TIPS[subject]?.icon}></i>
                              </div>
                              <h3 className="text-lg font-bold text-gray-900 :text-white">
                                {subject} Quick Reference
                              </h3>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                              {Object.entries(data.quickReference)
                                .slice(0, 4)
                                .map(([questionId, answer]) => (
                                  <div
                                    key={questionId}
                                    className="border border-gray-100 :border-gray-800 rounded-lg p-4 hover:border-blue-300 :hover:border-blue-700 transition-colors bg-white /50"
                                  >
                                    <div className="flex justify-between items-start mb-2">
                                      <span className="font-mono font-bold text-gray-700 ">
                                        {questionId}
                                      </span>
                                    </div>
                                    <p className="text-sm text-gray-600 :text-gray-400">
                                      {answer}
                                    </p>
                                  </div>
                                ))}
                            </div>
                            <button
                              onClick={() => {
                                setSelectedTipSubject(subject);
                                setActiveTipTab("quickref");
                              }}
                              className="w-full mt-4 py-2 text-sm bg-gray-100  text-gray-700  rounded-lg hover:bg-gray-200  transition-colors"
                            >
                              View All {subject} References
                            </button>
                          </div>
                        )
                    )}
                  </div>
                ) : (
                  // Show full quick reference for selected subject
                  <div className="grid md:grid-cols-2 gap-6">
                    {STUDY_TIPS[selectedTipSubject]?.quickReference &&
                      Object.entries(
                        STUDY_TIPS[selectedTipSubject].quickReference
                      ).map(([questionId, answer]) => (
                        <div
                          key={questionId}
                          className="border border-gray-200 :border-gray-800 rounded-xl p-5 hover:shadow-lg transition-all bg-white  group"
                        >
                          <div className="flex justify-between items-start mb-3">
                            <span className="font-mono font-bold text-lg text-gray-900 :text-white">
                              {questionId}
                            </span>
                            <span className="px-3 py-1 text-xs bg-gradient-to-r from-gray-100 to-gray-50 :from-gray-800 :to-gray-900 text-gray-600 :text-gray-400 rounded-full border">
                              {selectedTipSubject}
                            </span>
                          </div>
                          <p className="text-gray-700  mb-4">{answer}</p>
                          <div className="pt-3 border-t border-gray-100 :border-gray-700 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div
                                className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs"
                                style={{
                                  background:
                                    STUDY_TIPS[selectedTipSubject]?.color,
                                }}
                              >
                                <i
                                  className={
                                    STUDY_TIPS[selectedTipSubject]?.icon
                                  }
                                ></i>
                              </div>
                              <span className="text-xs text-gray-500 :text-gray-400">
                                Quick Answer
                              </span>
                            </div>
                            <i
                              className="fas fa-copy text-gray-400 :text-gray-600 group-hover:text-blue-500 transition-colors cursor-pointer"
                              onClick={() =>
                                navigator.clipboard.writeText(answer)
                              }
                              title="Copy to clipboard"
                            ></i>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            )}

            {/* EXAM STRATEGY TAB - For All Subjects */}
            {activeTipTab === "strategy" && (
              <div className="space-y-8 pt-6">
                {selectedTipSubject === "All Subjects" ? (
                  // Strategy overview for all subjects
                  <div className="grid lg:grid-cols-3 gap-6">
                    {Object.entries(STUDY_TIPS).map(
                      ([subject, data]) =>
                        data.examStrategy && (
                          <div
                            key={subject}
                            className="border border-gray-200 :border-gray-800 rounded-xl p-6 hover:shadow-lg transition-all bg-white "
                          >
                            <div className="flex items-center gap-3 mb-4">
                              <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg"
                                style={{
                                  background: STUDY_TIPS[subject]?.color,
                                }}
                              >
                                <i className={STUDY_TIPS[subject]?.icon}></i>
                              </div>
                              <div>
                                <h3 className="font-bold text-lg text-gray-900 :text-white">
                                  {subject} Strategy
                                </h3>
                                <p className="text-sm text-gray-500 :text-gray-400">
                                  Exam preparation guide
                                </p>
                              </div>
                            </div>

                            <div className="space-y-3">
                              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 :from-blue-900/20 :to-cyan-900/20 p-3 rounded-lg">
                                <div className="flex items-center gap-2 mb-1">
                                  <i className="fas fa-chart-pie text-blue-500"></i>
                                  <span className="text-sm font-medium text-blue-700 :text-blue-300">
                                    Focus Areas:
                                  </span>
                                </div>
                                <span className="text-xs text-gray-600 :text-gray-400">
                                  {data.examStrategy.topicWeightage?.length ||
                                    0}{" "}
                                  key topics
                                </span>
                              </div>

                              <div className="bg-gradient-to-r from-green-50 to-emerald-50 :from-green-900/20 :to-emerald-900/20 p-3 rounded-lg">
                                <div className="flex items-center gap-2 mb-1">
                                  <i className="fas fa-graduation-cap text-green-500"></i>
                                  <span className="text-sm font-medium text-green-700 :text-green-300">
                                    Tips:
                                  </span>
                                </div>
                                <span className="text-xs text-gray-600 :text-gray-400">
                                  {data.examStrategy.preparationTips?.length ||
                                    0}{" "}
                                  preparation tips
                                </span>
                              </div>

                              <button
                                onClick={() => {
                                  setSelectedTipSubject(subject);
                                  setActiveTipTab("strategy");
                                }}
                                className="w-full mt-4 py-2.5 text-sm bg-gradient-to-r from-gray-100 to-gray-50 :from-gray-800 :to-gray-900 text-gray-700  rounded-lg hover:shadow-md transition-all"
                              >
                                View Full Strategy
                              </button>
                            </div>
                          </div>
                        )
                    )}
                  </div>
                ) : (
                  // Full strategy for selected subject
                  <div className="space-y-8">
                    {/* Topic Weightage */}
                    <div className="border border-gray-200 :border-gray-800 rounded-xl p-6 hover:shadow-lg transition-all bg-white ">
                      <h3 className="text-xl font-bold mb-5 pb-3 border-b border-gray-100 :border-gray-700 text-gray-900 :text-white flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                          <i className="fas fa-chart-pie text-white"></i>
                        </div>
                        Topic Weightage
                      </h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {STUDY_TIPS[
                          selectedTipSubject
                        ]?.examStrategy?.topicWeightage?.map((item, idx) => {
                          const [topic, weightage] = item.split(":");
                          return (
                            <div
                              key={idx}
                              className="group flex items-center justify-between p-4 bg-gray-50 :bg-gray-900/50 rounded-xl hover:bg-white :hover:bg-gray-800 border border-gray-100 :border-gray-800 hover:border-blue-300 :hover:border-blue-700 transition-all"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-blue-100 :bg-blue-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                                  <span className="text-sm font-bold text-blue-600 :text-blue-400">
                                    {idx + 1}
                                  </span>
                                </div>
                                <span className="font-medium text-gray-800 :text-gray-200">
                                  {topic}
                                </span>
                              </div>
                              <span className="font-bold text-lg text-indigo-600 :text-indigo-400">
                                {weightage}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Preparation Tips */}
                    <div className="border border-gray-200 :border-gray-800 rounded-xl p-6 hover:shadow-lg transition-all bg-white ">
                      <h3 className="text-xl font-bold mb-5 pb-3 border-b border-gray-100 :border-gray-700 text-gray-900 :text-white flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                          <i className="fas fa-graduation-cap text-white"></i>
                        </div>
                        Preparation Strategy
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {STUDY_TIPS[
                          selectedTipSubject
                        ]?.examStrategy?.preparationTips?.map((tip, idx) => (
                          <div
                            key={idx}
                            className="group flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 :from-blue-900/20 :to-cyan-900/20 rounded-xl border border-blue-100 :border-blue-800/30 hover:border-blue-300 :hover:border-blue-700 transition-all"
                          >
                            <span className="font-bold text-xl text-blue-600 :text-blue-400 min-w-8">
                              {idx + 1}
                            </span>
                            <span className="text-gray-700 ">{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Time Management */}
                    <div className="border border-gray-200 :border-gray-800 rounded-xl p-6 hover:shadow-lg transition-all bg-white ">
                      <h3 className="text-xl font-bold mb-5 pb-3 border-b border-gray-100 :border-gray-700 text-gray-900 :text-white flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                          <i className="fas fa-clock text-white"></i>
                        </div>
                        Time Management
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {STUDY_TIPS[
                          selectedTipSubject
                        ]?.examStrategy?.timeManagement?.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 :from-purple-900/20 :to-pink-900/20 rounded-xl border border-purple-100 :border-purple-800/30 hover:shadow-md transition-all"
                          >
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg">
                              <i
                                className={`fas fa-hourglass-${
                                  idx % 2 === 0 ? "start" : "end"
                                }`}
                              ></i>
                            </div>
                            <span className="text-gray-700  flex-1">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-gray-200 :border-gray-800">
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowTips(false)}
                  className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3.5 rounded-xl hover:shadow-lg hover:shadow-indigo-200 :hover:shadow-indigo-900/30 transition-all font-medium"
                >
                  Close Tips
                </button>
                <button
                  onClick={() => {
                    // Print or export functionality
                    window.print();
                  }}
                  className="flex-1 bg-gradient-to-r from-gray-100 to-gray-50 :from-gray-800 :to-gray-900 text-gray-700  py-3.5 rounded-xl hover:shadow-md transition-all font-medium border border-gray-200 :border-gray-800 flex items-center justify-center gap-2"
                >
                  <i className="fas fa-print"></i>
                  Print Summary
                </button>
              </div>
              <p className="text-center text-xs text-gray-500 :text-gray-400 mt-4">
                <i className="fas fa-sync-alt mr-1"></i>
                Updated daily with new tips and strategies
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TEST MODAL */}
      {testOpen && currentTest && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            {/* Header with subject, progress, and cancel button */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                  style={{
                    backgroundColor: SUBJECTS[currentTest.subjectId]?.iconColor,
                  }}
                >
                  <i className={SUBJECTS[currentTest.subjectId]?.icon}></i>
                </div>
                <div>
                  <h3 className="font-bold">
                    {SUBJECTS[currentTest.subjectId]?.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>
                      Question {currentTest.index + 1} of{" "}
                      {currentTest.questions.length}
                    </span>
                    <span>•</span>
                    <span>{formatTime(currentTest.timeRemaining)}</span>
                    <span>•</span>
                    <span>{currentTest.questions.length} questions total</span>
                  </div>
                </div>
              </div>

              <button
                onClick={cancelTest}
                className="flex items-center gap-2 px-4 py-2 text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
              >
                <i className="fas fa-times"></i>
                Cancel Test
              </button>
            </div>

            {/* Question */}
            <div className="mb-6">
              <p className="text-lg font-medium mb-6">
                {currentTest.questions[currentTest.index].question}
              </p>

              <div className="grid gap-3">
                {["A", "B", "C", "D"].map((letter, i) => {
                  const questionId =
                    currentTest.questions[currentTest.index].id;
                  const isSelected =
                    currentTest.userAnswers[questionId] === letter;

                  return (
                    <button
                      key={letter}
                      onClick={() => selectOption(questionId, letter)}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        isSelected
                          ? "border-indigo-600 bg-indigo-50"
                          : "border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50"
                      }`}
                    >
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border mr-3 font-medium">
                        {letter}
                      </span>
                      {currentTest.questions[currentTest.index].options[i]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t">
              <button
                onClick={() =>
                  setCurrentTest((t) => ({
                    ...t,
                    index: Math.max(0, t.index - 1),
                  }))
                }
                disabled={currentTest.index === 0}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg ${
                  currentTest.index === 0
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <i className="fas fa-arrow-left"></i>
                Previous
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => cancelTest()}
                  className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  onClick={() => submitTest()}
                  className="px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Submit Test
                </button>

                {currentTest.index < currentTest.questions.length - 1 && (
                  <button
                    onClick={() =>
                      setCurrentTest((t) => ({ ...t, index: t.index + 1 }))
                    }
                    className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  >
                    Next
                    <i className="fas fa-arrow-right"></i>
                  </button>
                )}
              </div>
            </div>

            {/* Question navigation dots */}
            <div className="mt-6 pt-6 border-t">
              <p className="text-sm text-gray-500 mb-3">Jump to question:</p>
              <div className="flex flex-wrap gap-2">
                {currentTest.questions.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() =>
                      setCurrentTest((t) => ({ ...t, index: idx }))
                    }
                    className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-all relative ${
                      idx === currentTest.index
                        ? "bg-indigo-600 text-white scale-105"
                        : currentTest.userAnswers[currentTest.questions[idx].id]
                        ? "bg-green-100 text-green-800 border border-green-200"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {idx + 1}
                    {currentTest.userAnswers[currentTest.questions[idx].id] && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Progress stats */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-indigo-600">
                    {Object.keys(currentTest.userAnswers).length}
                  </div>
                  <div className="text-sm text-gray-500">Answered</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-600">
                    {currentTest.questions.length -
                      Object.keys(currentTest.userAnswers).length}
                  </div>
                  <div className="text-sm text-gray-500">Remaining</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-green-600">
                    {currentTest.questions.length}
                  </div>
                  <div className="text-sm text-gray-500">Total Questions</div>
                </div>
                <div>
                  <div
                    className="text-lg font-bold"
                    style={{
                      color: SUBJECTS[currentTest.subjectId]?.iconColor,
                    }}
                  >
                    {formatTime(currentTest.timeRemaining)}
                  </div>
                  <div className="text-sm text-gray-500">Time Left</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* OVERALL ANALYTICS MODAL */}
      {showOverallAnalytics && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60] p-4"
          onClick={(e) =>
            e.target === e.currentTarget && setShowOverallAnalytics(false)
          }
        >
          <div className="bg-white p-6 rounded-xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  <i className="fas fa-chart-bar text-purple-600 mr-2"></i>
                  Comprehensive Analytics Dashboard
                </h2>
                <p className="text-gray-500 mt-1">
                  Overall performance across all subjects
                </p>
              </div>
              <button
                onClick={() => setShowOverallAnalytics(false)}
                className="text-gray-400 hover:text-gray-600 text-xl"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            {/* Overall Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                <div className="text-3xl font-bold text-blue-700">
                  {userData.overallStats?.totalTests || 0}
                </div>
                <div className="text-sm text-blue-600 mt-2">Total Tests</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                <div className="text-3xl font-bold text-green-700">
                  {userData.overallStats?.averageScore || 0}%
                </div>
                <div className="text-sm text-green-600 mt-2">Average Score</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                <div className="text-3xl font-bold text-purple-700">
                  {userData.overallStats?.bestScore || 0}%
                </div>
                <div className="text-sm text-purple-600 mt-2">Best Score</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
                <div className="text-3xl font-bold text-orange-700">
                  {userData.overallStats?.accuracy || 0}%
                </div>
                <div className="text-sm text-orange-600 mt-2">Accuracy</div>
              </div>
            </div>

            {/* Subject Performance Comparison */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">
                Subject Performance Comparison
              </h3>
              <div className="bg-gray-50 rounded-xl p-4">
                {userData.overallStats?.subjectRanking?.map(
                  (subject, index) => {
                    const percentage = subject.score;
                    return (
                      <div key={index} className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-8 h-8 rounded-full flex items-center justify-center text-white"
                              style={{ backgroundColor: subject.color }}
                            >
                              {index + 1}
                            </div>
                            <span className="font-medium">
                              {subject.subject}
                            </span>
                            <span className="text-sm text-gray-500">
                              ({subject.testsTaken} tests)
                            </span>
                          </div>
                          <span
                            className="font-bold"
                            style={{ color: subject.color }}
                          >
                            {subject.score}%
                          </span>
                        </div>
                        <div className="bg-gray-200 h-3 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                              width: `${percentage}%`,
                              backgroundColor: subject.color,
                            }}
                          />
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>

            {/* Weak & Strong Areas */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                  <i className="fas fa-exclamation-triangle mr-2"></i>
                  Areas Needing Improvement
                </h3>
                {userData.overallStats?.weakAreas?.length > 0 ? (
                  <div className="space-y-3">
                    {userData.overallStats.weakAreas.map((area, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-3 bg-white rounded-lg border border-red-200"
                      >
                        <span className="font-medium">{area.subject}</span>
                        <span className="font-bold text-red-600">
                          {area.score}%
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-4 text-red-500">
                    <i className="fas fa-check-circle text-2xl mb-2"></i>
                    <p>No weak areas detected!</p>
                  </div>
                )}
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                  <i className="fas fa-trophy mr-2"></i>
                  Strong Areas
                </h3>
                {userData.overallStats?.strongAreas?.length > 0 ? (
                  <div className="space-y-3">
                    {userData.overallStats.strongAreas.map((area, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-3 bg-white rounded-lg border border-green-200"
                      >
                        <span className="font-medium">{area.subject}</span>
                        <span className="font-bold text-green-600">
                          {area.score}%
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-4 text-green-500">
                    <i className="fas fa-chart-line text-2xl mb-2"></i>
                    <p>Practice more to identify strong areas</p>
                  </div>
                )}
              </div>
            </div>

            {/* Recent Test History */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">
                Recent Test History
              </h3>
              <div className="bg-white rounded-xl border">
                {Object.entries(userData.subjects || {}).filter(
                  ([_, data]) => data.testHistory?.length > 0
                ).length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="p-4 text-left">Subject</th>
                          <th className="p-4 text-left">Date</th>
                          <th className="p-4 text-left">Score</th>
                          <th className="p-4 text-left">Correct</th>
                          <th className="p-4 text-left">Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(userData.subjects || {})
                          .flatMap(
                            ([subjectId, data]) =>
                              data.testHistory?.map((test) => ({
                                ...test,
                                subjectId,
                              })) || []
                          )
                          .sort((a, b) => new Date(b.date) - new Date(a.date))
                          .slice(0, 10)
                          .map((test, index) => (
                            <tr
                              key={index}
                              className="border-t hover:bg-gray-50"
                            >
                              <td className="p-4">
                                <div className="flex items-center gap-2">
                                  <div
                                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs"
                                    style={{
                                      backgroundColor:
                                        SUBJECTS[test.subjectId]?.iconColor,
                                    }}
                                  >
                                    <i
                                      className={SUBJECTS[test.subjectId]?.icon}
                                    ></i>
                                  </div>
                                  {SUBJECTS[test.subjectId]?.name ||
                                    test.subjectId}
                                </div>
                              </td>
                              <td className="p-4 text-sm text-gray-600">
                                {formatDate(test.date)}
                              </td>
                              <td className="p-4">
                                <span
                                  className={`font-bold ${
                                    test.score >= 70
                                      ? "text-green-600"
                                      : test.score >= 50
                                      ? "text-yellow-600"
                                      : "text-red-600"
                                  }`}
                                >
                                  {test.score}%
                                </span>
                              </td>
                              <td className="p-4">
                                {test.correct}/{test.total}
                              </td>
                              <td className="p-4 text-sm text-gray-600">
                                {formatTime(test.timeTaken)}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <i className="fas fa-history text-3xl mb-3 opacity-50"></i>
                    <p>No test history available</p>
                    <p className="text-sm mt-2">
                      Take some tests to see your history here
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
              <h3 className="text-lg font-semibold text-indigo-800 mb-4 flex items-center">
                <i className="fas fa-lightbulb mr-2"></i>
                Personalized Recommendations
              </h3>
              <div className="space-y-3">
                {userData.overallStats?.weakAreas
                  ?.slice(0, 3)
                  .map((area, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-white rounded-lg border border-indigo-100"
                    >
                      <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium">
                          Focus on{" "}
                          <span style={{ color: area.color }}>
                            {area.subject}
                          </span>
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          Your current score is {area.score}%. Aim for at least
                          70% by practicing more questions from this subject.
                        </p>
                      </div>
                    </div>
                  ))}

                {userData.overallStats?.weakAreas?.length === 0 && (
                  <div className="text-center py-4 text-indigo-600">
                    <i className="fas fa-check-circle text-2xl mb-2"></i>
                    <p>Great job! All subjects are performing well.</p>
                    <p className="text-sm mt-2">
                      Consider taking more tests to improve your speed and
                      accuracy.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t">
              <button
                onClick={() => setShowOverallAnalytics(false)}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
              >
                Close Analytics
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SUBJECT ANALYTICS MODAL - Updated with more details */}
      {analyticsOpen && userData?.subjects?.[analyticsOpen] && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={(e) => e.target === e.currentTarget && closeAnalytics()}
        >
          <div className="bg-white p-6 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                  style={{
                    backgroundColor: SUBJECTS[analyticsOpen]?.iconColor,
                  }}
                >
                  <i className={SUBJECTS[analyticsOpen]?.icon}></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {SUBJECTS[analyticsOpen]?.name} Analytics
                  </h2>
                  <p className="text-gray-500 mt-1">
                    Detailed performance analysis
                  </p>
                </div>
              </div>
              <button
                onClick={closeAnalytics}
                className="text-gray-400 hover:text-gray-600 text-xl"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            {/* Subject Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div className="text-2xl font-bold text-blue-700">
                  {userData.subjects[analyticsOpen].averageScore || 0}%
                </div>
                <div className="text-sm text-gray-600 mt-1">Average Score</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <div className="text-2xl font-bold text-green-700">
                  {userData.subjects[analyticsOpen].bestScore || 0}%
                </div>
                <div className="text-sm text-gray-600 mt-1">Best Score</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                <div className="text-2xl font-bold text-purple-700">
                  {userData.subjects[analyticsOpen].testsTaken || 0}
                </div>
                <div className="text-sm text-gray-600 mt-1">Tests Taken</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                <div className="text-2xl font-bold text-orange-700">
                  {userData.subjects[analyticsOpen].totalCorrect || 0}/
                  {userData.subjects[analyticsOpen].totalQuestions || 0}
                </div>
                <div className="text-sm text-gray-600 mt-1">Correct/Total</div>
              </div>
            </div>

            {/* Topic Performance */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">
                Topic-wise Performance
              </h3>

              {Object.keys(
                userData.subjects[analyticsOpen].topicPerformance || {}
              ).length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <i className="fas fa-chart-bar text-4xl mb-3 opacity-50"></i>
                  <p>No test data available yet.</p>
                  <p className="text-sm mt-2">
                    Take a test to see your performance analytics
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {Object.entries(
                    userData.subjects[analyticsOpen].topicPerformance || {}
                  ).map(([topic, data]) => {
                    const percentage =
                      Math.round((data.correct / data.total) * 100) || 0;

                    return (
                      <div key={topic} className="border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{topic}</span>
                          <span className="font-bold">
                            {data.correct} / {data.total} correct ({percentage}
                            %)
                          </span>
                        </div>
                        <div className="bg-gray-100 h-3 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                              width: `${percentage}%`,
                              backgroundColor:
                                percentage >= 70
                                  ? "#10b981"
                                  : percentage >= 50
                                  ? "#3b82f6"
                                  : "#ef4444",
                            }}
                          />
                        </div>
                        <div className="flex justify-between text-sm text-gray-500 mt-1">
                          <span>0%</span>
                          <span>100%</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Test History */}
            {userData.subjects[analyticsOpen].testHistory?.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Recent Tests</h3>
                <div className="space-y-3">
                  {userData.subjects[analyticsOpen].testHistory
                    .slice(0, 5)
                    .map((test, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border"
                      >
                        <div>
                          <div className="font-medium">
                            {formatDate(test.date)}
                          </div>
                          <div className="text-sm text-gray-500">
                            {test.correct}/{test.total} correct •{" "}
                            {formatTime(test.timeTaken)}
                          </div>
                        </div>
                        <div
                          className={`font-bold text-lg ${
                            test.score >= 70
                              ? "text-green-600"
                              : test.score >= 50
                              ? "text-yellow-600"
                              : "text-red-600"
                          }`}
                        >
                          {test.score}%
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            <div className="mt-8 pt-6 border-t">
              <div className="flex gap-3">
                <button
                  onClick={() => startTest(analyticsOpen)}
                  className="flex-1 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
                >
                  Take Another Test
                </button>
                <button
                  onClick={() => {
                    setSelectedTipSubject(SUBJECTS[analyticsOpen]?.name);
                    setShowTips(true);
                    closeAnalytics();
                  }}
                  className="flex-1 border border-green-600 text-green-600 py-3 rounded-lg hover:bg-green-50"
                >
                  <i className="fas fa-lightbulb mr-2"></i>
                  Study Tips
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CANCEL CONFIRMATION MODAL - Keep as is */}
      {showCancelConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60] p-4">
          <div className="bg-white p-8 rounded-xl w-full max-w-md text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
              <i className="fas fa-exclamation-triangle text-red-600 text-3xl"></i>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Cancel Test?
            </h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to cancel this test? All your progress will
              be lost and won't be saved.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={continueTest}
                className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50"
              >
                <i className="fas fa-arrow-left mr-2"></i>
                Continue Test
              </button>
              <button
                onClick={confirmCancelTest}
                className="flex-1 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
              >
                <i className="fas fa-times mr-2"></i>
                Yes, Cancel Test
              </button>
            </div>
          </div>
        </div>
      )}

      {/* RESULT MODAL - Keep as is */}
      {resultsOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-xl w-full max-w-md text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <i className="fas fa-check text-green-600 text-3xl"></i>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              Test Completed!
            </h2>
            <p className="text-gray-500 mt-2">
              Your score has been saved successfully
            </p>

            <div className="mt-8">
              <button
                onClick={() => {
                  setResultsOpen(false);
                  setAnalyticsOpen(currentTest?.subjectId);
                }}
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 mb-3"
              >
                View Detailed Analytics
              </button>
              <button
                onClick={() => setResultsOpen(false)}
                className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50"
              >
                Return to Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}