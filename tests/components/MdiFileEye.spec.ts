
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileEye from "../../src/components/MdiFileEye.vue";

test("MdiFileEye snapshot", () => {
  const wrapper = mount(MdiFileEye, {});
  expect(wrapper.html()).toMatchSnapshot();
});
