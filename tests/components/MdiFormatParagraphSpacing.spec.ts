
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatParagraphSpacing from "../../src/components/MdiFormatParagraphSpacing.vue";

test("MdiFormatParagraphSpacing snapshot", () => {
  const wrapper = mount(MdiFormatParagraphSpacing, {});
  expect(wrapper.html()).toMatchSnapshot();
});
