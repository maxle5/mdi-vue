
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSelectRemove from "../../src/components/MdiSelectRemove.vue";

test("MdiSelectRemove snapshot", () => {
  const wrapper = mount(MdiSelectRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
