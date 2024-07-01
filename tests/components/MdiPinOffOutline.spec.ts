
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPinOffOutline from "../../src/components/MdiPinOffOutline.vue";

test("MdiPinOffOutline snapshot", () => {
  const wrapper = mount(MdiPinOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
