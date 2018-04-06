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
I build this using Carto. To do this, I exported a CSV file of my processed data and joined it with a shape file of country boundaries. I then created 3 separate maps.
#### Interactions
These maps are interactive because a user can mouse over or click on countries to find more information. The user can also toggle between viewing the most and least explained terms maps.

### Your design process (e.g., how did you go about designing, building, and refining your system? Why did you choose these representations?)
TKTKTKTK

## Part 3: Visualizing Tech Savviness and Teach Fears
### Information about your visualizations and what they show
### Include information about interactions, preprocesses, and design as appropriate.
### Your design process (e.g., how did you go about designing, building, and refining your system? Why did you choose these representations?)
## Team roles for each individual
