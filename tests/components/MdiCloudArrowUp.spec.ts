
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudArrowUp from "../../src/components/MdiCloudArrowUp.vue";

test("MdiCloudArrowUp snapshot", () => {
  const wrapper = mount(MdiCloudArrowUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
