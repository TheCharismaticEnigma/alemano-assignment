## [`ALEMANO-ASSIGNMENT`](https://alemano-assignment-bqp6.vercel.app/)  (Deployed w/ Vercel)
## An Application w/ Next.Js, React.JS, TypeScript and MongoDB 

This is a fully responsive, interactive `Full Stack web application created using Next.js, React.js, Tailwind CSS, Chakra-UI, Recharts and many other exquisite libraries & frameworks`. Furthermore, TypeScript is used for type-safety, intelli-sense and other benefits. 

`MongoDB` was used as the DB Solution & `Mongoose` was used as Object Data Modelling Library. The Schemas, Forms, and Request Body data are verified using `ZOD`. Forms data is managed with the aid of `React Hook Form`. 

- THE COURSE DATA IS EXPLICITLY CREATED AND STORED IN THE DATABASE. 
- The COURSE `UPDATING (patch) and Authentication w/ Google (OAuth) functionalities` were skipped due to the paucity of time.

## Employed Technologies

```js
   EmployedTechnologies: {
    Framework: "NextJS",
    FrontendLibrary: "React.Js", 
    Authentication: "Next Auth",
    Database : "MongoDB",
    ObjectModelingTool: "Mongoose",
    SchemaValidation: "Zod",
    Styling: "TailwindCSS",
    ComponentLibrary: "Chakra-UI",
    Charts: "Recharts",
    HTTPService : "Axios",
    PromiseBasedHTTPClient: "Axios HTTP",
    TypeChecking: "Typescript",
    SchemaValidation:"Zod", 
    Deployment: "Vercel"
   },
```

## Getting Started

First, CLICK ON THE [`APP LINK`](https://alemano-assignment-bqp6.vercel.app/)

```bash
There are 4 Main Pages mapped to specific paths:

- A Student Dashboard (/)
- A Course Listing and Filtering Page (/courses)
- A course detail page (/courses/[id])
- A page responsible for CREATING a new Course (/courses/new)
```

## Student Dashboard (/)
- Gives the summary of the course data.
- A Graphical description of the course stats filtered by their current status. The graph was created via `RECHARTS` library.
- A table displaying the basic information `(clickable title, current status, current liking status)` about the top 5 latest issues.

## Course List Page (/courses) 
- Displays all the courses in the database.
- `Courses can be sorted by their title, status and instructor name. Click on the table header for that.
- Each course title, when clicked on, navigates to the specific course detail page, where all the detailed information about the course is rendered.
- The page contains pagination and sorting abilites. 
- If all courses are desired, type `all` in the instructor search input.

## New Course Page (/courses/new)
- Form is managed via `React Hook Form` Library, and the input data is validated using the `ZOD` library. Hookform resolver was used to link the two.
- A new course, when created, will be stored in the DB, and user will be redirected to the student dashboard page/home page. 

## Course Detail Page (/courses/[id])
- Displays the course information in detail. Its duration, type, syllabus, prerequisites, liked status, instructor, etc.




  

