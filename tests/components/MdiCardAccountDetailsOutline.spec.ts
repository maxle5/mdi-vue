
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardAccountDetailsOutline from "../../src/components/MdiCardAccountDetailsOutline.vue";

test("MdiCardAccountDetailsOutline snapshot", () => {
  const wrapper = mount(MdiCardAccountDetailsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
