
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookRemove from "../../src/components/MdiBookRemove.vue";

test("MdiBookRemove snapshot", () => {
  const wrapper = mount(MdiBookRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
