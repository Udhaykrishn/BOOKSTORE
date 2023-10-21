import { useState } from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import {useSnackbar} from 'notistack'

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const {enqueueSnackbar} = useSnackbar();
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:3003/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Deletedd Successfully",{variant:"success"})
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error",{variant:"error"})
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h2 className="text-3xl my-4">Delete Book</h2>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h2 className="text-2xl">Are you Sure You Want to Delete this Book?</h2>

        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDeleteBook}
          
        >Yes,Delete it</button>
      </div>
    </div>
  );
};

export default DeleteBook;
