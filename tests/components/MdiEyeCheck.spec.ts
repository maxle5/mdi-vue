
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEyeCheck from "../../src/components/MdiEyeCheck.vue";

test("MdiEyeCheck snapshot", () => {
  const wrapper = mount(MdiEyeCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
