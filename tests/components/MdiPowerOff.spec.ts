
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPowerOff from "../../src/components/MdiPowerOff.vue";

test("MdiPowerOff snapshot", () => {
  const wrapper = mount(MdiPowerOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
