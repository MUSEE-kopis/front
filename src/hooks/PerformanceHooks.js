import { useEffect, useState} from "react";
import { useNavigate } from "react-router";
import { getCustomPerformanceApi, getPopularPerformanceApi, getRecommendPerformanceApi, getRandomPerformanceApi, getSearchPerformanceApi } from "../api/performanceApi";
import { useDispatch, useSelector } from "react-redux";
import { setPopularDatas } from "../store/slices/popularSlice";

export const usePerformance = () => {
  const navigate = useNavigate();
  const [customPerformances, setCustomPerformances] = useState([]);
  const [recommendPerformances, setRecommendPerformances] = useState([]);
  const [randomPerformances, setRandomPerformances] = useState([]);
  const { popularPerformances } = useSelector(state => state.popular.value);
  const [searchVal, setSearchVal] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const dispatch = useDispatch();

  const fetchCustomPerformances = async () => {
    try {
      const response = await getCustomPerformanceApi();
      setCustomPerformances(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const fetchRecommendPerformances = async () => {
    try {
      const response = await getRecommendPerformanceApi();
      setRecommendPerformances(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const fetchPopularPerformances = async () => {
    try {
      const response = await getPopularPerformanceApi();
      dispatch(setPopularDatas(response.data));
      // setPopularPerformances(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const fetchRandomPerformances = async () => {
    try {
      const response = await getRandomPerformanceApi();
      setRandomPerformances(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleGoDetail = (performanceId) => {
    navigate(`/detail`, { state: { performanceId }});
  }

  const handleSearch = async () => {
    try {
      const response = await getSearchPerformanceApi(searchVal);
      setSearchResult(response.data);
    } catch(error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCustomPerformances();
    fetchRecommendPerformances();
    fetchRandomPerformances();
    fetchPopularPerformances();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (searchVal === '') {
      setSearchResult([]);
    }
  }, [searchVal])

  return {
    searchResult,
    searchVal,
    customPerformances,
    randomPerformances,
    recommendPerformances,
    popularPerformances,
    setSearchVal,
    handleGoDetail,
    handleSearch,
  }
}