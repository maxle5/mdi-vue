
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyLink from "../../src/components/MdiKeyLink.vue";

test("MdiKeyLink snapshot", () => {
  const wrapper = mount(MdiKeyLink, {});
  expect(wrapper.html()).toMatchSnapshot();
});
