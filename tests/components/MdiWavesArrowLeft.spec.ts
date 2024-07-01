
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWavesArrowLeft from "../../src/components/MdiWavesArrowLeft.vue";

test("MdiWavesArrowLeft snapshot", () => {
  const wrapper = mount(MdiWavesArrowLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
