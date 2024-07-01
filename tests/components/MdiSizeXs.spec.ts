
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSizeXs from "../../src/components/MdiSizeXs.vue";

test("MdiSizeXs snapshot", () => {
  const wrapper = mount(MdiSizeXs, {});
  expect(wrapper.html()).toMatchSnapshot();
});
