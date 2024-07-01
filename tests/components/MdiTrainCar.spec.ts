
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrainCar from "../../src/components/MdiTrainCar.vue";

test("MdiTrainCar snapshot", () => {
  const wrapper = mount(MdiTrainCar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
