import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { MovieApi } from "../../api/movieApi";
import { ApiQueryKeys } from "../../constants/api.constants";
import { IKeyword, IKeywords } from "../../types/types";



const Keywords = () => {
  const { id } = useParams<{ id: string }>();

  const { data } = useQuery<IKeywords>({
    queryKey: [ApiQueryKeys.keywords, id],
    queryFn: ({ queryKey }) =>
      MovieApi.getKeywordsByMovieId(queryKey[1] as string),
  });
 
  const keywordsData =  data && data?.keywords.length > 0 ? data.keywords : null;
  return (
    <div className="mt-5 flex flex-wrap">
        <h4 className="text-white mb-3">Keywords</h4>
      <ul className="flex flex-wrap gap-3">
        {keywordsData?.map((keyword:IKeyword) => (
          <li className="cursor-pointer" key={keyword.id}>
            <a className="text-[#333] bg-[#d7d7d7] rounded-sm p-1 px-2 border-[1px] border-[#d7d7d7]">
              {keyword.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Keywords;
