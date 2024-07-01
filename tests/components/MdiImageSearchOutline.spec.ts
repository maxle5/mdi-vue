
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageSearchOutline from "../../src/components/MdiImageSearchOutline.vue";

test("MdiImageSearchOutline snapshot", () => {
  const wrapper = mount(MdiImageSearchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
