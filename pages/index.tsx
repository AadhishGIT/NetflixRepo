import Billboard from "@/components/Billboard";
import InfoModal from "@/components/InfoModal";
import LandingPageShimmer from "@/components/LandingPageShimmer";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import useBillboard from "@/hooks/useBillboard";
import useFavorites from "@/hooks/useFavorites";
import useInfoModalStore from "@/hooks/useInfoModalStore";
import useMovieList from "@/hooks/useMovieList";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default function Home() {
  const { data: movies = [], isLoading } = useMovieList();
  const { data: favorites = [], isLoading: isFavoritesLoading } =
    useFavorites();
  const { isOpen, closeModal } = useInfoModalStore();
  const { data: billBoardData, isLoading: isBillBoardLoading } = useBillboard();
  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      {isLoading || isFavoritesLoading || isBillBoardLoading ? (
        <LandingPageShimmer />
      ) : (
        <>
          {billBoardData && <Billboard />}
          <div className="pb-40">
            <MovieList title="Trending Now" data={movies} />
            <MovieList title="My List" data={favorites} />
          </div>
        </>
      )}
    </>
  );
}
