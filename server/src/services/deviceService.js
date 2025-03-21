import Device from "../models/Device.js"

export default {

    create(newDevice){
       const result =  Device.create({
            ...newDevice,
       });
       return result.lean();
    },
     getLast3(){
        const results =  Device.find().sort({ _id: -1 }).limit(3).lean();
        return results;
        
    },
    getAll(){
        const result = Device.find();
        return result;
    },
    getOne(id){
        const result = Device.findById(id).lean();
        return result;
    },
    async preferOne(deviceId,userId){
        const device = await Device.findById(deviceId);

        if(device.owner.equals(userId)){
            throw new Error(`Cannot prefer own offer!`);
        }
        if(device.preferrdList.includes(userId)){
            throw new Error(`You already preffered this offer!`);
        }
        device.preferrdList.push(userId);
        return device.save();
    },
    async updateOne(deviceId,body,userId){
        const device = await Device.findById(deviceId);
        if(!device.owner.equals(userId)){
            throw new Error(`Only owner can edit this offer!`);
        }
       return Device.findByIdAndUpdate(deviceId,body,{runValidators:true});
    },
    async deleteOne(deviceId,userId){
        const device = await Device.findById(deviceId);
        if(!device.owner.equals(userId)){
            throw new Error(`you are not the owner`);
        }

        return Device.findByIdAndDelete(deviceId);
    },
    getUserDevices(userId){
        const devices = Device.find({owner:userId});
        return devices;
    },
    getUserPreffered(userId){
        const devices = Device.find({preferrdList:userId});
        return devices;
    }


}