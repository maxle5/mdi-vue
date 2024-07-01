
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOwl from "../../src/components/MdiOwl.vue";

test("MdiOwl snapshot", () => {
  const wrapper = mount(MdiOwl, {});
  expect(wrapper.html()).toMatchSnapshot();
});
