function getMiddle(s)
{
  //Code goes here!
  function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
{
  //find middle variable of string and divide by 2 if even
  // return 2 characters if even and 1 if odd number of characters 
    var middle = Math.floor(s.length/2);
    if (s.length % 2 == 0)
        return s[middle-1] + s[middle];
    else
        return s[middle];
}
  }