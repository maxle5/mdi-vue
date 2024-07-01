
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWindPowerOutline from "../../src/components/MdiWindPowerOutline.vue";

test("MdiWindPowerOutline snapshot", () => {
  const wrapper = mount(MdiWindPowerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
