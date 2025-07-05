import React, { useRef } from "react";

export const ScrollDown = () => {
  const containerRef = useRef(null);

  return (
    <div>
      <div
        ref={containerRef}
        style={{
          height: "200px",
          overflowY: "scroll",
          border: "1px solid gray",
          scrollBehavior: "smooth",
          width: "200px",
          margin: "20px",
        }}
      >
        {" "}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea enim
        perspiciatis deleniti porro. Ex obcaecati quaerat earum? Debitis
        eligendi est numquam rerum odio velit dolores, repellat id libero
        dolorum veniam nulla quam magnam ipsa praesentium quod? A, eum ad?
        Facilis assumenda deleniti vero rerum voluptatibus quam libero a dicta.
        Reprehenderit quasi quod aliquam odio, officiis cupiditate? Voluptatum
        ea perferendis reiciendis libero commodi dolores consequuntur voluptates
        nisi atque in? Totam unde excepturi ut enim alias nam sit error fuga
        placeat aspernatur. Explicabo eum sit at possimus architecto omnis
        placeat voluptatem, iste tenetur pariatur fugit facilis quasi? Dicta
        incidunt voluptatibus eius quidem nisi magni aperiam numquam similique
        aspernaimpeditUnde laudantium iste,
        nostrum deserunt velit impedit quae illum omnis quas officia quaerat aut
        laboriosam! Cumque iure eaque tempora voluptatum dicta unde. Rem neque
        esse aliquid obcaecati facere qui non consequuntur ipsa vel atque modi
        est ratione eum nostrum, amet, fugiat ut doloremque necessitatibus
        architecto, corrupti ipsam. Voluptatem, officia dolorem? Neque, eos?
        Cupiditate pariatur, placeat omnis et quibusdam eos perferendis ut
        aliquid ex.
        

      </div>
      <button onClick={()=> containerRef.current.scrollTop = containerRef.current.scrollHeight}>Bottom</button>
      
    </div>
  );
};
