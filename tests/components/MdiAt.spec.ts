
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAt from "../../src/components/MdiAt.vue";

test("MdiAt snapshot", () => {
  const wrapper = mount(MdiAt, {});
  expect(wrapper.html()).toMatchSnapshot();
});
