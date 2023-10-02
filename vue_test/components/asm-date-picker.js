import { MyDatePicker } from "./my-date-picker.js";



export const ASMDatePicker = {
    extends: MyDatePicker, // Extend from the MyDatePicker component
    template: `
      <div>
        <h2>ASM Date Picker 2</h2>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Start Date</span>
          <input type="date" id="startDate" v-model="startDate" class="form-control" />
          <span class="input-group-text" id="basic-addon2">End Date</span>
          <input type="date" id="endDate" v-model="endDate" class="form-control" />
          <button @click="queryData" class="btn btn-primary">Query</button>
        </div>
      </div>
    `,

    methods:{
        queryData() {
            console.log("This is asm date picker");
            console.log('Start Date:', this.startDate);
            console.log('End Date:', this.endDate);
          },
    }
  };