import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import makeStyles from "@mui/styles/makeStyles";
import { useEffect, useState } from "react";
import {
  IHistory,
  IRaffle,
  IRawHistory,
} from "renderer/interfaces/pages/dashboard";
import { History } from "./History";
import {
  fetchActiveEvent,
  fetchAllEvents,
  fetchCurrentHashrate,
} from "services/api.service";
import { CircularProgressLoader } from "renderer/components/CircularLoader";
import Typography from "renderer/components/atoms/TextStyles";
import { GameInstructionsBox } from "renderer/components/components/Gameroom/components/GameroomInstructions";
import { Stack } from "@mui/material";
import { GameRoomGiveAwayCard } from "renderer/components/components/Gameroom/GameRoomGiveawayCard";
import { MiningAllocationWidget } from "renderer/components/components/StartMining/MininAllocationWidget";
import { SteamAmazonTabs } from "renderer/components/components/Gameroom/components/SteamAmazonTabs";
import { CurrentDrawings } from "renderer/components/components/Gameroom/components/CurrentDrawings";

export const GameRoom = () => {
  const [raffles, setRaffles] = useState<IRaffle[]>([]);
  const [history, setHistory] = useState<IHistory[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isGiveAwayClicked, setIsGiveAwayClicked] = useState({
    isMoneroClicked: false,
    isGiveAwayGiftCardClicked: false,
  });
  const handleGiveAwayGiftCardCliked = () => {
    setIsGiveAwayClicked((prevState) => ({
      ...prevState,
      isGiveAwayGiftCardClicked: !prevState.isGiveAwayGiftCardClicked,
    }));
  };
  const handleMoneroCardCliked = () => {
    setIsGiveAwayClicked((prevState) => ({
      ...prevState,
      isGiveAwayGiftCardClicked: !prevState.isMoneroClicked,
    }));
  };
  useEffect(() => {
    const fetchActiveEventsData = async () => {
      try {
        const activeEventsData = await fetchActiveEvent();
        if (activeEventsData) {
          setRaffles(activeEventsData);
        }
      } catch (error) {
        console.error("Error fetching active events data:", error);
      }
    };
    fetchActiveEventsData();
  }, []);

  useEffect(() => {
    const fetchAllEventsData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchAllEvents();
        if (data) {
          buildHistory(data);
        }
      } catch (error) {
        console.error("Error fetching all events data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllEventsData();
  }, []);

  const buildHistory = (data: IRawHistory[]) => {
    const historyMap: any = {};
    const history = [];

    data.forEach((entry) => {
      let cur = historyMap[entry.contentId];
      if (cur) {
        cur.tickets += entry.tickets;
        cur.purchased = Math.max(cur.purchased, entry.purchased);
        if (entry.status == 2) {
          cur.status = 2;
        }
      } else {
        cur = Object.assign({}, entry);
      }

      historyMap[entry.contentId] = cur;
    });

    for (const entry in historyMap) {
      history.push(historyMap[entry]);
    }

    console.log(history);

    setHistory(history);
  };

  return (
    <Grid
      container
      item
      style={{ width: "calc(100% - 406px)", marginLeft: "406px" }}
    >
      {isLoading ? (
        <Box
          sx={{
            width: {
              xs: "100vw",
              sm: "100vw",
              md: "calc(100% - 406px)",
              lg: "calc(100% - 460px)",
            },
            marginLeft: "406px",
            padding: "1.5rem",
          }}
        >
          <CircularProgressLoader isLoaderInMainApp={false} />
        </Box>
      ) : (
        <>
          <Stack sx={{ padding: "24px 0 0 21px" }}>
            <Box>
              <Typography variant="heading1" color="#EAEAEA">
                Game Room
              </Typography>
            </Box>
            <GameInstructionsBox />
            <Grid itme container lg={12}>
              <Grid lg={4}>
                <GameRoomGiveAwayCard
                  giveAwayTitle="Monero Giveaways"
                  imgSrc={"/assets/svg/MoneroBalanceIcon.svg"}
                  width="68px"
                  height="68px"
                  isGiveAwayCardClicked={isGiveAwayClicked.isMoneroClicked}
                  onClick={handleMoneroCardCliked}
                />
              </Grid>
              <Grid lg={4}>
                <GameRoomGiveAwayCard
                  giveAwayTitle="Gift Card Giveaways"
                  imgSrc={"/assets/svg/GC.svg"}
                  width="120px"
                  height="68px"
                  isGiveAwayCardClicked={
                    isGiveAwayClicked.isGiveAwayGiftCardClicked
                  }
                  onClick={handleGiveAwayGiftCardCliked}
                />
              </Grid>
              <Grid lg={4}>
                <MiningAllocationWidget />
              </Grid>
            </Grid>
            {/* <Box
              sx={{
                display: "flex",
                paddingTop: "32px",
                paddingBottom: "32px",
                flexWrap: "wrap",
                width: "100%",
                gap: "20px",
                // gridTemplateColumns: "2fr 1.5fr",
              }}
            >
              <Box sx={{ display: "flex", gap: "20px" }}>
                <GameRoomGiveAwayCard
                  giveAwayTitle="Monero Giveaways"
                  imgSrc={"/assets/svg/MoneroBalanceIcon.svg"}
                  width="68px"
                  height="68px"
                  isGiveAwayCardClicked={isGiveAwayClicked.isMoneroClicked}
                  onClick={handleMoneroCardCliked}
                />
                <GameRoomGiveAwayCard
                  giveAwayTitle="Gift Card Giveaways"
                  imgSrc={"/assets/svg/GC.svg"}
                  width="120px"
                  height="68px"
                  isGiveAwayCardClicked={
                    isGiveAwayClicked.isGiveAwayGiftCardClicked
                  }
                  onClick={handleGiveAwayGiftCardCliked}
                />
              </Box>
              <Box>
                <MiningAllocationWidget />
              </Box>
            </Box> */}
            <CurrentDrawings />
            <Box sx={{ paddingTop: "32px", maxWidth: "1473px" }}>
              <History history={history} />
            </Box>
          </Stack>
        </>
      )}
    </Grid>
  );
};
