import { useEffect } from "react";
import Table from "../../components/ui/Table/Table"
import { useAdmin, useTeacher } from "../../store/useSelector"
import { setTeacher } from "../../store/Slices/teacher/teacher";
import { useDispatch } from "react-redux";
import axios from "axios";
import { api } from "../../components/utils";
import { toast } from "react-toastify";

const Teacher = () => {
    const admin = useAdmin()
    const dispatch = useDispatch()
    const teacher = useTeacher()
    const fetchData = async () => {
        try {
            const responses = await axios.get(api + "/admin", {
                headers: {
                    Authorization: `Bearer ${admin.admin?.token}`,
                },
            });

            dispatch(setTeacher(responses.data.teacher));
        } catch (e: any) {
            toast.error(e.message || "Error");
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responses = await axios.get(api + "/teacher", {
                    headers: {
                        Authorization: `Bearer ${admin.admin?.token}`,
                    },
                });

                dispatch(setTeacher(responses.data.teacher));
                toast.success("List of Teahcer");
            } catch (e: any) {
                toast.error(e.message || "Error");
            }
        };
        fetchData();
    }, []);
    const TeacherTable = () => {
        return teacher.map((item, index) => {
            return <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.lastName}</td>
                <td>{item.year}</td>
                <td>{item.phone}</td>
                <td className="actions">
                    <button className="btn-delete">Delete</button>
                    <button className="btn-update">Update</button>
                </td>
            </tr>
        })
    }
    return (
        <div className="route-container">
            <button className="create-btn">create Teacher</button>
            <Table head={['id', 'name', 'lastName', 'year', 'phone', 'actions']} body={<TeacherTable />} foot={<td>Teahcer: {teacher.length}</td>} />
        </div>
    )
}

export default Teacher