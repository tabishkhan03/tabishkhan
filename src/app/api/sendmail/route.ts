import EmailTemplate from "@/app/components/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { promises as fs } from "fs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const file = await fs.readFile("src/app/emailcount.json",
      "utf8"
    );
    const emailcount = JSON.parse(file);

    const { name, email, phonenumber, emailsub, message }: any = await req.json();
    console.log("name is:", name);

    const test = "portfolio" + emailcount.count;
    console.log(test);

    const data = await resend.emails.send({
      from: `${name} <${test}@resend.dev>`,
      to: "tabish25u@gmail.com",
      subject: emailsub,
      react: EmailTemplate({
        name: name,
        phonenumber: phonenumber,
        email: email,
        emailsub: emailsub,
        message: message,
      }),
    });

    console.log("data is:", data.data?.id);

    // Update the email count after a successful send
    emailcount.count += 1;
    await fs.writeFile(
      process.cwd() + "/src/app/emailcount.json",
      JSON.stringify(emailcount, null, 2),
      "utf8"
    );

    return NextResponse.json({
      data,
      message: "Email sent successfully",
      success: true,
      status: 200,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({
      error,
      message: "Failed to send email",
      success: false,
      status: 500,
    });
  }
}
