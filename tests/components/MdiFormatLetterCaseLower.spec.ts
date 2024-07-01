
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatLetterCaseLower from "../../src/components/MdiFormatLetterCaseLower.vue";

test("MdiFormatLetterCaseLower snapshot", () => {
  const wrapper = mount(MdiFormatLetterCaseLower, {});
  expect(wrapper.html()).toMatchSnapshot();
});
