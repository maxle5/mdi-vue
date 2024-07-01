
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageFilterHdrOutline from "../../src/components/MdiImageFilterHdrOutline.vue";

test("MdiImageFilterHdrOutline snapshot", () => {
  const wrapper = mount(MdiImageFilterHdrOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
