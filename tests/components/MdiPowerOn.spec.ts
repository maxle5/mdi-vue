
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPowerOn from "../../src/components/MdiPowerOn.vue";

test("MdiPowerOn snapshot", () => {
  const wrapper = mount(MdiPowerOn, {});
  expect(wrapper.html()).toMatchSnapshot();
});
