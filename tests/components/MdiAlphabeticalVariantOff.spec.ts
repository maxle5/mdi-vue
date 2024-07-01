
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphabeticalVariantOff from "../../src/components/MdiAlphabeticalVariantOff.vue";

test("MdiAlphabeticalVariantOff snapshot", () => {
  const wrapper = mount(MdiAlphabeticalVariantOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
