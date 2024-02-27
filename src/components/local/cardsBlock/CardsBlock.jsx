import cssGlobal from "../../../styles/global.css";
import { useGetCharactersQuery } from "../../../stores/characters/charactersApi";
import CardItem from "../cardItem/CardItem";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import SelectInput from "../selectInput/SelectInput";

function CardsBlock({
  onShowModal,
  setOnShowModal,
  showedCharacter,
  setShowedCharacter,
}) {
  const {
    CardsContainer,
    PaginateWrapper,
    FiltersWrapper,
    InputBox,
    InputLabel,
    InputSearch,
    ErrorMessage,
    SearchButton,
  } = cssGlobal;
  const [page, setPage] = useState(1);
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [species, setSpecies] = useState("");
  const [name, setName] = useState("");
  const [typeRequest, setTypeRequest] = useState("");
  const [speciesRequest, setSpeciesRequest] = useState("");
  const [nameRequest, setNameRequest] = useState("");

  const { isLoading, data, isError, error } = useGetCharactersQuery({
    page,
    gender,
    status,
    type: typeRequest,
    species: speciesRequest,
    name: nameRequest,
  });
  const n = 20;
  const [selectData] = useState([
    {
      id: 1,
      title: "gender",
      options: [
        {
          id: 1,
          value: "",
          title: "All",
        },
        {
          id: 2,
          value: "male",
          title: "Male",
        },
        {
          id: 3,
          value: "female",
          title: "Female",
        },
        {
          id: 4,
          value: "genderless",
          title: "Genderless",
        },
        {
          id: 5,
          value: "unknown",
          title: "Unknown",
        },
      ],
      onChange: (e) => {
        setGender(e.target.value);
      },
    },
    {
      id: 2,
      title: "status",
      options: [
        {
          id: 1,
          value: "",
          title: "All",
        },
        {
          id: 2,
          value: "alive",
          title: "Alive",
        },
        {
          id: 3,
          value: "dead",
          title: "Dead",
        },
        {
          id: 4,
          value: "unknown",
          title: "Unknown",
        },
      ],
      onChange: (e) => {
        setStatus(e.target.value);
      },
    },
  ]);

  function handleSubmit(e) {
    e.preventDefault();
    setTypeRequest(type);
    setSpeciesRequest(species);
    setNameRequest(name);
    setPage(1);
  }

  const handlePageChange = (e) => {
    setPage(e.selected + 1);
  };

  {
    isError && console.log(error);
  }

  return (
    <PaginateWrapper>
      <FiltersWrapper onSubmit={handleSubmit}>
        {selectData.map((selectItem) => (
          <SelectInput key={selectItem.id} props={selectItem} />
        ))}
        <InputBox>
          <InputLabel>type</InputLabel>
          <InputSearch value={type} onChange={(e) => setType(e.target.value)} />
        </InputBox>
        <InputBox>
          <InputLabel>species</InputLabel>
          <InputSearch
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <InputLabel>name</InputLabel>
          <InputSearch value={name} onChange={(e) => setName(e.target.value)} />
        </InputBox>
        <SearchButton type="submit">
          <FaSearch />
        </SearchButton>
      </FiltersWrapper>

      <CardsContainer>
        {!isLoading &&
          !isError &&
          data.results.map((item) => (
            <CardItem
              key={item.id}
              props={item}
              onShowModal={onShowModal}
              setOnShowModal={setOnShowModal}
              showedCharacter={showedCharacter}
              setShowedCharacter={setShowedCharacter}
            />
          ))}
        {isError && error.status === 404 && (
          <ErrorMessage>There is nothing here</ErrorMessage>
        )}
      </CardsContainer>
      {!isLoading && !isError && data && data.info.pages > 1 && (
        <ReactPaginate
          containerClassName={"pagination"}
          activeClassName={"active"}
          pageClassName={"page-item"}
          onPageChange={handlePageChange}
          forcePage={page - 1}
          breakLabel="..."
          pageCount={Math.ceil(data.info.count / n)}
          previousLabel={
            <FaArrowCircleLeft
              style={{
                color: "#222222",
                fontSize: "26px",
                marginTop: "4px",
                marginRight: "5px",
              }}
            />
          }
          nextLabel={
            <FaArrowCircleRight
              style={{
                color: "#222222",
                fontSize: "26px",
                marginTop: "4px",
                marginLeft: "5px",
              }}
            />
          }
        />
      )}
    </PaginateWrapper>
  );
}

export default CardsBlock;
