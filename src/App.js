import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact"; 

function App() {
  const [categories] = useState([
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]);

  // Add a useState hook for contact form
  // Set false so it does not show right away
  const [contactSelected, setContactSelected] = useState(false);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  // If we wrote it without JSX
  // Returns JSX   -> Javascript XML
  // React.createElement("div", {} [
  // React.createElement("h1", {}, "Ginger"),
  // React.createElement("p", {}, "Breed: Brittany Spaniel")
  // ])
  // Same as
  // <div>
  // <h1>Ginger</h1>
  // <p>bree: Brittany Spaniel</p>
  //</div>

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        {/* If contactForm is not selected then show everything */}
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          
            <ContactForm></ContactForm>

        )}
      </main>
    </div>
  );
}

export default App;
