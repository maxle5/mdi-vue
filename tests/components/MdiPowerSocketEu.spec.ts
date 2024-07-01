
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPowerSocketEu from "../../src/components/MdiPowerSocketEu.vue";

test("MdiPowerSocketEu snapshot", () => {
  const wrapper = mount(MdiPowerSocketEu, {});
  expect(wrapper.html()).toMatchSnapshot();
});
