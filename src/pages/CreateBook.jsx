import React from "react";
import styled from "styled-components";
import CreateBookHeader from "../components/pages/createBook/CreateBookHeader";
import { CalendarIcon, CastIcon, LockIcon, MapIcon, ReviewIcon, PlusIcon, DeleteImageIcon, GenreIcon, MemberPlusIcon } from "../assets/icons";
import { UnselectCastMemberIcon } from "../assets/ticketbook";
import { Div, Text, TextArea, Button } from "../components/common/div";
import { GRAY2, GRAY3, GRAY4, GRAY5, NAVY } from "../constants/color";
import StarRatings from 'react-star-ratings';
import { useParams } from "react-router-dom";
import { useCreateBook } from "../hooks/CreateBookHooks";
import { GenreSelectModal } from "../components/modal/GenreSelectModal";
import { SearchCastMemberModal } from "../components/modal/SearchCastMemberModal";
import { AddCastMemberModal } from "../components/modal/AddCastMemberModal";

const Poster = styled.img`
  width: 166px;
  height: 226px;
  border-radius: 16px;
`;

const InputItem = styled(Div)`
  display: flex;
  justify-content: start;
  border-bottom: 1px solid ${GRAY2};
  width: 100%;
  height: 43px;
  padding: 0 18px;
  &:last-child {
    border-bottom: none;
  }
`;

const Input = styled.input`
  border: none;
  flex-grow: 1;
  &::placeholder {
    color: ${GRAY3};
  }
`;

const AddPhoto = styled(Div)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  background-color: ${GRAY2};
  border: 1px solid ${GRAY4};
  border-radius: 10px;
  height: 110px;
  cursor: pointer;
`;

const DeletePhotoSvg = styled(DeleteImageIcon)`
  position: absolute;
  top: 6px;
  right: 6px;
  cursor: pointer;
`;

const PhotoContainer = styled.div`
  border: solid 1px #f1f1f1;
  border-radius: 10px;
  width: calc((100% - 16px) / 3);
  aspect-ratio: 1/1;
  margin-bottom: 30px;
  &:nth-child(2) {
    margin-right: 8px;
    margin-left: 8px;
  }
