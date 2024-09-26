"use client";
import { FC, ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState, AppDispatch } from "@/redux/store";
import { setLoginStatus } from "@/redux/features/authSlice";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  if (!isAuthenticated) {
    router.push("/");
    dispatch(setLoginStatus(true));
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
