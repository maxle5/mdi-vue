
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCar from "../../src/components/MdiCar.vue";

test("MdiCar snapshot", () => {
  const wrapper = mount(MdiCar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
