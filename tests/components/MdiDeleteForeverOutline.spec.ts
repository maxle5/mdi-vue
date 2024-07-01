
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDeleteForeverOutline from "../../src/components/MdiDeleteForeverOutline.vue";

test("MdiDeleteForeverOutline snapshot", () => {
  const wrapper = mount(MdiDeleteForeverOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
