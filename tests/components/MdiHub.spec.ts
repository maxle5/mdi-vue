
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHub from "../../src/components/MdiHub.vue";

test("MdiHub snapshot", () => {
  const wrapper = mount(MdiHub, {});
  expect(wrapper.html()).toMatchSnapshot();
});
