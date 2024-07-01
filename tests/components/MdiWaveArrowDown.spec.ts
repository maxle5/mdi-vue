
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaveArrowDown from "../../src/components/MdiWaveArrowDown.vue";

test("MdiWaveArrowDown snapshot", () => {
  const wrapper = mount(MdiWaveArrowDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
