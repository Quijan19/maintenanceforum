const questionsData = [
  {
    "title": "Pump Station is overheating.",
    "answer": "Calibrate the sensors using manufacturer instructions.",
    "timestamp": "November 30, 2024 at 07:09 PM",
    "views": 464,
    "upvotes": 28,
    "downvotes": 3
  },
  {
    "title": "Forklift runs slower than expected.",
    "answer": "Inspect the filter and clean or replace it.",
    "timestamp": "March 19, 2025 at 10:14 AM",
    "views": 666,
    "upvotes": 49,
    "downvotes": 18
  },
  {
    "title": "Hydraulic Press shows an error code.",
    "answer": "Lubricate the moving parts with synthetic grease.",
    "timestamp": "April 17, 2025 at 11:00 PM",
    "views": 643,
    "upvotes": 36,
    "downvotes": 16
  },
  {
    "title": "Cooling Tower has a broken valve.",
    "answer": "Lubricate the moving parts with synthetic grease.",
    "timestamp": "January 22, 2025 at 04:24 AM",
    "views": 276,
    "upvotes": 28,
    "downvotes": 20
  },
  {
    "title": "Boiler System shows an error code.",
    "answer": "Tighten all connections and inspect for air leaks.",
    "timestamp": "November 30, 2024 at 09:46 AM",
    "views": 217,
    "upvotes": 6,
    "downvotes": 6
  },
  {
    "title": "Boiler System has a broken valve.",
    "answer": "Lubricate the moving parts with synthetic grease.",
    "timestamp": "May 23, 2025 at 05:16 AM",
    "views": 363,
    "upvotes": 25,
    "downvotes": 1
  },
  {
    "title": "Generator has inconsistent pressure.",
    "answer": "Check the oil level and refill if low.",
    "timestamp": "January 09, 2025 at 06:58 AM",
    "views": 348,
    "upvotes": 41,
    "downvotes": 5
  },
  {
    "title": "Forklift is leaking fluid.",
    "answer": "Replace the worn-out belt or chain.",
    "timestamp": "March 08, 2025 at 02:19 AM",
    "views": 958,
    "upvotes": 34,
    "downvotes": 1
  },
  {
    "title": "HVAC Unit won't start properly.",
    "answer": "Test the motor and consider replacing it if underperforming.",
    "timestamp": "April 10, 2025 at 11:14 AM",
    "views": 49,
    "upvotes": 36,
    "downvotes": 11
  },
  {
    "title": "Boiler System won't start properly.",
    "answer": "Replace the worn-out belt or chain.",
    "timestamp": "March 23, 2025 at 09:55 AM",
    "views": 876,
    "upvotes": 44,
    "downvotes": 4
  },
  {
    "title": "Forklift has inconsistent pressure.",
    "answer": "Tighten all connections and inspect for air leaks.",
    "timestamp": "January 01, 2025 at 07:59 PM",
    "views": 774,
    "upvotes": 0,
    "downvotes": 1
  },
  {
    "title": "CNC Machine fails to shut down.",
    "answer": "Replace the worn-out belt or chain.",
    "timestamp": "February 01, 2025 at 10:49 PM",
    "views": 50,
    "upvotes": 40,
    "downvotes": 8
  },
  {
    "title": "Boiler System is overheating.",
    "answer": "Test the motor and consider replacing it if underperforming.",
    "timestamp": "March 17, 2025 at 10:09 AM",
    "views": 72,
    "upvotes": 9,
    "downvotes": 18
  },
  {
    "title": "HVAC Unit runs slower than expected.",
    "answer": "Reset the control system and observe behavior.",
    "timestamp": "December 25, 2024 at 08:23 AM",
    "views": 360,
    "upvotes": 3,
    "downvotes": 3
  },
  {
    "title": "Boiler System is leaking fluid.",
    "answer": "Lubricate the moving parts with synthetic grease.",
    "timestamp": "December 10, 2024 at 01:14 AM",
    "views": 284,
    "upvotes": 48,
    "downvotes": 16
  },
  {
    "title": "Air Compressor is overheating.",
    "answer": "Inspect the filter and clean or replace it.",
    "timestamp": "May 09, 2025 at 05:40 AM",
    "views": 618,
    "upvotes": 10,
    "downvotes": 13
  },
  {
    "title": "Cooling Tower is making unusual noises.",
    "answer": "Check the oil level and refill if low.",
    "timestamp": "December 05, 2024 at 06:51 PM",
    "views": 880,
    "upvotes": 16,
    "downvotes": 17
  },
  {
    "title": "Boiler System is overheating.",
    "answer": "Flush the coolant system and refill with fresh coolant.",
    "timestamp": "April 21, 2025 at 01:37 PM",
    "views": 758,
    "upvotes": 11,
    "downvotes": 9
  },
  {
    "title": "Cooling Tower is overheating.",
    "answer": "Inspect the filter and clean or replace it.",
    "timestamp": "May 18, 2025 at 03:36 PM",
    "views": 782,
    "upvotes": 24,
    "downvotes": 11
  },
  {
    "title": "Forklift runs slower than expected.",
    "answer": "Inspect the filter and clean or replace it.",
    "timestamp": "April 21, 2025 at 05:58 PM",
    "views": 85,
    "upvotes": 49,
    "downvotes": 15
  },
  {
    "title": "Cooling Tower shows an error code.",
    "answer": "Check the oil level and refill if low.",
    "timestamp": "January 13, 2025 at 06:11 AM",
    "views": 660,
    "upvotes": 28,
    "downvotes": 15
  },
  {
    "title": "Pump Station is leaking fluid.",
    "answer": "Flush the coolant system and refill with fresh coolant.",
    "timestamp": "January 25, 2025 at 03:11 AM",
    "views": 848,
    "upvotes": 4,
    "downvotes": 10
  },
  {
    "title": "Forklift produces low output.",
    "answer": "Reset the control system and observe behavior.",
    "timestamp": "January 06, 2025 at 05:25 PM",
    "views": 740,
    "upvotes": 10,
    "downvotes": 14
  },
  {
    "title": "Cooling Tower runs slower than expected.",
    "answer": "Lubricate the moving parts with synthetic grease.",
    "timestamp": "December 26, 2024 at 10:23 AM",
    "views": 309,
    "upvotes": 50,
    "downvotes": 5
  },
  {
    "title": "CNC Machine has a broken valve.",
    "answer": "Test the motor and consider replacing it if underperforming.",
    "timestamp": "March 17, 2025 at 06:10 PM",
    "views": 821,
    "upvotes": 16,
    "downvotes": 10
  },
  {
    "title": "Hydraulic Press runs slower than expected.",
    "answer": "Test the motor and consider replacing it if underperforming.",
    "timestamp": "May 24, 2025 at 05:53 PM",
    "views": 405,
    "upvotes": 12,
    "downvotes": 2
  },
  {
    "title": "CNC Machine fails to shut down.",
    "answer": "Reset the control system and observe behavior.",
    "timestamp": "March 21, 2025 at 01:43 AM",
    "views": 244,
    "upvotes": 50,
    "downvotes": 15
  },
  {
    "title": "Forklift is overheating.",
    "answer": "Reset the control system and observe behavior.",
    "timestamp": "April 06, 2025 at 11:31 AM",
    "views": 754,
    "upvotes": 46,
    "downvotes": 20
  },
  {
    "title": "Cooling Tower produces low output.",
    "answer": "Ensure the power supply is stable and within tolerance.",
    "timestamp": "May 22, 2025 at 10:46 PM",
    "views": 854,
    "upvotes": 13,
    "downvotes": 11
  },
  {
    "title": "HVAC Unit fails to shut down.",
    "answer": "Tighten all connections and inspect for air leaks.",
    "timestamp": "March 25, 2025 at 09:27 PM",
    "views": 248,
    "upvotes": 41,
    "downvotes": 1
  }
]