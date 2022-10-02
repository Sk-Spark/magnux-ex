
export const getDischargeData = (dischargeCycles:any[])=>{
    let rsts:any = [];
    dischargeCycles.forEach(dc=>{
        for(let i=0; i<dc.length-1; ++i){
            let dis = dc[i+1].km - dc[i].km; // distance covered 
            let dV = Number((dc[i].v - dc[i+1].v).toPrecision(2)); // dalt Voltage
            let kmpv = parseFloat((dis/dV).toPrecision(2));
            let rst = [`${dc[i+1].v} - ${dc[i].v}` ,dV , dis];
            // data pushed
            rsts.push([kmpv, ...rst]);
        }
    });
    rsts = rsts.sort((a:any, b:any)=> a[0]<b[0]? 1: -1)
    console.log(rsts);
    return rsts;
}

export const getDischargeCycle = (dischargeCycles:any[]):any[]=>{
    let rsts:any = [];
    dischargeCycles.forEach(dc=>{
        const len = dc.length;
        const totalDistance = dc[len-1].km - dc[0].km;
        const vols = `${dc[0].v} - ${dc[len-1].v}`;
        rsts.push([vols,totalDistance]);
    });
    console.log("getDischargeCycle:",rsts);
    return rsts;
}
