
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatAlignRight from "../../src/components/MdiFormatAlignRight.vue";

test("MdiFormatAlignRight snapshot", () => {
  const wrapper = mount(MdiFormatAlignRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
