import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "2facaa159040472e91428bb3990a4b50"
const token = "007eJxTYOAxi3+6dqrImRajVSZ7l5ZIv/zyQkTBLfP4hCTb8+fsNNYrMBilJSYnJhqaWhqYGJiYG6VaGpoYWSQlGVtaGiSaJJkaSFhsSm4IZGQQe3uSgREKQXwWhtzEzDwGBgAgKh6Q"


export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";