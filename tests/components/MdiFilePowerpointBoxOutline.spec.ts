
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilePowerpointBoxOutline from "../../src/components/MdiFilePowerpointBoxOutline.vue";

test("MdiFilePowerpointBoxOutline snapshot", () => {
  const wrapper = mount(MdiFilePowerpointBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
