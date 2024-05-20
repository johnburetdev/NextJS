import TitlePage from "@/app/components/TitlePage";

const Slug = ({ params }) => {
  console.log(params);
  return (
    <>
      <TitlePage title="Slug" />
      <p className="text-center">{params.slug}</p>
    </>
  );
};

export default Slug;
