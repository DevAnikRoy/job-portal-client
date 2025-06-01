import {
  createBrowserRouter,
} from "react-router";
import RootesLayout from "./layouts/RootesLayout";
import Home from "../src/pages/home/Home";
import Register from "../src/pages/Register/Register";
import SignIn from "./pages/LogIn/SignIn";
import JobsDetails from "./pages/Jobs Details/JobsDetails";
import PrivetRouter from "./pages/Route/PrivetRouter";
import JobApply from "./pages/JobApply/JobApply";
import MyApplications from "./pages/myApplications/MyApplications";
import AddJobs from "./pages/AddJob/AddJobs";
import MyPostedJobs from "./pages/mypostedJob/MyPostedJobs";
import ViewApplicatons from "./pages/viewApplications/ViewApplicatons";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootesLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/register',
        Component: Register,
      },
      {
        path: '/signIn',
        Component: SignIn,
      },
      {
        path: '/jobs/:id',
        Component: JobsDetails,
        loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
      },
      {
        path: '/myApplications',
        element: <PrivetRouter><MyApplications></MyApplications></PrivetRouter>
      },
      {
        path: '/jobApply/:id',
        element: <PrivetRouter><JobApply></JobApply></PrivetRouter>
      },
      {
        path: '/addJob',
        element: <PrivetRouter><AddJobs></AddJobs></PrivetRouter>
      },
      {
        path: '/myPostedJob',
        element: <PrivetRouter><MyPostedJobs></MyPostedJobs></PrivetRouter>
      },
      {
        path: '/applications/:job_id',
        element: <PrivetRouter><ViewApplicatons></ViewApplicatons></PrivetRouter>,
        loader: ({ params }) => fetch(`http://localhost:3000/applications/job/${params.job_id}`)
      }
    ]
  },
]);

export default router
