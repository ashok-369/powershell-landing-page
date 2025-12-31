
export const SYLLABUS = [
  { id: 1, title: 'Introduction to PowerShell', description: 'Core concepts of automation and shell environments.' },
  { id: 2, title: 'Pipeline Scripts and Syntax', description: 'Mastering the flow of data through PowerShell cmdlets.' },
  { id: 3, title: 'Variables and Data Types', description: 'Scopes, collections, and managing state in complex scripts.' },
  { id: 4, title: 'Security & Compliance', description: 'Execution policies, signing scripts, and secure credentials.' },
  { id: 5, title: 'Remote Management', description: 'WinRM, SSH, and managing multiple cloud nodes efficiently.' },
  { id: 6, title: 'Script Flow Control', description: 'If/Else, Switch, ForEach, and advanced loops.' },
  { id: 7, title: 'Functions, Filters and Modules', description: 'Building reusable tools and modular architectures.' },
  { id: 8, title: 'Error Handling', description: 'Try/Catch, advanced logging, and robust script debugging.' },
  { id: 9, title: 'Administrative Cloud Uses', description: 'AWS SDK for PowerShell, managing VPCs, S3, and EC2.' },
];

export const FEATURES = [
  { title: 'Instructor Led Live Training', icon: 'monitor' },
  { title: 'Hands-on Practical Training', icon: 'code' },
  { title: 'WhatsApp Trainer Support', icon: 'message-circle' },
  { title: 'Recorded Lectures on LMS', icon: 'video' },
  { title: 'Learning Portal Access', icon: 'user' },
  { title: 'Professional Certification', icon: 'award' },
  { title: 'Job Openings Forum', icon: 'briefcase' },
  { title: 'Student Support Desk', icon: 'help-circle' },
];

export const TRAINING_MODES = [
  {
    type: 'Self Paced Training',
    duration: '2 Months',
    features: [
      'e-learning Live Recorded Lectures',
      'Get free Updates',
      'LMS Access',
      'Upgrade to Online anytime'
    ]
  },
  {
    type: 'Online Instructor Led',
    duration: '2 Months',
    features: [
      'Everything in self-paced',
      'Free DEMO lecture included',
      'Live practicals with Trainer',
      'WhatsApp Support Group'
    ],
    highlighted: true
  },
  {
    type: 'Corporate Training',
    duration: 'Custom',
    features: [
      'Customized Syllabus',
      'Flexible Scheduling',
      'On-site or Remote options',
      'Team Progress Reporting'
    ]
  }
];

export const FAQS = [
  {
    question: 'What are the different training modes available?',
    answer: 'We offer Instructor-Led Live Training (Interactive sessions) and Self-Paced Learning (Recorded lectures through our LMS).'
  },
  {
    question: 'Can I switch from self-paced to instructor-led training?',
    answer: 'Yes, you can upgrade at any time by simply paying the fee difference.'
  },
  {
    question: 'What support is available after the course ends?',
    answer: 'We provide lifetime access to our forum for job openings and continued WhatsApp support from trainers.'
  },
  {
    question: 'Will I receive a course completion certificate?',
    answer: 'Yes, Neel Technologies provides a valid certification upon successful completion of the course.'
  }
];
