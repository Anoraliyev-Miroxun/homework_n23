import { Students } from "../pages/admin/students/students.tsx"
import { Teachers } from "../pages/admin/teachers/teachers.tsx"
import { Profile } from "../pages/admin/profile.tsx"
import { Setings } from "../pages/admin/setings.tsx"
import { TeacherDeatil } from "@/pages/admin/teachers/teacher-deatil.tsx"
import { Groups } from "@/pages/admin/groups/groups.tsx"







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
        path: "groups",
        page: Groups,
    },
    {
        path: "group/:id",
        page: Groups,
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