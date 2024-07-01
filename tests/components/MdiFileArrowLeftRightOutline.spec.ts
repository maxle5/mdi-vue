
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileArrowLeftRightOutline from "../../src/components/MdiFileArrowLeftRightOutline.vue";

test("MdiFileArrowLeftRightOutline snapshot", () => {
  const wrapper = mount(MdiFileArrowLeftRightOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
