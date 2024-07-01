
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWavesArrowUp from "../../src/components/MdiWavesArrowUp.vue";

test("MdiWavesArrowUp snapshot", () => {
  const wrapper = mount(MdiWavesArrowUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
