import React from "react";
import ContactCard from "../components/ContactCard";
import { useQuery } from "@tanstack/react-query";
import { Breadcrumb } from "../components/Breadcumb";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

function Contact() {
  const query = useQuery({
    queryKey: ["contact"],
    queryFn: () => {
      return axios.get(`${process.env.REACT_APP_API_URL}/contact`, {
        params: {
          populate: "*",
        },
      });
    },
  });
  const { data, isLoading, isError, error } = query;
  if (isLoading)
    return (
      <>
        <Breadcrumb
          className="md:container mx-6 md:mx-auto mt-5 mb-10"
          items={[
            { name: "home", url: "/" },
            { name: "联系我们", url: "/contact" },
          ]}
        />
        <div className="md:container mx-6 md:mx-auto">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            <div className="md:col-span-2">
              <Skeleton className="h-40" />
            </div>
            <Skeleton className="h-40" />
            <Skeleton className="h-40" />
          </div>
        </div>
      </>
    );
  else if (isError) return <>isError</>;
  else {
    const { address, addressLink, qq, phone } = data.data.data.attributes;
    const { title, url } = addressLink;
    return (
      <>
        <Breadcrumb
          className="container mx-6 md:mx-auto mt-5 mb-10"
          items={[
            { name: "home", url: "/" },
            { name: "联系我们", url: "/contact" },
          ]}
        />
        <div className="container mx-6 md:mx-auto">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            <div className="md:col-span-2">
              <ContactCard
                icon={
                  <svg
                    width="40"
                    height="40"
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 2"
                    viewBox="0 0 48 48"
                    id="map"
                  >
                    <polygon
                      fill="#ffd486"
                      points="16.25 19.08 .75 13.269 .75 41.388 16.25 47.2 16.25 19.08"
                    ></polygon>
                    <polygon
                      fill="#ffd486"
                      points="31.75 13.457 31.75 41.388 47.25 47.2 47.25 19.08 31.75 13.457"
                    ></polygon>
                    <polygon
                      fill="#ffc261"
                      points="31.75 13.46 31.75 41.39 16.25 47.2 16.25 19.08 18.71 18.19 20.33 17.6 31.75 13.46"
                    ></polygon>
                    <path
                      fill="#ee6148"
                      d="M44.03,13.08a12.244,12.244,0,0,1-1.01,4.88c-.15.34-.31.67-.49,1l-.02.03L33.87,31.73l-.58.85-1.54,2.27-.07-.11L20.99,18.99l-.01-.01a12.465,12.465,0,0,1-.65-1.38,12.321,12.321,0,0,1-.86-4.52,12.061,12.061,0,0,1,1.96-6.63A11.9,11.9,0,0,1,24.76,3a10.125,10.125,0,0,1,1.21-.75A12.114,12.114,0,0,1,31.75.8,12.283,12.283,0,0,1,44.03,13.08Z"
                    ></path>
                    <path
                      fill="#ff6e56"
                      d="M44.03,13.08a12.244,12.244,0,0,1-1.01,4.88c-.15.34-.31.67-.49,1l-.02.03L33.87,31.73l-.58.85L22.94,17.32l-.01-.01A12.267,12.267,0,0,1,24.76,3a10.125,10.125,0,0,1,1.21-.75A12.114,12.114,0,0,1,31.75.8,12.283,12.283,0,0,1,44.03,13.08Z"
                    ></path>
                    <path
                      fill="#ffd486"
                      d="M39.41,13a7.627,7.627,0,0,1-1.85,4.98c-.15.17-.3.33-.47.49a7.651,7.651,0,0,1-13-5.47,7.674,7.674,0,0,1,4.67-7.06h.01a7.809,7.809,0,0,1,2.98-.6A7.661,7.661,0,0,1,39.41,13Z"
                    ></path>
                    <path
                      fill="#ffc261"
                      d="M38.03,14.82a7.507,7.507,0,0,1-.94,3.65,7.651,7.651,0,0,1-13-5.47,7.68,7.68,0,0,1,.93-3.66,7.3,7.3,0,0,1,2.36-1.58h.01a7.809,7.809,0,0,1,2.98-.6A7.661,7.661,0,0,1,38.03,14.82Z"
                    ></path>
                    <path
                      fill="#ffb044"
                      d="M31.68,34.74l-1.19,1.75L19.73,20.63l-.01-.01a12.088,12.088,0,0,1-1.01-2.43l1.62-.59a12.465,12.465,0,0,0,.65,1.38l.01.01Z"
                    ></path>
                  </svg>
                }
                title="地址"
                description={address}
                buttonContent={title}
                buttonLink={url}
              />
            </div>
            <ContactCard
              icon={
                <a href="https://qq.com" target="_blank" rel="noreferrer">
                  <svg
                    width="40"
                    height="40"
                    className="w-12 h-12"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="QQ"
                    viewBox="0 0 512 512"
                    id="qq"
                  >
                    <rect width="512" height="512" fill="#fff" rx="15%"></rect>
                    <path
                      fill="#ffc107"
                      d="M261 398a57 32 0 0 0 114 0 57 32 0 0 0-114 0zm-124 0a57 32 0 0 0 114 0 57 32 0 0 0-114 0z"
                    ></path>
                    <path
                      fill="#37474f"
                      d="M238 149a10 14 0 0 1-20 0 10 14 0 0 1 20 0zm46-13c-6 0-10 6-10 13 0 8 4-4 10-4 5 0 9 12 9 4 0-7-4-13-9-13zm27 14a23 33 0 0 1-46 0 23 33 0 0 1 46 0zm-64 0a23 33 0 0 1-46 0 23 33 0 0 1 46 0zm127 79v-56a119 119 0 0 0-237 0v56c-18 25-35 55-37 78 0 44 13 40 13 40 5 0 15-9 23-20 19 55 65 93 120 93s101-38 120-93c8 11 18 20 23 20 0 0 13 4 13-40 0-23-17-54-37-78z"
                    ></path>
                    <path
                      fill="#ffc107"
                      d="M183 204a73 13 0 1 1 146 0 73 23 0 1 1-146 0z"
                    ></path>
                    <path
                      fill="#eceff1"
                      d="M171 237a88 132 0 1 0 170 0z"
                    ></path>
                    <path
                      fill="#ff3d00"
                      d="M391 220c-4-14-9-20-19-12a235 225 0 0 1-230 0c-10-7-15-2-19 12s-6 18 6 26l32 15c-6 32-5 63-5 65 1 13 12 12 27 12 14-1 26 0 26-15 0-8 0-27 3-46 15 3 29 5 46 5 67 0 126-35 127-36 11-7 9-11 6-26z"
                    ></path>
                  </svg>
                </a>
              }
              title="qq"
              description={qq}
              buttonContent="加qq号"
            />
            <ContactCard
              icon={
                <svg
                  width="40"
                  height="40"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  id="phone"
                >
                  <path
                    fill="#b5e3ff"
                    d="M26.27,23.76l-2.82-2.83a3,3,0,0,0-4.25,0l-1.45,1.45a26.14,26.14,0,0,1-4.51-3.62,26.62,26.62,0,0,1-3.62-4.51l1.45-1.45a3,3,0,0,0,0-4.25L8.24,5.73a2.93,2.93,0,0,0-2.11-.88h0A3,3,0,0,0,4,5.73L2.64,7.08A6.37,6.37,0,0,0,1,12.33c.32,3.75,2.78,8.26,6.57,12.06S15.92,30.64,19.67,31a7.87,7.87,0,0,0,.84,0,6.07,6.07,0,0,0,4.41-1.64L26.27,28a3,3,0,0,0,.88-2.13A2.93,2.93,0,0,0,26.27,23.76Z"
                  ></path>
                  <path
                    fill="#9ed4ef"
                    d="M26.27,26.08l-1.35,1.35a6,6,0,0,1-4.41,1.65c-.28,0-.56,0-.84,0-3.75-.32-8.26-2.78-12.06-6.58S1.43,14.28,1.06,10.55a8.77,8.77,0,0,0,0,1.78c.32,3.75,2.78,8.26,6.57,12.06S15.92,30.64,19.67,31a7.87,7.87,0,0,0,.84,0,6.07,6.07,0,0,0,4.41-1.64L26.27,28a3,3,0,0,0,.88-2.13,2.75,2.75,0,0,0-.17-.95A2.92,2.92,0,0,1,26.27,26.08Z"
                  ></path>
                  <path
                    fill="#c9c1f5"
                    d="M30,17.11h0a1,1,0,0,1-1-1A13,13,0,0,0,16,3a1,1,0,1,1,0-2A15,15,0,0,1,31,16.12,1,1,0,0,1,30,17.11Z"
                  ></path>
                  <path
                    fill="#c9c1f5"
                    d="M23.68,16.43h0a1,1,0,0,1-1-1,6,6,0,0,0-6.05-6.08,1,1,0,1,1,0-2,8,8,0,0,1,8.05,8.1A1,1,0,0,1,23.68,16.43Z"
                  ></path>
                  <path
                    fill="#b0aae8"
                    d="M31,16.12a1,1,0,0,1-1,1A15,15,0,0,0,15,2a1,1,0,0,1,1-1A15,15,0,0,1,31,16.12Z"
                  ></path>
                  <path
                    fill="#b0aae8"
                    d="M24.68,15.44a1,1,0,0,1-1,1,8,8,0,0,0-8-8.09,1,1,0,0,1,1-1,8,8,0,0,1,8.05,8.1Z"
                  ></path>
                </svg>
              }
              title="电话"
              description={phone}
              buttonContent="拨打电话"
            />
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
