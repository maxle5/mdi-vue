
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveEyeOutline from "../../src/components/MdiArchiveEyeOutline.vue";

test("MdiArchiveEyeOutline snapshot", () => {
  const wrapper = mount(MdiArchiveEyeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
