import { useParams } from "react-router-dom";

export default function Plate() {
  const { id } = useParams();

  return (
    <div>
      <p>ID: {id}</p>
    </div>
  );
}