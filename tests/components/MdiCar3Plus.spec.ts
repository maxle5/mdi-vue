
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCar3Plus from "../../src/components/MdiCar3Plus.vue";

test("MdiCar3Plus snapshot", () => {
  const wrapper = mount(MdiCar3Plus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
