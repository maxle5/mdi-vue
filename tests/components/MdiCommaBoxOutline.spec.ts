
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommaBoxOutline from "../../src/components/MdiCommaBoxOutline.vue";

test("MdiCommaBoxOutline snapshot", () => {
  const wrapper = mount(MdiCommaBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
