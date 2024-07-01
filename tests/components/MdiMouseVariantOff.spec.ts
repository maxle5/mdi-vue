
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMouseVariantOff from "../../src/components/MdiMouseVariantOff.vue";

test("MdiMouseVariantOff snapshot", () => {
  const wrapper = mount(MdiMouseVariantOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
