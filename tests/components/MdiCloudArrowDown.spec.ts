
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudArrowDown from "../../src/components/MdiCloudArrowDown.vue";

test("MdiCloudArrowDown snapshot", () => {
  const wrapper = mount(MdiCloudArrowDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
