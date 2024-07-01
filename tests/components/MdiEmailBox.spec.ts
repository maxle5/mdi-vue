
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailBox from "../../src/components/MdiEmailBox.vue";

test("MdiEmailBox snapshot", () => {
  const wrapper = mount(MdiEmailBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
