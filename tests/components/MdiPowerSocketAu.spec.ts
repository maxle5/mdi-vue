
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPowerSocketAu from "../../src/components/MdiPowerSocketAu.vue";

test("MdiPowerSocketAu snapshot", () => {
  const wrapper = mount(MdiPowerSocketAu, {});
  expect(wrapper.html()).toMatchSnapshot();
});
