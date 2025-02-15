# Product Requirements Document: AI Coding Tool Selector

## Overview
A web-based decision tree application that helps developers choose the most suitable AI coding tool based on their needs and preferences.

## User Problem
Developers face choice paralysis when selecting AI coding tools due to the rapidly growing market. They need a simple way to find the right tool based on their specific requirements.

## Solution
An interactive questionnaire that:
- Presents users with multiple-choice questions
- Weights answers against tool capabilities
- Recommends the most suitable AI coding tool(s)

## User Flow
1. User lands on homepage with app introduction
2. Starts questionnaire
3. Answers 8 pre-defined questions
4. Can navigate back/forward through questions
5. Views final recommendation(s)

## Core Features

### 1. Question Flow
- Display one question at a time
- Show progress indicator (e.g., "Question 3 of 8")
- Allow navigation between questions
- Persist answers in local storage
- Validate answers before proceeding

### 2. Answer Processing
- Track cumulative scoring for each tool
- Weight answers according to predefined values
- Calculate final scores when all questions answered

### 3. Results Display
- Show top recommended tool
- Show up to 3 tools in case of ties
- Display relevant tool information:
  - Tool name
  - Primary use case
  - Learning curve
  - Key features based on user's answers

## Technical Requirements

### Frontend
- Next.js with App Router
- Tailwind CSS for styling
- Shadcn/UI for components
- Client-side state management
- Local storage for persistence

### Data Structure
- Questions and weights defined in questions.json
- Tool information stored in tools.json
- No backend required

### Performance
- Instant response times
- Smooth transitions between questions
- Mobile-responsive design

## Success Metrics
- User completes questionnaire
- User receives relevant recommendation
- Time to complete < 3 minutes

## Future Enhancements (v2)
- Tool comparison view
- Detailed tool profiles
- User feedback collection
- Results sharing
- Tool ratings/reviews 