import Accordion from "react-bootstrap/Accordion";
import { useGetCateguryQuery } from "apis/apiSlice";
import { Link } from "react-router-dom";
import { useGetSubCategoryQuery } from "apis/apiSlice";
const AccordionProduct = () => {
  const { data: category } = useGetCateguryQuery();
  const { data: subCategory } = useGetSubCategoryQuery();

  return (
    <Accordion defaultActiveKey={["0"]} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>دسته بندی ها</Accordion.Header>
        <Accordion.Body>
          <ul>
            <div className="flex flex-col w-52 ">
              {category &&
                category.map((el) => {
                  return (
                    <li key={el.id}>
                      <Accordion>
                        <Accordion.Header>{el.name}</Accordion.Header>
                        <Accordion.Body>
                          {subCategory &&
                            subCategory
                              .filter((item) => item.category === el.id)
                              .map((e) => {
                                return (
                                  <div key={e.id}>
                                    <Link
                                      className="text-copperfield-400 hover:text-copperfield-600
                                     text-decoration-none"
                                    >
                                      {e.name}
                                    </Link>
                                  </div>
                                );
                              })}
                        </Accordion.Body>
                      </Accordion>
                    </li>
                  );
                })}
            </div>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
export default AccordionProduct;
