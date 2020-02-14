import React from "react";

const TrainerInfo = () => {
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
            href="tel:+79034516625"
            className="mb-3 d-block btn btn-block btn-dark"
          >
            + 7(903)451-66-25
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrainerInfo;
