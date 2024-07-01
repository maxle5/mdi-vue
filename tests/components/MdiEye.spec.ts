
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEye from "../../src/components/MdiEye.vue";

test("MdiEye snapshot", () => {
  const wrapper = mount(MdiEye, {});
  expect(wrapper.html()).toMatchSnapshot();
});
