
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCar2Plus from "../../src/components/MdiCar2Plus.vue";

test("MdiCar2Plus snapshot", () => {
  const wrapper = mount(MdiCar2Plus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
