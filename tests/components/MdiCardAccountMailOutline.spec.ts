
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardAccountMailOutline from "../../src/components/MdiCardAccountMailOutline.vue";

test("MdiCardAccountMailOutline snapshot", () => {
  const wrapper = mount(MdiCardAccountMailOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
