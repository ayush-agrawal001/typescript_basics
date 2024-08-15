// enums (enumarations) helps us to specify the order

const enum seatChoice{ //using const so that when compiled to js will not make unnecessary codes

    AISLE = "data", // This will specify the seatChoice.AISLE to "data"(if not given any data it will be default to 0) 
    MIDDLE_first = 1 , // This will specify the seatChoice.MIDDLE to 1
    MIDDLE_SEC, // this will be 3 (hover it)
    WINDOW, // this will be 3 (hover it)

}

const hcSeat = seatChoice.AISLE