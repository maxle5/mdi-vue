
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyOutline from "../../src/components/MdiKeyOutline.vue";

test("MdiKeyOutline snapshot", () => {
  const wrapper = mount(MdiKeyOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
