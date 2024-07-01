
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPowerSettings from "../../src/components/MdiPowerSettings.vue";

test("MdiPowerSettings snapshot", () => {
  const wrapper = mount(MdiPowerSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
