
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilePowerpointBox from "../../src/components/MdiFilePowerpointBox.vue";

test("MdiFilePowerpointBox snapshot", () => {
  const wrapper = mount(MdiFilePowerpointBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
