
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDeleteOutline from "../../src/components/MdiDeleteOutline.vue";

test("MdiDeleteOutline snapshot", () => {
  const wrapper = mount(MdiDeleteOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
