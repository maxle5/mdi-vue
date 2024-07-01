
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGlassPintOutline from "../../src/components/MdiGlassPintOutline.vue";

test("MdiGlassPintOutline snapshot", () => {
  const wrapper = mount(MdiGlassPintOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
