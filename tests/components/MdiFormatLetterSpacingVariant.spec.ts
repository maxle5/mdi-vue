
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatLetterSpacingVariant from "../../src/components/MdiFormatLetterSpacingVariant.vue";

test("MdiFormatLetterSpacingVariant snapshot", () => {
  const wrapper = mount(MdiFormatLetterSpacingVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
