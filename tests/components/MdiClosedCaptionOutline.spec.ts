
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClosedCaptionOutline from "../../src/components/MdiClosedCaptionOutline.vue";

test("MdiClosedCaptionOutline snapshot", () => {
  const wrapper = mount(MdiClosedCaptionOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
