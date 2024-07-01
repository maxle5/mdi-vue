
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideoBox from "../../src/components/MdiVideoBox.vue";

test("MdiVideoBox snapshot", () => {
  const wrapper = mount(MdiVideoBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
