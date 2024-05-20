import TitlePage from "@/app/components/TitlePage";

const Id = ({ params }) => {
  console.log(params);
  return (
    <>
      <TitlePage title="ID" />
    </>
  );
};

export default Id;
