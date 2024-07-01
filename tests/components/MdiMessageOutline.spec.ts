
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageOutline from "../../src/components/MdiMessageOutline.vue";

test("MdiMessageOutline snapshot", () => {
  const wrapper = mount(MdiMessageOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
