
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileMoveOutline from "../../src/components/MdiFileMoveOutline.vue";

test("MdiFileMoveOutline snapshot", () => {
  const wrapper = mount(MdiFileMoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
