
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWavesArrowRight from "../../src/components/MdiWavesArrowRight.vue";

test("MdiWavesArrowRight snapshot", () => {
  const wrapper = mount(MdiWavesArrowRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
