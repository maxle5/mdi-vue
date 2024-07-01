
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountEye from "../../src/components/MdiAccountEye.vue";

test("MdiAccountEye snapshot", () => {
  const wrapper = mount(MdiAccountEye, {});
  expect(wrapper.html()).toMatchSnapshot();
});
