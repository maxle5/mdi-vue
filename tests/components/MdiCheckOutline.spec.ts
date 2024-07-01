
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckOutline from "../../src/components/MdiCheckOutline.vue";

test("MdiCheckOutline snapshot", () => {
  const wrapper = mount(MdiCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
