
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReflectHorizontal from "../../src/components/MdiReflectHorizontal.vue";

test("MdiReflectHorizontal snapshot", () => {
  const wrapper = mount(MdiReflectHorizontal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
