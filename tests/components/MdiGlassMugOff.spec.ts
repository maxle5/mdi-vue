
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGlassMugOff from "../../src/components/MdiGlassMugOff.vue";

test("MdiGlassMugOff snapshot", () => {
  const wrapper = mount(MdiGlassMugOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
