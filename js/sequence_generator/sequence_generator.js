function weighted_pick(probs){
    var sum = 0;
    var rand = Math.random();
    for( var i = 0; i < probs.length; i++){
        sum += probs[i];
        if (rand <= sum) {
            return i;
        }
    }
    return probs.length - 1;
}


function softmax(x){
    
    var result = [];
    var e_z = [];
    for(var i = 0; i < x.length; i++){
        e_z.push(Math.exp(x[i]));
    }
    var sum = 0;
    for(var i = 0; i < x.length; i++){
        sum += e_z[i];
    }
    for(var i = 0; i < x.length; i++){
        result.push(e_z[i] / sum);
    }
    return result;
}

function sigmoid(x){
    var result = [];
    for(var i = 0; i < x.length; i++){
        result.push(1/(1 + Math.pow(Math.E, -x[i])));
    }
    return result;
}

function tanh(x){
    var result = [];
    for(var i = 0; i < x.length; i++){
        result.push(Math.tanh(x[i]));
    }
    return result;
}

function pmul(a, b){
    var result = [];
    for(var i = 0; i < a.length; i++){
        result.push(a[i] * b[i]);
    }
    return result;
}

function padd(a, b){
    var result = [];
    for(var i = 0; i < a.length; i++){
        result.push(a[i] + b[i]);
    }
    return result;
}

function lstm(x, h, c, lstm, forget_bias=1.0){
    var w = lstm.weights
    var b = lstm.biases
    var input = x.concat(h);
    var i = [];
    var j = [];
    var f = [];
    var o = [];
    var out_size = b.length / 4;
    for(var row_num = 0; row_num < out_size; row_num++){
        i.push(b[row_num]);
        j.push(b[row_num]);
        f.push(b[row_num] + forget_bias);
        o.push(b[row_num]);
    }
    for(var row_num = 0; row_num < out_size; row_num++){
        for(var n = 0; n < input.length; n++){
            i[i.length-1] += input[n] * w[n][row_num + out_size * 0];
            j[j.length-1] += input[n] * w[n][row_num + out_size * 1];
            f[f.length-1] += input[n] * w[n][row_num + out_size * 2];
            o[o.length-1] += input[n] * w[n][row_num + out_size * 3];
        }
    }
    
    var new_c = padd(pmul(c, sigmoid(f)), pmul(sigmoid(i), tanh(j)));
    var new_h = pmul(tanh(new_c), sigmoid(o));
    
    return [new_h, new_c];  
}

function nnLayer(x, layer){
    var result = [];
    for (var row = 0; row < layer.biases.length; row++){
        result.push(layer.biases[row])
    }
    for (var i = 0; i < layer.biases.length; i++){
        for(var j = 0; j < x.length; j++){
            result[i] += x[j] * layer.weights[j][i];
        }
    }
    return result;
}

function lstm_stack(x, h_array, c_array, lstms, forget_bias=1.0, num_layers=-1, in_place=false){
    var vector = x;
    if (!in_place){
        var h = [];
        var c = [];
    }
    if (num_layers < 0 || num_layers > lstms.length){
        num_layers = lstms.length;   
    }
    for(var layer = 0; layer < num_layers; layer++){
        var results = lstm(vector, h_array[layer], c_array[layer], lstms[layer], forget_bias);
        if(in_place){
            h_array[layer] = results[0];
            c_array[layer] = results[1];
        } else {
            h.push(results[0]);
            c.push(results[1]);
        }
        vector = results[0];
    }
    if (in_place){
        return vector;   
    }
    return [vector, h, c];
}

function zero_state(model){
    var c = [];
    for(var i = 0; i < model.depth; i++){
        c.push([]);
        for(var j = 0; j < model.width; j++){
            c[c.length - 1].push(0);
        }
    }
    return c;
}

function split_seed(seed, mode){
    var result;
    if (mode == "character"){
        result = seed.split('');   
    } else if (mode == "word"){
        var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var chars = seed.split('');
        var chr;
        result = [''];
        for(var i = 0; i < seed.length; i++) {
            chr = seed[i];
            if(alphabet.includes(chr)){
                    result[result.length - 1] = result[result.length - 1].concat(chr);
            } else {
                if (result[result.length - 1] == ''){
                    result[result.length - 1] = result[result.length - 1].concat(chr);
                } else {
                    result.push(chr);
                }
                result.push('');
            }
        }
        if (result[result.length - 1] == ''){
            result.pop();
        }
    }
    return result;
}

function sample(){
    var sample_type_select = document.getElementById("sample_type");
    var sample_type = sample_type_select.options[sample_type_select.selectedIndex].value;
    var sample_size = parseInt(document.getElementById("sample_size").value);
    var sample_seed = document.getElementById("sample_seed").value;
    var sample_array = split_seed(sample_seed, sample_type);
    var model = models[sample_type];

    var sample_vectors = [];
    var str;
    for(var i = 0; i < sample_array.length; i++){
        var str = sample_array[i]
        if(str != ''){
            sample_vectors.push(model.embeddings[model.encoder[str]]);
        }
    }
    var final_sample = sample_seed;
    var h = zero_state(model);
    var c = zero_state(model);
    for(var i = 0; i < sample_vectors.length - 1; i++){
        lstm_stack(sample_vectors[i], h, c, model.lstms, 1, -1, true);
    }
    var result = sample_vectors[sample_vectors.length - 1];
    var lstm_output;
    var out_vals;
    var probs;
    var cum_probs;
    var sum;
    var chosen;
    var resnum;
    for(var i = 0; i < sample_size; i++){
        lstm_output = lstm_stack(result, h, c, model.lstms, 1, -1, true);
        out_vals = nnLayer(lstm_output, model.softmax);
        probs = softmax(out_vals);
        chosen = weighted_pick(probs);
        result = model.embeddings[chosen];
        final_sample = final_sample.concat(model.decoder[chosen]);
    }
    console.log("h_0: ", h[0]);
    console.log("c_0: ", c[0]);
    console.log("h_1: ", h[1]);
    console.log("c_1: ", c[1]);
    console.log("Final Sample: ", final_sample);
    document.getElementById('results').innerHTML = final_sample;
    console.log(document.getElementById('results').innerHTML);
}
