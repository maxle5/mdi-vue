
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGlassMugVariantOff from "../../src/components/MdiGlassMugVariantOff.vue";

test("MdiGlassMugVariantOff snapshot", () => {
  const wrapper = mount(MdiGlassMugVariantOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
