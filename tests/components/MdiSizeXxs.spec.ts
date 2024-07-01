
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSizeXxs from "../../src/components/MdiSizeXxs.vue";

test("MdiSizeXxs snapshot", () => {
  const wrapper = mount(MdiSizeXxs, {});
  expect(wrapper.html()).toMatchSnapshot();
});
