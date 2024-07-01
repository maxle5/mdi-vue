
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPenRemove from "../../src/components/MdiPenRemove.vue";

test("MdiPenRemove snapshot", () => {
  const wrapper = mount(MdiPenRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
