
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGlassMugVariant from "../../src/components/MdiGlassMugVariant.vue";

test("MdiGlassMugVariant snapshot", () => {
  const wrapper = mount(MdiGlassMugVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
