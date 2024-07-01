
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCircleOutline from "../../src/components/MdiCircleOutline.vue";

test("MdiCircleOutline snapshot", () => {
  const wrapper = mount(MdiCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
