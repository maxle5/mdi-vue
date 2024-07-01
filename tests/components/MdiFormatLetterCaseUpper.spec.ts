
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatLetterCaseUpper from "../../src/components/MdiFormatLetterCaseUpper.vue";

test("MdiFormatLetterCaseUpper snapshot", () => {
  const wrapper = mount(MdiFormatLetterCaseUpper, {});
  expect(wrapper.html()).toMatchSnapshot();
});
