
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandFrontRightOutline from "../../src/components/MdiHandFrontRightOutline.vue";

test("MdiHandFrontRightOutline snapshot", () => {
  const wrapper = mount(MdiHandFrontRightOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
