
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookOffOutline from "../../src/components/MdiBookOffOutline.vue";

test("MdiBookOffOutline snapshot", () => {
  const wrapper = mount(MdiBookOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
