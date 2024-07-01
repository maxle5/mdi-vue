
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrainCarFlatbedCar from "../../src/components/MdiTrainCarFlatbedCar.vue";

test("MdiTrainCarFlatbedCar snapshot", () => {
  const wrapper = mount(MdiTrainCarFlatbedCar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
