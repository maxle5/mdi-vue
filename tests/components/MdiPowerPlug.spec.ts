
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPowerPlug from "../../src/components/MdiPowerPlug.vue";

test("MdiPowerPlug snapshot", () => {
  const wrapper = mount(MdiPowerPlug, {});
  expect(wrapper.html()).toMatchSnapshot();
});
