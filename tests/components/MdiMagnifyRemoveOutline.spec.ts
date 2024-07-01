
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMagnifyRemoveOutline from "../../src/components/MdiMagnifyRemoveOutline.vue";

test("MdiMagnifyRemoveOutline snapshot", () => {
  const wrapper = mount(MdiMagnifyRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
