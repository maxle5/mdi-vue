
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailRemove from "../../src/components/MdiEmailRemove.vue";

test("MdiEmailRemove snapshot", () => {
  const wrapper = mount(MdiEmailRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
