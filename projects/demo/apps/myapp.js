var models_name = ["myapp"];
var model_table = "myapp";
var model_logs_table = "logs_myapp";

module.exports = {

  init : async()=>{
    console.log("App myapp from project demo started");

    models_name.forEach(async(model_name)=>{
      let res = await $.db_model.getByName(model_name);
      let model_id = res?.id;

      if(model_id == null) $.db_model.insert(model_name,model_table,model_logs_table);
    })

  },

  parseMessage : async (client,app,device,topic,payload,retain,cb)=>{

    $.db_data.update(model_table,device.id,topic,payload);
    $.db_data.addLog(model_logs_table,device.id,topic,payload);

  }
}
