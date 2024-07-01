
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandBackRightOffOutline from "../../src/components/MdiHandBackRightOffOutline.vue";

test("MdiHandBackRightOffOutline snapshot", () => {
  const wrapper = mount(MdiHandBackRightOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
