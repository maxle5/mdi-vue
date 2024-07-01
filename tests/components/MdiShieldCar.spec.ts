
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldCar from "../../src/components/MdiShieldCar.vue";

test("MdiShieldCar snapshot", () => {
  const wrapper = mount(MdiShieldCar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
