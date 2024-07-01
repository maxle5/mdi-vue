
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountCircleOutline from "../../src/components/MdiAccountCircleOutline.vue";

test("MdiAccountCircleOutline snapshot", () => {
  const wrapper = mount(MdiAccountCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
