
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGlassFragile from "../../src/components/MdiGlassFragile.vue";

test("MdiGlassFragile snapshot", () => {
  const wrapper = mount(MdiGlassFragile, {});
  expect(wrapper.html()).toMatchSnapshot();
});
