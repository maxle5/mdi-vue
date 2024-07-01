
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarWindshieldOutline from "../../src/components/MdiCarWindshieldOutline.vue";

test("MdiCarWindshieldOutline snapshot", () => {
  const wrapper = mount(MdiCarWindshieldOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
