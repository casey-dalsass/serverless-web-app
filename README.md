# serverless-web-app-test
Utilizing AWS Serverless Services I have created a basic web application utilizing GET from a DynamoDB database. I intend on expanding this project for future use.

I first began by creating a REST API within API Gateway
	- For testing purposes I made the Integration Type Mock, this will change to Lambda later.
	- Edited Change Error format to JSON
	- Created a "Dev" stage for deployment
	- Deployed API, a link will be created based on the resource name

To invoke the API, I utilized Lambda for serverless compute functions.
- In order to allow proper access, an IAM role is necessary
	-This role will need Lambda Full Access, and DynamoDB Read Only (This test will get data, not write. Yet...)
	- To test Lambda functionality the index.js file was give a JSON test phrase to return
	- Connect Lambda with API Gateway resource
	- API link should display JSON test phrase
	
Create DynamoDB Table, with test data
- A very simple step, the focus here is creating well functioning code within Lambda and the HTML responses
	- Table name, Primary Key, and two additional data points created

Return to Lambda, rework index.js script to communicate with DynamoDB
- Params variable specifies Table Name and Primary Key to query DynamoDB
	
Updates to API Gateway, and query string testing
- Method Request: Url query string parameter
	- Enter query string that will be passed in order to get data from DynamoDB
	- Name: EmailID, REQUIRED to query
	- Request Validator: Validate querty string parameters and headers
- Integration Request: Body Mapping template
	- When no templates are defined
	- "EmailID": "$input.params('EmailID')"
- Enable CORS (Cross orgin resource sharing)
	- Actions dropdown, Enable CORS
	- Redeploy API
- Test API URL query using "/Dev/myfirstapitest?EmailID=spiderman@avengers.com"
	- Alternatively, utilize Postname works just as well.
		
HTML simple page, utilizing Knockout and ajax, create the simple HTML calls

- Able to be repurposed just change API url and data binders
	
	
FUTURE CHANGES

- I will use Python for Lambda function and the Boto3 library
- Call API into HTML in different ways, dropdown list instead of textbox.
- Utilize Fetch
- Write to DynamoDB
	