`;

const CastMemberLabel = styled(Text)`
  color: #000;
  border: 1px solid #898A8D;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: rgba(217, 217, 217, 0.4);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const CreateBook = () => {
  const id = useParams().performanceId || null;
  const {
    buttonDisabled,
    editId,
    editData,
    fileRef,
    previewImages,
    performanceData,
    sendData,
    modalOpen,
    selectedGenres,
    selectedGenreDatas,
    searchCastMembers,
    selectedCastMembers,
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
    handleAddSelectedCastMember,
    setSearchVal,
    handleSelectCastMember,
    openCastMemberModal,
    openAddCastMemberModal,
    handleAddCastMember,
    handleCloseModal,
    goBackAddCastMemberModal,
    setAddCastMemberValue,
    addCastMemberValue,
  } = useCreateBook(id);
  
  return (
    <>
      <CreateBookHeader />
      <Div $flex={true} $direction='column' $margin='73px 0 0'>
        <Div $flex={true} $direction='column' $align='center'>
          <Poster 
            src={performanceData?.poster}
            alt="poster"
          />
          <Text $size={14} $weight='BOLD' $margin='12px 0 0'>
            {performanceData?.performanceName}
          </Text>
        </Div>
        <Div $width='100%' $margin='30px 0 0'>
          <InputItem>
            <Div $width='43px' $grow='0'>
              <CalendarIcon />
            </Div>
            <Input 
              type="datetime-local" 
              onChange={e => handleDataChange('viewDate', e.target.value)} 
              value={sendData?.viewDate || ''}
            />
          </InputItem>
          <InputItem>
            <Div $width='43px' $grow='0'>
              <MapIcon />
            </Div>
            <Input 
              type="text" 
              value={performanceData?.venue || ''} 
              placeholder="장소를 입력해주세요" 
              readOnly 
            />
          </InputItem>
          <InputItem $cursor='pointer' onClick={openCastMemberModal} >
            <Div $width='43px' $grow='0' $shrink='0'>
              <CastIcon />
            </Div>
              {Object.values(selectedCastMembers).length > 0 ? (
                <Div $flex={true} $width='100%' $justify='space-between' $gap='20px' style={{minWidth: 0}}>
                  <Div $flex={true} $overflow='scroll' $justify='flex-start' >
                    <Div $flex={true} $gap='10px' $maxWidth='fit-content'>
                      {Object.entries(selectedCastMembers).map(([key, member]) => (
                        <CastMemberLabel key={key} onClick={(event) => handleSelectCastMember(event, key, member)}>
                          {member.name} 
                          <UnselectCastMemberIcon />
                        </CastMemberLabel>
                      ))}
                    </Div>
                  </Div>
                  <MemberPlusIcon />
                </Div>
            ) : (
              <Text $size={13} $color={GRAY3}>
                출연자 정보를 입력해주세요
              </Text>
            )}
          </InputItem>
          <InputItem>
            <Div $width='43px' $grow='0'>
              <GenreIcon />
            </Div>
            <Input 
              type="text" 
              onChange={e => handleDataChange('genre', e.target.value)} 
              placeholder="공연 장르를 입력해주세요" 
              value={selectedGenreDatas}
              readOnly
              onClick={openGenreModal}
              style={{ cursor: 'pointer' }}
            />
          </InputItem>
          <InputItem>
            <Div $width='43px' $grow='0'>
              <ReviewIcon />
            </Div>
            <Text $size={14} $color='GRAY4'>후기</Text>
          </InputItem>
        </Div>
        <Div $flex={true} $width='100%' $padding='0 30px' $direction='column'>
          <Div $justify='space-between' $flex={true} $width='100%'>
          <StarRatings
            rating={sendData?.star}
            changeRating={rating => handleDataChange('star', rating)}
            numberOfStars={5}
            starHoverColor={NAVY}
            starRatedColor={NAVY}
            starEmptyColor={GRAY4}
            svgIconViewBox="0 0 16 17"
            svgIconPath="M5.8648 3.55594C6.81503 1.85198 7.28977 1 8 1C8.71023 1 9.18497 1.85198 10.1352 3.55594L10.3812 3.99693C10.6512 4.48142 10.7862 4.72366 10.9962 4.88341C11.2062 5.04315 11.4687 5.1024 11.9937 5.2209L12.4706 5.3289C14.3156 5.74664 15.2373 5.95513 15.4571 6.66087C15.6761 7.36585 15.0476 8.10158 13.7899 9.5723L13.4644 9.95254C13.1074 10.3703 12.9281 10.5795 12.8479 10.8375C12.7676 11.0963 12.7946 11.3753 12.8486 11.9325L12.8981 12.4402C13.0879 14.4029 13.1831 15.3839 12.6086 15.8197C12.0342 16.2554 11.1702 15.8579 9.44372 15.0629L8.99598 14.8574C8.50549 14.6309 8.26024 14.5184 8 14.5184C7.73976 14.5184 7.49451 14.6309 7.00402 14.8574L6.55703 15.0629C4.82982 15.8579 3.96584 16.2554 3.39211 15.8204C2.81687 15.3839 2.91212 14.4029 3.10187 12.4402L3.15136 11.9332C3.20536 11.3753 3.23236 11.0963 3.15136 10.8383C3.07187 10.5795 2.89262 10.3703 2.53563 9.95329L2.21014 9.5723C0.952416 8.10233 0.32393 7.3666 0.542925 6.66087C0.76192 5.95513 1.68515 5.74589 3.5301 5.3289L4.00709 5.2209C4.53133 5.1024 4.79308 5.04315 5.00382 4.88341C5.21457 4.72366 5.34881 4.48142 5.61881 3.99693L5.8648 3.55594Z"
            name='rating'
          />
            <LockIcon 
              isLock={!sendData.visible}
              sendData={sendData}
              setSendData={setSendData} 
            />
          </Div>
          <TextArea 
            type='text' 
            $margin='4px 0 0' 
            $padding='12px 14px' 
            placeholder='공연을 보며 느꼈던 것, 기억에 남았던 것들을 기록해보세요. 좋았던 장면, 넘버, 무대 연출, 출연진들의 합, 다양한 감상을 솔직하게 남겨 오늘을 추억하세요 :)'
            onChange={e => handleDataChange('content', e.target.value)}
            value={sendData?.content || ''}
          />
        </Div>
        <Div $padding='0 18px' $width='100%' $margin='40px 0 0'>
          <Div $flex={true} $justify='start' $padding='0 8px'>
            {previewImages.map((url, index) => (
              <PhotoContainer key={index} >
                <img 
                  src={url} 
                  alt={`preview-${index}`}
                  style={{ borderRadius: '10px', aspectRatio: '1/1', width: '100%'}}
                />
                <DeletePhotoSvg onClick={() => handleDeletePhoto(index, true)} />
              </PhotoContainer>
            ))}
            {editData?.photos.map((url, index) => (
              <PhotoContainer key={index} >
                <img 
                  src={url.url} 
                  alt={`preview-${index}`}
                  style={{ borderRadius: '10px', aspectRatio: '1/1', width: '100%'}}
                />
                <DeletePhotoSvg onClick={() => handleDeletePhoto(index)} />
              </PhotoContainer>
            ))}
          </Div>
          {previewImages.length + (editData?.photos?.length || 0) < 3 && (
            <AddPhoto onClick={handleAddPhoto} $backgroundColor={GRAY2} $border={`1px solid ${GRAY4}`} $radius='10px' $height='110px'>
              <Text $weight='SEMIBOLD' $color={GRAY5}>함께 기록할 사진을 추가해주세요</Text>
              <PlusIcon />
            </AddPhoto>
          )}
          <input 
            type="file" 
            ref={fileRef}
            onChange={handleFileChange}
            multiple
            accept="image/*" 
            hidden 
          />
          <Button 
            disabled={buttonDisabled} 
            $width='100%' 
            $margin='30px 0 40px 0' 
            onClick={editId ? handleEdit : handleCreate}
          >
            티켓북 저장하기
          </Button>
        </Div>
      </Div>
      <GenreSelectModal 
        isOpen={modalOpen.genre} 
        handleGenreSelect={handleGenreSelect} 
        selectedGenres={selectedGenres} 
        handleGenreSave={handleGenreSave} 
        handleCloseModal={handleCloseModal}
      />
      <SearchCastMemberModal 
        isOpen={modalOpen.castMember} 
        setSearchVal={setSearchVal}
        castMembers={searchCastMembers}
        handleCastMemberSearch={handleCastMemberSearch}
        handleSelectCastMember={handleSelectCastMember} 
        isSelected={isSelected}
        openAddCastMemberModal={openAddCastMemberModal}
        handleCloseModal={handleCloseModal}
        handleAddSelectedCastMember={handleAddSelectedCastMember}
      />
      <AddCastMemberModal
        isOpen={modalOpen.addCastMember}
        openAddCastMemberModal={openAddCastMemberModal}
        handleAddCastMember={handleAddCastMember}
        goBackAddCastMemberModal={goBackAddCastMemberModal}
        handleCloseModal={handleCloseModal}
        setAddCastMemberValue={setAddCastMemberValue}
        addCastMemberValue={addCastMemberValue}
      />
    </>
  )
}

export default CreateBook;