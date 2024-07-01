
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarSearchOutline from "../../src/components/MdiCarSearchOutline.vue";

test("MdiCarSearchOutline snapshot", () => {
  const wrapper = mount(MdiCarSearchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
