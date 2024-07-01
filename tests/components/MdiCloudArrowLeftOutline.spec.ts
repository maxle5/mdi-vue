
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudArrowLeftOutline from "../../src/components/MdiCloudArrowLeftOutline.vue";

test("MdiCloudArrowLeftOutline snapshot", () => {
  const wrapper = mount(MdiCloudArrowLeftOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
