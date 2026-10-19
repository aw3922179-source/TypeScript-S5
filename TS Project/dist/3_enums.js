// Set of related constants
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["Organizer"] = "ORGANIZER";
    Role["Attendee"] = "ATTENDEE";
    Role["Exhibtor"] = "EXHIBTIOR";
})(Role || (Role = {}));
var Status;
(function (Status) {
    Status[Status["Pending"] = 4] = "Pending";
    Status[Status["Active"] = 5] = "Active";
    Status[Status["Cancelled"] = 6] = "Cancelled";
})(Status || (Status = {})); // 4, 5, 6
const currentRole = Role.Attendee;
console.log(currentRole, Status.Active); // ATENDEE, 5
export {};
