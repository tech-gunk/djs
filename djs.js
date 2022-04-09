var djs = {};
djs.math={}
djs.path={}

djs.math.findClosestNumber=function(number,array){
    var closest_number=array[0];
    var closest_number_diff=Math.abs(number-closest_number);
    for(var i=1;i<array.length;i++){
        var diff=Math.abs(number-array[i]);
        if(diff<closest_number_diff){
            closest_number=array[i];
            closest_number_diff=diff;
        }
    }
    return closest_number;
}

djs.math.findStandardDeviation=function(array){
    var mean=djs.math.findMean(array);
    var sum=0;
    for(var i=0;i<array.length;i++){
        sum+=Math.pow(array[i]-mean,2);
    }
    return Math.sqrt(sum/array.length);
}

djs.math.findMean=function(array){
    var sum=0;
    for(var i=0;i<array.length;i++){
        sum+=array[i];
    }
    return sum/array.length;
}

djs.math.findMode=function(array){
    var mode_array=[];
    var mode_count=0;
    var mode_number=array[0];
    for(var i=0;i<array.length;i++){
        var count=0;
        for(var j=0;j<array.length;j++){
            if(array[j]==array[i]){
                count++;
            }
        }
        if(count>mode_count){
            mode_count=count;
            mode_number=array[i];
            mode_array=[];
            mode_array.push(mode_number);
        }
        else if(count==mode_count){
            mode_array.push(array[i]);
        }
    }
    return mode_array;
}


djs.math.findMedian=function(array){
    array.sort(function(a,b){return a-b});
    var median;
    if(array.length%2==0){
        median=(array[array.length/2]+array[array.length/2-1])/2;
    }
    else{
        median=array[(array.length-1)/2];
    }
    return median;
}

djs.math.findRange=function(array){
    array.sort(function(a,b){return a-b});
    return array[array.length-1]-array[0];
}

djs.math.findVariance=function(array){
    var mean=djs.math.findMean(array);
    var sum=0;
    for(var i=0;i<array.length;i++){
        sum+=Math.pow(array[i]-mean,2);
    }
    return sum/array.length;
}

djs.math.findStandardError=function(array){
    var standard_deviation=djs.math.findStandardDeviation(array);
    return standard_deviation/Math.sqrt(array.length);
}

djs.math.findConfidenceInterval=function(array,confidence_level){
    var standard_error=djs.math.findStandardError(array);
    var z_score=djs.math.findZScore(confidence_level);
    return z_score*standard_error;
}

djs.math.findZScore=function(confidence_level){
    return 1.96;
}

djs.math.findPercentile=function(array,percentile){
    array.sort(function(a,b){return a-b});
    var index=Math.floor(array.length*percentile/100);
    return array[index];
}

djs.math.findPercentileRank=function(array,number){
    array.sort(function(a,b){return a-b});
    var index=0;
    for(var i=0;i<array.length;i++){
        if(array[i]>number){
            index=i;
            break;
        }
    }
    return index/array.length*100;
}

djs.math.findMedianAbsoluteDeviation=function(array){
    var median=djs.math.findMedian(array);
    var sum=0;
    for(var i=0;i<array.length;i++){
        sum+=Math.abs(array[i]-median);
    }
    return sum/array.length;
}

djs.math.findCoefficientOfVariation=function(array){
    var mean=djs.math.findMean(array);
    var sum=0;
    for(var i=0;i<array.length;i++){
        sum+=Math.pow(array[i]-mean,2);
    }
    return Math.sqrt(sum/array.length)/mean;
}

djs.math.findStandardErrorOfMean=function(array){
    var mean=djs.math.findMean(array);
    var sum=0;
    for(var i=0;i<array.length;i++){
        sum+=Math.pow(array[i]-mean,2);
    }
    return Math.sqrt(sum/array.length)/Math.sqrt(array.length);
}

djs.math.findIrrationalNumbers=function(array){
    var irrational_numbers=[];
    for(var i=0;i<array.length;i++){
        if(array[i]%1!=0){
            irrational_numbers.push(array[i]);
        }
    }
    return irrational_numbers;
}

djs.math.createRandomArray=function(length,min,max){
    var array=[];
    for(var i=0;i<length;i++){
        array.push(Math.floor(Math.random()*(max-min+1)+min));
    }
    return array;
}

djs.path.redirect = function(path) {
    window.location.href = path;
}

djs.path.reload = function() {
    window.location.reload();
}

djs.path.goBack = function() {
    window.history.back();
}

djs.path.goForward = function() {
    window.history.forward();
}
