
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageOffOutline from "../../src/components/MdiImageOffOutline.vue";

test("MdiImageOffOutline snapshot", () => {
  const wrapper = mount(MdiImageOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
