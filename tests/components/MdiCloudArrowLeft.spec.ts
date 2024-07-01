
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudArrowLeft from "../../src/components/MdiCloudArrowLeft.vue";

test("MdiCloudArrowLeft snapshot", () => {
  const wrapper = mount(MdiCloudArrowLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
