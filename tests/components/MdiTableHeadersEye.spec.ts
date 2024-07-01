
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableHeadersEye from "../../src/components/MdiTableHeadersEye.vue";

test("MdiTableHeadersEye snapshot", () => {
  const wrapper = mount(MdiTableHeadersEye, {});
  expect(wrapper.html()).toMatchSnapshot();
});
