
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMopedElectric from "../../src/components/MdiMopedElectric.vue";

test("MdiMopedElectric snapshot", () => {
  const wrapper = mount(MdiMopedElectric, {});
  expect(wrapper.html()).toMatchSnapshot();
});
