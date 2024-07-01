
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailOutline from "../../src/components/MdiEmailOutline.vue";

test("MdiEmailOutline snapshot", () => {
  const wrapper = mount(MdiEmailOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
