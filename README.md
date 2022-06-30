Requirements
Given an array of clicks, return the subset of clicks where:

1) For each IP within each one hour period, only the most expensive click is placed into the result set.
2) If more than one click from the same IP ties for the most expensive click in a one hour period, only place the earliest click into the result set.
3) If there are more than 10 clicks for an IP in the overall array of clicks, do not include any of those clicks in the result set.

The result set should be stored in an array of objects. Each object should represent a click. The
expected result set should be a subset of the original array.

How to run this Code:
1) Clone the repository
2) Run command npm install
3) Run command npm run solution to get the output
4) Output can be viewed in resultSet.json file (every time npm run solution command is executed resultSet.json will be generated)
