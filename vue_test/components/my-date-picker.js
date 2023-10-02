export const MyDatePicker = {

    props:{
        startRange: {
            type: Number,
        }

    },

    template: `

    <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Start Date</span>
        <input type="date" id="startDate" v-model="startDate" class="form-control" />
        <span class="input-group-text" id="basic-addon2">End Date</span>
        <input type="date" id="endDate" v-model="endDate" class="form-control" />
        <button @click="queryData" class="btn btn-primary">Query</button>
    </div>

    `,
    data() {
        const currentDate = new Date();
        const startDate = new Date(currentDate - this.startRange * 24 * 60 * 60 * 1000); // Calculate start date
        console.log(currentDate.toISOString().split('T')[0]);
        
      return {
        startDate: startDate.toISOString().split('T')[0], // To store the selected start date
        endDate: currentDate.toISOString().split('T')[0],   // To store the selected end date
      };
    },
    methods: {
      queryData() {
        // Here, you can perform your query or any other action with the selected dates.
        // For example, you can log them to the console.
        console.log('Start Date:', this.startDate);
        console.log('End Date:', this.endDate);
      },
    setDate(date, inputType) {
    if (inputType === 'start') {
        this.startDate = date.toISOString().split('T')[0];
    } else if (inputType === 'end') {
        this.endDate = date.toISOString().split('T')[0];
    }
    },

    },
  };