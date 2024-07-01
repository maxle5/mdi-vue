
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSackOutline from "../../src/components/MdiSackOutline.vue";

test("MdiSackOutline snapshot", () => {
  const wrapper = mount(MdiSackOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
