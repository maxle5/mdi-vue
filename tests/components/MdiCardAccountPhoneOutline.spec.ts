
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardAccountPhoneOutline from "../../src/components/MdiCardAccountPhoneOutline.vue";

test("MdiCardAccountPhoneOutline snapshot", () => {
  const wrapper = mount(MdiCardAccountPhoneOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
