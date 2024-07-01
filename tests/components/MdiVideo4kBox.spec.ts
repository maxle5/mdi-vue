
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideo4kBox from "../../src/components/MdiVideo4kBox.vue";

test("MdiVideo4kBox snapshot", () => {
  const wrapper = mount(MdiVideo4kBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
