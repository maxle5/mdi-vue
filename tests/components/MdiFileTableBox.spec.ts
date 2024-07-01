
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileTableBox from "../../src/components/MdiFileTableBox.vue";

test("MdiFileTableBox snapshot", () => {
  const wrapper = mount(MdiFileTableBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
