
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPeanutOffOutline from "../../src/components/MdiPeanutOffOutline.vue";

test("MdiPeanutOffOutline snapshot", () => {
  const wrapper = mount(MdiPeanutOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
