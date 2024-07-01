
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarElectric from "../../src/components/MdiCarElectric.vue";

test("MdiCarElectric snapshot", () => {
  const wrapper = mount(MdiCarElectric, {});
  expect(wrapper.html()).toMatchSnapshot();
});
