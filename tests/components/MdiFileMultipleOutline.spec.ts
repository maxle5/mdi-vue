
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileMultipleOutline from "../../src/components/MdiFileMultipleOutline.vue";

test("MdiFileMultipleOutline snapshot", () => {
  const wrapper = mount(MdiFileMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
