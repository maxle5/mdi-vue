
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPeanutOutline from "../../src/components/MdiPeanutOutline.vue";

test("MdiPeanutOutline snapshot", () => {
  const wrapper = mount(MdiPeanutOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
