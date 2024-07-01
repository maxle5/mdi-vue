
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountOffOutline from "../../src/components/MdiAccountOffOutline.vue";

test("MdiAccountOffOutline snapshot", () => {
  const wrapper = mount(MdiAccountOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
