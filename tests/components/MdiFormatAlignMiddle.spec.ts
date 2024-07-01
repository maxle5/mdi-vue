
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatAlignMiddle from "../../src/components/MdiFormatAlignMiddle.vue";

test("MdiFormatAlignMiddle snapshot", () => {
  const wrapper = mount(MdiFormatAlignMiddle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
