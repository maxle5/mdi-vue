
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandBackLeftOutline from "../../src/components/MdiHandBackLeftOutline.vue";

test("MdiHandBackLeftOutline snapshot", () => {
  const wrapper = mount(MdiHandBackLeftOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
