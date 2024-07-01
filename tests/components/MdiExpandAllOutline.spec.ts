
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiExpandAllOutline from "../../src/components/MdiExpandAllOutline.vue";

test("MdiExpandAllOutline snapshot", () => {
  const wrapper = mount(MdiExpandAllOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
