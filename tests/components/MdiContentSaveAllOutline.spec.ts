
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContentSaveAllOutline from "../../src/components/MdiContentSaveAllOutline.vue";

test("MdiContentSaveAllOutline snapshot", () => {
  const wrapper = mount(MdiContentSaveAllOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
