import { Students } from "../pages/admin/students/students.tsx"
import { Teachers } from "../pages/admin/teachers/teachers.tsx"
import { Profile } from "../pages/admin/profile.tsx"
import { Setings } from "../pages/admin/setings.tsx"
import { TeacherDeatil } from "@/pages/admin/teachers/teacher-deatil.tsx"







export default [
    {

        page: Students,
        path: "students"

    },
    {
        path: "teacher/:id",
        page: TeacherDeatil,
    },
    {

        page: Teachers,
        path: "teachers"

    },
    {

        page: Profile,
        path: "profile"

    },
    {

        page: Setings,
        path: "setings"

    },

]