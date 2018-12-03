function getwpm()
{
    var elapsed = (Date.now() - start) / 1000; //seconds
    if(elapsed <= 0) return 0;

    var netwpm = (count / 5) * pert / 100 / elapsed * 60;
    //net wpm = ((typed letters / 5) * accuracy) / time
    return netwpm.toFixed(2);
}
//nice
