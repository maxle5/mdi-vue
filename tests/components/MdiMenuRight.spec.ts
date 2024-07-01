
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMenuRight from "../../src/components/MdiMenuRight.vue";

test("MdiMenuRight snapshot", () => {
  const wrapper = mount(MdiMenuRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
