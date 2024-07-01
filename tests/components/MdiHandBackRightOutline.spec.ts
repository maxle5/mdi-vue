
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandBackRightOutline from "../../src/components/MdiHandBackRightOutline.vue";

test("MdiHandBackRightOutline snapshot", () => {
  const wrapper = mount(MdiHandBackRightOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
