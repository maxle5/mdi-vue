
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrosoftPowerpoint from "../../src/components/MdiMicrosoftPowerpoint.vue";

test("MdiMicrosoftPowerpoint snapshot", () => {
  const wrapper = mount(MdiMicrosoftPowerpoint, {});
  expect(wrapper.html()).toMatchSnapshot();
});
