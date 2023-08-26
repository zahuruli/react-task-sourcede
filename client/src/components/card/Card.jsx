import React, { useEffect, useState } from "react";
import "./card.css";
import { PiChatsCircleBold } from "react-icons/pi";
import { LiaPaperclipSolid } from "react-icons/lia";
import { BiCalendar } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { WiMoonThirdQuarter } from "react-icons/wi";
import { Button, Modal } from "antd";
import axios from "axios";
import { toast } from "react-hot-toast";

const Card = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [count, setCount] = useState("");
  const [avatar, setAvatar] = useState();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //total image :
  const totalImage = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/v1/task/all-photos`
      );
      setCount(data?.total);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    totalImage();
  });

  //uploadFile :
  const uploadFile = async () => {
    try {
      const formData = new FormData();
      formData.append("avatar", avatar);
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/task/upload-file`,
        formData
      );
      console.log(data?.photos);
      toast.success(data?.message);
      totalImage();
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
      toast.error(
        "File size must be less than 1mb & .jpg .png or .jpeg formate allowed"
      );
    }
  };
  return (
    <div className="card-container">
      <div className="card ">
        <div className="header">
          <div className="left-head">
            <img src="./img1.png" alt="img1" className="img1" />
            <span className="client-name"> Client Name</span>
          </div>
          <div className="right-head">
            <img src="./img2.png" alt="img2" className="img2" />
            <span className="client-name"> Sadik Istiak</span>
          </div>
        </div>
        <div className="body">
          <div className="left-body">
            <span className="leftB-icon">
              {" "}
              <FaLayerGroup />{" "}
            </span>
            <span className="leftB-text">
              Lorem ipsum dolor sit amet curn...
            </span>
          </div>
          <div className="right-body">
            <span className="rightB-icon">
              <FaClipboardList />
            </span>
            <span className="rightB-text">1/2</span>
          </div>
        </div>
        <div className="footer ">
          <div className="footer-container">
            <div className="img3-div">
              <img src="./img3.png" alt="img2" className="img3" />
            </div>
            <div className="img4-div">
              {" "}
              <img src="./img4.png" alt="img4" className="img4" />
            </div>
            <div className="div-12">
              <span>12+</span>
            </div>
            <div className="div-15">
              <span>
                {" "}
                <PiChatsCircleBold />{" "}
              </span>
              <span className="">15</span>
            </div>
            <div className="avatar-div">
              <span className="upload-icon" onClick={showModal}>
                {" "}
                <LiaPaperclipSolid />
              </span>
              <span className="avatar-span">{count}</span>
            </div>
            <div className="date-div">
              <span className="date-icon">
                {" "}
                <BiCalendar />
              </span>
              <span className="date-span">
                <div>30-12-2022</div>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* =============modal========== */}
      <div className="modal">
        <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
          <h2 className="text-center">UPLOAD FILE</h2>
          <p className="formate">
            (File size must be less than 1mb & only .jpg .png or .jpeg formate
            allowed! )
          </p>
          <div className="horizontal">
            {" "}
            <hr className="modal-hr" />
          </div>
          <div className="p-4">
            <div className="img-input text-center">
              <label className="btn btn-outline-secondary col-md-12">
                {avatar ? avatar.name : "Select Photo"}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setAvatar(e.target.files[0])}
                  hidden
                />
              </label>
            </div>
            {avatar && (
              <div className="text-center">
                <img
                  src={URL.createObjectURL(avatar)}
                  alt="product-photo"
                  height={"150px"}
                  className="image img-responsive"
                />
              </div>
            )}
            <div className="img-btn">
              <button className="btn-primary" onClick={uploadFile}>
                Upload
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Card;
