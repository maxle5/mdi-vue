
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEarthRemove from "../../src/components/MdiEarthRemove.vue";

test("MdiEarthRemove snapshot", () => {
  const wrapper = mount(MdiEarthRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
