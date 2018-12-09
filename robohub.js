
//     Level 1

while(isFree('north')) {
    north();
}


//     Level 2

while(isFree('east')) {
    east();
}


//     Level 3

for ( i=0;i < 7; i++) {
    south();
    east();
}


//     Level 4

for ( i=0;i < 3; i++) {
    while (isFree('south')) {
        south(); }
    while (isFree('east')) {
        east();
    }
}
while (isFree('south')) {
    south();
}


//    Level 5

while (isFree('east')) {
    east();
}
while (isFree('south')) {
    south();
}
while (isFree('west')) {
    west();
}
while (isFree('south')) {
    south();
}
while (isFree('west')) {
    west();
}
while (isFree('north')) {
    north();
}
while (isFree('west')) {
    west();
}
while (isFree('south')) {
    south();
}
while (isFree('east')) {
    east();
}
