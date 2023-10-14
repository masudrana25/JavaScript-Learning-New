var number = 5;

switch (number) {
    case 1000:
        console.log('I am 1000');
        break; // means ai case ta true holey next case a jaby na. ar jodi break na dei, tobey sob gula case e check korbey.
    case 100:
        console.log('I am 100');
        break;
    case 50:
        console.log('I am 50');
        break;
    case 10:
    case 8: // aikhan a ai duita sortor jonno nicher kaj ta korbey. j kono akta sorto fill-up korlei holo.
        console.log('I am 10');
        break;
    case 1:
        console.log('I am 1');
        break;
    default: // kono case a e jodi full-fill na korey , tobey nicher kaj ta korbey.
        console.log(`I don't know who I am`);
        break;
}