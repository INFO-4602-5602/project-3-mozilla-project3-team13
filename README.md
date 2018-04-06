# Team 13
## How to run our project
Our project is available to view at [this link](https://jwirfs-brock.github.io/INFO5602-mozilla-survey-project/index.html).
## Part 1: Visualizing Connectedness and Outlook for the Future
### Information about your visualizations and what they show
### Include information about interactions, preprocesses, and design as appropriate.
### Your design process (e.g., how did you go about designing, building, and refining your system? Why did you choose these representations?)
## Part 2: Visualizing Explainable Terms
### Information about your visualizations and what they show
This visualization shows the results of the question, "Check all the terms below that you could explain to a friend" by country. The first visualization is a choropleth map shaded according to the average number of terms respondents from each country said they could explain. The second and third maps are categorical maps colored by the most and least explainable term in each country. The fourth (video) map is an audio-tactile experience displaying the top explainable terms in a subset of countries (the U.S., Russia, China, Brazil and Belarus). A computer voice reads the top n terms in those countries, where n is the average number of terms people could explain.
### Include information about interactions, preprocesses, and design as appropriate
#### Data processing
I analyzed the data for these maps in Python using Jupyter notebooks and pandas. You can view the notebook [here](https://github.com/INFO-4602-5602/project-3-mozilla-project3-team13/blob/master/Mozilla-survey-analysis-JWB.ipynb) (note that it won't run in the brower, though, because the data file was too large to host on GitHub). Here's a rough method I used to process the data for these maps:
* Filter just the relevant columns that correspond to the "terms you can explain" question.
* Those columns included values like IoT, Botnet, etc., so I replaced them with a 1 or a 0 (for doing averages).
* I noticed that there were many survey respondents who checked all of the boxes, including "I don't know what any of these things are." In these cases, I assumed these were erroneous results (i.e., someone just checked everything without actually reading the question), and filtered them out. Responses where someone checked "I don't know what any of these things are" but then maybe a couple of the tech terms, I kept, because I assumed that these are valid.
* I added up all the responses across each row (not counting "I don't know"), to come up with a "Number of Terms" value for each response.
* I grouped by country, averaging the number of terms each person could explain.
* Averaging the 1s and 0s for each term also gives a frequency of responses for each term.
* I then found the highest and lowest frequency of explained terms for each country, and added columns displaying those.
* I counted the number of responses per country, and dropped countries with fewer than 15 responses (because the data is too small to be representative).
#### Construction
I built the interactive maps using Carto. To do this, I exported a CSV file of my processed data and joined it with a shape file of country boundaries. I then created 3 separate maps. Using Carto's features, I styled the colors according to our team's color palette. I customized the tool-tips and pop-up information windows to display supplementary information.

I built the physical map using a [micro:bit](http://microbit.org/) controller, a breadboard extender, insulated wire, a small speaker, foam board, paper and aluminum foil. In this simple circuit, wire is connected to one of the micro:bit's touch input pins (pin 2) and the speaker is connected to the 0 pin and the ground. The code to run the sonification/speech simulator is written in Python ([view a sample](https://github.com/jwirfs-brock/INFO5602-mozilla-survey-project/blob/master/Wirfs-Brock.GS.py)).
#### Interactions
The web maps are interactive because a user can mouse over or click on countries to find more information. The user can also toggle between viewing the most and least explained terms maps.

The physical map is interactive because a user must complete the circuit with his/her hands in order to hear the sonification. The user completes the circuit by holding on to the ground wire and then touching a country.

### Your design process (e.g., how did you go about designing, building, and refining your system? Why did you choose these representations?)
First, I chose a topic (the "how many tech terms can you explain" question) and began exploring the data to see what was interesting. I came up with the following list of questions:
* Are there regional differences in what terms people feel most comfortable explaining?
* Are there regional differences in the amount of terms people feel comfortable explaining?

#### Digital maps
I chose to display this information using a map, but considered other options, including a bar chart and a grid map. I decided on a traditional map because one of the requirements for this project was that we create a visualization using geographical data. Honestly, I think that a map may not be the best way to represent this information. With a map, you can only show one piece of information (average number of terms people can explain, top term, etc.), so you can't tell how many respondents there were in each country, how that compares to the country's population, how that compares to other aspects of the survey, etc. If I had more time, I would consider other design solutions more fully.

For showing the average number of terms people can explain, a choropleth map seemed like the obvious choice. I chose a 5-category color ramp for simplicity (7 or 9 categories gets too confusing). The average number of terms people could explain ranged from less than 1 to more than 6. I tried out various methods for coming up with the category breaks, including Jenks and Quantile, but ultimately landed on using even breaks, because that is most understandable for the viewer.

I played around a bit with what zoom level to display, and even tried flipping east and west (that is, having Europe/Africa/Asia be on the left side of the map and North/South America on the right side), to go along with the theme of technology disruption. However, I ultimately decided against this display mode, again for ease of use for the reader.

I actually created this map first as an experiment, because I was curious, and wasn't intending on having this be one of our products. However, I found it fascinating that connected devices was such a dominant term, yet VPN is explained at a very high rate in China, where people may use VPN frequently to get around internet censoring. The ordering of all of the terms is fascinating, and if I had more time I would have tried to come up with a visualization that lets you explore them all. This map, however, hones in on this one idea, most/least common term. To show data for the most/least explained term, I went with a categorical map. On the most explained term, only 3 possible terms bubbled to the top (connected devices, VPN, DDOS), so I chose colors that were not adjacent on our color ramp. For the least explained term, I had more categories (7), so I had to add some additional colors. I decided to use tool tips to display information about what percent of respondents could explain these terms, and I formatted them in plain speech ("XX% of people can explain XX") for readability.
#### Audio-tactile maps
This map meets three main goals: (1) it provides people an emotional interaction with the data, (2) it presents data that couldn't be fully communicated on the map (multiple explainable terms, rather than just the top one), (3) it gives me an opportunity to practice physical computing techniques.

To design the sonification, I chose to use a Dalek (the main villain from Doctor Who) voice, although perhaps a Cybermen voice would have also been appropriate. Both Daleks and Cybermen represent our worst fears about technology: it could strip us of our individuality and humanity. This underscores one of the themes of the Mozilla survey, which is that many people have a sense of fear and anxiety about the future of technology (which is explored in our group's part 1 and part 3 visualizations).

I chose to have the Dalek voice read the top n average explainable terms in each country, and trail off in the middle of a word for non-whole numbers. If I had more time, I would have liked to have the volume reflect the frequency/percent of respondents who said they could explain each term. That way, the sonification would tell you not only the average terms, but their frequency.

## Part 3: Visualizing Tech Savviness and Teach Fears
### Information about your visualizations and what they show
### Include information about interactions, preprocesses, and design as appropriate.
### Your design process (e.g., how did you go about designing, building, and refining your system? Why did you choose these representations?)
## Team roles for each individual
