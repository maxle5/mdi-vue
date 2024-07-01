
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileTableOutline from "../../src/components/MdiFileTableOutline.vue";

test("MdiFileTableOutline snapshot", () => {
  const wrapper = mount(MdiFileTableOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
