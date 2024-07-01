
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiProgressTag from "../../src/components/MdiProgressTag.vue";

test("MdiProgressTag snapshot", () => {
  const wrapper = mount(MdiProgressTag, {});
  expect(wrapper.html()).toMatchSnapshot();
});
