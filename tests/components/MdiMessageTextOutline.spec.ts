
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageTextOutline from "../../src/components/MdiMessageTextOutline.vue";

test("MdiMessageTextOutline snapshot", () => {
  const wrapper = mount(MdiMessageTextOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
