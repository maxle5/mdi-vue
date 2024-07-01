
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaveArrowUp from "../../src/components/MdiWaveArrowUp.vue";

test("MdiWaveArrowUp snapshot", () => {
  const wrapper = mount(MdiWaveArrowUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
