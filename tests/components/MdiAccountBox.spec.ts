
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountBox from "../../src/components/MdiAccountBox.vue";

test("MdiAccountBox snapshot", () => {
  const wrapper = mount(MdiAccountBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
