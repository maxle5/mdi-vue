
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatAlignLeft from "../../src/components/MdiFormatAlignLeft.vue";

test("MdiFormatAlignLeft snapshot", () => {
  const wrapper = mount(MdiFormatAlignLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
