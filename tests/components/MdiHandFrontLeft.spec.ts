
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandFrontLeft from "../../src/components/MdiHandFrontLeft.vue";

test("MdiHandFrontLeft snapshot", () => {
  const wrapper = mount(MdiHandFrontLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
