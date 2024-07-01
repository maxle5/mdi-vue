
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudArrowRight from "../../src/components/MdiCloudArrowRight.vue";

test("MdiCloudArrowRight snapshot", () => {
  const wrapper = mount(MdiCloudArrowRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
