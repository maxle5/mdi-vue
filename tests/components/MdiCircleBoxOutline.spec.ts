
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCircleBoxOutline from "../../src/components/MdiCircleBoxOutline.vue";

test("MdiCircleBoxOutline snapshot", () => {
  const wrapper = mount(MdiCircleBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
