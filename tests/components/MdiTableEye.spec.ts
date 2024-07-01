
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableEye from "../../src/components/MdiTableEye.vue";

test("MdiTableEye snapshot", () => {
  const wrapper = mount(MdiTableEye, {});
  expect(wrapper.html()).toMatchSnapshot();
});
