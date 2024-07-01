
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatLetterSpacing from "../../src/components/MdiFormatLetterSpacing.vue";

test("MdiFormatLetterSpacing snapshot", () => {
  const wrapper = mount(MdiFormatLetterSpacing, {});
  expect(wrapper.html()).toMatchSnapshot();
});
