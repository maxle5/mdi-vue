
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlaneCar from "../../src/components/MdiPlaneCar.vue";

test("MdiPlaneCar snapshot", () => {
  const wrapper = mount(MdiPlaneCar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
