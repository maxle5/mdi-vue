
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSimOffOutline from "../../src/components/MdiSimOffOutline.vue";

test("MdiSimOffOutline snapshot", () => {
  const wrapper = mount(MdiSimOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
