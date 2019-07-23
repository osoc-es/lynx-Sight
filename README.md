![LynxSight Logo](/webLKG/img/LogoLynxSight.png=width=50)
# LynxSight
> LynxSight is a web-based visualisation tool that allows to organise legal information (more specifically legal events) in a way that it makes sense for the user, targeted at both specialised and non-specialised public.

Legal events can be defined as actions of certain relevance from the legal point of view (e.g. an incident, a decision, etc). Reading long documents all day can be frustrating and synthesizing or just locating important infomation often requires a lot of time. LynxSight aims to make this process so much simpler by providing with visual guidance along the legal sentences you may be going through at th moment.

## Look and Feel
![Example Look and Feel](/webLKG/img/Example1_LndF.png)

## What it does
LynxSight is used to analyse legal sentences and provides with:
  - Inline highlighting.
  - Temporal analysis and sorting.
  - Graph-based visualisation of legal events, answering at a glance to common questions like: Who, Against Whom, When...
  - Visual categorisation of legal events.
  - Hierarchical sizing according to degree of importance according to professional lawyers.
  - Zooming functionality to enable exploring events as in a natural way.

The LynxSight project is part of a European project called Lynx whose purpose is to build a LKG (Legal Knowledge Graph). This work, focused on front-end development and UX, assisted in the progress of such project, in which researchers of the OEG department at UPM University (Madrid) were involved.

The project involved 4 weeks of work, and working with external code and a bad design, which used Bootstrap and nested pages in odd ways, providing a relatively "default page" look but was still functional.
Our task was to redesign the top of the page and make that part fixed to the top while we provided visualisation mechanisms to the user.
Among the technologies used in the project we find the chief components of any front-end development: HTML, CSS and JS.
Vanilla Javascript was used to generate all dynamic content and CSS Flexbox was used to organise elements in the page in a way that the design could be made fully responsive in further iterations on the project.

All the graphical elements were created using svg, in order to make elements show perfectly at any size and so that interaction could be implemented more easiy than using other html elements such as canvas.
