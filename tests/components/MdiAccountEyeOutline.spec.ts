
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountEyeOutline from "../../src/components/MdiAccountEyeOutline.vue";

test("MdiAccountEyeOutline snapshot", () => {
  const wrapper = mount(MdiAccountEyeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
