
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiIslandVariant from "../../src/components/MdiIslandVariant.vue";

test("MdiIslandVariant snapshot", () => {
  const wrapper = mount(MdiIslandVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
