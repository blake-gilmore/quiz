
const questionDatabase = [
    //Section 1 - Threats, Attacks, and Vulnerabilities
    {
        question: "Ahmed is a sales manager with a major insurance company. He has received an email that is encouraging him to click on a link and fill out a survey. He is suspicious of the email, but it does mention a major insurance association, and that makes him think it might be legitimate. Which of the following best describes this attack?",
        incorrectAnswers: [
            "Phishing",
            "Social engineering",
            "Trojan horse",
        ],
        correctAnswer: "Spear phishing",
    },
    {
        question: "You are a security administrator for a medium-sized bank. You have discovered a piece of software on your bank’s database server that is not supposed to be there. It appears that the software will begin deleting database files if a specific employee is terminated. What best describes this?",
        incorrectAnswers: [
            "Worm",
            "Trojan horse",
            "Rootkit",
        ],
        correctAnswer: "Logic Bomb",
    },
    {
        question: "You are responsible for incident response at Acme Bank. The Acme Bank website has been attacked. The attacker used the login screen, but rather than enter login credentials, they entered some odd text: ' or '1' = '1. What is the best description for this attack?",
        incorrectAnswers: [
            "Cross-site scripting",
            "Cross-site request forgery",
            "Cross-site request forgery",
        ],
        correctAnswer: "SQL Injection",
    },
    //Section 2 - Architecture and Design
    {
        question: "You are responsible for network security at an e-commerce company. You want to ensure that you are using best practices for the e-commerce website your company hosts. What standard would be the best for you to review?",
        incorrectAnswers: [
            "NERC",
            "Trusted Foundry",
            "ISA/IEC",
        ],
        correctAnswer: "OWASP",
    },
    {
        question: "Cheryl is responsible for cybersecurity at a mid-sized insurance company. She has decided to use a different vendor for network antimalware than she uses for host antimalware. Is this a recommended action, and why or why not?",
        incorrectAnswers: [
            "This is not recommended; you should use a single vendor for a particular security control.",
            "This is not recommended; this is described as vendor forking.",
            "It is neutral. This does not improve or detract from security.",
        ],
        correctAnswer: "This is recommended; this is described as vendor diversity",
    },
    {
        question: "Scott wants to back up the contents of a network-attached storage (NAS) device used in a critical department in his company. He is concerned about how long it would take to restore the device if a significant failure happened, and he is less concerned about the ability to recover in the event of a natural disaster. Given these requirements, what type of backup should he use for the NAS?",
        incorrectAnswers: [
            "A tape-based backup with daily full backups",
            "A tape-based backup with nightly incremental backups",
            "A cloud-based backup service that uses high durability near-line storage",
        ],
        correctAnswer: "A second NAS device with a full copy of the primary NAS",
    },
    //Section 3 - Implementation
    {
        question: "Adam is setting up a public key infrastructure (PKI) and knows that keeping the passphrases and encryption keys used to generate new keys is a critical part of how to ensure that the root certificate authority remains secure. Which of the following techniques is not a common solution to help prevent insider threats?",
        incorrectAnswers: [
            "Use a split knowledge process for the password or key.",
            "Require dual control.",
            "Implement separation of duties.",
        ],
        correctAnswer: "Require a new passphrase every time the certificate is used.",
    },
    {
        question: "Naomi is designing her organization's wireless network and wants to ensure that the design places access points in areas where they will provide optimum coverage. She also wants to plan for any sources of RF interference as part of her design. What should Naomi do first?",
        incorrectAnswers: [
            "Contact the FCC for a wireless map.",
            "Disable all existing access points.",
            "Conduct a port scan to find all existing access points.",
        ],
        correctAnswer: "Conduct a site survey",
    },
    {
        question: "Chris is preparing to implement an 802.1X-enabled wireless infrastructure. He knows that he wants to use an Extensible Authentication Protocol (EAP)-based protocol that does not require client-side certificates. Which of the following options should he choose?",
        incorrectAnswers: [
            "EAP-MD5",
            "LEAP",
            "EAP-TLS",
        ],
        correctAnswer: "PEAP",
    },
    //Section 4 - Operations and Incident Response
    {
        question: "Mila wants to generate a unique digital fingerprint for a file, and needs to choose between a checksum and a hash. Which option should she choose and why should she choose it?",
        incorrectAnswers: [
            "A checksum, because it verifies the contents of the file",
            "A hash, because it can be reversed to validate the file",
            "A checksum, because it is less prone to collisions than a hash",
        ],
        correctAnswer: "A hash, because it is unique to the file",
    },
    {
        question: "Which of the following would prevent a user from installing a program on a company-owned mobile device?",
        incorrectAnswers: [
            "A deny list",
            "ACL",
            "HIDS",
        ],
        correctAnswer: "An allow list",
    },
    {
        question: "Liam is responsible for monitoring security events in his company. He wants to see how diverse events may connect using his security information and event management (SIEM). He is interested in identifying different indicators of compromise that may point to the same breach. Which of the following would be most helpful for him to implement?",
        incorrectAnswers: [
            "NIDS",
            "PKI",
            "A trend dashboard",
        ],
        correctAnswer: "A correlation dashboard",
    },
    //Section 5 - Governance, Risk, and Compliance
    {
        question: "Caroline has been asked to find an international standard to guide her company’s choices in implementing information security management systems. Which of the following would be the best choice for her?",
        incorrectAnswers: [
            "ISO 27017",
            "NIST 800-12",
            "NIST 800-14",
        ],
        correctAnswer: "ISO 27002",
    },
    {
        question: "Adam is concerned about malware infecting machines on his network. One of his concerns is that malware would be able to access sensitive system functionality that requires administrative access. What technique would best address this issue?",
        incorrectAnswers: [
            "Implementing host-based antimalware",
            "Implementing full-disk encryption (FDE)",
            "Making certain the operating systems are patched",
        ],
        correctAnswer: "Using a nonadministrative account for normal activities",
    },
    {
        question: "You are responsible for setting up new accounts for your company network. What is the most important thing to keep in mind when setting up new accounts?",
        incorrectAnswers: [
            "Password length",
            "Password complexity",
            "Account age",
        ],
        correctAnswer: "Least privileges",
    },
];

//export {sectionOne, sectionTwo, sectionThree, sectionFour, sectionFive}
export default questionDatabase;