
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadFlashOutline from "../../src/components/MdiHeadFlashOutline.vue";

test("MdiHeadFlashOutline snapshot", () => {
  const wrapper = mount(MdiHeadFlashOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
