
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShareAllOutline from "../../src/components/MdiShareAllOutline.vue";

test("MdiShareAllOutline snapshot", () => {
  const wrapper = mount(MdiShareAllOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
