
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMenuRightOutline from "../../src/components/MdiMenuRightOutline.vue";

test("MdiMenuRightOutline snapshot", () => {
  const wrapper = mount(MdiMenuRightOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
