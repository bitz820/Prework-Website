# My Personal Website

#Added initial structre of HTML Page 
    -Nav Bar
    -About Me section
    -List of projects (linked to each project by clicking on image)
    -Contact buttons at the bottom that will eventually have event listeners
    -Created Images folder for About Me content

#Push 2
#Added initial structure of CSS page
    -created a color palette to use throughout
    -flexed the nav bar 
    -styled all text content
    -created a div to hold the two about me pictures
    -created new div to flex and hold all projects

#Push 3
#Added initial JS
    -added event listeners to buttons on bottom to alert that we will redirect away from page
    -added button on top to randomly generate the background color of the page using event listener
#CSS
    -added flex properties to the buttons on bottom of page

#Push 4
Followed a Vanilla JS project to incorporate more accessability in Website
#HTML
    -changed Nav Bar to Sidebar
    -linked social media links in Sidebar
    -minor adjustments to layout including about me
#JS
    -added event listeners to toggle visibilty of sidebar using class changes
#CSS 
    -changed color scheme and added background for project text links
    -added funny GIF
    -added animation to close button as well as sidebar toggle
    -addded additional animation/color changes upon hovering over links and close button
    -added Bacon logo to sidebar header

#Push 5 (3/10/22)
#HTML
    -changed about Me section to include questions about myself
    -moved photos to top of about me
#CSS 
    -changed sidebar width
    -added button animation with plus and minus buttons
#JS
    -added event listeners two ways (through accessing parent elements on DOM and through selecting selectors from already created elements -- this second way allows for the class list to change for each button selected and not all at once: ie are able to collapse/change class list of all buttons at time that one is selected)

#Push 6 (3/11)
#HTML 
    -refactored my project portfolio
    -linked the photo of each project to an external link that takes user to project
    -each project has a photo, title, what framework was used, and a descrtiption of the project
#CSS 
    -added color and animation to the scroll buttons
    -created a carousel of proejcts completed
#JS
    -added event listeners the buttons in order to scroll through
    -even listener to a button that will randomly generate a project
    -when the array of projects has been scrolled through, created a loop to loop back to first or lst item in array of projects

#Push 7 (3/12)
#HTML
    -added countdown to graduation timer
#CSS
    -styled timer in individual divs
    -added margins to countdown
    -made all buttons larger
    -removed/refactored uneccesary stylings
    -used fontawesome to create left and right carats, menu bars, expand and contract buttons, and social icons that are more readable
    -manually edited HTML to add color correction to social media buttons
#JS
    -dynamically inserted my graduation date
    -created a countdown based with days, hours, minutes, seconds
    -created a loop to ensure when value is less than 10, we add a 0 to front
    -when countdown expires, the boxes disappear and message is displayed
    -reset interval so the countdown of seconds happens in real time, not on refresh
    -found and applied function that will convert 24hr time to 12 hour time