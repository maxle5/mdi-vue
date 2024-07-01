
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloseCircleOutline from "../../src/components/MdiCloseCircleOutline.vue";

test("MdiCloseCircleOutline snapshot", () => {
  const wrapper = mount(MdiCloseCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
