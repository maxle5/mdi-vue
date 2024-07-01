
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSkullOutline from "../../src/components/MdiSkullOutline.vue";

test("MdiSkullOutline snapshot", () => {
  const wrapper = mount(MdiSkullOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
