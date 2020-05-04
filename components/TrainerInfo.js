import React, { useMemo } from "react";
import { useRouter } from "next/router";
import I18n from "../utils/i18n";

const TrainerInfo = () => {
  const router = useRouter();
  const { lang } = router.query;
  const i18n = useMemo(() => I18n({ force: true, lang: lang }), []);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center">Онлайн тренер</h1>
          <h5 className="text-center">Онлайн-сопровождение с Игорем Шмером</h5>
          <p className="text-center text-black-50">
            Тренируйтесь даже в коммандировке или в отпуске!
          </p>
          <p>- Полноценное индивидуальное онлайн сопровождение</p>
          <p>- Максимально гибкий график тренировок</p>
          <p>
            - Тренировочный план формируется индивидуально под ваши цели и
            задачи
          </p>
          <p>- Возможность консультации со специалистом 24/7</p>
          <p>
            - Возможность замены любого упражнения исходя из укомплектованности
            фитнес-центра
          </p>
          <a
            target="_blank"
            href="https://wa.me/79034516625/?text=Я%20хочу%20записаться%20на%20тренировку"
            className="mb-3 d-block btn btn-block btn-success"
          >
            WhatsApp
          </a>
          <a
            target="_blank"
            href="https://instagram.com/shmer1988"
            className="mb-3 d-block btn btn-block btn-info"
          >
            Instagram
          </a>
          <a
            href="tel:+79034516625"
            className="mb-3 d-block btn btn-block btn-dark"
          >
            {i18n.t("call")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrainerInfo;
