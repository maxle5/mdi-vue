
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatLetterCase from "../../src/components/MdiFormatLetterCase.vue";

test("MdiFormatLetterCase snapshot", () => {
  const wrapper = mount(MdiFormatLetterCase, {});
  expect(wrapper.html()).toMatchSnapshot();
});
