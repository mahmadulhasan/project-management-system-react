const employees = [
    {
        "id": 1,
        "name": "Aarav Sharma",
        "email": "employee1@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 5,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Design Landing Page",
                "taskDescription": "Create a responsive landing page for the website.",
                "taskDate": "2025-03-22",
                "category": "Design",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Fix Navbar Issue",
                "taskDescription": "Resolve the issue with the navbar collapsing incorrectly.",
                "taskDate": "2025-03-23",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Update Logo",
                "taskDescription": "Change the website logo as per the new branding guidelines.",
                "taskDate": "2025-03-24",
                "category": "Design",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "name": "Vihaan Patel",
        "email": "employee2@example.com",
        "password": "123",
        "taskCounts": {
            "active": 6,
            "newTask": 4,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Develop API",
                "taskDescription": "Create a REST API for user authentication.",
                "taskDate": "2025-03-22",
                "category": "Backend",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Optimize Database",
                "taskDescription": "Improve the database query performance.",
                "taskDate": "2025-03-23",
                "category": "Database",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "name": "Ishaan Mehta",
        "email": "employee3@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 6,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Write Blog Post",
                "taskDescription": "Draft a new blog post about React hooks.",
                "taskDate": "2025-03-22",
                "category": "Content Writing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Edit Video",
                "taskDescription": "Edit the promotional video for the new product launch.",
                "taskDate": "2025-03-23",
                "category": "Media",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "taskTitle": "Review UI Design",
                "taskDescription": "Provide feedback on the latest UI design changes.",
                "taskDate": "2025-03-24",
                "category": "Design",
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "name": "Kabir Reddy",
        "email": "employee4@example.com",
        "password": "123",
        "taskCounts": {
            "active": 8,
            "newTask": 3,
            "completed": 7,
            "failed": 1
        },
        "tasks": [
            {
                "taskTitle": "Deploy Application",
                "taskDescription": "Deploy the latest version of the app to production.",
                "taskDate": "2025-03-22",
                "category": "DevOps",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Set Up CI/CD",
                "taskDescription": "Configure CI/CD pipeline for automated deployments.",
                "taskDate": "2025-03-23",
                "category": "DevOps",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Server Maintenance",
                "taskDescription": "Perform routine server maintenance and updates.",
                "taskDate": "2025-03-24",
                "category": "IT Support",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 5,
        "name": "Advait Singh",
        "email": "employee5@example.com",
        "password": "123",
        "taskCounts": {
            "active": 9,
            "newTask": 3,
            "completed": 7,
            "failed": 2
        },
        "tasks": [
            {
                "taskTitle": "Test New Feature",
                "taskDescription": "Perform QA testing on the new feature before release.",
                "taskDate": "2025-03-22",
                "category": "Testing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Fix Security Bug",
                "taskDescription": "Resolve a critical security vulnerability.",
                "taskDate": "2025-03-23",
                "category": "Security",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Improve Documentation",
                "taskDescription": "Update the project documentation with the latest changes.",
                "taskDate": "2025-03-24",
                "category": "Documentation",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 6,
        "name": "Rohan Gupta",
        "email": "e@e.e",
        "password": "123",
        "taskCounts": {
            "active": 6,
            "newTask": 4,
            "completed": 2,
            "failed": 9
        },
        "tasks": [
            {
                "taskTitle": "Test New Feature",
                "taskDescription": "Perform QA testing on the new feature before release.",
                "taskDate": "2025-03-22",
                "category": "Testing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Fix Security Bug",
                "taskDescription": "Resolve a critical security vulnerability.",
                "taskDate": "2025-03-23",
                "category": "Security",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Improve Documentation",
                "taskDescription": "Update the project documentation with the latest changes.",
                "taskDate": "2025-03-24",
                "category": "Documentation",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    }
];



const admin = {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
};

export const setLocalStorage = () =>{
    localStorage.setItem('employee', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employee'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    
    return {employees, admin}
}
