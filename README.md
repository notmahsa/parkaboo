# PARK-A-BOO
## Crowd-sourcing a smarter way to park

## Inspiration
Crowd-sourcing is being used all around the world and this mass of collected data can be used to solve simple problems we deal with on a daily basis. 30% of all vehicles in major cities are looking for parking at any given time. This statistic has many drastic consequences on traffic throughput and congestion. The average driver spends up to 14 minutes searching for an open parking spot each day.

## What it does
Parkaboo aims to address the lack of an elegant solution to finding open and free parking spaces in crowded cities. Built on the Google Maps API, AWS and using crowd-sourced data, Parkaboo provides real-time updates on unoccupied spots in lots, garages, and streets with free parking.

## How we built it
We first patched up a rough front-end GUI and through that decided what features a user might expect to find in Parkaboo. A database was needed, a map with multiple features and a system to keep track of the user's input and pull crowd-sourced data to the map. We used multiple features of the Google Maps API and customized the use of the API to our case with a few modifications. Then we used AWS DynamoDB and JavaScript to take care of crowd-sourcing and data querying based on location and time. In the end, we went back to front-end design and added final touch-ups to make the GUI usable and responsive.

## Challenges we ran into
Joseph: This was only my second time using HTML and CSS, so there was a lot of on the fly learning taking place for the front end portion. A couple of features, such as Facebook login integration, and a fully functional account dashboard weren't able to make it in due to the learning curve associated with other APIs and languages.
Mahsa: Pairing the program to a domain through GitHub pages with the use of DynamoDB was a challenge that is yet to be overcome. Due to the variety of Google maps API options for displaying data I tried writing the map program in a few different ways before landing the best API use. Another challenge was choosing what database service to use and pairing the database with the JavaScript code, which we essentially solved through many trials and errors.

## Accomplishments that we're proud of
Joseph: I'm proud to actually to have been able to put out a front-end that's aesthetically pleasing. As someone who came into the weekend with a relatively smaller amount of technical knowledge, I'm really happy with how everything turned out on the front-end side, even if the code is a bit messy. 
Mahsa: Going into this weekend I knew what I was going to build but I had no clue what tools I was going to use or what strategies I was going to exploit to accomplish it. Now looking at the outcome, I have learned so much in only a couple of days and have accomplished a fair amount of the goals I had for this hackathon.

## What we learned
Joseph: Integrating the front-end and back-end together required a lot of coordination and we definitely ran into some unexpected bumps near the end of the project. Overall, I picked up more HTML, CSS and a JS than I ever have in my entire life. So it was definitely a great learning experience!
Mahsa: That life is so much easier with API's.

## What's next for Parkaboo
Combining this feature with a commonly used route planning app such as Google Maps or Waze is a great way for Parkaboo's leverage. As well, the next step could be introducing open source datasets (such as the City of Toronto's parking spaces) in order to minimize error in user input.
