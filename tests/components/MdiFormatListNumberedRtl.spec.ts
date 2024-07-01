
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatListNumberedRtl from "../../src/components/MdiFormatListNumberedRtl.vue";

test("MdiFormatListNumberedRtl snapshot", () => {
  const wrapper = mount(MdiFormatListNumberedRtl, {});
  expect(wrapper.html()).toMatchSnapshot();
});
