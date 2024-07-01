
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageRemoveOutline from "../../src/components/MdiImageRemoveOutline.vue";

test("MdiImageRemoveOutline snapshot", () => {
  const wrapper = mount(MdiImageRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
