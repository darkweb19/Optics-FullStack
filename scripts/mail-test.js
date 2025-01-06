import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

// Create the transporter
const transporter = nodemailer.createTransport({
	host: process.env.MAILTRAP_HOST,
	port: Number(process.env.MAILTRAP_PORT),
	auth: {
		user: process.env.MAILTRAP_USER,
		pass: process.env.MAILTRAP_PASS,
	},
});

const companyName = "ASG Security Group Ltd.";
const hiringManagerEmail = "hello@sujansthadev.com.np";

const emailDetails = {
	from: '"Sujan Shrestha" <me@sujansthadev.com.np>',
	to: hiringManagerEmail, // Replace with the actual hiring manager's email
	subject: "Application for Security Guard Position",
	html: `
		<p>Dear <strong>Hiring Manager</strong>,</p>
		
		<p>
			I hope this email finds you well. My name is <strong>Sujan Shrestha</strong>, 
			and I am reaching out to express my interest in joining <strong>${companyName} </strong> as a <strong>Security Guard</strong>. 
			I have a valid <strong>Ontario Security Guard License</strong> and am available to work 
			<strong>full-time</strong>, <strong>part-time</strong>, or both.
		</p>
		
		<p>
			In my previous security roles, I have ensured the safety of people and property, 
			conducted regular patrols, and monitored surveillance systems to prevent incidents, 
			which make me confident in my ability to contribute to your team.
		</p>
		
		<p>
			I have attached my <strong>CV</strong> and my <strong>Ontario SG License</strong> for your review. 
			If there are any current or upcoming opportunities that align with my qualifications, 
			I would greatly appreciate the chance to discuss how I can add value to your company.
		</p>
		
		<p>Thank you for your time and consideration. I look forward to the possibility of hearing from you.</p>
		
		<p>
			<strong>Best regards,</strong><br>
			Sujan Shrestha<br>
			(437)-232-1280<br>
			<a href="mailto:sujanshrestha1378@gmail.com">sujanshrestha1378@gmail.com</a>
		</p>
	`,
	attachments: [
		{
			filename: "sujan stha.pdf",
			path: path.resolve(process.cwd(), "sujan stha.pdf"),
		},
		{
			filename: "Security License.pdf",
			path: path.resolve(process.cwd(), "Security License.pdf"),
		},
	],
};

// Send the email
(async () => {
	try {
		await transporter.sendMail(emailDetails);
		console.log("Email sent successfully with attachments!");
	} catch (error) {
		console.error("Error sending email:", error);
	}
})();
