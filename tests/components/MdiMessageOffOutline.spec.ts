
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageOffOutline from "../../src/components/MdiMessageOffOutline.vue";

test("MdiMessageOffOutline snapshot", () => {
  const wrapper = mount(MdiMessageOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
