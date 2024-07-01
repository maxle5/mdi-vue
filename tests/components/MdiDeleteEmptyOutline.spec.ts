
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDeleteEmptyOutline from "../../src/components/MdiDeleteEmptyOutline.vue";

test("MdiDeleteEmptyOutline snapshot", () => {
  const wrapper = mount(MdiDeleteEmptyOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
