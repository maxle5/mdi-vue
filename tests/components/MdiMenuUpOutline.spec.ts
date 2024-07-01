
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMenuUpOutline from "../../src/components/MdiMenuUpOutline.vue";

test("MdiMenuUpOutline snapshot", () => {
  const wrapper = mount(MdiMenuUpOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
