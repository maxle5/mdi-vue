
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileRemove from "../../src/components/MdiFileRemove.vue";

test("MdiFileRemove snapshot", () => {
  const wrapper = mount(MdiFileRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
