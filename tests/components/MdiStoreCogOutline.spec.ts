
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStoreCogOutline from "../../src/components/MdiStoreCogOutline.vue";

test("MdiStoreCogOutline snapshot", () => {
  const wrapper = mount(MdiStoreCogOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
