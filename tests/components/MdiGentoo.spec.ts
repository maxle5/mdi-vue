
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGentoo from "../../src/components/MdiGentoo.vue";

test("MdiGentoo snapshot", () => {
  const wrapper = mount(MdiGentoo, {});
  expect(wrapper.html()).toMatchSnapshot();
});
