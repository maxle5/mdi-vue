
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilePowerpointOutline from "../../src/components/MdiFilePowerpointOutline.vue";

test("MdiFilePowerpointOutline snapshot", () => {
  const wrapper = mount(MdiFilePowerpointOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
