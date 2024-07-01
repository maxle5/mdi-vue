
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSelectAll from "../../src/components/MdiSelectAll.vue";

test("MdiSelectAll snapshot", () => {
  const wrapper = mount(MdiSelectAll, {});
  expect(wrapper.html()).toMatchSnapshot();
});
