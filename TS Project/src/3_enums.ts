// Set of related constants

enum Role {
    Admin = "ADMIN",
    Organizer = "ORGANIZER",
    Attendee = "ATTENDEE",
    Exhibtor = "EXHIBTIOR"
} 

enum Status {
    Pending = 4,
    Active,
    Cancelled
} // 4, 5, 6

const currentRole : Role = Role.Attendee


console.log(currentRole, Status.Active) // ATENDEE, 5