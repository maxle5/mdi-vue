
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGlassMug from "../../src/components/MdiGlassMug.vue";

test("MdiGlassMug snapshot", () => {
  const wrapper = mount(MdiGlassMug, {});
  expect(wrapper.html()).toMatchSnapshot();
});
