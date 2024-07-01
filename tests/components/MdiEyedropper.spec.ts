
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEyedropper from "../../src/components/MdiEyedropper.vue";

test("MdiEyedropper snapshot", () => {
  const wrapper = mount(MdiEyedropper, {});
  expect(wrapper.html()).toMatchSnapshot();
});
