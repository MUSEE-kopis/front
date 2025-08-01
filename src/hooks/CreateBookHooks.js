import { useEffect, useState, useRef } from 'react';
import { getDetailPerformanceApi } from '../api/performanceApi';
import { postTicketBookApi, updateTicketBookApi, postGenreApi, getActorSearchApi, patchGenreApi } from '../api/ticketBookApi';
import { postPhotosApi } from '../api/photosApi';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import { format, parse } from 'date-fns';
import { GENRE_MAP } from '../constants/content';

export const useCreateBook = (id) => {
  const navigate = useNavigate();
  const location = useLocation();
  const fileRef = useRef(null);
  const [editData, setEditData] = useState(location.state?.data);
  const [previewImages, setPreviewImages] = useState([]);
  const [performanceData, setPerformanceData] = useState({});
  const [uploadPhotos, setUploadPhotos] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [modalOpen, setModalOpen] = useState({
    castMember: false,
    genre: false,
    addCastMember: false,
  });
  const [sendData, setSendData] = useState({
    performanceId: '',
    viewDate: '',
    castMembers: [],
    content: '',
    star: 0,
    visible: true,
    photos: []
  });
  const [genreData, setGenreData] = useState([]);
  const [editId, setEditId] = useState(null);
  const buttonDisabled = sendData.viewDate === '' || sendData.castMembers.length === 0 || sendData.content === '' || sendData.star === 0 || genreData.length === 0;
  const existEditImages = editData?.photos.length > 0;
  const [selectedGenreDatas, setSelectedGenreDatas] = useState('');
  const [searchVal, setSearchVal] = useState('');
  const [searchCastMembers, setSearchCastMembers] = useState([]);
  const [selectedCastMembers, setSelectedCastMembers] = useState({});
  const [addCastMemberValue, setAddCastMemberValue] = useState('');

  useEffect(() => {
    setSelectedGenreDatas(genreData.map(genre => GENRE_MAP[genre]).join(', '));
  }, [genreData])

  const handleGenreSelect = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter(g => g !== genre));
    } else {
      if (selectedGenres.length < 3) {
        setSelectedGenres([...selectedGenres, genre]);
      }
    }
  }

  const handleGenreSave = () => {
    setGenreData(selectedGenres);
    setModalOpen({
      ...modalOpen,
      genre: false,
    });
  }

  const openGenreModal = () => {
    setModalOpen({
      ...modalOpen,
      genre: true,
    });
  }

  const fetchDetail = async (performanceId) => {
    const response = await getDetailPerformanceApi(performanceId);
    setSendData((prev) => ({
      ...prev,
      performanceId: response.data.id,
    }));
    setPerformanceData(response.data);
    setSearchCastMembers(response.data.castMembers)
  };

  const handleFileChange = (e) => {
    const fileArr = Array.from(e.target.files);
    setUploadPhotos(fileArr);

    const fileURLs = fileArr.map(file => URL.createObjectURL(file));
    setPreviewImages(fileURLs);
  }

  const handleAddPhoto = () => {
    fileRef.current.click();
  };

  const handleDeletePhoto = (index, isUpload = false) => {
    const newPhotos = [...uploadPhotos];
    newPhotos.splice(index, 1);
    if (isUpload) {
      setUploadPhotos(newPhotos);
      const fileURLs = newPhotos.map(file => URL.createObjectURL(file));
      setPreviewImages(fileURLs);
    } else {
      setEditData({ ...editData, photos: editData.photos.filter((_, i) => i !== index) });
    }
  };

  const handleDataChange = (type, value) => {
    setSendData({ ...sendData, [type]: value });
  };

  const handleUploadPhotos = async () => {
    const formData = new FormData();
    uploadPhotos.forEach(photo => {
      formData.append('photos', photo);
    });
    try {
      const response = await postPhotosApi(formData);
      if (response.status === 200 || response.status === 201) {
        const updateData = { ...sendData, photos: response.data };
        return updateData;
      }
    } catch (error) {
      console.error(error);
    }
    return null;
  }

  const handleCreate = async () => {
    try {
      const data = uploadPhotos.length > 0 ? await handleUploadPhotos() : sendData;
      const response = await postTicketBookApi(data);
      if (response.status === 200 || response.status === 201) {
        const genres = genreData;
        const performanceId = sendData.performanceId;
        const genreResponse = await postGenreApi(genres, performanceId);
        if (genreResponse.status === 200 || genreResponse.status === 201) {
          navigate('/ticket');
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleEdit = async () => {
    try {
      const photos = editData.photos.map(photo => photo.url);
      if (uploadPhotos.length > 0) {
        const uploadPhotoUrls = await handleUploadPhotos();
        photos.push(...uploadPhotoUrls.photos);
      }
      const { performanceId, ...dataWithoutPerformanceId } = sendData;
      dataWithoutPerformanceId.photos = photos;
      const response = await updateTicketBookApi(editId, dataWithoutPerformanceId);

      if (response.status === 200 || response.status === 201) {
        const genreResponse = await patchGenreApi(genreData, performanceId);
        if (genreResponse.status === 200 || genreResponse.status === 201) {
          navigate('/ticket');
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  const openCastMemberModal = () => {
    setModalOpen({
      ...modalOpen,
      castMember: true,
    });
  }

  useEffect(() => {
    if (id) {
      fetchDetail(id);
    }
  }, [id]);

  useEffect(() => {
    if (editData) {
      setEditId(editData.id);

      const parsedDate = parse(editData.viewDate, 'yyyy-MM-dd a hh:mm', new Date());
      const formattedDate = format(parsedDate, "yyyy-MM-dd'T'HH:mm");

      // selectedCastMembers 초기화
      const initialSelectedCastMembers = {};
      editData.reviewResponse.castMembers.forEach(member => {
        initialSelectedCastMembers[member.actorId] = member;
      });
      setSelectedCastMembers(initialSelectedCastMembers);

      setGenreData(editData.genres);
      setSelectedGenres(editData.genres);

      setSendData({
        performanceId: editData.performanceId,
        viewDate: formattedDate,
        castMembers: editData.reviewResponse.castMembers,
        content: editData.reviewResponse.content,
        star: editData.reviewResponse.star,
        visible: editData.reviewResponse.visible,
        photos: editData.photos,
      });
    } else {
      setEditId(null);
    }
  }, [editData]);

  const handleCastMemberSearch = async () => {
    const response = await getActorSearchApi(searchVal);
    setSearchCastMembers(response)
  }

  const isSelected = (actorId) => {
    return selectedCastMembers[actorId]
  }

  const handleSelectCastMember = (event, actorId, member) => {
    event.stopPropagation();
    if (isSelected(actorId)) {
      const newSelectedCastMembers = {...selectedCastMembers};
      delete newSelectedCastMembers[actorId];
      setSelectedCastMembers(newSelectedCastMembers);
    } else {
      setSelectedCastMembers({...selectedCastMembers, [actorId]: {actorId, name: member.name, url: member.url}})
    }
  }

  const handleAddSelectedCastMember = () => {
    setModalOpen({
      ...modalOpen,
      castMember: false,
    });
  }

  const openAddCastMemberModal = () => {
    setModalOpen({
      ...modalOpen,
      castMember: false,
      addCastMember: true,
    });
  }

  const goBackAddCastMemberModal = () => {
    setModalOpen({
      ...modalOpen,
      castMember: true,
      addCastMember: false,
    });
  }

  const handleAddCastMember = () => {
    const customId = parseInt(Date.now());
    const updatedSelectedCastMembers = {
      ...selectedCastMembers,
      [customId]: { actorId: customId, name: addCastMemberValue, url: '' }
    };
    
    setSelectedCastMembers(updatedSelectedCastMembers);
    setAddCastMemberValue('');

    goBackAddCastMemberModal();
  }

  const handleCloseModal = (modal) => {
    setModalOpen({
      ...modalOpen,
      [modal]: false,
    });
  }

  useEffect(() => {
    if (!searchVal) {
      setSearchCastMembers(performanceData.castMembers)
    }
  }, [searchVal])

  useEffect(() => {
    if (!editData) { // editData가 없을 때만 실행
      const sendCastMembers = Object.values(selectedCastMembers);
      setSendData({
        ...sendData,
        castMembers: sendCastMembers
      })
    }
  }, [selectedCastMembers, editData])

  useEffect(() => {
    console.log('sendData: ', sendData)
  }, [sendData])

  return {
    existEditImages,
    buttonDisabled,
    editData,
    editId,
    fileRef,
    sendData,
    genreData,
    previewImages,
    performanceData,
    selectedGenres,
    selectedGenreDatas,
    selectedCastMembers,
    modalOpen,
    searchCastMembers,
    isSelected,
    handleEdit,
    handleCreate,
    setSendData,
    handleFileChange,
    handleAddPhoto,
    handleDeletePhoto,
    handleDataChange,
    handleGenreSelect,
    handleGenreSave,
    openGenreModal,
    handleCastMemberSearch,
    setSearchVal,
    handleSelectCastMember,
    handleAddSelectedCastMember,
    openCastMemberModal,
    openAddCastMemberModal,
    handleAddCastMember,
    handleCloseModal,
    goBackAddCastMemberModal,
    setAddCastMemberValue,
    addCastMemberValue,
  }
}