
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudArrowRightOutline from "../../src/components/MdiCloudArrowRightOutline.vue";

test("MdiCloudArrowRightOutline snapshot", () => {
  const wrapper = mount(MdiCloudArrowRightOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
