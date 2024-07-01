
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLink from "../../src/components/MdiLink.vue";

test("MdiLink snapshot", () => {
  const wrapper = mount(MdiLink, {});
  expect(wrapper.html()).toMatchSnapshot();
});
