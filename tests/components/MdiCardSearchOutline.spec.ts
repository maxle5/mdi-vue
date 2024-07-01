
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardSearchOutline from "../../src/components/MdiCardSearchOutline.vue";

test("MdiCardSearchOutline snapshot", () => {
  const wrapper = mount(MdiCardSearchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
