//template
new gridjs.Grid({
  columns: ["Name", "Email", "Phone Number"],
  data: [
    ["John", "john@example.com", "(353) 01 222 3333"],
    ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
    ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
    ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
    ["Afshin", "afshin@mail.com", "(353) 22 87 8356"],
  ],
}).render(document.getElementById("table-1"));

// Table 1
new gridjs.Grid({
  columns: [
    "Stage", "Step", 
    {
      name: "Purpose",
      formatter: (cell) => gridjs.html(cell.replace(/\n/g, "<br>"))
    }
  ],
  data: [
    ["Pre-operative\n(Set-up)", "1. Insertion of endotracheal tube (ETT) into patient's trachea", "1. Intubation of patient (for all surgeries)\n\n2. Positioning of IONM recording electrodes adjacent to vocalis muscle"],
    ["Pre-operatie\n(Set-up)", "2. Set up of IONM machine", "Proper connection of recording electrodes, stimulator probe and ground electrodes to interface"],
    ["Intraoperative\n(Protocol)", "3. Stimulation of RLN", "Probe for the functional intactness of RLN at a particular point of the tissue, which will stimulate action potential in vocalis muscle."],
    ["Intraoperative\n(Protocol)", "4. Interpretation of signal feedback", "The detected EMG signal picked up by the recording electrodes at the vocalis muscle through both a visual waveform on the monitor and an audible noise informing the surgeon on the functional state of the RLN.\n\nThe threshold for detection of RLN functional intactness is 100 uV.\n\nAmplitude > 100 uV: Nerve is functionally intact\n\nAmplitude < 100 uV: Nerve is not functionally intact"]
  ],
}).render(document.getElementById("table1"));

class TableComponent extends HTMLElement {
  static get observedAttributes() {
    return ["subtitle"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, _, newValue) {
    this[name] = newValue;
  }

  render() {
    const div = document.createElement("div");
    div.innerHTML = `
    <slot></slot>
    <sub>${this.subtitle}</sub>
    <style>
      :host {
        display: block;
        text-align: center;
      }

      sub {
        font-size: 1rem;
        font-style: italic;
      }
    </style>
  `;

    this.shadowRoot.appendChild(div);
  }
}

customElements.define("table-component", TableComponent);