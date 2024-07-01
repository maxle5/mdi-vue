
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSeedOutline from "../../src/components/MdiSeedOutline.vue";

test("MdiSeedOutline snapshot", () => {
  const wrapper = mount(MdiSeedOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
