import { useEffect, useState, useRef } from 'react';
import { getDetailPerformanceApi } from '../api/performanceApi';
import { postTicketBookApi, updateTicketBookApi, postGenreApi, getActorSearchApi } from '../api/ticketBookApi';
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
  const [isGenreSelectModalOpen, setIsGenreSelectModalOpen] = useState(false);
  const [sendData, setSendData] = useState({
    performanceId: '',
    viewDate: '',
    castMembers: '',
    content: '',
    star: 0,
    visible: true,
    photos: []
  });
  const [genreData, setGenreData] = useState([]);
  const [editId, setEditId] = useState(null);
  const buttonDisabled = sendData.viewDate === '' || sendData.castMembers === '' || sendData.content === '' || sendData.star === 0 || genreData.length === 0;
  const existEditImages = editData?.photos.length > 0;
  const selectedGenreDatas = selectedGenres.map(genre => GENRE_MAP[genre]).join(', ');
  const [groupedCastMembers, setGroupedCastMembers] = useState({});
  const [searchVal, setSearchVal] = useState('');
  const [selectedCastMembers, setSelectedCastMembers] = useState({
    '기타': [],
  });
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
    setIsGenreSelectModalOpen(false);
  }

  const handleGenreOpenModal = () => {
    setIsGenreSelectModalOpen(true);
  }

  const fetchDetail = async (performanceId) => {
    const response = await getDetailPerformanceApi(performanceId);
    setSendData((prev) => ({
      ...prev,
      performanceId: response.data.id,
    }));
    setPerformanceData(response.data);
    handleGroupCastMembers(response.data.castMembers);
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
      sendData.photos = photos;
      const response = await updateTicketBookApi(editId, sendData);
      if (response.status === 200 || response.status === 201) {
        navigate('/ticket');
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleGroupCastMembers = (castMembers) => {
    const groupedCastMembers = castMembers.reduce((acc, member) => {
      const role = member.role ? member.role : '기타';
      if (!acc[role]) {
        acc[role] = [];
      }
      acc[role].push(member);
      return acc;
    }, {});
    setGroupedCastMembers(groupedCastMembers);
  }

  const navigateToSearchCastMembers = () => {
    navigate(`/search-cast-member/${performanceData.id}`, { state: { groupedCastMembers } });
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
    console.log('searchVal: ', searchVal)
    const response = await getActorSearchApi(searchVal);
    console.log('response: ', response)
  }

  const handleSelectCastMember = (member) => {
    const role = member.role;
    if (role) {
      setSelectedCastMembers({
        ...selectedCastMembers,
        [role]: member.name
      })
    } else {
      if (!selectedCastMembers['기타'].includes(member.name)) {
        setSelectedCastMembers({
          ...selectedCastMembers,
          '기타': [...selectedCastMembers['기타'], member.name]
        })
      } else {
        setSelectedCastMembers({
          ...selectedCastMembers,
          '기타': selectedCastMembers['기타'].filter(name => name !== member.name)
        })
      }
    }
  }

  useEffect(() => {
    console.log('selectedCastMembers: ', selectedCastMembers)
  }, [selectedCastMembers])

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
    isGenreSelectModalOpen,
    selectedGenres,
    selectedGenreDatas,
    selectedCastMembers,
    handleEdit,
    handleCreate,
    setSendData,
    handleFileChange,
    handleAddPhoto,
    handleDeletePhoto,
    handleDataChange,
    handleGenreSelect,
    handleGenreSave,
    handleGenreOpenModal,
    navigateToSearchCastMembers,
    handleCastMemberSearch,
    setSearchVal,
    handleSelectCastMember,
  }
}