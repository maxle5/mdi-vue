
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandFrontLeftOutline from "../../src/components/MdiHandFrontLeftOutline.vue";

test("MdiHandFrontLeftOutline snapshot", () => {
  const wrapper = mount(MdiHandFrontLeftOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
