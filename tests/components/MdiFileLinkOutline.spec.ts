
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileLinkOutline from "../../src/components/MdiFileLinkOutline.vue";

test("MdiFileLinkOutline snapshot", () => {
  const wrapper = mount(MdiFileLinkOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
