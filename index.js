import { readFileSync } from 'fs';
import fs  from 'fs';

let finalArray = []

const getExpClick = (finalObj) => {
    Object.keys(finalObj).forEach((key) => {
        if(finalObj[key].length === 1){
            finalArray.push(finalObj[key][0])
        }else{
            let amxAmt;
            amxAmt = finalObj[key].reduce((prev, current) => (+prev.amount > +current.amount) ? prev : current)
            finalArray.push(amxAmt)
        }
    })
    return finalArray
}

const groupByTimestamp = (grpArr) => {
    let finalObj = {}
    grpArr.forEach((item) => {
        const date = item.timestamp.split(":")[0]
        if (finalObj[date]) {
          finalObj[date].push(item)
        } else {
          finalObj[date] = [item]
        }
    })
    return getExpClick(finalObj)
}

const passGroupedIp = (groupedIps) => {
    return Object.keys(groupedIps).forEach(function(key) {
                groupByTimestamp(groupedIps[key])
            });
}

const groupClickByIp = (arr) => {
    let groupedIps
    groupedIps = arr.reduce((group, item) => {
        group[item.ip] = [...group[item.ip] || [], item]
        return group;
    }, {});
    Object.keys(groupedIps).forEach(function(key) {
        if(groupedIps[key].length>10){
            delete groupedIps[key]
        }
    });
    return passGroupedIp(groupedIps)
}

const rawdata = readFileSync('./clicks.json')
groupClickByIp(JSON.parse(rawdata))
console.log(finalArray)
if(finalArray){
    fs.writeFileSync('./resultSet.json', JSON.stringify(finalArray, null, 4))
}

 