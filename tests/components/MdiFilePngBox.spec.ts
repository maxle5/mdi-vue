
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilePngBox from "../../src/components/MdiFilePngBox.vue";

test("MdiFilePngBox snapshot", () => {
  const wrapper = mount(MdiFilePngBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
