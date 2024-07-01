
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTagArrowRightOutline from "../../src/components/MdiTagArrowRightOutline.vue";

test("MdiTagArrowRightOutline snapshot", () => {
  const wrapper = mount(MdiTagArrowRightOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
