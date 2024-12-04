import img from "./assets/Photo3.jpg";

export default function App() {
  return (
    <div className="card">
      <img className="avatar" src={img} />
      <div>
        <h3>Sibulele Ngada</h3>
        <p>Web Developer</p>
        <h4>Cape Town, South Africa</h4>
      </div>
    </div>
  );
}
