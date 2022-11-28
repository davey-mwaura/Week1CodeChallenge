function CheckSpeed(speed){

    // When speed is less than Seventy
    if (speed < 70){
        console.log("Ok")
    }

    // calculations when speed is more than Seventy

    else if (speed > 70){
      let speedOverSeventy = speed - 70
      
      let demeritpoints = speedOverSeventy/5
      console.log(`Points: ${demeritpoints}`)

   // demerit points if its more than 12 points
     if (demeritpoints > 12){
        console.log("License suspended")
     }
  }
}

// Enter Speed
CheckSpeed(70)