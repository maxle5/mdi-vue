
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRickshawElectric from "../../src/components/MdiRickshawElectric.vue";

test("MdiRickshawElectric snapshot", () => {
  const wrapper = mount(MdiRickshawElectric, {});
  expect(wrapper.html()).toMatchSnapshot();
});
