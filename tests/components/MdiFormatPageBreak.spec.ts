
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatPageBreak from "../../src/components/MdiFormatPageBreak.vue";

test("MdiFormatPageBreak snapshot", () => {
  const wrapper = mount(MdiFormatPageBreak, {});
  expect(wrapper.html()).toMatchSnapshot();
});
