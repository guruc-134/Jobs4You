<img src='./public/Logo.png' width='225'/>
<h2 id='intro'>Introduction</h2>
<p>Jobs4You is a platform built to provide the latest job updates , taken from the API : https://remotive.io/api/remote-jobs </p>
<p> This is progressive web application </p>
<h3> Major Features present are : </h3>
<ul>
<li> Get Latest Job Updates </li>
<li> Add tags to the jobs to keep a track of the selected jobs, and customize them </li>
<li> Search for Jobs based on  - Job Title, - Job Category - Job Type </li>
<li> Sorting based on recenty is also possible </li>
</ul>

<h4>Some Techhnical Details to be mentioned </h4>
<h5> This api allows very low number of calls per IP address, so to prevent any problems and to have a smooth functioning the following things have been done </h5>
* Selective API calling i.e pushing the job Updates to the Local storage to avoid calling the API repeatedly, and calling only once.
