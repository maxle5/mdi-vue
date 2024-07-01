
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSignalHspaPlus from "../../src/components/MdiSignalHspaPlus.vue";

test("MdiSignalHspaPlus snapshot", () => {
  const wrapper = mount(MdiSignalHspaPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
