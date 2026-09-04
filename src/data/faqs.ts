export const faqs = [
  {
    question: 'What is Posturely?',
    answer: 'Posturely is an iOS posture reminder app for desk-based activities. It uses your iPhone or iPad camera during an active session to detect visible upper-body posture changes and provide sound or vibration reminders.',
  },
  {
    question: 'How does Posturely detect posture?',
    answer: 'Posturely analyzes camera frames locally on your device during a monitoring session. It looks for visible upper-body position changes such as head-down posture, forward leaning, and body tilt.',
  },
  {
    question: 'Does Posturely upload my camera footage?',
    answer: 'No. Camera frames used for posture detection are processed on the device, and camera footage is not uploaded to Posturely servers.',
  },
  {
    question: 'Where should I place my iPhone?',
    answer: 'Place your iPhone on a stable desk stand at a side-front angle. Make sure your head, shoulders, and upper torso remain visible to the camera.',
  },
  {
    question: 'Does Posturely work without a phone stand?',
    answer: 'A stable phone stand is strongly recommended. An unstable or changing camera angle can make posture detection less consistent.',
  },
  {
    question: 'Can Posturely detect bad posture?',
    answer: 'Posturely can identify certain visible posture changes and remind you to check your position. It does not decide whether your posture is medically good or bad, and it is not a clinical measurement tool.',
  },
  {
    question: 'Is Posturely a medical app?',
    answer: 'No. Posturely supports posture awareness and reminders. It does not provide medical diagnosis, treatment advice, or medical measurements.',
  },
  {
    question: 'Does Posturely work on Android?',
    answer: 'No. Posturely is currently available for iPhone and iPad only.',
  },
  {
    question: 'Can I use Posturely while studying?',
    answer: 'Yes. Studying, homework, reading, and other seated desk activities are core use cases for Posturely.',
  },
  {
    question: 'Can I use Posturely while working?',
    answer: 'Yes. You can use Posturely during focused desk work or long computer sessions when your device has a stable view of your upper body.',
  },
  {
    question: 'Does Posturely require an internet connection?',
    answer: 'Posture detection itself is performed on the device. Downloading or updating the app and using App Store purchase features require an internet connection.',
  },
  {
    question: 'What posture changes can Posturely detect?',
    answer: 'Posturely is designed to notice head-down posture, forward leaning, body tilt, and other noticeable posture changes during a monitoring session.',
  },
] as const;
