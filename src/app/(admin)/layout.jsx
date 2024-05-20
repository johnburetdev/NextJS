import "../globals.css";

export const metadata = {
  title: "Admin Layout",
  description: "Generated by create next app",
};

const adminLayout = ({ children }) => {
  return (
    <html>
      <body>
        <p className="ml-5">adminLayout</p>
        {children}
      </body>
    </html>
  );
};

export default adminLayout;