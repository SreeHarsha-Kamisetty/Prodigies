  interface IRecipie {
    recipieNeed: string;
  }
const Recipie: React.FC<IRecipie> = ({recipieNeed}) => {
    console.log(recipieNeed)
    return (
      <div className="box-border border-2 border-zinc-950 h-auto md:h-130 w-120">Recipie Information are:
  
        <div id="IMIG" className="flex flex-col md:flex-row h-50 md:h-90 w-full md:w-full">
          <div id="IM" className="box-border h-50 md:w-1/2 border-2 border-zinc-950">
            <img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600" alt="panner tikka" className="w-full h-full object-cover" />
          </div>
  
          <div id="IG" className="border-2 border-zinc-950 h-50 md:w-1/2 md:order-first">
          <ul>
  <li>Paneer (Indian cottage cheese)</li>
  <li>Yogurt</li>
  <li>Ginger-garlic paste</li>
  <li>Lemon juice</li>
  <li>Gram flour (besan)</li>
  <li>Red chili powder</li>
  <li>Turmeric powder</li>
  <li>Garam masala</li>
  <li>Chaat masala</li>
  <li>Kasuri methi (dried fenugreek leaves)</li>
  <li>Salt</li>
  <li>Oil for grilling</li>
</ul>

          </div>
        </div>
  
        <div id="INS" className="border-2 border-zinc-950 h-auto w-full md:h-30 md:w-full md:order-last">
          <p>In a bowl, mix yogurt, ginger-garlic paste, lemon juice, gram flour, red chili powder,
            turmeric powder, garam masala, chaat masala, crushed kasuri methi, and salt to taste to make the marinade.
            Add paneer cubes to the marinade and coat them well. Let them marinate for at least 30 minutes. Preheat the grill or oven to medium-high heat. Thread marinated paneer cubes onto skewers, alternating with optional onion, bell pepper, and tomato wedges. Brush the skewered paneer and vegetables with oil and grill or bake for 10-15 minutes, turning occasionally, until they are golden brown and slightly charred. Serve hot with mint-coriander chutney or lemon wedges and enjoy your delicious paneer tikka!</p>
        </div>
  
      </div>
    );
  }
  
  
  export default Recipie;
  