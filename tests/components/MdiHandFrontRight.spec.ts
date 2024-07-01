
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandFrontRight from "../../src/components/MdiHandFrontRight.vue";

test("MdiHandFrontRight snapshot", () => {
  const wrapper = mount(MdiHandFrontRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
