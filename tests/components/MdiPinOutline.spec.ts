
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPinOutline from "../../src/components/MdiPinOutline.vue";

test("MdiPinOutline snapshot", () => {
  const wrapper = mount(MdiPinOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
