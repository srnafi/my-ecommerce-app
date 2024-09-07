import { Helmet } from "react-helmet";
import { Button, Img, Heading, Input } from "../components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductDetails from "../components/ProductDetails";
import React, { useContext, useState, Suspense } from "react";
import { ProductContext } from "../context/ProductContext";

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState("Rocking Chair");

  // Function to handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    console.log(activeCategory);
  };

  const { products } = useContext(ProductContext);
  console.log("Products in StorePage:", products);

  const itemsPerPage = 6; // Number of products per page
  const [currentPage, setCurrentPage] = useState(1); // State to track current page

  // Calculate the total number of pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Create an array for page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Calculate the starting and ending index of items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  // Handle changing pages
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <Helmet>
        <title>Store - Explore FurniFlex&#39;s Exclusive Furniture Deals</title>
        <meta
          name="description"
          content="Discover FurniFlex's store for exclusive furniture deals. Shop the latest in rocking chairs, lounge chairs, and more. Add style and comfort to your home today."
        />
      </Helmet>
      <div className="bg-[#ffffff] sm:gap-[2.75rem] md:gap-[4.13rem] gap-[5.50rem] flex w-full flex-col items-center">
        <Header />
        <div className="container-xs md:px-[1.25rem]">
          <div className="gap-[2.63rem] flex items-start md:flex-col">
            <div className="w-[22%] md:w-full">
              <div className="border-[#e7e7e7] py-4 gap-2 flex flex-col items-start border-r border-solid">
                {["Rocking Chair", "Lounge Chair", "Side Chair"].map(
                  (category) => (
                    <Button
                      key={category}
                      shape="round"
                      name={category}
                      className={`hover:rounded-md hover:bg-[#f7f7f7] hover:font-semibold text-xl w-[88%] ${
                        activeCategory === category
                          ? "!bg-[#000000] !text-white"
                          : "!bg-[#ffffff] !text-black"
                      }`}
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </Button>
                  )
                )}
              </div>
            </div>
            <div className="sm:gap-[2.00rem] self-start gap-[4.00rem] flex flex-1 flex-col items-center md:self-stretch">
              <div className="gap-[2.00rem] grid grid-cols-3 justify-center self-stretch md:grid-cols-2 sm:grid-cols-1">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {currentItems.map((item, index) => (
                    <ProductDetails key={index} product={item} />
                  ))}
                </Suspense>
              </div>

              {/* Pagination */}
              <div className="gap-[0.50rem] flex">
                {/* Prev Button */}
                <Button
                  color="blue_gray_100_87"
                  size="xs"
                  shape="round"
                  className="w-[2.00rem] !rounded"
                  onClick={handlePrevPage}
                  disabled={currentPage === 1} // Disable when on first page
                >
                  <Img src="images/img_arrow_left.svg" />
                </Button>

                {/* Page Number Buttons */}
                {pageNumbers.map((number) => (
                  <Button
                    key={number}
                    color={
                      number === currentPage ? "white_A700" : "blue_gray_100_87"
                    }
                    size="sm"
                    shape="round"
                    className={`min-w-[2.00rem] border-[#0d0d0d] !text-[#0d0d0d] !rounded border border-solid font-bold ${
                      number === currentPage ? "!bg-[#000000] !text-white" : ""
                    }`}
                    onClick={() => handlePageChange(number)}
                  >
                    {number}
                  </Button>
                ))}

                {/* Next Button */}
                <Button
                  color="blue_gray_100_87"
                  size="xs"
                  shape="round"
                  className="w-[2.00rem] !rounded"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages} // Disable when on last page
                >
                  <Img src="images/img_arrow_right.svg" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
