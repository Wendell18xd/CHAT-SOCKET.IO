import React, { useContext, useEffect, createContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { ChatContext } from "./chat/ChatContext";
import { useSocket } from "../hooks/useSocket";
import { types } from "../types/types";
import { scrollToBottonAnimated } from "../helpers/scrollToBotton";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { socket, online, conectarSocket, desconectarSocket } = useSocket(
    "https://chat-server-socketio-wendell.herokuapp.com/"
  );
  const { auth } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    if (auth.logged) {
      conectarSocket();
    }
  }, [auth, conectarSocket]);

  useEffect(() => {
    if (!auth.logged) {
      desconectarSocket();
    }
  }, [auth, desconectarSocket]);

  //Escuchar los cambios en los usuarios conectados
  useEffect(() => {
    socket?.on("lista-usuarios", (usuarios) => {
      dispatch({
        type: types.usuariosCargados,
        payload: usuarios,
      });
    });
  }, [socket, dispatch]);

  useEffect(() => {
    socket?.on("mensaje-personal", (mensajes) => {
      dispatch({
        type: types.nuevoMensaje,
        payload: mensajes,
      });

      scrollToBottonAnimated("mensajes");
      document.querySelector("#sendMessages").focus();
    });
  }, [socket, dispatch]);

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
